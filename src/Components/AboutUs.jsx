import React from "react";
import "./AboutUs.css"

function AboutUs() {

    const member_bios = [
        {
            name: "Bethany Torres",

            profile_photo: "/Bethany.jpg",

            bio: "Bethany (nicknamed Fig) is a freelance illustrator and multimedia artist who has interest in all forms of expression and creativity. Currently a barista and studying full-time under the Pursuit Fellowship in a career in tech. Bethany uses she/they pronouns and speaks English and Spanish fluently.",

            fun_fact: "In her free time, Bethany enjoys Dungeons & Dragons with their friends, and has a passion for all things generally spooky. ",

            githubLogo: "/github.png",

            githubUrl: "https://github.com/figgeryboo",

            linkedinLogo: "/linked-in-alt.svg",

            linkedinUrl: "https://www.linkedin.com/in/bethany-torres-a19bb0186/",
        },

        {
            name: "Jameel Ibrahim",

            profile_photo: "/jameel.jpg",

            bio: "Hello there! I'm Jameel, a Pursuit fellow which is a Google-funded software engineering fellowship with a 9% acceptance rate. At Pursuit, I'm learning how to create web applications with technologies like JavaScript, HTML5, CSS3, APIs, React and Git.",

            fun_fact: "",

            githubLogo: "/github.png",

            githubUrl: "https://github.com/Jameel914",

            linkedinLogo: "/linked-in-alt.svg",

            linkedinUrl: "https://www.linkedin.com/in/jameel-ibrahim-8a7a6b155/",
        },

        {
            name: "Tyller Mendoza",

            profile_photo: "/Tyller.jpg",

            bio: "Tyller is a self-taught developer with one year of entry-level experience in full-stack development and data analysis. worked on many different components.",

            fun_fact: "Trained in two types of martial arts.. Tae Kwon Do and Boxing.",

            githubLogo: "/github.png",

            githubUrl: "https://github.com/tsunami-dev",

            linkedinLogo: "/linked-in-alt.svg",

            linkedinUrl: "https://www.linkedin.com/in/tyller-mendoza-61107120b/",
        },

        {
            name: "Gaspare Carollo",

            profile_photo: "/Gaspare.jpg",

            bio: "Gaspare is currently a Pursuit fellow pursuing a career in the tech industry as a full stack web developer. His strong suit and passion lies in the realm of graphic design, video production, and writing.",

            fun_fact: " On his spare time, Gaspare is a level 50 Pokemon Go player, a part-time video game player and streamer, and an avid collector of all things TMNT.",

            githubLogo: "/github.png",

            githubUrl: "https://github.com/gasparecarollo",

            linkedinLogo: "/linked-in-alt.svg",

            linkedinUrl: "https://www.linkedin.com/in/gcarollo85/",


        }
    ];

    return (
        <div className="profile-card">
            {member_bios.map((aboutMe, index) => (

                <div key={index}>
                    <h4>{aboutMe.name}</h4>
                    <img src={aboutMe.profile_photo} alt={`profile photo of ${aboutMe.name}`} width={400} height={400} />
                    <p>{aboutMe.bio}</p>
                    <p> {aboutMe.fun_fact} </p>
                    <a href={aboutMe.githubUrl} target="_blank" rel="noopener noreferrer"></a>
                    <img src={aboutMe.githubLogo} alt={`Github logo for ${aboutMe.name}`} width={30} height={30} />
                    <a href={aboutMe.linkedinUrl} target="_blank" rel="noopener noreferrer"></a>
                    <img src={aboutMe.linkedinLogo} alt={`LinkedIn logo for ${aboutMe.name}`} width={30} height={30} />
                </div>
            ))}
        </div>
    )
}


export default AboutUs;

