import React from 'react';


// stateless component
export const Header =(props) =>{
    var myheaderStyle={
        color:'#00a0d0',
        marginTop: '10px',
    }
        return(
            <nav style={myheaderStyle} className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">{props.logo}</a>
                </div>
                <ul className="nav navbar-nav">{props.navLink.links.map((linkli, i) =>  <li key={i}><a>{linkli}</a></li>)}</ul>
              </div>
            </nav>
        );
}