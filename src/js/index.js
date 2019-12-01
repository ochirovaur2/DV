// import str from './modules/Search';

// //import { add, id} from './view/searchView';

// import * as searchView from './view/searchView';
// console.log(`${searchView.add(searchView.id, 2)} str`)

let infoToCalc;
let secondDiv = document.querySelector('.listOfCountries');
let paragrpaphOfSum = document.querySelector('.sum');
let space  = " ";
let arrOfinfoToCalc;

let sum = 0;
let sum0fMonth = 0;
let list = document.querySelector('.list');
const months = ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'];
const years = ['2017', '2018', '2019', '2020', '2021', '2022'];



document.querySelector("#main-btn").onclick = function() {
	if(infoToCalc = document.querySelector("#text").value){
		document.querySelector(".output").style.visibility = "visible";

		

		arrOfinfoToCalc = splitString(infoToCalc, space);
		for(let i = 0; i < arrOfinfoToCalc.length; i++) {
			if(arrOfinfoToCalc[i] == "DV1" || arrOfinfoToCalc[i] == "DV2" || arrOfinfoToCalc[i] == "DV3") {

			// if(arrOfinfoToCalc[i] == "DV1") {
				// console.log(`${arr[i]} ${+arr[i + 1].charAt(0)}`);
				
				
				
				let li = `<li>${arrOfinfoToCalc[i]}: ${arrOfinfoToCalc[i + 1]} (${arrOfinfoToCalc[i + 2]})</li>`
				secondDiv.insertAdjacentHTML('beforeend', li)
				let num = +arrOfinfoToCalc[i + 1];
				sum+= num;
				sum0fMonth += num;
			}
			
			
		}

		let li;

		months.forEach((el)=> {
				
			if(infoToCalc.includes(el) ){
				
				
				let arr = splitString(infoToCalc, space);
				let index = arr.indexOf(el)
				let year = arr[index + 1];
				let FY = arr[index + 2];
				let FYyear = arr[index + 3];
				console.log(arr[index + 1]);

				li = `<li>${year} ${el} ${FY} ${FYyear}: ${sum0fMonth}</li>`
				
			}
			
		});

		// years.forEach((el)=> {
				
		// 	if(infoToCalc.includes(el) ){
		// 		li = `<li>${el} ${li}`;
		// 	}
			
		// });

		list.insertAdjacentHTML('beforeend', li);


		document.querySelector("#text").value = "";
		
		paragrpaphOfSum.innerHTML = sum;
		sum0fMonth = 0;
	} else {
		alert('Please enter data')
	}
	
	
}


function splitString(stringToSplit, separator) {
	let arrayOfStrings = stringToSplit.split(separator);
	return arrayOfStrings;
}





