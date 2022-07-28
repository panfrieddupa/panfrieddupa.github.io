import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Homepage from './pages/Homepage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
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
                            <div className='btns btn-box'>
                            <Link to='/'>
                                <Button>Home</Button>
                            </Link>

                            <Link to='/about'>
                                <Button>About</Button>
                            </Link>

                            <Link to='/contact'>
                                <Button>Contact</Button>
                            </Link>

                            <a href='https://bekah.codes' target='blank'>
                            <Button>Personal</Button>
                            </a>

                            <a href='https://prideplus.ca' target='blank'>
                            <Button>Pride+ Club</Button>
                            </a>

                            </div>
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
