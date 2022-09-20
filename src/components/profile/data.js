import * as Yup from "yup";

export const initialValues = {
  frameworks: {
    Oracle: { id: 1, level: 0 },
    Cassandra: { id: 2, level: 0 },
    SQlite: { id: 3, level: 0 },
    Redis: { id: 4, level: 0 },
    MongoDB: { id: 5, level: 0 },
    PostgreSQL: { id: 6, level: 0 },
    MySQL: { id: 7, level: 0 },
    "Firebase Realtime Database": { id: 8, level: 0 },
    MariaDB: { id: 9, level: 0 },
    "Microsoft SQL Server": { id: 10, level: 0 },
    JQuery: { id: 11, level: 0 },
    React: { id: 12, level: 0 },
    Spring: { id: 13, level: 0 },
    Angular: { id: 14, level: 0 },
    "Vue.js": { id: 15, level: 0 },
    Laravel: { id: 16, level: 0 },
    Django: { id: 17, level: 0 },
    "Ruby On Rails": { id: 18, level: 0 },
    "ASP.NET o ASP.NETCore": { id: 19, level: 0 },
    Flask: { id: 20, level: 0 },
    "Express.js": { id: 21, level: 0 },
    FastAPI: { id: 22, level: 0 },
    ".NET": { id: 23, level: 0 },
    "Node.js": { id: 24, level: 0 },
  },
  languages: {
    Python: { id: 1, level: 0 },
    JavaScript: { id: 2, level: 0 },
    "HTML/CSS": { id: 3, level: 0 },
    Java: { id: 4, level: 0 },
    PHP: { id: 5, level: 0 },
    Ruby: { id: 6, level: 0 },
    "Scala, Perl y/o Go": { id: 7, level: 0 },
    "C/C++": { id: 8, level: 0 },
    Kotlin: { id: 9, level: 0 },
    Swift: { id: 10, level: 0 },
    "C#": { id: 11, level: 0 },
    TypeScript: { id: 12, level: 0 },
    Assembly: { id: 13, level: 0 },
    R: { id: 14, level: 0 },
    Go: { id: 15, level: 0 },
    "Bash/Shell": { id: 16, level: 0 },
  },
  tools: {
    Github: { id: 1, level: 0 },
    "Adobe Illustrator": { id: 2, level: 0 },
    "Adobe Photoshop": { id: 3, level: 0 },
    "Adobe XD": { id: 4, level: 0 },
    AWS: { id: 5, level: 0 },
    Docker: { id: 6, level: 0 },
    Figma: { id: 7, level: 0 },
    GIT: { id: 8, level: 0 },
    "Google Analytics": { id: 9, level: 0 },
    "Google Cloud Plataform": { id: 10, level: 0 },
    "Google Data Studio": { id: 11, level: 0 },
    Invision: { id: 12, level: 0 },
    "InVision Studio": { id: 13, level: 0 },
    Jira: { id: 14, level: 0 },
    Kubernetes: { id: 15, level: 0 },
    Marvel: { id: 16, level: 0 },
    "Microsoft Excel": { id: 17, level: 0 },
    "Microsoft Azure": { id: 18, level: 0 },
    Miro: { id: 19, level: 0 },
    "Power BI": { id: 20, level: 0 },
    "Proto.io": { id: 21, level: 0 },
    Qlik: { id: 22, level: 0 },
    Sketch: { id: 23, level: 0 },
    SPSS: { id: 24, level: 0 },
    Tableau: { id: 25, level: 0 },
    "Unity 3D": { id: 26, level: 0 },
    "Unreal Engine": { id: 27, level: 0 },
    Zepelin: { id: 28, level: 0 },
  },
};

//
// { frameworks: {oracle: {id: 1, level: 0}, cassandra: {...etc} },
// languages: { python: { id:1 ,level: 0}},
// tools: {unaHerramienta: {id: 1, level: 0 }}}

export const profileRadioOptions = [
  { key: "Nivel 1", value: "1" },
  { key: "Nivel 2", value: "2" },
  { key: "Nivel 3", value: "3" },
];

export const validationSchema = Yup.object({
  oracle: Yup.string().required("Required"),
  cassandra: Yup.string().required("Required"),
});

export const profileAccordionPanels = [
  {
    key: 1,
    title: {
      content: "Frameworks",
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
      content: "Tools",
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
];
