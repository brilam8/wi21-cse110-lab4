**DevTools - Debugging**
- The bug is that the value of the element inputs are of type string when you input them, so the function takes those inputs and lets the result variable equal to num1 + num2, which are both string types so when you add them together, you get another string with just the two inputs concatenated together. (for example, if input 5 and 6 then calculate, we are pretty much doing "5" + "6" which equals "56" the string).
- To fix it, I would type convert both variables `num1` and `num2` to numbers before adding them together and assigning that value to result. (`let result = Number(num1) + Number(num2)`).

**DevTools - Network Tab**
1. The new json file is named `citylots.json`.
2. `part2.js` initiated the download of the new file.
3. The size of the file is `11.7 MB`.
4. It takes 4.50 seconds for the file to download (82 ms if cached).
5. My User-Agent for the browser that made the request is: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36`
6. In the response, the file came from an `Apache` server.
7. The file was last modified on `Tue, 26 Jan 2021 at 22:14:13 GMT`.
8. The Content-Type of the file is `application/json`.
9. The `fetchData()` method inside the initating file made the request.
