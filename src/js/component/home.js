import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./navBar.js";
import Footer from "./Footer";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-0git ad">
			<NavBar />

			<Footer />
		</div>
	);
}
