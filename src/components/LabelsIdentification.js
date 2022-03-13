import logo from '../logo.svg';
import '../App.css';
import React, {useState} from 'react'
import Amplify, {Predictions} from 'aws-amplify';
import {AmazonAIPredictionsProvider} from '@aws-amplify/predictions'

// Amplify.addPluggable(new AmazonAIPredictionsProvider())


function LabelsIdentification() {
    const [response, setResponse] = useState([])

    function identifyFromFile(event) {
        const {target: {files}} = event;
        // console.log(event);
        const [file,] = files || [];

        if (!file) {
            return;
        }
        Predictions.identify({
            labels: {
                source: {
                    file,
                },
                type: "LABELS" // "LABELS" will detect objects , "UNSAFE" will detect if content is not safe, "ALL" will
                // do both
                // default on aws-exports.js
            }
        }).then(result => {
            console.log('result: ', result)
            const labels = result.labels.reduce((map, label) =>  {
                map[label.name] = label.metadata.confidence;
                return map;
            }, {})
            console.log('labels: ', labels)
            setResponse(labels)
        })
            .catch(err => setResponse(JSON.stringify(err, null, 2)))
    }

    return (
        <div className="Text">
            <div style={{padding: 50}}>
                <h3>Labels identification</h3>
                <input type="file" onChange={identifyFromFile}></input>
                {
                    Object.entries(response).map( ([key, val]) => (<h3 key={key}>label: {key}; conf: {val.toFixed(2)}</h3>))
                }
            </div>
        </div>
    );
}

export default LabelsIdentification