import React from 'react';
import conflict from '../../images/a_conflict_of_visions.jpg'; 
import ubik from '../../images/ubik.jpg';
import kool_aid from '../../images/electric_kool_aid.jpg';
import confederacy from '../../images/confederacy_of_dunces.jpg';
import work from '../../images/when_work_disappears.jpg';
import righteous from '../../images/a_righteous_mind.jpg';
import adaptation from '../../images/adaptation.jpg';
import boogie_nights from '../../images/boogie_nights.png';
import heat from '../../images/heat.jpg';
import south_park from '../../images/south_park.jpg';
import wire from '../../images/wire.jpeg';
import simpsons from '../../images/the_simpsons.jpg';
import lateralus from '../../images/lateralus.jpeg';
import mezzanine from '../../images/mezzanine.jpg';
import cross from '../../images/cross.jpg';
import black_on_both_sides from '../../images/black_on_both_sides.jpg';
import leviathan from '../../images/leviathan-artwork.jpg';


const Favorites = () => {
  return (
    <div>
      <div className="favorites">
        <h1>Favorites Lists</h1>
        <p>Believe it or not, I actually enjoy doing other things outside of programming. Here are a few other of my favorite things.</p>
        <br />
        <div className="lists">
          <i className="book icon"></i>
          <h2>Books</h2>
          <div className="favorites-lists">
            <div className="list-sections">
              <h3>Non-Fiction</h3>
              <ol>
                <img  alt="conflict of visions - Sowell" className="book-img" src={conflict} />
                <li className="list-item"><strong>Conflict of Visions</strong> by Thomas Sowell</li>
                <img alt="righteous mind - Haidt" className="book-img" src={righteous} />
                <li className="list-item"><strong>The Righteous Mind</strong> by Jonathon Haidt</li>
                <img alt="When Work Disappears" className="book-img" src={work} />
                <li className="list-item"><strong>When Work Disappears</strong> by William Julius Wilson</li>
              </ol>
            </div>
            <div className="list-sections">
              <h3>Fiction</h3>
              <ol>
                <img alt="Confederacy of Dunces" className="book-img" src={confederacy} />
                <li className="list-item"><strong>Confederacy of Dunces</strong> by John Kennedy Toole</li>
                <img alt="The Electric Kool-Aid Acid Test" className="book-img" src={kool_aid} />
                <li className="list-item"><strong>The Electric Kool-Aid Acid Test</strong> by Tom Wolfe</li>
                <img alt="Ubik" className="book-img" src={ubik} />
                <li className="list-item"><strong>Ubik</strong> by Philip K. Dick</li>
              </ol>
            </div>
          </div>
          <div className="section"></div>
          <br />
        </div>
        <div className="lists">
          <i className="film icon"></i>
          <h2>Film</h2>
          <div className="favorites-lists">
            <div className="list-sections">
              <h3>Movies</h3>
              <ol>
              <img alt="Heat" className="book-img" src={heat} />
                <li className="list-item"><strong>Heat</strong> <br/>Written and Directed by Michael Mann</li>
                <img alt="Adaptation." className="book-img" src={adaptation} />
                <li className="list-item"><strong>Adaptation.</strong> <br/>Written by Charlie Kaufman and Directed by Spike Jonze</li>
                <img alt="Boogie Nights" className="book-img" src={boogie_nights} />
                <li className="list-item"><strong>Boogie Nights</strong> <br/>Written and Directed by Paul Thomas Anderson</li>
              </ol>
            </div>
            <div className="list-sections">
              <h3>TV Shows</h3>
              <ol>
                <img alt="The Simpsons" className="book-img" src={simpsons} />
                <li className="list-item"><strong>The Simpsons</strong> <br/>Created by Matt Groening, Sam Simon and James L. Brooks</li>
                <img alt="The Wire" className="book-img" src={wire} />
                <li className="list-item"><strong>The Wire</strong> <br/>Created by David Simon</li>
                <img alt="South Park" className="book-img" src={south_park} />
                <li className="list-item"><strong>South Park</strong> <br/>Created by Trey Parker and Matt Stone</li>
              </ol>
            </div>
          </div>
          <div className="section"></div>
          <br />
        </div>
      </div>
      <div className="lists">
        <i className="music icon"></i>
        <h2>Music</h2>
        <div className="list-sections music">
          <ol>
            <img alt="Lateralus" className="album-img" src={lateralus} />
            <li><strong>Lateralus</strong> by Tool</li>
            <img alt="Cross" className="album-img" src={cross} />
            <li><strong>Cross</strong> by Justice</li>
            <img alt="leviathan" className="album-img" src={leviathan} />
            <li><strong>Leviathan</strong> by Mastodon</li>
            <img alt="Mezzanine" className="album-img" src={mezzanine} />
            <li><strong>Mezzanine</strong> by Massive Attack</li>
            <img alt="Black on Both Sides" className="album-img" src={black_on_both_sides} />
            <li><strong>Black on Both Sides</strong> by Mos Def</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Favorites;