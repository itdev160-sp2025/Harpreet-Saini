function $(id) {
    return document.getElementById(id);
  }
  
  function openModal() {
    $('modal').classList.add('visible');
    $('modal-backdrop').classList.add('visible');
  }
  
  function closeModal() {
    $('modal').classList.remove('visible');
    $('modal-backdrop').classList.remove('visible');
    $('post-title').value = '';
    $('post-body').value = '';
  }
  
  function saveContent() {
    const title = $('post-title').value.trim();
    const body = $('post-body').value.trim();
  
    if (title && body) {
      const post = document.createElement('div');
      post.className = 'blog-post';
      post.innerHTML = `<h3>${title}</h3><p>${body}</p>`;
      $('display-content').prepend(post);
      closeModal();
    } else {
      alert("Please fill in both the title and body.");
    }
  }
  
  window.onload = function () {
    $('new-button').addEventListener('click', openModal);
    $('cancel-button').addEventListener('click', closeModal);
    $('save-button').addEventListener('click', saveContent);
  };
  