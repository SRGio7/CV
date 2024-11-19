// import {firebase} from "../firebase"

const BodyCV = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="year">2024</div>
        <div className="cover-title">CV</div>
      </div>
      <div className="main">
        <div className="left-section">
          <div className="profile-pic">
            <img
              src={process.env.PUBLIC_URL + "pfp.jpg"}
              alt="Profile"
            />
          </div>
          <h1 className="name">
            Sergio <span className="highlight">Regar</span>
          </h1>
          <p className="position">Cloud Engineer</p>
          <div className="information">
            <h3>INFORMATION</h3>
            <p>
              <strong>Phone:</strong> +62-8953-9733-6809
            </p>
            <p>
              <strong>Email:</strong> sergioregar07@gmail.com
            </p>
            <p>
              <strong>Address:</strong> Jln pingkan matindas, Manado, 95127
            </p>
            <p>
              <strong>Github:</strong> SRGio7
            </p>
          </div>
        </div>
        <div className="right-section">
          <div className="section">
            <h3>EDUCATION</h3>
            <p>
              <strong>Bachelor of Science in Computer Science</strong>
            </p>
            <p>University of ABC (2016 - 2020)</p>
            <p>
              Relevant coursework: Web Development, UI/UX Design, Algorithms and
              Data Structures
            </p>
          </div>
          <div className="section">
            <h3>SKILLS</h3>
            <ul>
              <li>UI/UX Design Tools: Figma</li>
              <li>Web Development: HTML, CSS, JavaScript</li>
              <li>Python</li>
              <li>Amazon Web Service</li>
              <li>Team Collaboration and Communication</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyCV;
