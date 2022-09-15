import * as Yup from "yup";

export const initialValues = {
  //frameworks
  oracle: { id: 1, level: 0 },
  cassandra: { id: 2, level: 0 },
  sqlite: { id: 3, level: 0 },
  redis: { id: 4, level: 0 },
  mongodb: { id: 5, level: 0 },
  postgresql: { id: 6, level: 0 },
  mysql: { id: 7, level: 0 },
  firebaserealtimedatabase: { id: 8, level: 0 },
  mariadb: { id: 9, level: 0 },
  microsoftsqlserver: { id: 10, level: 0 },
  jquery: { id: 11, level: 0 },
  react: { id: 12, level: 0 },
  spring: { id: 13, level: 0 },
  angular: { id: 14, level: 0 },
  vuejs: { id: 15, level: 0 },
  laravel: { id: 16, level: 0 },
  django: { id: 17, level: 0 },
  rubyonrails: { id: 18, level: 0 },
  aspnetoaspnetcore: { id: 19, level: 0 },
  flask: { id: 20, level: 0 },
  expressjs: { id: 21, level: 0 },
  fastapi: { id: 22, level: 0 },
  net: { id: 23, level: 0 },
  nodejs: { id: 24, level: 0 },
  //languages
  python: { id: 1, level: 0 },
  javascript: { id: 2, level: 0 },
  htmlcss: { id: 3, level: 0 },
  java: { id: 4, level: 0 },
  php: { id: 5, level: 0 },
  ruby: { id: 6, level: 0 },
  scalaperlyogo: { id: 7, level: 0 },
  cc: { id: 8, level: 0 },
  kotlin: { id: 9, level: 0 },
  swift: { id: 10, level: 0 },
  c: { id: 11, level: 0 },
  typescript: { id: 12, level: 0 },
  assembly: { id: 13, level: 0 },
  r: { id: 14, level: 0 },
  go: { id: 15, level: 0 },
  bashshell: { id: 16, level: 0 },
  //tool
  github: { id: 1, level: 0 },
  adobeillustrator: { id: 2, level: 0 },
  adobephotoshop: { id: 3, level: 0 },
  adobexd: { id: 4, level: 0 },
  aws: { id: 5, level: 0 },
  docker: { id: 6, level: 0 },
  figma: { id: 7, level: 0 },
  git: { id: 8, level: 0 },
  googleanalytics: { id: 9, level: 0 },
  googlecloudplataform: { id: 10, level: 0 },
  googledatastudio: { id: 11, level: 0 },
  invision: { id: 12, level: 0 },
  invisionstudio: { id: 13, level: 0 },
  jira: { id: 14, level: 0 },
  kubernetes: { id: 15, level: 0 },
  marvel: { id: 16, level: 0 },
  microsoftexcel: { id: 17, level: 0 },
  microsoftazure: { id: 18, level: 0 },
  miro: { id: 19, level: 0 },
  powerbi: { id: 20, level: 0 },
  protoio: { id: 21, level: 0 },
  qlik: { id: 22, level: 0 },
  sketch: { id: 23, level: 0 },
  spss: { id: 24, level: 0 },
  tableau: { id: 25, level: 0 },
  unity3d: { id: 26, level: 0 },
  unrealengine: { id: 27, level: 0 },
  zepelin: { id: 28, level: 0 },
};

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
