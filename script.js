document.addEventListener('DOMContentLoaded', () => {
    // Controles de tema e idioma
    const themeToggle = document.querySelector('.theme-toggle');
    const langToggle = document.querySelector('.lang-toggle');
    
    // Imagens para os botões
    const themeImages = {
        dark: '/assets/Coffee.png',
        light: '/assets/Beer.png'
    };
    
    const langImages = {
        en: '/assets/ArrozeFeijão.png',
        pt: '/assets/Hamburguer.png'
    };

    // NOVO: Controles do Menu Mobile
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // NOVO: Função para controlar o menu mobile
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    // NOVO: Função para fechar o menu
    function closeMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }

    // NOVO: Event Listeners para o menu mobile
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', toggleMenu);

        // Fecha o menu ao clicar em um link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Fecha o menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && 
                !navMenu.contains(e.target) && 
                navMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    }

    // Objeto com todas as traduções
    const translations = {
        en: {
            // Navigation
            'nav-home': 'Home',
            'nav-about': 'About',
            'nav-projects': 'Projects',
            'nav-skills': 'Skills',
            'lets-talk': "Let's Talk",

            // Presentation
            'portfolio': 'PORTFOLIO',
            'role': 'Software Developer',
            'former': 'Former Chef',

            // About
            'about-title': 'WHO AM I?',
            'about-text': 'Young professional in career transition, from kitchen management to the Systems Analysis and Development area, with strong experience in leadership and teamwork, seeking an internship to apply and develop technical knowledge in programming and technology. Proactive, detail-oriented and with proven problem-solving skills.',
            'contact': 'Get in touch',

            // Projects
            'projects-title': 'MY PROJECTS',
            'demo': 'Demo',
            'github': 'GitHub',

            // Resume
            'resume-title': 'RESUME',
            'nav-resume': 'Resume',
            'education-title': 'ACADEMIC EDUCATION',
            'education1': 'Systems Analysis and Development - FATEC Praia Grande | 2023 - 2026',
            'education2': 'High School Nossa Senhora Consolata School - SP | Completion: 2013',
            
            'technical-title': 'TECHNICAL SKILLS',
            'prog-lang-title': 'Programming Languages and Tools:',
            'prog-lang1': '- Intermediate: HTML, CSS, JavaScript, Git, Java',
            'prog-lang2': '- Currently studying: Node.js, Databases',
            
            'tech-title': 'Technologies and Software:',
            'tech1': '- GitHub for version control',
            'tech2': '- Web Development (Front-end)',
            'tech3': '- API Integration',
            
            'office-title': 'Office Tools:',
            'office1': '- Excel, Word, PowerPoint (Intermediate)',
            
            'experience-title': 'PROFESSIONAL EXPERIENCE',
            'exp0-title': 'Head Chef - Beach Lounge | 01/2021 – 10/2023',
            'exp0-desc': 'Team leadership, kitchen operations coordination, supplier negotiations. Experience in management and working under pressure, transferable skills for project management and deadlines in technology.',
            'exp1-title': 'Lead Chef - Santa Eliza ECO Resort | 07/2019 – 10/2020',
            'exp1-desc': 'Kitchen team leadership, input and inventory control. Development of organizational skills applicable to task and project management in IT.',
            'exp2-title': 'Apprentice - São Paulo State Court of Justice – Santana Regional Forum | 01/2012 – 01/2013',
            'exp2-desc': 'Administrative support and public service. Process and documentation organization, experience that developed my attention to detail.',
            
            'languages-title': 'LANGUAGES',
            'lang1': '- Portuguese: Native',
            'lang2': '- English: Intermediate (ongoing)',
            'lang3': '- Spanish: Basic',
            
            'additional-title': 'ADDITIONAL COURSES',
            'course1': '- Higher Education in Gastronomy Technology | Hotec Educational Group | Completion: 2016',
            'course2': '- Sommelier (1st Module) | ABS (Brazilian Sommelier Association) | 2016',
            'course3': '- Web Development Technology Course | DevMedia | 2023',
            'course4': '- The Magic of Customer Service | H4T Consulting | 2019',
            
            'qualifications-title': 'ADDITIONAL QUALIFICATIONS',
            'qual1': '- Flexible, ease in learning new areas of knowledge.',
            'qual2': '- Experience working with deadlines and under pressure.',
            'qual3': '- Proactivity and strong communication skills in multidisciplinary teams.',
            'lang-button-text': 'Português',
            'theme-button-text-light': 'Light',
            'theme-button-text-dark': 'Dark'
        },
        pt: {
            // Navegação
            'nav-home': 'Início',
            'nav-about': 'Sobre',
            'nav-projects': 'Projetos',
            'nav-skills': 'Habilidades',
            'lets-talk': 'Vamos Conversar',

            // Apresentação
            'portfolio': 'PORTFÓLIO',
            'role': 'Desenvolvedor de Software',
            'former': 'Ex-Chef de Cozinha',

            // Sobre
            'about-title': 'QUEM SOU EU?',
            'about-text': 'Jovem profissional em transição de carreira, da gestão de cozinha para a área de Análise e Desenvolvimento de Sistemas, com forte experiência em liderança e trabalho em equipe, buscando estágio para aplicar e desenvolver conhecimentos técnicos em programação e tecnologia. Proativo, atento aos detalhes e com comprovada capacidade de resolução de problemas.',
            'contact': 'Entre em contato',

            // Projetos
            'projects-title': 'MEUS PROJETOS',
            'demo': 'Demo',
            'github': 'GitHub',

            // Currículo
            'resume-title': 'CURRÍCULO',
            'nav-resume': 'Currículo',
            'education-title': 'FORMAÇÃO ACADÊMICA',
            'education1': 'Análise e Desenvolvimento de Sistemas - FATEC Praia Grande | 2023 - 2026',
            'education2': 'Ensino Médio Colégio Nossa Senhora Consolata - SP | Conclusão: 2013',
            
            'technical-title': 'HABILIDADES TÉCNICAS',
            'prog-lang-title': 'Linguagens de Programação e Ferramentas:',
            'prog-lang1': '- Intermediário: HTML, CSS, JavaScript, Git, Java',
            'prog-lang2': '- Estudando atualmente: Node.js, Bancos de Dados',
            
            'tech-title': 'Tecnologias e Software:',
            'tech1': '- GitHub para controle de versão',
            'tech2': '- Desenvolvimento Web (Front-end)',
            'tech3': '- Integração de APIs',
            
            'office-title': 'Ferramentas Office:',
            'office1': '- Excel, Word, PowerPoint (Intermediário)',
            
            'experience-title': 'EXPERIÊNCIA PROFISSIONAL',
            'exp0-title': 'Chef Principal - Beach Lounge | 01/2021 – 10/2023',
            'exp0-desc': 'Liderança de equipe, coordenação de operações de cozinha, negociações com fornecedores. Experiência em gestão e trabalho sob pressão, habilidades transferíveis para gerenciamento de projetos e prazos em tecnologia.',
            'exp1-title': 'Chef Líder - Santa Eliza ECO Resort | 07/2019 – 10/2020',
            'exp1-desc': 'Liderança de equipe de cozinha, controle de insumos e estoque. Desenvolvimento de habilidades organizacionais aplicáveis à gestão de tarefas e projetos em TI.',
            'exp2-title': 'Aprendiz - Tribunal de Justiça SP – Fórum Regional de Santana | 01/2012 – 01/2013',
            'exp2-desc': 'Suporte administrativo e serviço público. Organização de processos e documentação, experiência que desenvolveu minha atenção aos detalhes.',
            
            'languages-title': 'IDIOMAS',
            'lang1': '- Português: Nativo',
            'lang2': '- Inglês: Intermediário (em andamento)',
            'lang3': '- Espanhol: Básico',
            
            'additional-title': 'CURSOS COMPLEMENTARES',
            'course1': '- Educação Superior em Tecnologia Gastronômica | Hotec Educational Group | Conclusão: 2016',
            'course2': '- Sommelier (1º Módulo) | ABS (Associação Brasileira de Sommeliers) | 2016',
            'course3': '- Curso de Tecnologia em Desenvolvimento Web | DevMedia | 2023',
            'course4': '- O Magico do Serviço ao Cliente | H4T Consulting | 2019',
            
            'qualifications-title': 'QUALIFICAÇÕES ADICIONAIS',
            'qual1': '- Flexibilidade, facilidade em aprender novas áreas de conhecimento.',
            'qual2': '- Experiência em trabalhar com prazos e sob pressão.',
            'qual3': '- Proatividade e habilidades de comunicação em equipes multidisciplinares.',
            'lang-button-text': 'English',
            'theme-button-text-light': 'Claro',
            'theme-button-text-dark': 'Escuro'
        }
    };

    // Adicione este objeto com as rotas das imagens
    const languagesImages = {
        dark: {
            en: '/assets/LanguagesEnglishDark.png',
            pt: '/assets/LenguagesPortugueseDark.png'
        },
        light: {
            en: '/assets/LenguagesEnglishLight.png',
            pt: '/assets/LenguagesPortugueseLight.png'
        }
    };

    // Função para atualizar a imagem de languages
    function updateLanguagesImage() {
        const currentTheme = document.body.getAttribute('data-theme') || 'dark';
        const currentLang = document.documentElement.lang || 'en';
        const languagesImg = document.querySelector('.languages-container img');
        
        if (languagesImg) {
            languagesImg.src = languagesImages[currentTheme][currentLang];
        }
    }

    // Função para trocar o tema
    function toggleTheme() {
        const isDark = document.body.getAttribute('data-theme') !== 'light';
        document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
        
        // Atualiza a imagem e o texto do botão
        const themeToggle = document.querySelector('.theme-toggle img');
        const themeText = document.querySelector('.theme-text');
        
        if (themeToggle) {
            themeToggle.src = themeImages[isDark ? 'light' : 'dark'];
        }
        
        if (themeText) {
            const currentLang = document.documentElement.lang;
            const textKey = isDark ? 'theme-button-text-dark' : 'theme-button-text-light';
            themeText.textContent = translations[currentLang][textKey];
        }
        
        // Atualizar a imagem de languages
        updateLanguagesImage();
        
        // Salva a preferência
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    }

    // Função para trocar o idioma
    function toggleLanguage() {
        const currentLang = document.documentElement.lang === 'pt' ? 'en' : 'pt';
        document.documentElement.lang = currentLang;
        
        // Atualiza a imagem e o texto do botão
        const langToggle = document.querySelector('.lang-toggle img');
        const langText = document.querySelector('.lang-text');
        
        if (langToggle) {
            langToggle.src = langImages[currentLang];
        }
        
        if (langText) {
            langText.textContent = currentLang === 'pt' ? 'English' : 'Português';
        }
        
        // Atualiza todos os textos
        Object.keys(translations[currentLang]).forEach(key => {
            const elements = document.querySelectorAll(`[data-translate="${key}"]`);
            elements.forEach(element => {
                element.textContent = translations[currentLang][key];
            });
        });
        
        // Atualizar a imagem de languages
        updateLanguagesImage();
        
        // Salva a preferência
        localStorage.setItem('language', currentLang);
    }

    // Event listeners
    themeToggle.addEventListener('click', toggleTheme);
    langToggle.addEventListener('click', toggleLanguage);

    // Carrega preferências salvas
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language');

    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
        themeToggle.querySelector('img').src = themeImages[savedTheme];
    }

    if (savedLanguage) {
        document.documentElement.lang = savedLanguage;
        langToggle.querySelector('img').src = langImages[savedLanguage];
        
        Object.keys(translations[savedLanguage]).forEach(key => {
            const elements = document.querySelectorAll(`[data-translate="${key}"]`);
            elements.forEach(element => {
                element.textContent = translations[savedLanguage][key];
            });
        });
    }

    // Adicione esta função no seu JavaScript
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Se estiver no mobile, fecha o menu
                const hamburger = document.querySelector('.hamburger');
                const navMenu = document.querySelector('.nav-menu');
                if (window.innerWidth <= 768) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });

    // Configuração do Intersection Observer
    const options = {
        root: null, // usa o viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% do elemento precisa estar visível
    };

    // Callback quando o elemento entra/sai da view
    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: parar de observar após a animação
                // observer.unobserve(entry.target);
            }
            // Opcional: remover classe quando sair da view
            // else {
            //     entry.target.classList.remove('visible');
            // }
        });
    };

    // Criar o observer
    const observer = new IntersectionObserver(handleIntersect, options);

    // Observar todos os elementos com animações
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .slide-in-top');
    animatedElements.forEach(el => observer.observe(el));

    // Para elementos específicos
    createObserver({
        selector: '.my-custom-animation',
        threshold: 0.2,
        unobserveAfter: true
    });

    // Para animações em sequência
    createObserver({
        selector: '.sequence-animation',
        threshold: 0.5
    });
});