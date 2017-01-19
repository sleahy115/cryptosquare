## Specs

|Behavior | Input example | Output example|
|---------|--------------|-------------|
|Create an array that outputs individual letters for each character in the string | This is a test| ["t","h","i","s","i","s","a","t","e","s","t"]|
|Count the size of the array|["t","h","i","s","i","s","a","t","e","s","t"] | 11 | Begin calculating size of grid by calculating square root of array length| 11| 3.31|
|Round the output to a whole number| 3.31 | 3|
|Check the square of the rounded number to see if it is large enough to contain the array | 3 | 9> 11 = false|
|If the square is too small add one to the number until it is large enough to contain the array | (3+1) *3 | 12> 11 =true |
|Create a loop that selects the values in the array based on the calculated width and height of the grid| ["t","h","i","s","i","s","a","t","e","s","t"] |["t", "i","e"....]|
|join the newly encoded array and output the information| ["t", "i","e"....]|"tie..."|
