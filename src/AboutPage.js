import React from 'react';

function AboutPage() {

    const about = {
        name: 'Rebekah Bulych',
        nickname: 'Bekah',
        description: 'Currently a student of Information Technology with a major in Software Development, ' +
            'I enjoy taking on projects that can challenge my skills and create new experiences to further my understanding of different software systems. ' +
            'My unbridled thirst for knowledge and a life-long passion for technology drive my never-ending quest for continuous learning in various technology industries. ' +
            'As well as being a student at SAIT, I am an Executive of the SAITSA Pride+ Club as the VP of Operations, and do the onboarding and offboarding of executives, ' +
            'keeping club accounts secure, doing basic troubleshooting and support, and updating and maintaining the club website. ' +
            'Before my position as VP of Operations, I held the title of Director of Graphic Design, during which I utilized various illustration and design software such as Adobe Illustrator, ' +
            'Canva, and Procreate, to create engaging media for club events and promotions.' +
            'In my spare time, I enjoy competing in capture-the-flag ethical hacking events, learning new programming languages that aren\'t a part of my curriculum, ' +
            'and working on personal projects by navigating them through the software development lifecycle.',
        age: 29,
        personal_site: 'https://bekah.codes',
        cocurricular_site: 'https://prideplus.ca'
    }
    const aboutMap = about.map((about) => <p>{about.name}</p>)

    return aboutMap

}
export default AboutPage;