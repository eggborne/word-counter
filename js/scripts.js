var wordScores = {}
var repeatedWords = []
var uniqueList = []
$(document).ready(function(){
  $("#submit-button").click(function(){
    var rawText = $("#text-input").val()
    console.log("RAW: " + rawText)
    var rawArray = rawText.split(" ")
    console.log("RAW ARRAY: " + rawArray)





    rawArray.forEach(function(word){
      console.log(word)
      wordScores[word] = 0
      rawArray.filter(function(wordToCheck){
        if (word===wordToCheck) {
          wordScores[word]++
          var revisedArray = repeatedWords.splice(repeatedWords.indexOf(word),1)
        }
      })
    })
    uniqueList = Object.keys(wordScores)
    console.log(wordScores)
    console.log(repeatedWords)
    console.log(uniqueList)
  })
})
