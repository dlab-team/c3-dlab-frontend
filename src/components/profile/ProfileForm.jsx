import React, { useContext } from "react";
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
import UserContext from "../../contexts/userContext";
import { post_add_user } from "../../send/send_add_user";

export default function ProfileForm() {
  const [data, setData] = useState([])
  
const {userData}= useContext(UserContext)
  const placeholderCourses = [
    { id: 'course-course', name: 'name', placeholder: 'Curso' },
    { id: 'course-inst', name: 'institution', placeholder: 'Institución' },
    { id: 'course-type', name: 'intitutionType', placeholder: 'Tipo de institución' },
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
  },[]); 

  const formSubmit = async (values, { setSubmitting,  })=>{
    
    values.userId= userData.id
    post_add_user(url_api.add_user, {values})
    console.log(values);
  }
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
                name={values.name}
                lastName={values.lastName}
                gender={values.gender} 
                phone={values.phone}
                city={values.city}
                country={values.country}
                employmentStatus={values.employmentStatus}
                professionalPositions={data.professionalPositions}
                handleBlur={handleBlur}
                handleChange={handleChange}
                options={genderOptions}
                setFieldValue={setFieldValue}
                errors={errors}
                positionValue={values.professionalPositions}
                />
              <PerfilEducacional
                 handleChange={handleChange}
                 handleBlur={handleBlur}
                 setFieldValue={setFieldValue}
                 educacionalOptions={data.edLevels}
                 educationLevelId={values.educationLevelId}
                 englishLevel={values.englishLevel}
                 studies={values.studies}
                 currentSituation={values.currentSituation}
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
                languages={data.languages}
                frameworks={data.frameworks}
                tools={data.tools}
                values={values}
                setFieldValue={setFieldValue}
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
                softSkills={data.softSkills}
                skillsValue={values.softSkills}
                yearsExperience={values.yearsExperience}
                jobs={data.jobs}
                jobsValue={values.jobs}
                descriptionIdealJob={values.descriptionIdealJob}
                betterSituation={values.betterSituation}
                visas={data.visas}
                visasValue={values.visas}/>
          <Button type="submit" disabled={isSubmitting} content='Enviar' primary/>
          </Form>
          )}
        </Formik>        
      </Container>
    </Container>
  );
}
