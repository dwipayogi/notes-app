import React from "react";
import Button from "./Button";

export default class AddNote extends React.Component {
  constructor(props) {
    super(props);

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
    if(!this.state.title || !this.state.body) return alert("Please fill in the title and description");
    this.props.addNote(this.state);
  }
  render() {
    return (
      <main className="max-w-7xl m-auto pt-12">
        <h1 className="text-4xl font-bold">Create New Note</h1>
        <form action="" onSubmit={this.onSubmitEventHandler}>
          <input
            type="text"
            placeholder="enter title here"
            className="w-full p-2 my-2 text-lg rounded-lg focus:outline-blue-500"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            type="text"
            placeholder="enter description here"
            className="w-full p-2 my-2 text-lg rounded-lg focus:outline-blue-500"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            rows={5}
          />
          <div className="flex justify-center gap-4">
            <Button color="red" link="/home">
              Cancel
            </Button>
            <Button color="blue" type="submit" link="/home">
              Save
            </Button>
          </div>
        </form>
      </main>
    );
  }
}
