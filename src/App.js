import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import ModelInputForm from "components/ModelInputForm.js";
import ModelPage from "pages/ModelPage.js";
import GetStarted from "./pages/GetStarted.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/model/predict/">
            <ModelPage />
            <ModelInputForm />
          </Route>
          <Route path="/model">
            <ModelPage />
          </Route>
          <Route path="/">
            <GetStarted />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
