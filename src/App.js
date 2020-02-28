import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 
        return (
         
                <div>
                  <title>winterproject</title>
                  <meta charSet="utf-8" />
                  <meta name="viewport" content="width=device-width" />
                  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
                  <style dangerouslySetInnerHTML={{__html: "\n  .fakeimg {\n    height: 200px;\n    background: #aaa;\n  }\n  " }} />
                  <div className="jumbotron text-center" style={{marginBottom: 0}}>
                    <h1>TECHFEST 2019</h1>
                    <p>Another edition to the much awaited techfest, with much more exciting events and prizes</p> 
                  </div>
                  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <a className="navbar-brand" href="#">HOME</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link" href="#">EVENTS</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">TEAM</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">CONTACT US</a>
                        </li>    
                      </ul>
                    </div>  
                  </nav>
                  <div className="container" style={{marginTop: '30px'}}>
                    <div className="row">
                      <div className="col-sm-4">
                        <h2>About the techfest</h2>
                        <h5>Event name</h5>
                        <div className="fakeimg">image</div>
                        <p>Some text about the event</p>
                        <h3>QUICKLINKS</h3>
                        <p>Come and be a part of the events</p>
                        <ul className="nav nav-pills flex-column">
                          <li className="nav-item">
                            <a className="nav-link active" href="#">Register</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Winners</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Upcoming Events</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link disabled" href="#">Schedule</a>
                          </li>
                        </ul>
                        <hr className="d-sm-none" />
                      </div>
                      <div className="col-sm-8">
                        <h2>Team Aavishkar</h2>
                        <h5>This time, 5 biggest tech clubs of nitdgp come together to make Aarohan a grand success.</h5>
                        <div className="fakeimg">Image</div>
                        <p>CCA, GLUG, SAE, MNTC, RECursion - TEAM AAVISHKAR</p>
                        <p>Dates- 7th Feb - 10th Feb</p>
                        <br />
                        <h2>Eminent Speakers</h2>
                        <h5>Eminent speakers were invited to share their inspirational stories</h5>
                        <div className="fakeimg">Image</div>
                        <p>Some text</p>
                        <p>x</p>
                      </div>
                    </div>
                  </div>
                  <div className="jumbotron text-center" style={{marginBottom: 0}}>
                    <p>Footer</p>
                  </div>
                </div>
         

        );
      }
  

    
 


export default App;
