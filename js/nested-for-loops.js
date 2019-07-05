/**
 * Returns a string representation of a 2-dimensional data structure 
 * @param {number} depth 
 * @param {number} [width=depth] 
 * @returns {string}
 */
function nestedForLoops (depth, width = depth) {
  let result = "\n";
  let something = '';
  // Write code here
  for (let i=0;i<depth;i++){
      for (let j=0;j<width;j++){
        if (j===width-1){
          something +='{x:' + j + ', y:' + i + '}\n';
        }else{
          something += '{x:' + j + ', y:' + i + '}, ';
        }
      }


  }
  return result += something;


};

// To see your console output outside the tests add function calls here.
console.log(nestedForLoops(4));
