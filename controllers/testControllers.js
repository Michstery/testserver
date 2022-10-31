const fs = require('fs');

const result = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tests-sample.json`)
);

exports.getAllTest = (req, res) => {
  
    res.status(200).json({ 
        "slackUsername": "michstery", "backend": true, "age": 25, "bio": "My name Is Micheal aka Michstery and I Love To Code !!"       
    });
  };