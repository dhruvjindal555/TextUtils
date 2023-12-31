import React from 'react'
// import { Link } from 'react-router-dom'

export default function Navbar({ title,mode,toggleMode,setColor}) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{title}</Link> */}
        <a className="navbar-brand" href="#">{title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about">About</Link> */}
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
          <div className='d-flex justify-content-evenly '>
              <div> 
                <button className='pointer rounded-circle mx-1 ' onClick={()=>{setColor("red")}}  style={{color:"red",height:"30px",width:"30px",backgroundColor:'red'}}></button>
              </div>
              <div> 
                <button className='pointer rounded-circle mx-1'  onClick={()=>{setColor("green")}} style={{color:"green",height:"30px",width:"30px",backgroundColor:'green'}}></button>
              </div>
              <div> 
                <button className='pointer rounded-circle mx-1'  onClick={()=>{setColor("blue")}} style={{color:"blue",height:"30px",width:"30px",backgroundColor:'blue'}}></button>
              </div>
            
          </div>
          <form className="d-flex" role="search">

            <div className="form-check form-switch">
              <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable dark Mode</label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  )
}
