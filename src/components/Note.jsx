import Button from "./Button";

export default function Note({title, body, createdAt, onDelete, id }) {
  function convertDate(date){
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      const formattedDate = new Date(date).toLocaleDateString(undefined, options);
      return formattedDate;
    }
    
    return (
      <div className="p-2 my-2 rounded-lg bg-white">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm self-end">{convertDate(createdAt)}</p>
        <p className="text-lg text-justify">
          {body}
        </p>
        <div className="flex gap-2">
          <Button onDelete={onDelete} id={id} color="red">Delete</Button>
        </div>
      </div>
    );
}