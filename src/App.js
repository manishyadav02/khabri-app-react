import "./App.css";

import React, {useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  
  // eslint-disable-next-line
  const [country, setCountry ] = useState("us") ; 
  const [progress, setProgress] = useState(0);

  const pageSize = 18;

  const apiKey = "264dcad17acb4ba882c12e4c5940d37b";

  return (
    <div>
      <Navbar />
      <LoadingBar height={3} color="#0d6efd" progress={progress} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country={country}
              category="general"
            />
          }
        />
        <Route
          exact
          path="/us"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="us"
              pageSize={pageSize}
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
              apiKey={apiKey}
              setProgress={setProgress}
              key="uk"
              pageSize={pageSize}
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
              apiKey={apiKey}
              setProgress={setProgress}
              key="in"
              pageSize={pageSize}
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
              apiKey={apiKey}
              setProgress={setProgress}
              key="business"
              pageSize={pageSize}
              country={country}
              category="business"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="entertainment"
              pageSize={pageSize}
              country={country}
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/general"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country={country}
              category="general"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="health"
              pageSize={pageSize}
              country={country}
              category="health"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="science"
              pageSize={pageSize}
              country={country}
              category="science"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="sports"
              pageSize={pageSize}
              country={country}
              category="sports"
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="technology"
              pageSize={pageSize}
              country={country}
              category="technology"
            />
          }
        />
      </Routes>
    </div>
  );
}
