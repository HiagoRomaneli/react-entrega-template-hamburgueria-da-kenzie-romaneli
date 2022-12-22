import { ToastContainer } from "react-toastify";
import { RoutesPages } from "./components/RoutesPages";

const App = () => {
  return (
    <div className="App">
      <RoutesPages />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
