const fs = require('fs');

const tests = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tests-sample.json`)
);

exports.getAllTest = (req, res) => {
  
    res.status(200).json({ 
        "slackUsername": "michstery", "backend": true, "age": 25, "bio": "My name Is Micheal aka Michstery and I Love To Code !!"       
    });
  };

  exports.createTest = async (req, res) => {
  
    const { operation_type, x, y } = req.body;
    let result;
    if (operation_type == "addition") {
      result = x+y
    } else if (operation_type == "subtraction") {
      result = x-y
    } else if (operation_type == "multiplication") {
      result = x*y
    }
    
   res.status(200).json({
    operation_type,
    result,
    slackUsername: "michstery"
   })    
  };