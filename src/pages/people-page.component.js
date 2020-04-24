import React, { Component } from "react";
import { KButton } from "ava30-frontend-componentslib";
import { withRouter } from "react-router-dom";

class PeoplePage extends Component {
  render() {
    return (
      <div>
        <span>People{this.props.match.params.id}</span>
        <br />
        <KButton
          title="Com ID"
          onClick={() => this.props.history.push("/people/1")}
        />
        <br />
        <KButton
          title="Sem ID"
          onClick={() => this.props.history.push("/people")}
        />
        <br />
        <KButton
          title="Ir para PLANETAS"
          onClick={() => this.props.history.push("/planets")}
        />
      </div>
    );
  }
}
export default withRouter(PeoplePage);
