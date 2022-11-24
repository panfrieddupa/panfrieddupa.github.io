import React from 'react'
import social from '../res/socials'

function Homepage() {

    return <div className='homepage'>
        <div className='social-container flex justify-evenly pb-6'>{
            social.map(socials =>
                <a href={socials.url} target='blank'>
                    <img src={socials.img} alt={socials.alt} className='social-icon w-14 md:w-20 hover:animate-spin' />
                </a>
            )
        }
        </div>
        <div className='flex'>
            <div className=' text-bt_pink font-fira-sans font-light pt-4 pr-2 text-justify'>
                <p className='pb-4'>
                    All icons/logos/graphics were created/recreated by myself, and this entire website was coded with NodeJS and ReactJS, with TailwindCSS for styling. Currently hosted on my Github you can check out by clicking the icon below!
                </p>
                <p className='pb-4'>
                    The social icons also link to my corresponding profile on that site!
                    I created them using <a href='https://www.aseprite.org' target='blank' className='font-medium hover:text-bt_light_blue'>Aseprite</a> which is a small application for creating pixel art.
                </p>

                <p className='pb-4'>
                    Currently a student of Information Technology with a major in Software Development,
                    I enjoy taking on projects that can challenge my skills and create new experiences to further my understanding of different software systems.
                    My unbridled thirst for knowledge and a life-long passion for technology drive my never-ending quest for continuous learning in various technology industries.
                </p>
                <p className='pb-4'>
                    As well as being a student at SAIT, I am an Executive of the SAITSA Pride+ Club as the VP of Operations, and do the onboarding and offboarding of executives,
                    keeping club accounts secure, doing basic troubleshooting and support, and updating and maintaining the club website.
                    Before my position as VP of Operations, I held the title of Director of Graphic Design, during which I utilized various illustration and design software such as
                    Adobe Illustrator, Canva, and Procreate, to create engaging media for club events and promotions.
                </p>
                <p className='pb-4'>
                    In my spare time, I enjoy competing in capture-the-flag ethical hacking events, learning new programming languages that aren't a part of my curriculum,
                    and working on personal projects by navigating them through the software development lifecycle. You can find a graphic version of this information in the <a href="/about" className='font-medium hover:text-bt_light_blue'>About</a> section.</p>
            </div>
        </div>

    </div>

}

export default Homepage