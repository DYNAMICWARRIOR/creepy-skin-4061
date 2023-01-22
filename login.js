function checkOTP() {
    var phoneNo = document.getElementById("phoneNo").value;
    var username = document.getElementById("username").value;
    var enteredOTP = prompt("Enter OTP:");
    var expectedOTP = "1234";
    if (enteredOTP === expectedOTP) {
    alert("Logged in successfully!");
    setTimeout(function(){
       location.replace("index2.html");
    }, 100);
} else {
    alert("Incorrect OTP!");
}
}
