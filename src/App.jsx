import HomePage from "./pages/HomePage";
import bgImage from "./assets/body-bg.png";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className={`bg-body font-[Roboto] text-light bg-no-repeat bg-cover h-screen grid place-items-center`}
    >
      <HomePage />
    </div>
  );
}

export default App;
