import React from 'react'; 

const Favorites = () => {
  return (
    <div className="books">
      <h1>Favorites Lists</h1>
      <div className="lists">
      <div>
        <h3>Books: Non-Fiction</h3>
        <ol>
          <li>Conflict of Visions by Thomas Sowell</li>
          <li>The Righteous Mind by Jonathon Haidt</li>
          <li>When Work Disappears by William Julius Wilson</li>
        </ol>
      </div>
      <div>
        <h3>Books: Fiction</h3>
        <ol>
          <li>Confederacy of Dunces by John Kennedy O'Toole</li>
          <li>The Electric Kool-Aid Acid Test by Tom Wolfe</li>
          <li>Ubik by Philip K. Dick</li>
        </ol>
      </div>
      </div>
    </div>
  )
}

export default Favorites;