import Image from "next/image"
import style from "./page.module.css"

export default async function Home() {

  const response = await fetch("https://fakestoreapi.com/products/")
  const data = await response.json();

  return (
    <main> </main>
  );
}