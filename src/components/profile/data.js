import * as Yup from "yup";

// export const initialValuesNOT = {
//   languageLevels: [
//     {
//       languageId: 1,
//       level: 0,
//       name: { language: "react" },
//     },
//     {
//       languageId: 2,
//       level: 0,
//       name: { language: "django" },
//     },
//     {
//       languageId: 3,
//       level: 0,
//       name: { language: "html" },
//     },
//   ],
//   frameworkLevels: [
//     {
//       frameworkId: 1,
//       level: 0,
//       name: { framework: "react" },
//     },
//     {
//       frameworkId: 2,
//       level: 0,
//       name: { framework: "react" },
//     },
//     {
//       frameworkId: 3,
//       level: 0,
//       name: { framework: "react" },
//     },
//   ],
//   toolLevels: [
//     {
//       toolId: 1,
//       level: 0,
//       name: { tool: "react" },
//     },
//     {
//       toolId: 2,
//       level: 0,
//       name: { tool: "react" },
//     },
//     {
//       toolId: 3,
//       level: 0,
//       name: { tool: "react" },
//     },
//   ],
// };

export const initialValues = [
  {
    frameworkId: 1,
    level: 0,
    frameworkName: "react",
  },
  {
    frameworkId: 2,
    level: 0,
    frameworkName: "django",
  },
  {
    frameworkId: 3,
    level: 0,
    frameworkName: "vue",
  },
];

//SWAGGER
// "FrameworkLevels": [
//   {
//     "FrameworkId": 0,
//     "level": 0,
//     "Framework": {
//       "name": "string"
//     }
//   }
// ],

export const profileRadioOptions = [
  { key: "Nivel 1", value: "1" },
  { key: "Nivel 2", value: "2" },
  { key: "Nivel 3", value: "3" },
];

// export const ValuesFromDB = {
//   react: "1",
//   django: "2",
//   html: "3",
// };

// export const validationSchema = Yup.object({
//   react: Yup.string().required("Required"),
//   django: Yup.string().required("Required"),
//   html: Yup.string().required("Required"),
// });

// const frameworkIdSelected = (props) => {
//   Object.keys();
// };
export const onSubmit = (values) => {
  console.log("Form data", values);
  console.log("Saved data stringify", JSON.parse(JSON.stringify(values)));
};

//   const checkboxOptions = [
//     {
//       id: 1,
//       frameworkName: "React",
//       frameworkLevels: [
//         { key: "key-level-Option1-react", value: "value-Option1" },
//         { key: "key--level-Option2-react", value: "value-Option2" },
//         { key: "key-level-Option3-react", value: "value-Option3" },
//       ],
//     },
//     {
//       id: 1,
//       frameworkName: "Django",
//       frameworkLevels: [
//         { key: "key-level-Option1-django", value: "value-Option1" },
//         { key: "key--level-Option2-django", value: "value-Option2" },
//         { key: "key-level-Option3-django", value: "value-Option3" },
//       ],
//     },
//   ];

// const makeTranslation = (key) => {
//   switch (key) {
//     case "react":
//       console.log("frameworkIdIs:", 1);
//       break;
//     case "django":
//       console.log("frameworkIdIs:", 2);
//       break;
//     case "html":
//       console.log("frameworkIdIs:", 3);
//       break;
//     default:
//       console.log("not matching options for name");
//   }
// };

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
