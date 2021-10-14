import { Popup, Grid, Segment, Header, Button, Icon } from "semantic-ui-react";
import PopupContent from "../PopupContent";

const SingleTree = ({ data, color }) => {
  return (
    <Segment padded tertiary inverted color={color}>
      <Grid columns="equal" stackable>
        <Grid.Row stretched>
          {data.map((skill) => (
            <Grid.Column>
              <Segment padded textAlign="center">
                <Header size="medium" color="black">
                  {Object.keys(skill)}
                </Header>
                <br />
                <Grid relaxed padded>
                  {Object.values(skill)[0].map((subSkill) => (
                    <Grid.Row>
                      <Popup
                        content={
                          <PopupContent data={subSkill.data} color={color} />
                        }
                        on="click"
                        size="small"
                        pinned
                        trigger={
                          <Button
                            as="a"
                            compact
                            fluid
                            size="small"
                            color={color}
                            content={subSkill.name}
                          />
                        }
                      />
                    </Grid.Row>
                  ))}
                </Grid>
              </Segment>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default SingleTree;
