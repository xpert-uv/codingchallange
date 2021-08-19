
function Substring(s)
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



//get perms
let perms;

function longestSubstring (arr, perms = [], len = arr.length) {
  if (len === 1) perms.push(arr.slice(0))

  for (let i = 0; i < len; i++) {
   longestSubstring(arr, perms, len - 1)

    len % 2 // parity dependent adjacent elements swap
      ? [arr[0], arr[len - 1]] = [arr[len - 1], arr[0]]
      : [arr[i], arr[len - 1]] = [arr[len - 1], arr[i]]
  }
     let result=[];
    for(let i=0; i<perms.length;i++){
        let words="";
        for(let j = 0; j< perms[i].length; j++){
            words+=perms[i][j]
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
   
 return{ letters: letter[ length.indexOf(Math.max(...length))],
            length:Math.max(...length)
}
 
}


