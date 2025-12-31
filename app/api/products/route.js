// app/api/products/route.js
import { NextResponse } from "next/server";

const REQUIRED_HEADERS = ["nombre", "precio", "stock", "activo"];

export async function GET(request) {
  const SHEET_ID = process.env.GOOGLE_SHEETS_ID;
  const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;

  if (!SHEET_ID || !API_KEY) {
    return NextResponse.json(
      { success: false, data: [], error: "Configuration error" },
      { status: 500 }
    );
  }

  // Obtener parámetros de paginación
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '12');
  const startIndex = (page - 1) * limit;

  const RANGE = "Productos!A1:Z1000";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

  try {
    const res = await fetch(url, {
      // Sin cache en desarrollo - cambios inmediatos
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error(`Google Sheets API error: ${res.status}`);
    }

    const data = await res.json();

    if (!data.values || data.values.length < 2) {
      return NextResponse.json(buildResponse(getFallbackProducts(), false, 1, 0, 12));
    }

    const [rawHeaders, ...rows] = data.values;
    const headers = rawHeaders.map(h => h.toLowerCase().trim());

    console.log(`📊 Found ${rows.length} rows with headers:`, headers);

    const hasRequiredHeaders = REQUIRED_HEADERS.every(h =>
      headers.includes(h)
    );

    if (!hasRequiredHeaders) {
      console.error("❌ Missing required headers");
      return NextResponse.json(buildResponse(getFallbackProducts(), false, 1, 0, 12));
    }

    const allProducts = rows
      .map((row, index) => {
        const product = Object.fromEntries(
          headers.map((h, i) => [h, row[i]?.trim() || ""])
        );

        const price = Number(product.precio);
        const stock = Number(product.stock);

        // SOLO mostrar si activo = "Si"
        const activeValue = (product.activo || "")
          .toString()
          .trim()
          .toLowerCase();
        const active = activeValue === "si";

        console.log(`🔍 Row ${index + 1}: "${product.nombre}" - activo: "${product.activo}" -> active: ${active} - price: ${price} - stock: ${stock}`);

        // Si no está activo, no incluir
        if (!active) {
          console.log(`❌ Skipping inactive product: ${product.nombre}`);
          return null;
        }

        const result = {
          id: product.id || `product-${index + 1}`,
          name: product.nombre || "Producto sin nombre",
          description: product.descripcion || "",
          price: price || 0,
          stock: stock || 0,
          category: product.categoria || "General",
          image: product.imagen_url || "/images/placeholder.jpg",
          featured:
            product.destacado === "TRUE" ||
            product.destacado === "true",
          active
        };

        console.log(`✅ Included active product: ${result.name}`);
        return result;
      })
      .filter(p => p !== null); // Filtrar nulos y productos inactivos

    // Paginación
    const totalProducts = allProducts.length;
    const totalPages = Math.ceil(totalProducts / limit);
    const paginatedProducts = allProducts.slice(startIndex, startIndex + limit);

    console.log(`📈 Pagination: page ${page} of ${totalPages}, showing ${paginatedProducts.length} of ${totalProducts} products`);

    return NextResponse.json(buildResponse(paginatedProducts, true, page, totalProducts, totalPages, limit));

  } catch (error) {
    console.error("❌ Error fetching products:", error);
    return NextResponse.json(buildResponse(getFallbackProducts(), false, 1, 0, 12));
  }
}

/* ---------- helpers ---------- */

function buildResponse(products, success = true, page = 1, total = 0, totalPages = 1, limit = 12) {
  console.log("📤 API Response:", {
    success,
    page,
    total,
    totalPages,
    limit,
    productCount: products.length,
    products: products.map(p => ({ name: p.name, active: p.active }))
  });
  
  return {
    success,
    data: products,
    pagination: {
      page,
      total,
      totalPages,
      limit,
      hasNext: page < totalPages,
      hasPrev: page > 1
    },
    lastUpdated: new Date().toISOString()
  };
}

function getFallbackProducts() {
  return [
    {
      id: "fallback-1",
      name: "Producto no disponible",
      description: "",
      price: 0,
      stock: 0,
      category: "General",
      image: "/images/placeholder.jpg",
      active: true,
      featured: false
    }
  ];
}
