const readline = require('readline');

// Function to ask a question and get user input
function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => rl.question(query, answer => {
    rl.close();
    resolve(answer);
  }));
}

async function main() {
  try {
    // Ask the user for the merge request description
    const mergeDescription = await askQuestion('Please enter the Merge Request Description (press Enter to leave empty): ');

    // Check if the user entered a description or left it empty
    if (mergeDescription.trim() === '') {
      console.log('No description provided.');
    } else {
      console.log(`Merge Request Description: ${mergeDescription}`);
    }

    // Further processing can be done here based on the mergeDescription
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// Run the main function
main();
