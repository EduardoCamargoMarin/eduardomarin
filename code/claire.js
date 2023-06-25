
function selectMessage() {
    let outputQuestion = document.getElementById('outputValue')
    let containerSent = document.getElementById('containerSent')
    let containerReceived = document.getElementById('containerReceived')

    const botMessage = [
        'Ajuda na busca de emprego',
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
             answer.innerText = 'Em nosso banco de dados possuímos algumas sugestões para te auxiliar na busca de emprego.\n\n1.Currículo coerente com informações claras e objetivas.\n\n2.Plataformas como Linkedin,Vagas.com são excelentes para a busca de emprego e networking.\n\n3.Vagas importantes raramente são divulgadas,então lembre de montar um e-mail estruturado para ter mais chances de entrevista.'
             
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