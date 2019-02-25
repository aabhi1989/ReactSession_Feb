import React from 'react';


export class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            homeLink: this.props.initialHomeLink
        };
    }
    onAlert(){
        this.setState({
            name:"Hello this is Home Component"
        });
    }

   

    changeinpValue(e){
        this.setState({
            homeLink: e.target.value
        });
    }

    onchangeLogoName(){
        this.props.onchangeLogo(this.state.homeLink);
    }
    render(){
        return(
            <div>
                <p>{this.state.name}</p>
                <button onClick={() =>this.onAlert()} className="btn btn-primary">CLick me</button>
                <button  onClick = {this.props.welcome} className="btn btn-danger">Push</button>
                <div>HomeLINK: {this.state.homeLink}</div>
                <hr/>
                <p>Change the Logo name by giving input your self</p>
                <div>
                <input className="inpBox" type="text" value={this.state.homeLink} onChange={(event)=>this.changeinpValue(event)}/>
                <button  onClick={this.onchangeLogoName.bind(this)} className="btn btn-success">change now</button>
                </div>
            </div>
            
        );
    }
}