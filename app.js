function createParagraph(){
    var wordOne = document.getElementById('adj1').value;
    var wordTwo = document.getElementById('pluralnoun1').value;
    var wordThree = document.getElementById('color1').value;
    var wordFour = document.getElementById('color2').value;
    var wordFive = document.getElementById('color3').value;
    var wordSix = document.getElementById('color4').value;
    var wordSeven = document.getElementById('pluralnoun2').value;
    var wordEight = document.getElementById('place1').value;
    var wordNine = document.getElementById('verb1').value;
    var wordTen = document.getElementById('pluralnoun3').value;
    var wordEleven = document.getElementById('pluralnoun4').value;
    var wordTwelve = document.getElementById('food1').value;
    var wordThirteen = document.getElementById('adj3').value;
    var wordFourteen = document.getElementById('animals1').value;


    var paragraph = 'Spring is the time when ' + wordOne + ' ' + wordTwo + ' grow in all sorts of colors like ' + wordThree + ', ' + wordFour +  
    ', ' + wordFive + ', and ' + wordSix + '.' + ' There are more ' + wordSeven + ' falling from ' + wordEight + ' in the spring, and that helps flowers ' + wordNine + '.' + ' Flowers can grow on trees, ' + wordTen + ', or ' + wordEleven + '.' + ' Spring flowers help bees make '  + wordTwelve + ' and are a food source for hummingbirds and other ' + wordThirteen + ' ' +  wordFourteen + '.';




document.getElementById('answer').innerHTML = paragraph; 

}
