import Week from "../Week/Week";
import "./Home.scss";

const default_className = "home";


export default function Home() {
  return (
    <div className={default_className}>
      <Week />
      <Week />
    </div>
  );
}
