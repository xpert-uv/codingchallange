/** 
 * Function (longestSubstring) takes array of words
 * return  { letter:"",
 *            length:   }
 * 
 * Constrains:
 * Each word consists of lowercase letters (a-z).
 * no null / udefined character.
 */

/** Step1: concat the words form array.
 * Step2: count the frequency of char from words
 * step3: return the object with higest frequency.
 * 
 */
const storeCount = {};
const longestSubstring = arryWords => {
   // setting up object with chars as key and frequency as value. 
    arryWords.map(words => {
       
        [...words].map(char => {
            console.log(char);
            if (storeCount[char]) {
               storeCount[char]+=  1
            } else {
                storeCount[char] = 1;
            }                 
            })
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