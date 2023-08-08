
function selectMessage() {
    let outputQuestion = document.getElementById('outputValue')
    let containerSent = document.getElementById('containerSent')
    let containerReceived = document.getElementById('containerReceived')

    const botMessage = [
        'Quais os setores das parcerias?',
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
             answer.innerText = 'Possuimos os setores de:\n\n1. Desenvolvimento Front-End\nRecomendamos os profissionais:\n\nMurilo Barbosa\nLead Code\n\n2. Desenvolvimento Back-End\nRecomendamos os profissionais:\n\nGabriel Costa\nMatheus Passareli\n\n3.Engenharia\nRecomendamos a empresa:\n\nGuimarães Engenharia\n\n4.Design\nRecomendamos a profissional:\n\nMayara Marin\n\n5.Infraestrutura\nRecomendamos o profissional:\n\nRodrigo Pupo\n\n6.Desenvolvimento Mobile\n\nEstamos com propostas em aberto para o setor de desenvolvimento Mobile, caso tenha intereresse, por favor entre em contato pelo e-mail: \n\nsolucaoduck@gmail.com'
             
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
             answer.innerText = 'Nosso foco é conectar as pessoas afim de expandir o network, garantindo que grandes empresas possam encontrar excelentes profissionais em um único lugar.\n\nAlem disso, queremos garantir o conforto e a inovação através de aplicações e assistentes virtuais e desenvolvimento de websites, com a melhor interface e experiência para o usuário.'
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
             answer.innerText = 'Atualmente estamos desenvolvendo novas aplicações destinadas para web e templates para websites.\n\n Alem disso estamos trabalhando em um novo departamento de capacitação e treinamento para todos os profissionais no mercado de T.I'
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