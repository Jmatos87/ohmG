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

var plusMinusSymbol = '&#177'
var ohmSymbol = '&#8486'

//This object houses the key-value pairs that the calculator will read from.

var bandColorMap = {
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
    None:20,
    Brown:1,
    Red:2,
    Gold:5,
    Silver:10
  } 
}

//Below are all my tools and functions needed to make the the Get Ohm Value button work

String.prototype.splice = function(start, delCount, newSubStr) {
        return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
    };

var formatNumberToString = function(number){
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

var bandImageChange = function (element,color){
  element.style.opacity = 1
  element.style.background = color
}

var getOhmAndTolerance = function (){
  //To represent user's band color choices
  var firstBandColor = val1.value
  var secondBandColor = val2.value
  var thirdBandColor = val3.value
  var fourthBandColor = val4.value

  
  //This is to prevent the user from submitting an incomplete equation
  if(firstBandColor==='None'||secondBandColor==='None'||thirdBandColor==='None'){
    alert('Please input a color in the first three bands')
  }

  else {
  
    // The calculations 
    var ohms = calculateOhmResistance(firstBandColor, secondBandColor, thirdBandColor, fourthBandColor);
    var formattedOhms = formatNumberToString(ohms.ohmValue);
    var formattedResistance = formattedOhms + ohmSymbol + ' ' + plusMinusSymbol + ' ' + ohms.tolerance + '% Tolerance';

    // This is to alter the resistor image with div color overlays representing the user's band choices
    bandImageChange(img1,firstBandColor)
    bandImageChange(img2,secondBandColor)
    bandImageChange(img3,thirdBandColor)
    bandImageChange(img4,fourthBandColor)
  
 //This is to write to the solution box 
    result.innerHTML = '<p>' + formattedResistance + '</p>'
  
  } 
}

function calculateOhmResistance(bandAColor, bandBColor, bandCColor, bandDColor) {
  var outputObj = {}

  var ohms = ((bandColorMap.firstBand[bandAColor] * 10) + bandColorMap.secondBand[bandBColor]) * bandColorMap.thirdBand[bandCColor]
  outputObj.ohmValue = ohms

  var tolerance = bandColorMap.fourthBand[bandDColor]
  outputObj.tolerance = tolerance

  return outputObj
}





button.addEventListener('click',getOhmAndTolerance)