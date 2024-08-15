import { useState, useEffect } from "react";
import axios from "axios";
import { config } from "../config";
import { IDrinkReponseList } from "../interfaces/ResponseInterfaces";
import mockData from "../../src/mockdata.json"

interface IUseFetchData {
  data: IDrinkReponseList | undefined;
  isLoading: boolean;
  error: unknown;
  refresh: () => void;
}

export default function useFetchData(url: string): IUseFetchData {
  const [data, setData] = useState<IDrinkReponseList | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState();

  async function fetchData() {
    setIsLoading(true);
    axios
      .get(`${config.baseApiURL}${url}`)
      .then((res) => setData(res.data))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    // setData(mockData);
    fetchData();
  }, [url]);

  function refresh(): void {
    // setData(mockData);
    fetchData();
  }

  return { data, isLoading, error, refresh };
}
