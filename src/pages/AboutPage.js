import React from 'react'

function AboutPage() {
    return (
        <div className='resume flex font-fira-sans font-light'>
            <div className='md:flex'>
                <div className='left-pane-about w-full md:flex-2 md:w-5/12 bg-bt_pink px-6 pt-6'>
                    <div className='flex items-center'>
                        <img
                            className='object-cover object-top w-36 h-36 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64'
                            src={require('../img/branded_self_image.png')}
                            alt='Myself, colour-toned to match with my brand theme'
                        ></img>

                        <div className='text-about-right p-4'>
                            <h2 className='text-5xl md:text-2xl lg:text-4xl font-fira-sans font-bold text-bt_dark_blue'>
                                Rebekah
                            </h2>
                            <h3 className='text-lg font-fira-sans text-bt_dark_blue pb-6'>
                                She/Her
                            </h3>
                        </div>
                    </div>

                    <div className='text-about-below pt-6 pb-8 text-bt_background'>
                        <h2 className='section-title font-fira-code text-2xl pb-2 font-bold'>/ Who am I</h2>

                        <p className='pl-4 pr-4 text-justify'>
                            Short Version:
                            <br />
                            A cat lady that loves tech.
                            <br /><br /><br />
                            Medium Version:
                            <br />
                            I've come to accept that I can't "pick a lane", I don't want to pave a single metaphorical road to success, 
                            I want to grow a long-standing tree of skills that branches off into all sorts of directions.
                            <br /><br />
                            Just like a tree, there will be more substantial branches or weaker ones, they might have many new branches sprouting off of them, 
                            or only a few. Always growing by strengthening branches and creating new ones. Even trees growing for decades will have a brand new 
                            branch grow right out of the trunk.
                            <br /><br />
                            Thank you for coming to my tree talk.
                            <br /><br />
                            I'm looking for my forest, a place to propagate my roots and grow to new heights. If you have advice or leads feel free to reach out! 
                            I promise there won't be any more tree analogies/puns/metaphors (unless requested).
                            <br /><br />
                            My entire life I've loved everything about technology, from using the "Classic" Macintosh (that wasn't called classic, because it was the 
                            only one...), to watching a PC be taken apart and put back together again for the first time, to my first HTML class in junior high, 
                            and so on throughout the years with every bit of new tech I was able to play with and learn, my excitement and wonder have never faded.
                            <br /><br />
                            Now, almost 2 decades later, after taking on and overcoming anything life tried to throw at me, I'm so grateful to have accomplished 
                            so many of my dreams in the last 3 years; Owning my first PC, then building my first PC, finishing high school, and getting into a 
                            tech program in post-secondary AND completing it.
                            <br /><br />
                            If you think your team is ready for this level of passion, dedication, and excitement, let's talk!
                            <br /><br />
                            For the Long Version, <a href='mailto:panfrieddupa@bekahthe.dev' className='text-bt_dark_blue hover:text-bt_header_teal'>just ask!</a>
                        </p>
                    </div>
                </div>

                <div className='right-pane-about md:flex-1 p-6 bg-bt_dark_blue bg-opacity-20 text-bt_light_blue'>

                <div className='text-about-below pb-8'>
                        <h2 className='section-title font-fira-code text-2xl pb-2 font-bold'>/ Why is this empty</h2>

                        <p className='pl-4 pr-4 text-justify'>
                            This use to be a 1:1 copy of my resume, but it was too impersonal. I want my site to reflect me, not just buzzwording my way onto someone's radar. 
                            So welcome to my rebuild. I'm currently learning more React and testing some new frameworks so I can give this whole place a well-deserved makeover.
                        </p>
                    </div>

                    <div className='text-about-below pb-2'>
                        <h2 className='section-title font-fira-code text-2xl pb-2 font-bold'>/ Hobbies & Interests</h2>

                        <div className='pl-4'>
                            <ul className='list-disc pl-6'>
                                <li>
                                    Competing in ethical hacking capture the flag events.
                                </li>
                                <li>
                                    Challenging myself by creating new learning goals.
                                </li>
                                <li>
                                    Searching for ways to improve current and future projects.
                                </li>
                                <li>
                                    Playing with OWASP's JuiceShop application deployed through my Heroku pipeline.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default AboutPage
