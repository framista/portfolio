import React, { useEffect, useState } from 'react';
import './style.css'
import Card from '../card';
import axios from 'axios';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        apicall();
    }, []);

    const apicall = async () => {
        const result = await axios.get("http://localhost:5000/api/projects");
        const projects = result.data;
        console.log(projects)
        setProjects(projects);
    }

    return (
        <div className="container">
            {projects.map(project =>
                <Card
                    key={project._id}
                    project={project}
                ></Card>
            )}
        </div>
    )
}

export default Projects;