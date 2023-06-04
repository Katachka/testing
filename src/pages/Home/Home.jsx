import { Link, Outlet } from "react-router-dom";
import css from "./Home.module.css";

export const Home = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Тестове завдання</h1>
      <p>
        Мета: створити картки твітів та додати інтерактивності при клікові на
        кнопку.
      </p>
      <div className={css.buttonBox}>
        <Link to="tweets" className={css.button}>
          Go Tweets →
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
