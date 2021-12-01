import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Mywork = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://polar-tor-98124.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div data-AOS="fade-up" className='container' id='work'>
            <h2 className='text-center'>My Recent Work</h2>
            <p className='text-center'>Here are a few design projects I've worked on recently. </p>
            <div className='row'>
                {
                    projects.map(project => <Project key={project._id} project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Mywork;