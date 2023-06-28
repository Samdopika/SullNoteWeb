// Using jsPDF for creating PDF
const jsPDF = window.jspdf.jsPDF;

// DOM Elements
const noteTitle = document.querySelector('#note-title');
const noteBody = document.querySelector('#note-body');
const saveBtn = document.querySelector('#save-btn');
const downloadBtn = document.querySelector('#download-btn');

// Load the stored note
window.onload = () => {
  if(localStorage.getItem('noteTitle')) {
    noteTitle.value = localStorage.getItem('noteTitle');
  }
  if(localStorage.getItem('noteBody')) {
    noteBody.value = localStorage.getItem('noteBody');
  }
};

// Save note to local storage
saveBtn.addEventListener('click', () => {
  localStorage.setItem('noteTitle', noteTitle.value);
  localStorage.setItem('noteBody', noteBody.value);
  alert("Your note has been saved!");
});

// Download note as PDF
downloadBtn.addEventListener('click', () => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text(noteTitle.value, 10, 20);
  doc.setFontSize(14);
  doc.text(noteBody.value, 10, 30);

  doc.save('SullNote.pdf');
});
