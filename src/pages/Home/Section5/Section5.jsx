import { useDispatch, useSelector } from "react-redux";
import { getListUser } from "../../../store/Services/User/GetListUserService";
import { useEffect } from "react";
import CardOurTeam from "./CardOurTeam";

const Section5 = () => {
  const dispatch = useDispatch();
  const data_loading = useSelector((state) => state.home.isLoading);
  const data = useSelector((state) => state.home.users);

  const fethData = () => {
    dispatch(getListUser());
  };

  const chunkedData = [];
  const chunkSize = 4;
  for (let i = 0; i < data.length; i += chunkSize) {
    chunkedData.push(data.slice(i, i + chunkSize));
  }
  useEffect(() => {
    fethData();
  }, []);

  return (
    <>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            marginBottom: "3rem",
          }}
        >
          <h3>Our Teams</h3>
        </div>
        {data_loading ? (
          <div>loading....</div>
        ) : (
          <div>
            {chunkedData?.map((row, rowIndex) => (
              <div key={rowIndex} style={{ display: "flex" }}>
                {row.map((val, index) => (
                  <CardOurTeam
                    key={index}
                    firstName={val?.firstName}
                    lastName={val?.lastName}
                    title={val?.company?.title}
                    icon={val?.image}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Section5;
