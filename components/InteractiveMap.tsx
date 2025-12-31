'use client';

interface InteractiveMapProps {
  latitude: number;
  longitude: number;
  address?: string;
}

export default function InteractiveMap({ latitude, longitude }: InteractiveMapProps) {
  // Crear la URL para Google Maps iframe
  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <iframe
        src={mapUrl}
        width="100%"
        height="256"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa de la ubicación de Lunaris"
        className="rounded-lg"
      />
    </div>
  );
}
