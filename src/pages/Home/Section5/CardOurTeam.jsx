// eslint-disable-next-line react/prop-types
const CardOurTeam = ({ alt, icon, title, firstName, lastName }) => {
  const fullName = `${firstName + " " + lastName}`;
  return (
    <>
      <div
        style={{
          borderRadius: "20px",
          background: "#fff",
          width: "250px",
          marginBottom: "4rem",
          fontSize: "16px",
          justifyContent: "center",
          textAlign: "center",
          color: "#8b919e",
          fontWeight: "400",
          boxShadow: "0px 3px",
          marginLeft: "4px",
          marginRight: "4px",
        }}
      >
        <img src={icon} alt={alt} height={"40px"} />
        <p>{fullName}</p>
        <p>{title}</p>
      </div>
    </>
  );
};

export default CardOurTeam;
