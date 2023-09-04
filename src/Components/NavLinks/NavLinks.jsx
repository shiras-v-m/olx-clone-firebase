import React from 'react'
import './NavLinks.css'
function NavLinks() {
  return (
    <div className='navLinks'>
        <div className="allCategories">
          <label className='CategoriesTxt' htmlFor="">All Categories</label>
          <span className="material-symbols-outlined downArrowIcon">expand_more</span>
        </div>
        <div className="links">
            <a href="">Cars</a>
            <a href="">MotoCycles</a>
            <a href="">Mobile Phones</a>
            <a href="">For Sales: Houses & Apartments</a>
            <a href="">Scooters</a>
            <a href="">Commercial & other Vehicles</a>
            <a href="">For Rent : Houses & Apartments</a>
        </div>
    </div>
  )
}

export default NavLinks