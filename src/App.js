import "./App.scss";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="container wrapper">
        <Form />
      </main>
    </div>
  );
}

export default App;
