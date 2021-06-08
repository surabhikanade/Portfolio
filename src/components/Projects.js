import React,{useState} from 'react'
import { Tabs, Tab, Grid,Cell,CardText,CardActions,Button,Card,CardTitle } from 'react-mdl'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {

    const[state,setState]=useState({
        activeTab:0
    })

    const myfunction =() =>{
        if(state.activeTab===0){
            return(
                <div style={{display:'Flex'}}>
                <Card shadow={0} style={{width: '520px', height: '420px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(card.jpg) bottom right 15% no-repeat #46B6AC'}}>COVID-19 STATS</CardTitle>
                    <CardText>
                    Developed this project in team,by using java script language.Developed website od COVID-19 STATS.
                    </CardText>
                    <CardActions border>
                    <Button colored  target="_blank" href="https://github.com/surabhikanade/Myapp.git">GitHub</Button>
                    </CardActions>
                </Card>
            </div>
            )
        }
        else if(state.activeTab===1){
            return(


            <div className="card" style={{display:'Flex'}}>
                <Card shadow={0} style={{width: '520px', height: '420px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#00060c',fontFamily:"cursive", background: 'url(coffee-desk-laptop.jpg) bottom right 15% no-repeat #46B6AC'}}>Project</CardTitle>
                    <CardText>
                     
                    </CardText>
                    <CardActions border>
                    <Button colored >Project</Button>
                    </CardActions>
                </Card>
            </div>
            )
        }
        
    }

   

    return(
        <div>
            <Tabs activeTab={state.activeTab} onChange={(tabID)=>{setState({...state,activeTab:tabID})}} ripple>
                <Tab className="tab"> My Projects</Tab>
                <Tab className="tab"> My Projects</Tab>
                
                

            </Tabs>
            <section>
                <Grid>
                    <Cell col={12}>
                        {myfunction()}
                    </Cell>
                </Grid>
                
                
            </section>
        </div>


    )        

}
export default Projects