import { Button, Icon } from "semantic-ui-react";
import showndown from "showdown";
import Parser from "html-react-parser";

const converter = new showndown.Converter();
const PopupContent = ({ data, color }) => (
  <p>
    {data.map((popupDetails) => (
      <p>
        <p>{Parser(converter.makeHtml(popupDetails.description))}</p>
        <Button animated size="medium" href={popupDetails.url} target="_blank">
          <Button.Content visible>{popupDetails.urlLabel}</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </p>
    ))}
  </p>
);
export default PopupContent;
