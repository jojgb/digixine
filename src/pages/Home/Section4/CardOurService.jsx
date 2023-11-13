// eslint-disable-next-line react/prop-types
const CardOurServiceSection = ({ alt, icon, label }) => {
  return (
    <div
      style={{
        borderRadius: "37px",
        background: "#fff",
        width: "250px",
        marginBottom: "4rem",
        fontSize: "16px",
        justifyContent: "center",
        textAlign: "center",
        color: "#8b919e",
        fontWeight: "400",
        // boxShadow : '3px 3px',
      }}
    >
      <img src={icon} alt={alt} />
      <p style={{ margin: "1rem 0", padding: "0 1rem" }}>{label}</p>
    </div>
  );
};

export default CardOurServiceSection;
