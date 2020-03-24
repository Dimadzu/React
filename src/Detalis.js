import React from "react";

class Detalis extends React.Component{
	constructor(){
		super();
		this.state={
			
			
		};
		
	}
	
	render(){
  const{show, return_movie}= this.props;
  console.log(return_movie);
  const show_click=showc=>{
	return()=>{
	show(showc)}; 
;
}

	 return (
	 <div className="card_detalis">
	<button className="prev" onClick={show_click(true)}>Назад</button>
	 <h3>{return_movie.title}</h3>
    </div>
		 );
}
	
}


	 
	 
	export default Detalis; 