import React from "react";
import UsersList from "../components/UsersList";

export const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Dan App",
      image:
        "https://media-exp1.licdn.com/dms/image/C4E03AQFJg7ZP4nl_gw/profile-displayphoto-shrink_400_400/0/1609215994705?e=1616025600&v=beta&t=0yO8BODWk6O8VHWEXIvliTfeYC8kWAZM1AB-bPlUWgQ",
      places: 4,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
