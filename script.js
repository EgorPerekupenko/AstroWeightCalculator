var select = document.getElementById("planetWeight");
var planets = [
  {planet: 'Sun', gravity: 27.9},
  {planet: 'Mercury', gravity: 0.377},
  {planet: 'Venus', gravity: 0.9032},
  {planet: 'Earth', gravity: 1},
  {planet: 'Moon', gravity: 0.1655},
  {planet: 'Mars', gravity: 0.3895},
  {planet: 'Jupiter', gravity: 2.640},
  {planet: 'Saturn', gravity: 1.139},
  {planet: 'Uranus', gravity: 0.917},
  {planet: 'Neptune', gravity: 1.148},
  {planet: 'Pluto', gravity: 0.06}
];
            for(var i = 0; i < planets.length; i++) {
              var opt = planets[i];
              var el = document.createElement("option");   
              el.value= planets[i].gravity;
              el.innerHTML = planets[i].planet;
              select.appendChild(el);
    

}

 function calculate()
{	
	    var select =document.getElementById('planetWeight');
  
      var options=select.options;
  
      var selectedOption=options[select.selectedIndex];
  
      var planetName=selectedOption.innerHTML;
  
      var planetWeight = select.value;
      
      var userWeight=document.getElementById("userWeight").value;
	    
      var totalWeight=userWeight*planetWeight;
	    
      var roundTotalWeight= Math.round(totalWeight);

      var output =document.getElementById('output');
	    
      output.innerHTML="If you were on "+planetName +" " + " " +"you would weight"+ " " +roundTotalWeight+ " " + "lbs!";
}

    
   function reverseString(str) {
      return str.split('').reverse().join('');
}
      var astro = reverseString('Astro Weight Calculator');
      document.getElementById("reverse").innerHTML = astro; 



    // var str = "Astro Weight Calculator";
    // var res = str.split(" ");
    // document.getElementById("reverse").innerHTML = res;
 


