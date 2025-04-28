// function updateScale() {
//     const viewport = document.querySelector('.viewport');
//     const windowWidth = window.innerWidth;
//     const referenceWidth = 1100; // Chiều rộng tham chiếu

//     // Chỉ scale khi màn hình nhỏ hơn 1100
//     if (windowWidth <= 1100) {
//       // Tính tỷ lệ scale chỉ dựa trên chiều rộng
//       const scale = windowWidth / referenceWidth;
//       viewport.style.transform = `scale(${scale})`;

//       // Lấy chiều cao thực tế sau scale
//       const scaledHeight = viewport.getBoundingClientRect().height * scale;

//       // Gán chiều cao cho body và html để vừa khít
//       document.body.style.height = `${scaledHeight}px`;
//       document.documentElement.style.height = `${scaledHeight}px`;
//     } else {
//       viewport.style.transform = 'scale(1)';
//       document.body.style.height = 'auto'; // Chiều cao mặc định khi không scale
//       document.documentElement.style.height = 'auto';
//     }
//   }

//   // Gọi hàm updateScale khi tải trang
//   window.addEventListener('load', updateScale);
//   // Cập nhật scale khi thay đổi kích thước cửa sổ
//   window.addEventListener('resize', updateScale);



function adjustViewport() {
  const viewport = document.querySelector('meta[name="viewport"]');
  const windowWidth = window.innerWidth;

  if (windowWidth <= 1200) {
    // Tính tỷ lệ scale dựa trên chiều rộng màn hình so với 1200px
    const scale = windowWidth / 1200;
    debugger;
    // Đặt viewport width=1200 và initial-scale để tự động thu nhỏ
    viewport.setAttribute('content', `width=1200, initial-scale=${scale}, user-scalable=no`);
  } else {
    // Màn hình > 768px, sử dụng viewport mặc định
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, user-scalable=no');
  }
}

// Gọi hàm khi tải trang và khi thay đổi kích thước màn hình
// window.addEventListener('resize', adjustViewport);
window.addEventListener('load', adjustViewport);

// Debounce để giới hạn tần suất gọi adjustViewport
// function debounce(func, wait) {
//   let timeout;
//   return function executedFunction(...args) {
//     const later = () => {
//       clearTimeout(timeout);
//       func(...args);
//     };
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//   };
// }

// // Gắn sự kiện load để chạy khi trang tải
// window.addEventListener('load', adjustViewport);

// // Gắn sự kiện resize với debounce để tránh gọi liên tục
// const debouncedAdjustViewport = debounce(adjustViewport, 100);
// window.addEventListener('resize', debouncedAdjustViewport);




// function adjustViewport() {
//   const viewport = document.querySelector('meta[name="viewport"]');
//   const windowWidth = window.innerWidth;

//   // Nếu màn hình <= 768px, đặt viewport width=1200
//   if (windowWidth <= 768) {
//     viewport.setAttribute('content', 'width=1200, initial-scale=1.0');
//   } else {
//     // Ngược lại, sử dụng viewport mặc định
//     viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
//   }
// }
// // Gọi hàm khi tải trang và khi thay đổi kích thước màn hình
// window.addEventListener('resize', adjustViewport);
// adjustViewport();