import React,{Component} from 'react';


export default class AddSong extends Component{
	constructor(props){
		super(props);
		this.state={
			newSong:""
		};

	}
	handleSubmit(e){
		e.preventDefault();
		const newSong = this.state.newSong;
		this.props.addSongToPlayList(newSong)
	}

	updateState = (e)=>{
		const newSong = e.target.value;
		this.setState({
			newSong:newSong
		});

	}
	render (){
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input type='text' onChange={this.updateState} />
				<button type='submit'>Crear</button>
			</form>

		);
	}
}
