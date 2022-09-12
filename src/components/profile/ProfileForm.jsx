import React from "react";
import { Container, Button, Form } from "semantic-ui-react";
import { Formik } from "formik";
import ExperienciaTrabajo from "./ExperienciaTrabajo";
import InfoPersonal from "./InfoPersonal";
import Postula from "./Postula";
import PerfilEducacional from "./PerfilEducacional"
import PerfilLaboral from "./PerfilLaboral";
import { formInitialValues } from "../dataProfileForm/dataProfile";
import AddStudies from "./AddStudies";


export default function ProfileForm() {
  const placeholderCourses = [
    { id: 'course-course', name: 'course', placeholder: 'Curso' },
    { id: 'course-inst', name: 'institution', placeholder: 'Institución' },
    { id: 'course-type', name: 'typeIntitution', placeholder: 'Tipo de institución' },
  ];
  const genderOptions = [
    { key: "m", text: "Masculino", value: "male" },
    { key: "f", text: "Femenino", value: "female" },
    { key: "o", text: "Otro", value: "other" },
  ];
  const formSubmit = async (values, { setSubmitting })=>{
    console.log(values);
  };
  return (
    <Container>
      <Postula/>
      <Container className="profile-form-wrapper">
        <Formik initialValues={formInitialValues} onSubmit={formSubmit}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          })=>(
            <Form onSubmit={handleSubmit}>
              <InfoPersonal
                nameInfo={values.nameInfo}
                lastName={values.lastName}
                email={values.email} 
                gender={values.gender} 
                phone={values.phone}
                city={values.city}
                country={values.country}
                employmentStatus={values.employmentStatus}
                idealJob={values.idealJob}
                handleBlur={handleBlur}
                handleChange={handleChange}
                options={genderOptions}
                setFieldValue={setFieldValue}
                errors={errors}
                />
              <PerfilEducacional
                 handleChange={handleChange}
                 handleBlur={handleBlur}
                 setFieldValue={setFieldValue}
                 educationLevelId={values.educationLevelId}
                 englishLevel={values.englishLevel}
                 studies={values.studies}
                 actual={values.actual}
                 more={values.more} 
                 errors={errors} 
                 >
                <AddStudies
                  values={values.studies}
                  name="studies"
                  buttonLabel="Agregar Curso"
                  placeholders={placeholderCourses}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  />
              </PerfilEducacional>    
              <br />
              <PerfilLaboral/>          
              <br />
              <ExperienciaTrabajo
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
                urlCv={values.urlCv}
                urlLinkedin={values.urlLinkedin}
                urlGithub={values.urlGithub}
                urlPortafolio={values.urlPortafolio}
                details={values.details}
                softSkills={values.softSkills}
                yearsExperience={values.yearsExperience}
                availableOptions={values.availableOptions}
                descriptionIdealJob={values.descriptionIdealJob}
                workOption={values.workOption}
                visas={values.visas}/>
          <Button type="submit" disabled={isSubmitting} content='Enviar' primary/>
          </Form>
          )}
        </Formik>        
      </Container>
    </Container>
  );
}





/*


        <Formik
          initialValues={{
            name:'',
            lastName:'',
            email:'',
            phone:'',
            city:'',
            country:'',
            gender:'',
            employmentStatus:'',
            idealJob: [
            ],
            educationLevelId:'',
            englishLevel:'',
            studies:[{
              name:'',
              institution:'',
              institutionType:''
            }],
            actual:'',
            more:'',
            urlCv:'',
            urlLinkedin:'',
            urlGithub:'',
            urlPortfolio:'',
            details:'',
            softSkills:[],
            yearsExperience:'',
            availableOptions:'',
            descriptionIdealJob:'',
            workOption:'',
            visas:[]
          }}
          onSubmit={(data, {setSubmitting}) => {
            setSubmitting(true);
            console.log("submit:", data);
           // setSubmitting(false);
          }}>
        {({ values, isSubmitting, handleChange, handleBlur, handleSubmit, setFieldValue}) => (
          <Form onSubmit={handleSubmit}>
            

            <Button disabled={isSubmitting} type="submit">Enviar Formulario</Button>
          </Form>
        )}
        </Formik>    */