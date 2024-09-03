import React from 'react';
import '../styles/About.css';
import planet from '../assets/images/plan.png';
import saima from '../assets/images/saima gradient bg.png';

const About = () => {
    return (
        <div className="about-container">
            <img className="planet-2" src={planet} alt="Planet" />

            <div className="about-box">
                <a href="https://www.linkedin.com/in/saima-jabeen/" target="_blank" rel="noopener noreferrer">
                    <img className="about-image" src={saima} alt="Saima" />
                </a>
            </div>
            <div className="about-box">
                <h2 className="about-title">
                    <i className="fas fa-user"></i> About Me
                </h2>
                <p>I'm Saima Jabeen from Gilgit, Pakistan. I have done my BS in Physics and my research in Green Synthesis of Nanomaterials.</p>
            </div>
            <div className="about-box">
                <h2 className="about-title">
                    <i className="fas fa-flask"></i> Research
                </h2>
                <p>I am passionate about Quantum and Classical Mechanics, Electromagnetism, and Thermodynamics. My research includes Nanomaterials from green plants and using them in supercapacitors.</p>
            </div>
            <div className="about-box">
                <h2 className="about-title">
                    <i className="fas fa-briefcase"></i> Career
                </h2>
                <p>I have experience as a Physics Instructor and a Social Media Marketing Consultant. I enjoy sharing my love of physics and helping others advance their careers.</p>
            </div>
            <div className="about-box">
                <h2 className="about-title">
                    <i className="fas fa-cogs"></i> Skills
                </h2>
                <p>Physics Education, Digital Marketing, Graphic Designing, Adobe Photoshop, Illustrator, InDesign, Figma.</p>
            </div>
            <div className="about-box">
                <h2 className="about-title">
                    <i className="fas fa-trophy"></i> Experience
                </h2>
                <p>Teacher at Cambridge International Education, Freelance Graphic Designer at DESIGN BYTE, Physics Teacher at TeleTaleem, Research Fellowship at NASA.</p>
            </div>
            <div className="about-box">
                <h2 className="about-title">
                    <i className="fas fa-graduation-cap"></i> Education
                </h2>
                <p>Bachelor of Science in Physics from Karakoram International University Gilgit (KIU), B.Ed from Allama Iqbal Open University.</p>
            </div>
            <div className="about-box">
                <h2 className="about-title">
                    <i className="fas fa-certificate"></i> Certifications
                </h2>
                <p>ILTES, Cambridge IGCSE Physics, Social Media Strategy Training, Entrepreneurship in Emerging Economies (edX).</p>
            </div>
            <div className="about-box">
                <h2 className="about-title">
                    <i className="fas fa-book"></i> Physics Notes
                </h2>
                <p>I offer comprehensive notes covering Quantum Mechanics, Electromagnetism, Thermodynamics, and more. These notes are ideal for students preparing for exams or anyone interested in deepening their understanding of physics.</p>
            </div>
            <div className="about-box">
                <h2 className="about-title">
                    <i className="fas fa-chalkboard-teacher"></i> Live Sessions
                </h2>
                <p>Join my live physics lectures where I explain complex concepts in an easy-to-understand way. These sessions are interactive, allowing you to ask questions and get instant feedback.</p>
            </div>
            <div className="about-box">
                <h2 className="about-title">
                    <i className="fas fa-user-graduate"></i> Physics Tutoring
                </h2>
                <p>Need extra help with physics? I offer one-on-one tutoring sessions tailored to your needs, whether you're preparing for exams or need help with homework.</p>
            </div>
            <div className="about-box">
                <h2 className="about-title">
                    <i className="fas fa-question-circle"></i> Interested in Buying Notes or Sessions?
                </h2>
                <p>If you're interested in purchasing my notes or joining my live sessions, feel free to connect with me directly. You can reach out via WhatsApp: <a href="https://wa.me/+923424636316" target="_blank" rel="noopener noreferrer">Click here to chat on WhatsApp</a>. Let's discuss how I can help you excel in physics!</p>
            </div>

            <footer className="about-footer">
                <a href="https://www.linkedin.com/in/salman-pixel/" target="_blank" rel="noopener noreferrer">
                    <p>Made with ❤️ by Salman</p>
                </a>
            </footer>

        </div>
    );
};

export default About;
