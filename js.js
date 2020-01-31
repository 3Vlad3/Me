

function checkIdentity (arr1, arr2) {
	
	if (arr1.length <= arr2.length) {
		smaller = arr1;
		bigger = arr2;

	} else {
		smaller = arr2;
		bigger = arr1;
	}

	return smaller.every(item => bigger.includes(item))

};


const arr1 = [1,2,5,3,4]
const arr2 = [5,4,1,3,2]

console.log(checkIdentity(arr1, arr2))

function checkObj (obj) {
	for (key in obj) {
		if (obj.key === obj.key) {
			return true;
		} 

	} 
else return false

}


const obj = [
	{
	name: 'Honda';
	prod: 2005
},
{
	name: 'Nissan';
	prod: 2004
},
{
	name: 'Ferrari';
	prod: 2004

}
]

console.log(checkObj(obj))


