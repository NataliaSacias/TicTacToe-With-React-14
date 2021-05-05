import React, { useState, useEffect } from "react";
// import Celda from "./celda.js";
import "./celda.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [game, setGame] = useState(["", "", "", "", "", "", "", "", ""]);

	const [turnoActual, setTurnoActual] = useState("");

	const [winner, setWinner] = useState("");

	useEffect(() => {
		calculateWinner(game);
	}, [game]);

	const marcar = index => {
		let newGame = game.map((e, i) => {
			return index === i ? turnoActual : e;
		});
		setGame(newGame);
		cambiarTurno();
	};

	const cambiarTurno = () => {
		if (turnoActual === "X") {
			setTurnoActual("O");
		} else {
			setTurnoActual("X");
		}
		return turnoActual;
	};

	// funcion de reset

	const restart = () => {
		setGame(["", "", "", "", "", "", "", "", ""]);
	};

	// funcion para evaluar si hay ganadores

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
				alert("Ganaste", game[a]);
				restart();
			}
		}
		return null;
	}

	return (
		<div className="text-center mt-5">
			<section>
				<input type="text" />
				<input></input>
				<button
					onClick={() => {
						setTurnoActual("O");
					}}>
					O
				</button>
				<button
					onClick={() => {
						setTurnoActual("X");
					}}>
					X
				</button>
			</section>

			<section>
				<h1 className="game--title">Tic Tac Toe</h1>
				{/* <h3 className="game--title">GANÓ {winner}</h3> */}

				<div className="game--container">
					{game.map((elemento, index) => {
						return (
							<div
								key={index}
								className="cell"
								onClick={() => {
									if (game[index] == "") {
										marcar(index);
									}
								}}>
								{elemento}
							</div>
						);
					})}
				</div>
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
