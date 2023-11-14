
function selectMessage() {
    let outputQuestion = document.getElementById('outputValue')
    let containerSent = document.getElementById('containerSent')
    let containerReceived = document.getElementById('containerReceived')

    const botMessage = [
        'Quais as especializações de serviços?',
        'Como ser um parceiro?',
        'Qual o foco da organização?',
        'Novos projetos?',
        'Contrato e serviços',
        'Testes profissionais'
    ]

    let select = document.getElementById('options')
    let selectedOption = select.value
    let answer = document.getElementById('outputAnswer')

    
    if(selectedOption === 'op1') {
        containerSent.style.backgroundColor = '#151515'
        containerSent.style.border = '1px solid #CFB776'
        containerReceived.style.backgroundColor = '#0e0e0e'
        containerReceived.style.border = '1px solid #CFB776'
        answer.innerText = '...'
        outputQuestion.innerText = `${botMessage[0]}`
        answer.style.animation = 'send .2s linear infinite'

        setTimeout(() => {
            containerReceived.style.backgroundColor = '#0e0e0e'
            containerReceived.style.border = '1px solid #CFB776'
             answer.innerText = 'As especializações de serviços envolvem o desenvolvimento web com foco nas técnologias de React | Java'
             
             answer.style.animation = 'none'

        }, 1000);            
    }
    if(selectedOption === 'op2') {
        containerSent.style.backgroundColor = '#151515'
        containerSent.style.border = '1px solid #CFB776'
        containerReceived.style.backgroundColor = '#0e0e0e'
        containerReceived.style.border = '1px solid #CFB776'
        answer.innerText = '...'
        outputQuestion.innerText = `${botMessage[1]}`
        answer.style.animation = 'send .2s linear infinite'
       

        setTimeout(() => {
            containerReceived.style.backgroundColor = '#0e0e0e'
            containerReceived.style.border = '1px solid #CFB776'
             answer.innerText = 'Entre em contato com Eduardo Marin através do Linkedin ou enviando um e-mail solicitando uma reunião para explicarmos sobre os benefícios da parceria.\n\nRessaltando que nosso foco é ajudar você a se destacar no mercado, portanto caso se tornar um parceiro, continue sempre se desenvolvendo e mantendo o profissionalismo.'
             answer.style.animation = 'none'
        }, 1000);
    }
    if(selectedOption === 'op3') {
        containerSent.style.backgroundColor = '#151515'
        containerSent.style.border = '1px solid #CFB776'
        containerReceived.style.backgroundColor = '#0e0e0e'
        containerReceived.style.border = '1px solid #CFB776'
        answer.innerText = '...'
        outputQuestion.innerText = `${botMessage[2]}`
        answer.style.animation = 'send .2s linear infinite'
       

        setTimeout(() => {
            containerReceived.style.backgroundColor = '#0e0e0e'
            containerReceived.style.border = '1px solid #CFB776'
             answer.innerText = 'Nosso foco é garantir o conforto e a inovação através do desenvolvimento de serviços para web, desde a criação de sites com a melhor interface e experiência para o usuário.'
             answer.style.animation = 'none'
        }, 1000);
    }
    if(selectedOption === 'op4') {
        containerSent.style.backgroundColor = '#151515'
        containerSent.style.border = '1px solid #CFB776'
        containerReceived.style.backgroundColor = '#0e0e0e'
        containerReceived.style.border = '1px solid #CFB776'
        answer.innerText = '...'
        outputQuestion.innerText = `${botMessage[3]}`
        answer.style.animation = 'send .2s linear infinite'
       

        setTimeout(() => {
            containerReceived.style.backgroundColor = '#0e0e0e'
            containerReceived.style.border = '1px solid #CFB776'
             answer.innerText = 'Atualmente estamos desenvolvendo novas aplicações destinadas para web e templates para websites.As quais você pode visualizar na sessão de Templates'
             answer.style.animation = 'none'
        }, 1000);
    }
    if(selectedOption === 'op5') {
        containerSent.style.backgroundColor = '#151515'
        containerSent.style.border = '1px solid #CFB776'
        containerReceived.style.backgroundColor = '#0e0e0e'
        containerReceived.style.border = '1px solid #CFB776'
        answer.innerText = '...'
        outputQuestion.innerText = `${botMessage[4]}`
        answer.style.animation = 'send .2s linear infinite'
       

        setTimeout(() => {
            containerReceived.style.backgroundColor = '#0e0e0e'
            containerReceived.style.border = '1px solid #CFB776'
             answer.innerText = 'Caso deseje contratar Eduardo para fazer parte de sua equipe, sugerimos encaminhar um e-mail ou entrar em contato pelo Likedin para agendar uma reunião.\n\nEduardo oferece prestações de serviços e também a opção de contratação profissional.\n\nApresente sua proposta e desejamos boa sorte na entrevista.'
             answer.style.animation = 'none'
        }, 1000);
    }
    if(selectedOption === 'op6') {
        containerSent.style.backgroundColor = '#151515'
        containerSent.style.border = '1px solid #CFB776'
        containerReceived.style.backgroundColor = '#0e0e0e'
        containerReceived.style.border = '1px solid #CFB776'
        answer.innerText = '...'
        outputQuestion.innerText = `${botMessage[5]}`
        answer.style.animation = 'send .2s linear infinite'
       

        setTimeout(() => {
            containerReceived.style.backgroundColor = '#0e0e0e'
            containerReceived.style.border = '1px solid #CFB776'
             answer.innerText = 'Atualmente você pode realizar o teste de nivelamento de inglês que está disponível na secção do Hub de noticias em TESTES.\n\nResponda o formulário para receber um certificado com a sua nota de aperfeiçoamento.'
             answer.style.animation = 'none'
        }, 1000);
    }






}