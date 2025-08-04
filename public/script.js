function showTab(event, tabName) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    // Reset all buttons to inactive state
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('bg-brand-purple', 'text-brand-light', 'shadow-volumetric-active', '-translate-y-1');
        button.classList.add('shadow-volumetric');
    });

    // Show selected tab content
    document.getElementById(tabName).style.display = 'block';

    // Set clicked button to active state
    const activeButton = event.currentTarget;
    activeButton.classList.add('bg-brand-purple', 'text-brand-light', 'shadow-volumetric-active', '-translate-y-1');
    activeButton.classList.remove('shadow-volumetric');
}

// Show default tab on page load
document.addEventListener('DOMContentLoaded', function() {
    const initialActiveButton = document.querySelector('.tab-button');
    if (initialActiveButton) {
        showTab({ currentTarget: initialActiveButton }, 'about');
    }
});
