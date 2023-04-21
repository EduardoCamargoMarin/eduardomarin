// Se você encontrou essa pasta, então é um desenvolvedor, se junte a nós nessa parceria
//Encaminhe uma solicitação para conhecer os benefícios.

function memberAccess() {
    let userId = document.getElementById('userId').value
    let userPassword = document.getElementById('userPassword').value

    if(userId === "M@ster_01!" && userPassword === "#io!47") {
        window.location.href = "/index.html"
    }
    else if(userId === "Root!!002" && userPassword === "PK_012@") {
        window.location.href = "/index.html"
    }
    else if(userId === "masterdev" && userPassword === "dev@202Dig#") {
        window.location.href = "/index.html"
    }
    else {
        alert("Acesso negado\nEntre em contato com o suporte técnico")
        
    }
}