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
import { url_api } from "../../constants/api_constants";
import { req_profile_form } from "../../request/req_profile_form";
import { useEffect } from "react";
import { useState } from "react";
import Acordeon from "./Acordeon";

export default function ProfileForm() {
  const [data, setData] = useState([])
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

  useEffect(()=>{
    async function req_data(){
     const data_form = await req_profile_form(url_api.profile_form)
      setData(data_form)
      console.log(data_form)
    }
    req_data()
  },[])

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
                positions={values.positions}
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
                 englishLevel={values.englishLevelId}
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
              <PerfilLaboral
                handleChange={handleChange}
                handleBlur={handleBlur}
                newTec={values.newTec}
                children={values.children}
              >      
                <Acordeon
                  language={data.languages}
                  framework={data.frameworks}
                  tools={data.tools}
                  values={values}
                ></Acordeon>
              </PerfilLaboral>    
              <br />
              <ExperienciaTrabajo
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
                urlCv={values.urlCv}
                urlLinkedin={values.urlLinkedin}
                urlGithub={values.urlGithub}
                urlPortfolio={values.urlPortfolio}
                details={values.details}
                softSkills={values.softSkills}
                yearsExperience={values.yearsExperience}
                jobs={values.jobs}
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