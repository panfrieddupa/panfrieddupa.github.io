import { ReactComponent as MenuOpen } from './img/web_ham_menu.svg';
import { ReactComponent as MenuClose } from './img/web_close_menu.svg';
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import Homepage from './pages/Homepage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {

    const [navbar, setNavBar] = useState(false);

    return (
        <div className='bg-bt_background h-auto'>
            <Router>
                <div className='App'>
                    <nav className='header bg-bt_header_background'>
                        <div className='brand-box mx-auto flex py-6'>
                            <Link to='/' className='mx-auto flex items-center'>
                                <img className='fill-current w-24 md:w-36 flex-1'
                                    alt='BekTech Logo designed by myself'
                                    src={require('./img/bektech_logo.png')}
                                ></img>
                                <div className='brand-text flex-1 pl-4'>
                                    <h2 className='font-fira-sans text-4xl md:text-5xl font-bold text-bt_pink'>BekahThe.Dev</h2>
                                    <h3 className='font-fira-code text-xs md:text-base text-bt_light_blue'>alert('welcome to my portfolio')</h3>
                                </div>
                            </Link>
                        </div>
                        <div class='block md:hidden'>
                            <button class='flex text items-center px-4 py-2'
                                onClick={() => setNavBar(!navbar)}>
                                {navbar ? (
                                    <MenuClose />
                                ) : (
                                    <MenuOpen />
                                )}
                            </button>
                        </div>
                        <div className={`text-sm  w-full flex-grow 
                                            ${navbar ? 'block bg-bt_light_blue' : 'hidden md:block'
                            }`}>
                            <div className='md:text-md lg:text-xl md:flex md:items-center md:w-auto md:mx-auto font-fira-sans font-bold'>
                                <button className='block md:border md:flex-1 border-bt_dark_blue text-bt_dark_blue hover:text-bt_pink md:hover:bg-bt_dark_blue md:bg-bt_light_blue p-2'>
                                    <Link to='/'>
                                        Home
                                    </Link>
                                </button>
                                <button className='block md:border md:flex-1 border-bt_dark_blue text-bt_dark_blue hover:text-bt_pink md:hover:bg-bt_dark_blue md:bg-bt_light_blue p-2'>
                                    <Link to='/about' >
                                        About
                                    </Link>
                                </button>
                                <button className='block md:border md:flex-1 border-bt_dark_blue text-bt_dark_blue hover:text-bt_pink md:hover:bg-bt_dark_blue md:bg-bt_light_blue p-2'>
                                    <Link to='/contact' >
                                        Contact
                                    </Link>
                                </button>
                                <a href='https://bekah.codes' target='blank'
                                    className='block md:border md:flex-1 md:text-center border-bt_dark_blue text-bt_dark_blue hover:text-bt_pink md:hover:bg-bt_dark_blue md:bg-bt_light_blue p-2'>
                                    Blog
                                </a>
                                <a href='https://threadsthatthrive.ca' target='blank'
                                    className='block md:border md:flex-1 md:text-center border-bt_dark_blue text-bt_dark_blue hover:text-bt_pink md:hover:bg-bt_dark_blue md:bg-bt_light_blue p-2'>
                                    Threads That Thrive
                                </a>
                            </div>
                        </div>

                    </nav>


                    <div className='page-container p-6 bg-white bg-opacity-5 md:mx-6'>
                        <Routes>
                            <Route exact path='/' element={< Homepage />}></Route>
                            <Route exact path='/about' element={< AboutPage />}></Route>
                            <Route exact path='/contact' element={< ContactPage />}></Route>
                        </Routes>
                    </div>
                </div>

                <footer className='bg-bt_light_blue px-4 pb-6 md:px-12 md:pb-8 '>
                    <div className='mb-0 font-fira-code'>
                        <div className='h-36 md:h-52 text-sm lg:text-md md:text-md flex items-center md:justify-between'>
                            <div className=''>
                                <Link to='/'>
                                    <img
                                        className='logo-img fill-current w-20 md:w-32'
                                        alt='Threads That Thrive logo'
                                        src={require('./img/bektech_logo.png')}
                                    ></img>
                                </Link>
                            </div>
                            <button className=' border-bt_dark_blue text-bt_dark_blue hover:text-bt_pink p-2'>
                                <Link to='/'>
                                    Home
                                </Link>
                            </button>
                            <button className=' border-bt_dark_blue text-bt_dark_blue hover:text-bt_pink p-2'>
                                <Link to='/about' >
                                    About
                                </Link>
                            </button>
                            <button className=' border-bt_dark_blue text-bt_dark_blue hover:text-bt_pink p-2'>
                                <Link to='/contact' >
                                    Contact
                                </Link>
                            </button>
                            <button href='https://bekah.codes' target='blank'
                                className=' border-bt_dark_blue text-bt_dark_blue hover:text-bt_pink p-2'>
                                Blog
                            </button>
                            <button href='https://threadsthatthrive.ca' target='blank'
                                className=' border-bt_dark_blue text-bt_dark_blue hover:text-bt_pink p-2'>
                                Threads That Thrive
                            </button>
                        </div>
                    </div>
                    <hr class='mb-2 border-bt_dark_blue mx-auto' />
                    <span class='block text-sm text-bt_dark_blue text-center'>©2022 <Link to='/' className='hover:text-bt_dark_blue'>Rebekah Bulych™</Link>. All Rights Reserved.
                    </span>
                </footer>

            </Router>
        </div>
    )

}

export default App;
