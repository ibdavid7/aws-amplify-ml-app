import React, { useState } from 'react'

import Amplify, { Predictions } from 'aws-amplify';
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions'
// Amplify.addPluggable(new AmazonAIPredictionsProvider())

function TextIdentification() {
    const [response, setResponse] = useState("You can add a photo by uploading direcly from the app ")

    function identifyFromFile(event) {
        setResponse('identifiying text...');
        const { target: { files } } = event;
        const [file,] = files || [];

        if (!file) {
            return;
        }
        Predictions.identify({
            text: {
                source: {
                    file,
                },
                format: "PLAIN", // Available options "PLAIN", "FORM", "TABLE", "ALL"
            }
        }).then(({text: { fullText }}) => {
            setResponse(fullText)
        })
            .catch(err => setResponse(JSON.stringify(err, null, 2)))
    }

    return (
        <div className="Text">
            <div style={{padding: 50}}>
                <h3>Text identification</h3>
                <input type="file" onChange={identifyFromFile}></input>
                <p style={{
                    backgroundColor: 'black', color: 'white', padding: 20
                }}>{response}</p>
            </div>
        </div>
    );
}

export default TextIdentification