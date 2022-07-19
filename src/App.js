import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      country: "us",
      progress: 0,
    };
  }
  pageSize = 18;
  
  apiKey = "264dcad17acb4ba882c12e4c5940d37b";

  setProgress = (percent) => {
    this.setState({ progress: percent });
  };

  render() {
    return (
      <div>
        
        <Navbar />
        <LoadingBar height={3} color="#0d6efd" progress={this.state.progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                apiKey = {this.apiKey}
                setProgress={this.setProgress}
                key="general"
                pageSize={this.pageSize}
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
                apiKey = {this.apiKey}
                setProgress={this.setProgress}
                key="us"
                pageSize={this.pageSize}
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
                apiKey = {this.apiKey}
                setProgress={this.setProgress}
                key="uk"
                pageSize={this.pageSize}
                country="gb"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/in"
            element={
              <News
                apiKey = {this.apiKey}
                setProgress={this.setProgress}
                key="in"
                pageSize={this.pageSize}
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
                apiKey = {this.apiKey}
                setProgress={this.setProgress}
                key="business"
                pageSize={this.pageSize}
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
                apiKey = {this.apiKey}
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={this.pageSize}
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
                apiKey = {this.apiKey}
                setProgress={this.setProgress}
                key="general"
                pageSize={this.pageSize}
                country={this.state.country}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                apiKey = {this.apiKey}
                setProgress={this.setProgress}
                key="health"
                pageSize={this.pageSize}
                country={this.state.country}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                apiKey = {this.apiKey}
                setProgress={this.setProgress}
                key="science"
                pageSize={this.pageSize}
                country={this.state.country}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                apiKey = {this.apiKey}
                setProgress={this.setProgress}
                key="sports"
                pageSize={this.pageSize}
                country={this.state.country}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                apiKey = {this.apiKey}
                setProgress={this.setProgress}
                key="technology"
                pageSize={this.pageSize}
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
