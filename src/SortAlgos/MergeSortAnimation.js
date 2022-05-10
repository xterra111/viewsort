import React from "react";

const MergeSortAnimation = (arrayToSort) => {
	const animations = [];
	if (arrayToSort.length <= 1) return arrayToSort;
	const tempArray = arrayToSort.slice();
	mergeSortHelper(tempArray, 0, tempArray.length - 1, arrayToSort, animations);

	return animations;
};

const mergeSortHelper = (
	arrayToSort,
	startingIndex,
	endingIndex,
	tempArray,
	animations
) => {
	if (startingIndex === endingIndex) return;
	const middleIndex = Math.floor((startingIndex + endingIndex) / 2);
	mergeSortHelper(
		tempArray,
		startingIndex,
		middleIndex,
		arrayToSort,
		animations
	);
	mergeSortHelper(
		tempArray,
		middleIndex + 1,
		endingIndex,
		arrayToSort,
		animations
	);
	doMerge(
		arrayToSort,
		startingIndex,
		middleIndex,
		endingIndex,
		tempArray,
		animations
	);
};

const doMerge = (
	arrayToSort,
	startingIndex,
	middleIndex,
	endingIndex,
	tempArray,
	animations
) => {
	let startingIndex1 = startingIndex;
	let startingIndex2 = startingIndex;
	let middleIndex1 = middleIndex + 1;

	while (startingIndex1 <= middleIndex && middleIndex1 <= endingIndex) {
		animations.push([startingIndex1, middleIndex1]);

		if (arrayToSort[startingIndex1] <= tempArray[middleIndex1]) {
			animations.push([startingIndex1, tempArray[startingIndex2]]);
			arrayToSort[startingIndex1++] = tempArray[startingIndex2++];
		} else {
			animations.push([startingIndex1, tempArray[middleIndex1]]);
			arrayToSort[startingIndex1++] = tempArray[middleIndex1++];
		}
	}
	while (startingIndex1 <= middleIndex) {
		animations.push([startingIndex1, startingIndex1]);
		animations.push([startingIndex1, startingIndex1]);
		animations.push([startingIndex1, tempArray[startingIndex2]]);
		arrayToSort[startingIndex1++] = tempArray[startingIndex2++];
	}
	while (middleIndex1 <= endingIndex) {
		animations.push([middleIndex1, middleIndex1]);
		animations.push([middleIndex1, middleIndex1]);

		animations.push([startingIndex1, tempArray[middleIndex1]]);
		arrayToSort[startingIndex1++] = tempArray[middleIndex1++];
	}
};

export default MergeSortAnimation;
