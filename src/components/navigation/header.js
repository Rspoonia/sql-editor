import { Navbar, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faBars } from "@fortawesome/free-solid-svg-icons";
import { openNewTab } from "../../utils";
import { ReactComponent as AtlanLogo } from "../../logo.svg";

function Header({
  queryCount,
  tabs,
  setTabs,
  setActiveKey,
  setQueryCount,
  sidebarOpen,
  setSidebarOpen,
}) {
  const clickHandler = () => {
    openNewTab(
      {
        title: `Query ${queryCount}`,
        entries: [],
      },
      tabs,
      setTabs,
      setActiveKey
    );
    setQueryCount(queryCount + 1);
  };
  return (
    <Navbar className="shadow p-3">
      <Container fluid>
        <Navbar.Brand href="#home">
          <AtlanLogo width={100} />
        </Navbar.Brand>
        <Navbar.Text>
          <Button
            variant={"outline-primary"}
            onClick={() => clickHandler()}
            style={{
              marginRight: "1rem",
            }}
          >
            <FontAwesomeIcon icon={faPlus} /> New Query
          </Button>
          <Button
            variant={"outline-primary"}
            className="d-lg-none"
            onClick={() => {
              setSidebarOpen(!sidebarOpen);
            }}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Header;
