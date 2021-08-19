/** 
 * Function (longestSubstring) takes array of words
 * return  { letter:"",
 *            length:   }
 * 
 * Constrains:
 * Each word consists of lowercase letters (a-z).
 * no null / udefined character.
 */

/** Step1: concat the possible words form array.
 * Step2: loop over each concat word
 * Step3: store the result from each loop.
 * Step4: get the max count. 
 *  
 **
 * 
 */




 //this function returns the longest substring char and its length from single string.

function Substring(s)
{
 
     let sub = s.match(/(.)\1*/g).sort((a,b)=>b.length-a.length)[0]
     return [sub[0],sub.length];
}


//get perms
let shuffelWords;

function longestSubstring (arr, shuffelWords = [], len = arr.length) {
  if (len === 1) shuffelWords.push(arr.slice(0))

  for (let i = 0; i < len; i++) {
   longestSubstring(arr, shuffelWords, len - 1)

    len % 2 // parity dependent adjacent elements swap
      ? [arr[0], arr[len - 1]] = [arr[len - 1], arr[0]]
      : [arr[i], arr[len - 1]] = [arr[len - 1], arr[i]]
    }
    //loop over shuffelwords, concat them and store them in result. 
     let result=[];
    for(let i=0; i<shuffelWords.length;i++){
        let words="";
        for(let j = 0; j< shuffelWords[i].length; j++){
            words+=shuffelWords[i][j]
        }
        result.push(words);
    }

    // For each concat word pass it to find substring func.
 let letter=[], length=[];
  
  const almost = result.map(item=>{
      
      const returnVal =  Substring(item);
     
     // store the result in two seperate array [letter],[length].
      length.push(returnVal[1]);
      letter.push(returnVal[0]);
  })
    
    //Finally, get max value form length and char form same index;
   
 return{ letters: letter[ length.indexOf(Math.max(...length))],
            length:Math.max(...length)
}
 
}

    
// this has O(n) complexity 