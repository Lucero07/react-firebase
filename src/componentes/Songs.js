import React,{Component} from 'react';


export default class Songs extends Component{
	render (){
		const name =this.props.name;
		return (
			<li>{name}</li>
		)
	}
}
