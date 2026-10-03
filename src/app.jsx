// App.css файлыг React компонентод холбоно
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ҮНДСЭН APP КОМПОНЕНТ
function App() {
  return (
    <div className="website">
      {/* HEADER - ВЭБИЙН ДЭЭД ХЭСЭГ */}
      <Header />

      {/* NAVIGATION - ҮНДСЭН ЦЭС */}
      <Navbar />

      {/* FOOTER - ВЭБИЙН ХӨЛ ХЭСЭГ */}
      <Footer />
    </div>
  );
}

export default App;
