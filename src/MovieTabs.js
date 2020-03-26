import React from "react";

const MovieTabs = props => {
	const{sort_by, updateSortBy}=props;
	const handleClick=value=>{
		return()=>{
		updateSortBy(value)}
	}
	const getClassLink=value=>{
		return `nav-link ${sort_by===value ? "active" : ""}`
	}
  return (
    // <ul className="tabs nav nav-pills">
    //   <li className="nav-item">
    //     <div className={getClassLink("popularity.desc")} onClick={
    //  handleClick("popularity.desc")}>
    //       Popularity desc
    //     </div>
    //   </li>
    //   <li className="nav-item">
    //     <div className={getClassLink("revenue.desc")} onClick={
    //  handleClick("revenue.desc")}>Revenue desc</div>
    //   </li>
    //   <li className="nav-item">
    //     <div className={getClassLink("vote_average.desc")} onClick={
    //  handleClick("vote_average.desc")}>Vote avetage desc</div>
    //   </li>
    // </ul>
    <div className="dropdown">
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       {sort_by}
    </a>
  
    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <a className="dropdown-item" href="#" onClick={handleClick("popularity.desc")}> Popularity desc</a>
      <a className="dropdown-item" href="#" onClick={handleClick("revenue.desc")}>Revenue desc</a>
      <a className="dropdown-item" href="#" onClick={handleClick("vote_average.desc")}>Vote avetage desc</a>
    </div>
  </div>
  );
};

export default MovieTabs;