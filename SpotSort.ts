let list: number[] = [16, 320, 331, 668];

function SpotSort (arr:number[]) {

let newarr = [];
    
	
    for (var _i = 0; _i < arr.length; _i++) {
		
        var num1 = list[_i];
        var num = list[_i];
        var count=0;
		
		while(num>0) {
		
		let remainder = num % 10;
		if (remainder ==0||remainder == 4 ||remainder == 6 ||remainder == 9)
			{count++;}
		if (remainder == 8 )
			{count=+2;}
		
		
        num = (num - remainder) / 10;
		
		
	}
    
	var a = {spot: count, Attr: num1};
	newarr.push(a);
	}
	
    newarr.sort(function(a,b){
    return a.spot - b.spot;});

	

	return newarr.map(t=>t.Attr);}

console.log(SpotSort (list));
