export function showModal(content) {
  const modal = document.querySelector('#modal');
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      ${content}
    </div>
  `;
  modal.style.display = 'block';

  modal.querySelector('.close').onclick = () => {
    modal.style.display = 'none';
  };

  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  };
}