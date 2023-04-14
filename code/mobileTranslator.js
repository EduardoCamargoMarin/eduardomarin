

function changeMobile() {

    let languageSelectorMobile = document.getElementById("language-selector-mobile")

    let languageMobile = languageSelectorMobile.options[languageSelectorMobile.selectedIndex].value
    
    const about = document.getElementById('about')
    const project = document.getElementById('project')
    const service = document.getElementById('service')
    const partner = document.getElementById('partner')
    const contact = document.getElementById('contact')

    const cartao = document.getElementById('cartao')
    const btnSister = document.getElementById('btnSister')
    const btnService = document.getElementById('btnService')
    const btnPartner = document.getElementById('btnPartner')

    const missao = document.getElementById('missao')
    const missaoTexto = document.getElementById('missaoTexto')

    const visao = document.getElementById('visao')
    const visaoTexto = document.getElementById('visaoTexto')

    const valores = document.getElementById('valores')
    const valoresTexto = document.getElementById('valoresTexto')

    const profissional = document.getElementById('profissional')
    const profissioanlTexto = document.getElementById('profissioanlTexto')

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

    if (languageMobile === "en") {
        about.innerText = 'About'
        project.innerText = 'Project'
        service.innerText = 'Service'
        partner.innerText = 'Partners'
        contact.innerText = 'Contact'

        missao.innerText = 'Mission'
        missaoTexto.innerText = 'Our mission is to develop websites that increase our clients digital presence, offering a superior user experience and unique results to be part of something much greater.'
        
        visao.innerText = 'Vision'
        visaoTexto.innerText = 'Our vision is to be recognized for our excellence in design and development, customer service, implementation of automation systems, virtual assistants, and exceptional results.'
        
        valores.innerText = 'Values'
        valoresTexto.innerText = 'Excellence: \nWe always strive for excellence in everything we develop, from website design and functionality. \n\nInnovation:\nWe are always up-to-date with the latest trends and technologies, bringing innovative solutions to our clients.\n\n Partnership:\nWe value collaborative partnership with our clients to understand their needs and achieve their goals.'
        
        profissional.innerText = 'Professional Career'
        profissioanlTexto.innerText = 'Degree in Production Engineering and professional in Web Development, driven by the adrenaline of creating and developing projects.\n\nHis studies include the implementation of intelligent systems to enhance user experience and website design.\n\nIt`s not hard to find Eduardo, as you may find a rubber duck on his work desk, his companion in application debugging.'
    
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
    
    } 
    else if (languageMobile === "pt") {
        about.innerText = 'Quem sou'
        project.innerText = 'Projeto'
        service.innerText = 'Serviços'
        partner.innerText = 'Parceiros'
        contact.innerText = 'Contato'

        missao.innerText = 'Missão'
        missaoTexto.innerText = 'Nossa missão é desenvolver websites que aumentem a presença digital de nossos clientes, oferecendo uma experiência de usuário superior e resultados únicos para ser parte de algo muito maior.'
        
        visao.innerText = 'Visão'
        visaoTexto.innerText = 'Nossa visão é ser reconhecida por nossa excelência em design e desenvolvimento, atendimento ao cliente, implatação de sistemas de automação, assistentes virtuais e resultados excepcionais.'
        
        valores.innerText = 'Valores'
        valoresTexto.innerText = 'Excelência:\nBuscamos sempre a excelência em tudo o que desenvolvemos, desde o design e funcionalidade do website.\n\nInovação:\nEstamos sempre atualizados com as recentes tendências e tecnologias, trazendo soluções inovadoras para nossos clientes.\n\nParceria:\nValorizamos a colaboração em parceria com nossos clientes para entender suas necessidades e alcançar seus objetivos.'
        
        profissional.innerText = 'Profissional'
        profissioanlTexto.innerText = 'Formação em Engenharia de Produção e profissional em Desenvolvimento Web, movido pela adrenalina da criação e desenvolvimento de projetos.\n\nSeus estudos englobam a implementação de sistemas inteligentes para aprimorar a experiência do usuário e no design de websites.\n\nNão é difícil encontrar o Eduardo, pois em sua mesa de trabalho é capaz que você encontre um pato de borracha, o seu companheiro em debbug de aplicações.'
    
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
    }
  }