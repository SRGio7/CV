// import {firebase} from "../firebase"
import InfoDiri from "./left_sect";
import BgKanan from "./right_sect";

const BodyCV = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="year">2024</div>
        <div className="cover-title">CV</div>
      </div>
      <div className="main">
        <InfoDiri />
        <BgKanan />
      </div>
    </div>
  );
};

export default BodyCV;
