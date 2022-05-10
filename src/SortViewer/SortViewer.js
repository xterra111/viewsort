import React, { useEffect, useState } from "react";
import "./SortViewer.css";
import MergeSortAnimation from "../SortAlgos/MergeSortAnimation";

const SortViewer = () => {
	// initialize sort viewer array
	const [startArr, setStartArr] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		for (let i = 0; i < 649; i++) {
			startArr.push(Math.floor(Math.random() * (700 - 5 + 1) + 5));

			setLoaded(true);
		}
		console.log(startArr);
	}, [startArr]); // end useEffect ;

	//reset array
	const resetArray = () => {
		setStartArr([]);
		setLoaded(false);

		console.log(startArr);
	};

	const mergeSort = () => {
		const animations = MergeSortAnimation(startArr);
		for (let i = 0; i < animations.length; i++) {
			const arrayBars = document.getElementsByClassName("bar");
			const isColorChange = i % 3 !== 2;
			if (isColorChange) {
				const [barOneIdx, barTwoIdx] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				const barTwoStyle = arrayBars[barTwoIdx].style;
				const color = i % 3 === 0 ? "red" : "blue";
				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, i * 3);
			} else {
				setTimeout(() => {
					const [barOneIdx, newHeight] = animations[i];
					const barOneStyle = arrayBars[barOneIdx].style;
					barOneStyle.height = `${newHeight}px`;
				}, i * 3);
			}
		}
	};

	return (
		<div className="linecontainer">
			{" "}
			{startArr.map((item, index) => (
				<div className="bar" key={index} style={{ height: `${item}px` }}></div>
			))}
			<div>
				<button onClick={resetArray}>Generate New Array</button>
			</div>
			<div>
				<button onClick={mergeSort}>Merge Sort</button>
			</div>
		</div>
	);
};

export default SortViewer;
