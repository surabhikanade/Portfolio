import React from 'react'
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl'
import '../App.css'


import {BrowserRouter,Link,Switch,Route} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Resume from './Resume'
import Projects from './Projects'
import Contact from './Contact'



function Landing(){
    return(
    <div>
        <BrowserRouter>
        <div className="demo-big-content">
           <Layout className="bgcolor">
               <Header title="Surabhi Kanade"className="HeaderApp" scroll>
                   <Navigation>

                       <Link to="/">Home</Link>
                       <Link to="/projects">Projects</Link>
                       <Link to="/Resume">Resume</Link>
                       <Link to="/Contact">Contact</Link>
                       <Link to="/about">About</Link>
                
                    </Navigation>
                </Header>
            <Drawer title="Title">
            <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/Resume">Resume</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/about">About</Link>
                
            </Navigation>
            </Drawer>

            <Content>
            <div className="page-content" />

            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/Resume" component={Resume}></Route>
                <Route exact path="/Projects" component={Projects}></Route>
                <Route exact path="/Contact" component={Contact}></Route>
            </Switch>

             </Content>

            </Layout>
     
        </div>
        
        </BrowserRouter>
    </div>
    )

}
export default Landing