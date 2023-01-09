import { ButtonToolbar, Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faDownload } from "@fortawesome/free-solid-svg-icons";

const buttons = [
  {
    icon: faPlay,
    title: "Run Query",
  },
  {
    icon: faDownload,
    title: "Export data as CSV",
  },
  {
    icon: faDownload,
    title: "Export data as JSON",
  },
];
function QueryButtons() {
  const buttonsUI = buttons.map(({ icon, title }, index) => (
    <Button
      size={"sm"}
      variant={"outline-primary"}
      style={{
        borderLeft: "none",
        borderTop: "none",
        borderBottom: "none",
        borderRadius: 0,
        padding: "0.5rem",
      }}
      className={"mr-2 query-button"}
      key={index}
    >
      <FontAwesomeIcon icon={icon} /> {title}
    </Button>
  ));
  return (
    <ButtonToolbar className="mb-3 mt-3">
      <ButtonGroup className="me-2">{buttonsUI}</ButtonGroup>
    </ButtonToolbar>
  );
}

export default QueryButtons;
