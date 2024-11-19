const InfoDiri = () => {
  return (
      <div className="left-section">
        <div className="profile-pic">
          <img src={process.env.PUBLIC_URL + "pfp.jpg"} alt="Profile" />
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
  );
};

export default InfoDiri;