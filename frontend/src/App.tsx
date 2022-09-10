import Header from "./componets/Header";
import Salescard from "./componets/SalesCard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer/>
      <Header/>
      <main>
        <section id="sales">
          <div className="dsmeta-container">
           <Salescard/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
