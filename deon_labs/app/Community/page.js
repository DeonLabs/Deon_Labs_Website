import Image from "next/image"
import Achievments from "../_components/Achievments"

import Footer from "../_components/Footer"
import Hero from "../_components/Hero"

import Partner from "../_components/Partner"
import Team from "../_components/Team"

// All the components are available in the _components folder
//Made with love by Deon Labs

function page() {
  return (
    <main>
      {/* Navbar */}
     
      {/* Hero Section */}
      <Hero/>

      <a href="https://www.youtube.com/">
      <img src="./Frame 39.png" className="px-[10%] mt-[20%] lg:mx-[6%]" />
      </a>
     
      {/* Footer Of the page  */}
      <Footer/>
    </main>
    
  )
}

export default page