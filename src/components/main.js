import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';	
import Home from './home';
import Addplace from './addplace';
import Places from './places';


class Main extends Component{

render(){
	return(

		
		<Switch>
 		<Route exact path= "/home"  component = {Home} />
 		 <Route path= "/places" component = {Places} />
 		 <Route path = "/addplace" component = {Addplace} />
		
 		</Switch>
		

		


		)
};
}

export default Main;