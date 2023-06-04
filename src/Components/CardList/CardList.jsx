import React, { useState } from "react";
import usersData from "../../data/usersData.json";
import { Card } from "../Card/Card";
import css from "./CardList.module.css";
import { Loader } from "../Loader/Loader";

export const CardList = () => {
  const cardsLimit = 4;
  const [next, setNext] = useState(cardsLimit);

  const onMoreCards = () => {
    setNext(next + cardsLimit);
  };

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
