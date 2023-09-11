"use client"
import Achievments from "./_components/Achievments";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Partner from "./_components/Partner";
import Services from "./_components/Services";
import Team from "./_components/Team";
import Callout from "./_components/UI/Callout";
import Service from "./_components/UI/Service";
import AnimatedCursor from "react-animated-cursor";


// All the components are available in the _components folder
//Made with love by Deon Labs

function page() {
    return (
        <main>
            <div id="cursor">
                <AnimatedCursor
                    innerSize={8}
                    outerSize={35}
                    innerScale={1}
                    outerScale={2}
                    outerAlpha={0}
                    hasBlendMode={true}
                    innerStyle={{
                        backgroundColor: "#fff",
                    }}
                    outerStyle={{
                        border: "3px solid #fff",
                    }}
                />
            </div>
            {/* Navbar */}
            {/* <Navbar/> */}

            {/* Hero Section */}
            <div className="">
                <Hero />
            
            </div>

            {/* Our Partners  */}
            <Partner />

            {/* Built By A Team From */}
            {/* <Team/> */}

            <Services heading="What We Can Do For You?" desc="We contributed to building a revolutionary ecosystem for some of the leading"/>


            {/* Achievments */}
            <Achievments />

            {/* Footer Of the page  */}
            <Footer />
        </main>
    );
}

export default page;
