function run(){
    document.getElementById("show").innerHTML = "Hello ! welcome in world of js"
}

addEventListener("load",()=>{
    run()
})


function ValidateMethod(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let student_id = document.getElementById('student-id').value
    let course = document.getElementById('course').value
    let dob =document.getElementById('dob').value
    let comments =document.getElementById('comments').value

    name_reg = /^[a-zA-Z ]{2,30}$/

    if (name_reg.test(name))
    {
        alert('name is correct')
        return false
    }
    alert('incoorect')
    return false
}