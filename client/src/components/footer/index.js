import React from 'react';
import './style.css';
import { Icon } from '@iconify/react';
import codewarsIcon from '@iconify/icons-simple-icons/codewars';
import githubFilled from '@iconify/icons-ant-design/github-filled';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="icons">
                <a className="icons__a" href="https://github.com/framista" target="_blank"><Icon icon={githubFilled} /></a>
                <a className="icons__a" href="https://www.codewars.com/users/Ada_Jab/stats" target="_blank"><Icon icon={codewarsIcon} /></a>
            </div>
            <p className="author">Adrianna Jabłońska &copy; 2020</p>
        </footer>
    )
}

export default Footer;