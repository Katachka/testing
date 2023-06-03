import usersData from "../../data/usersData.json";
import { Card } from "../Card/Card";
import css from "./CardList.module.css";

export const CardList = () => {
  // const users = usersData.users;

  return (
    <div className={css.list}>
      {usersData.users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
};
