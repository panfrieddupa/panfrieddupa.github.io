import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap'
import Homepage from './pages/Homepage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Portfolio.css'

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className='App'>
                        <div className='header'>
                            <div className='header-box'>
                                <div className='brand-box'>
                                    <img className='logo-img' alt='BekTech Logo designed by myself' src={require('./img/BekTech_nowords_1500px.png')}></img>
                                    <div className='brand-text'>
                                        <h2>BekahThe.Dev</h2>
                                        <h3>alert('welcome to my portfolio')</h3>
                                    </div>
                                </div>

                                <ButtonToolbar aria-label='Toolbar with buttons' className='row ms-5 me-5'>
                                    <ButtonGroup aria-label='Button Group' className='d-flex col-sm-12'>
                                        <Link to='/' className='col-1 btn btn-lg btn-block'>
                                            <Button>
                                                Home
                                            </Button>
                                        </Link>

                                        <Link to='/about' className='col-1 btn btn-lg btn-block'>
                                            <Button>
                                                About
                                            </Button>
                                        </Link>

                                        <Link to='/contact' className='col-1 btn btn-lg btn-block'>
                                            <Button >
                                                Contact
                                            </Button>

                                        </Link>

                                        <a href='https://bekah.codes' target='blank' className='col-1 btn btn-lg btn-block'>
                                            <Button>
                                                Personal
                                            </Button>
                                        </a>

                                        <a href='https://prideplus.ca' target='blank' className='col-1 btn btn-lg btn-block'>
                                            <Button>
                                                Pride+ Club
                                            </Button>
                                        </a>
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </div>
                        </div>

                        <div className='page-container'>
                            <Routes>
                                <Route exact path='/' element={< Homepage />}></Route>
                                <Route exact path='/about' element={< AboutPage />}></Route>
                                <Route exact path='/contact' element={< ContactPage />}></Route>
                            </Routes>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;
