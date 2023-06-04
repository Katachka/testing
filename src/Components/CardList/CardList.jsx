import React, { useState } from "react";
import usersData from "../../data/usersData.json";
import { Card } from "../Card/Card";
import css from "./CardList.module.css";
import { Loader } from "../Loader/Loader";

export const CardList = () => {
  const cardsLimit = 4;
  const [next, setNext] = useState(cardsLimit);
  // const [sortedUsers, setSortedUsers] = useState([]);
  const onMoreCards = () => {
    setNext(next + cardsLimit);
  };
  // useEffect(() => {
  //   const filteredUsers = users.filter((user) => {
  //     switch (filter) {
  //       case "follow":
  //         return !JSON.parse(localStorage.getItem(`${user.id}-isFollowing`));
  //       case "followings":
  //         return JSON.parse(localStorage.getItem(`${user.id}-isFollowing`));
  //       case "all":
  //         return true;
  //       default:
  //         return null;
  //     }
  //   });
  //   setSortedUsers(filteredUsers);
  // }, [filter, users]);
  return (
    <>
      <div className={css.list}>
        {usersData.users.slice(0, next).map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
      <div className={css.buttonBox}>
        {next < usersData.users.length && (
          <button onClick={onMoreCards} className={css.button}>
            Load more
            <Loader />
          </button>
        )}
      </div>
    </>
  );
};
