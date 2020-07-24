import React from "react";

class Hero extends React.Component {
    render() {
        return (
            <section id="home" className="section  scrollspy" style={{ paddingTop: "150px", height: "950px" }}>
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="columns">
                                <div className="tile is-parent ">
                                    <div className="tile is-child box">
                                        <p className="has-text-grey">Hey There</p>
                                        <p className="title has-text-grey-dark">I AM TRI DO</p>
                                        <p className="subtitle has-text-grey mb-2">
                                            I'm currently majoring in Computer Science.
                                </p>
                                        <p className="is-size-7 has-text-grey-dark mb-1"><i
                                            className="fa fa-envelope mr-3"></i>trido1903@gmail.com</p>
                                        <p className="is-size-7 has-text-grey-dark mb-1"><i
                                            className="fa fa-phone mr-3"></i>(408)-796-9408
                                </p>
                                        <p className="is-size-7 has-text-grey-dark mb-4"><i className="fa fa-map-marker mr-3"></i> San
                                    Jose,
                                    California</p>
                                        <a href="#"><i className="has-text-grey-dark is-size-5 fa fa-github mr-3"></i></a>
                                        <a href="#"><i className="has-text-grey-dark is-size-5 fa fa-linkedin mr-3"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="columns">
                                <div className="tile is-parent ">
                                    <div className="tile is-child box">
                                        <p className="title has-text-grey-dark">Education</p>
                                        <p className="subtitle has-text-grey is-italic mb-1">
                                            Bachelor of Science in Computer Science.
                                </p>
                                        <p className="is-size-7"><span className="has-text-weight-bold">San Jose State University
                                    </span>,
                                    Santa Clara, California (2019 - 2021)</p>
                                        <p className="is-size-7 is-italic has-text-weight-bold mb-1">GPA: 3.85/4.0</p>
                                        <p className="is-size-7"><span className="has-text-weight-bold">Mission College</span>, Santa
                                    Clara, California
                                    (2017 - 2019)</p>
                                        <p className="is-size-7 is-italic has-text-weight-bold">GPA: 3.9/4.0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="image-container">
                                <div className="outer-border-image-lv1">
                                    <div className="outer-border-image-lv2">
                                        <figure className="image">
                                            <img className="" src="./images/banner3.png" alt="text" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;