import React from 'react';
import 'jsoneditor-react/es/editor.min.css';
import './App.css';
import { JsonEditor as Editor } from 'jsoneditor-react';

import {sampleTheme} from "./sample-theme";
import {schema1} from "./schema1";
import Ajv from 'ajv';
import ace from 'brace';
import 'brace/mode/json';
import 'brace/theme/clouds';
import './json-editor-panel.css'

class JsonEditorPanel extends React.Component {
    render() {
        const ajv = new Ajv({allErrors: true, verbose: true}); // options can be passed, e.g. {allErrors: true}

        return (
            <div className="App">
                <Editor
                    theme={"brace/theme/clouds"}
                    value={sampleTheme}
                    schema={schema1}
                    onChange={(e) => alert(JSON.stringify(e))}
                    mode={"form"}
                    ajv={ajv}
                    ace={ace}
                    search={true}
                    navigationBar={true}
                    statusBar={true}
                    allowedModes={['code', 'form']}
                    history={true}
                />
            </div>
        );
    }
}

export default JsonEditorPanel;
