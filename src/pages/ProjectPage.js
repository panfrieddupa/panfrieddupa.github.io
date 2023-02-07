import React, { Component } from 'react'

class ProjectPage extends Component {
    render() {
        return (
            <div>

                <h2 className='text-4xl text-center text-bt_light_blue font-bold pb-4'>
                    Live Projects
                </h2>
                <hr className='w-1/2 mx-auto' />

                <div className='py-4 flex flex-wrap'>

                    <div className='w-1/2 p-8'>
                        <h2 className='text-3xl pb-2 text-center text-bt_pink font-semibold'>
                            VaporCast
                        </h2>

                        <div>
                            <a href='https://bekahthe.dev/angular-weather-example'>
                                <img src={require('../img/projectimages/vaporcast.png')} alt='Screenshot of the VaporCast weather application'
                                    className='rounded-[25px]'>
                                </img>
                            </a>
                        </div>
                    </div>

                    <div className='w-1/2 p-8'>
                        <h2 className='text-3xl pb-2 text-center text-bt_pink font-semibold'>
                            Bekah.Codes
                        </h2>

                        <div>
                            <a href='https://bekah.codes' target='blank' className='text-lg italic hover:text-bt_pink'>
                                <img src={require('../img/projectimages/bekahcodes.png')} alt='Screenshot of the bekah codes blog homepage'
                                    className='rounded-[25px]'>
                                </img>
                            </a>
                        </div>
                    </div>

                    <div className='w-1/2 p-8'>
                        <h2 className='text-3xl pb-2 text-center text-bt_pink font-semibold'>
                            Threads That Thrive Website
                        </h2>

                        <div>
                            <a href='https://threadsthatthrive.ca' target='blank' className='text-lg italic hover:text-bt_pink'>
                                <img src={require('../img/projectimages/threads.png')} alt='Screenshot of the Threads That Thrive homepage'
                                    className='rounded-[25px]'>
                                </img>
                            </a>
                        </div>
                    </div>

                    <div className='w-1/2 p-8'>
                        <h2 className='text-3xl pb-2 text-center text-bt_pink font-semibold'>
                            SAITSA* Pride+ Club Website
                        </h2>
                        <div>
                            <a href='https://prideplus.ca' target='blank' className='text-lg italic hover:text-bt_pink'>
                                <img src={require('../img/projectimages/prideplus.png')} alt='Screenshot of the Pride Plus Club homepage'
                                    className='rounded-[25px]'>
                                </img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectPage