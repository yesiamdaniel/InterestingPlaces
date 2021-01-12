import React from "react";
import { useParams } from "react-router-dom";

import "./PlaceForm.css";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers!",
    imageUrl:
      "https://newyorkyimby.com/wp-content/uploads/2020/09/DSCN0762-777x1036.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.8787484,
      lng: -74.0768445,
    },
    creator: "u1",
  },
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers!",
    imageUrl:
      "https://newyorkyimby.com/wp-content/uploads/2020/09/DSCN0762-777x1036.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.8787484,
      lng: -74.0768445,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const place = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!place) {
    return (
      <div className="center">
        <h2>No place found :(</h2>
      </div>
    );
  }

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={place.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a description of at least 5 characters."
        onInput={() => {}}
        value={place.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
