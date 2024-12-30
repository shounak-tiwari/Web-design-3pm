function funname(){
	
	const dob = document.getElementById('dob').value;
	
	const dob = new Date(dob)
	
	const today = new Date()
	
	let year  = today.getFullyear()-dob.getFullyear();
	let month  = today.getMonth() - dob.getMonth();
	let day = today.getDate() - dob.getDate();
	
	if (day<0){
		month --;
		const prevmonth = new Date(today.getFullYear(),today.getMonth(),0)
		
		day = day + prevmonth.getDate();
	}
	
	if (month <0){
		year --;
		month +=12;
	}
	
	
	alert (`${year} ${month} ${day}`
}
