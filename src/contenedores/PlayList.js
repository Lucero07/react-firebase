import React,{Component} from 'react';
import Song from '../componentes/Songs.js'


export default class ListaComponente extends Component{
	render (){
		const playlist =this.props.songs;
		return (
				<ul>
					{playlist.map((item,i)=><Song key={i}  name={item}/>)}
				</ul>
		)
	}
}
