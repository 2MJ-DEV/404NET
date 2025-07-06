// Gestion du modal
function openModal() {
    document.getElementById('modal').classList.remove('hidden');
  }
  
  function closeModal() {
    document.getElementById('modal').classList.add('hidden');
  }
  
  // Soumission du formulaire
  document.getElementById('addMemberForm').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Nouveau membre ajouté');
    closeModal();
    // Ajouter ici la logique d'envoi vers une API
  });
  
  // Recherche dynamique
  document.querySelector('input[type="text"]').addEventListener('input', (e) => {
    console.log('Recherche :', e.target.value);
    // Filtrer les membres en temps réel
  });