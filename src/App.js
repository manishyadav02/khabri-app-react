import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom"


export default class App extends Component {

  constructor(){
    super();
    this.state = {
      country: "us"
    }
  }


  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                pageSize={6}
                country={this.state.country}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/us"
            element={
              <News
                key="us"
                pageSize={6}
                country="us"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/uk"
            element={
              <News
                key="uk"
                pageSize={6}
                country="uk"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/in"
            element={
              <News
                key="in"
                pageSize={6}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={6}
                country={this.state.country}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={6}
                country={this.state.country}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                key="general"
                pageSize={6}
                country={this.state.country}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News key="health" pageSize={6} country={this.state.country} category="health" />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={6}
                country={this.state.country}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News key="sports" pageSize={6} country={this.state.country} category="sports" />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={6}
                country={this.state.country}
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
