import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
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
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
  };

  renderBody() {
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      return <CourseList listCourses={listCourses} />;
    } else {
      return <Login />;
    }
  }

  render() {
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <Header />
          <hr />
          <div className="App-body">{this.renderBody()}</div>
          <Footer />
          <hr />
        </div>
      </>
    );
  }
}

export default App;
