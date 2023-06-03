import React, { useEffect, useState } from "react";
import css from "./Card.module.css";
import logo from "../../img/logo.png";

export const Card = ({ user }) => {
  const { id } = user;
  console.log(user);
  const [isFollowing, setIsFollowing] = useState(
    JSON.parse(localStorage.getItem(`${id}`)) ?? false
  );

  useEffect(() => {
    localStorage.setItem(`${id}`, JSON.stringify(isFollowing));
  }, [isFollowing, id]);

  const onFollowClick = () => {
    setIsFollowing(true);
  };

  const onFollowingClick = () => {
    setIsFollowing(false);
    console.log(onFollowingClick);
  };
  return (
    <div className={css.card}>
      <img alt="logo" className={css.logo} src={logo}></img>
      <div className={css.container}>
        <div className={css.picture}></div>
        <div className={css.avatar}>
          <div className={css.avatarImg}></div>
        </div>
      </div>
      <p className={css.tweets}> 777 tweets</p>
      <p className={css.followers}>100,500 Followers</p>
      <div className={css.buttonBox}>
        {isFollowing ? (
          <button
            type="button"
            className={css.button}
            onClick={onFollowingClick}
          >
            Following
          </button>
        ) : (
          <button type="button" className={css.button} onClick={onFollowClick}>
            Follow
          </button>
        )}
      </div>
    </div>
  );
};
