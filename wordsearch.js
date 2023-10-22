const { version } = require("chai");

const wordSearch = (letters, word) => { 
    //Creates a new array of each row of letters joined into a string
    const horizontalJoin = letters.map(ls => ls.join(''))
    //Iterates through the new array, with the words adjoined horizontally, to check if the word is a part of a string. 
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    //Vertical words
    //let verticalJoin = ;
    //Use a for loop on letters array (letters[0].length); COLUMNS
        //Use a for loop on rows of the letters array (letters.length); Rows
            //Push vertical letters[c][l] into some array.
    for (let l = 0; l < letters[0].length; l++) {
        //temporary Array holder
      let tempVert = [];
      for (let c = 0; c < letters.length; c++) {
        //use the temporary array to push the vertical letters
        tempVert.push(letters[c][l]);
      }
      //Create variable verticalString to join ('') from tempArr
      let verticalString = tempVert.join('');
      if (verticalString.includes(word)) {
        return true;
      }
    }
    //Use the for of loop on verticalJoin to check if the word is included
    return false; 
}

module.exports = wordSearch;