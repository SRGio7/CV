import BodyCV from "./components/body";


function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const dbRef = ref(database, "data-path");
  //   const unsubscribe = onValue(dbRef, (snapshot) => {
  //     const value = snapshot.val();
  //     setData(value);
  //   });

  //   return () => unsubscribe();
  // }, []);

  return (
    <div>
      <BodyCV />
    </div>
  );
}

export default App;
