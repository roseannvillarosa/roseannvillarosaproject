import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";


function MainLayouts() {
  return (
    <div className="h-screen">
       <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>

    </div>
  )
}

export default MainLayouts