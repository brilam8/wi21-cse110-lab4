1. Using the arguments passed in in Q4 ([100, 200, 300], .5), 3 will get printed (in general `prices.length` will be printed)  because we declared i with (var i), therefore, this variable is within the scope of the entire function, meaning we can access it on line 11 even though it is only declared within the for loop.
2. Using the arguments passed in in Q4 ([100, 200, 300], .5), 150 will get printed (will be the discounted price of the final item of the prices array) because we declared discountedPrice with (var discountedPrice), therefore, this variable is within the scope of the entire function, meaning we can access it on line 12 even though it is only declared within the for loop (and also changed within the foor loop, and we can access that changed value).
3. Using the arguments passed in in Q4 ([100, 200, 300], .5), 150 will get printed (in general will be the final discounted price of the final item of the prices array) because we declared finalPrice with (var finalPrice), therefore, this variable is within the scope of the entire function, meaning we can access it on line 13 even though it is only declared within the for loop (which changes its value, and we are able to access the changed value of it).
4. The function will return an array with size equal to the size of the array of prices passed in, where each element in the returned array represents the corresponding values of the prices array AFTER the discount of .5 (which is equivalent to a 50% discount). Therefore, the function will return [ 50, 100, 150 ], because each of the prices were discounted by 50%, so their discounted prices are [ 50, 100, 150 ] compared to the original [ 100, 200, 300 ].

5. At line 11, we will get an "i is not defined" error because we declare i within the code block of the for loop, and since we use "let," we cannot access i outside of this for loop (line 11 is outside the scope of the for loop code block).
6. At line 12, we will get a "discountedPrice is not defined" error (if line 11 didn't error out first) because we declare discountedPrice within the code block of the for loop, and since we use "let," we cannot access discountedPrice outside of this for loop (line 12 is outside the scope of the for loop code block).
7.  Using the arguments passed in in Q4 ([100, 200, 300], .5), 150 will get printed (in general will be the final discounted price of the final item of the prices array) because we declared finalPrice at the start of the function with "let," (so it will be available in the function's scope) and since line 13 is still within the scope of this function "discountPrices," we will still be able to access it and print out the value after it is changed in the for loop.
8.  If no errors occurred within this function (which some do since we try to access variables outside of their scope) and all assignments worked normally, the function would function normally. The function will return an array with size equal to the size of the array of prices passed in, where each element in the returned array represents the corresponding values of the prices array AFTER the discount of .5 (which is equivalent to a 50% discount). Therefore, the function will return [ 50, 100, 150 ], because each of the prices were discounted by 50%, so their discounted prices are [ 50, 100, 150 ] compared to the original [ 100, 200, 300 ]. If we take errors in account, the function will have an error and not return anything.

9.  If no errors occurred before line 11, at line 11, we will get an "i is not defined" error because we declare i within the code block of the for loop, and since we use "let," we cannot access i outside of this for loop (line 11 is outside the scope of the for loop code block).
10. If no errors occurred before line 12, at line 12, we will get a "discountedPrice is not defined" error (if line 11 didn't error out first) because we declare discountedPrice within the code block of the for loop, and since we use "const," we cannot access discountedPrice outside of this for loop (line 12 is outside the scope of the for loop code block).
11. If line 7 didn't exist (since it causes a constant reassignment error (cant reassign the const variable finalPrice)), line 13 would print 0 because that is the constant value assigned to finalPrice at the start of the function (so it will be available in the function's scope), so we can access it on line 13, and since it is a const variable, it cannot be changed to be different from 0 (otherwise that would cause an error). However, if line 7 DID work and variable assignments were successful at each step, using the arguments from Q4 ([100, 200, 300], .5), line 13 would print 150 (in general will be the final discounted price of the final item of the prices array), since we declared final price at the start of the function, so it will be accessible within the scope of the function (and line 13 is still within the scope).
12. If no errors occurred within this function (which some do since we try to change a constant variable), the function would function normally (if we assume that all assignments work properly, as was said on slack "if a variable assignment throws an error, assume the assignment was successful in subsequent questions", so I am assuming that finalPrice is getting changed appropriately within the for loop). The function will return an array with size equal to the size of the array of prices passed in, where each element in the returned array represents the corresponding values of the prices array AFTER the discount of .5 (which is equivalent to a 50% discount). Therefore, the function will return [ 50, 100, 150 ], because each of the prices were discounted by 50%, so their discounted prices are [ 50, 100, 150 ] compared to the original [ 100, 200, 300 ]. However, if we take the errors in account, the function will error at line 7 and wont return anything (or if we assume line 7 didnt exist, the function will return [ 0, 0, 0 ] since finalprice is constant and set to 0, so 0's will be pushed into the returning array).
13. 
    A.  `student.name`

    B.  `student["Grad Year"]`
    
    C.  `student.greeting()`

    D.  `student["Favorite Teacher"].name`

    E.  `student.courseLoad[0]`
14. 
    A.  '32', Since the first value is a string, JS interprets the + as concacatenation, adding the 2 as a string to the end of '3', making the string '32'

    B.  1, even though '3' is a string, JavaScript recognizes the - (and sicne we cant subtract strings), converts the '3' to an integer and does subtraction, 3-2=1, returning an int.
    
    C.  3, adding null to an integer is the equivalent of adding nothing to that integer.
    
    D.  '3null', Since '3' is a string, JS interprets the + as concatenation and converts null to a string. When we concatenate '3' + 'null' we get '3null'
    
    E.  4, since true as a boolean can also be thought as 1 as an int (false is 0), so when we do addition with true and an integer, it can be thought of as 1 + 3 = 4.
    
    F.  0, since false as a boolean can be thought of as 0 as an int, we are doing addition with 0 and null, which is like adding nothing to 0, so we get 0 + 0 = 0
    
    G.  '3undefined', since "3" is a string, JS interprets the + as concatenation and converts undefined to a string, then concatenating the two strings together, giving us '3undefined'
    
    H.  NaN, though "3" is a string, we cant perform subtracting on strings, so JS converts undefined to a number, which is NaN, therefore though 3 converts successfully, 3-NaN is NaN.
15. 
    A.  true, since we are comparing values of different types, JS converts the values to numbers, so 2 > 1 = true
    B.  false, since we are comparing two strings, JS compares the strings letter-by-letter. Tight away, '2' < '1' = false, so false.
    C.  true, since we are comparing values of different types, JS converts the values to numbers, so 2 == 2 = true
    D.  false, we use ===, so it checks equality without type conversion, and since 2 and '2' are different types, we get false right away.
    E.  false, since true and 2 are different types, JS converts them to numbers, and since true converts to 1, 1 == 2 is false.
    F.  true, though === doesn't do automatic type conversion when comparing, we still have a type comparision on the 2. When converting 2 to a Boolean, it converts to true since it isn't 0, an empty string, null, underfined, or NaN. So we get true === true which is true.
16. === is the strict equality operator while == is just a regular equality check. The difference is that === will check the equality without automatic type conversion by JavaScript in reaction to +, -, and values of different types. Therefore, if a and b are different types, then a === b will immediately return false without attempting to convert them.
17. 'How are you?' will print because, as we showed earlier, 2 == true is false because of the way true converts to a number, so we go to the "else if" statement, and since 2 is a value that isn't 0, null, undefined, NaN, or the empty string, 2 will boolean convert to true so we'll enter the else if block and print 'How are you?'
18. check file: `part1-question18.js`
19. [ 6, 8, 10 ], calling the function with: `modifyArray([1,2,3], doSomething)` will return [ 6, 8, 10 ]. When we enter the function modifyArray with parameters array = [1,2,3] and callback = doSomething (which is a function), we go through the for loop which loops through our array. We push a value into newArr which is the return value of (callback(array[i], function(x) { return x * 2})). For example, for i = 0, we run callback, which is set to doSomething. We enter the doSomething function with parameters array[1] (=1) and another callback function that takes in x and returns x*2. Our doSomething functions calls that callback function and returns whatever it returns, so in our case, the callback function returns num + 2 (so 1 + 2). doSomething takes that return value and returns it multiplied by 2 (so 3 * 2). Finally, this is the callback function that was first called within the for loop, so 6 is pushed into our newArr, and after this process is done for each number in the array (adds 2 then multiplies it by 2 then pushes it into the new array), we return the new array.
20. check file: `part1-question20.js`
21. answer below:

``` 
1
4
3
2
```

    