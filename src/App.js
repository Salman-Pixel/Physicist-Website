import React, { useState, useEffect } from 'react';
import './styles/App.css';
import './styles/Home.css';
import Home from './components/Home.js';
import About from './components/About.js';
import plan from './assets/images/plan.png';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
    const [showAbout, setShowAbout] = useState(false);

    useEffect(() => {
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let stars = [];

        function init() {
            for (let i = 0; i < 800; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random(),
                    velocity: Math.random() * 0.5,
                    brightness: Math.random() * 3 + 1
                });
            }
        }

        function animate() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(star => {
                context.beginPath();
                context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                context.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
                context.fill();
                context.closePath();

                star.x -= star.velocity;
                if (star.x < 0) {
                    star.x = canvas.width;
                }
            });

            requestAnimationFrame(animate);
        }

        init();
        animate();
    }, []);

    const handleExplore = () => {
        setShowAbout(true);
        document.body.style.overflowY = 'scroll';
        document.body.style.backgroundColor = '#111';
    };

    return (
        <div>
            <canvas id="canvas"></canvas>
            {!showAbout && <img className="planet" src={plan} alt="Planet" />}
            {!showAbout ? <Home onExplore={handleExplore} /> : <About />}
        </div>
    );
}

export default App;




