
<script>
  // Get form elements
  var form = document.querySelector("form");
  var nameInput = document.querySelector("#name");
  var emailInput = document.querySelector("#email");
  var messageInput = document.querySelector("#message");

  // Add event listener to form
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form input values
    var name = nameInput.value;
    var email = emailInput.value;
    var message = messageInput.value;

    // Check if inputs are not empty
    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields");
    } else {
      // Check if email is valid
      var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email");
      } else {
        // Send form data
        alert("Form data sent!");
        form.reset();
      }
    }
  });
</script>
