import React from 'react';
import './style.css'
import { Icon } from '@iconify/react';
import monitorStar from '@iconify/icons-mdi/monitor-star';
import githubFilled from '@iconify/icons-ant-design/github-filled';


const Card = () => {

    return (
        <div class="card-container">
            <div class="card">
                <figure class="front">
                    <h1 className="card__h1">Air quality</h1>
                    <img src="/projects/airquality.jpg" className="card__image"></img>
                </figure>
                <figure class="back">
                    <p className="card__text">Website to verify the quality of air in Poland. Data from API available on GIOŚ site. The history of selected stations is shown on site and stored in the browser using localStorage.</p>
                    <div className="button-container">
                        <a className="card__icons__a" href="https://github.com/framista" target="_blank" rel="noopener noreferrer"><Icon icon={monitorStar} /></a>
                        <a className="card__icons__a" href="https://github.com/framista" target="_blank" rel="noopener noreferrer"><Icon icon={githubFilled} /></a>
                    </div>
                </figure>
            </div>
        </div>
    )

}

export default Card;