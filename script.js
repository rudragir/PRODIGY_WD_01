document.addEventListener("DOMContentLoaded", () => {
  const signupModal = document.getElementById("signup-modal");
  const loginModal = document.getElementById("login-modal");

  document.getElementById("signup-btn").onclick = () => (signupModal.style.display = "block");
  document.getElementById("login-btn").onclick = () => (loginModal.style.display = "block");

  document.getElementById("signup-close").onclick = () => (signupModal.style.display = "none");
  document.getElementById("login-close").onclick = () => (loginModal.style.display = "none");

  window.onclick = (event) => {
    if (event.target === signupModal) signupModal.style.display = "none";
    if (event.target === loginModal) loginModal.style.display = "none";
  };

  document.getElementById("get-started-btn").onclick = () => {
    alert("Thank you for your interest! Contact us to get started.");
  };
});
