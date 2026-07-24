import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Interactive office map. Light CARTO basemap (no API key) toned to the site,
// with a marker in the active business colour. Wheel-zoom stays off until the
// map is focused/clicked so it never hijacks page scroll.
export default function OfficeMap({
  coords,
  label,
  business = "concept",
  className = "",
}) {
  const elementRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current || mapRef.current) return undefined;
    const { lat, lng, zoom = 14 } = coords;

    const map = L.map(elementRef.current, {
      center: [lat, lng],
      zoom,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true,
    });
    mapRef.current = map;

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        subdomains: "abcd",
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      },
    ).addTo(map);

    const icon = L.divIcon({
      className: "office-marker",
      html:
        '<span class="office-marker__pulse"></span>' +
        '<span class="office-marker__dot"></span>',
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });
    L.marker([lat, lng], { icon, keyboard: false }).addTo(map);

    const enable = () => map.scrollWheelZoom.enable();
    const disable = () => map.scrollWheelZoom.disable();
    map.on("focus", enable);
    map.on("blur", disable);

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [coords]);

  return (
    <div className={`office-map ${className}`.trim()} data-site={business}>
      <div
        ref={elementRef}
        className="office-map__canvas"
        role="img"
        aria-label={`Map showing ${label}`}
      />
      {coords.area ? (
        <span className="office-map__label">
          {coords.area} · {coords.lat.toFixed(4)}° N, {coords.lng.toFixed(4)}° E
        </span>
      ) : null}
    </div>
  );
}
