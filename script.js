document.addEventListener('DOMContentLoaded', function() {
  // Function to create a lightbox when clicking on product images
  function createLightbox(imgSrc) {
    // Create elements for the lightbox
    var lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    
    var lightboxContent = document.createElement('div');
    lightboxContent.classList.add('lightbox-content');
    
    var lightboxImg = document.createElement('img');
    lightboxImg.classList.add('lightbox-img');
    lightboxImg.setAttribute('src', imgSrc);
    
    var closeButton = document.createElement('span');
    closeButton.classList.add('close-btn');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function() {
      lightbox.style.display = 'none';
    });
    
    // Append elements to the lightbox
    lightboxContent.appendChild(lightboxImg);
    lightboxContent.appendChild(closeButton);
    lightbox.appendChild(lightboxContent);
    document.body.appendChild(lightbox);
    
    // Display the lightbox
    lightbox.style.display = 'block';
  }
  
  // Get all product images and add click event listener
  var productImages = document.querySelectorAll('.product-img');
  productImages.forEach(function(img) {
    img.addEventListener('click', function() {
      var src = this.getAttribute('src');
      createLightbox(src);
    });
  });
  
  // Function to toggle visibility of hidden content for all labels
  function toggleHiddenContent(contentId) {
      var hiddenContent = document.getElementById(contentId);
      if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
          hiddenContent.style.display = "block";
      } else {
          hiddenContent.style.display = "none";
      }
  }

// Event listeners for all labels
var toggleButtons = document.querySelectorAll('[id^="toggle-content"]');
toggleButtons.forEach(function(button) {
  var contentId = button.id.replace('toggle-content', 'hidden-content');
  button.addEventListener("click", function() {
    toggleHiddenContent(contentId);
  });
});
});

$(document).ready(function() {
    // When a navigation link is clicked
    $('nav a').click(function(e) {
        e.preventDefault(); // Prevent default link behavior
        var link = $(this).attr('href'); // Get the href attribute
        
        // Hide existing logo if visible
        $('.logo').fadeOut('fast', function() {
            // Load content or perform other actions
            window.location.href = link; // Redirect to the clicked link
        });
    });

    // Optional: Show logo on page load with a delay
    $('.logo').delay(500).fadeIn('slow'); // Adjust timing as needed
});

