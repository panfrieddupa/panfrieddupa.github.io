import React from "react"
import AboutCards from "./AboutCards"

function IDEList() {

    const ide = [
        {
            name: 'Visual Studio 2019',
            img: 'https://i.imgur.com/d9oZT5P.png',
            alt: 'Visual Studio 2019'
        },
        {
            name: 'Eclipse',
            img: 'https://i.imgur.com/PjgCzE7.png',
            alt: 'Eclipse'
        },
        {
            name: 'IntelliJ',
            img: 'https://i.imgur.com/V2eVrkQ.png',
            alt: 'IntelliJ'
        },
        {
            name: 'NetBeans',
            img: 'https://i.imgur.com/GwbDVNQ.png',
            alt: 'NetBeans'
        },
        {
            name: 'BlueJ',
            img: 'https://i.imgur.com/6WE9jvd.png',
            alt: 'BlueJ'
        }
    ]

    const ideMap = ide.map(ides => <AboutCards ides = {ides} />)

    return <div className='inline-block-display'>
        <h1>IDEs that I use day to day</h1>
        <div className='card-grid'>
                    {ideMap}
                    </div>
    </div>


} export default IDEList;