import './style.css'

document.querySelectorAll('[data-tab]').forEach(button => {
    button.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // Mise à jour des boutons
        document.querySelectorAll('[data-tab]').forEach(btn => {
            btn.classList.remove('bg-blue-900', 'text-white');
            btn.classList.add('text-gray-600', 'hover:bg-gray-100');
        });
        this.classList.add('bg-blue-900', 'text-white');
        this.classList.remove('text-gray-600', 'hover:bg-gray-100');
        
        // Mise à jour des contenus
        document.querySelectorAll('.content-tab').forEach(tab => {
            tab.classList.add('hidden');
        });
        document.getElementById(`${tabId}Content`).classList.remove('hidden');
    });
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('[data-tab="profile"]').click();
});