import { CardList } from "../../Components/CardList/CardList";
import css from "./Tweets.module.css";
import { Link } from "react-router-dom";
import usersData from "../../data/usersData.json";

export const Tweets = () => {
  const users = usersData.users;
 
  return (
    <div className={css.tweetsContainer}>
      <div className={css.buttonBox}>
        <Link to="Home" className={css.button}>
          ← Go back
        </Link>
      </div>
      <CardList users={users} />
    </div>
  );
};
