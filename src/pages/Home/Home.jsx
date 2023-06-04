import { Link, Outlet } from "react-router-dom";
import css from "./Home.module.css";

// const styles = {
//   container: {
//     padding: 20,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#e5c159",
//   },

//   title: {
//     fontSize: 32,
//     fontWeight: 900,
//     letterSpacing: 2,
//     marginBottom: 20,
//     color: "var(--accent-bg-color)",
//   },
// };

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
