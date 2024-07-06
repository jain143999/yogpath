import Layout from "./Layout";
import Dashboard from "./components/dashboard";
import "./App.css";

function App() {
  return (
    <div className="App main-content">
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;
