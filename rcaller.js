function rcaller(task, fileID) {
  console.log("Processing task", task, ",file", fileID);

  var R = require("r-script");

  var out = R(__dirname + "/uploads/task" + task + ".R")
  .data(fileID)
  .callSync();
  
  console.log(out);

}

module.exports = rcaller;

