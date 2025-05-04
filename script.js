//tranlucent navbar

window.addEventListener('scroll', function() {
    const navBar = document.querySelector('.nav-bar');
    if (window.scrollY > 30) {
      navBar.classList.add('scrolled'); // Add blur and background color change after 50px scroll
    } else {
      navBar.classList.remove('scrolled'); // Remove blur and background when at the top
    }
  });


// Toggle side bar
function toggleMenu() {
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const sidebar = document.getElementById("sidebar");

  // Only run on screens 1000px wide or less
  if (window.matchMedia("(max-width: 1000px)").matches) {
    const isMenuVisible = menuIcon.style.display !== "none";

    menuIcon.style.display = isMenuVisible ? "none" : "inline";
    closeIcon.style.display = isMenuVisible ? "inline" : "none";

    sidebar.classList.toggle("active");

    // Only add this once to avoid duplicate listeners
    if (!sidebar._outsideClickListener) {
      sidebar._outsideClickListener = function (event) {
        if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
          sidebar.classList.remove("active");
          menuIcon.style.display = "inline";
          closeIcon.style.display = "none";
        }
      };
      document.addEventListener("click", sidebar._outsideClickListener);
    }
  }
}

// Close the sidebar if the window is resized above 1000px
window.addEventListener("resize", function () {
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const sidebar = document.getElementById("sidebar");

  if (window.innerWidth > 1000) {
    // Ensure sidebar is closed and both icons are hidden
    sidebar.classList.remove("active");
    menuIcon.style.display = "none";
    closeIcon.style.display = "none";
  } else {
    // Show the appropriate icon based on the sidebar's state
    if (sidebar.classList.contains("active")) {
      // If the sidebar is open, show the close icon
      menuIcon.style.display = "none";
      closeIcon.style.display = "inline";
    } else {
      // If the sidebar is closed, show the menu icon
      menuIcon.style.display = "inline";
      closeIcon.style.display = "none";
    }
  }
});
//toggle sidebar end


//typing effect in hero-about-section
const texts = ["Software Developer", "UI/UX Designer", "Web Enthusiast", "Creative Coder", "Fullstack Developer", "Creative Coder", "App Developer"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typing-text').textContent = letter;

    if (letter.length === currentText.length) {
        // Wait before starting to delete
        setTimeout(erase, 1500);
    } else {
        setTimeout(type, 100); // Typing speed
    }
}

function erase() {
    if (index > 0) {
        letter = currentText.slice(0, --index);
        document.getElementById('typing-text').textContent = letter;
        setTimeout(erase, 50); // Erasing speed
    } else {
        count++;
        setTimeout(type, 200); // Small pause before typing next
    }
}

// Start the typing effect after page loads
document.addEventListener("DOMContentLoaded", function() {
    type();
});

//skills-container-animation
document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(".skills-container");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // ✅ Only animate once
      }
    });
  }, {
    threshold: 0.1
  });

  targets.forEach(target => observer.observe(target));
});

//tilt-animation
document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".profile-container");

  containers.forEach((container) => {
    container.addEventListener("mousemove", (e) => {
      const { width, height, left, top } = container.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const rotateX = ((y / height) - 0.5) * 50;
      const rotateY = ((x / width) - 0.5) * -50;

      container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    container.addEventListener("mouseleave", () => {
      container.style.transform = "rotateX(0) rotateY(0)";
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".skills-container");

  containers.forEach((container) => {
    container.addEventListener("mousemove", (e) => {
      const { width, height, left, top } = container.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const rotateX = ((y / height) - 0.5) * 50;
      const rotateY = ((x / width) - 0.5) * -50;

      container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    container.addEventListener("mouseleave", () => {
      container.style.transform = "rotateX(0) rotateY(0)";
    });
  });
});

/*---------------EDUCATION-SECTION---------------*/

//education-container-child-animation
// Function to check if an element is in the viewport

function highlightOnScroll() {
  const containers = document.querySelectorAll('.education-container');

  let closest = null;
  let minDistance = window.innerHeight;

  containers.forEach(container => {
    const rect = container.getBoundingClientRect();
    const distance = Math.abs(rect.top);

    if (distance < minDistance && rect.top >= 0) {
      minDistance = distance;
      closest = container;
    }
  });

  containers.forEach(container => {
    const child = container.querySelector('.education-container-child');
    const logo = container.querySelector('.education-logo-container');
    if (child) child.classList.remove('hover-active');
    if (logo) logo.classList.remove('hover-active');
  });

  if (closest) {
    const closestChild = closest.querySelector('.education-container-child');
    const closestLogo = closest.querySelector('.education-logo-container');
    if (closestChild) closestChild.classList.add('hover-active');
    if (closestLogo) closestLogo.classList.add('hover-active');
  }
}

window.addEventListener('scroll', highlightOnScroll);
window.addEventListener('load', highlightOnScroll);


/*-------------EDUCATION-SECTION-ENDS-----------*/

/*---------------PROJECTS-SECTION----------------*/

//popup
function openPopup(element) {
  const popup = document.getElementById("popup");
  const popupData = document.getElementById("popup-data");
  popupData.innerHTML = element.innerHTML;
  popup.style.display = "flex";

  // Activate additional classes
  document.querySelector('.popup-buttons-container')?.classList.add('popup-buttons-container-active');
  document.querySelector('.projects-container-child-head-bio')?.classList.add('projects-container-child-head-bio-active');
  document.querySelector('.projects-container-child-image-container')?.classList.add('projects-container-child-image-container-active');

  // Add event listener to close when clicking outside popup-data
  popup.addEventListener('click', function handleOutsideClick(e) {
    if (!popupData.contains(e.target)) {
      closePopup();
      popup.removeEventListener('click', handleOutsideClick); // Remove after handling
    }
  });
}

function closePopup() {
  document.getElementById("popup").style.display = "none";

  // Remove the active classes
  document.querySelector('.popup-buttons-container')?.classList.remove('popup-buttons-container-active');
  document.querySelector('.projects-container-child-head-bio')?.classList.remove('projects-container-child-head-bio-active');
  document.querySelector('.projects-container-child-image-container')?.classList.remove('projects-container-child-image-container-active');
}

//projects-container-animation
function highlightOnScroll1() {
  const children = document.querySelectorAll('.projects-container-child');

  if (window.innerWidth >= 1000) {
    // Remove 'show2' from all if width is 1000px or more
    children.forEach(child => child.classList.remove('show1'));
    return;
  }

  let closest = null;
  let minDistance = window.innerHeight;

  children.forEach(child => {
    const rect = child.getBoundingClientRect();
    const distance = Math.abs(rect.top);

    if (distance < minDistance && rect.top >= 0) {
      minDistance = distance;
      closest = child;
    }
  });

  children.forEach(child => child.classList.remove('show1'));

  if (closest) {
    closest.classList.add('show1');
  }
}

window.addEventListener('scroll', highlightOnScroll1);
window.addEventListener('load', highlightOnScroll1);
window.addEventListener('resize', highlightOnScroll1); // Ensures class is removed if resizing beyond 1000px


/*-------------PROJECTS-SECTION-ENDS-----------*/

/*-------------CERTIFICATES-SECTION---------------*/

//certificates-container-animation

function highlightOnScroll2() {
  const children = document.querySelectorAll('.certificates-container-child');

  if (window.innerWidth >= 1000) {
    // Remove 'show2' from all if width is 1000px or more
    children.forEach(child => child.classList.remove('show2'));
    return;
  }

  let closest = null;
  let minDistance = window.innerHeight;

  children.forEach(child => {
    const rect = child.getBoundingClientRect();
    const distance = Math.abs(rect.top);

    if (distance < minDistance && rect.top >= 0) {
      minDistance = distance;
      closest = child;
    }
  });

  // Remove 'show2' from all
  children.forEach(child => child.classList.remove('show2'));

  // Add 'show2' to the closest one
  if (closest) {
    closest.classList.add('show2');
  }
}

window.addEventListener('scroll', highlightOnScroll2);
window.addEventListener('load', highlightOnScroll2);
window.addEventListener('resize', highlightOnScroll2); // Ensures class is removed if resizing beyond 1000px

/*-------------CERTIFICATES-SECTION-ENDS--------------*/