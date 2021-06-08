import React from 'react'
import '../App.css'

import { Grid,Cell } from 'react-mdl'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTwitter, faPython, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

function Home(){
    return(
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="grid">
            <Cell col={12}>
             
             <marquee><h5 className= "marquee">Welcome To My Home Page</h5></marquee>

            <img src = "surabhi.jpg.png" alt="surabhi.jpg" className="image" />
            <img src = "Surabhi-Kanade-signature.png" className="center"/>
            
            </Cell>

            <div className="banner-text">
                <h1>STUDENT</h1>
                <hr/>
                <p>
                   <h3>Web Development | Software Development | Python</h3>
                </p>

                <div className="icons">

                    <a target="_blank" href="https://www.github.com">
                    <span>
                        <FontAwesomeIcon icon={faGithub}/>
                    </span>
                    </a>
                    
                    <a target="_blank" href ="https://www.linkedin.com/in/surabhi-kanade-0886581a0">
                    <span>
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                    </span>
                    </a>

                    <a target="_blank" href="https://www.twitter.com/surabhi_arun?s=08">
                    <span>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </span>
                    </a>
                        
                    <a target="_blank" href="https://www.instagram.com">  
                    <span>
                        <FontAwesomeIcon icon={faInstagram}/>
                    </span>
                    </a>
                    <a target="_blank" href="https://www.facebook.com">  
                    <span>
                        <FontAwesomeIcon icon={faFacebook}/>
                    </span>
                    </a>

                </div>

            </div>
     

            </Grid>
            

        </div>
    )

}
export default Home