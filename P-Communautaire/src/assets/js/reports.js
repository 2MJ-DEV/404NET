document.addEventListener("DOMContentLoaded", () => {
    // 1. Graphique "Projets par Statut" (Camembert)
    new Chart(document.getElementById('statusChart'), {
      type: 'pie',
      data: {
        labels: ['Terminé', 'En cours', 'Planifié'],
        datasets: [{
          data: [5, 8, 3],
          backgroundColor: ['#10B981', '#3B82F6', '#F59E0B'],
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  
    // 2. Graphique "Budget par Localité" (Barres)
    new Chart(document.getElementById('budgetChart'), {
      type: 'bar',
      data: {
        labels: ['Dakar', 'Thiès', 'Saint-Louis'],
        datasets: [{
          label: 'Budget (M XOF)',
          data: [2.5, 1.8, 0.9],
          backgroundColor: '#1E40AF',
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  
    // 3. Graphique "Taux d'Avancement" (Radar)
    new Chart(document.getElementById('progressChart'), {
      type: 'radar',
      data: {
        labels: ['RN1', 'Pont Thiès', 'Éclairage SL', 'Piste Rurale'],
        datasets: [{
          label: 'Avancement %',
          data: [75, 30, 100, 45],
          backgroundColor: 'rgba(30, 64, 175, 0.2)',
          borderColor: '#1E40AF',
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  
    // 4. Graphique "Performance Trimestrielle" (Ligne)
    new Chart(document.getElementById('quarterlyChart'), {
      type: 'line',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [
          {
            label: 'Projets livrés',
            data: [2, 3, 1, 4, 3, 5],
            borderColor: '#10B981',
            tension: 0.1
          },
          {
            label: 'Budget (M XOF)',
            data: [0.8, 1.2, 0.5, 1.5, 1.0, 2.0],
            borderColor: '#3B82F6',
            tension: 0.1
          }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  });