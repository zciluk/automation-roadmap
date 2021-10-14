import React from "react";
import { Segment, Divider, Header, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import roadmapData from "../../data/roadmapData.json";
import SingleTree from "../SingleTree";
console.log(roadmapData.beginner);
const App = () => {
  return (
    <Segment>
      <Header as="h2" icon textAlign="center">
        <Icon name="road" />
        Automation roadmap
      </Header>

      <Divider horizontal>Beginner</Divider>
      <SingleTree data={roadmapData.beginner} color="teal" />
      <Divider horizontal>Intermediate</Divider>
      <SingleTree data={roadmapData.intermediate} color="blue" />
      <Divider horizontal>Expert</Divider>
      <SingleTree data={roadmapData.expert} color="violet" />
    </Segment>
  );
};

export default App;
