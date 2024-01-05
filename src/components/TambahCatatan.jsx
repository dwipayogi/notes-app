import React from "react";
import Button from "./Button";

export default class TambahCatatan extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, 50),
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }
  render() {
    return (
      <main className="w-3/5 m-auto mt-12">
        <h1 className="text-4xl font-bold">Tambah Catatan</h1>
        <form action="" onSubmit={this.onSubmitEventHandler}>
          <input
            type="text"
            placeholder="masukkan judul"
            className="border-2 w-full p-2 my-2 text-lg rounded-lg border-black"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            type="text"
            placeholder="masukkan deskripsi"
            className="border-2 w-full p-2 my-2 text-lg rounded-lg border-black"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            rows={5}
          />
          <div className="text-center">
            <Button color="red" link="/">
              Batal
            </Button>
            <Button color="blue" type="submit" link="/">Tambahkan</Button>
          </div>
        </form>
      </main>
    );
  }
}
