import React from "react";

const Pagination = props => {
	const{page, paginationPage, total_pages}=props;
	const nextClick=pagevalue=>{
		if(pagevalue>=1){
		return ()=>{
			paginationPage(pagevalue)
		}
	
	}
	}
  return (
     <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item" onClick={nextClick(props.page-1)}><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">{props.page}</a></li>
	<li class="page-item"><a class="page-link" href="#">...</a></li>
	<li class="page-item"><a class="page-link" href="#">{props.total_pages}</a></li>	
    <li class="page-item" onClick={nextClick(props.page+1)}><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
  );
};

export default Pagination;