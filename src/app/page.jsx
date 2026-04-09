import Image from "next/image";
import Navbar from "./components/Navbar";
import Meta from './components/Meta';
import Brands from "./components/Brands";
import Advertising from "./components/Advertising";
import Seriously from "./components/Seriously";
import Powerful from "./components/Powerful";
import Agencies from "./components/Agencies";
import Smart from "./components/Smart";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <Meta />
        <Brands />
        <Advertising />
        <Seriously />
        <Powerful />
        <Agencies />
        <Smart />
        <Footer />
      </main>
    </div>
  );
}
