import React from 'react'

function AboutPage() {
  return (
    <div className="resume flex">
      <div className="md:flex">
        <div className="left-pane-about md:flex-1 bg-bt_pink">
          <div className="flex items-center p-5">
            <img
              className="fill-current w-1/3 md:w-24 flex-1"
              src={require('../img/branded_self_image.png')}
              alt="Myself with colours toned to my current branding"
            ></img>

            <div className="text-about-right flex-1 ml-2">
              <h2 className="text-5xl md:text-4xl lg:text-6xl font-fira-sans font-bold text-bt_dark_blue">
                Rebekah
                <br />
                Bulych
              </h2>
              <h3 className="text-lg font-fira-sans text-bt_dark_blue pb-8">
                She/Her
              </h3>

              <h4 className="text-xl font-fira-sans font-semibold  text-bt_dark_blue">
                Software Developer
                <br />
                Student
              </h4>
            </div>
          </div>

          <div className="text-about-below p-4">
            <h2 className="section-title">/ABOUT</h2>

            <p>
              A student of Information Technology with a major in Software
              Development, I enjoy taking on projects that can challenge my
              skills and create new learning experiences to further my
              understanding of different software systems.
            </p>
          </div>

          <div className="text-about-below p-4">
            <h2 className="section-title">/EXPERIENCE</h2>

            <div>
              <p>PLACEHOLDER</p>
              <p>PLACEHOLDER</p>
              <p>PLACEHOLDER</p>
            </div>
          </div>
        </div>

        <div className="right-pane-about md:flex-1 p-4">
          <div className="text-about-below">
            <h2 className="section-title">/EDUCATION</h2>

            <p>Southern Alberta Institute of Technology</p>
            <p>
              Diploma Information Technology in Software Development Currently
              Enrolled | Expected Graduation December 2022
            </p>
            <p>
              Employed team-building skills in a variety of circumstances as a
              member of a project team while working through all stages of the
              Software Development Lifecycle.
            </p>
          </div>

          <div className="text-about-below">
            <h2 className="section-title">/CO-CURRICULARS</h2>

            <div>
              <p> SAITSA Pride+ Club</p>
              <p>VP of Operations 2022 - Present</p>
              <p>
                Collaborates with other departments on club initiatives.
                Provides IT support for a variety of issues in a timely matter
                to executives and members of the club. Created and maintains the
                prideplus.ca website.
              </p>

              <p>Director of Graphic Design 2021 - 2022 </p>
              <p>
                Utilized multiple illustration software such as Adobe
                Illustrator, to create graphics for physical or digital media.
                Reported to VP of Marketing to plan designs and create
                schedules.
              </p>
            </div>

            <div>
              <p>Threads That Thrive / Thread That Give</p>
              <p>Volunteer / Webmaster / Operations 2022 - Present</p>
              <p>
                Maintains and updates the program web pages that are currently a
                part of prideplus.ca. Volunteers at events such as clothing
                drives or workshops.{' '}
              </p>
            </div>
          </div>

          <div className="text-about-below">
            <h2 className="section-title">/PROJECTS</h2>

            <div>
              <p>threadsthatthrive.ca</p>
              <p>Threads That Thrive Not-for-Profit</p>
              <p>
                {' '}
                Launched in October 2022 as home to the Threads That Thrive
                workshop program and its subsidiary donation program Threads
                That Give.
              </p>
            </div>

            <div>
              <p>prideplus.ca</p>
              <p>SAITSA Pride+ Club Website | Launched February 2022</p>
              <p>
                A club project to provide resources and a sense of community to
                students of SAIT who identify as part of the 2SLGBTQIA+.
              </p>
            </div>

            <div>
              <p>bekah.codes</p>
              <p>Personal Website</p>
              <p>
                A visual representation of my problem-solving thought processes
                through technical documentation, guides, and pictures of my
                cats. Launched in June 2022.
              </p>
            </div>
          </div>

          <div className="text-about-below">
            <h2 className="section-title">/OTHER INTERESTS</h2>

            <div>
              <p>
                Gaining new skills related to technology in any field Competing
                in hack-a-thon capture the flag events Searching for ways to
                improve current and future projects Learning programming
                languages that are not part of my current curriculum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutPage
