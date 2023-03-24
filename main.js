//using find and findindex 4
		
		//find
		  const detail=[ {name:"john cena", age:30},
						 {name:"virat", age:31},
						 {name:"sachin", age:36},
						 {name:"john", age:46}]
		 
		 let v=detail.find(function(fin){
			 return fin.name.indexOf("john")>=0
			 
		 });
		 console.log(v);
		 
		 //findIndex
		 
		let z=detail.findIndex(function(fin){
			 return fin.name.indexOf("john")>=0
			 
		 });
		 console.log(z);