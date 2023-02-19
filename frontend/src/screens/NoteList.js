import { useState, useEffect } from "react";
import ListItem from "../components/NoteListItem";
import AddButton from "../components/AddButton";

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("/api/v1/notes/")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setNotes(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>

      <div className="notes-list">
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
      <AddButton />
    </div>
  );
};

export default NoteList;
