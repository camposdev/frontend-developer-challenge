import React from "react";
import { Formik } from 'formik';
import TitleSection from "../../components/TitleSection";
import { 
  Section,
  LargeButton,
  TextCenter,
  Form,
  FormGroup,
  Label,
  FieldGroup,
  Field,
  ErrorMsg
} from "./style";

const ShareForm = () => {

  return (
    <Section>
      <TitleSection>Compartilhe a novidade</TitleSection>

      <TextCenter>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</TextCenter>
      
      <Formik
        initialValues={{ name: '', email: '' }}
        validate={values => {
          let errors = {};
          if (!values.name) {
            errors.name = 'Campo obrigatório';
          }
          if (!values.email) {
            errors.email = 'Campo obrigatório';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Endereço de e-mail inválido';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <FieldGroup>
                <Label>Nome do seu amigo:</Label>
                <Field
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  error={!!errors.name && touched.name}
                />
                <ErrorMsg>{errors.name && touched.name && errors.name}</ErrorMsg>
              </FieldGroup>

              <FieldGroup>
                <Label>E-mail:</Label>
                <Field
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={!!errors.email && touched.email}
                />
                <ErrorMsg>{errors.email && touched.email && errors.email}</ErrorMsg>
              </FieldGroup>
            </FormGroup>

            <LargeButton type="submit" flat>Enviar agora</LargeButton>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

export default ShareForm;
