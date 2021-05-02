import React from "react";
import Celda from "./celda.js";
import "./celda.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<section>
				<h1 className="game--title">Tic Tac Toe</h1>
				<div className="game--container">
					<Celda />
					<Celda />
					<Celda />
					<Celda />
					<Celda />
					<Celda />
					<Celda />
					<Celda />
					<Celda />
				</div>
				<h2 className="game--status"></h2>
				<button className="game--restart">Restart Game</button>
			</section>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
}
