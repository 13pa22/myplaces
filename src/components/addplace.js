import React, { Component, useState } from "react";
import { Grid, Cell } from 'react-mdl';
import {GoogleMap , withScriptjs, withGoogleMap, Marker} from "react-google-maps";


function Map(){

	//const [selectedPlace, setPlace] = useState(null);


	return (<GoogleMap defaultZoom={10} 
			defaultCenter={{lat: 43.6529,  lng: -79.3849 }}
				>

			

				</GoogleMap>
				);


		}		


const WrappedMap = withScriptjs(withGoogleMap(Map));



export default function Addplace() {

	{
					/* https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${} */
		return (
				<div style={{width: '100vw', height : '100vh'}}>

				<WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCWE1dHJVXFkelKltDbktBo_Wb_a2mkNpM`}
				
				loadingElement={<div style ={{height: '100%'}} /> 	}
				containerElement={<div style ={{height: '100%'}} /> 	}
				mapElement={<div style ={{height: '100%'}} /> 	}
					/>

				</div>

			)
	}
}

