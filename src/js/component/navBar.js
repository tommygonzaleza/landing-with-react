import React from "react";

function NavBar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Start Boostrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div
				className="collapse navbar-collapse ml-auto"
				id="navbarNavAltMarkup">
				<div className="navbar-nav ml-auto">
					<a className="nav-item nav-link active" href="#">
						Home <span className="sr-only">(current)</span>
					</a>
					<a className="nav-item nav-link" href="#">
						About
					</a>
					<a className="nav-item nav-link" href="#">
						Services
					</a>
					<a className="nav-item nav-link" href="#">
						Disabled
					</a>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
