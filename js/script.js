document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded!');
});


document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
      const icon = button.querySelector('.toggle-icon');
      const isCollapsed = button.classList.contains('collapsed');
      icon.textContent = isCollapsed ? '+' : '-';
    });
  });