import React from 'react';
import 'jsoneditor-react/es/editor.min.css';
import './App.css';
import JsonEditorPanel from "./json-editor-panel";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <JsonEditorPanel />
            </div>
        );
    }
}

export default App;
