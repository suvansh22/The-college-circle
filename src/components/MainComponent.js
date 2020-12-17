import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import FrontPage from './FrontPage';
import RCF from './Register_College_Form';
import RF from './Register_Form'
import LF from './Login'

export default function Main(props){

    return(
        <Router>
            <Route exact path="/" component={FrontPage} history={props.history}/>
            <div>
                <Route exact path="/RegisterCollegeForm" component={RCF}/>
                <Route exact path="/RegisterForm" component={RF}/>
                <Route exact path ="/Login" component={LF}/>
            </div>
        </Router>
    )
}