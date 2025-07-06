// Gestion du clic sur "Nouveau Projet"
document.querySelector("button").addEventListener("click", () => {
    console.log("Redirection vers le formulaire d'ajout de projet");
    // window.location.href = "add-project.html";
  });
  
  // Exemple : Gestion des filtres
  document.querySelectorAll("select").forEach(select => {
    select.addEventListener("change", () => {
      console.log("Filtres appliqués");
      // Ajouter ici la logique de filtrage (API ou DOM)
    });
  });