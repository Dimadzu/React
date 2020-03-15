
import ReactDOM from 'react-dom';
import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {moviesData} from './moviesData';
import MovieItem from './Movieitem';



class App extends React.Component{
	constructor(){
		super();
		this.state={
			movies: moviesData,
			movieWillWatch: []
			
		};
	}
	
	removeMovie=movie=>{
	const updateMovies=this.state.movies.filter(function(item){
		return item.id !== movie.id;
	});
	this.setState({
		movies: updateMovies
	});
}
	addmovieToWillWatch=movie=>{
		const updateMovieWillWatch=[...this.state.movieWillWatch,movie];
		this.setState({
		movieWillWatch: updateMovieWillWatch
	});
	 console.log(updateMovieWillWatch);	
	}
	
		
		removeMovieFromWillWatch=movie=>{
	const updateMovieWillWatch=this.state.movieWillWatch.filter(function(item){
		return item.id !== movie.id;
	});
	this.setState({
		movieWillWatch: updateMovieWillWatch
	});
}
	
	render(){
     return (
    <div className="container">
		<div className="row"> 
		 <div className="col-9">
		 <div className="row">
		 {this.state.movies.map(movie=>{
		 return(
		 <div className="col-6" key={movie.id}>
		 <MovieItem 
		  movie={movie}
		  removeMovie={this.removeMovie}
		 addmovieToWillWatch={this.addmovieToWillWatch}
		 removeMovieFromWillWatch={this.removeMovieFromWillWatch}/>

		 </div> 
		 ) 
		 })}
		 </div>   
	      </div> 
      <div className="col-3">
		  <p>Will watch: {this.state.movieWillWatch.length}</p>
		  </div>
	 	</div> 
    </div>
		 );
	}
};

//function App() {
//  return (
//    <div className="App">
//     <h2>{moviesData[0].title}</h2>
//    </div>
//  );
//}

export default App;
