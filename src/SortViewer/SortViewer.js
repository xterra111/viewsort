import React, { useEffect, useState } from "react";

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
		for (let i = 5; i < 100; i++) {
			startArr.push(Math.floor(Math.random() * (10000 - 5 + 1) + 5));

			setLoaded(true);
		}
		console.log(startArr);
	}, []); // end useEffect ;

	return (
		<div>
			{" "}
			{startArr.map((item, index) => (
				<div key={index}>{item}</div>
			))}
		</div>
	);
};

export default SortViewer;
