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
            <div className="box__icon"><Icon className="skills__icon" icon={javascriptIcon} /></div>
            <div className="box__icon"><Icon className="skills__icon" icon={reactIcon} /></div>
            <div className="box__icon"><Icon className="skills__icon" icon={webpackIcon} /></div>
            <div className="box__icon"><Icon className="skills__icon" icon={html5} /></div>
            <div className="box__icon"><Icon className="skills__icon" icon={css3} /></div>
            <div className="box__icon"><Icon className="skills__icon" icon={bootstrapIcon} /></div>
            <div className="box__icon"><Icon className="skills__icon" icon={nodejsIcon} /></div>
            <div className="box__icon"><Icon className="skills__icon" icon={mongodbIcon} /></div>
            <div className="box__icon"><Icon className="skills__icon" icon={sqliteIcon} /></div>
            <div className="box__icon"><Icon className="skills__icon" icon={gitIcon} /></div>
        </div>
    )
}

export default Skills;