// Event listener untuk tombol Generate Gambar
document.getElementById('generateImageBtn').addEventListener('click', () => {
  // URL server Stable Diffusion
  const stableDiffusionUrl = 'http://127.0.0.1:7860';
  
  // Buka URL di tab baru
  window.open(stableDiffusionUrl, '_blank');
});

// Tambahan untuk feedback WhatsApp
function submitFeedback() {
  const feedbackText = document.getElementById("feedbackInput").value.trim();

  if (!feedbackText) {
    alert("Tolong isi feedback terlebih dahulu.");
    return;
  }

  const nomorWa = "+6285299757333"; // Ganti ini dengan nomor tujuan WhatsApp yang benar
  const pesan = `Halo, saya ingin memberikan feedback untuk soal:\n\n${feedbackText}`;
  const url = `https://wa.me/${nomorWa}?text=${encodeURIComponent(pesan)}`;

  window.open(url, '_blank');

  document.getElementById("modalFeedback").style.display = "none";
  document.getElementById("feedbackInput").value = "";
}

// Theme Switcher
document.addEventListener('DOMContentLoaded', function() {
  const themeSelect = document.getElementById('themeSelect');
  const body = document.body;

  // Set initial theme from localStorage or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  themeSelect.value = savedTheme;
  body.setAttribute('data-theme', savedTheme);

  themeSelect.addEventListener('change', function() {
    const selectedTheme = this.value;
    body.setAttribute('data-theme', selectedTheme);
    localStorage.setItem('theme', selectedTheme);
  });

  // Report Question Functionality
  function showReportModal(questionIndex) {
    const question = soalAcak[questionIndex];
    const reportContent = document.getElementById('reportContent');
    
    // Format the question and options
    const formattedQuestion = `
      <h4>Soal ${questionIndex + 1}</h4>
      <div class="question">${question.pertanyaan}</div>
      <div class="options">
        ${question.pilihan.map((option, idx) => 
          `<label>${String.fromCharCode(65 + idx)}. ${option}</label>`
        ).join('')}
      </div>
    `;
    
    reportContent.innerHTML = formattedQuestion;
    document.getElementById('reportModal').style.display = 'block';
  }

  function closeReportModal() {
    document.getElementById('reportModal').style.display = 'none';
    document.getElementById('reportFeedback').value = '';
  }

  function sendReport() {
    const feedback = document.getElementById('reportFeedback').value.trim();
    if (!feedback) {
      alert("Tolong isi feedback terlebih dahulu.");
      return;
    }

    const questionContent = document.getElementById('reportContent').innerHTML;
    const questionText = questionContent.replace(/<[^>]*>/g, ''); // Remove HTML tags

    const nomorWa = "+6285299757333"; // Ganti dengan nomor WhatsApp tujuan
    const pesan = `*Laporan Soal Kuis:*

${questionText}

*Feedback:*
${feedback}`;

    const url = `https://wa.me/${nomorWa}?text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');

    closeReportModal();
  }

  // Add report button to each question
  function addReportButtons() {
    const questions = document.querySelectorAll('.soal');
    questions.forEach((question, index) => {
      const reportButton = document.createElement('button');
      reportButton.className = 'report-question-btn';
      reportButton.textContent = 'Laporkan Soal';
      reportButton.onclick = () => showReportModal(index);
      
      // Add the button to the question container
      question.appendChild(reportButton);
    });
  }

  // Call addReportButtons when questions are loaded
  document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // ... existing code ...
    addReportButtons();
  });

  // Handle splash screen
  const splashScreen = document.getElementById('splashScreen');
  const mainContent = document.getElementById('mainContent');
  const startButton = document.getElementById('startButton');

  startButton.addEventListener('click', function() {
    // Fade out splash screen
    splashScreen.style.opacity = '0';
    
    // After short transition, hide splash and show main content
    setTimeout(() => {
      splashScreen.style.display = 'none';
      mainContent.style.display = 'block';
    }, 300);
  });

  // Add event listeners for closing the modal
  window.addEventListener('load', function() {
    // Close when clicking outside the modal
    document.getElementById('statistikModal').addEventListener('click', function(e) {
      if (e.target === this) {
        closeStatistikModal();
      }
    });

    // Close when pressing Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeStatistikModal();
      }
    });
  });

  function closeStatistikModal() {
    const statistikModal = document.getElementById('statistikModal');
    statistikModal.style.display = 'none';
  }

  function confirmStatistik() {
    closeStatistikModal();
    alert("Statistik telah dikonfirmasi.");
  }
});

// Letakkan kode ini di bawah script.js saat ini.
// Jika script.js sudah ada di dalam index.html, maka fungsi ini akan otomatis dipanggil oleh onclick di HTML.
