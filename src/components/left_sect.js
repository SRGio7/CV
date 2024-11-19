import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import database from "../firebase";

const InfoDiri = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dbRef = ref(database, "data-path"); // Ganti "data-path" dengan path di Realtime Database
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const value = snapshot.val();
      setData(value);
    });

    // Cleanup listener saat komponen unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="left-section">
      <div className="profile-pic">
        <img src={process.env.PUBLIC_URL + "pfp.jpg"} alt="Profile" />
      </div>

      {data && (
        <>
          <h1 className="name">
            <span >{data.nama}</span>
            <span className="highlight"> {data.marga}</span>
          </h1>

        </>
      )}

      {/* <h1 className="name">
        Sergio <span className="highlight">Regar</span>
      </h1> */}
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
