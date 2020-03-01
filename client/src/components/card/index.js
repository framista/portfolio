import React from 'react';
import './style.css'
import { Icon } from '@iconify/react';
import monitorStar from '@iconify/icons-mdi/monitor-star';
import githubFilled from '@iconify/icons-ant-design/github-filled';


const Card = (props) => {

    const { name, description, image, github, live, grade } = props.project;
    return (
        <div className="card-container">
            <div className="card">
                <figure className="front">
                    <h1 className="card__h1">{name}</h1>
                    <img src={image} className="card__image"></img>
                </figure>
                <figure className="back">
                    <p className="card__text">{description}</p>
                    <div className="button-container">
                        <a className="card__icons__a" href={`${live}`} target="_blank" rel="noopener noreferrer"><Icon icon={monitorStar} /></a>
                        <a className="card__icons__a" href={`${github}`} target="_blank" rel="noopener noreferrer"><Icon icon={githubFilled} /></a>
                    </div>
                </figure>
            </div>
        </div>
    )

}

export default Card;