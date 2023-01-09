import QueryButtons from "../query/queryButtons";
import QuerySpace from "../query/querySpace";
import { Row, Tabs, Tab } from "react-bootstrap";
import ResultsTable from "../table/resultsTable";
import useFile from "../../hooks/useFile";
import ColumnsTable from "../table/columnsTable";

const TabPane = ({ tab }) => {
  const { result, isLoaded, error, timeOfRequest } = useFile(tab.title);
  return (
    <>
      <QueryButtons />
      <Row
        style={{
          width: "100%",
          height: "20vh",
        }}
      >
        <QuerySpace defaultQuery={tab.defaultQuery} />
      </Row>
      <hr />
      <Tabs defaultActiveKey="results" className="mb-3">
        <Tab eventKey="results" title="Results">
          <ResultsTable
            result={result}
            isLoaded={isLoaded}
            error={error}
            tab={tab}
            timeOfRequest={timeOfRequest}
          />
        </Tab>
        <Tab eventKey="columns" title="Columns">
          <ColumnsTable
            result={result}
            isLoaded={isLoaded}
            error={error}
            tab={tab}
          />
        </Tab>
      </Tabs>
    </>
  );
};

export default TabPane;
