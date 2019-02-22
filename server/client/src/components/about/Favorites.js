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


const Favorites = () => {
  return (
    <div>
      <div className="favorites">
        <h1>Favorites Lists</h1>
        <p>Believe it or not, I actually enjoy other things outside of coding. Here are a few other things I like.</p>
        <div className="section"></div>
        <br />
        <div className="lists">
          <i class="book icon"></i>
          <h2>Books</h2>
          <div className="favorites-lists">
            <div className="list-sections">
              <h3>Non-Fiction</h3>
              <ol>
                <img className="book-img" src={conflict} />
                <li><strong>Conflict of Visions</strong> by Thomas Sowell</li>
                <img className="book-img" src={righteous} />
                <li><strong>The Righteous Mind</strong> by Jonathon Haidt</li>
                <img className="book-img" src={work} />
                <li><strong>When Work Disappears</strong> by William Julius Wilson</li>
              </ol>
            </div>
            <div className="list-sections">
              <h3>Fiction</h3>
              <ol>
                <img className="book-img" src={confederacy} />
                <li><strong>Confederacy of Dunces</strong> by John Kennedy O'Toole</li>
                <img className="book-img" src={kool_aid} />
                <li><strong>The Electric Kool-Aid Acid Test</strong> by Tom Wolfe</li>
                <img className="book-img" src={ubik} />
                <li><strong>Ubik</strong> by Philip K. Dick</li>
              </ol>
            </div>
          </div>
          <div className="section"></div>
          <br />
        </div>
        <div className="lists">
          <i class="film icon"></i>
          <h2>Film</h2>
          <div className="favorites-lists">
            <div className="list-sections">
              <h3>Movies</h3>
              <ol>
              <img className="book-img" src={heat} />
                <li><strong>Heat</strong> <br/>Written and Directed by Michael Mann</li>
                <img className="book-img" src={adaptation} />
                <li><strong>Adaptation.</strong> <br/>Written by Charlie Kaufman and Directed by Spike Jonze</li>
                <img className="book-img" src={boogie_nights} />
                <li><strong>Boogie Nights</strong> <br/>Written and Directed by Paul Thomas Anderson</li>
              </ol>
            </div>
            <div className="list-sections">
              <h3>TV Shows</h3>
              <ol>
                <img className="book-img" src={simpsons} />
                <li><strong>The Simpsons</strong> <br/>Created by Matt Groening, Sam Simon and James L. Brooks</li>
                <img className="book-img" src={wire} />
                <li><strong>The Wire</strong> <br/>Created by David Simon</li>
                <img className="book-img" src={south_park} />
                <li><strong>South Park</strong> <br/>Created by Trey Parker and Matt Stone</li>
              </ol>
            </div>
          </div>
          <div className="section"></div>
          <br />
        </div>
      </div>
      <div className="lists">
        <i class="music icon"></i>
        <h2>Music</h2>
        <div className="list-sections">
          <ol>
            <li><strong>Lateralus</strong> by Tool</li>
            <li><strong>Cross</strong> by Justice</li>
            <li><strong>Mezanine</strong> by Massive Attack</li>
            <li><strong>Black on Both Sides</strong> by Mos Def</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Favorites;