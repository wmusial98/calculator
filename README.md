# calculator
basic in-browser calculator made alongside TOP

## Preview
I will be approaching this project from a different angle than usual, using an iterative process of writing tests and testing functions to get the basic functionality of the calculator working rather than suggested browser console testing. This should help me figure out how to write test files as well as writing good tests. From there, I will be following The Odin Project guidelines for the calculator project at the end of the Foundations course, found here: https://www.theodinproject.com/lessons/foundations-calculator

This README file is both a way of documenting my learning process as well as keeping track of my mistakes and other ideas in a text-format for myself in the future.

## Testing
It bothered me a bit that The Odin Project skimmed over creating and managing json files and jest tests and so I decided to implement them myself. I can see why The Odin Project skimmed this part. I originally tried running `npm test functions.spec.js` and ran into a error `ENOENT: no such file or directory, open '/Users/wiktoriamusial/repos/calculator/package.json'` - I had to install node into the root directory of my project. After, I installed node and jest into the root file of my directory, and I manually changed the test script to `jest` in the package.json file.

## Styling
Styling is pretty standard - flexbox, a combination of columns in nested divs, and a flex-wrap on the nummber buttons leads to the desired layout. The main difference is that I did all of my content creation with DOM manipulation - hopefully this will not lead to any problems when I am using multiple JS files together. I imported the Raleway font from Google's open source fonts. I noticed that this slows the page down on initial load.

# Second Pass
I think that creating every HTML element dynamically was a bit ambitious (in nice terms). However, all of the function work I did previously is still the same - this should make navigating the content.js file easier.

## Back to Where I Left Off (And Some)
At the end of the day of second pass, I was back to where I started with a cleaner file. I was able to implement a check that limited the number of decimal places the user could input before being unable to make more changes, added new logic so I didn't have to split a string to do calculations, and clear buttons. 

## End of Calculation Logic + Keyboard Support + Final Thoughts
The pitfall I ran into with the main branch (and DOM manipulation) was that I was unable to pass the result of an expression back to the first number and then use that number in a subsequent calculation. With a cleaner file, I was able to code the entire script with functional programming - something I wasn't able to do while creating elements in JS. 

Keyboard support, while at first difficult, was easy to figure out once I `console.log(`${element.key}`)` on a keypress event helped me figure out the logic for pulling keyboard inputs. While not all of the functionality of the keyboard is exactly the same as using the on-screen keyboard (mainly, you can pass the result of the expression to the first number, but the second number is instead input into the first). I decided to leave it and move on. I suspect that a lack of clearing variable values in the operator keypress logic is causing the bug.

Final Thoughts: Just use HTML 
