// import css
import "../Styles/Home.css";

// import components
import Left from "./Left";
import Mid from "./Mid";
import Right from "./Right";

function Home() {
  return (
    <>
      <div className="Home">
        <Left />
        <Mid />
        <Right />
      </div>
    </>
  );
}

export default Home;
