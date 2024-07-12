import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const useProductDisplay = (id) => {
  const data = useContext(ShopContext);
  const filteredData = data
    ? data.filter((item) => item.id === parseInt(id, 10))
    : [];
  return filteredData;
};
export default useProductDisplay;
