/* Question:
 * Bunny runs a reading club. He has a huge collection of books. It is very time consuming
 * for the readers to go and physically search for a book. So, Bunny wants to provide a
 * quick way to search for a book. Help Bunny to build a program that does this.
 *
 * Input:
 * First Line contains a positive integer, say n, denoting the number of books with Bunny.
 * Next n lines contain one string each denoting the title of the book.
 * Next line contains a positive integer, say q, denoting the number of queries.
 * Next q lines contain one string each, denoting the book searched by a customer.
 *
 * Output:
 * q lines containing one string each, Available or Not Available, denoting whether that
 * particular book is available or not.
 *
 * Example:
 * Input:
 * 10
 * Wings of Fire
 * Harry Potter and The chamber of secrets
 * Swami and his friends
 * Animal Farm
 * Hound of Baskerville
 * Programming Pearls
 * Midnight Children
 * Surely you're joking, Mr. Feynman
 * Sapiens
 * Fat chance
 * 3
 * Game of Thrones
 * Harry Potter and the prisnor of Azkaban
 * Midnight Children
 *
 * Expected Output:
 * Not Available
 * Not Available
 * Available  */

let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}

//------------------------------------------------

let n = parseInt(readLine());
let books = [];
for(let i = 0; i<n;i++)
{
    books[i]= readLine();
}
let q = parseInt(readLine());
for(let i =0;i<q;i++)
{
    let query = readLine();
    let found = "not available";
    for(let j =0;j<books.length;j++)
    {
        if(query === books[j])
        {
            found = "available";
            break;
        }
    }
    console.log(found);
}