import React from "react";

class Detalis extends React.Component{
	constructor(){
		super();
		this.state={
			
			
		};
		
	}
	
	render(){
  const{show, return_movie, img_d}= this.props;
  let year=(return_movie.release_date).substring(0, 4);
  const show_click=showc=>{
	return()=>{
	show(showc)}; 
;
}

	 return (
	 <div className="row card_detalis">
		 <div className="col-12 show_detalis">
		   <div className="row detalis">
		     <div className="col-0 col-sm-1  col-md-1  col-lg-1  col-xl-1"></div>
			 <div className="col-6 col-sm-6  col-md-5  col-lg-5  col-xl-5">
				 <img className="detaliImg" src={img_d}></img>
			 </div>
			 <div className="col-6 col-sm-4  col-md-5  col-lg-5  col-xl-5 description">
	            <h2 className="title_detalis">{return_movie.title} <span >({year})</span></h2>
	            <p>{return_movie.overview}</p>
			 </div>
			 <div className="col-0 col-sm-1  col-md-1  col-lg-1  col-xl-1"></div>	 
	          <button className="prev" onClick={show_click(true)}>Назад</button>
	           {/* <h3>{return_movie.title}</h3> */}
			
	      </div>
	 </div>
    </div>
		 );
}
	
}


	 
	 
	export default Detalis; 