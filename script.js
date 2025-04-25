document.getElementById('menuToggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
    
    // Toggle icon between ☰ and ✕
    if (this.textContent === '☰') {
        this.textContent = '✕';
    } else {
        this.textContent = '☰';
    }
});