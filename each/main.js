function sumSquare(arr){
	total=0;
	each(arr,function(element,i){
		total=total+square(element);
    }) return total
}

function square(num){
  return num*num
  }

function someCube(arr){
	total=0;
	for(i=0;i<arr.length,i++){
		total=total+cube(arr[i]);
	}return total
} 

function cube(num){
	return num*num*num
}

function someCube1(arr){
	total=0;
	each(arr,function(element,i){
		return total=total+cube(element)
	})
	return total
}

function product(arr){
	total=1;
	for(i=0;i<arr.length;i++){
		total=total*arr[i];
	}
	  return total
}

function product1(arr){
	total=1;
	each(arr,function(element,i){
		total=total*element
	})
	return total
}

function cubeAll(arr){
	acc[];
	each(arr,function(element,i){
		acc.push(cube(element))
	})
	  return acc
}

function cubeAll1(arr){
	acc[];
	for(i=0;i<arr.length;i++){
		acc.push(cube(arr[i]));
	}
	  return acc
}

function sumByElementsByFour(arr){
	total=0;
	each(arr,function(element,i){
		total=total+(4*element);
	})
	  return total
}

function indexedExponenetial(array){
	acc=[]
	each(array,function(element,i){
    acc.push(Math.pow(element,i))
    
    })
       return acc;
}

function evenIndexedOdd(array){
	acc=[]
	each(array,function(element,i){
		if(element%2===0)&&(i%2!==0){
			acc.push(element)
		}
	})
	   return acc
}

function evenIndexedEvenLength(array){
	acc=[];
	each(array,function(element,i){
		if(i%2===0)&&(element.length%2===0){
			acc.push(element)
		}
	})
	    return acc
}


function values(obj){
  arr=[];
    each(obj,function(element,key){
    	acc.push(element)
    })
      return acc
}

function keys(obj){
	arr[];
	each(obj,function(element,key){
		acc.push(key)
	})
	   return acc
}

function keysLonger(obj,num){
	obj1{};
	each(obj,function(element,key){
		if(key.length>num && element.length>num){
			obj1[key]=element;
		}
	}) return obj1
}


function incrementValues(obj){
	obj1{};
	each(obj,function(element,key){
		if (typeOf element!=="number"){
			 obj1[key]=element
		}   obj1[key]=element+1
	})
	  return obj
}

function transform(obj){
	obj1{};
	each(obj,function(element,key){
		if(typeOf element==="object"){
			acc=[];
            obj1[key]=acc.push(element)
		}
		 else if(typeOf element==="array"){
		 	obj2={};
		 	obj1[key]=

	}
}




