import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/cobalt.css";

/**
 * The component to display the code editor for the SQL query
 */
const QuerySpace = ({ defaultQuery }) => {
  return (
    <CodeMirror
      value={defaultQuery}
      options={{
        mode: "sql",
        theme: "cobalt",
        lineNumbers: true,
      }}
    />
  );
};

export default QuerySpace;
