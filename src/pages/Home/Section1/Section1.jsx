import { Button } from "react-bootstrap";
import style from "./Section1.module.css";
import socialMedia from "../../../assets/iconConnect.png";
import backgroundImage from "../../../assets/background.png";
import CardHeroSection from "./CardHeroSection";
const Section1 = () => {
  const services = [
    {
      icon: socialMedia,
      label: "Social Media Organize",
      alt: "social-media",
    },
    {
      icon: socialMedia,
      label: "UI & UX Design",
      alt: "ui-ux",
    },
    {
      icon: socialMedia,
      label: "Search Engine Optimization",
      alt: "seo",
    },
    {
      icon: socialMedia,
      label: "Google Ads Optimization",
      alt: "google-ads-optimization",
    },
  ];
  return (
    <>
      <div className={style.container}>
        <div className={style.row}>
          {/* col 1 */}
          <div className={style.column}>
            <h4 className={style.title}>PT.Digital Media Nusantara</h4>
            <h1 className={style.secondtitle}>Digital Marketing Agency</h1>
            <p>
              We examine the top of funnel to figure out how to make people to a
              subscribe newsletter then turn prospects into leads
            </p>
            <Button
              variant="danger"
              style={{
                color: "#fff",
                backgroundColor: "#ee4e39",
              }}
            >
              Contact Us
            </Button>
            <Button
              variant="danger"
              style={{
                color: "#ee4e39",
                backgroundColor: "#fff",
              }}
            >
              Our Pricing
            </Button>
          </div>
          {/* col 2 */}
          <div className={style.column}>
            <div
              style={{
                backgroundImage: "url(" + backgroundImage + ")",
                backgroundSize: "cover",
                height: "400px",
                marginTop : '10px'
              }}
            >
              {services?.map((val, key) => {
                return (
                  <CardHeroSection
                    key={key}
                    icon={val.icon}
                    label={val.label}
                    alt={val.alt}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
