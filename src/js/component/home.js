import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./navBar.js";
import { Jumbotron } from "./jumbotron.js";
import { Cards } from "./cards.js";
import Footer from "./Footer";

//create your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<Jumbotron />
			<Cards />
			<Footer />
		</div>
	);
}
