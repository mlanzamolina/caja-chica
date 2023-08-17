import React, { useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useCollection } from "../../hooks/useCollection";
import atlasConfig from "../../atlasConfig.json";
const { dataSourceName } = atlasConfig;

export const TelehuertosForm = () => {
  const [content, setContent] = useState({});
  const collection = useCollection({
    cluster: dataSourceName,
    db: localStorage.getItem("REACT_APP_DB"),
    collection: localStorage.getItem("REACT_APP_COLLECTION"),
  });
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const onSubmit = async (values) => {
    await sleep(300);
    values.key = "key";
    window.alert(JSON.stringify(values, 0, 2));
    console.log(values);
    try {
      const result = await collection.findOneAndUpdate(
        { key: "key" },
        { $set: values },
        { upsert: true },
      );
      console.log(
        `Inserted ${result.insertedCount} documents into the collection`,
      );
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    // find one
    const findOne = async () => {
      try {
        const result = await collection.findOne({ key: "key" });
        console.log(`Found a document : ${JSON.stringify(result, 0, 2)}`);
        setContent(result);
      } catch (err) {
        console.error(err);
      }
    };
    findOne();
  }, []);
  const required = (value) => (value ? undefined : "Required");
  const MyForm = ({ subscription }) => (
    <Form
      onSubmit={onSubmit}
      subscription={subscription}
      initialValues={content}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                marginBottom: 2,
              }}
            >
              <Typography component="h1" variant="h5">
                {" "}
                ADMINISTRACION DE CONTENIDO
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                marginBottom: 2,
              }}
            >
              <Button
                type="submit"
                disabled={submitting}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
              <Button
                onClick={() => {
                  form.reset();
                }}
                disabled={submitting || pristine}
                color="warning"
                sx={{ mt: 3, mb: 2 }}
              >
                Reset
              </Button>
            </Box>
            <Field name="title" validate={required}>
              {({ input, meta }) => (
                <TextField
                  {...input}
                  label="Subtitulo"
                  placeholder="Subtitulo"
                  variant="outlined"
                  error={meta.touched && meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>
            <Field name="whatIs" validate={required}>
              {({ input, meta }) => (
                <TextField
                  {...input}
                  label="Que es telehuertos"
                  placeholder="Que es telehuertos"
                  variant="outlined"
                  error={meta.touched && meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>
            <Field name="howToMake" validate={required}>
              {({ input, meta }) => (
                <TextField
                  {...input}
                  label="Como hacer telehuertos"
                  placeholder="Como hacer telehuertos"
                  variant="outlined"
                  error={meta.touched && meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>
            <Field name="meetingTime" validate={required}>
              {({ input, meta }) => (
                <TextField
                  {...input}
                  label="Horarios"
                  placeholder="Horarios"
                  variant="outlined"
                  error={meta.touched && meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>
            <Field name="escuela" validate={required}>
              {({ input, meta }) => (
                <TextField
                  {...input}
                  label="Enseñar de Teleturismo"
                  placeholder="Enseñar de Teleturismo"
                  variant="outlined"
                  error={meta.touched && meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>
            <Field name="videoTutorial" validate={required}>
              {({ input, meta }) => (
                <TextField
                  {...input}
                  label="Tutorial de video link"
                  placeholder="Tutorial de video link"
                  variant="outlined"
                  error={meta.touched && meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>
            <Field name="gallery" validate={required}>
              {({ input, meta }) => (
                <TextField
                  {...input}
                  label="Galeria de fotos"
                  placeholder="Galeria de fotos"
                  variant="outlined"
                  error={meta.touched && meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>
          </Box>
        </form>
      )}
    />
  );
  return (
    <div>
      <MyForm subscription={{ submitting: true, pristine: true }} />
    </div>
  );
};
