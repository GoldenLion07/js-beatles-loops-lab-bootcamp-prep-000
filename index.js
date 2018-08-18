'use strict';
//function theBeatlesPlay takes two parameters; instruments and musicians.
//it creates a new array.
//it loops through the array and displays the facts once.
function theBeatlesPlay(musicians, instruments) {
    var allMusicians = [];
    for (var i=0; i < musicians.length; i++) {
        allMusicians.push(musicians[i] + " plays " + instruments[i]);
    }
    return allMusicians;
}

function johnLennonFacts(facts) {
  let array = []
  while (facts.length > 0) {
    array.push(`${facts.shift()}!!!`)
  }
  return array
}

function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);
    
    return love;
}