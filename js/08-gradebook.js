/*eslint-env browser*/

var students = ["Ursula", "Paul", "Henry", "Tabitha", "Lucy"]

var grade = prompt("Enter grade for Ursula");
grade = parseFloat(grade);

var grade = prompt("Enter grade for Paul");
grade = parseFloat(grade);

var grade = prompt("Enter grade for Henry");
grade = parseFloat(grade);

var grade = prompt("Enter grade for Tabitha");
grade = parseFloat(grade);

var grade = prompt("Enter grade for Lucy");
grade = parseFloat(grade);

var scores = [ [80, 70, 70, 100],
               [85, 80, 90, 90],
               [75, 70, 80, 75],
               [100, 90, 95, 85] ]

function average(arr){
  var sum = 0;

  for (var i = 0; i < arr.length; i++) 
  {
    sum += Number(arr[i]);
  }
  var avg = sum/arr.length;
  return avg;
}

var gradebook = {
  Ursula: {
    testScores: scores[0]
  },
  Paul: {
    testScores: scores[1]
  },
  Henry: {
    testScores: scores[2]
  },
  Tabitha: {
    testScores: scores[3]
  },
  Lucy: {
    testScores: score[4]
  }
  
  addScore: function(name, score)
  {
    for (var i = 0; i < scores.length; i++) 
    {
      if (name === students[i])
      {
        return scores[i].push(score);
      }
    }
    return console.log("Please input a valid student's name.");
  },

  getAverage: function(name) 
  {
    for (var i = 0; i < scores.length; i++) 
    {
      if (name === students[i])
      {
        return average(scores[i]);
      }
    }
    return console.log("Please input a valid student's name.");
  }
};

// Driver Code:

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (average instanceof Function),
  "The value of average should be a Function.\n",
  "1. "
)

assert(
  average([1, 2, 3]) === 2,
  "average should return the average of the elements in the array argument.\n",
  "2. "
)

assert(
  (gradebook instanceof Object),
  "The value of gradebook should be an Object.\n",
  "3. "
)

assert(
  (gradebook["Ursula"] instanceof Object),
  "gradebook's Ursula property should be an object.",
  "4. "
)

assert(
  (gradebook.Paul.testScores === scores[2]),
  "Paul's testScores should equal the third element in scores.",
  "5. "
)

assert(
  (gradebook.addScore instanceof Function),
  "The value of gradebook's addScore property should be a Function.",
  "6. "
)

gradebook.addScore("Henry", 80)

assert(
  (gradebook.Henry.testScores.length === 5
   && gradebook.Henry.testScores[4] === 80),
  "Henry's testScores should have a new score of 80 added to the end.",
  "7. "
)

assert(
  (gradebook.getAverage instanceof Function),
  "The value of gradebook's getAverage property should be a Function.",
  "8. "
)

assert(
  (gradebook.getAverage("Tabitha") === 80),
  "gradebook's getAverage should return 80 if passed 'Tabitha'.",
  "9. "
)