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

  const nomorWa = "6281234567890"; // Ganti ini dengan nomor tujuan WhatsApp yang benar
  const pesan = `Halo, saya ingin memberikan feedback untuk soal:\n\n${feedbackText}`;
  const url = `https://wa.me/${nomorWa}?text=${encodeURIComponent(pesan)}`;

  window.open(url, '_blank');

  document.getElementById("modalFeedback").style.display = "none";
  document.getElementById("feedbackInput").value = "";
}

// Letakkan kode ini di bawah script.js saat ini.
// Jika script.js sudah ada di dalam index.html, maka fungsi ini akan otomatis dipanggil oleh onclick di HTML.
