
import React from "react";

class About extends React.Component {
    render() {
        return (
            <section id="about" className="section has-background-light" style={{ paddingTop: "50px", height: "900px" }}>
                <div className="container scrollspy">
                    <div className="columns ">
                        <div className="column">
                            <img src={process.env.PUBLIC_URL + "images/ab-img.png"} style={{ width: "90%" }} alt="text" />
                        </div>
                        <div className="column" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="tile is-parent ">
                                <div className="tile is-child box">
                                    <p className="title has-text-grey-dark mb-3">About Me</p>
                                    <p className="is-size-6 has-text-grey mb-3">
                                        Hello, I’m a Tri Do, Computer Science student at San Jose State University. I have rich experience in website, & building backend server. Also I am good at
                            </p>
                                    <ul className="unorderd-list">
                                        <li><span className="has-text-grey-dark is-size-7 has-text-weight-medium">Java</span></li>
                                        <li><span className="has-text-grey-dark is-size-7 has-text-weight-medium">Spring Boot</span>
                                        </li>
                                        <li><span className="has-text-grey-dark is-size-7 has-text-weight-medium">JavaScript</span>
                                        </li>
                                        <li><span className="has-text-grey-dark is-size-7 has-text-weight-medium">ReactJS</span>
                                        </li>                                        
                                        <li><span className="has-text-grey-dark is-size-7 has-text-weight-medium">HTML</span></li>
                                        <li><span className="has-text-grey-dark is-size-7 has-text-weight-medium">CSS</span></li>
                                        <li><span className="has-text-grey-dark is-size-7 has-text-weight-medium">Data Structures & Algorithms</span></li>
                                    </ul>
                                    <p>
                                        <button className="button is-rounded is-primary mt-5 is-outlined ">
                                            Download CV
                                    <span className="icon">
                                                <i className="ml-3 fa fa-download"></i>
                                            </span>
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="columns mt-6">
                        <div className="column">
                            <h3 className="has-text-centered has-text-grey-dark title">Work Experience</h3>
                        </div>
                    </div>
                    <div className="columns mt-6">
                        <div className="tile is-ancestor">
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image is-64x64" style={{ height: "32px" }}>
                                        <img src="./images/fanniemae1.png" alt="text" />
                                    </figure>
                                    <p className="is-size-5 has-text-weight-bold">Fannie Mae Backend SWE Intern</p>
                                    <ul style={{ listStyle: "disc" }} className="ml-5">
                                        <li>
                                            <span className="is-size-7 ">
                                                Implemented RESTFUL API, and microservices using Spring Boot, Java
                                                Lambda 8 for the users to determine whether the loans should be held for sale or
                                                investment.
                                    </span>
                                        </li>
                                        <li>
                                            <span className="is-size-7 ">
                                                Wrote test cases using Junit 5,and Karate for the backend services.
                                    </span>
                                        </li>
                                        <li>
                                            <span className="is-size-7">
                                                Learned to track changes and collaborate with other engineers using
                                                Git, Bitbucket.
                                    </span>
                                        </li>
                                    </ul>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image is-32x32">
                                        <img src="./images/angel-hack2.png" alt="angel" />
                                    </figure>
                                    <p className="is-size-5 has-text-weight-bold">Participate in Angel Hackathon 2019.</p>
                                    <ul style={{ listStyle: "disc" }} className="ml-5">
                                        <li>
                                            <span className="is-size-7 ">
                                                Implemented Computer Vision (AWS API) to create a security camera.
                                    </span>
                                        </li>
                                        <li>
                                            <span className="is-size-7 ">
                                                Using phones to simulate public cameras to detect active shooters.
                                    </span>
                                        </li>
                                        <li>
                                            <span className="is-size-7">
                                                Embedded Google Map API to show the location where active shooters are at.
                                    </span>
                                        </li>
                                    </ul>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image is-32x32">
                                        <img src="./images/mission-hack1.png" alt="text" />
                                    </figure>
                                    <p className="is-size-5 has-text-weight-bold">Participate in Mission Hackathon 3.0.</p>
                                    <ul style={{ listStyle: "disc" }} className="ml-5">
                                        <li>
                                            <span className="is-size-7 ">
                                                Brainstormed ideas with a team of 5 to create a software called Smart-Collector
                                                that helps families and small businesses sort waste more efficiently.
                                    </span>
                                        </li>
                                        <li>
                                            <span className="is-size-7 ">
                                                Integrated Google Vision API to classify waste and Websocket for real-time
                                                communication using Java.
                                    </span>
                                        </li>
                                    </ul>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;