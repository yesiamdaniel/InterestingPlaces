import React from "react";
import "./PlaceList.css";

import PlaceItem from "./PlaceItem";
import Card from "../../shared/components/UIElements/Card";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places Found. Try creating one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {props.items.map((place) => {
        return <PlaceItem key={place.id} {...place} />;
      })}
    </ul>
  );
};
export default PlaceList;
