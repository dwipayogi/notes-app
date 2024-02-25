import { Link } from "react-router-dom";
import Note from "./Note";

export default function Notes({ notes, onDelete }) {
    return (
      <main className="max-w-7xl m-auto pt-12">
        <h1 className="text-4xl font-bold">My Notes</h1>
        <input
          type="text"
          placeholder="search anything..."
          className="w-full p-2 my-2 text-lg rounded-lg focus:outline-blue-500"
        />
        <div className="flex justify-end">
          <Link to="/add" className="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-700 float-right">
            Create New
          </Link>
        </div>
        <>
          {notes.map((note) => (
            <Note
              key={note.id}
              title={note.title}
              body={note.body}
              createdAt={note.createdAt}
              onDelete={onDelete}
              id={note.id}
            />
          ))}
        </>
      </main>
    );
  }