import { Accordion, Segment, Label, Header, Button } from "semantic-ui-react";
const createPanel = (name, description, url, label, color) => [
  {
    key: name,
    title: {
      content: <Label color={color} content={name} />,
    },
    content: {
      content: (
        <Segment compact black textAlign="left">
          <p>{description}</p>
          {url && (
            <Button as="a" basic size="mini" href={url} target="_blank">
              {label}
            </Button>
          )}
        </Segment>
      ),
    },
  },
];
const SingleTree = ({ name, data, color }) => {
  return (
    <Segment tertiary inverted color={color}>
      <Segment.Group horizontal>
        {data.map((skill) => (
          <Segment>
            <Header>{Object.keys(skill)}</Header>

            {Object.values(skill)[0].map((subSkill) => (
              <Accordion
                defaultActiveIndex={1}
                panels={createPanel(
                  subSkill.name,
                  subSkill.description,
                  subSkill.url,
                  subSkill.urlLabel,
                  color
                )}
              />
            ))}
          </Segment>
        ))}
      </Segment.Group>
    </Segment>
  );
};

export default SingleTree;
