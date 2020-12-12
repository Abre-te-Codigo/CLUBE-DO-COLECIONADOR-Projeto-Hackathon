import React, { useEffect, useState } from "react";
// import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo, FiArrowLeft } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";

import { useParams } from 'react-router-dom';

import '../styles/pages/artwork.css';
import Sidebar from "../components/Sidebar";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";

interface Artwork {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: Array<{
    url: string;
    id: number;
  }>
}

interface ArtworkParams {
  id: string;
}

export default function Artwork() {

  const params = useParams<ArtworkParams>();
  const [artwork, setArtwork] = useState<Artwork>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

    // useEffect(() => {
    //     api.get(`artworks/${params.id}`).then(response => {
    //         setArtwork(response.data);
    //     });
    // }, [params.id]);

    if(!artwork) {
      return <p>Loading...</p>;
    }
    
  return (
    <div id="page-artwork">
      <Sidebar />

      <main>
        <div className="artwork-details">
          <img src={artwork.images[activeImageIndex].url} alt={artwork.name} />

          <div className="images">
            { artwork.images.map( (image, index) => {
              return (
                <button 
                  key={image.id} 
                  className={activeImageIndex === index ? 'active':''} 
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img src={image.url} alt={artwork.name} />
                </button>
              )
            })}
            
          </div>
          
          <div className="artwork-details-content">
            <h1>{artwork.name}</h1>
            <p>{artwork.about}</p>

            <div className="map-container">
              <Map 
                center={[artwork.latitude, artwork.longitude]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker interactive={false} icon={mapIcon} position={[artwork.latitude, artwork.longitude]} />
              </Map>

              <footer>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${artwork.latitude},${artwork.longitude}`} >Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{artwork.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                { artwork.opening_hours }
              </div>
              { artwork.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div>
              ) : (
                <div className="open-on-weekends not-open">
                <FiInfo size={32} color="#FF669D" />
                Não atendemos <br />
                aos fins de semana
              </div>
              ) }
              
            </div>

            {/* <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button> */}
          </div>
        </div>
      </main>
    </div>
  );
}