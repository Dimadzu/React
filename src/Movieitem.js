import React from "react";


class MovieItem extends React.Component{
	constructor(){
		super();
		this.state={
			willWatch: false
			
		};
		
  }
 
	

	render(){
  const{movie, removeMovie, addmovieToWillWatch,removeMovieFromWillWatch, show, return_movie_detalis}= this.props;
  let overview=(movie.overview).substring(0, 90);
  const show_click=(showc, movie_detalis) =>{
		return()=>{
    show(showc, movie_detalis); }
  
  }
  // const  return_movie=movie_detalis=>{
  //   return()=>{
  //     return_movie_detalis(movie_detalis);
  //   }
  // }
  

	 return (<div className="card">
	 <img
     className="card-img-top"
     src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
       movie.poster_path}`} 
     alt=""
     />
        <div className="card-body">
     <h5 className="card-title">{movie.title}</h5>
    
       <div className="cont">
         <div className="border_cont">
           <h3>{movie.vote_average}</h3>
         </div>
       </div>
  <p className="overview">{overview}...<a className="more"  onClick={show_click(false, movie) }>more</a></p>
  <div className="flexButton">
       {this.state.willWatch ? ( <button type="button" className="btn btn-sucess" onClick={ () =>
       {this.setState({
       willWatch: false
              });
        removeMovieFromWillWatch(movie)}}>
         Remove Will Watch
       </button>):(
<button type="button" className="btn btn-secondary"
onClick={ () =>{
this.setState({
		willWatch: true
	});
addmovieToWillWatch(movie)}}>
         Add Will Watch
       </button>)}
       
    
		 <button onClick={removeMovie.bind(null,movie)}>Delete item</button>
     </div>
</div>
</div>
		 );
}
	
}


	 
	 
	export default MovieItem; 