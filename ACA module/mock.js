let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}

//-------------------------------------
let n = parseInt(readLine()).split(' ');

let lo = 0;
        let hi = arr_size - 1;
        let mid = 0;
        let temp = 0;
        // Iterate till all the elements
        // are sorted
        while (mid <= hi)
        {
            // If the element is 0
            if(a[mid] == 0)
            {
                temp = a[lo];
                a[lo] = a[mid];
                a[mid] = temp;
                lo++;
                mid++;
            }
            // If the element is 1
            else if(a[mid] == 1)
            {
                mid++;
            }
            // If the element is 2
            else
            {
                temp = a[mid];
                a[mid] = a[hi];
                a[hi] = temp;
                hi--;
            }
             
        }
    }