import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'; 
import Location from './components/pages/Location'; 
import Athletes from './components/pages/Athletes'; 
import Contest from './components/pages/Contest'; 
import Gallery from './components/pages/Gallery';
import Hero from './components/Hero';




function App() {
  return (
    <>
    
    <Router>
    <Navigationbar />
    <Hero />
    
      <Switch> 
          <Route exact path='/' component={Home} />
          <Route path='/Home' component={Home} />
          <Route path='/Location' component={Location} />
          <Route path='/Athletes' component={Athletes} />
          <Route path='/Gallery' component={Gallery} />
          <Route path='/Contest' component={Contest} />
          
          
      </Switch>
     
      
      
      
      <Footer />
    </Router>
   
    </>
  );
}

export default App;
