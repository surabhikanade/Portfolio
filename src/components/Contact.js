import React from 'react'
import surabhi from './surabhi.jpg.png';
import { Grid,Cell} from 'react-mdl'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faEnvelope,faLocationArrow, faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons'
import { faSkype } from '@fortawesome/free-brands-svg-icons'


function Contact(){
    return (
        <div>
              <marquee><h5 className= "marquee">Wanna get in touch ?</h5></marquee>
            <div className="contact-main">
        
    
        <Grid className="contact-grid">
        <Cell col={6}>
        <h2>SURABHI KANADE</h2>
        <img src="surabhi.jpg.png" />
        <p>Have been a learner and still learning to learn from many learners who wish to mak me learn whatever GOOD they have learnt.</p>
        <p>Interested in Technology, Computer Programing, Artificial Intelligence, Cyber Security, and yes MUSIC is the CATALYST for me.</p>
           
         
        </Cell>
        
        <Cell col={6}>
            <h3>Wanna get in touch ?</h3>
            <hr/>
            <table>
                <tr> 
                    <td>
                        <span>
                            <FontAwesomeIcon icon={faPhoneSquare}/>
                        </span>
                        
                    </td>
                    <td>
                    (+91) 9284358032
                    </td>
                </tr>

                <tr> 
                    <td>
                        <span>
                            <FontAwesomeIcon  icon={faEnvelope}/>
                        </span>
                        </td>
                        <td>
                         kanadesurabhi59@gmail.com
                    </td>
                </tr>
                <tr> 
                    <td>
                        <span>
                            <FontAwesomeIcon icon={faLocationArrow}/>
                        
                        </span>
                        </td>
                        <td classname="contact-font">
                         PUNE
                    </td>
                </tr>
            </table>
            
        </Cell>
         
         </Grid> 
     </div>

        </div>
            
 )
}

export default Contact

           