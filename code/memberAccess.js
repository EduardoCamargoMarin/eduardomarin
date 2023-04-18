
function memberAccess() {
    let userId = document.getElementById('userId').value
    let userPassword = document.getElementById('userPassword').value

    if(userId === "mayara" && userPassword === "123") {
        window.location.href = "/index.html"
    }
}