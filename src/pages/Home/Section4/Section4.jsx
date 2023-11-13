import { Container } from "react-bootstrap";
import feed from "../../../assets/feed.png";
import instagram from "../../../assets/instagram.png";
import optimization from "../../../assets/optimization.png";
import pen from "../../../assets/pen.png";
import list from "../../../assets/search.png";
import CardOurServiceSection from "./CardOurService";
import style from "./Section4.module.css";

const Section4 = () => {
  const services = [
    {
      icon: list,
      label: "Search Engine Optimization",
      alt: "seo",
    },
    {
      icon: instagram,
      label: "Social Media Optimization",
      alt: "social-media",
    },
    {
      icon: pen,
      label: "UX Writer",
      alt: "writer",
    },
    {
      icon: feed,
      label: "Content Management",
      alt: "social-media",
    },
    {
      icon: optimization,
      label: "Ads Optimization",
      alt: "ads",
    },
  ];
  const topServices = services.slice(0, 3); // Ambil 3 data pertama
  const bottomServices = services.slice(3); // Ambil 2 data terakhir
  return (
    <>
      <Container className="s-our-services justify-content-center align-items-center">
        <div className={style.ourService}>
          <h2>
            <b>Our Services</b>
          </h2>
          <div className={style.textCustom}>
            <p color="secondary" className="text-center">
              Increase your linkability, make tagging and bookmarking easy.
              Reward inbound links
            </p>
          </div>
        </div>

        <div className={style.servicesContainer}>
          <div className={style.topServices}>
            {topServices.map((val, key) => (
              <CardOurServiceSection
                key={key}
                icon={val.icon}
                label={val.label}
                alt={val.alt}
              />
            ))}
          </div>
          <div className={style.bottomServices}>
            {bottomServices.map((val, key) => (
              <CardOurServiceSection
                key={key}
                icon={val.icon}
                label={val.label}
                alt={val.alt}
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};
export default Section4;
