import ModeSwitch from "./ModeSwitch";
import Header from "./Header";
function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <ModeSwitch />
      <Header />
    </>
  );
}

export default App;
