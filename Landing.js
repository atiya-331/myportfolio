import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';


class Landing extends Component {
    render(){
        return(
            <div style={{ width: '100%', margin:'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                <img src="http://penizepay.com/images/female.png"
                alt="image"
                className="my-image"
                
                />
                <div className="banner-text">
                <h1> Web Developer </h1> 
                <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB  </p>
                <div className="social-links">    
                    <a href= "https://github.com/atiya-331" rel="noopener noreferrer" target="_blank" >
                    <i className="fa fa-github-square" aria-hidden ="true"/>   
                     </a> </div>
                </div>
                
                 </Cell>
            </Grid>
               
                </div>
        )
    }
}
export default Landing ; 