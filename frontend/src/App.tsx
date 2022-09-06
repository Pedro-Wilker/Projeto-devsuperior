import Header from "./componets/Header";
import NotificationButton from "./componets/NotificationButton";
import Salescard from "./componets/SalesCard";
function App() {
  return (
    <>
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
