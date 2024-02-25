import { Link } from "react-router-dom";
import book from "../assets/book.png";

export default function Home() {
  return (
    <main className="max-w-7xl px-8 md:px-16 lg:px-24 2xl:mx-auto pt-[10vh] h-screen bg-white">
      <h1 className="font-bold text-5xl">Notely</h1>
      <p className="text-xl pt-8 text-justify">
        Notely is a simple, yet powerful note-taking app that helps you capture
        your thoughts and ideas on the go. With Notely, you can create notes of
        any length, format them with different fonts and colors, and add images
        and other attachments. You can also organize your notes into notebooks,
        tag them, and search them easily.
      </p>
      <img src={book} alt="book" className="w-96 h-96 2xl:w-[20vw] 2xl:h-[20vw] pt-8" />
      <Link to={"/home"} className="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-700 float-right">
        Let&apos;s Start
      </Link>
    </main>
  );
}
