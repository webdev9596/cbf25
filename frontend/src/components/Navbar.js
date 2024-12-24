import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const goToUrl = (p = '') => {
    navigate(`/${p}`)
    generateCustomURL(p)
  }
  function generateCustomURL(p = '') {
    const showU = `${p.length <= 0 ? '/codebuddy' : `/codebuddy/${p}`}`;
    window.history.pushState({}, '', showU);
  }

  useEffect(() => {
    generateCustomURL('')
  }, [])
  return (
    <div className='nav' style={{ backgroundColor: "#3F51B5" }}>
      <span className="logo">CodeBuddy</span>
      <ul className='liitems'>
        <li onClick={() => goToUrl('')}>JavaScript</li>
        <li onClick={() => goToUrl('TypeScript')}>TypeScript</li>
        <li onClick={() => goToUrl('React')}>React</li>
        {/* <li>Redux</li>
        <li>Git</li> */}
      </ul>
    </div>
  )
}

export default Navbar
