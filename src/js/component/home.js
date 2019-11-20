import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Jumbotron } from "./jumbotron.js";
import { Cards } from "./cards.js";

//create your first component
export function Home() {
	return (
		<div>
			<Jumbotron />
			<Cards />
		</div>
	);
}
