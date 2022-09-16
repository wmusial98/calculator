# calculator
basic in-browser calculator made alongside TOP

## Preview
I will be approaching this project from a different angle than usual, using an iterative process of writing tests and testing functions to get the basic functionality of the calculator working rather than suggested browser console testing. This should help me figure out how to write test files as well as writing good tests. From there, I will be following The Odin Project guidelines for the calculator project at the end of the Foundations course, found here: https://www.theodinproject.com/lessons/foundations-calculator

This README file is both a way of documenting my learning process as well as keeping track of my mistakes and other ideas in a text-format for myself in the future.

## Testing
It bothered me a bit that The Odin Project skimmed over creating and managing json files and jest tests and so I decided to implement them myself. I can see why The Odin Project skimmed this part. I originally tried running `npm test functions.spec.js` and ran into a error `ENOENT: no such file or directory, open '/Users/wiktoriamusial/repos/calculator/package.json'` - I had to install node into the root directory of my project. After, I installed node and jest into the root file of my directory, and I manually changed the test script to `jest` in the package.json file.