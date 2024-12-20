import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav >
			<div className="row align-items-center my-2">
				<div className="col-4 text-center fs-3"><span>GeekBank</span></div>
				<div className="col-6"></div>
				<div className="col-2">
				<select name="" id="">
					<option value="">En</option>	
					<option value="">Es</option>
				</select></div>
			</div>
		</nav>
	);
};
