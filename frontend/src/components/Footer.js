import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className='footer' style={{ backgroundColor: "#3F51B5" }}>
          © {year}
    </div>
  )
}

export default Footer
