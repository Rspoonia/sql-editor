import { useState, Suspense, lazy } from "react";
import Header from "./components/navigation/header";
import { Row, Col, Collapse, Container } from "react-bootstrap";
import "@fontsource/raleway";
import "./App.css";

const SideBar = lazy(() => import("./components/navigation/sideBar"));
const QueryTabs = lazy(() => import("./components/tabs"));

function App() {
  const [activeKey, setActiveKey] = useState("");
  const [tabs, setTabs] = useState([]);
  const [queryCount, setQueryCount] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="App" data-testid="main-wrapper">
      <Suspense fallback={<div>Loading ...</div>}>
        <Header
          activeKey={activeKey}
          setActiveKey={setActiveKey}
          tabs={tabs}
          setTabs={setTabs}
          queryCount={queryCount}
          setQueryCount={setQueryCount}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <Collapse in={sidebarOpen}>
          <div>
            <SideBar
              activeKey={activeKey}
              setActiveKey={setActiveKey}
              tabs={tabs}
              setTabs={setTabs}
              mobile
            />
          </div>
        </Collapse>
        <Container fluid>
          <Row>
            <Col lg={2} md={3} className={"d-xl-block navbar-block-view"}>
              <SideBar
                activeKey={activeKey}
                setActiveKey={setActiveKey}
                tabs={tabs}
                setTabs={setTabs}
              />
            </Col>

            <Col
              lg={10}
              md={9}
              style={{
                padding: "1rem",
              }}
            >
              <QueryTabs
                tabs={tabs}
                setTabs={setTabs}
                activeKey={activeKey}
                setActiveKey={setActiveKey}
              />
            </Col>
          </Row>
        </Container>
      </Suspense>
    </main>
  );
}

export default App;
