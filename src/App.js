import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import PlayList from './contenedores/PlayList.js';
import AddSong from './componentes/AddSong.js';
console.log(firebase);

class SpotifyRan extends Component {
	constructor(props){
		super(props);
		this.state={
			playlist:['Shape of you','Shaky Shaky', 'Despasito']
		};
	}

	componentDidMount(){
		const config = {
    apiKey: "AIzaSyCQy2ApOWk-U-CSfFfRtXg26GKmrv-aoJk",
    authDomain: "musicaranck.firebaseapp.com",
    databaseURL: "https://musicaranck.firebaseio.com",
    projectId: "musicaranck",
    storageBucket: "musicaranck.appspot.com",
    messagingSenderId: "795105438269"
  };

	const app= firebase.initializeApp(config);
	this.database = app.database();

const playListDataBase = this.database.ref('playList');
	//lee la base de datos ,
	playListDataBase.on('value',(snapshot)=> {
		const playList = snapshot.val();
		this.setState({
			playlist:playList.songs
		})
		
	});
	}

	savePlayList(songs){
		const playListDataBase = this.database.ref('playList');
	//escribe en la base de datos
		playListDataBase.set({
			songs:songs
		});
	}


	addSongToPlayList = (song)=>{
		let playlistNew = this.state.playlist;
		playlistNew.push(song);
		this.setState({
			playlist:playlistNew
		});
		this.savePlayList(playlistNew);
	}

  render() {
	  const songs = this.state.playlist;
    return (
      <div>
	  	<h1>SpotifyRan</h1>
		<AddSong addSongToPlayList={this.addSongToPlayList}/>
		<PlayList songs = {songs}/>
      </div>
    );
  }
}

export default SpotifyRan;
