import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getData } from "./utils/data";

import Home from "./components/Home";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toLocaleDateString(),
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  render() {
    return (
      <div className="bg-sky-100 h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" exact element={<Notes notes={this.state.notes} onDelete={this.onDeleteHandler} />} />
            <Route path="/add" exact element={<AddNote addNote={this.onAddNoteHandler} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
