// socket.js
const socket = io();

// Handle form submission
const form = document.getElementById('submission-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const content = document.getElementById('submission-content').value;
    if (content.trim()) {
      socket.emit('newSubmission', { content });
      document.getElementById('submission-content').value = '';
    }
  });
}

// Listen for updates
socket.on('updateSubmissions', (data) => {
  const submissionsList = document.getElementById('submissions-list');
  if (submissionsList) {
    const li = document.createElement('li');
    li.innerHTML = `<p>${data.content}</p><small>Posted on ${new Date(data.createdAt).toLocaleString()}</small>`;
    submissionsList.prepend(li);
  }
});
