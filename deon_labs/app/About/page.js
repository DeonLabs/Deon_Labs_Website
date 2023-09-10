import Achievments from "../_components/Achievments"
import Footer from "../_components/Footer"
import Hero from "../_components/Hero"
import Built from "../_components/About/Built"
import Partner from "../_components/Partner"
import Team from "../_components/Team"
import Services from "../_components/Services"

// All the components are available in the _components folder
//Made with love by Deon Labs

function page() {
  return (
    <main>
      {/* Navbar */}
     
      {/* Hero Section */}
      <Hero/>
      {/* Built By A Team From */}
      <Built/>

      {/* Our Vision */}
      <Services heading='Our Vision' desc="We contributed to building a revolutionary ecosystem for some of the leading"/>
      {/* Footer Of the page  */}
      <Footer/>
    </main>
    
  )
}

export default page