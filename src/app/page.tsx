import Image from "next/image";
import Header from "./components/Header";
import FoodC from "./components/FoodC";
import About from "./components/About";


export default function Home() {
  return (
    <main >  
      <Header />
      <FoodC  />
      <About  />
      
        </main>
  );
}
