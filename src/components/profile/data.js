import * as Yup from "yup";

export const initialValues = {
  oracle: { id: 1, level: 0 },
  cassandra: { id: 2, level: 0 },
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
