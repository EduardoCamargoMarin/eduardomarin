
let popoverLoading = document.createElement('p')

popoverLoading.textContent = "Carregando em segundo plano..."
popoverLoading.style.color = "#f7f7f7"

let popoverLoadingContainer = document.getElementById('secondLoader')

popoverLoadingContainer.appendChild(popoverLoading)

setTimeout(() => {
    const loader = document.getElementById('abc')
       loader.style.display = 'none'
       popoverLoading.style.display = 'none'
}, 2200);

setTimeout(() => {
    const secondLoader = document.getElementById('secondLoader')
    secondLoader.style.display = 'none'
},15000);