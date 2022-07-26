import React from "react"
import AboutCards from "./AboutCards"

function FrameworksList() {

    const framework = [
    {
        name: 'HTML5',
        img: 'https://i.imgur.com/26QF9p6.png',
        alt: 'HTML5'
    },
    {
        name: 'Javascript',
        img: 'https://i.imgur.com/IlT550U.png',
        alt: 'Javascript'
    },
    {
        name: 'CSS',
        img: 'https://i.imgur.com/RNmhfEe.png',
        alt: 'CSS'
    },
    {
        name: 'Java',
        img: 'https://i.imgur.com/9eoX0sz.png',
        alt: 'Java'
    },
    {
        name: 'C#',
        img: 'https://i.imgur.com/FggQD5L.png',
        alt: 'C#'
    },
    {
        name: 'PL/SQL',
        img: 'https://i.imgur.com/CoBGFIM.png',
        alt: 'PL/SQL'
    },
    {
        name: 'React',
        img: 'https://i.imgur.com/PmhyewK.png',
        alt: 'React'
    },
    {
        name: 'Bootstrap',
        img: 'https://i.imgur.com/aiUC9Bj.png',
        alt: 'Bootstrap'
    },
    {
        name: 'Node.js',
        img: 'https://i.imgur.com/SADQbUf.png',
        alt: 'Node.js'
    },
    {
        name: 'SQL*Plus',
        img: 'https://i.imgur.com/1wfrCjs.png',
        alt: 'SQL*Plus'
    },
    {
        name: 'MongoDB',
        img: 'https://i.imgur.com/uFHxCdP.png',
        alt: 'MongoDB'
    },
    {
        name: 'MySQL',
        img: 'https://i.imgur.com/XiDTf13.png',
        alt: 'MySQL'
    },
    {
        name: 'Unity',
        img: 'https://i.imgur.com/rkBulCH.png',
        alt: 'Unity'
    },
    {
        name: 'Visual Studio Code',
        img: 'https://i.imgur.com/zOAb8V7.png',
        alt: 'Visual Studio Code'
    }
    ]
    const frameworkMap = framework.map(frameworks => <AboutCards frameworks = {frameworks} />)

    return <div className='inline-block-display'>
        <h1>Frameworks that I use day to day</h1>
        <div className='card-grid'>
                    {frameworkMap}
                    </div>
    </div>


} export default FrameworksList;