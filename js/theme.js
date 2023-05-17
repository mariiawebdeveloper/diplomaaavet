function changeTheme() {
    let checkBox = document.getElementById('checkbox')
    let body = document.querySelector("body")
    let buttons = document.querySelectorAll('.buttons')

    if (checkBox.checked === true) {
        buttons.forEach((e) => {
            e.style.color = 'blue'
        })
        body.style.backgroundColor = "black";

    } else {
        buttons.forEach((e) => {
            e.style.color = '#6ED29C'
        })
        body.style.backgroundColor = "#6ED29C";

    }
}
