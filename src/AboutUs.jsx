import React from "react";


function AboutUs() {

    const member_bios = [
        {
            name: "Bethany Torres",

            profile_photo: "",

            bio: "Bethany (nicknamed Fig) is a freelance illustrator and multimedia artist who has interest in all forms of expression and creativity. Currently a barista and studying full-time under the Pursuit Fellowship in a career in tech. Bethany uses she/they pronouns and speaks English and Spanish fluently.",

            fun_fact: "In her free time, Bethany enjoys Dungeons & Dragons with her friends, and has a passion for all things generally spooky. ",

            githubLogo: "",

            githubUrl: "",

            linkedinLogo: "",

            linkedinUrl: "",
        },

        {
            name: "Jameel Ibrahim",

            profile_photo: "",

            bio: "Hello there! I'm Jameel, a Pursuit fellow which is a Google-funded software engineering fellowship with a 9% acceptance rate. At Pursuit, I'm learning how to create web applications with technologies like JavaScript, HTML5, CSS3, APIs, React and Git.",

            fun_fact: "",

            githubLogo: "",

            githubUrl: "",

            linkedinLogo: "",

            linkedinUrl: "",


        },

        {
            name: "Tyller Mendoza",

            profile_photo: "",

            bio: "Tyller ....",

            fun_fact: "",

            githubLogo: "",

            githubUrl: "",

            linkedinLogo: "",

            linkedinUrl: "",
        },

        {
            name: "Gaspare Carollo",

            profile_photo: "",

            github_image: "",

            linkedin_image: "",

            bio: "",

            fun_fact: "",

            githubLogo: "",

            githubUrl: "",

            linkedinLogo: "",

            linkedinUrl: "",


        }
    ];

    return (
        <div>
            {member_bios.map((aboutMe, index) => (

                <div key={index}>
                    <h4>{aboutMe.name}</h4>
                    <img src={aboutMe.profile_photo} alt={`profile photo of ${aboutMe.name}`} />
                    <p>{aboutMe.bio}</p>
                    <p> href={aboutMe.fun_fact} </p>
                    <a href={aboutMe.githubUrl} target="_blank" rel="noopener noreferrer"></a>
                    <img src={aboutMe.githubLogo} alt={`Github logo for ${aboutMe.name}`} />
                    <a href={aboutMe.linkedinUrl} target="_blank" rel="noopener noreferrer"></a>
                    <img src={aboutMe.linkedinLogo} alt={`LinkedIn logo for ${aboutMe.name}`} />
                </div>
            ))}
        </div>
    )
}


export default AboutUs;

