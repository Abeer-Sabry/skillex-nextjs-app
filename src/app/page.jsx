import Image from "next/image";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "../styles/globals.css";
// components
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import Categories from "@/components/Categories/Categories";
import Needs from "@/components/Needs/Needs";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Categories />
      <Needs />
    </main>
  );
}
