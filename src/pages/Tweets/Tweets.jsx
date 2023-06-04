// import { useState } from "react";
import { CardList } from "../../Components/CardList/CardList";
import css from "./Tweets.module.css";
import { Link } from "react-router-dom";
import usersData from "../../data/usersData.json";

export const Tweets = () => {
  const users = usersData.users;
  // const [value, setValue] = useState("all");

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  return (
    <div className={css.tweetsContainer}>
      <div className={css.buttonBox}>
        <Link to="Home" className={css.button}>
          ← Go back
        </Link>
      </div>
      {/* <div className={css.filterBox}>
        <label className={css.label}>
          Filter
          <select value={value} onChange={handleChange} className={css.list}>
            <option value="all">All</option>
            <option value="follow">Follow</option>
            <option value="followings">Followings</option>
          </select>
        </label>
      </div> */}
      <CardList users={users} />
    </div>
  );
};
