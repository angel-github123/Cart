import React from "react";

function Title(title){
	const data = title.title;
	return(
		<div className="header">
			<h1>{data}</h1>
		</div>
	)
}

export default Title;