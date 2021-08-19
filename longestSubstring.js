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

 //this function returns the longes substring and char from single string.
const Substring=(s)=>
{
 
    var ans = 1, temp = 1, val,tempVal;

 for (var i = 1; i < s.length; i++) {
        // If character is same as
        // previous increment temp value
        if (s[i] == s[i - 1]) {
            ++temp;
            val=s[i];
        }
        else {
            ans = Math.max(ans, temp);
            tempVal=val;
            val=s[i];
            temp = 1;
        }
    }
    ans = Math.max(ans, temp);
    tempVal= val;
    // Return the required answer
    return {ans,tempVal};
}



//this function will get the array of words and shuffle them to get every single possible words
// and run every words. 
//let perms;

function longestSubstring (arr, shuffleWords = [], len = arr.length) {
  if (len === 1) shuffleWords.push(arr.slice(0))

  for (let i = 0; i < len; i++) {
   longestSubstring(arr, shuffleWords, len - 1)

    len % 2 // parity dependent adjacent elements swap
      ? [arr[0], arr[len - 1]] = [arr[len - 1], arr[0]]
      : [arr[i], arr[len - 1]] = [arr[len - 1], arr[i]]
    }
    
    // At this perms 
     let result=[];
    for(let i=0; i<shuffleWords.length;i++){
        let words="";
        for(let j = 0; j< shuffleWordss[i].length; j++){
            words+=shuffleWords[i][j]
        }
        result.push(words);
    }

 let letter=[], length=[];
  
  const almost = result.map(item=>{
      
      const returnVal =  Substring(item);
      console.log(`this is ${item} and result is: ${returnVal.ans},${ returnVal.tempVal}`);
     
      length.push(returnVal.ans);
      letter.push(returnVal.tempVal);
   }) 
   // I pass the max value but failed to get char.
   // i tired to get char form index of max value. 
 return{ letters: letter[ length.indexOf(Math.max(...length))],
            length:Math.max(...length)
}
 
}

    
// this has O(n) complexity 