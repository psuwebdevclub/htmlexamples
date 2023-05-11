function changeTitle() {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 900000) + 100000; // Generate a random 6-digit number

      document.title = randomNumber; // Set the title of the website to the random number

    }, 10000); // Wait 10 seconds before executing the code inside the setTimeout function
  }
  

function test() {
    let object = document.getElementById("paragraphText");
    console.out.println(object)
}
  changeTitle(); // Call the function to start the countdown
  
