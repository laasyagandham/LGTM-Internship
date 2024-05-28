// URL of the new profile picture
const newProfilePicUrl = "https://cdn-icons-png.flaticon.com/256/3135/3135768.png";

// Function to replace profile pictures
function replaceProfilePictures() {
  // Combined selectors for various profile picture elements
  const profilePicSelectors = [
    '.EntityPhoto-circle-5',
    '.EntityPhoto-circle-4',
    '.EntityPhoto-circle-3',
    '.EntityPhoto-circle-2',
    '.EntityPhoto-circle-1',
    '.EntityPhoto-circle-0',
    '.EntityPhoto-square-0',
    '.EntityPhoto-square-1',
    '.EntityPhoto-square-2',
    '.EntityPhoto-square-3',
    '.update-components-carousel-job__image',
    '.ivm-image-view-model__circle-img',
    '.global-nav__me-photo',
    '.EntityPhoto-circle-1-ghost-person'
  ];

  // Query all profile pictures
  const profilePics = document.querySelectorAll(profilePicSelectors.join(', '));
  console.log('Profile Pictures Found:', profilePics.length);

  // Replace each profile picture
  profilePics.forEach(pic => {
    console.log('Replacing picture:', pic.src);
    pic.src = newProfilePicUrl;
    pic.srcset = newProfilePicUrl; // For responsive images
  });
}

// Run the function to replace profile pictures initially
replaceProfilePictures();

// Observe changes to the DOM to handle dynamically loaded content
const observer = new MutationObserver(replaceProfilePictures);
observer.observe(document.body, { childList: true, subtree: true });
