import React, { useState } from "react";
import {
  Segment,
  Divider,
  Header,
  Icon,
  Button,
  Modal,
  Transition,
  Label,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import roadmapData from "../../data/roadmapData.json";
import SingleTree from "../SingleTree";

const App = () => {
  const [state, setState] = useState({
    showInstruction:
      localStorage.getItem("instructionViewedAR") === "true" ? false : true,
  });

  const openInstruction = () =>
    setState((prevState) => ({
      ...prevState,
      showInstruction: true,
    }));
  const handleCloseInstruction = () => {
    localStorage.setItem("instructionViewedAR", true);
    setState((prevState) => ({
      ...prevState,
      showInstruction: false,
    }));
  };

  return (
    <Segment>
      <Header as="h2" icon textAlign="center">
        <Icon name="road" />
        Automation roadmap
        <p>
          <Label>From zero to automation hero</Label>
        </p>
      </Header>
      <Header as="h4" textAlign="center">
        <Button circular size="small" basic onClick={openInstruction}>
          How to use
        </Button>
        <Transition
          visible={state.showInstruction}
          animation="scale"
          duration={500}
        >
          <Modal
            dimmer="blurring"
            open={state.showInstruction}
            onClose={handleCloseInstruction}
          >
            <Modal.Header>How to use this roadmap?</Modal.Header>
            <Modal.Content>
              <p>
                Welcome to automation roadmap where you can plan your
                development in software test automation related sills. You'll
                find here useful links and paths which will help you to discover
                which skill to learn next.
              </p>
              <p>
                Skills are sorted into three levels:{" "}
                <Label color="teal">beginner</Label>,{" "}
                <Label color="blue">intermediate</Label> and{" "}
                <Label color="purple">expert</Label> (currently under
                "construction"). Each skill can be expanded by clicking on it:
                popup with short introduction and links will appear.
              </p>
              <p>
                Items without colors filled are{" "}
                <Label basic color="teal">
                  optional
                </Label>{" "}
                skills, which are considered nice to have but not mandatory to
                learn.
              </p>
              <p>
                Some of the links are available for{" "}
                <Label color="green">Netguru only</Label> - it means they are
                not available to public audience - apply to us if you want to
                see them! 😅{" "}
              </p>
              <p>
                Made in <a href="https://netguru.com">Netguru</a> with love ♥️
              </p>
            </Modal.Content>
            <Modal.Actions>
              <Button positive onClick={handleCloseInstruction}>
                Close
              </Button>
            </Modal.Actions>
          </Modal>
        </Transition>
      </Header>
      <Divider horizontal>Beginner</Divider>
      <SingleTree data={roadmapData.beginner} color="teal" />
      <Divider horizontal>Intermediate</Divider>
      <SingleTree data={roadmapData.intermediate} color="blue" />
      <Divider horizontal>Expert</Divider>
      <Segment size="large" color="purple" inverted>
        Not available yet, work in progress 👷
      </Segment>
    </Segment>
  );
};

export default App;
