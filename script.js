function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Add the scroll event listener
  window.addEventListener('scroll', animateOnScroll);
  
  // Function to check if an element is partially in the viewport
  function isElementPartiallyInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
    // Adjust the threshold value (0.25) to your desired visibility percentage
    const threshold = 0.25;
    const elementHeight = rect.height * threshold;
  
    return (
      rect.top + elementHeight <= windowHeight &&
      rect.bottom >= elementHeight
    );
  }
  
  
  // Function to apply the animation class on scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
  
    elements.forEach((element) => {
      if (isElementPartiallyInViewport(element)) {
        element.classList.add('show');
      }
    });
  }
  
  // Add the DOMContentLoaded event listener to trigger the animation on page load
  document.addEventListener('DOMContentLoaded', animateOnLoad);
  
  // Function to apply the animation class on page load
  function animateOnLoad() {
    const hpBioSection = document.querySelector('#hpBio');
    hpBioSection.classList.add('show');
  }
  