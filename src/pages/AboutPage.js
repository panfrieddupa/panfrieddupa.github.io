import React from 'react'

function AboutPage() {
    return (
        <div className='resume flex font-fira-sans font-light'>
            <div className='md:flex'>
                <div className='left-pane-about w-full md:flex-2 md:w-5/12 bg-bt_pink px-6 pt-6'>
                    <div className='flex items-center'>
                        <img
                            className='w-1/3 sm:w-2/5 md:w-/12'
                            src={require('../img/branded_self_image.png')}
                            alt='Myself with colours toned to my current branding'
                        ></img>

                        <div className='text-about-right p-4'>
                            <h2 className='text-5xl md:text-3xl lg:text-5xl font-fira-sans font-bold text-bt_dark_blue'>
                                Rebekah
                                <br />
                                Bulych
                            </h2>
                            <h3 className='text-lg font-fira-sans text-bt_dark_blue pb-6'>
                                She/Her
                            </h3>

                            <h4 className='text-xl font-fira-sans font-semibold  text-bt_dark_blue'>
                                Software Developer
                                <br />
                                Student
                            </h4>
                        </div>
                    </div>

                    <div className='text-about-below pt-6 pb-8 text-bt_background'>
                        <h2 className='section-title text-2xl pb-2 font-bold'>/ ABOUT</h2>

                        <p className='pl-4'>
                            A continuous learner with a strong passion for technology, I enjoy
                            taking on challenges that allow me to further my knowledge in all
                            areas of the information technology industry. Experience
                            with agile project management, technical documentation,
                            computer troubleshooting and repair, applying best practice
                            rules, ensuring business rules are adhered to, and team leadership.
                        </p>
                    </div>

                    <div className='text-about-below pb-6 text-bt_background'>
                        <h2 className='section-title text-2xl pb-2 font-bold'>/ EXPERIENCE</h2>

                        <div className='px-4'>
                            <h3 className='text-lg font-medium'>Threads That Thrive Not-for-Profit</h3>
                            <div className='flex justify-between md:flex-wrap'>
                                <p className='text-lg italic'>Director of Technical Operations</p>
                                <p className='md:pl-4 lg:pl-0 font-medium text-sm'>2022 - Present</p>
                            </div>
                            <ul className='list-disc pl-6'>
                                <li>
                                    Creation and administration of Office 365
                                    tenant while implementing security best
                                    practices.
                                </li>
                                <li>
                                    Troubleshooting and support for Office 365
                                    applications and services.
                                </li>
                                <li>
                                    Manages user account tasks such as account
                                    creation, role, and privilege delegation,
                                    enforcing multi-factor authentication, and
                                    password resets.
                                </li>
                                <li>
                                    Creation, deployment, and upkeep of
                                    threadsthatthrive.ca through GitHub.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='right-pane-about md:flex-1 p-6 bg-bt_dark_blue bg-opacity-20 text-bt_light_blue'>
                    <div className='text-about-below pb-6'>
                        <h2 className='section-title text-2xl pb-2 font-bold'>/ EDUCATION</h2>
                        <div className='pl-4'>

                            <h3 className='text-lg font-medium'>
                                Southern Alberta Institute of Technology
                            </h3>
                            <div className='flex justify-between md:flex-wrap pb-2'>
                                <div>
                                    <p className='text-lg italic'>Diploma Information Technology</p>
                                    <p>Major in Software Development</p>
                                </div>
                                <p className='md:pl-4 lg:pl-0 font-medium text-sm'>Graduation December 2022</p>

                            </div>

                            <div className='pb-2'>
                                <h2 className='subtitle font-medium pl-2'>Introduction to Networking</h2>
                                <p className='pl-4'>
                                    Calculated an IP subnetting scheme to segment
                                    a network, configured switches and routers
                                    with device hardening features, and
                                    implemented the design for a small network
                                </p>
                            </div>
                            <div className='pb-2'>
                                <h2 className='subtitle font-medium pl-2'>Computer Hardware and Operating System Essentials</h2>
                                <p className='pl-4'>
                                    Created virtual computing environments,
                                    implemented various operating systems, and
                                    developed hardware solutions for a variety of
                                    business needs.
                                </p>
                            </div>
                            <div className='pb-2'>
                                <h2 className='subtitle font-medium pl-2'>Introduction to Database Administration</h2>
                                <p className='pl-4'>
                                    Database file and memory structures and
                                    management, RDBMS installation, network
                                    connectivity, database instance
                                    creation, backup and recovery.
                                </p>
                            </div>
                            <div className='pb-2'>
                                <h2 className='subtitle font-medium pl-2'>Security for Software Developers</h2>
                                <p className='pl-4'>
                                    Creation and prevention of buffer overflows,
                                    SQL injection, the structure of malware, flaws in
                                    encryption, cross-site request forgery, and
                                    cross-site scripting.
                                </p>
                            </div>
                            <div className='pb-2'>
                                <h2 className='subtitle font-medium pl-2'>Database Programming and Testing</h2>
                                <p className='pl-4'>
                                    Created programs using various structures that
                                    control the flow of a program and determined
                                    which database triggers are needed to enforce
                                    business rules that cannot be enforced using
                                    constraints in Oracle SQL*Plus.
                                    Created a prototype database by working
                                    through all aspects of the Software
                                    Development Lifecycle.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='text-about-below pb-6'>
                        <h2 className='ssection-title text-2xl pb-2 font-bold'>/ CO-CURRICULARS</h2>

                        <div className='pl-4'>
                            <h3 className='text-lg font-medium'>
                                SAITSA Pride+ Club
                            </h3>
                            <div className='flex justify-between md:flex-wrap'>
                                <p className='text-lg italic'>VP of Operations</p>
                                <p className='md:pl-4 lg:pl-0 font-medium text-sm'>2022 - Present</p>
                            </div>

                            <p className='pl-4 pb-2'>
                                Collaborates with other departments on club initiatives.
                                Provides IT support for a variety of issues in a timely matter to executives and members of the club.
                                Created and maintains the prideplus.ca website.
                            </p>
                            <hr className='border-bt_med_blue border-opacity-20 pb-2 w-11/12 mx-auto'/>
                            <div className='flex justify-between md:flex-wrap'>
                                <p className='text-lg italic'>Director of Graphic Design</p>
                                <p className='md:pl-4 lg:pl-0 font-medium text-sm'>2021 - 2022</p>
                            </div>

                            <p className='pl-4'>
                                Utilized multiple illustration software such as Adobe Illustrator, to create graphics for physical or digital media.
                                Reported to VP of Marketing to plan designs and create schedules.
                            </p>
                        </div>
                    </div>

                    <div className='text-about-below pb-6'>
                        <h2 className='section-title text-2xl pb-2 font-bold'>/ PROJECTS</h2>

                        <div className='pl-4 pb-2'>
                            <div className='flex justify-between md:flex-wrap pb-2'>
                                <div>
                                    <a href='https://threadsthatthrive.ca' target='blank' className='text-lg italic hover:text-bt_pink'>
                                        threadsthatthrive.ca
                                    </a>
                                    <p>Threads That Thrive Website</p>
                                </div>
                                <p className='md:pl-4 lg:pl-0 font-medium text-sm'>October 2022</p>
                            </div>
                            <p className='pl-4'>
                                Official website for Threads That Thrive, a Canadian not-for-profit offering skills workshops to gender-diverse individuals, with a focus on improving Mental Health.
                            </p>
                        </div>
                        <hr className='border-bt_med_blue border-opacity-20 pb-2 w-11/12 mx-auto'/>
                        <div className='pl-4 pb-2'>
                            <div className='flex justify-between md:flex-wrap'>
                                <div>
                                    <a href='https://prideplus.ca' target='blank' className='text-lg italic hover:text-bt_pink'>
                                        prideplus.ca
                                    </a>
                                    <p>SAITSA Pride+ Club Website</p>
                                </div>
                                <p className='md:pl-4 lg:pl-0 font-medium text-sm'>February 2022</p>
                            </div>
                            <p className='pl-4'>
                                A club project to provide resources and a sense of community to
                                students of SAIT who identify as part of the 2SLGBTQIA+.
                            </p>
                        </div>
                        <hr className='border-bt_med_blue border-opacity-20 pb-2 w-11/12 mx-auto'/>
                        <div className='pl-4 pb-2'>
                            <div className='flex justify-between md:flex-wrap items-start'>
                                <div>
                                    <a href='https://bekah.codes' target='blank' className='text-lg italic hover:text-bt_pink'>
                                        bekah.codes
                                    </a>
                                    <p>Personal Blog</p>
                                </div>
                                <p className='md:pl-4 lg:pl-0 font-medium text-sm'>June 2022</p>
                            </div>
                            <p className='pl-4'>
                            A visual representation of my problem-solving thought processes
                            through technical documentation, guides, and pictures of my
                            cats. Launched in June 2022.
                        </p>
                        </div>
                        

                    </div>

                    <div className='text-about-below pb-2'>
                        <h2 className='section-title text-2xl pb-2 font-bold'>/ OTHER INTERESTS</h2>

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
                                    Playing with OWASP's JuiceShop application deployed through my personal Heroku pipeline.
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
