import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PeoplePage from "./pages/people-page.component.js";
import { KBody, KSide } from "ava30-frontend-componentslib";

export default function Root(props) {
  return (
    <Fragment>
      <KSide width={205}>SIDEBAR</KSide>
      <KBody height={56} width={205}>
        <BrowserRouter>
          <Route path="/people" exact component={PeoplePage} />
          <Route path="/people/:id" exact component={PeoplePage} />
        </BrowserRouter>
      </KBody>
    </Fragment>
  );
}
