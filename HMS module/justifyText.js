function justifyText(words, maxWidth) {
    let answer = [];
    let temp = [];
    let charCount = 0;
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let remChars = maxWidth - charCount - temp.length;
        if (word.length <= remChars) {
            //maxWidth not exceeded
            temp.push(word);
            charCount = charCount + word.length;
        } else {
            //maxWidth exceeded
            answer.push(padWhiteSpaces(temp, charCount, maxWidth).join(''));
            temp = [];
            temp.push(word);
            charCount = word.length;
        }
    }
    //spaces between words in the last line
    for (let i = 0; i < temp.length - 1; i++) {
        temp[i] = temp[i] + '_';
    }
    //spaces at the right of the last line
    let numberOfWhiteSpaces = maxWidth - (temp.length - 1) - charCount;
    while (numberOfWhiteSpaces > 0) {
        temp[temp.length - 1] = temp[temp.length - 1] + '_';
        numberOfWhiteSpaces--;
    }
    answer.push(temp.join(''));
    return answer;
}
/**
 * temp = [shall_, be_ _ _ _ _ _ _ _]
 *      i       i<temp.length - 1      
 *      0       0<1   T
 *      1       1<1   F
 *
 * numberOfWhiteSpaces = 16 - 1 - 7 = 8
 *  numberOfWhiteSpaces>0
 *      8>0     T
 *      7>0     T
 *      6>0     T
 *      5>0     T
 *      4>0     T
 *      3>0     T
 *      2>0     T
 *      1>0     T
 *      0>0     F
 */
function padWhiteSpaces(temp, charCount, maxWidth) {
    let numberOfWhiteSpaces = maxWidth - charCount;
    let i = 0;
    while (numberOfWhiteSpaces > 0) {
        temp[i] = temp[i] + '_';
        numberOfWhiteSpaces--;
        if (temp.length > 1)
            i = i + 1;
        //ignoring the last word and taking the pointer back to first word
        if (i == temp.length - 1) {
            i = 0;
        }
    }
    return temp;
}
/**
 * temp = [What_ _ _, must_ _ _, be] charCount = 10
 * numberOfWhiteSpaces = 6
 *          i       numberOfWhiteSpaces>0   numberOfWhiteSpaces  i=i+1       (i == temp.length - 1)
 *          0           6>0  T                       5             1            1==2    F
 *          1           5>0  T                       4             2            2==2    T    
 *          0           4>0  T                       3             1            1==2    F
 *          1           3>0  T                       2             2            2==2    T
 *          0           2>0  T                       1             1            1==2    F
 *          1           1>0  T                       0             2            2==2    T
 *          0           0>0  F
 */
 
console.log(justifyText(["This", "is", "an", "example", "of", "text", "justification."], 16));
console.log(justifyText(["What", "must", "be", "acknowledgement", "shall", "be"], 24));
 
/**
 * ["What", "must", "be", "acknowledgement", "shall", "be"]
 * maxwidth = 16
 *
 * i   word                 remChars         word.length<=remChars            temp          charCount   answer
 * 0   What                 16                 4<=16  T                      [What]           4            []
 * 1   must                 16 - 4 - 1 = 11    4<=11    T                   [What, must]      8            []
 * 2    be                  16 - 8 - 2 = 6     2<=6  T                    [What, must, be]    10           []
 * 3  acknowledgement       16 - 10 - 3 = 3    15<=3  F                                                   ['What___must___be']
 *
*/

