/* 
Purpose: JavaScript provides the logic or behavior for the web page.

Configure two 'event listeners'.

1. One that listens continously for the user entering their name. 
1. One that listens continously for the user entering their favorite language(s). 

Use document.getElementById().addEventListener() to configure the event listeners.

Provide the logic when the event is triggered.
*/

document.getElementById("nameInput").addEventListener("input", () => { 
     /* Logic on updating the html element with id= 'nameInput'.

    - Use 'document.getElementById("nameInput").value' to retrieve the text 
    the user has entered into the input field and store it in a variable named 'user'.

    - Use backtics (a template literal) to construct a personalized greeting 
    from an embedded expression and store it in a variable named 'welcome_string'.

    - Find the html element with id='welcome' (a paragraph tag in our HTML) 
    and change its inner text to the personalized greeting. 
    
    The webpage updates in real time, displaying our custom greeting.

    TODO: Keep the ${user}, but change the rest of the string to a greeting of your choice.
    */
    let user = document.getElementById("nameInput").value;
    let welcome_string = `Hello ${user}! Do you like sports?`;
    document.getElementById("welcomeOutput").innerText = welcome_string;
});

document.getElementById("languageInput").addEventListener("input", () => {
     /* Logic on updating the html element with id= 'languageInput'.*/

    let answer = document.getElementById("languageInput").value;
    let count = answer.length;
    let language_string = `Your favorite team(s) are ${answer}. That takes ${count} characters.`;
    document.getElementById("insightsOutput").innerText = language_string;
});