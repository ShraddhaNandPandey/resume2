document.addEventListener("DOMContentLoaded", function() {
    const workInProgressMessage = document.getElementById("workInProgressMessage");
    
    // Function to show the message
    function showMessage() {
        const isWorkInProgress = true; // Change this to false when your portfolio is complete
    
        if (isWorkInProgress) {
            workInProgressMessage.textContent = "This portfolio is a work in progress. Check back later for updates.";
        } else {
            workInProgressMessage.textContent = "Welcome to my completed portfolio!";
        }
    }
    
    // Delay the message by 5 seconds (5000 milliseconds)
    setTimeout(showMessage, 5000);
});
