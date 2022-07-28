import React from 'react'

function Homepage() {
    const social = [
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/rebekahbulych',
            img: 'https://i.imgur.com/ueJsTr3.png',
            alt: 'LinkedIn'
        },
        {
            name: 'Github',
            url: 'https://github.com/panfrieddupa',
            img: 'https://i.imgur.com/0rWFMI8.png',
            alt: 'Github'
        },
        {
            name: 'CodePen',
            url: 'https://codepen.io/panfrieddupa',
            img: 'https://i.imgur.com/dYzAK28.png',
            alt: 'CodePen'
        },
        {
            name: 'DeviantArt',
            url: 'https://deviantart.com/panfrieddupa',
            img: 'https://i.imgur.com/93WNRgE.png',
            alt: 'DeviantArt'
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/panfrieddupa',
            img: 'https://i.imgur.com/bwQsnba.png',
            alt: 'Twitter'
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com/panfrieddupa',
            img: 'https://i.imgur.com/VUrcGEI.png',
            alt: 'Instagram'
        }
    ]

    return <div className='homepage'>
        <div className='social-container'>{
            social.map(socials =>
                <a href={socials.url} target='blank'>
                    <img src={socials.img} alt={socials.alt} className='social-icon' />
                </a>
            )
        }
        </div>
        <div className='home-p-container'>
            <div className='home-p-left'>
        <h2>
            All icons/logos/graphics were created/recreated by myself
        </h2>
        <p>
            The social icons also link to my corresponding profile on that site!
            <br></br>I created them using <a href='https://www.aseprite.org'>Aseprite</a> which is a small application for creating pixel art.
        </p>
        
                <p>
                    Currently a student of Information Technology with a major in Software Development,
                    I enjoy taking on projects that can challenge my skills and create new experiences to further my understanding of different software systems.
                    My unbridled thirst for knowledge and a life-long passion for technology drive my never-ending quest for continuous learning in various technology industries.
                </p>
                <p>
                    As well as being a student at SAIT, I am an Executive of the SAITSA Pride+ Club as the VP of Operations, and do the onboarding and offboarding of executives,
                    keeping club accounts secure, doing basic troubleshooting and support, and updating and maintaining the club website.
                    Before my position as VP of Operations, I held the title of Director of Graphic Design, during which I utilized various illustration and design software such as
                    Adobe Illustrator, Canva, and Procreate, to create engaging media for club events and promotions.
                </p>
                <p>
                    In my spare time, I enjoy competing in capture-the-flag ethical hacking events, learning new programming languages that aren't a part of my curriculum,
                    and working on personal projects by navigating them through the software development lifecycle. You can find a graphic version of this information in the About section.</p>
            </div>
            <div className='home-p-right'>
                <img src={require('../img/bekah_self_bw.png')} alt='Myself in black and white tones'></img>
            </div>
        </div>

    </div>

}

export default Homepage