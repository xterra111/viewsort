import React, { useEffect, useState } from "react";
import "./SortViewer.css";

const SortViewer = () => {
	// initialize sort viewer array
	const [startArr, setStartArr] = useState([]);
	const [loaded, setLoaded] = useState(false);
	//const startArr = [];
	//Randomizer
	// Allows random intervals that do not start with 1. So you can get a random number from 10 to 15 for example.

	// const randomIntFromInterval = (min, max) => {
	// 	return Math.floor(Math.random() * (max - min + 1) + min);
	// };

	useEffect(() => {
		for (let i = 0; i < 600; i++) {
			startArr.push(Math.floor(Math.random() * (700 - 5 + 1) + 5));

			setLoaded(true);
		}
		console.log(startArr);
	}, []); // end useEffect ;

	return (
		<div className="linecontainer">
			{" "}
			{startArr.map((item, index) => (
				<div className="bar" key={index} style={{ height: `${item}px` }}></div>
			))}
		</div>
	);
};

export default SortViewer;
