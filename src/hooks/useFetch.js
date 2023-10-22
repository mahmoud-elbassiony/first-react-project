import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [erorr, setErorr] = useState(null);

  useEffect(() => {
    let getProducts = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(url);
        const data = res.data;
        setData(data);
        setErorr(null);
      } catch (err) {
        setErorr(err.message);
      }
      setIsLoading(false);
    };

    getProducts();
  }, [url]);

  return { data, isLoading, erorr };
}

export default useFetch;
