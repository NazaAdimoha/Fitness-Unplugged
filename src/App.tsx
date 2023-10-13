import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import Home from "@/scenes/home";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/ourClasses";
// import OurClasses from "@/scenes/ourClasses";
// import ContactUs from "@/scenes/contactUs";
// import Footer from "@/scenes/footer";

enum SelectedPage {
    Home = "home",
    OurClasses = "ourClasses",
    Benefits = "benefits",
    ContactUs = "contactUs"
}

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    //create a handle Scrool function
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false)
      }

      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }

    }
  }, [])
  return (
    <div className="app bg-gray-20">
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={() => setSelectedPage(SelectedPage.Home)}
      />
      <Home 
        setSelectedPage={() => setSelectedPage(SelectedPage.Home)}
       />
      <Benefits 
        setSelectedPage={() => setSelectedPage(SelectedPage.Benefits)}
      />
      <OurClasses 
        setSelectedPage={() => setSelectedPage(SelectedPage.OurClasses)}
      />
      {/* <ContactUs /> */}
      {/* <Footer /> */}
    </div>
  );
}



export default App;
