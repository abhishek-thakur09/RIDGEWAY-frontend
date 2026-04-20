import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Event from "../data/event";

const markericon = (severity) => {
  let color = "#22c55e";

  if (severity === "high") color = "#ef4444";
  else if (severity === "medium") color = "#eab308";
  else if (severity === "info") color = "#06b6d4";

  return L.divIcon({
    className: "",
    html: `
      <div style="
        background:${color};
        width:16px;
        height:16px;
        border-radius:50%;
        border:2px solid white;
        box-shadow:0 0 10px ${color};
      "></div>
    `,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });
};

const MapPanel = () => {
  const events = Event[0].events;

  return (
    <div className="bg-[#0B1120] rounded-2xl border border-cyan-900/30 p-4 text-white">
      <h2 className="text-cyan-400 font-bold mb-4">MAP</h2>

      <div className="relative w-full h-[410px] rounded-xl bg-slate-900 overflow-hidden">
        <MapContainer
          center={[31.105, 77.174]}
          zoom={15}
          scrollWheelZoom={true}
          className="h-[440px] w-full rounded-xl"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {events.map((item) => (
            <Marker
              key={item.id}
              position={item.coordinates}
              icon={markericon(item.severity)}
            >
              <Popup>
                <strong>{item.title}</strong>
                <br />
                {item.location}
                <br />
                Severity: {item.severity}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPanel;
