import React, { useState, useEffect } from "react";
// import usersData from "../../data/usersData.json";
import { Card } from "../Card/Card";
import css from "./CardList.module.css";
import { Loader } from "../Loader/Loader";

export const CardList = ({ users, filter }) => {
  const cardsLimit = 3;
  const [next, setNext] = useState(cardsLimit);
  const [sortedUsers, setSortedUsers] = useState([]);
  const onMoreCards = () => {
    setNext(next + cardsLimit);
  };
  useEffect(() => {
    const filteredUsers = users.filter((user) => {
      switch (filter) {
        case "follow":
          return !JSON.parse(localStorage.getItem(`${user.id}`));
        case "followings":
          return JSON.parse(localStorage.getItem(`${user.id}`));
        case "all":
          return true;
        default:
          return null;
      }
    });
    setSortedUsers(filteredUsers);
  }, [filter, users]);
  return (
    <>
      <div className={css.list}>
        {sortedUsers.slice(0, next).map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
      <div className={css.buttonBox}>
        {next < sortedUsers.length && (
          <button onClick={onMoreCards} className={css.button}>
            Load more
            <Loader />
          </button>
        )}
      </div>
    </>
  );
};
