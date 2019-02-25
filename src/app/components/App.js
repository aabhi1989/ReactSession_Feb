import React from 'react';
import {Header} from './Header';
import {Home} from './Home';

import {PropTypes} from 'prop-types';

export class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            homeLink : "Logo Name"
        }
        console.log("constructor");
    };

    componentWillMount(){
        console.log("Component will mount");
    }

    componentDidMount(){
        console.log("Component Did mount");
    }

    shouldComponentUpdate(nextProps){
        console.log("Component Did mount");
        return false;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("Component Will mount"+ nextProps, nextState);
    }

    componentDidUpdate(prevProps, PrevState){
        console.log("Component Did mount");
    }

    msgInfo(){
        prompt("Please enter your Name", "First Name");
    }

    changelogoName(newName){
            this.setState({
                homeLink: newName
            });
    }

    render(){
        console.log("render");
        var text="hello this is Header section";
        var person = {
        name: "abhishek",
        city: "delhi"
    };
    var menu ={
        links: ['Link1', 'Link2', 'Link3'],
        Second: "Link2",
        Third: "Link3"
    };
        return(
            
            <section className="container">
                <Header  
                logo={this.state.homeLink} 
                navLink={menu}/>
                <Home 
                msg={text} 
                user={person} 
                welcome={this.msgInfo}
                initialHomeLink={this.state.homeLink}
                onchangeLogo={(newName) => this.changelogoName(newName)}>
                </Home>

            </section>   
        );
    }
}


App.propTypes = {
    logo: PropTypes.string,
    navLink: PropTypes.object,
    msg: PropTypes.string,
    user: PropTypes.object,
    welcome: PropTypes.func
}
