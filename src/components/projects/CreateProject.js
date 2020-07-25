import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { useToasts } from "react-toast-notifications";
import withAuthorization from "../hoc/withAuthorization";

const CreateProject = props => {
  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
    technologies: []
  });
  const { addToast } = useToasts();

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "technologies") {
      const formatString = value.replace(/\s+/g, '').split(",")
      setProjectForm({ ...projectForm, [name]: formatString });
    } else {
      setProjectForm({ ...projectForm, [name]: value });
    }
  }

  const handeSubmit = e => {
    e.preventDefault();
    console.log(projectForm);
    props.createProject(projectForm)
      .then(() => {
        addToast("Create Project Successfully", { appearance: 'success', autoDismiss: true, autoDismissTimeout: 3000 })
        props.history.push("/");
      }, error => {
        addToast(error.message, { appearance: 'error', autoDismiss: true, autoDismissTimeout: 3000 })
      })

  }

  return (
    <section className="section pt-0">
      <div className="container">
        <div className="columns is-mobile is-centered ">
          <div className="column is-two-thirds">
            <h1 className="title has-text-centered has-text-grey-dark">Create Project</h1>
            <div className="box ">
              <form onSubmit={handeSubmit}>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      name="title"
                      onChange={handleChange}
                      className="input"
                      type="text"
                      placeholder="Title" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea
                      rows={10}
                      name="description"
                      onChange={handleChange}
                      v-model="form.description"
                      className="textarea has-fixed-size"
                      placeholder="Description..."></textarea>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Image Url</label>
                  <div className="control">
                    <input
                      name="image"
                      onChange={handleChange}
                      className="input"
                      type="text"
                      placeholder="Image URL" />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Link</label>
                  <div className="control">
                    <input
                      name="link"
                      onChange={handleChange}
                      className="input"
                      type="text"
                      placeholder="Link" />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Technologies</label>
                  <div className="control">
                    <input
                      name="technologies"
                      onChange={handleChange}
                      className="input"
                      type="text"
                      placeholder="Technologies" />
                  </div>
                </div>

                <div className="field">
                  <input className="input button is-primary is-light is-outlined" type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}



export default connect(null, {
  createProject
})(withAuthorization(CreateProject));
