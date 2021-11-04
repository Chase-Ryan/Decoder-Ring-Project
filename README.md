# Decoder-Ring-Project

<a href="https://chase-ryan.github.io/Decoder-Ring-Project/">Project<a>

  <h2> Caesar </h2>
  <img src="https://github.com/Thinkful-Ed/project-decoder-ring/raw/master/docs/caesar.png" />
  The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.

For example, if you were to "shift" the alphabet to the right by 3, the letter "A" would become "D".
  
  
  <h2> Polybius </h2>  
  
|  | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| 1 | A | B | C | D | E |
| 2 | F | G | H | I/J | K|
| 3 | L | M | N | O | P |
| 4 | Q | R | S | T | U |
| 5 | V | W | X | Y | Z |
  
  The Polybius Square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. Typically, it is possible to arrange the letters however you like and read off the coordinates in whatever direction you like.

In this example, the grid will be arranged as above and coordinates will be read by comparing the first digit to the number on the top of the table and the second digit to that on the left. For example, in the above table, the letter "B" would be represented by the numerical pair "21".
  
  <h2> Substitution </h2>
  <img src="https://github.com/Thinkful-Ed/project-decoder-ring/blob/master/docs/substitution.jpeg?raw=true" />
  The Substitution Cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet; otherwise, it will be difficult for them to decode the message.
  For example, in the image above, the word "HELLO" would be translated as follows:
  <ul>
    <li>"H" becomes "R".</li>
<li>"E" becomes "M".</li>
<li>"L" becomes "W".</li>
<li>"O" becomes "L".</li>
  </ul>
This would result in the code "RMWWL". To decrypt this code, you would simply take the result and transpose back from the substitution alphabet to the standard alphabet.
