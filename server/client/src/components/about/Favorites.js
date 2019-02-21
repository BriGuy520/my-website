import React from 'react'; 

const Favorites = () => {
  return (
    <div>
      <div className="books">
        <h1>Favorites Lists</h1>
        <p>Believe it or not, I actually enjoy other things outside of coding. Here are a few other things I like.</p>
        <div className="section"></div>
        <br />
        <div className="lists">
          <h2>Books</h2>
          <h3>Non-Fiction</h3>
          <ol>
            <li><strong>Conflict of Visions</strong> by Thomas Sowell</li>
            <li><strong>The Righteous Mind</strong> by Jonathon Haidt</li>
            <li><strong>When Work Disappears</strong> by William Julius Wilson</li>
          </ol>
          <h3>Fiction</h3>
          <ol>
            <li><strong>Confederacy of Dunces</strong> by John Kennedy O'Toole</li>
            <li><strong>The Electric Kool-Aid Acid Test</strong> by Tom Wolfe</li>
            <li><strong>Ubik</strong> by Philip K. Dick</li>
          </ol>
          <div className="section"></div>
          <br />
        </div>
      </div>
      <div className="lists">
        <h2>Movies</h2>
        <ol>
          <li><strong>Heat</strong> Written and Directed by Michael Mann</li>
          <li><strong>Adaptation.</strong> Written by Charlie Kaufman Directed by Spike Jonze</li>
          <li><strong>Boogie Nights</strong> Written and Directed by Paul Thomas Anderson</li>
        </ol>
        <div className="section"></div>
          <br />
      </div>
      <div className="lists">
        <h2>TV Shows</h2>
        <ol>
          <li><strong>The Simpsons</strong> Written and Directed by Michael Mann</li>
          <li><strong>The Wire</strong> Written by Charlie Kaufman Directed by Spike Jonze</li>
          <li><strong>South Park</strong> Written and Directed by Paul Thomas Anderson</li>
        </ol>
      </div>
    </div>
  )
}

export default Favorites;