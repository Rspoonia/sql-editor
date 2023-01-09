import { CloseButton, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { FILE_NAMES } from "../../data/constant";
import { closeTab, openNewTab } from "../../utils";

function SideBar({ activeKey, tabs, setTabs, setActiveKey, mobile }) {
  const clickHandler = (e, fileName) => {
    e.preventDefault();
    openNewTab(
      {
        title: fileName,
        entries: [],
      },
      tabs,
      setTabs,
      setActiveKey,
      `SELECT * FROM \`${fileName}\``
    );
  };
  const menuLinks = FILE_NAMES.map((fileName) => (
    <Row className="nav-item" key={fileName}>
      <Col>
        <a
          href={`/${fileName}`}
          className={fileName === activeKey ? "nav-link active" : "nav-link"}
          onClick={(e) => clickHandler(e, fileName)}
        >
          <FontAwesomeIcon
            icon={fileName === activeKey ? faChevronDown : faChevronRight}
          />{" "}
          <FontAwesomeIcon icon={faTable} /> {fileName}
        </a>
      </Col>
    </Row>
  ));
  const openTabs = tabs.map((tab) => (
    <Row className="nav-item align-items-center" key={tab.eventKey}>
      <Col xs={10}>
        <a
          href={`/${tab.title}`}
          className={
            tab.eventKey === activeKey ? "nav-link active" : "nav-link"
          }
          onClick={(e) => {
            e.preventDefault();
            setActiveKey(tab.eventKey);
          }}
        >
          <FontAwesomeIcon
            icon={tab.eventKey === activeKey ? faChevronDown : faChevronRight}
          />{" "}
          <FontAwesomeIcon icon={faTable} /> {tab.title}{" "}
        </a>
      </Col>
      <Col xs={2}>
        <CloseButton
          style={{
            fontSize: "0.5rem",
          }}
          onClick={(e) => {
            e.stopPropagation();
            const [newTabs, newActiveKey] = closeTab(tab.eventKey, tabs);
            setTabs(newTabs);
            setActiveKey(newActiveKey);
          }}
        />
      </Col>
    </Row>
  ));

  return (
    <Container
      fluid
      style={{
        height: `${mobile ? "100%" : "calc(100vh - 8rem)"}`,
      }}
      className="sidebar"
      id={`sidebar${mobile ? "mobile" : ""}`}
    >
      <p className="text-secondary heading mt-3">All Tables</p>
      <Container fluid className="tableLinks">
        {menuLinks}
      </Container>
      <hr />
      <p className="text-secondary heading mt-3">Open Tabs</p>
      <Container fluid className="tabLinks">
        {openTabs}
      </Container>
    </Container>
  );
}

export default SideBar;
