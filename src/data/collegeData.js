/**
 * collegeData.js
 * 
 * Leonardo Ciardi's College Application Profile and College List.
 * Edit this file to update your personal profile, extracurriculars, and target universities.
 */

export const profileData = {
  name: "Leonardo Ciardi",
  title: "Aspiring Computer Scientist",
  classOf: "Class of 2031",
  advisersNotes: "EducationUSA Opportunity",
  avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHYO1nBVN2_nA/profile-displayphoto-shrink_800_800/B4DZcNp10uGcAc-/0/1748280762392?e=1791417600&v=beta&t=vit5G2mraQQMERWhALosCeYeQNjFaJMzvnMUrjPLKhw",
  bio: "",
  stats: [
    { label: "GPA", value: "~3.7" },
    { label: "SAT", value: "1500" },
    { label: "TOEFL", value: "5.5" },
    { label: "IELTS", value: "8.0" },
  ],
  // Extracurricular Activities (ECAs) from Extracurricular Activities.csv
  extracurriculars: [
    {
      id: "eca-1",
      title: "Co-founder & Fellow Researcher",
      organization: "Project \"MaratonIF\" at Federal Institute of São Paulo",
      description: "Fui o principal bolsista e voluntário do projeto por quase 2 anos. Lecionei 15 aulas de programação, criei 8 materiais de estudo, co-organizei a primeira maratona de programação da escola e co-escrevi um artigo para a feira de pesquisa CONICT.",
      impact: "80+ estudantes engajados na primeira maratona de programação do IFSP - SMP, aumento na participação em olimpíadas de programação em 28 alunos, duas equipes entre as 5 melhores no InterIF de 2026, e página no Instagram com 100+ seguidores.",
      tags: ["Teaching", "Research", "Coding"]
    },
    {
      id: "eca-2",
      title: "Developer & Team Leader",
      organization: "Project \"Planpaz\" (Fostering Urban Sustainability)",
      description: "Estou desenvolvendo o \"Planpaz\", um aplicativo móvel educacional para incentivar o cultivo de plantas e jardinagem doméstica, visando fomentar a sustentabilidade urbana. Trabalho há 1 ano e meio no projeto na disciplina de Projeto Integrador, liderando uma equipe de 5 pessoas, realizando pesquisas sobre sustentabilidade e desenvolvendo o back-end da aplicação.",
      impact: "Aguardando resultado do programa VAI.",
      tags: ["Leadership", "App Dev", "Sustainability"]
    },
    {
      id: "eca-3",
      title: "SAT Math Tutor",
      organization: "Schoolhouse.world",
      description: "Ministrei um bootcamp oficial de matemática do SAT pelo College Board e tutorei 10 estudantes em 8 sessões intensivas em um mês.",
      impact: "Voluntário certificado com mais de 14,5 horas de tutoria direta online de matemática para estudantes de todo o mundo.",
      tags: ["Tutoring", "Math", "Volunteering"]
    },
    {
      id: "eca-5",
      title: "Olympiads Competitor & Medalist",
      organization: "Federal Institute of São Paulo",
      description: "Participo de olimpíadas do conhecimento desde o 4° ano, e já participei de competições como OBI, OBMEP, OMU, OBLI, OBMF, Canguru, OBA e OBAFOG.",
      impact: "Conquistei 14 medalhas no ensino médio no total: 6 de ouro, 7 de prata e 1 de bronze.",
      tags: ["Olympiads", "Math", "CS"]
    },
    {
      id: "eca-7",
      title: "Guitarist & Volunteer Band Member",
      organization: "\"Krig-ha Bandolo\" Project Band (IFSP)",
      description: "Apresentei em 4 concertos escolares e participei de oficinas de cultura do projeto Krig-Ha Bandolo.",
      impact: "Desenvolvi presença de palco, coordenação de equipe e habilidade técnica por meio de apresentações musicais e encontros práticos.",
      tags: ["Music", "Collaboration", "Arts"]
    },
    {
      id: "eca-8",
      title: "Soccer Club Player & Captain",
      organization: "Federal Institute of São Paulo",
      description: "Participo de treinos de futsal na escola desde o 6° ano. Sou capitão e fundador do meu próprio time, que criei para incluir meus amigos iniciantes em 2024.",
      impact: "Competi em 7 torneios escolares com o meu time, alcançando 4 finais e conquistando 1 título de campeão.",
      tags: ["Sports", "Leadership", "Teamwork"]
    },
    {
      id: "eca-10",
      title: "Robotics Volunteer",
      organization: "Project \"Tecno-lógicos\" (IFSP)",
      description: "Participei de oficinas sobre programação em Arduino e robótica Lego Mindstorms em 2024. Colaborei no desenvolvimento de robôs para competições.",
      impact: "Conquistei o 4º lugar com minha equipe no Torneio de Robótica do Instituto Federal (TRIF) em 2024.",
      tags: ["Robotics", "Arduino", "Hardware"]
    }
  ]
};

export const allCollegesData = [
  {
    id: "northwestern",
    name: "Northwestern University",
    shortName: "Northwestern",
    location: "Evanston, IL",
    type: "Private Research",
    fitCategory: "Most Selective",
    applicationRound: "ED I",
    supplementalEssays: "3/3",
    cardTheme: "rgba(78, 42, 132, 0.15)",
    accentColor: "#4E2A84",
    image: "https://preview.redd.it/northwestern-university-v0-04czfd3dsrq51.jpg?width=1080&crop=smart&auto=webp&s=9585a7d139c14291356d8c50e2ed3ee92a99c20a",
    overview: "A Northwestern University é uma das principais universidades de elite dos Estados Unidos, classificada entre as 10 melhores instituições do país. Fundada em 1851, possui campi em Illinois — incluindo um principal em Evanston e um focado em medicina e direito em Chicago — e é reconhecida mundialmente pela excelência em pesquisa e flexibilidade acadêmica.",
    quickStats: {
      acceptanceRate: "7.69%",
      graduationRate: "95%",
      studentFacultyRatio: "6:1",
      undergradSize: "8,500",
      financialAid: "[Meets 100% of demonstrated need](https://admissions.northwestern.edu/tuition-aid/international-student-aid/)."
    },
    threeReasons: [
      {
        title: "Research Fit: Focus on Sustainability",
        description: "Tenho bastante interesse em trabalhar em uma das principais áreas de pesquisa da universidade: [\"Liderar em descarbonização, energia renovável e sustentabilidade\"](https://www.northwestern.edu/about/mission-vision-priorities/sustainability.html). Isso se alinha diretamente com as pesquisas que realizei e os objetivos do meu aplicativo Planpaz."
      },
      {
        title: "Value Fit: 'Whole-Brain' Engineering Principle",
        description: "A [McCormick School of Engineering](https://www.mccormick.northwestern.edu/about/) (school do meu major) valoriza estudantes que buscam desenvolver um lado analítico e estratégico, ao mesmo tempo que desenvolve um lado critíco, que pensa nos problemas reais e na aplicação de soluções para eles. Isso se encaixa tanto com minha curiosidade diversa, visto que não tenho interesse em ser apenas um \"rato\" de exatas, mas sim que eu possa utilizar meu conhecimento técnico como uma ferramenta para desenvolver projetos de impacto. Isso se alinha com meu aplicativo, e com meu papel no grêmio estudantil em 2025."
      },
      {
        title: "Club Fit: Emerging Coders",
        description: "Pretendo participar do grupo [Emerging Coders](https://emergingcoders.org/opportunities/internships), focado em apoiar estudantes de primeira geração e de baixa renda que desejam estudar tecnologia, colaborar em projetos e encontrar oportunidades. Esse tipo de estudante é justamente o meu perfil."
      }
    ]
  },
  {
    id: "rice",
    name: "Rice University",
    shortName: "Rice",
    location: "Houston, TX",
    type: "Private Research",
    fitCategory: "Most Selective",
    applicationRound: "ED II",
    supplementalEssays: "2/3",
    cardTheme: "rgba(0, 32, 91, 0.15)",
    accentColor: "#00205B",
    image: "https://narratives.insidehighered.com/rice-university-new-leadership/assets/ogwocJ87n1/ricecampus-beautifulsunset2022-2560x1728.jpeg",
    overview: "A Rice University (William Marsh Rice University) é uma renomada universidade privada de pesquisa localizada em Houston, Texas. Rice é reconhecida por seu rigor acadêmico, excelente proporção de alunos por professor e forte ênfase em ciências e engenharia.",
    quickStats: {
      acceptanceRate: "8%",
      graduationRate: "92%",
      studentFacultyRatio: "6:1",
      undergradSize: "4,400",
      financialAid: "[Meets 100% of demonstrated need](https://financialaid.rice.edu/)."
    },
    threeReasons: [
      {
        title: "Club Fit: RiceApps & HackRice",
        description: "Rice oferece várias [organizações estudantis](https://cs.rice.edu/academics/undergraduate-programs/activities) de CS muito interessantes, como HackRice (hackathons), RiceApps (desenvolvimento de projetos em colaboração) e do Clube de Programação Competitiva (treinamento para competições). As três iniciativas se conectam respectivamente com a minha experiência com Hackathons, meu aplicativo Planpaz (e também minha paixão por trabalhar em equipe em projetos de tecnologia) e meu projeto MaratonIF."
      },
      {
        title: "Value Fit: Respect & Community",
        description: "Um dos valores mais fortes de Rice, demonstrados na [página de valores](https://www.rice.edu/mission-values), é o respeito na comunidade. Isso é algo que valorizo bastante nas pessoas e tomo com um dos meus principais valores pessoais, tanto que demonstro isto na minha essay."
      },
      {
        title: "Academic Fit: Collaborative CS Major",
        description: "O [departamento de CS](https://csweb.rice.edu/cs-undergraduate-program) reforça a ideia de ser um ambiente colaborativo, e não competitivo. Não tenho interesse em trabalhar sozinho na universidade, assim como já não faço atualmente. Até no meu projeto MaratonIF, que é voltado primariamente para treinamento para competições de programação, eu busco desenvolvê-lo de uma forma em que o aprendizado seja colaborativo."
      }
    ]
  },
  {
    id: "vanderbilt",
    name: "Vanderbilt University",
    shortName: "Vanderbilt",
    location: "Nashville, TN",
    type: "Private Research",
    fitCategory: "Most Selective",
    applicationRound: "RD",
    supplementalEssays: "0/1",
    cardTheme: "rgba(207, 181, 59, 0.15)",
    accentColor: "#866D4B",
    image: "https://admissions.vanderbilt.edu/wp-content/uploads/sites/4/2021/06/20181108JR003-scaled.jpg",
    overview: "A Vanderbilt University é uma prestigiosa instituição privada de pesquisa localizada em Nashville, Tennessee, EUA. Fundada em 1873, possui um ambiente acadêmico altamente concorrido e uma impressionante proporção de 8 alunos por professor. Com 10 faculdades, destaca-se globalmente pela inovação e excelência estudantil.",
    quickStats: {
      acceptanceRate: "5.86%",
      graduationRate: "93%",
      studentFacultyRatio: "8:1",
      undergradSize: "7,100",
      financialAid: "Offers [need-based & merit scholarships](https://admissions.vanderbilt.edu/affordability/international-costs-and-finances/)."
    },
    threeReasons: [
      {
        title: "Value Fit: \"Unique Balance\"",
        description: "Vanderbilt busca alunos engajados que crescem juntos, e realizam diversas atividades no campus. O 3° ponto da página de [\"This is Vanderbilt\"](https://www.vanderbilt.edu/this-is-vanderbilt/) ressalta que ao mesmo tempo que são academicamente rigorosos, também buscam o desenvolvimento da vida social e cultural dos estudantes. Isso se encaixa comigo porque sempre fui muito ativo em diversas atividades na escola (robótica, esportes, banda, projetos de código, projetos de música, grêmio estudantil) e pretendo contribuir com essa mesma energia."
      },
      {
        title: "Club Fit: Change++ & VandyHacks",
        description: "Me interessei em colaborar no projeto [Change++](https://anchorlink.vanderbilt.edu/organization/changeplusplus), no qual grupos de estudantes buscam criar softwares que ajudem ONGs locais, e também participar (e ajudar na organização, se necessário) do [VandyHacks](https://anchorlink.vanderbilt.edu/organization/vandyhacks), que organiza o hackathon anual da universidade e hacknights. Isso se alinha com meu interesse por projetos voltados à causas sociais e problemas reais (Planpaz), além da minha experiência participando de Hackathons, por mas que hajam poucas oportunidades por aqui."
      },
      {
        title: "Value Fit: University's Mission",
        description: "A missão da universidade de [\"criar, preservar e disseminar o conhecimento por meio do ensino e da pesquisa\"](https://www.vanderbilt.edu/about/) reflete diretamente minha experiência extracurricular no ensino médio: meu aplicativo ter um viés educacional, mentoria do SAT, mentoria no MaratonIF, iniciativas da Apple Academy."
      }
    ]
  },
  {
    id: "duke",
    name: "Duke University",
    shortName: "Duke",
    location: "Durham, NC",
    type: "Private Research",
    fitCategory: "Most Selective",
    applicationRound: "RD",
    supplementalEssays: "0/3",
    cardTheme: "rgba(0, 48, 135, 0.15)",
    accentColor: "#003087",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Bh2jYg4Vkt6XVCt8Uwjp9XKy1YIpFJLG5mkAvqwblVd_kG27d7jjEM4&s=10",
    overview: "A Universidade Duke é uma instituição privada de ensino superior e pesquisa localizada em Durham, Carolina do Norte, EUA. Fundada em 1838, é mundialmente famosa pela excelência acadêmica, destacando-se em áreas como pré-medicina, economia, ciência da computação e políticas públicas.",
    quickStats: {
      acceptanceRate: "5.24%",
      graduationRate: "96%",
      studentFacultyRatio: "6:1",
      undergradSize: "6,500",
      financialAid: "[Meets 100% of demonstrated need](https://financialaid.duke.edu/)."
    },
    threeReasons: [
      {
        title: "Club Fit: Duke Applied Machine Learning Group (DAML)",
        description: "Estou ansioso para me juntar ao [DAML](https://cs.duke.edu/undergraduate/organizations), onde os alunos trabalham em projetos práticos de IA para startups e empresas. Combina perfeitamente com meu interesse pela área, que busquei desenvolver ao longo do ensino médio por meio de cursos e projetos pessoais, e também com minha paixão de trabalhar em projetos de impacto em equipe. Fora isso, Duke também realiza o HackDuke anualmente e o Catalyst (grupo de mentoria tech)."
      },
      {
        title: "Academic Fit: Interdisciplinarity and FOCUS Program",
        description: "O programa [FOCUS](https://focus.duke.edu/for-students), no qual estudantes de primeiro ano podem aplicar, oferece uma [imersão interdisciplinar](https://interdisciplinary.duke.edu/news/interdisciplinarity-signature-part-duke-experience/) entre seu major de interesse e qualquer outra área, que combina com meu objetivo de usar a tecnologia para causar impacto em em problemas reais, muitas vezes misturando com outras áreas, como sustentabilidade (Planpaz)."
      },
      {
        title: "Value Fit: What Duke Is Looking For",
        description: "[Duke valoriza](https://www.duke.edu/admissions/#at-duke) em um aluno a curiosidade intelectual, paixão por aprender, trabalho em equipe e tratar bem os outros. Cultivei todos esses valores ao longo de anos de estudo autodidata, atividades extracurriculares no ensino médio e experiências como a do futebol, retratada na minha essay."
      }
    ]
  },
  {
    id: "tufts",
    name: "Tufts University",
    shortName: "Tufts",
    location: "Medford, MA",
    type: "Private Research",
    fitCategory: "Very Selective",
    applicationRound: "RD",
    supplementalEssays: "0/2",
    cardTheme: "rgba(65, 116, 141, 0.15)",
    accentColor: "#41748D",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0zR5Wi13FsjDuvJ9Yhwxrou19D3LjXVITC-TIzBvu-gveHW_8D3AwaEJC&s=10",
    overview: "A Tufts University é uma prestigiosa universidade privada de pesquisa americana, localizada em Medford e Somerville, Massachusetts, na região metropolitana de Boston. Reconhecida como uma \"New Ivy\", é famosa pela excelência em liberal arts, forte cultura interdisciplinar, e por abrigar a Fletcher School, a escola de relações internacionais mais antiga dos EUA.",
    quickStats: {
      acceptanceRate: "10.81%",
      graduationRate: "94%",
      studentFacultyRatio: "10:1",
      undergradSize: "6,600",
      financialAid: "[Meets 100% of demonstrated need](https://financialaid.tufts.edu/)."
    },
    threeReasons: [
      {
        title: "Club Fit: JumboCode & JumboHack",
        description: "Tenho bastante interesse participar do [JumboCode](https://jumbocode.org/), onde equipes de estudantes desenvolvem softwares para ONGs locais melhorarem a comunidade, e dos JumboHacks, hackathons organizados anualmente. O JumboCode É uma iniciativa muito similar ao meu app Planpaz, e nele há a possibilidade de exercer diversos cargos na equipe, como designer, product manager, tech lead e developer."
      },
      {
        title: "Club Fit: Soccer",
        description: "O [clube de futebol](https://admissions.tufts.edu/discover-tufts/life-at-tufts/student-organizations/) tem uma popularidade e consideração maior em Tufts do que vi em outras universidades. Pelo meu interesse em experiência, acredito que participar do clube de futebol será a maneira perfeita de construir conexões com outros alunos e minha integrar na comunidade de Tufts por meio de uma paixão em comum."
      },
      {
        title: "Academic Fit: Liberal Arts Style + Research University Structure",
        description: "A proporção de 10:1, com turmas médias de 20 a 30 alunos combinam com meu estilo participativo nas aulas, algo que pode ser ressaltado pelas cartas de recomendação dos meus professores. Além disso, Tufts ainda mantém a estrutura de uma universidade de pesquisa de maior porte, o que reúne o melhor dos dois mundos para mim."
      }
    ]
  },
  {
    id: "washu",
    name: "Washington University in St. Louis",
    shortName: "WashU",
    location: "St. Louis, MO",
    type: "Private Research",
    fitCategory: "Very Selective",
    applicationRound: "EA",
    supplementalEssays: "0/1",
    cardTheme: "rgba(165, 28, 48, 0.15)",
    accentColor: "#A51C30",
    image: "https://admissions.washu.edu/app/uploads/2025/05/MLTM-2254_0397-2.png",
    overview: "A Washington University in St. Louis (conhecida globalmente como WashU) é uma prestigiada universidade privada de pesquisa localizada em St. Louis, Missouri, EUA. Classificada entre as melhores instituições de ensino dos EUA, a WashU destaca-se por sua excelência acadêmica, forte cultura de colaboração e abundantes oportunidades de pesquisa de graduação.",
    quickStats: {
      acceptanceRate: "12.06%",
      graduationRate: "93%",
      studentFacultyRatio: "7:1",
      undergradSize: "7,800",
      financialAid: "[Meets 100% of demonstrated need](https://financialaid.wustl.edu/)."
    },
    threeReasons: [
      {
        title: "Research Fit: Focus on AI",
        description: "Com a possibilidade de realizar pesquisas durante a graduação, me interessei bastante por linhas de pesquisa como a dos professores [Ian Bogost](https://engineering.washu.edu/faculty/Ian-Bogost.html) (videogames e crítica social) ou [Roman Garnett](https://engineering.washu.edu/faculty/Roman-Garnett.html) (IA para descobertas). Tenho uma fundação de pesquisa por conta do meu projeto MaratonIF, no qual escrevi e apresentei um artigo em uma feira de inovação, e também no Planpaz, no qual passei pelo menos 1 semestre realizando pesquisa em equipe sobre sustentabilidade e jardinagem."
      },
      {
        title: "Club Fit: Google Developer Group & HackWashU",
        description: "WashU oferece clubes de CS muito interessantes, com destaque ao [Google Developer Group](https://dscwashu.com/), que alinha diretamente com o que eu gosto: desenvolvimento de projetos em equipe, ainda mais com parceira do Google. Fora isso, os [hackathons](https://hackwashu.com/), projeto de [AI racing](https://washuair.netlify.app/teams/) e [Cybersecurity](https://wustl-bearshell.github.io/starting_out.html) também seriam muito interessantes para me aprofundar em áreas novas dentro do meu major."
      },
      {
        title: "Value Fit: Inclusion & Collaboration",
        description: "O [foco da WashU](https://washu.edu/about-washu/our-mission-and-vision/) em inclusão, colaboração e impacto social significativo espelha meus valores pessoais e objetivos, demonstrados pelas atividades que realizo."
      }
    ]
  },
  {
    id: "emory",
    name: "Emory University",
    shortName: "Emory",
    location: "Atlanta, GA",
    type: "Private Research",
    fitCategory: "Very Selective",
    applicationRound: "RD",
    supplementalEssays: "0/2",
    cardTheme: "rgba(0, 33, 165, 0.15)",
    accentColor: "#0021A5",
    image: "https://collegesofdistinction.com/wp-content/uploads/2024/05/emory-university-2.jpeg",
    overview: "A Universidade Emory é uma renomada instituição privada de pesquisa e liberal arts, fundada em 1836 e localizada em Atlanta, Geórgia (EUA). Conhecida por seu ensino de excelência, a universidade oferece forte integração interdisciplinar e abriga escolas de destaque em áreas como medicina, direito e negócios",
    quickStats: {
      acceptanceRate: "10.29%",
      graduationRate: "90%",
      studentFacultyRatio: "8:1",
      undergradSize: "8,100",
      financialAid: "Offers [need-based scholarships](https://studentaid.emory.edu/) to international students."
    },
    threeReasons: [
      {
        title: "Club Fit: PROJECT Emory",
        description: "Gostei bastante do clube [PROJECT Emory](https://www.instagram.com/project_emory_/), porque assim como no JumboCode, nele os estudantes se organizam em equipes para desenvolver projetos de impacto social. Fora isso, também há o [CS Club](https://www.instagram.com/emorycsclub/) (projeto de mentoria e pesquisa) e os [EmoryHacks](https://emoryhacks.com/) (hackathons anuais)."
      },
      {
        title: "Value Fit: Collaboration & Engajement",
        description: "[Emory busca](https://apply.emory.edu/apply/first-year/index.html) alunos que criem mudanças trabalhando com professores e alunos, contribuindo ativamente para a cultura do campus dentro e fora da sala de aula, por meio de esportes, música e liderança em clubes. Acredito que eu contribuiría justamente com esse tipo de perfil, baseado nas diversas atividades que me envolvi na minha escola, mesmo que hajam poucos estudantes realmente engajados aqui."
      },
      {
        title: "Goals Fit: Big Tech Companies",
        description: "Os [student outcomes](https://cpd.emory.edu/outcomes/#!eWVhcj0yMDI1O21ham9yPUFwcGxpZWQgTWF0aGVtYXRpY3N8Q29tcHV0ZXIgU2NpZW5jZQ==) do meu major em Emory alinham-se com um dos meus objetivos de médio-longo prazo: conseguir oportunidades em grandes empresas de tecnologia. 96% da classe de 2025 encontrou um emprego na área ou seguiu o caminho acadêmico em grandes universidades, com destaque para os principais destinos: Amazon, Meta e Carnegie Mellon University (uma das melhores universidades do mundo para CS)."
      }
    ]
  },
  {
    id: "davidson",
    name: "Davidson College",
    shortName: "Davidson",
    location: "Davidson, NC",
    type: "Liberal Arts College",
    fitCategory: "Very Selective",
    applicationRound: "RD",
    supplementalEssays: "0/2",
    cardTheme: "rgba(218, 24, 24, 0.15)",
    accentColor: "#DA1818",
    image: "https://www.davidson.edu/sites/default/files/styles/big_16x9/public/2023-08/DavidsonCollegeAerialImages_004.jpg?h=7d33fdf7&itok=poM_hr5q",
    overview: "A Davidson College, fundada em 1837, é uma prestigiosa faculdade privada de artes liberais localizada em Davidson, Carolina do Norte, a cerca de 32 km de Charlotte.",
    quickStats: {
      acceptanceRate: "13.37%",
      graduationRate: "90%",
      studentFacultyRatio: "8:1",
      undergradSize: "1,900",
      financialAid: "[Meets 100% of demonstrated need](https://www.davidson.edu/admission-and-financial-aid/financial-aid) (no loans)."
    },
    threeReasons: [
      {
        title: "Club Fit: ICPC Preparation Club & Hack@Davidson",
        description: "Tenho interesse participar do [clube de preparação](https://www.davidson.edu/academic-departments/mathematics-and-computer-science/student-involvement/clubs) para a maratona nacional de programação (ICPC prep), assim como já faço no MaratonIF, além de criar projetos no Hack@Davidson."
      },
      {
        title: "Club Fit: Cats Stats & Soccer",
        description: "Posso unir meu grande interesse por futebol com Data Science no Cats Stats, organização estudantil que analisa o desempenho das equipes esportivas da faculdade usando estatística. O [clube de futebol e as ligas intramurais](https://www.davidson.edu/academic-departments/physical-education-recreation-wellness/intramural-sports) também seriam atividades que eu com certeza participaria."
      },
      {
        title: "Value Fit: Inclusion",
        description: "O [forte compromisso de Davidson com a inclusão](https://www.davidson.edu/about/mission-and-values) conversa com meus valores pessoais expressos em minhas redações. Além disso, todos os ambientes e a universidade em si são bem convidativos, o que me chamou atenção quando realizei um tour virtual."
      }
    ]
  },
  {
    id: "swarthmore",
    name: "Swarthmore College",
    shortName: "Swarthmore",
    location: "Swarthmore, PA",
    type: "Liberal Arts College",
    fitCategory: "Most Selective",
    applicationRound: "RD",
    supplementalEssays: "0/2",
    cardTheme: "rgba(144, 0, 28, 0.15)",
    accentColor: "#90001C",
    image: "https://www.swarthmore.edu/sites/default/files/styles/feature_callout/public/assets/images/meet-swarthmore/campus-academics-2.jpg.webp?itok=VoC2SAoy",
    overview: "Swarthmore College é uma renomada faculdade privada de artes liberais e engenharia localizada na Pensilvânia, a apenas 25 minutos da Filadélfia. Fundada em 1864, destaca-se por seu rigor acadêmico, currículo abrangente com mais de 600 cursos e um lindo campus de 425 acres em estilo arboreto.",
    quickStats: {
      acceptanceRate: "7.46%",
      graduationRate: "94%",
      studentFacultyRatio: "8:1",
      undergradSize: "1,600",
      financialAid: "[Meets 100% of demonstrated need](https://www.swarthmore.edu/financial-aid)."
    },
    threeReasons: [
      {
        title: "Club Fit: CS Ninjas",
        description: "Em Swarthmore, todos os estudantes de graduação em CS têm a oportunidade de se tornarem tutores das matérias já concluídas, e posteriormente virarem os [CS Ninjas](https://www.swarthmore.edu/computer-science/ninjas), responsáveis por organizar encontros de estudo com outros alunos. Isso seria uma oportunidade incrível de aperfeiçoar minhas habilidades técnicas e de comunicação, ampliando minhas experiências passadas como a do Schoolhouse e MaratonIF."
      },
      {
        title: "Research Fit: Focus on AI",
        description: "A universidade oferece oportunidade de summer research para os estudantes de graduação, e eu me imagino trabalhando com professores como [Ameet Soni](https://www.swarthmore.edu/computer-science/ameet-soni-probabilistic-methods-biomedical-applications) (Machine Learning e Biologia Computacional), dando continuidade ao meu interesse prévio em IA e Machine Learning."
      },
      {
        title: "Club Fit: Swarthmore Innovation Fellows",
        description: "Achei incrível a oportunidade de me juntar a este programa onde equipes de alunos desenvolvem soluções tecnológicas inovadoras para desafios do campus, contribuindo para a qualidade de vida da comunidade da universidade. De certa forma, todos os projetos que realizo focam em uma impacto inicial na comunidade mais próxima, e esse programa seria uma forma de continuar nessa linha."
      }
    ]
  },
  {
    id: "richmond",
    name: "University of Richmond",
    shortName: "Richmond",
    location: "Richmond, VA",
    type: "Liberal Arts College",
    fitCategory: "Selective",
    applicationRound: "EA",
    supplementalEssays: "0/1",
    cardTheme: "rgba(38, 63, 106, 0.15)",
    accentColor: "#263F6A",
    image: "https://www.usnews.com/dims4/USNEWS/26766ef/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F56%2F74%2Fcb0b6e5249c2a32d396ed32e91f6%2Faerialcampus.jpg",
    overview: "A University of Richmond (UR) é uma renomada instituição privada de liberal arts localizada em Richmond, Virgínia, EUA. Fundada em 1830, destaca-se por ter turmas pequenas (média de 16 alunos), forte integração com os professores, financiamento garantido para estágios de verão e um campus gótico deslumbrante.",
    quickStats: {
      acceptanceRate: "24%",
      graduationRate: "88%",
      studentFacultyRatio: "8:1",
      undergradSize: "3,100",
      financialAid: "[Meets 100% of demonstrated need](https://financialaid.richmond.edu/) for admitted international students."
    },
    threeReasons: [
      {
        title: "Club Fit: ACM (Association for Computing Machinery)",
        description: "Eu gostei e participaria do clube do chapter da [ACM](https://acmurichmond.github.io/#about) em UR, no qual os estudantes interessados em tecnologia se reunem e organizam eventos relacionados à área periodicamente. Acho que seria uma ótima maneira de me conectar com outros alunos (já que é aberto para estudantes de qualquer major) e até mesmo ampliar uma rede de networking para realização de projetos. Durante as pesquisas do meu aplicativo Planpaz, tive que me comunicar bastante com o grupo da Horta escolar, então entendo que a colaboração entre diferentes áreas é muito importante para o desenvolvimento de projetos."
      },
      {
        title: "Research Fit: Education & Data Science",
        description: "Me interessei bastante por duas [oportunidades de pesquisa](https://cs.richmond.edu/research/independent-study.html) em Ciência da Computação: Gamification in Childhood Education (Professor David Balash) - porque o projeto Planpaz, que já realizo, envolve educação e gamificação, porém em outra área - e Argument Mining (Professor Jon Park) - porque tenho interesse em seguir na área de Data Science e IA, então uma pesquisa relacionada à isso com o professor da área seria muito interessante."
      },
      {
        title: "Goals Fit: Big Tech Companies",
        description: "Os [student outcomes](https://www.richmond.edu/outcomes/index.html) da UR alinham-se com meus objetivos de médio-longo prazo, visto que 95% dos graduados conseguem um emprego na área (com destaque para empresas como Amazon e Deloitte) em até 1 ano, e a universidade é rankeada em #9 pela Princeton Review em oportunidades de estágio."
      }
    ]
  },
  {
    id: "amherst",
    name: "Amherst College",
    shortName: "Amherst",
    location: "Amherst, MA",
    type: "Liberal Arts College",
    fitCategory: "Most Selective",
    applicationRound: "RD",
    supplementalEssays: "0/3",
    hidden: true, // Oculto temporariamente para a apresentação
    cardTheme: "rgba(74, 38, 142, 0.15)",
    accentColor: "#4A268E",
    image: "https://highschool.latimes.com/wp-content/uploads/2016/02/aerial-photography-amerherst-college-1.jpeg",
    overview: "Amherst é uma faculdade de artes liberais altamente seletiva com Currículo Aberto, permitindo total liberdade acadêmica sem matérias obrigatórias gerais.",
    quickStats: {
      acceptanceRate: "7%",
      graduationRate: "95%",
      studentFacultyRatio: "7:1",
      undergradSize: "1,900",
      financialAid: "[Need-blind & meets 100% need](https://www.amherst.edu/admission/financial_aid) (no loans)."
    },
    threeReasons: [
      {
        title: "Research Fit: SURF Program",
        description: "O [programa de summer research SURF](https://www.amherst.edu/academiclife/departments/computer_science/opportunities-for-students/surf) oferece a oportunidades de alunos desenvolverem pesquisas colaborativas em equipe. Isso conectaria meu interesse por desenvolver conhecimento relacionado a minha área à minha vontade em trabalhar em coletivos."
      },
      {
        title: "Academic Fit: Open Curriculum & Sustainabillity",
        description: "Amherst [trata a sustentabilidade como meta central](https://www.amherst.edu/about/sustainability). O [currículo aberto](https://www.amherst.edu/news/amherst-in-pictures/amherst-in-pictures-2023/sustainability-come-to-the-class) me permitirá unir Ciência da Computação com Estudos Ambientais para evoluir projetos como o Planpaz."
      },
      {
        title: "Club Fit: Data Science Club",
        description: " Além do chapter da [ACM](https://thehub.amherst.edu/organization/amherstacm) (Association for Computing Machinery), que é um clube interessante para me integrar com os estudantes de tecnologia, me interessei bastante pelo Data Science Club que organiza eventos, aulas e workshops para estudantes interessados em trabalhar na área. [Data Science](https://thehub.amherst.edu/organization/datascienceclub) é uma das áreas que tenho interesse em seguir, e já fiz pelo menos dois cursos e alguns projetos por conta própria para me desenvolver."
      }
    ]
  },
  {
    id: "case",
    name: "Case Western Reserve University",
    shortName: "Case Western",
    location: "Cleveland, OH",
    type: "Private Research",
    fitCategory: "Selective",
    applicationRound: "EA",
    supplementalEssays: "0/3",
    hidden: true, // Oculto temporariamente para a apresentação
    cardTheme: "rgba(10, 48, 85, 0.15)",
    accentColor: "#0A3055",
    image: "https://case.edu/static/7854c6a6c26018f289e608195b904c05/b49c8/about.jpg",
    overview: "A Case Western Reserve University (CWRU) é uma prestigiada universidade privada de pesquisa localizada em Cleveland, Ohio (EUA). Formada em 1967 pela fusão da Western Reserve University e do Case Institute of Technology, é conhecida mundialmente pela excelência em engenharias, ciências, medicina, enfermagem e gestão.",
    quickStats: {
      acceptanceRate: "27%",
      graduationRate: "85%",
      studentFacultyRatio: "9:1",
      undergradSize: "5,700",
      financialAid: "Offers [need-based & merit scholarships](https://case.edu/financialaid/) to international students."
    },
    threeReasons: [
      {
        title: "Club Fit: ACM & Hackathons",
        description: "Eu gostaria bastante de participar da [ACM](https://community.case.edu/acm/home/) (Association for Computing Machinery) de CWRU, ainda mais por ela misturar no mesmo clube vários elementos de atividades que eu já participo, como projetos em grupo, competições de programação. Fora isso, também há oportunidades de Hackathons. Onde eu demonstro isso: MaratonIF, Planpaz, Mackenzie"
      },
      {
        title: "Research Fit: AI Applications",
        description: "Muitos dos [professores do departamento de Ciência da Computação](https://engineering.case.edu/computer-and-data-sciences/faculty-and-staff) como o professor [Gourav Datta](https://case.edu/engineering/about/faculty-and-staff-directory/gourav-datta) (pesquisa aplicações de IA no mundo real, como sistemas de saúde inteligente) realizam pesquisas na área de inteligência artificial, e eu acho bem interessante participar de projetos de pesquisa como esses. Onde eu demonstro isso: experiência de pesquisa com Planpaz, MaratonIF e estudos independentes em IA."
      },
      {
        title: "Goals Fit: Big Tech Companies & Startups",
        description: "Os outcomes dos estudantes de Ciência da Computação e Ciência de Dados alinham com minhas metas de médio-longo prazo: oportunidades de emprego em grandes empresas de tecnologia. Como exemplo, da [turma de 2025](https://public.tableau.com/app/profile/cwru.office.of.institutional.research/viz/StudentOutcomes2025/PrimaryPlans), 3 estudantes passaram a trabalhar na Amazon e 3 na Microsoft, além de muitas outras empresas. Fora isso, muitos estudantes também buscam o ramo de startups na universidade, principalmente por meio do [Sears](https://case.edu/thinkbox/about) think[box], um centro de inovação e empreendedorismo."
      }
    ]
  }
];

// Active colleges for presentation (filters out colleges marked hidden: true)
export const collegesData = allCollegesData.filter((college) => !college.hidden);

