import { useContext, useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { schemaValidation } from "../config/validate";
import { useNavigate, useLoaderData } from "react-router-dom";
import { SubsContext } from "../State/SubsContext";
import SubForm from './../components/SubForm/SubForm';

export const EditSub = () => {
  const sub = useLoaderData();
  const navigate = useNavigate();
  const { updatesub } = useContext(SubsContext);
  const [image, setImage] = useState(sub.coverImage);
  const initialValues = {
    title: sub.title || undefined,
    summary: sub.summary || undefined,
    description: sub.description || undefined,
    coverImage: sub.coverImage || undefined,
    hackathonName: sub.hackathonName || undefined,
    hackathonStartDate: sub.hackathonStartDate || undefined,
    hackathonEndDate: sub.hackathonEndDate || undefined,
    githubRepositoryLink: sub.githubRepositoryLink || undefined,
    otherLinks: sub.otherLinks || undefined,
  };

  useEffect(() => {
    document.title = "Submission Form";
  }, []);

  const handleSubmit = (values, { setSubmitting }) => {
    values["coverImage"] = image;
    updatesub(sub.id, values);
    setSubmitting(false);
    navigate("/");
  };

  const updateImage = (value) => {
    setImage(value);
  };

  useEffect(() => {
    document.title = "Edit sub";
  }, []);

  return (
    <>
      <div className=" wrapper" id="formInput">
        <div className="mainsection">
          <h3>Edit Hackathon sub</h3>
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
