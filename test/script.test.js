var assert = require('chai').assert;
var expect = require('chai').expect;

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


function calculateOhmValue(bandAColor, bandBColor, bandCColor, bandDColor) {
	var outputObj = {}

  	var ohms = ((bandColorMap.firstBand[bandAColor] * 10) + bandColorMap.secondBand[bandBColor]) * bandColorMap.thirdBand[bandCColor]
  	outputObj.ohmValue = ohms

  	var tolerance = bandColorMap.fourthBand[bandDColor]
  	outputObj.tolerance = tolerance

  	return outputObj

  	
}




describe('Ohm resitance calculator', function() {
	it('should return an object with 2 key-value pairs that represent the ohm and tolerance levels of a resistor',function(){
		var ohms = calculateOhmValue('Red', 'Yellow', 'Blue','Brown');
		expect(ohms.ohmValue).to.equal(24000000);
		expect(ohms.tolerance).to.equal(1);
	});


});