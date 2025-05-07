// Event Handling 🎈
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked! 🎉");
  });
  
  document.getElementById("hoverBox").addEventListener("mouseover", () => {
    document.getElementById("hoverBox").style.backgroundColor = "coral";
  });
  document.getElementById("hoverBox").addEventListener("mouseout", () => {
    document.getElementById("hoverBox").style.backgroundColor = "lightblue";
  });
  
  document.getElementById("keyInput").addEventListener("keydown", (e) => {
    console.log("Key pressed:", e.key);
  });
  
  document.getElementById("secretBtn").addEventListener("dblclick", () => {
    alert("Secret double-click unlocked! 🎉");
  });
  
  // Interactive Elements 🎮
  const colorBtn = document.getElementById("colorBtn");
  colorBtn.addEventListener("click", () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Generate a random hex color
  document.body.style.backgroundColor = randomColor; // Change the background color of the webpage
});
  
  const images = [
    "https://picsum.photos/600/400",
    "https://picsum.photos/200/300",
    "https://picsum.photos/seed/picsum/200/300",
  ];
  
  let currentImage = 0;
  document.getElementById("nextImageBtn").addEventListener("click", () => {
    currentImage = (currentImage + 1) % images.length; // Cycle through the images
    document.getElementById("galleryImage").src = images[currentImage]; // Update the image source
  });
  
  // Tabs
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab-content").forEach(c => c.style.display = "none");
      const target = tab.getAttribute("data-target");
      document.getElementById(target).style.display = "block";
    });
  });
  
  // Form Validation 📋✅
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const feedback = document.getElementById("formFeedback");
  
    if (name === "" || email === "" || password === "") {
      feedback.textContent = "All fields are required.";
      feedback.style.color = "red";
      return;
    }
  
    if (!email.includes("@") || !email.includes(".")) {
      feedback.textContent = "Invalid email format.";
      feedback.style.color = "red";
      return;
    }
  
    if (password.length < 8) {
      feedback.textContent = "Password must be at least 8 characters.";
      feedback.style.color = "red";
      return;
    }
  
    feedback.textContent = "Form submitted successfully!";
    feedback.style.color = "green";
  });

  document.getElementById("password").addEventListener("input", (e) => {
    const feedback = document.getElementById("formFeedback");
    if (e.target.value.length < 8) {
      feedback.textContent = "Password is too short.";
      feedback.style.color = "orange";
    } else {
      feedback.textContent = "";
    }
  });
  
