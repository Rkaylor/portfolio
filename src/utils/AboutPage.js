import React from 'react'
import Hero from '../components/Hero.js'
import Content from '../components/Content'

function AboutPage(props) {
    return(
        
            <div>
            <Hero title={props.title}/>
                
                    <Content>
                    This page is a work in progress!
                    </Content>
                
                </div>
    
    
        );
    }

export default AboutPage;