import React, { createContext, useEffect, useRef, useState } from "react";
import { EBAY_SEARCH_PATH } from "../viewConstants";
import ApiRequest from "../common/apiRequest";

interface $Props {
  children: any;
}

const context = createContext(null);

const useEffectOnce = (cb) => {
  const didRun = useRef(false);

  useEffect(() => {
    if (!didRun.current) {
      cb();
      didRun.current = true;
    }
  }, []);
};

const EbayProvider = ({ children }: $Props) => {
  const [results, setResults] = useState({});

  async function searchData(keywords) {
    const path = `${EBAY_SEARCH_PATH}?keywords=${keywords}`;
    const response = await ApiRequest(path, {
      verb: "get",
    });

    if (response.data) {
      setResults(response.data);
    }
  }
  return (
    <context.Provider value={{ results, searchData }}>
      {children}
    </context.Provider>
  );
};

EbayProvider.context = context;

export default EbayProvider;
