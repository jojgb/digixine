import sponsorImage from "../../../assets/sponsor.png";
import style from "./Section2.module.css";
const Section2 = () => {
  return (
    <>
      <div className={style.cont}>
        <img src={sponsorImage} alt="sponsorImage" />
      </div>
    </>
  );
};

export default Section2;
