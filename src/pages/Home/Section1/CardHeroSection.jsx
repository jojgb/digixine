// eslint-disable-next-line react/prop-types
const CardHeroSection = ({ icon, label, alt }) => {
  return (
    <div
      style={{
        borderRadius: "37px",
        background: "#fff",
        width : '250px',
        marginBottom : '4rem',
        fontSize : '12px'
      }}
    >
      <img src={icon} alt={alt} className="logo-img-right" />
      {label}
    </div>
  );
};

export default CardHeroSection;
