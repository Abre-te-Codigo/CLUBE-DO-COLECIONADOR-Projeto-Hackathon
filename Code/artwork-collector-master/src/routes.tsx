import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
// import CreateArtwork from './pages/CreateArtwork';
// import Artwork from './pages/Artwork';
import ArtworksMap from './pages/ArtworksMap';
import Ranking from './pages/Ranking';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={ArtworksMap} />
        <Route path="/ranking" component={Ranking} />
        
        {/* <Route path="/arts/create" component={CreateArtwork} /> */}
        {/* <Route path="/arts/:id" component={Artwork} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;