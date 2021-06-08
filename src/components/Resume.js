import React from 'react'
import { Grid,Cell, List} from 'react-mdl'
import sura from './sura.jpg';

function Resume(){
    return(
        <div>

            <h3 className = "content">My Resume</h3>
            

            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="resume-banner">
                    <Cell col={12} >
                        <hr/>
                        <img src={sura} className="profile"  />
                        <h3 >SURABHI ARUN KANADE</h3>
                        <h5 >At/Post Paranda,Dist.Osmanabad</h5>
                        <h5>9284358032 | kanadesurabhi59@gmail.com</h5>
                        <hr/>
                        <h3 ># CAREER OBJECTIVE:</h3>
                        <h5>To obtain a position that will enable me to use my strong orgnizational skills,award-winning educational background,and ability to work well with people.</h5>                       
                        <hr/>
                        <h3 ># EDUCATION:</h3>
                        <ul> 
                        <li><h4> G.H.Raisoni Institute Of Engineering And Technology,Wagholi,Pune</h4></li>
                       
                        <li><h5>Computer Engineering</h5></li>
                        <li><h5>Third Year</h5></li>
                        <li><h5>Pursuing</h5></li>
                        </ul>
                        
                        <ul>                    
                            <li><h4> Vidya Pratisthan's Art,Science And Commerce College,Baramati</h4></li>
                            <li><h5>12th</h5></li>
                            <li><h5>65.53%</h5></li>
                            <li><h5>2017</h5></li>  
                        </ul>
        
                       <ul>
                           <li> <h4>Kalyansagar Madhyamik Mahavidyalaya,Paranda</h4></li>
                            <li><h5>10th</h5></li>
                            <li><h5>89.00%</h5></li>
                            <li><h5>2015</h5></li>
                        </ul>
                        <hr/>
                        <h3># TECHNICAL SKILLS:</h3>
                        <ul>
                        <li><h4> Programming Language: Python, C , C++ , HTML</h4></li>
                        <li><h4> Database-MYSQL,React-JS(Beginner)</h4></li>
                        </ul>
                        <hr/>
                        <h3># PROJECTS:</h3>
                        <ul>
                        <li><h4>Developed website using React-JS</h4></li>
                        <h5>Developed this project in team,by using java script language.Developed website od COVID-19 STATS.</h5>
                       
                        </ul>
                        <ul>
                            <li><h4>Developed Myportfolio Website</h4></li>
                            <h5>By Using React-JS</h5>
                            <h5>(10-15)days</h5>
                        </ul>
                        <hr/>
                        <h3># INTERESTS:</h3>
                        <ul>
                        <li><h4>Web Development</h4></li>
                        <li><h4>Software Development </h4></li>
                        </ul>
                        <hr/>
                        <h3># ACTIVITIES:</h3>
                        <ul>
                            <li><h4>Part of Trainig and Placement Cell as a Volunteer.</h4></li>
                            <li><h4>Worked in Department's Association as Creative Head Of college (2019-20).</h4></li>
                            <li><h4>Participated in SPPU NSS as a Volunteer for Social Work (2019-20).</h4></li>
                            <li><h4>Being Volunteer in Eureka Hackathon 2K20.</h4></li>
                            <li><h4>Active Participation in Organising in Events.</h4></li>
                        </ul>  
                        <hr/>
                        <h3># PERSONAL STRENGTH</h3>
                        <ul>
                            <li><h4>Enthusiastic</h4></li>
                            <li><h4>Hardworker</h4></li>
                            <li><h4>Leadership</h4></li>
                            <li><h4>Like to learn new things.</h4></li>
                        </ul>
                        <hr/>  
                        <h3># PERSONAL PROFILE:</h3>
                        <ul>
                            <li><h4>Date  of  Birth  : 27/08/1999 </h4></li>
                            <li><h4>Marital  Status  :  Unmarried</h4></li>
                            <li><h4>Nationality      : Indian</h4></li>
                            <li><h4>Known Language   : Marathi,English,Hindi</h4></li>
                            <li><h4>Hobby            : Sketching,Painting,Singing,Reading,Photography,Playing Badminton & Carrom</h4></li>
                        </ul>
                        <hr/>
                        <h3># DECLARATION</h3>
                        <ul>
                            <li><h4>I hereby declared that all information above is to the best of my belief.</h4></li>
                        </ul>

                        <h2>SURABHI ARUN KANADE</h2>
                        <hr/>

                     </Cell>
                   
                </Grid>

            </div>
            



        </div>
    )

}
export default Resume