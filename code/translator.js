
function changeLanguage() {

    let languageSelector = document.getElementById("language-selector")

    let selectedLanguage = languageSelector.options[languageSelector.selectedIndex].value
    
    //Menu
    const about = document.getElementById('about')
    const project = document.getElementById('project')
    const service = document.getElementById('service')
    const partner = document.getElementById('partner')
    const contact = document.getElementById('contact')

    //Botão
    const cartao = document.getElementById('cartao')
    const btnSister = document.getElementById('btnSister')
    const btnService = document.getElementById('btnService')
    const btnPartner = document.getElementById('btnPartner')

    //Textos
    const sobreNos = document.getElementById('aboutUS')
    const sobreNosTexto = document.getElementById('aboutUSTexto')

    const missao = document.getElementById('missao')
    const missaoTexto = document.getElementById('missaoTexto')

    const visao = document.getElementById('visao')
    const visaoTexto = document.getElementById('visaoTexto')

    const valores = document.getElementById('valores')
    const valoresTexto = document.getElementById('valoresTexto')

    const profissional = document.getElementById('profissional')
    const profissioanlTexto = document.getElementById('profissioanlTexto')
    const hub = document.getElementById('hub')

    const academico = document.getElementById('academico')
    const academicoTexto = document.getElementById('academicoTexto')

    const agilidade = document.getElementById('agilidade')
    const agilidadeTexto = document.getElementById('agilidadeTexto')

    const transparencia = document.getElementById('transparencia')
    const transparenciaTexto = document.getElementById('transparenciaTexto')

    const qualidade = document.getElementById('qualidade')
    const qualidadeTexto = document.getElementById('qualidadeTexto')

    const servicoTexto = document.getElementById('servicoTexto')
    const contratoTexto = document.getElementById('contratoTexto')
    const sisterTexto = document.getElementById('sisterTexto')
    const parceiroTexto = document.getElementById('parceiroTexto')

    //offcanvas EVA
    const evaHeader = document.getElementById('evaHeader')
    const evaBody = document.getElementById('evaBody')
    const evaQuestion01 = document.getElementById('evaQuestion01');
    const evaQuestion02 = document.getElementById('evaQuestion02')
    const evaQuestion03 = document.getElementById('evaQuestion03')
    const evaQuestion04 = document.getElementById('evaQuestion04')

    const evaAnswer01 = document.getElementById('evaAnswer01')
    const evaAnswer02 = document.getElementById('evaAnswer02')
    const evaAnswer03 = document.getElementById('evaAnswer03')
    const evaAnswer04 = document.getElementById('evaAnswer04')

    
    

    if (selectedLanguage === "en") {
        about.innerText = 'About'
        project.innerText = 'Project'
        service.innerText = 'Service'
        partner.innerText = 'Partners'
        contact.innerText = 'Contact'

        sobreNos.innerText = 'About us'
        sobreNosTexto.innerText = 'Welcome to Eduardo Marin Soluções Digitais, a constantly evolving innovation that takes pride in its journey since its inception in 2019. We embarked on our journey rooted in the realm of technical support, aiming to provide exceptional solutions for the day-to-day technological challenges faced by retail businesses in Itatiba region. As time passed, we expanded our scope to encompass web development, enabling us to offer a comprehensive suite of services to our clients.Learn more about our story by visiting our News Hub.'

        missao.innerText = 'Mission'
        missaoTexto.innerText = 'Our mission is to develop websites that increase our clients digital presence, offering a superior user experience and unique results to be part of something much greater.'
        
        visao.innerText = 'Vision'
        visaoTexto.innerText = 'Our vision is to be recognized for our excellence in design and development, customer service, implementation of automation systems, virtual assistants, and exceptional results.'
        
        valores.innerText = 'Values'
        valoresTexto.innerText = 'Excellence: \nWe always strive for excellence in everything we develop, from website design and functionality. \n\nInnovation:\nWe are always up-to-date with the latest trends and technologies, bringing innovative solutions to our clients.\n\n Partnership:\nWe value collaborative partnership with our clients to understand their needs and achieve their goals.'
        
        profissional.innerText = 'Professional Career'
        profissioanlTexto.innerText = 'Degree in Production Engineering and professional in Web Development, driven by the adrenaline of creating and developing projects.\n\nHis studies include the implementation of intelligent systems to enhance user experience and website design.\n\nIt`s not hard to find Eduardo, as you may find a rubber duck on his work desk, his companion in application debugging.'
        hub.innerText = 'News HUB'

        academico.innerText = 'Academic Career'
        academicoTexto.innerText = 'Author of two scientific articles published in the interdisciplinary journal RECIMA21 with a special participation in the National Congress of Scientific Initiation (CONIC) on the distribution of photovoltaic solar energy for electric vehicles.\n\nThe calculations were analyzed for the best strategy of panel installation, ensuring that the system can be implemented in any region of the world.\n\nThe project was based on Production Engineering and Electrical Engineering.'
    
        agilidade.innerText = 'Agile'
        agilidadeTexto.innerText = 'Applying agile methodology to ensure the practicality of monitoring the project through SCRUM tools.'
   
        transparencia.innerText = 'Transparency'
        transparenciaTexto.innerText ='Follow the project being developed weekly, visualizing the suggested improvements and implementations.'
    
        qualidade.innerText = 'Quality'
        qualidadeTexto.innerText = 'Thinking about innovative website design in order to ensure the best interface and experience for users.'
    
        servicoTexto.innerText = 'Section of developed projects and templates, choose between the options or create one together with the developer, who will provide you with all the available options.'
        
        contratoTexto.innerText = 'Need help with a project? Learn about the types of available hiring options so we can better assist you in achieving your goals.'
        
        sisterTexto.innerText = 'Meet the SISTERS Project, the new concept in virtual web assistants, created to guide users through your website and provide important information about topics related to your company.'
        
        parceiroTexto.innerText = 'Connected with a single goal. See the benefits of a partnership, be part of a team that thinks about development and quality.'
        
        cartao.innerText = 'Welcome Card'
        btnSister.innerText = 'Project SISTERS'
        btnService.innerText = 'Contract for services'
        btnPartner.innerText = 'Become a partner'

        evaHeader.innerText = 'Virtual Assistant - EVA'
        evaBody.innerText = '"I am an artificial intelligence called EVA. I am being developed by my creator.\n However, I can provide limited information for you. What information are you looking for?"'
        evaQuestion01 = 'Who are you?';
        evaQuestion02.innerText = 'Who is your creator?'
        evaQuestion03.innerText = 'I need a website tour'
        evaQuestion04.innerHTML = 'Project SISTERS'
        evaAnswer01.innerText = 'I am EVA, I was developed to assist travelers on their journeys to discover their goals.\nI was deployed in this environment to understand the needs of new travelers so that I can enhance my skills as an AI.\nI hope we can become partners during this journey, because I am very pleased to meet you.'
        evaAnswer02.innerText = 'My creator goes by the name of Eduardo Marin. He is a web developer and an enthusiast in AI. His main focus is to develop new websites, improve his skills in implementing AI, and creating new prototypes.'
        evaAnswer03.innerText = 'As you wish, traveler.\nOn this website, you can choose to browse or purchase website templates for your personal or professional goals.\nNot only that, but you can also choose to acquire the creator`s skills as a developer to assist you in your projects.\nAnd finally, you can connect with us by becoming a partner.\nAll this information you can find during your visit to our site. I hope you have a great experience. We`ll be here if you need us.'
        evaAnswer04.innerText = 'I am the first prototype of an AI called EVA.\nI am the model that will raise new sisters. To ensure our communication with all travelers and their needs.\nEach of the sisters will have a quality and ability, and even a name. This will be available in the near future.\nI hope I can stay a little longer with us. So you can witness the birth of the other sisters. It will be magnificent.'
    }
    else if (selectedLanguage === "pt") {
        about.innerText = 'Quem sou'
        project.innerText = 'Projeto'
        service.innerText = 'Serviços'
        partner.innerText = 'Parceiros'
        contact.innerText = 'Contato'

        sobreNos.innerText = 'Sobre nós'
        sobreNosTexto.innerText = 'Bem-vindo à Eduardo Marin Soluções Digitais, inovação em constante evolução, que tem orgulho de sua jornada desde o seu início em 2019. Iniciamos nossa jornada nas raízes do mundo do suporte técnico, onde buscamos fornecer soluções excepcionais para desafios tecnológicos do dia a dia para comercios varejistas da região de Itatiba - SP. Com o tempo, expandimos nosso escopo para incluir o desenvolvimento web, permitindo-nos oferecer um conjunto completo de serviços aos nossos clientes.Saiba mais sobre nossa história acessando nosso Hub de noticias'

        missao.innerText = 'Missão'
        missaoTexto.innerText = 'Nossa missão é desenvolver websites que aumentem a presença digital de nossos clientes, oferecendo uma experiência de usuário superior e resultados únicos para ser parte de algo muito maior.'
        
        visao.innerText = 'Visão'
        visaoTexto.innerText = 'Nossa visão é ser reconhecida por nossa excelência em design e desenvolvimento, atendimento ao cliente, implatação de sistemas de automação, assistentes virtuais e resultados excepcionais.'
        
        valores.innerText = 'Valores'
        valoresTexto.innerText = 'Excelência:\nBuscamos sempre a excelência em tudo o que desenvolvemos, desde o design e funcionalidade do website.\n\nInovação:\nEstamos sempre atualizados com as recentes tendências e tecnologias, trazendo soluções inovadoras para nossos clientes.\n\nParceria:\nValorizamos a colaboração em parceria com nossos clientes para entender suas necessidades e alcançar seus objetivos.'
        
        profissional.innerText = 'Profissional'
        profissioanlTexto.innerText = 'Formação em Engenharia de Produção e profissional em Desenvolvimento Web, movido pela adrenalina da criação e desenvolvimento de projetos.\n\nSeus estudos englobam a implementação de sistemas inteligentes para aprimorar a experiência do usuário e no design de websites.\n\nNão é difícil encontrar o Eduardo, pois em sua mesa de trabalho é capaz que você encontre um pato de borracha, o seu companheiro em debbug de aplicações.'
        hub.innerText = 'HUB'

        academico.innerText = 'Acadêmico'
        academicoTexto.innerText = 'Autor de dois artigos científicos publicados na revista interdisciplinar RECIMA21 com participação especial no Congresso Nacional de Iniciação Científica (CONIC) sobre a distribuição de energia solar fotovoltaica para veículos elétricos.\n\nOs calculos foram análisados sobre a melhor estratégia da instalação das placas, garantindo que o sistema possa ser implantada em qualquer região do mundo.\n\nO projeto teve o seu embasamento aplicado na Engenharia de Produção e Engenharia Elétrica.'
    
        agilidade.innerText = 'Agilidade'
        agilidadeTexto.innerText = 'Aplicando a metodologia ágil para garantir a praticidade de acompanhar o projeto através de ferramentas do SCRUM'
    
        transparencia.innerText = 'Transparência'
        transparenciaTexto.innerText = 'Acompanhe o projeto sendo desenvolvimento semanalmente, visualizando as melhorias e implemantações sugeridas.'
    
        qualidade.innerText = 'Qualidade'
        qualidadeTexto.innerText = 'Pensando no design inovador para websites, afim de garantir a melhor interface e experiência para os usuários'
    
        servicoTexto.innerText = 'Secção dos projetos e templates desenvolvidos, escolha entre as opções ou crie um junto com o desenvolvedor, que vai lhe passar todas as opções disponíveis.'
        
        contratoTexto.innerText = 'Precisando de uma ajuda em um projeto? Conheça os tipos de contratação disponíveis para melhor auxíliarmos você em seus objetivos.'
        
        sisterTexto.innerText = 'Conheça o Projeto SISTERS, o novo conceito em assistente web virtual, criadas para guiar usuários a navegar pelo seu site e fornecer informações importantes sobre os tópicos referentes a sua empresa.'
        
        parceiroTexto.innerText = 'Conectados com um único objetivo. Veja os benefícios de uma parceria,faça parte de uma equipe que pensa no desenvolvimento e qualidade.'
    
        
        cartao.innerText = 'Cartão de visita'
        btnSister.innerText = 'Projeto SISTERS'
        btnService.innerText = 'Contratação para serviços'
        btnPartner.innerText = 'Seja um parceiro'

        evaHeader.innerText = 'EVA - Assistente Virtual'
        evaBody.innerText = 'Eu sou uma inteligência artificial chamada EVA. Eu estou em desenvolvimento pelo meu criador.\nMas posso providênciar informações limitadas para você. Qual informação você procura?'
        evaQuestion01 = 'Quem é você?'
        evaQuestion02.innerText = 'Quem é o seu criador?'
        evaQuestion03.innerText = 'Preciso de um tour pelo site'
        evaQuestion04.innerHTML = 'Projeto SISTERS'
        evaAnswer01.innerText = 'Eu sou a EVA, eu fui desenvolvida para auxíliar viajantes em suas jornadas para descobrirem os seus objetivos.\nEu fui implantada nesse ambiente para entender as necessidades novos viajantes, para que eu possa aprimorar minhas habilidades como uma IA.\nEu espero que possamos nos tornar parceiros durante essa jornada, porquê eu estou muito contente em te conhecer.'
        evaAnswer02.innerText = 'Meu criador tem a identificação de Eduardo Marin. Ele é um desenvolvedor web e um entusiasta em IA. o sistema principal dele consiste em desenvolver novos websites, aprimorar seus conhecimentos em implatação de IA e desenvolvedor novos protótipos.'
        evaAnswer03.innerText = 'Como quiser viajante.\nNesse website, você escolher entre navegar ou comprar templates para websites para os seus objetivos pessoais ou profissionais.\nNão só isso, como também, você pode escolher adquirir as habilidades do criador como um desenvolvedor para auxíliar você em seus projetos.\nE finalmente, você pode se conectar com nós, se tornando um parceiro.\nToda essa informação você consegue encontrar durante a sua visita pelo nosso site. Eu espero que você tenha uma ótimo experiência. Nós estaremos aqui se precisar..'
        evaAnswer04.innerText = 'Eu sou o primeiro protótipo de IA chamada EVA.\nEu sou a modelo que vai erguer novas irmãs. Para garantir nossa comunicação com todos os viajantes e suas necessidades.\nCada uma das irmãs terá uma qualidade e habilidade e até mesmo um nome. Isso estará disponível em um futuro próximo.\nEspero que posso ficar um pouco a mais conosco. Para que você possa presenciar o nascimento das outras irmãs. Será magnifico!'
    }
  }