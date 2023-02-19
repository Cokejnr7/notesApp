import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NoteDetail = ({ match, history }) => {
  const noteId = match.params.id;
  const [note, setNote] = useState({ body: "" });

  const updateNote = () => {
    fetch(`/api/v1/notes/${noteId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    }).then(() => {
      history.push("/");
    });
  };

  const createNote = () => {
    fetch(`/api/v1/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    }).then(() => {
      history.push("/");
    });
  };

  const deleteNote = () => {
    fetch(`/api/v1/notes/${noteId}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.push("/");
    });
  };

  const handleSubmit = () => {
    if (noteId !== "new" && !note.body) {
      deleteNote();
    } else if (noteId !== "new") {
      updateNote();
    } else if (noteId === "new" && note.body !== "") {
      console.log(note);
      createNote();
    } else {
      history.push("/");
    }
  };

  useEffect(() => {
    if (noteId === "new") return;
    fetch(`/api/v1/notes/${noteId}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((note) => {
        setNote(note);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [noteId]);

  let handleChange = (e) => {
    setNote({ ...note, body: e.target.value });
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>

        {noteId === "new" ? (
          <button onClick={handleSubmit}>DONE</button>
        ) : (
          <button onClick={() => deleteNote()}>DELETE</button>
        )}
      </div>

      <textarea
        onChange={(e) => handleChange(e)}
        defaultValue={note.body}
      ></textarea>
    </div>
  );
};

export default NoteDetail;
