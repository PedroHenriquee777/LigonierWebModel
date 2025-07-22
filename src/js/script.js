// Dropdown menu toggle
const btnHeader = document.querySelector('.btn-header');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownClose = document.getElementById('dropdownClose');

if (btnHeader && dropdownMenu && dropdownClose) {
  btnHeader.addEventListener('click', function(e) {
    const isOpen = dropdownMenu.style.display === 'flex';
    if (!isOpen) {
      dropdownMenu.style.display = 'flex';
      btnHeader.innerHTML = '<strong>CLOSE</strong>';
      document.body.style.overflow = 'hidden';
      dropdownMenu.style.overflowY = 'auto';
    } else {
      dropdownMenu.style.display = 'none';
      btnHeader.innerHTML = '<strong>MENU</strong>';
      document.body.style.overflow = '';
    }
  });
  dropdownClose.addEventListener('click', function() {
    dropdownMenu.style.display = 'none';
    btnHeader.innerHTML = '<strong>MENU</strong>';
    document.body.style.overflow = '';
  });
  dropdownMenu.addEventListener('click', function(e) {
    if (e.target === dropdownMenu) {
      dropdownMenu.style.display = 'none';
      btnHeader.innerHTML = '<strong>MENU</strong>';
      document.body.style.overflow = '';
    }
  });
}
