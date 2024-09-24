import React from 'react'
import { Link } from 'react-router-dom'; // Import Link for navigation


const AboutUs = () => {

  
  return (
    <>
  <div className='about'>
        {/* Use Link to navigate to the About page */}
        <Link to="/about" className="btn btn-primary">
          Go to About
        </Link>
      </div>
    </>
  )
}

export default AboutUs
