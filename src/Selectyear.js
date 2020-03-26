import React from "react";


const Selectyear=props=>{
  const {sort_year, year}=props;

  const select_year=add_year=>{
    return()=>{
    sort_year(add_year);}
  }


    return(
<div className="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Year: {year}
  </a>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a className="dropdown-item" href="#" onClick={select_year(2020)}>2020</a>
    <a className="dropdown-item" href="#" onClick={select_year(2019)}>2019</a>
    <a className="dropdown-item" href="#" onClick={select_year(2018)}>2018</a>
  </div>
</div>
    )

}




export default Selectyear;