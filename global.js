
var counter = 0;
var score = 0;
var question1 = {question: "What was the main character's name in the movie 'Clueless' ?", choices: "a) Paula b) Barbie c)  Cher ", answer: "c"};
//
var question2 = {question: "How many theatrical versions of Batman Series have there been?", choices: "a) 5 b) 12 c) 10 ", answer: "b"};
//
var question3 = {question: "Clint Eastwood gave us the immortal line, 'Go ahead... make my day', in what film?", choices: "a) Dirty Harry b) Magnum Force c) Tightrope", answer: "a" };
//
var question4 = {question: "What was the name of the island on which King Kong was discovered in the original 1933 movie?", choices: "a) Ape Island b) Monster Island c) Skull Island", answer: "c" };

var questions = [question1, question2, question3, question4];

function next_question() {
  var questionHandler = document.getElementById("question"); // assign questionHandler to "question" div
  questionHandler.innerHTML = questions[counter].question; //set div content to question index according counter, calling question
  var choicesHandler = document.getElementById("choices"); // assign choiceHandler to choices div
  choicesHandler.innerHTML = questions[counter].choices; // set div content to question index according counter, calling answer
}

function given_answer() {
  return document.getElementById("answer").value //grabbing the div answer value that the user inputted.
};

function is_correct_answer(answer_text) { // argument comes from process_answer_submission function // Returns true or false.
  if (answer_text.toLowerCase() === questions[counter].answer) { 
      return true; 
  } else {
      return false;
  }   
};

function update_question_result(correct) { //argument comes from process_answer_submission function. Either true or false.
  if (correct === true) {
    score++; // if correct is true, increment score by 1.
    document.getElementById("question_result").innerHTML = "Yes!!" // feed to div "question_result" content: "yes"!
  } else {
    document.getElementById("question_result").innerHTML = "Nope!" // feed to div "question_result" content: "nope"!
  }
};

//set's user's answer to user_answer var. Sends info to both is correct function then on to update_question_result function
function process_answer_submission() {
  var user_answer = given_answer(); 
  update_question_result(is_correct_answer(user_answer));
  
};
//when user clicks submit, start the process_answer_submission function.
document.getElementById("submitter").onclick = process_answer_submission; 
// reset answer div value.
function clear_answer () {
  document.getElementById("answer").value = "";
}
// reset question result
function clear_question_result () {
  document.getElementById("question_result").innerHTML = "";
}

function is_game_over () {
  if (counter < questions.length) {
      return false; 
  } else {
      return true;
  }
};

function next_button() {
  clear_answer();
  clear_question_result();
  counter++;
  if (is_game_over() === true) {
      final_total();
  } else {
      next_question();
  }
}

document.getElementById("next").onclick = next_button;

function final_total() {
  var score_announce = "You answered " + score + " out of 4 questions correct";
  document.getElementById("total_result").innerHTML = score_announce;// feeding total_result div with score announcement
}



















//
//
//   // Your user loads the page in question.
//   // The user is presented (using either console.log() or alert() with a multiple choice question
//   // The user is prompted (using prompt()) for an answer
//   // Upon answer, the user sees an alert() or console.log()
//   // telling them whether they answered correctly or incorrectly.
//   // Then they see the next question (in a new alert() or console.log()),
//   // and steps 2-4 repeat until there are no more questions.
//   // Once the user has answered all questions, they see an alert()
//   // telling them how many they answered correctly (out of however
//     // many questions there were), and something that looks like a
//     // percentage. E.g. You answered 7 of 10 questions correctly, good for 70.0%