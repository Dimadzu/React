
import ReactDOM from 'react-dom';
import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
//import {moviesData} from './moviesData';
import MovieItem from './Movieitem';
import {API_URL, API_KEY_3} from './api.js';
import MovieTabs from './MovieTabs.js';




class App extends React.Component{
	
	constructor(){
		super();
		this.state={
			movies: [],
			movieWillWatch: [],
			sort_by: "popularity.desc"
			
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
	componentDidMount() {
    console.log();
    fetch(
    `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log();
        this.setState({
          movies: data.results
        });
      });
  }
	updateSortBy=value=>{
		this.setState({
			sort_by: value
		});
	}	
	
	render(){
     return (
    <div className="container">
		<div className="row"> 
		 <div className="col-9">
		 <div className="row mb-4">
		 <div className="col-12">
		 <MovieTabs sort_by={this.state.sort_by}
		 updateSortBy={this.updateSortBy}
		 />
		 </div>
		 </div>	
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
