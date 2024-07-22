/**
 * A program named 1-stdin.js that will be executed through command line:
 * 	- It should display the message Welcome to Holberton School, what is
 * 	your name? (followed by a new line)
 * 	- The user should be able to input their name on a new line
 *	- The program should display Your name is: INPUT
 *	- When the user ends the program, it should display This important
 *	software is now closing (followed by a new line)
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const imput = process.stdin.read();

  if (imput) {
    process.stdout.write(`Your name is: ${imput}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
