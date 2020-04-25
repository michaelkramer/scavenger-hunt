import React from "react";
//import { Switch, Route } from "react-router";
//import { Link } from "react-router-dom";
//import database from 'firebase-database';

export default class App extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props);
    // check to see if we have existing server-rendered data
    // sets the state if we do, otherwise initialize it to an empty state
    if (props.state) {
      this.state = props.state;
    } else {
      this.state = {
        employees: {},
        currentEmployee: {},
      };
    }
  }

  render() {
    return <div>Hi mom Are you cool?</div>;
  }
}
