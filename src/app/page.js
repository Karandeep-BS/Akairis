'use client'
// import Hero from "@/components/Hero/MainHero";
import Header from "@/components/Hero/Header";
import Logoipsum from "@/components/Logoipsum/Logoipsum";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Overview from "@/components/Overview/Overview";
import Review from "@/components/Review/Reviews";
import Footer from "@/components/Footer/Footer";
import useSmallScreen from "@/components/Function/useSmallScreen";
import MFooter from "@/components/Footer/Mobile/MFooter";
import MLogoipsum from "@/components/Logoipsum/MobileBox/MLogoipsum";
export default function Home() {
  const isSmallScreen = useSmallScreen();
  return (
    <div className="overflow-hidden bg-white">
    {/* <Hero /> */}
    <Header />
    {isSmallScreen ? <MLogoipsum /> : <Logoipsum />}
    <About />
    <Services />
    <Overview />
    <Review />
     {isSmallScreen ? <MFooter /> : <Footer />}
    </div>
  );
}
           
