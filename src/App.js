
import ReactDOM from 'react-dom';
import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
//import {moviesData} from './moviesData';
import MovieItem from './Movieitem';
import {API_URL, API_KEY_3} from './api.js';
import MovieTabs from './MovieTabs.js';
import Pagination from './Pagination.js';
import Detalis from './Detalis';




class App extends React.Component{
	
	constructor(){
		super();
		this.state={
			movies: [],
			movieWillWatch: [],
			sort_by: "popularity.desc",
			page: 1,
			totalPages: " ",
			showDetalis: true
			
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
     this.getMovies();
 
  }; 

 componentDidUpdate(prevProps, prevState){
	  if((prevState.page!==this.state.page) || (prevState.sort_by!==this.state.sort_by)){
	this.getMovies();
	  }
	  
  }
    getMovies=()=>{
	   fetch(
    `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}&page.maximum`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
		console.log(data);
        this.setState({
          movies: data.results,
		  totalPages: data.total_pages	
        });
      });	
		
	}
	updateSortBy=value=>{
		this.setState({
			sort_by: value
		});
	}
	update_showDetalis=()=>{
		this.setState({
			showDetalis: false
		});
	}
	
	paginationPage=pagevalue=>{
		this.setState({
			page: pagevalue
		});
	}
	
	render(){
     return (
    <div className="container">
		<div className="row"> 
		 <div className="col-10">
		 <div className="row mb-4">
		 <div className="col-12">
		 <MovieTabs sort_by={this.state.sort_by}
		 updateSortBy={this.updateSortBy}
		 />
		 </div>
		 </div>	
		 {this.state.showDetalis===true ? (
		 <div className="row">
		 {this.state.movies.map(movie=>{
		 return(
		 <div className="col-6" key={movie.id}>
		 <MovieItem 
		  movie={movie}
		  show={this.update_showDetalis}
		  removeMovie={this.removeMovie}
		 addmovieToWillWatch={this.addmovieToWillWatch}
		 removeMovieFromWillWatch={this.removeMovieFromWillWatch}/>

		 </div> 
		 ) 
		 })}
		 </div>) : (
			< Detalis/> 
		 )}
		  <div className="row mb-4">
		 <div className="col-12">
		 <Pagination
		 total_pages={this.state.totalPages}
		 page={this.state.page}
		 paginationPage={this.paginationPage}/>
		 </div>
		 </div>	
	      </div> 
      <div className="col-2">
		  <p>Will watch: {this.state.movieWillWatch.length}</p>
		  </div>
	 	</div> 
    </div>
		 );
	}
};


export default App;
