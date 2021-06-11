import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../providers/User";

const Achievements = () => {
  const { authenticated } = useContext(UserContext);

  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <div>Achievements</div>
    </>
  );
};

export default Achievements;
