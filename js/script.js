//Global Variables containing targeted elements and values
var button = document.querySelector('button')
var result = document.querySelector('#result')
var val1 = document.querySelector('#firstBand')
var val2 = document.querySelector('#secondBand')
var val3 = document.querySelector('#thirdBand')
var val4 = document.querySelector('#fourthBand')

var img1 = document.querySelector('#first')
var img2 = document.querySelector('#second')
var img3 = document.querySelector('#third')
var img4 = document.querySelector('#fourth')

//This object houses the key-value pairs that the calculator will read from.
var solutionObj = {
  firstBand:{
    None:'stop',
    Brown:1,
    Red:2,
    Orange:3,
    Yellow:4,
    Green:5,
    Blue:6,
    Violet:7,
    Gray:8,
    White:9
  },
  secondBand:{
    None:null,
    Black:0,
    Brown:1,
    Red:2,
    Orange:3,
    Yellow:4,
    Green:5,
    Blue:6,
    Violet:7,
    Gray:8,
    White:9
  },
  thirdBand:{
    None:null,
    Black:1,
    Brown:10,
    Red:100,
    Orange:1000,
    Yellow:10000,
    Green:100000,
    Blue:1000000,
    Violet:10000000,
    Gold:.1,
    Silver:.01
  },
  fourthBand:{
    None:'&#177 20%',
    Brown:'&#177 1%',
    Red:'&#177 2%',
    Gold:'&#177 5%',
    Silver:'&#177 10%'
  } 
}

//Below are all my tools and functions needed to make the the Get Ohm Value button work

String.prototype.splice = function(start, delCount, newSubStr) {
        return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
    };

var convertNumber = function(number){
  var string = '' + number
  if(number>10){
    if(string.length===2){
      return string
    }
    else if (string.length===3){
      return string
    }
    else if (string.length===4){
      return string.substring(0,2).splice(1,0,'.') + 'K'
    }
    else if (string.length===5){
      return string.substring(0,2) + 'K'
    }
    else if (string.length===6){
      return string.substring(0,2) + '0K'
    }
    else if (string.length===7){
      return string.substring(0,2).splice(1,0,'.') + 'M'
    }
    else if (string.length===8){
      return string.substring(0,2) + 'M'
    }
    else if (string.length===9){
             
      return string.substring(0,2) + '0M'
    }
  }
  else{
    string = string.substring(0,4)
    return string
  }
}

var changeTheBand = function (element,color){
  element.style.opacity = 1
  element.style.background = color
}

var makeMath = function (){
  //To represent user's band color choices
  var user1 = val1.value
  var user2 = val2.value
  var user3 = val3.value
  var user4 = val4.value
  //This gets the above color to get the corresponding numerical value
  var firstBandVal = solutionObj.firstBand[user1] 
  var secondBandVal = solutionObj.secondBand[user2]
  var thirdBandVal = solutionObj.thirdBand[user3]
  var fourthBandVal = solutionObj.fourthBand[user4]
  
  //This is to prevent the user from submitting an incomplete equation
  if(user1==='None'||user2==='None'||user3==='None'){
    alert('Please input a color in the first three bands')
  }

  else{
  //The calculations
  
  var step1 = firstBandVal * 10
  var step2 = step1 + secondBandVal
  var step3 = step2 * thirdBandVal
  var s3 = convertNumber(step3)
  var step4 = s3 + '&#8486 ' + fourthBandVal + ' Tolerance'
  //This is to alter the resistor image with div color overlays representing the user's band choices
  changeTheBand(img1,user1)
  changeTheBand(img2,user2)
  changeTheBand(img3,user3)
  changeTheBand(img4,user4)
  
 //This is to write to the solution box 
  result.innerHTML = '<p>' + step4 + '</p>'
  
  } 
}

button.addEventListener('click',makeMath)