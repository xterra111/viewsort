import "./App.css";
import SortViewer from "./SortViewer/SortViewer";

function App() {
	return (
		<div className="App">
			<SortViewer />
		</div>
	);
}

// function mergeSortHelper(
// 	mainArray,
// 	startIdx,
// 	endIdx,
// 	auxiliaryArray,
// 	animations
// ) {
// 	if (startIdx === endIdx) return;
// 	const middleIdx = Math.floor((startIdx + endIdx) / 2);
// 	mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
// 	mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
// 	doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
// }

export default App;
