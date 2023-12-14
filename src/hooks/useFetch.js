import { useEffect, useState } from "react";

const useFetch = (fetchFn, initialData) => {
  const [isFetching, setIsFetching] = useState(initialData);
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    error,
    fetchedData,
    setFetchedData,
  };
};

export default useFetch;
