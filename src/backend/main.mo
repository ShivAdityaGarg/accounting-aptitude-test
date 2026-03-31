import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Order "mo:core/Order";
import Int "mo:core/Int";
import Text "mo:core/Text";
import List "mo:core/List";
import Map "mo:core/Map";

actor {
  // Types
  type QuestionDTO = {
    questionText : Text;
    options : [Text];
    correctAnswerIndex : Nat;
  };

  type Attempt = {
    score : Nat;
    timestamp : Time.Time;
    duration : Nat;
  };

  type ExamConfig = {
    timeLimitMinutes : Nat;
    passingScorePercent : Nat;
  };

  // Storage
  let questions = List.empty<QuestionDTO>();
  var examConfig : ExamConfig = {
    timeLimitMinutes = 60;
    passingScorePercent = 70;
  };

  let userAttempts = Map.empty<Principal, List.List<Attempt>>();

  module Attempt {
    public func compare(attempt1 : Attempt, attempt2 : Attempt) : Order.Order {
      Int.compare(attempt2.timestamp, attempt1.timestamp);
    };
  };

  // Add question
  public shared ({ caller }) func addQuestion(question : QuestionDTO) : async () {
    questions.add(question);
  };

  // Get all questions
  public query ({ caller }) func getQuestions() : async [QuestionDTO] {
    questions.toArray();
  };

  // Submit attempt
  public type SubmitAttemptInput = {
    responses : [Nat];
    duration : Nat;
  };

  public type SubmitAttemptResult = {
    score : Nat;
    passed : Bool;
    timestamp : Time.Time;
  };

  public shared ({ caller }) func submitAttempt(input : SubmitAttemptInput) : async SubmitAttemptResult {
    var score = 0;
    let questionArray = questions.toArray();
    for (i in questionArray.keys()) {
      if (i < input.responses.size() and input.responses[i] == questionArray[i].correctAnswerIndex) {
        score += 1;
      };
    };

    let percent = if (questions.size() > 0) {
      score * 100 / questions.size();
    } else { 0 };

    let passed = percent >= examConfig.passingScorePercent;
    let attempt : Attempt = {
      score;
      timestamp = Time.now();
      duration = input.duration;
    };

    let attemptsList = switch (userAttempts.get(caller)) {
      case (null) { List.empty<Attempt>() };
      case (?oldList) { oldList };
    };
    attemptsList.add(attempt);
    userAttempts.add(caller, attemptsList);

    {
      score;
      passed;
      timestamp = attempt.timestamp;
    };
  };

  // Set exam config
  public shared ({ caller }) func setExamConfig(config : ExamConfig) : async () {
    examConfig := config;
  };

  // Get exam config
  public query ({ caller }) func getExamConfig() : async ExamConfig {
    examConfig;
  };

  // Get user attempts
  public query ({ caller }) func getUserAttempts(user : Principal) : async [Attempt] {
    switch (userAttempts.get(user)) {
      case (null) { [] };
      case (?list) { list.toArray().sort() };
    };
  };
};
