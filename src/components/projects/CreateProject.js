import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { useToasts } from "react-toast-notifications";

const CreateProject = props => {
  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    image: "",
  });
  const { addToast } = useToasts();

  const handleChange = e => {
    const { name, value } = e.target;
    setProjectForm({ ...projectForm, [name]: value });
  }

  const handeSubmit = e => {
    e.preventDefault();
    props.createProject(projectForm)
      .then(()=> {
        addToast("Create Project Successfully", { appearance: 'success', autoDismiss: true, autoDismissTimeout: 3000 })
        props.history.push("/");
      }, error => {
        addToast(error.message, { appearance: 'error', autoDismiss: true, autoDismissTimeout: 3000 })
      })
      
  }

  return (
    <section className="section" style={{ marginTop: "50px" }}>
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
                      placeholder="Text input" />
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
})(CreateProject);
