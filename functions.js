/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 function search (animals, name){ //takes array and search name
    for (var i = 0; i < animals.length; i++){ // loop through animals
        var lkupAnimal = animals[i]; //create variable to represent search 
    if(lkupAnimal.name === name){   //compare search
        return lkupAnimal;          //return animal
        }
    };        return null;             //return null if no animal
 }

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace (animals, name, replacement){ //takes array and search name
    for (var i = 0; i < animals.length; i++){ // loop through animals
        var lkupAnimal = animals[i]; //create variable to represent search 
    if(lkupAnimal.name === name){   //compare search
        animals[lkupAnimal] = replacement; //overwrite with new animal
         }
     };
 }

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove (animals, name){ //takes array and search name
    for (var i = 0; i < animals.length; i++){ // loop through animals
        var lkupAnimal = animals[i]; //create variable to represent search 
    if(lkupAnimal.name === name){    //compare search
        animals.splice(lkupAnimal);   //remove animal
        }
    };
 } //somehow was able to write this one first try no help



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}