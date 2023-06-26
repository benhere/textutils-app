import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleULoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };

  const handleCopyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra spaces", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#042743" }}
    >
      <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#13466e" : "white",
            color: props.mode === "dark" ? "white" : "#042743",
          }}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-2"
        onClick={handleUpClick}
      >
        Convert to uppercase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-2"
        onClick={handleULoClick}
      >
        Convert to lowercase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-2"
        onClick={handleClearClick}
      >
        Clear Text
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-2"
        onClick={handleCopyText}
      >
        Copy Text
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-2"
        onClick={handleExtraSpaces}
      >
        Remove Extra Spaces
      </button>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((str) => {
              return str.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((str) => {
              return str.length !== 0;
            }).length}{" "}
          minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!!!"}</p>
      </div>
    </div>
  );
}
