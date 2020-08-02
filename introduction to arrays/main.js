function firstElement(arr){
	return arr[0];
}

function lastElement(arr){
	return arr[arr.length-1];
}

function nthElement(arr,index){
	 arr[index];
	 return arr
}

function exceptFirst(arr){
	 arr.slice(1,arr.length-1);
	 return arr
}

function butLast(arr){
	 arr.slice(0,arr.length-1)
	 return arr
}

function cons(arr,element){
	 arr.unshift(element);
	 return arr

}

function conj(arr,element){
	 arr.push(element);
	 return arr
}