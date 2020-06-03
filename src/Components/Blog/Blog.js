
import React, { Component } from 'react';
import './blog.css'

class Blog extends Component {
    render() {
        return (
            <div className="blog">
                <header>
                    <img className="img" src={require('../Home/hero.jpg')}/>
                    <h1>{this.props.title}</h1>
                </header>
                <div className="content">
                    <p>
                    Your makeup is not a mask. It’s a form of art and, more importantly, 
                    a form of expression. When you have creative freedom, the power lies
                     in your hand to try out different things and see what you like best.
                      Because here’s the thing: your makeup is an extension of your personality.
                       Of course, each one of us has a distinct style and preferences,
                        but the basics of nailing your makeup – whatever kind
                         you like – are pretty much the same.
                        The smallest steps can sometimes make a big difference in how your
                         look turns out. We have done plenty of research to help you ace your 
                         makeup. From pro makeup hacks to a breakdown of the steps involved in 
                         flawless makeup application, read on to find out more.
                    </p>
    
                </div>
            </div>
        );
    }
}

export default Blog;