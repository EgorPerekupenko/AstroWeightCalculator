  var select = document.getElementById("planetWeight");  // selecting user input of planet 
var planets = [                                          // array of elements given 
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
            for(var i = 0; i < planets.length; i++) {      // "for" loop 
              var opt = planets[i];                        // creating var that gonna hold array elements 
              var el = document.createElement("option");   // creating new option element
              el.value= planets[i].gravity;                // getting value from array elements with index gravity and assigning it to option element
              el.innerHTML = planets[i].planet;            // getting text value from array elements with index planet and assigning it to option element
              select.appendChild(el);                      // adding option element to select box
    

}

 function calculate()                                                 // function calculating total weight on the planet
{ 
      var select =document.getElementById('planetWeight');            //  method returns the element with id "planetWeight" and stores it in select variable 
  
      var options=select.options;                                     //  storin all options in var "options"
  
      var selectedOption=options[select.selectedIndex];               //  getting user selected option from list of options based on selected index 
  
      var planetName=selectedOption.innerHTML;                        // getting text value from array element and storing it to "planetName" variable 
  
      var planetWeight = select.value;                                // gettig numeric value from selected option 
      
      var userWeight=document.getElementById("userWeight").value;     // getting numeric value from user weight input
      
      var totalWeight=userWeight*planetWeight;                        // actual calculation
      
      var roundTotalWeight= Math.round(totalWeight);                  // round a number downward to its nearest integer:

      var output =document.getElementById('output');                  // method returns the element with id "output" and stores it in output variable 
      
      output.innerHTML="If you were on "+planetName +" " + " " +"you would weight"+ " " +roundTotalWeight+ " " + "lbs!";  // displaing output on HTML page
}

    
   function reverseString(str) {                                      // reversing string function 
      return str.split('').reverse().join('');                        // spliting string to array and reversing it 
}
      var astro = reverseString('rotaluclaC thgieW ortsA');           // calling reverseString method 
      document.getElementById("reverse").innerHTML = astro;           // displaying string backwards in <h1> tag with "reverse" id





