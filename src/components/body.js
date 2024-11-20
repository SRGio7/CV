// import {firebase} from "../firebase"
import InfoDiri from "./left_sect";
import BgKanan from "./right_sect";
import Header from "./Header";

const BodyCV = () => {
  return (
    <div className="container">
      <Header/>
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
