 <script>
        window.onload = function() {
            // Preload the new images
            var newImage1 = new Image();
            newImage1.src = 'https://serverlessinfra.com/dashicons/6.svg';
            
            var newImage2 = new Image();
            newImage2.src = 'https://serverlessinfra.com/dashicons/7.svg';
            
            // Get the image elements by their 'src' attributes
            var imageElement1 = document.querySelector('img[src="/assets/images/icons/functions-bs/cdn-caching.svg"]');
            var imageElement2 = document.querySelector('img[src="/assets/images/icons/functions-bs/block-visitors.svg"]');
            
            // Check if the image elements exist
            if (imageElement1) {
                // Replace the 'src' attribute with the new URL
                imageElement1.src = newImage1.src;
                
                // Set the 'class' attribute to the custom class
                imageElement1.setAttribute('class', 'custom-image-style');
            }
            
            if (imageElement2) {
                // Replace the 'src' attribute with the new URL
                imageElement2.src = newImage2.src;
                
                // Set the 'class' attribute to the custom class
                imageElement2.setAttribute('class', 'custom-image-style');
            }
        };
    </script>
