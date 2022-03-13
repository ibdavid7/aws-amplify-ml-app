import React, { useState } from 'react'

import Amplify, { Predictions } from 'aws-amplify';
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions'
// Amplify.addPluggable(new AmazonAIPredictionsProvider())

function TextTranslation() {
    const [response, setResponse] = useState("Input some text and click enter to test")
    const [textToTranslate, setTextToTranslate] = useState("write to translate");
    const [targetLang, setTargetLang] = useState('es')
    function translate() {
        Predictions.convert({
            translateText: {
                source: {
                    text: textToTranslate,
                    // supported languages https://docs.aws.amazon.com/translate/latest/dg/how-it-works.html#how-it-works-language-codes
                },
                targetLanguage: targetLang
            }
        }).then(result => setResponse(JSON.stringify(result, null, 2)))
            .catch(err => setResponse(JSON.stringify(err, null, 2)))
    }

    function setText(event) {
        setTextToTranslate(event.target.value);
    }

    function onChange(event) {
        setTargetLang(event.target.value)
    }

    return (
        <div className="Text">
            <div style={{ padding: 50 }}>
                <h3>Text Translation</h3>
                <input value={textToTranslate} onChange={setText}></input>
                <button onClick={translate}>Translate</button>
                <p>{response}</p>
                Target Language
                <select value={targetLang} onChange={onChange}>
                    <option value='es'>Spanish</option>
                    <option value='ar'>Arabic</option>
                    <option value='zh'>Chinese</option>
                    <option value='nl'>Dutch</option>
                    <option value='el'>Greek</option>
                    <option value='he'>Hebrew</option>
                    <option value='pl'>Polish</option>
                </select>
            </div>
        </div>
    );
}

export default TextTranslation