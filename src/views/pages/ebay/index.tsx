import React from "react";
import EbayProvider from "../../contexts/EbayProvider";

interface $Props {
  children: any;
}

const Ebay = ({ children }: $Props) => {
  return <EbayProvider>{children}</EbayProvider>;
};

export default Ebay;
