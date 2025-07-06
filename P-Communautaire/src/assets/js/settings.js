// Gestion des onglets
function switchTab(tabName) {
    // Masquer tous les contenus
    document.querySelectorAll('.content-tab').forEach(tab => {
      tab.classList.add('hidden');
    });
  
    // Désactiver tous les onglets
    document.querySelectorAll('[id$="Tab"]').forEach(tab => {
      tab.classList.remove('bg-blue-900', 'text-white');
      tab.classList.add('hover:bg-gray-200');
    });
  
    // Afficher le contenu cible
    document.getElementById(`${tabName}Content`).classList.remove('hidden');
  
    // Activer l'onglet cliqué
    document.getElementById(`${tabName}Tab`).classList.add('bg-blue-900', 'text-white');
    document.getElementById(`${tabName}Tab`).classList.remove('hover:bg-gray-200');
  }
  
  // Initialisation : Afficher l'onglet Profil par défaut
  document.addEventListener('DOMContentLoaded', () => {
    switchTab('profile');
  });