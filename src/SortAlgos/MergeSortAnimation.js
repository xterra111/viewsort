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

	while (startingIndex2 <= middleIndex && middleIndex1 <= endingIndex) {
		//compare the values and change the color.
		animations.push([startingIndex2, middleIndex1]);
		//Do it a second time to revert the color.
		animations.push([startingIndex2, middleIndex1]);

		if (tempArray[startingIndex2] <= tempArray[middleIndex1]) {
			animations.push([startingIndex1, tempArray[startingIndex2]]);
			arrayToSort[startingIndex1++] = tempArray[startingIndex2++];
		} else {
			animations.push([startingIndex1, tempArray[middleIndex1]]);
			arrayToSort[startingIndex1++] = tempArray[middleIndex1++];
		}
	}
	while (startingIndex2 <= middleIndex) {
		animations.push([startingIndex2, startingIndex2]);
		animations.push([startingIndex2, startingIndex2]);
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
