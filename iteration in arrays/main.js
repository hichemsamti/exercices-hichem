function sum(arr){
	total=0
	for(i=0;i<arr.length;i++){
		total=total+arr[i];
		return total
	}

}

function max(arr){
	max=arr[0];
	for(i=0;i<arr.length;i++){
		if(max<arr[i]){
			max=arr[i];
		}
	}
	return max;
}

function remove(arr,element){
     occ=element;
	for(i=0;i<arr.lenght;i++){
		if (occ===arr[i]){
			arr.slice(i,1);
			i--;    //?????
		}
	}
	return arr
}

function longestWord(str){
	var arr=str.split(' ');

	for(i=0;i<arr.length;i++){
       max=arr[0].length;
       if(max<arr[i].length){
       	max= arr[i];
       }
    }
    return max
}

function even(arr){
	for(i=0;i<arr.length;i++){
		if(arr.length%2!==0){
			arr.slice(i,1);
			i--;
		}
	}	
	    return arr
}

function average(arr){
	
	for(i=0;i<arr.length;i++){
		x=sum(arr)/arr.length;
	}
		return x
}

function countChar(str,carac){
	count=0;
	var x=str.split('');
	for(i=0;i<x.length;i++){
		if(x[i]=carac){
			true;
			count=count+1;
		}
	}
	return count
}