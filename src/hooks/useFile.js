import { useEffect, useMemo, useState } from "react";
import { getFieldDetails, parseCSV } from "../utils";
import { FILE_NAMES } from "../data/constant";

function useFile(fileName) {
  const startTime = useMemo(() => new Date().getTime(), []);
  const [endTime, setEndTime] = useState(new Date().getTime());
  const [result, setResult] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  // The endpoint is used only when the app is in production.
  const fetchUrl = `https://api.github.com/repos/graphql-compose/graphql-compose-examples/contents/examples/northwind/data/csv/${fileName}.csv`;

  useEffect(() => {
    // If the file name can't be found.
    if (FILE_NAMES.indexOf(fileName) === -1) {
      setIsLoaded(true);
    } else {
      fetch(fetchUrl)
        .then((res) => {
          return res.json();
        })
        .then(
          (res) => {
            const rawResults = parseCSV(atob(res.content));
            setResult(
              rawResults.map((rawResult) => {
                Object.keys(rawResult).forEach((key) => {
                  rawResult[key] = getFieldDetails(key).processFn(
                    rawResult[key]
                  );
                });
                return rawResult;
              })
            );
            setIsLoaded(true);
            setEndTime(new Date().getTime());
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
            setEndTime(new Date().getTime());
          }
        );
    }
  }, [fetchUrl, fileName]);

  return {
    error,
    isLoaded,
    result,
    timeOfRequest: endTime - startTime,
  };
}

export default useFile;
