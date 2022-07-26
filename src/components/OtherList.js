import React from "react"
import AboutCards from "./AboutCards"

function OtherList() {

    const other = [
    {
        name: 'Adobe Illustrator',
        img: '',
        alt: 'Adobe Illustrator'
    },
    {
        name: 'Procreate',
        img: '',
        alt: 'Procreate'
    },
    {
        name: 'Aseprite',
        img: '',
        alt: 'Aseprite'
    },
    {
        name: 'Pixaki',
        img: '',
        alt: 'Pixaki'
    },
    {
        name: 'Canva',
        img: '',
        alt: 'Canva'
    },
    {
        name: 'Figma',
        img: '',
        alt: 'Figma'
    },
    {
        name: 'Lucid Chart',
        img: '',
        alt: 'Lucid Chart'
    },
    {
        name: 'WordPress',
        img: '',
        alt: 'WordPress'
    },
    {
        name: 'Wireshark',
        img: '',
        alt: 'Wireshark'
    }
]

const otherMap = other.map(others => <AboutCards others = {others} />)

return <div className='inline-block-display'>
    <h1>Other things I use day to day</h1>
    <div className='card-grid'>
                {otherMap}
                </div>
</div>


} export default OtherList;