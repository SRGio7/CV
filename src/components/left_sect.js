import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import database from "../firebase";

const InfoDiri = () => {
  const [data, setData] = useState(null);
  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dbRef = ref(database, "data-path");
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const value = snapshot.val();
      if (value) {
        setData(value);
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const dbRef = ref(database, "images");
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const imageArray = Object.values(data);
        setImages(imageArray);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="left-section">
      <div className="profile-pic">
        {/* <img src={process.env.PUBLIC_URL + "pfp.jpg"} alt="Profile" /> */}

        {isLoading ? (
          <h1>
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </h1>
        ) : (
          images.map((image, index) => (
            <img key={index} src={image.base64} alt={`Images ${index + 1}`} />
          ))
        )}
      </div>

      {data && (
        <>
          <h1 className="name">
            <span>{data.nama}</span>
            <span className="highlight"> {data.marga}</span>
          </h1>
        </>
      )}

      {/* <h1 className="name">
        Sergio <span className="highlight">Regar</span>
      </h1> */}
      <p className="position">Cloud Engineer</p>
      <div className="information">
        <div style={{ display: "flex" }}>
          <i class="bi bi-info-circle" style={{ marginRight: "3px", fontSize:"15px"}}></i>
          <h3>INFORMATION</h3>
        </div>
        <p>
          <i class="bi bi-telephone" style={{ marginRight: "3px" }}></i>
          <strong>Phone:</strong> +62-8953-9733-6809
        </p>
        <p>
          <i class="bi bi-envelope" style={{ marginRight: "3px" }}></i>
          <strong>Email:</strong> sergioregar07@gmail.com
        </p>
        <p>
          <i class="bi bi-geo-alt" style={{ marginRight: "3px" }}></i>
          <strong>Address:</strong> Jln pingkan matindas, Manado, 95127
        </p>
        <p>
          <i class="bi bi-github" style={{ marginRight: "3px" }}></i>
          <strong>Github:</strong>
          <a
            href="https://github.com/SRGio7"
            target="blank"
            style={{ textDecoration: "none", color: "black" }}
          >
            SRGio7
          </a>
        </p>
      </div>
    </div>
  );
};

export default InfoDiri;
