import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';


class Home extends Component{

	render(){

		return (
				<div style = {{width: '100%',  margin: 'auto'}} >
				<Grid className= 'home'>
					

					<Cell col={8}>

					<img src="https://lh5.ggpht.com/xdF8o9eqjDco9oXXztxOVUwonJqBrx2wmNaDbdMiDpoDEtJ6hVHAUm7gst32lpFA0Yw=h300"
					alt = 'logo-img' className="logo-img" />

					<div className= 'home-text'>
					<h3> Welcome to My Places!</h3>
					<hr />
					<p>Simply go the the Add Places page and begin adding your places from the Google Maps and they will be listed on the Places page! </p>

					</div>

					</Cell>


					<Cell col = {4}>

					</Cell>
				</Grid>
				</div>

			)
	}
}

export default Home;