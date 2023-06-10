
  
  // Function to toggle dark mode
  function toggleDarkMode(event) {
      event.preventDefault(); // Prevent the default link behavior
  
    $('body').toggleClass("dark-mode");
  
    // Change link text based on dark mode status
    var link = $('.dark-mode .link');
    if ($('body').hasClass("dark-mode")) {
      link.text("I want light mode");
    } else {
      link.text("I want dark mode");
    }
  }
  
  // Add event listener to the dark mode link
  $(document).on('click', '.dark-mode .link', toggleDarkMode);
  
