function CheckAge(params) {
    // current date print 
    let x = new Date()
    let current_year = x.getFullYear()
    let current_month = x.getMonth() + 1
    let current_date = x.getDate()

    document.getElementById('result1').innerHTML = `year : ${current_year} <br> month : ${current_month} <br> date  : ${current_date}`


    // date of birth 
    let dob = document.getElementById('dob').value
    let dob_x = new Date(dob)
    let dob_x_year = dob_x.getFullYear()
    let dob_x_month = dob_x.getMonth() + 1
    let dob_x_date = dob_x.getDate()
    document.getElementById('result2').innerHTML = `year : ${dob_x_year} <br> month : ${dob_x_month} <br> date  : ${dob_x_date}`


    if (dob_x_month==current_month) {
        if (dob_x_date>current_date) {
    
    
            age_year =  current_year-dob_x_year-1

            month = current_month-dob_x_month

            document.getElementById('result3').innerHTML = `year : ${age_year} <br> month : ${month}`
        }
    }
    return false

}

// addEventListener("load",CheckAge)

let btn = document.getElementById('subbtn')

btn.addEventListener("click", CheckAge)