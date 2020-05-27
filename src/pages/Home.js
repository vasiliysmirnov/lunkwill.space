import React from 'react';
import githubImg from '../assets/img/Octocat.png';
import moikrugImg from '../assets/img/moikrug.png';
import mediumImg from '../assets/img/medium.png';
import ThreeJsCanvas from '../components/ThreeJsCanvas';

function Home() {
    return(
        <div className="App">
            <ThreeJsCanvas />
            <div className="wrapper">
            <h1>Василий Смирнов</h1>
            <div className="links">
                <a href="https://github.com/vasiliysmirnov" target="_blank" rel="noopener noreferrer" title="Профиль на github">
                <img src={githubImg} alt="github" />
                </a>
                <a href="https://moikrug.ru/vasya-ves" target="_blank" rel="noopener noreferrer" title="Профиль на Моём круге">
                <img src={moikrugImg} alt="moikrug" />
                </a>
                <a href="https://medium.com/@ieatmybrain" target="_blank" rel="noopener noreferrer" title="Профиль на medium">
                <img src={mediumImg} alt="medium" />
                </a>
            </div>
            </div>
        </div>
    )
}

export default Home;