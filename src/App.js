import { useState } from 'react'; // <-- Import useState here
import "./App.css";
import CCQuestion1 from "./q1/ClassComps/CCQuestion1";
import CCQuestion2 from "./q2/ClassComps/CCQuestion2";
import CCQuestion3 from "./q3/ClassComps/CCQuestion3";

function App() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const renderContent = () => {
    switch (selectedQuestion) {
      case "q1":
        return <CCQuestion1 />;
      case "q2":
        return <CCQuestion2 />;
      case "q3":
        return <CCQuestion3 />;
      default:
        return <h3>Please select a question from the menu above.</h3>;
    }
  };

  return (
    <div className="App">
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Menu</h1>
        <nav style={{ marginBottom: "20px" }}>
          <button
            onClick={() => setSelectedQuestion("q1")}
            className="menu-button"
          >
            Question 1
          </button>
          <button
            onClick={() => setSelectedQuestion("q2")}
            className="menu-button"
          >
            Question 2
          </button>
          <button
            onClick={() => setSelectedQuestion("q3")}
            className="menu-button"
          >
            Question 3
          </button>
        </nav>
        <div style={{ border: "1px solid #ccc", padding: "20px" }}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
