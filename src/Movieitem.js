import React from "react";


class MovieItem extends React.Component{
	constructor(){
		super();
		this.state={
			willWatch: false
			
		};
		
  }
 
	

	render(){
  const{movie, removeMovie, addmovieToWillWatch,removeMovieFromWillWatch, show}= this.props;
  let overview=(movie.overview).substring(0, 90);
  // стиль для прогрессбара
  let style_progress={
    width: `${movie.vote_average}`*10+"%"
  }
  // переменная с изобраениями фильмов
  let img_src=(
    `${movie.backdrop_path ||
      movie.poster_path}`!=="null" ? (`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
        movie.poster_path}`) : ("https://i.pinimg.com/originals/6b/47/fc/6b47fc6e834133f96124726200c4e2d7.jpg")
  )
   
  
  const show_click=(showc, movie_detalis, img_detalis) =>{
		return()=>{
    show(showc, movie_detalis, img_detalis); }
  
  }
	 return (<div className="card">
	 <img
     className="card-img-top"
     src={img_src} 
     alt=""
     />
        <div className="card-body">
     <h5 className="card-title">{movie.title}</h5>
      <p className="rating">rating movie</p>
       <div className="progress">
       <div className="progress-bar" role="progressbar" style={style_progress} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{movie.vote_average}</div>
       </div>
  <p className="overview">{overview}...<a className="more"  onClick={show_click(false, movie, img_src) }>more</a></p>
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