import { useMemo } from "react";

import BaseTable from "./index";

import { getFieldDetails } from "../../utils";

/**
 * The table with the results of the columns of the run query operation. Uses the BaseTable component to display the
 * results in a table.
 */
function ColumnsTable({ result, isLoaded, error }) {
  const data = useMemo(() => {
    if (result.length === 0) {
      return [];
    }
    return Object.keys(result[0]).map((key) => ({
      column: key,
      type: getFieldDetails(key).type,
    }));
  }, [result]);

  const columns = useMemo(
    () => [
      {
        Header: "Column",
        accessor: "column",
        defaultCanSort: true,
      },
      {
        Header: "Type",
        accessor: "type",
        defaultCanSort: true,
      },
    ],
    []
  );

  return (
    <BaseTable
      columns={columns}
      data={data}
      isLoaded={isLoaded}
      error={error}
    />
  );
}

export default ColumnsTable;
