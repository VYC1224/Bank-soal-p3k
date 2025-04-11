// Event listener untuk tombol Generate Gambar
document.getElementById('generateImageBtn').addEventListener('click', () => {
  // URL server Stable Diffusion
  const stableDiffusionUrl = 'http://127.0.0.1:7860';
  
  // Buka URL di tab baru
  window.open(stableDiffusionUrl, '_blank');
});