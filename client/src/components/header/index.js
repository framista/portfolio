import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.navRef = React.createRef();
        this.state = {
            width: window.innerWidth
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateNavbar);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateNavbar);
    }

    render() {
        return (
            <header className="header" >
                <nav className="nav">
                    <div className="hamburger" onClick={this.toggleNavbar}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="nav__link" ref={this.navRef}>
                        <Link className="link" onClick={this.closeNavbar} to="/">About me</Link>
                        <Link className="link" onClick={this.closeNavbar} to="/projects">Projects</Link>
                        <Link className="link" onClick={this.closeNavbar} to="/skills">Skills</Link>
                        <Link className="link" onClick={this.closeNavbar} to="/contact">Contact</Link>
                    </div>
                </nav>
            </header>
        )
    }

    closeNavbar = () => {
        if (this.state.width <= 768) {
            this.navRef.current.style.display = "none";
            document.body.style.overflow = this.navRef.current.style.display !== "none" ? "hidden" : "auto";
        }
    }

    updateNavbar = () => {
        this.setState({ 
            width: window.innerWidth 
        })
        this.navRef.current.style.display = (this.state.width > 768) ?  "flex" : "none";
    }

    toggleNavbar = () => {
        this.navRef.current.style.display = this.navRef.current.style.display === "none" ? "flex" : "none";
        document.body.style.overflow = this.navRef.current.style.display !== "none" ? "hidden" : "auto";
        window.scrollTo(0, 0);
    }

}

export default Header;