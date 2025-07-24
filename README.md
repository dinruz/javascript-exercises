# JavaScript Exercises

These JavaScript exercises are intended to complement the JavaScript content on [The Odin Project](https://www.theodinproject.com/) (TOP). They should only be done when instructed during the course of the curriculum.

---

## Table of Contents

- [Exercises](#exercises)
- [Instructions](#top-instructions)
    - [Contributing](#contributing)
    - [How to Use](#how-to-use)

---

## Exercises

<details>
<summary><strong>Exercise 1: Hello World ✅</strong></summary>

#### Task / Instructions:
[README with instructions](./01_helloWorld/README.md)

#### My Solution:
[helloWorld.js](./01_helloWorld/helloWorld.js)

#### Date of Completion:
14-06-2025
</details>

---

<details>
<summary><strong>Exercise 2: Add Numbers ✅</strong></summary>

#### Task / Instructions:
[README with instructions](./02_addNumbers/README.md)

#### My Solution:
[addNumbers.js](./02_addNumbers/addNumbers.js)

#### Date of Completion:
14-06-2025
</details>

---

<details>
<summary><strong>Exercise 3: Number Checker ✅</strong></summary>

#### Task / Instructions:
[README with instructions](./03_numberChecker/README.md)

#### My Solution:
[numberChecker.js](./03_numberChecker/numberChecker.js)

#### Date of Completion:
14-06-2025
</details>

---

<details>
<summary><strong>Exercise 4: Math Equations ✅</strong></summary>

#### Task / Instructions:
[README with instructions](./04_mathEquation/README.md)

#### My Solution:
[mathEquations.js](./04_mathEquation/mathEquations.js)

#### Date of Completion:
14-06-2025
</details>

---

<details>
<summary><strong>Exercise 5: Join Strings ✅</strong></summary>

#### Task / Instructions:
[README with instructions](./05_joinStrings/README.md)

#### My Solution:
[joinStrings.js](./05_joinStrings/joinStrings.js)

#### Date of Completion:
14-06-2025
</details>

---

<details>
<summary><strong>Exercise 6: Repeat String ✅</strong></summary>

#### Task / Instructions:
[README with instructions](./06_repeatString/README.md)

#### My Solution:
[repeatString.js](./06_repeatString/repeatString.js)

#### Date of Completion:
24-07-2025
</details>

---

<details>
<summary><strong>Exercise 7: Reverse String</strong></summary>

#### Task / Instructions:
[README with instructions](./07_reverseString/README.md)

#### My Solution:
/

#### Date of Completion:
/
</details>

---

<details>
<summary><strong>Exercise 8: Remove From Array</strong></summary>

#### Task / Instructions:
[README with instructions](./08_removeFromArray/README.md)

#### My Solution:
/

#### Date of Completion:
/
</details>

---

<details>
<summary><strong>Exercise 9: Sum All</strong></summary>

#### Task / Instructions:
[README with instructions](./09_sumAll/README.md)

#### My Solution:
/

#### Date of Completion:
/
</details>

---

<details>
<summary><strong>Exercise 10: Leap Years</strong></summary>

#### Task / Instructions:
[README with instructions](./10_leapYears/README.md)

#### My Solution:
/

#### Date of Completion:
/
</details>

---

<details>
<summary><strong>Exercise 11: Temp Conversion</strong></summary>

#### Task / Instructions:
[README with instructions](./011_tempCoversion/README.md)

#### My Solution:
/

#### Date of Completion:
/
</details>

---

<details>
<summary><strong>Exercise 12: Calculator</strong></summary>

#### Task / Instructions:
[README with instructions](./12_calculator/README.md)

#### My Solution:
/

#### Date of Completion:
/
</details>

---

<details>
<summary><strong>Exercise 13: Palindromes</strong></summary>

#### Task / Instructions:
[README with instructions](./13_palindromes/README.md)

#### My Solution:
/

#### Date of Completion:
/
</details>

---

<details>
<summary><strong>Exercise 14: Fibonacci</strong></summary>

#### Task / Instructions:
[README with instructions](./14_fibonacci/README.md)

#### My Solution:
/

#### Date of Completion:
/
</details>

---

<details>
<summary><strong>Exercise 15: Get The Titles</strong></summary>

#### Task / Instructions:
[README with instructions](./15_getTheTitles/README.md)

#### My Solution:
/

#### Date of Completion:
/
</details>

---

<details>
<summary><strong>Exercise 16: Find The Oldest</strong></summary>

#### Task / Instructions:
[README with instructions](./16_findTheOldest/README.md)

#### My Solution:
/

#### Date of Completion:
/
</details>

---

## TOP Instructions

### Contributing 

<details>
<summary><strong>Contributing</strong></summary>

If you have a suggestion to improve an exercise, an idea for a new exercise, or notice an issue with an exercise, please feel free to open an issue after thoroughly reading our [contributing guide](https://github.com/TheOdinProject/javascript-exercises/blob/main/CONTRIBUTING.md).
</details>

---

### How To Use

<details>
<summary><strong>How To Use These Exercises</strong></summary>

1.  Fork and clone this repository. To learn how to fork a repository, see the GitHub documentation on how to [fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo).
    * Copies of repositories on your machine are called clones. If you need help cloning to your local environment you can learn how from the GitHub documentation on [cloning a repository](https://docs.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).
2.  Before you start working on any exercises, you should first ensure you have the following installed:
    * **NPM**. You should have installed NPM already in our [Installing Node.js](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/installing-node-js) lesson. Just in case you need to check, type `npm --version` in your terminal. If you get back `Command 'npm' not found, but can be installed with:`, **do not follow the instructions in the terminal** to install with `apt-get` as this causes permission issues. Instead, go back to the installation lesson and install Node with NVM by following the instructions there.
    * **Jest**. After cloning this repository to your local machine and installing NPM, go into the newly created directory (`cd javascript-exercises`) and run `npm install`. This will install Jest and set up the testing platform based on our preconfigured settings. (Note: if you get warnings that packages are out of date or contain vulnerabilities, you can safely ignore them for these exercises.)
3.  Each exercise includes the following:
    * A markdown file with a description of the task, an empty (or mostly empty) JavaScript file, and a set of tests.
    * A `solutions` directory that contains a solution and the same test file with all of the tests unskipped.
    * To complete an exercise, you will need to go to the exercise directory with `cd exerciseName` in the terminal and run `npm test exerciseName.spec.js`. This should run the test file and show you the output. When you run a test for the first time, it will fail. This is by design! You must open the exercise file and write the code needed to get the test to pass.
4.  Some of the exercises have test conditions defined in their spec file as `test.skip` instead of `test`. This is intentional. Once all `test`s pass, you will change the next `test.skip` to `test` and test your code again. You will do this until all conditions are satisfied. **All tests must pass at the same time**, and you should not have any instances of `test.skip` in the spec file when you are finished with an exercise.
5.  Once you successfully finish an exercise, check the `solutions` directory within each exercise to compare it with yours.
    * You should not be checking the solution for an exercise until you finish it!
    * If your solution differs wildly from TOP's solution (and still passes the exercise's requirements), that is completely fine. Feel free to ask about it in our Discord if there are parts you do not understand.

[!IMPORTANT]
> Do not submit your solutions to this repo, as any PRs that do so will be closed without merging.

[!NOTE]
> Due to the way Jest handles failed tests, it may return an exit code of 1 if any tests fail. NPM will interpret this as an error and you may see some `npm ERR!` messages after Jest runs. You can ignore these, or run your test with `npm test exerciseName.spec.js --silent` to suppress the errors.

The first exercise, `helloWorld`, will walk you through the process in-depth.
</details>

---

<details>
<summary><strong>Debugging</strong></summary>

To debug functions, you can run the tests in the Visual Studio Code debugger terminal. You can open this by clicking the "Run and Debug" icon on the left or pressing <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd>, then clicking JavaScript Debug Terminal. You will be able to set breakpoints as you would in the Chrome DevTools debugger. 

You can run `npm test exerciseName.spec.js` to then execute your code up until your breakpoint and step through your code as necessary. **NOTE**: To take advantage of the debugger, you **MUST** run the script in the debugger terminal, not the bash or zsh terminal.
</details>