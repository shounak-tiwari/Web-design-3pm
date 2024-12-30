function* genrator(){
	console.log('happy js')
	//yield 1;
//	yield 2;
	yield 3;

}


const x = genrator()

console.log(x.next().value)
