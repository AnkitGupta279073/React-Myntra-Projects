
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../component/FetchItems";
import { useSelector } from "react-redux";
import Loader from "../component/Loader";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <div>
       <Header />
       <FetchItems />
       <div className="min-h-screen">
       {fetchStatus.currentlyFetching ? <Loader /> : <Outlet />}
       </div>
       <Footer />
      </div>
    </>
  )
}

export default App
