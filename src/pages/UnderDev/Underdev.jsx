import style from "./Underdev.module.css";
import { Link } from "react-router-dom";
import gifImage from "../../assets/underdevelop.gif";
const UnderDev = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.row}>
          {/* col 1 */}
          <div className={style.column}>
            <img src={gifImage} alt="Under Development" />
          </div>
          {/* col 2 */}
          <div className={style.column}>
            <h1>Oops, your force is not strong enough</h1>
            <h3 style={{ color: "#8b919e" }}>
              This page your requested is Under Development. May the force be
              with you!
            </h3>
            <Link to="/">Go back to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnderDev;
