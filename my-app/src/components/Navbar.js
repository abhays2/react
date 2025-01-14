import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a  className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">{props.about}</a>
            </li>            
          </ul>
          <div className="mx-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <label htmlFor="exampleColorInput" className="form-check-label">Color picker</label>
            <input type="color" className="form-control" id="exampleColorInput" onChange={props.changeBackColor} value="#563d7c" title="Choose your color"/>
          </div>          
          <div className={`form-check form-switch text-${props.mode==='light'?'black':'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enabled {props.mode} Mode </label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set Title Here',
    about: 'About us'
}



