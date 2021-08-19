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

const longestSubstring = arryWords => {
    const storeCount = {};
   // setting up object with chars as key and frequency as value. 
    arryWords.map(words => {
        let  sChar, pChar, sCount=0, pCount=0;
        let eachWord = [...words];
        for (let i = 0; i < eachWord.length - 1; i++){
            if (eachWord[i] === eachWord[i + 1]) {
                sCount ++;
            } else {
                pCount++;
            }
        }

            
            
           
    })
    
    // returns the highest frequency 
    const value = Math.max(...Object.values(storeCount));
   
    // loops over the object finds the key for highest frequency 
    for (const key in storeCount) {
        if (storeCount[key] === value) return {
            "letter": key,
            "length": value
        } 
    }


    }

    
// this has O(n) complexity 