import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || "Unable to load the request");
  }

  return resData;
}
const useHttp = (url, config) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const sendRequest = useCallback(async function sendRequest(body) {
    setIsLoading(true);
    try {
      const resData = await sendHttpRequest(url, {...config, body: body});
      setData(resData);
    } catch (error) {
      setError(error.message || "Something went wrong");
    }
    setIsLoading(false);
  },[url, config])

  function clearData() {
    setData();
  }

  useEffect(() => {
    if(!config || config.method === 'GET') {
        sendRequest();
    }
  },[sendRequest])
  return {
    data,
    isLoading,
    error,
    sendRequest, 
    clearData,
  }
};

export default useHttp;
