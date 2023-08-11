window.addEventListener("load", () => {
    let popoverLoading = document.createElement('p')

    popoverLoading.textContent = "Carregando em segundo plano..."
    popoverLoading.style.color = "#f7f7f7"
    popoverLoading.style.zIndex = '100'
    
    let popoverLoadingContainer = document.getElementById('secondLoader')
    
    popoverLoadingContainer.appendChild(popoverLoading)
        const secondLoader = document.getElementById('secondLoader')
        secondLoader.style.display = 'none'
    }
)

setTimeout(() => {
    const loader = document.getElementById('abc')
    loader.style.display = 'none'
    popoverLoading.style.display = 'none' 
}, 1000);



