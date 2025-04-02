import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
const profiles = [
  {
    id: 1,
    name: "Anurag Algikar",
    image: "./Image/Anurag.jpg",
    description: "Software Engineer",
    location: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: 2,
    name: "Harsh Sawant",
    image: "./Image/Harsh.jpg",
    description: "Hardware Engineer",
    location: { lat: 34.0522, lng: -118.2437 },
  },
  {
    id: 3,
    name: "Omkar Bodkhe",
    image: "./Image/Omkar.jpg",
    description: "MERN STACK DEVELOPER",
    location: { lat: 34.0522, lng: -118.2437 },
  },
  {
    id: 4,
    name: "Suraj Divekar",
    image: "./Image/Suraj.jpg",
    description: "MERN STACK DEVELOPER",
    location: { lat: 34.0522, lng: -118.2437 },
  },
  {
    id: 4,
    name: "Gaurav Pisal",
    image: "./Image/Gaurav.jpg",
    description: "JAVA STACK DEVELOPER",
    location: { lat: 34.0522, lng: -118.2437 },
  }
];

const ProfileMapApp = () => {
    const [selectedLocation, setSelectedLocation] = usefileState(null);
    const [darkMode, setDarkMode] = useState(false);
    const [search, setSearch] = useState("");
  
    const filteredProfiles = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}>
        <div className="header">
          <h1 className="title">Profile Viewer</h1>
          <button className="btn-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <input
          type="text"
          className="search-box"
          placeholder="Search profiles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="profile-grid">
          {filteredProfiles.map((profile) => (
            <div key={profile.id} className="profile-card">
              <img
                src={profile.image}
                alt={profile.name}
                className="profile-image"
              />
              <h5 className="profile-name">{profile.name}</h5>
              <p className="profile-description">{profile.description}</p>
              <button className="btn-view" onClick={() => setSelectedLocation(profile.location)}>
                Show on Map
              </button>
            </div>
          ))}
        </div>
        {selectedLocation && (
          <div className="map-container">
            <h2>Location Map</h2>
            <MapContainer
              center={[selectedLocation.lat, selectedLocation.lng]}
              zoom={10}
              style={{ height: "400px", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
                <Popup>Selected Profile Location</Popup>
              </Marker>
            </MapContainer>
          </div>
        )}
      </div>
    );
  };
  
  export default ProfileMapApp;
  