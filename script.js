document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  const closeBtn = document.querySelector('.close-modal');
  const thumbs = document.querySelectorAll('.video-thumb');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const videoSrc = thumb.getAttribute('data-video');
      modalVideo.src = videoSrc;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalVideo.pause();
    modalVideo.src = '';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalVideo.pause();
      modalVideo.src = '';
    }
  });

  const featuredVideoContainer = document.querySelector(".featured-video-container");
  const featuredVideo = document.querySelector(".featured-video");

  // Create play button overlay
  const playButton = document.createElement("button");
  playButton.classList.add("play-btn-overlay");
  playButton.innerHTML = "▶";
  featuredVideoContainer.appendChild(playButton);

  // Play video on button click
  playButton.addEventListener("click", () => {
    featuredVideo.play();
    playButton.style.display = "none"; // Hide the button after playing
  });

  // Show play button when video ends
  featuredVideo.addEventListener("ended", () => {
    playButton.style.display = "flex";
  });

  // Create view button overlay
  const viewButton = document.createElement('button');
  viewButton.classList.add('view-btn-overlay');
  viewButton.textContent = '▶ Ko‘rish';
  featuredVideoContainer.appendChild(viewButton);

  // Play video on button click
  viewButton.addEventListener('click', () => {
    featuredVideo.play();
    viewButton.style.display = 'none'; // Hide the button after playing
  });

  // Show view button when video ends
  featuredVideo.addEventListener('ended', () => {
    viewButton.style.display = 'flex';
  });

  const modalPopular = document.getElementById('videoModalPopular');
  const modalVideoPopular = document.getElementById('modalVideoPopular');
  const closeBtnPopular = modalPopular.querySelector('.close-modal');
  const preview = document.querySelector('.popular-video');

  preview.addEventListener('click', () => {
    const videoSrc = preview.getAttribute('data-video');
    modalVideoPopular.src = videoSrc;
    modalPopular.style.display = 'flex';
  });

  closeBtnPopular.addEventListener('click', () => {
    modalPopular.style.display = 'none';
    modalVideoPopular.pause();
    modalVideoPopular.src = '';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modalPopular) {
      modalPopular.style.display = 'none';
      modalVideoPopular.pause();
      modalVideoPopular.src = '';
    }
  });

  document.querySelector('.featured-video .play-btn-large').addEventListener('click', () => {
    const modal = document.getElementById('videoModalFeatured');
    const video = document.getElementById('modalVideoFeatured');
    modal.style.display = 'block';
    video.play();
  });

  document.querySelector('#videoModalFeatured .close-modal').addEventListener('click', () => {
    const modal = document.getElementById('videoModalFeatured');
    const video = document.getElementById('modalVideoFeatured');
    modal.style.display = 'none';
    video.pause();
    video.currentTime = 0;
  });
});