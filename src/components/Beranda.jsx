import Catatan from "./Catatan";
import Button from "./Button";

export default function Beranda({ notes, onDelete }) {
    return (
      <main className="w-3/5 m-auto mt-12">
        <h1 className="text-4xl font-bold">Catatanku</h1>
        <input
          type="text"
          placeholder="cari catatan"
          className="border-2 w-full p-2 my-2 text-lg rounded-lg border-black"
        />
        <div className="flex justify-end">
          <Button color="blue" link="/tambah">
            Tambah
          </Button>
        </div>
        <>
          {notes.map((note) => (
            <Catatan
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