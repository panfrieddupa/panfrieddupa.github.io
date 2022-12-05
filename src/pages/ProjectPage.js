import React, { Component } from 'react'

class ProjectPage extends Component {
    render() {
        return (
            <div>
                
                <h2 className='text-4xl text-center text-bt_light_blue font-bold pb-4'>
                    Live Projects
                </h2>
                <hr className='w-1/2 mx-auto'/>

                <div className='py-4'>

                    <div className='w-1/2'>
                        <h2 className='text-2xl text-center text-bt_pink font-semibold'>
                            VaporCast
                        </h2>

                        <div>
                        <a href='https://bekahthe.dev/angular-weather-example'>
                            <img src={require('../img/vaporcast.png')} alt='Screenshot of the VaporCast weather application' 
                            className='rounded-[25px]'>
                            </img>
                            </a>
                        </div>
                    </div>

                    <div>


                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectPage