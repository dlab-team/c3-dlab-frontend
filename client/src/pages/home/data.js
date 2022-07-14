// home page data will be static and won't be stored on data base as it doesn't need to be updated very often

//Data section steps

export const programSteps = [
  {
    id: 1,
    stepNumber: 1,
    title: "Conecta con empresas",
    subtitle:
      "Completa tu perfil y rinde test técnicos. Nosotros te conectamos con empresas top. ",
    color: "purple",
    icon: "find",
  },
  {
    id: 2,
    stepNumber: 2,
    title: "Demuestra tu valor",
    subtitle:
      "Participa en entrevistas grupales y muestra un proyecto en los Show The Code.",
    color: "orange",
    icon: "code",
  },
  {
    id: 3,
    stepNumber: 3,
    title: "Se contratado",
    subtitle:
      "Trabaja para una empresa. Uno de nuestros mentores te dará soporte técnico y validará tus competencias.",
    color: "green",
    icon: "handshake",
  },
];

//Data section companies

export const companies = [
  {
    id: 1,
    src: "https://www.logogenio.es/images/articles/tech-logos4.jpg",
  },
  {
    id: 2,
    src: "https://www.logogenio.es/images/articles/tech-logos3.jpg",
  },
  { id: 3, src: "https://www.logogenio.es/images/articles/tech-logos5.jpg" },
  {
    id: 4,
    src: "https://www.logogenio.es/images/articles/tech-logos6.jpg",
  },
  {
    id: 5,
    src: "https://www.logogenio.es/images/articles/tech-logos7.jpg",
  },
  { id: 6, src: "https://www.logogenio.es/images/articles/tech-logos8.jpg" },
];

//Data section mentors

export const mentorsImg = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/4476618/pexels-photo-4476618.jpeg?auto=compress&cs=tinysrgb&w=800",
    mentorName: "Julieta",
    position: "Full Stack Developer",
    company: "Microsoft",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    mentorName: "Pablo",
    position: "Senior UX/UI Designer",
    company: "Oracle",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    mentorName: "Miguel",
    position: "Front End Developer",
    company: "Mercado Libre",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=800",
    mentorName: "Fernanda",
    position: "Back End Developer",
    company: "Google",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/3747462/pexels-photo-3747462.jpeg?auto=compress&cs=tinysrgb&w=800",
    mentorName: "Rocio",
    position: "Web Developer",
    company: "Uber",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/5257553/pexels-photo-5257553.jpeg?auto=compress&cs=tinysrgb&w=800",
    mentorName: "Valeria",
    position: "Lead Designer",
    company: "Microsoft",
  },
];

//Data section FAQs

export const aboutDesafioFaqs = [
  {
    key: 1,
    title: {
      content: "¿Qué es DEVsafio?",
      icon: "dropdown",
    },
    content: {
      content: (
        <span>
          DEVsafio es una iniciativa que une talento junior Latinoamericano
          (trainee, bootcamp, entre otros) con mentores senior TI para potenciar
          su empleabilidad inicial e impactar la industria tecnológica.
        </span>
      ),
    },
  },
  {
    key: 2,
    title: {
      content: "¿Quiénes pueden postular a DEVsafio?",
      icon: "dropdown",
    },
    content: {
      content: (
        <span>
          En DEVsafio apoyamos a quienes buscan empleo como Junior o Trainee en
          las áreas de Desarrollo, Diseño UX/UI y Data Science.
        </span>
      ),
    },
  },
  {
    key: 3,
    title: {
      content: "¿Buscan Talentos para QA Testing?",
      icon: "dropdown",
    },
    content: {
      content: (
        <span>
          Por ahora estamos enfocados en el Desarrollo (Front, Back y Full),
          Diseño UX/UI y Data Science, pero no rechazamos un Talento en otras
          áreas del mundo TI. Puedes dejarnos tus datos y si nos piden ayuda en
          esa área, te contactaremos.
        </span>
      ),
    },
  },
];
