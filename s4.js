//24. Write a JavaScript program that uses a try-catch block to catch
//and handle a 'SyntaxError' when parsing an invalid JSON string.
const invalidJSONString = '{ "name": "John", "age": 30, "city": "New York", }';

try {
    const parsedJSON = JSON.parse(invalidJSONString);
    console.log(parsedJSON);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.error('Invalid JSON string:', error.message);
    } else {
        console.error('An unexpected error occurred:', error);
    }
}
//Invalid JSON string: Expected double-quoted property name in JSON at position 49
