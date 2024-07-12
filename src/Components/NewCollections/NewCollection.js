import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Utils/constant";
import ItemCard from "../Items/ItemCard";
import "./NewCollection.css";

const NewCollection = ({ id }) => {
  const [newcollection, setNewcollection] = useState([]);

  useEffect(() => {
    const fetchNewCollection = async () => {
      try {
        const resp = await fetch(BASE_URL + "/products");
        const json = await resp.json();
        setNewcollection(json);
      } catch (error) {
        console.error("Error fetching popular items:", error);
      }
    };
    fetchNewCollection();
  }, []);

  const filteredcollection = newcollection.filter(
    (ele) => ele.rating.rate > 3.5
  );
    console.log('filteredcollection: ', filteredcollection);


  return (
    <div id={id}>
      <h2>NEW COLLECTIONS</h2>
      <div className="new-items">
        {filteredcollection.map((ele) => {
          console.log('ele: ', ele.id);
          return (
              <ItemCard
                key={ele.id}
                title={ele.title}
                rate={ele.rating.rate}
                price={ele.price}
                img={ele.image}
                id={ele.id}
              />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
