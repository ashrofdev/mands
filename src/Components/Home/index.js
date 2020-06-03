import React, { Component } from 'react';
import './style.css'
import Fade from "react-reveal/Fade"
import {  Link } from "react-router-dom";
import { scroller, Element } from 'react-scroll';
import { firebase, firebaseDB } from '../../firebase';
import Box from './Blogbox/Box';


class Home extends Component {

    state= {
        blogs: [
            {
                title: 'Medicinal money ritual',
                date: '25/4/1945'
            },
            {
                title: 'How to kill yourself and Medicinal money ritual',
                date: '25/4/1945'
            },
            {
                title: 'Benefits of bad diet',
                date: '25/4/1945'
            },
            {
                title: 'Advantages of going crazy',
                date: '25/4/1945'
            },
            {
                title: 'HIV is unreal',
                date: '25/4/1945'
            },
            {
                title: 'Corona is fake',
                date: '25/4/1945'
            }
        ]
    }
 

   
    showNav = (type) => {
        if(type) {
            document.querySelector('.navs').classList.toggle('show')
        }
    }
    scrollToElement = (element, type) => {
        scroller.scrollTo(element,{
            duration: 1500,
            delay:100,
            smooth: true,
            offset: -150
        });
        this.showNav(type)
    }

  
    
    render() {
    
        
        return (
                <div className="home">
                    <Element name="header">
                        <header className="grid_container">
                            <section className="top_bar grid_container">
                                <img className="logo" alt="img" src={require('./cilogo.png')}/>
                                <nav>
                                    <button  onClick={this.showNav} className="nav"></button>
                                    <ul className="navs">
                                        <Link to="/"><li onClick={()=> this.scrollToElement('header', true)}>Home</li></Link>
                                        <Link to="/aboutus"><li onClick={()=> this.scrollToElement('about', true)}>About us</li></Link>
                                        <Link to="/advertise"><li onClick={()=> this.scrollToElement('clients', true)}>Advertise</li></Link>
                                    </ul>
                                </nav>
                            </section>
                        
                        </header>
                    </Element>
                    <div>
                        <section className="grid_container hero_content">
                            <div style={{alignSelf: 'center'}} className="grid_content">
                                <Fade bottom>
                                    <h1>HEALTH & FASHION</h1>
                                </Fade>
                            </div>
                        </section>
                        
                    </div>
                    <section className="grid_container" style={{minHeight:'100vh'}}>
                        <div className="grid_content blogboxes">
                        {
                            this.state.blogs.map(e=>{
                                return <Box title={e.title} date={e.date}/>
                            })
                        }
                        </div>
                    </section>
                    <footer>
                        <section className="grid_container">
                            <div className="grid_content footer">
                                <ul>
                                    <li><h2>About us</h2></li>
                                    <li onClick={()=> this.scrollToElement('about', false)}>Learn more</li>
                                    <li>FAQs</li>
                                </ul>
                                <ul>
                                    <li><h2>Join us</h2></li>
                                    <Link to="/register"><li>Register for free</li></Link>
                                    <Link to="/signin"><li>Signin</li></Link>
                                </ul>
                                <ul>
                                    <li><h2>Contact us</h2></li>
                                    <li>citizen@investment.me</li>
                                    <li>+234 816 909 4945</li>
                                </ul>
                            </div>
                            <span>&copy; All rights reserved by citizen investment</span>
                        </section>
                    </footer>
                </div>
        );
    }
}

export default Home;

