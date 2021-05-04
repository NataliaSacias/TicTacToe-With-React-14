import React, { useState } from "react";
// import Celda from "./celda.js";
import "./celda.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [game, setGame] = useState([
		" ",
		" ",
		" ",
		" ",
		" ",
		" ",
		" ",
		" ",
		" "
	]);

	const [turnoActual, setTurnoActual] = useState("X");

	const marcar = index => {
		let newGame = game.map((e, i) => {
			return index === i ? turnoActual : e;
		});

		if (turnoActual === "X") {
			setTurnoActual("O");
		} else {
			setTurnoActual("X");
		}

		setGame(newGame);
        let win = calculateWinner(game)
        setWinner(win)
	};

    
    const [winner, setWinner] = useState("")
	// funcion de reset

	const restart = () => {
		setGame([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
	};

	// funcion para evaluar si hay ganadores
	// const winner = () => {
	/*
        0,1,2 - 3,4,5 - 6,7,8
        0,3,6 - 1,4,7  - 2,5,8
        0,4,8 - 2,4,6
        cuadno llame a la funcion win q sea dentro de useEffect
        */

	// };

	function calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a];
			}
		}
		return null;
	}

	return (
		<div className="text-center mt-5">
			<section>
				<h1 className="game--title">Tic Tac Toe</h1>
				<h1 className="game--title">Tic Tac Toe</h1>
    <h1 className="game--title">El ganador es: {winner}1><h1                					{game.map((elemento, index) => {
						return (
							<div
								key={index}
								className="cell"
								onClick={() => {
									if (game[index] == " ") {
										marcar(index);
									}
								}}>
								{elemento}
							</div>
						);
					})}
				</div>
				<h2 className="game--status"></h2>
				<button
					className="game--restart"
					onClick={() => {
						restart();
					}}>
					Restart Game
				</button>
			</section>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
}
