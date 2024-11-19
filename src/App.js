import BodyCV from "./components/body";
import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import database from "./firebase";


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dbRef = ref(database, "data-path");
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const value = snapshot.val();
      setData(value);
    });

    // Cleanup listener saat komponen unmount
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {/* {data ? (
        <p>Nama: { data.nama}</p>
      ) : (
        <p>Loading data...</p>
      )} */}
      <BodyCV />
    </div>
  );
}

export default App;
