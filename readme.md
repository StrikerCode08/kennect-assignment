
# Welcome to kennect SDE assignment

This is a simple implementation of how to print all prime and not prime number between two numbers.

## Follow These Setps to test it out
1. Clone this repo
- [Kennect SDE](https://github.com/StrikerCode08/kennect-assignment.git)

2. Open index.html file in your broswer

3. Type In the range you want

## Time Complexity Analysis
1. The function first checks if number is less than or equal to 1 and returns false. This operation takes constant time, O(1).

2. Then, it checks if number is less than or equal to 3 and returns true. Again, this is a constant-time operation, O(1).

3. Next, it checks if number is divisible by 2 or 3. This involves two constant-time modulo operations, O(1).

4. The primary part of the function is the loop that starts with i = 5 and continues as long as i * i <= number. Inside the loop, there are two modulo operations (number % i and number % (i + 2)), which are performed a variable number of times depending on the value of number. The loop iterates until i reaches the square root of number. Therefore, the loop's time complexity is O(sqrt(n)).

5. Overall, the dominant factor in the time complexity of this function is the loop, making the function's time complexity O(sqrt(n)).

