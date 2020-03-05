import React from 'react';
import "./style.css"
import { Icon } from '@iconify/react';
import javascriptIcon from '@iconify/icons-logos/javascript';
import html5 from '@iconify/icons-logos/html-5';
import css3 from '@iconify/icons-logos/css-3';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
import reactIcon from '@iconify/icons-logos/react';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import mongodbIcon from '@iconify/icons-logos/mongodb';
import sqliteIcon from '@iconify/icons-logos/sqlite';
import webpackIcon from '@iconify/icons-logos/webpack';
import gitIcon from '@iconify/icons-logos/git';


const Skills = () => {
    return (
        <div className="skills__container">
            <Icon className="skills__icon" icon={javascriptIcon} />
            <Icon className="skills__icon" icon={reactIcon} />
            <Icon className="skills__icon" icon={webpackIcon} />
            <Icon className="skills__icon" icon={html5} />
            <Icon className="skills__icon" icon={css3} />
            <Icon className="skills__icon" icon={bootstrapIcon} />
            <Icon className="skills__icon" icon={nodejsIcon} />
            <Icon className="skills__icon" icon={mongodbIcon} />
            <Icon className="skills__icon" icon={sqliteIcon} />
            <Icon className="skills__icon" icon={gitIcon} />
        </div>
    )
}

export default Skills;