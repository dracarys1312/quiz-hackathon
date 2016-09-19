$.get("http://localhost:3000/api/contest").done(function(data){
  console.log(data);
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);
  $("#content").html(template(data.tests[0]));
}).fail(function(error){
  console.log(error);
})

Handlebars.registerHelper('renderAnswers', function(question){
  if (question.type == "Single choice"){
    var result = '';
    for (var i = 0; i < question.answers.length; i++) {
      var answer = question.answers[i];
      result += "<label for='"+question.questionId+"_"+ i +"'><input type='radio' id='"+question.questionId+"_"+ i +"' name='"+ question.questionId + "'> " + answer.text + "</label>";
    }
    return new Handlebars.SafeString(result);
  }
  else if (question.type == "Multiple choice"){
    var result = '';
    for (var i = 0; i < question.answers.length; i++) {
      var answer = question.answers[i];
      result += "<label for='"+question.questionId+"_"+ i +"'><input type='checkbox' id='"+question.questionId+"_"+ i +"' name='"+ question.questionId + "'>" + answer.text + "</label>";
    }
    return new Handlebars.SafeString(result);
  }
  else if (question.type == "Fill in"){
    console.log(question);
    var result = '';
    for (var i = 0; i < question.answers.length; i++) {
      var answer = question.answers[i];
      result += "<input type='text' name='"+ question.questionId +"'>";
    }
    return new Handlebars.SafeString(result);
  }
})
