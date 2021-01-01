import React from 'react';

export default function LayOut(props) {
  return (
    <header className='container'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className="navbar-brand" href="/home">Rodney Matambo's Official Website</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href={`/${props.name}`}><span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/past-projects">Past Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/current-projects">Current Projects & Future Projects</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Previous Projects
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/home">React Express</a>
                <a className="dropdown-item" href="/about">React Sinatra</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/home">Something else here</a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <div class="alert alert-info sm-12 lg-12" role="alert">
        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
      </div>
  </header>
    )
}