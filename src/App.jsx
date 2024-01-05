import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getData } from "./utils/data";

import Beranda from "./components/Beranda";
import TambahCatatan from "./components/TambahCatatan";

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
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Beranda notes={this.state.notes} onDelete={this.onDeleteHandler} />} />
            <Route path="/tambah" exact element={<TambahCatatan addNote={this.onAddNoteHandler} />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
