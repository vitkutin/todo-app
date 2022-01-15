import { Outlet, Link } from "react-router-dom";

//Sisältää pelkästään navipalkin
export default function App() {
  return (
    <div>
      <nav>
        <Link to="/todo">TODO</Link>
        <Link to="/info">INFO</Link>
      </nav>
      <Outlet />
    </div>
  );
}
