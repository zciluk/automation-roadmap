import { Popup, Grid, Segment, Header, Button } from "semantic-ui-react";
import PopupContent from "../PopupContent";

const sliceArray = (inputArray, chunks) => {
  return inputArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunks);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
};
const SingleTree = ({ data, color }) => {
  return (
    <Segment padded tertiary inverted color={color}>
      <Grid columns="4" stackable>
        {sliceArray(data, 4).map((item) => (
          <Grid.Row relaxed>
            {item.map((skill) => (
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
                          wide
                          hoverable
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
        ))}
      </Grid>
    </Segment>
  );
};

export default SingleTree;
