import React from "react";
import { Container } from "@mui/material";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";

export default function Telehuertos() {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  };
  const required = (value) => (value ? undefined : "Required");
  const MyForm = ({ subscription }) => (
    <Form
      onSubmit={onSubmit}
      subscription={subscription}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="title" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Subtitulo</label>
                <input {...input} placeholder="Subtitulo" />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="whatIs" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Que es telehuertos</label>
                <input {...input} placeholder="Que es telehuertos" />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="howToMake" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Como hacer telehuertos</label>
                <input {...input} placeholder="Como hacer telehuertos" />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="meetingTime" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Horarios</label>
                <input {...input} placeholder="Horarios" />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="escuela" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Enseñar de Teleturismo</label>
                <input {...input} placeholder="Enseñar de Teleturismo" />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="videoTutorial" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Tutorial de video link</label>
                <input {...input} placeholder="Tutorial de video link" />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="gallery" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>galeria de fotos</label>
                <input {...input} placeholder="galeria de fotos" />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Submit
            </button>
            <button
              type="button"
              onClick={() => {
                form.reset();
              }}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    />
  );

  return (
    <div>
      <Styles>
        <h1>React Final Form</h1>
        <Container>
          <MyForm subscription={{ submitting: true, pristine: true }} />
        </Container>
      </Styles>
    </div>
  );
}
