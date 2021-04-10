class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    background("yellow");
    //write code here to hide question elements
    text("Result Of Quiz",120,70);
    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here
    
    Contestant.getContestantInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants != null)
    {
      textSize(20);
      text("COntestants Who Answer Correctly Are Highlighted In Green Colour",120,220);
      var display_position = 260;
      for(var plr in allContestants)
      {
        var correctAns = "2";
        if(correctAns === allContestants[plr].answer)
        fill("green");
        else("red");
        display_position += 30;
        textSize(35);
        text(allContestants[plr].name+ ":" + allContestants[plr].answer,120,display_position);
      }
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
