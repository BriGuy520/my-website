import React from 'react';
import '../styles/Music.css';



const Music = () => {
  return (
    <div className='playlist'>
      <iframe width="100%" height="95%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3468921&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" title="soundcloudPlayer"></iframe>
    </div>
  )
}

export default Music;