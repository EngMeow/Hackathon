import { useState, useContext } from "react";
import { useEffect } from "react";
import { Formik, Form } from "formik";
import { schemaValidation } from "../config/validate";
import SubForm from "../components/SubForm/SubForm";
import { SubsContext } from "../State/SubsContext";
import { useNavigate } from "react-router-dom";
import '../assets/css/SubForm.css'
export const Addsub = () => {
  const { addsub } = useContext(SubsContext);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const initialValues = {
    title: undefined,
    summary: undefined,
    description: undefined,
    coverImage: undefined,
    hackathonName: undefined,
    hackathonStartDate: undefined,
    hackathonEndDate: undefined,
    githubRepositoryLink: undefined,
    otherLinks: undefined,
  };

  const handleSubmit = (values, { setSubmitting }) => {
    values["coverImage"] = image;
    addsub(values);
    setSubmitting(false);
    navigate("/");
  };
  const updateImage = (value) => {
    setImage(value);
  };
  useEffect(() => {
    document.title = "Submission Form";
  }, []);
  return (
    <>
      <div className=" wrapper" id="formInput">
        <div className="mainsection">
          <h3>New Hackathon submission</h3>
          <Formik
            initialValues={initialValues}
            validationSchema={schemaValidation}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form style={{ display: "flex", flexWrap: "wrap" }}>
                <SubForm image={image} updateImage={updateImage} />
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
