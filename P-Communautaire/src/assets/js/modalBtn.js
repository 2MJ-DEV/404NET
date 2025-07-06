 // Alpine.js pour la gestion d'état
 document.addEventListener('alpine:init', () => {
    Alpine.data('projectModal', () => ({
        openModal: false,

        submitProject() {
            // Validation du formulaire
            const projectName = document.getElementById('project-name').value;
            if (!projectName) {
                alert('Veuillez saisir un nom de projet');
                return;
            }

            // Ici, ajoutez votre logique pour créer le projet
            console.log('Projet créé :', {
                name: projectName,
                description: document.getElementById('project-description').value,
                startDate: document.getElementById('start-date').value,
                endDate: document.getElementById('end-date').value,
                type: document.querySelector('input[name="project-type"]:checked')?.id
            });

            // Fermer le modal après soumission
            this.openModal = false;

            // Réinitialiser le formulaire
            document.querySelector('form').reset();

            // Optionnel: Actualiser la liste des projets
            // window.location.reload();
        }
    }));
});