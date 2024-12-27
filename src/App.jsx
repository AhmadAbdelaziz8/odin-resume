import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* sidebar */}
      <div className="sideBar">
        <ul>
          <li>icon</li>
          <li>content</li>
          <li>customize</li>
          <li>links</li>
        </ul>
      </div>

      <div className="editorContainer">
        <div className="editor-header">
          <h2>Editor</h2>
          <div className="editor-content"></div>
        </div>
      </div>

      <div className="cvPreview"></div>
    </>
  );
}

export default App;
