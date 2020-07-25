import React, { useRef } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import withGuest from "../hoc/withGuest";

const SignIn = (props) => {
  const { register, handleSubmit } = useForm();
  const { addToast } = useToasts();
  const loadingBtn = useRef(null);

  const onSubmit = data => {
    loadingBtn.current.className = "input button is-primary is-loading";
    props
      .signIn(data)
      .then(() => {
        addToast("Sign In Successfully", { appearance: 'success', autoDismiss: true, autoDismissTimeout: 3000 })
        props.history.push("/projects/dashboard");
      })
      .catch(error => {
        loadingBtn.current.className = "input button is-primary";
        addToast(error.message, { appearance: 'error', autoDismiss: true, autoDismissTimeout: 3000 })
      })
  }

  return (
    <section className="section" style={{ marginTop: "100px" }}>
      <div className="container">
        <div className="columns is-mobile is-centered ">
          <div className="column is-one-third">
            <div className="box">
              <h1 className="title has-text-centered has-text-grey-dark">Login</h1>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                  <label className="label has-text-grey-dark">Email</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      ref={register}
                      name="email"
                      className="input"
                      type="email"
                      placeholder="Your Email"
                      autoComplete="email" />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label has-text-grey-dark">Password</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      ref={register}
                      name="password"
                      className="input"
                      type="password"
                      placeholder="Your Password"
                      autoComplete="current-password" />
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <button
                    ref={loadingBtn}
                    type="submit"
                    className="input button is-primary">Sign In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default connect(null, {
  signIn
})(withGuest(SignIn));
