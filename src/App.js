import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import { Button } from 'bootstrap'
import Homepage from './Homepage'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="header">
                        <Link to="/">
                            <Button>Home</Button>
                        </Link>

                        <Link to="/about">
                            <Button>About Us</Button>
                        </Link>

                        <Link to="/contact">
                            <Button>Contact Us</Button>
                        </Link>

                        <Routes>
                            <Route exact path='/' element={< Homepage />}></Route>
                            <Route exact path='/about' element={< AboutPage />}></Route>
                            <Route exact path='/contact' element={< ContactPage />}></Route>
                        </Routes>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;
