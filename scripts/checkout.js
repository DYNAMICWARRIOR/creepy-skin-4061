let totalAmount = localStorage.getItem("totalAmount");
document.getElementById("totalAmount").innerHTML = "Awesome!!, That's : ₹ " + totalAmount;


// radio buttons



// Get the radio buttons by their name attribute
const paymentOptions = document.getElementsByName("payment");

// Loop through the radio buttons
for (let i = 0; i < paymentOptions.length; i++) {
    // Add a click event listener to each radio button
    paymentOptions[i].addEventListener("click", function() {
        // Check which radio button is clicked
        if (paymentOptions[i].id === "pp") {
            // Perform some action for the UPI/BHIM option
            console.log("UPI/BHIM option selected");
        } else if (paymentOptions[i].id === "cd") {
            // Perform some action for the Debit/Credit Card option
            console.log("Debit/Credit Card option selected");
        }
    });
}


/// for payment otp




const confirmPayBtn = document.getElementById("confirm-pay-btn");

// Add a click event listener to the Confirm and Pay button
confirmPayBtn.addEventListener("click", function() {
    // Prompt the user to enter the OTP
    const enteredOTP = prompt("Please enter the OTP:");

    // Check if the entered OTP is correct
    if (enteredOTP === "1234") {
        // Display a message and redirect the user
        alert("Payment successful!");
        window.location.href = "index.html";
    } else {
        // Display an error message
        alert("Incorrect OTP. Please try again.");
    }
});



