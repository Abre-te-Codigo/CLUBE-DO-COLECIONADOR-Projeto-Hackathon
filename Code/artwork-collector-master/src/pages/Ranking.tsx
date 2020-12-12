import React, { useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import imgLogo from '../images/logo.png'
import api from '../services/api';
import { Background, Content } from '../styles/pages/ranking';

interface User {
  charge: string;
  _id: number;
  username: string;
  name: string;
  lastname: string;
  email: string;
}

function Ranking(){
  // const params = useParams<ArtworkParams>();
  const [users, setUsers] = useState<User[]>([]);
  // const [activeImageIndex, setActiveImageIndex] = useState(0);
  

    useEffect(() => {
        api.get(`users`).then(response => {
            setUsers(response.data);
        });
    }, []);

    if(!users) {
      return <p>Loading...</p>;
    }
    
  return (
    <Background>
      <Content>
        
        <main>
          <header className="artwork-details">
            <img src={imgLogo} alt="Clube do Colecionador"/>
            <Link to="/app" className="vr-artwork vr-artwork-desktop">
              <FiArrowLeft size={ 32 } color="#fff" />
            </Link>
          </header>
            <hr/>
          <div className="users">
            
            {users.map((user, index) => {
            return (
              <>
              {user.name}
              </>
            )
           })}
          
          </div>
          
        </main>
      </Content>
    </Background>
)}

export default Ranking;