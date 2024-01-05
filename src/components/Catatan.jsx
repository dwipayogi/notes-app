import Button from "./Button";

export default function Catatan({title, body, createdAt, onDelete, id }) {
  return (
    <div className="border-2 p-2 my-2 border-black rounded-lg">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-lg text-justify">
        {body}
      </p>
      <div className="flex justify-between">
        <p className="text-sm self-end">{createdAt}</p>
        <Button color="red" onDelete={onDelete} id={id}>Hapus</Button>
      </div>
    </div>
  );
}