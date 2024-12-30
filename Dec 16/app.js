let x = /^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/


document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('input', function () {
        let name = document.getElementById('first').value

        if (!x.test(name)) {

            if (!name) {


                document.getElementById('error').innerHTML = "*input field is empty"
                document.getElementById('error').style.color = "red"

            }
            else {
                document.getElementById('error').innerHTML = "input error"
            }
        }

        else {
            document.getElementById('error').innerHTML = " "
        }


    })

})