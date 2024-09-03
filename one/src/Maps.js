import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import karunyacarparking from 'C:/Desktop/projects/sih_t1/one/src/imgs/karunycarparking.png'; 

// Fix for default marker icon issues in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapComponent = () => {
  const mapboxToken = "sk.eyJ1IjoianVzdGluYXNhbSIsImEiOiJjbTBtdTJrMzkwNjJmMm1zZGd5bm9qNTB0In0.SOfcVnQP3YucYeaPbk-eVA"; // Replace with your Mapbox access token

  return (
    <MapContainer center={[10.9374551, 76.7443403]} zoom={15} style={{ height: '100%', width: '100%' }}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Mapbox Terrain">
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`}
            attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
          />
        </LayersControl.BaseLayer>
      </LayersControl>

      <Marker position={[10.9374551, 76.7443403]}>
        <Popup>
          <h3>Karunya Car Parking</h3>
          <img src={karunyacarparking} alt="Karunya Car Parking" style={{ width: '200px', height: '150px' }} />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;

// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import karunyacarparking from 'C:/Desktop/projects/sih_t1/one/src/imgs/karunycarparking.png'; 

// // Fix for default marker icon issues in Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
// });

// const MapComponent = () => {
//   return (
//     <MapContainer center={[10.9374551, 76.7443403]} zoom={16} style={{ height: '100%', width: '100%' }}>
//       <LayersControl position="topright">
//         <LayersControl.BaseLayer checked name="OpenStreetMap">
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           />
//         </LayersControl.BaseLayer>
//         <LayersControl.BaseLayer name="OpenTopoMap">
//   <TileLayer
//     url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
//     attribution='&copy; <a href="https://www.opentopomap.org/">OpenTopoMap</a> contributors'
//   />
// </LayersControl.BaseLayer>

//       </LayersControl>

//       <Marker position={[10.9374551, 76.7443403]}>
//         <Popup>
//           <h3>Karunya Car Parking</h3>
//           <img src={karunyacarparking} alt="Karunya Car Parking" style={{ width: '200px', height: '150px' }} />
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// };

// export default MapComponent;
