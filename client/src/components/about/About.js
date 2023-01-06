import React from 'react'; 
import '../../styles/App.css';
import Bio from './Bio';
import Favorites from './Favorites'

const About = () => {
  return (
    <div className="box">
      <Bio />
      <Favorites />

    </div>
    
  ) 
}

export default About;