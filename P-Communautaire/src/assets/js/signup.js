document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("Signup attempt with:", { name, email, password });
  });