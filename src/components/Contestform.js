import React , {Component}  from 'react'
import { Form , Col , InputGroup , Button, Container } from 'react-bootstrap'
import * as yup from 'yup';
import  { Formik } from 'formik'; 
import './Contestbanner.css'






const schema = yup.object({
  first_name: yup.string().required("Your first name is required"),
  last_name: yup.string().required("Your last name is required"),
  email: yup.string().required("Your email is required").email(),
  slogan_text: yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required("Your quote is required"),

 
});



class Contestform extends Component {

  
  async postData(values){

    try{

      let params = {first_name: values.first_name, last_name: values.last_name, email: values.email, slogan_text: values.slogan_text}
      let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
      }
      fetch("http://localhost:3000/slogans/", options).then(r => 
      
      {
        if (r.status === 422) {
            return alert("email has been already taken")
        } else {

          return ""

        }
      
      
      
      
      }); 
  

  

    } catch(e){

      console.log(e)
      
    }
  }
  
  render(){
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log("")}
      initialValues={{
        first_name: '',
        last_name: '',
        email: '',
        slogan_text:'',
      }}
     
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        
          
        <div className="contestbackground p-5">
        <Container >
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                placeholder="First Name"
                value={values.first_name}
                onChange={handleChange}
                isInvalid={!!errors.first_name}
              />
              <Form.Control.Feedback type="invalid">{errors.first_name}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={values.last_name}
                onChange={handleChange}
                isInvalid={!!errors.last_name}
              />

              <Form.Control.Feedback type="invalid">{errors.last_name}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikEmail">
              <Form.Label>Email</Form.Label>
              <InputGroup>
                
                <Form.Control
                  type="Email"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationFormik03">
              <Form.Label>Slogan</Form.Label>
              <Form.Control
                type="text"
                placeholder="Slogan"
                name="slogan_text"
                value={values.slogan_text}
                onChange={handleChange}
                isInvalid={!!errors.slogan_text}
              />

              <Form.Control.Feedback type="invalid">
                {errors.slogan_text}
              </Form.Control.Feedback>
            </Form.Group>
            
          </Form.Row>
          
          <Button type="submit" className="btn-form" onClick={ () => {this.postData(values)}}>Submit your Slogan</Button>
        </Form>
        </Container>
        </div>
      )}
    </Formik>
  );

}}


export default Contestform 