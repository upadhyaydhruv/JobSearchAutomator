var currState = document.getElementsByTagName('h2')[0]

var currStateString = "";
var prevStateString = "";
//Boolean recorded = false;

function stateUpdate(){
  currState = document.getElementsByTagName('h2')[0]
  
  if(currState)
  {
    currStateString = currState.innerHTML;
    
    if(prevStateString != currStateString)
    {
      //console.log(prevStateString);
      prevStateString = currStateString;
      //console.log(currStateString);
      console.log("Prev State String Updated");
      setTimeout(function() {
        getPageHTML()
        console.log("I delayed")
      }, 2000);
      

    }
  }
}

getPageHTML();
function getPageHTML() {
  {
    var wordBank = ["first name", "last name", "full name", "name", "city", "country", 
    "province", "postal", "state", "address", "phone number", "phone eformtension", "university", 
    "degree", "program", "gpa", "grade", "from", "to", "skill", "linkedin", "github"]

    var label = document.getElementsByTagName('label')
    console.log(label.length)

    for(var i=0; i<label.length; i++){
      console.log(label[i].innerHTML)
      var field = label[i].innerHTML.toLowerCase()

      for(var j=0; j<wordBank.length; j++){

        if(field.includes(wordBank[j])){
          var ID = label[i].htmlFor
          var form = document.getElementById(ID)
          form.value = "Aryan"
        }
      }

      
    }
    
    // label[i].innerHTML.includes("Name")
  }
}

document.addEventListener('DOMNodeInserted', stateUpdate);