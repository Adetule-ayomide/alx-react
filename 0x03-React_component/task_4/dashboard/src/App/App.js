import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import WithLogging from "../HOC/WithLogging";
import "./App.css";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  {
    id: 1,
    html: { __html: "New course available" },
    type: "default",
    value: "New course available",
  },
  {
    id: 2,
    html: { __html: "New resume available" },
    type: "urgent",
    value: "New resume available",
  },
  {
    id: 3,
    html: { __html: "New notification" },
    type: "urgent",
    value: "New notification",
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  render() {
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <Header />
          <hr />
          <BodySectionWithMarginBottom title="Course list">
           <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom>
          <BodySection title="News from the School">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium tempore voluptatibus voluptates! Quas dolores ipsam expedita, vitae dolore, possimus blanditiis harum eaque voluptatem necessitatibus voluptate provident labore ut, quasi tenetur!</p>
          </BodySection>
          <Footer />
          <hr />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default WithLogging(App);
