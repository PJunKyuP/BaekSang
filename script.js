// Portfolio Data - Complete Collection (Street + Portrait + Reportage)
const PORTFOLIO_DATA = [
  // 1. Street
  {
    id: '1',
    url: 'asset/Street/1.jpg',
    thumbnail: 'asset/Street/1.jpg',
    title: 'Street I',
    category: 'Street',
    year: '2024',
    location: 'Seoul, Korea',
    camera: 'Ricoh GR IIIx',
    description: '도시의 일상 속에서 발견한 특별한 순간. 거리는 끊임없이 변화하는 살아있는 무대입니다.',
    gallery: [
      'asset/Street/2.jpg',
      'asset/Street/3.jpg'
    ]
  },
  // 2. Portrait
  {
    id: '2',
    url: 'asset/Portrait/1.jpg',
    thumbnail: 'asset/Portrait/1.jpg',
    title: 'Portrait I',
    category: 'Portrait',
    year: '2024',
    location: 'Seoul, Korea',
    camera: 'Leica M11',
    description: '인물의 내면을 포착하는 순간. 빛과 그림자가 만들어내는 깊이 있는 표현을 담았습니다.',
    gallery: [
      'asset/Portrait/2.jpg',
      'asset/Portrait/3.jpg'
    ]
  },
  // 3. Street
  {
    id: '3',
    url: 'asset/Street/2.jpg',
    thumbnail: 'asset/Street/2.jpg',
    title: 'Street II',
    category: 'Street',
    year: '2024',
    location: 'Seoul, Korea',
    camera: 'Leica M11',
    description: '거리의 빛과 그림자, 그리고 그 사이를 오가는 사람들의 이야기를 담았습니다.',
    gallery: [
      'asset/Street/1.jpg',
      'asset/Street/3.jpg'
    ]
  },
  // 4. Portrait
  {
    id: '4',
    url: 'asset/Portrait/2.jpg',
    thumbnail: 'asset/Portrait/2.jpg',
    title: 'Portrait II',
    category: 'Portrait',
    year: '2024',
    location: 'Seoul, Korea',
    camera: 'Canon R5',
    description: '자연스러운 순간 속에서 발견한 아름다움. 사람의 진실된 모습을 카메라에 담습니다.',
    gallery: [
      'asset/Portrait/3.jpg',
      'asset/Portrait/4.JPG'
    ]
  },
  // 5. Street
  {
    id: '5',
    url: 'asset/Street/3.jpg',
    thumbnail: 'asset/Street/3.jpg',
    title: 'Street III',
    category: 'Street',
    year: '2024',
    location: 'Seoul, Korea',
    camera: 'Fujifilm X100V',
    description: '스트리트 포토그래피는 순간을 포착하는 예술. 일상의 찰나를 영원으로 만듭니다.',
    gallery: [
      'asset/Street/4.JPG',
      'asset/Street/5.JPG'
    ]
  },
  // 6. Portrait
  {
    id: '6',
    url: 'asset/Portrait/3.jpg',
    thumbnail: 'asset/Portrait/3.jpg',
    title: 'Portrait III',
    category: 'Portrait',
    year: '2024',
    location: 'Seoul, Korea',
    camera: 'Fujifilm GFX 100S',
    description: '사람과 공간, 그리고 시간이 만들어내는 이야기를 하나의 프레임에 담았습니다.',
    gallery: [
      'asset/Portrait/5.JPG',
      'asset/Portrait/6.JPG'
    ]
  },
  // 7. Reportage
  {
    id: '7',
    url: 'asset/Reportage/5.jpg',
    thumbnail: 'asset/Reportage/5.jpg',
    title: 'Reportage',
    category: 'Reportage',
    year: '2024',
    location: 'Seoul, Korea',
    camera: 'Sony A7R V',
    description: '현장에서 마주한 순간의 진실. 다큐멘터리적 시선으로 기록한 우리 시대의 이야기입니다.',
    gallery: [
      'asset/Reportage/1.jpg',
      'asset/Reportage/2.jpg',
      'asset/Reportage/3.jpg',
      'asset/Reportage/4.jpg',
      'asset/Reportage/6.jpg',
      'asset/Reportage/7.jpg',
      'asset/Reportage/8.jpg'
    ]
  },
  // 8. Street
  {
    id: '8',
    url: 'asset/Street/4.JPG',
    thumbnail: 'asset/Street/4.JPG',
    title: 'Street IV',
    category: 'Street',
    year: '2024',
    location: 'Seoul, Korea',
    camera: 'Sony A7 III',
    description: '도시 풍경 속에 숨겨진 이야기들. 렌즈를 통해 발견하는 새로운 시각.',
    gallery: [
      'asset/Street/6.JPG',
      'asset/Street/7.JPG'
    ]
  },
  // 9. Portrait
  {
    id: '9',
    url: 'asset/Portrait/4.JPG',
    thumbnail: 'asset/Portrait/4.JPG',
    title: 'Portrait IV',
    category: 'Portrait',
    year: '2024',
    location: 'Seoul, Korea',
    camera: 'Nikon Z7 II',
    description: '표정과 몸짓이 만들어내는 이야기. 한 순간의 감정을 영원히 기록합니다.',
    gallery: [
      'asset/Portrait/7.jpg',
      'asset/Portrait/8.jpg'
    ]
  },
  // 10. Street
  {
    id: '10',
    url: 'asset/Street/5.JPG',
    thumbnail: 'asset/Street/5.JPG',
    title: 'Street V',
    category: 'Street',
    year: '2024',
    location: 'Seoul, Korea',
    camera: 'Canon EOS R6',
    description: '움직임과 정적이 공존하는 거리. 시간의 흐름을 하나의 프레임에 담다.',
    gallery: [
      'asset/Street/8.JPG',
      'asset/Street/1.jpg'
    ]
  },
  // 11. Portrait
  {
    id: '11',
    url: 'asset/Portrait/5.JPG',
    thumbnail: 'asset/Portrait/5.JPG',
    title: 'Portrait V',
    category: 'Portrait',
    year: '2024',
    location: 'Seoul, Korea',
    camera: 'Sony A1',
    description: '진실된 감정의 순간. 렌즈를 통해 마주하는 인간의 본질.',
    gallery: [
      'asset/Portrait/1.jpg',
      'asset/Portrait/10.JPG'
    ]
  },
  // 12. Street
  {
    id: '12',
    url: 'asset/Street/6.JPG',
    thumbnail: 'asset/Street/6.JPG',
    title: 'Street VI',
    category: 'Street',
    year: '2024',
    location: 'Seoul, Korea',
    camera: 'Nikon Z6 II',
    description: '일상의 아름다움을 재발견하다. 평범한 순간 속의 비범함.',
    gallery: [
      'asset/Street/2.jpg',
      'asset/Street/4.JPG'
    ]
  },
  // 13. Portrait
  {
    id: '13',
    url: 'asset/Portrait/6.JPG',
    thumbnail: 'asset/Portrait/6.JPG',
    title: 'Portrait VI',
    category: 'Portrait',
    year: '2024',
    location: 'Seoul, Korea',
    camera: 'Hasselblad X1D II',
    description: '빛이 만들어내는 아름다운 실루엣. 인물 사진의 새로운 해석.',
    gallery: [
      'asset/Portrait/2.jpg',
      'asset/Portrait/4.JPG'
    ]
  },
  // 14. Street
  {
    id: '14',
    url: 'asset/Street/7.JPG',
    thumbnail: 'asset/Street/7.JPG',
    title: 'Street VII',
    category: 'Street',
    year: '2024',
    location: 'Seoul, Korea',
    camera: 'Leica Q2',
    description: '거리는 삶의 무대이자 예술의 캔버스. 매 순간이 새로운 작품이 됩니다.',
    gallery: [
      'asset/Street/3.jpg',
      'asset/Street/5.JPG'
    ]
  },
  // 15. Portrait
  {
    id: '15',
    url: 'asset/Portrait/7.jpg',
    thumbnail: 'asset/Portrait/7.jpg',
    title: 'Portrait VII',
    category: 'Portrait',
    year: '2024',
    location: 'Seoul, Korea',
    camera: 'Canon R3',
    description: '시선이 말하는 이야기. 눈빛에 담긴 수많은 감정을 포착합니다.',
    gallery: [
      'asset/Portrait/6.JPG',
      'asset/Portrait/3.jpg'
    ]
  },
  // 16. Street
  {
    id: '16',
    url: 'asset/Street/8.JPG',
    thumbnail: 'asset/Street/8.JPG',
    title: 'Street VIII',
    category: 'Street',
    year: '2024',
    location: 'Seoul, Korea',
    camera: 'Fujifilm X-T4',
    description: '도시의 리듬과 사람들의 이야기. 스트리트 포토그래피의 진수를 담아냅니다.',
    gallery: [
      'asset/Street/6.JPG',
      'asset/Street/7.JPG'
    ]
  },
  // 17. Portrait
  {
    id: '17',
    url: 'asset/Portrait/8.jpg',
    thumbnail: 'asset/Portrait/8.jpg',
    title: 'Portrait VIII',
    category: 'Portrait',
    year: '2024',
    location: 'Seoul, Korea',
    camera: 'Pentax 645Z',
    description: '자연스러운 표정 속에 담긴 진심. 꾸밈없는 아름다움을 기록합니다.',
    gallery: [
      'asset/Portrait/1.jpg',
      'asset/Portrait/5.JPG'
    ]
  },
  // 18. Portrait
  {
    id: '18',
    url: 'asset/Portrait/10.JPG',
    thumbnail: 'asset/Portrait/10.JPG',
    title: 'Portrait IX',
    category: 'Portrait',
    year: '2024',
    location: 'Seoul, Korea',
    camera: 'Phase One XF',
    description: '인물 사진의 완성. 기술과 감성이 만나 만들어내는 예술적 순간.',
    gallery: [
      'asset/Portrait/7.jpg',
      'asset/Portrait/8.jpg'
    ]
  }
];

// App State
const app = {
  currentView: 'GALLERY',
  selectedPhoto: null,
  
  // Initialize the app
  init() {
    this.renderGallery();
    this.setupEventListeners();
  },
  
  // Render Gallery
  renderGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    
    PORTFOLIO_DATA.forEach((photo) => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      item.onclick = () => this.openModal(photo);
      
      item.innerHTML = `
        <div class="gallery-item-image-wrapper">
          <img src="${photo.thumbnail}" alt="${photo.title}" loading="lazy">
        </div>
        <div class="gallery-item-overlay"></div>
        <div class="gallery-item-info">
          <div class="gallery-item-info-box">
            <span class="gallery-item-category">${photo.category}</span>
            <span class="gallery-item-title">${photo.title}</span>
          </div>
        </div>
      `;
      
      galleryGrid.appendChild(item);
    });
  },
  
  // Show View
  showView(viewName) {
    this.currentView = viewName;
    
    // Hide all views
    document.getElementById('gallery-view').classList.add('hidden');
    document.getElementById('about-view').classList.add('hidden');
    document.getElementById('contact-view').classList.add('hidden');
    
    // Show selected view
    if (viewName === 'GALLERY') {
      document.getElementById('gallery-view').classList.remove('hidden');
    } else if (viewName === 'ABOUT') {
      document.getElementById('about-view').classList.remove('hidden');
    } else if (viewName === 'CONTACT') {
      document.getElementById('contact-view').classList.remove('hidden');
    }
    
    // Update nav active state
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.dataset.view === viewName) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  
  // Open Modal
  openModal(photo) {
    this.selectedPhoto = photo;
    const modal = document.getElementById('photo-modal');
    
    // Set photo data
    document.getElementById('modal-image').src = photo.url;
    document.getElementById('modal-image').alt = photo.title;
    document.getElementById('modal-category').textContent = photo.category + ' Collection';
    document.getElementById('modal-title').textContent = photo.title;
    document.getElementById('modal-year').textContent = photo.year;
    document.getElementById('modal-description').textContent = photo.description;
    document.getElementById('modal-location').textContent = photo.location;
    document.getElementById('modal-year-detail').textContent = photo.year;
    document.getElementById('modal-category-detail').textContent = photo.category;
    document.getElementById('modal-camera').textContent = photo.camera;
    document.getElementById('modal-license').textContent = `© ${photo.year} Baek-Sang. All rights reserved.\nLimited edition prints available upon inquiry.`;
    
    // Render gallery if exists
    const gallerySection = document.getElementById('modal-gallery-section');
    const galleryGrid = document.getElementById('modal-gallery-grid');
    
    if (photo.gallery && photo.gallery.length > 0) {
      gallerySection.style.display = 'flex';
      document.getElementById('modal-gallery-count').textContent = `(${photo.gallery.length} images)`;
      
      galleryGrid.innerHTML = '';
      photo.gallery.forEach((imgUrl) => {
        const img = document.createElement('img');
        img.src = imgUrl;
        img.alt = `${photo.title} detail`;
        galleryGrid.appendChild(img);
      });
    } else {
      gallerySection.style.display = 'none';
    }
    
    // Render related photos
    this.renderRelatedPhotos(photo);
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Scroll modal to top
    const scrollContainer = modal.querySelector('.modal-scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
  },
  
  // Close Modal
  closeModal() {
    const modal = document.getElementById('photo-modal');
    modal.classList.add('closing');
    
    setTimeout(() => {
      modal.classList.remove('active', 'closing');
      document.body.style.overflow = '';
      this.selectedPhoto = null;
    }, 300);
  },
  
  // Next Photo
  nextPhoto() {
    if (!this.selectedPhoto) return;
    
    const currentIndex = PORTFOLIO_DATA.findIndex(p => p.id === this.selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % PORTFOLIO_DATA.length;
    this.openModal(PORTFOLIO_DATA[nextIndex]);
  },
  
  // Previous Photo
  prevPhoto() {
    if (!this.selectedPhoto) return;
    
    const currentIndex = PORTFOLIO_DATA.findIndex(p => p.id === this.selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + PORTFOLIO_DATA.length) % PORTFOLIO_DATA.length;
    this.openModal(PORTFOLIO_DATA[prevIndex]);
  },
  
  // Render Related Photos
  renderRelatedPhotos(photo) {
    const relatedGrid = document.getElementById('modal-related-grid');
    if (!relatedGrid) return;
    
    // Filter related photos (same category, excluding current)
    let relatedPhotos = PORTFOLIO_DATA
      .filter(p => p.category === photo.category && p.id !== photo.id)
      .slice(0, 3);
    
    // Fallback if no related photos in same category
    if (relatedPhotos.length === 0) {
      relatedPhotos = PORTFOLIO_DATA
        .filter(p => p.id !== photo.id)
        .slice(0, 3);
    }
    
    relatedGrid.innerHTML = '';
    
    relatedPhotos.forEach((related) => {
      const item = document.createElement('div');
      item.className = 'modal-related-item';
      item.onclick = (e) => {
        e.stopPropagation();
        this.openModal(related);
      };
      
      item.innerHTML = `
        <div class="modal-related-image-wrapper">
          <img src="${related.thumbnail}" alt="${related.title}">
          <div class="modal-related-image-overlay"></div>
        </div>
        <h4>${related.title}</h4>
        <p>${related.category}</p>
      `;
      
      relatedGrid.appendChild(item);
    });
  },
  
  // Setup Event Listeners
  setupEventListeners() {
    // Modal backdrop click
    const modal = document.getElementById('photo-modal');
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.closeModal();
      }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.selectedPhoto) return;
      
      if (e.key === 'Escape') {
        this.closeModal();
      } else if (e.key === 'ArrowRight') {
        this.nextPhoto();
      } else if (e.key === 'ArrowLeft') {
        this.prevPhoto();
      }
    });
    
    // Form submit
    const form = document.querySelector('.contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! This is a demo, so your message was not actually sent.');
      });
    }
  }
};

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => app.init());
} else {
  app.init();
}
