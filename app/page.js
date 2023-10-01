import About from "./components/About";
import Address from "./components/Address";
import Analytics from "./components/Analytics";
import CoffeeMenu from "./components/CoffeeMenu";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Address />
      <About />
      <Service />
      <Menu />
      <Analytics />
      <CoffeeMenu />
      <Footer />
    </main>
  );
}
