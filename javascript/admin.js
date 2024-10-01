// Lấy danh sách các mục <li> từ HTML
const menuItems = document.querySelectorAll('#menu-list li');

// Lấy phần tử main-content
const mainContent = document.getElementById('main-content');

// Định nghĩa nội dung cho từng trang
const pages = {
    'dashboard': {
        title: 'Dashboard',
        content: `
            <h2>Chào mừng đến Dashboard</h2>
            <p>Đây là trang quản lý Dashboard.</p>
        `
    },
    'nguoi-dung': {
        title: 'Người dùng',
        content: `
            <h2>Quản lý Người dùng</h2>
            <p>Đây là trang quản lý người dùng.</p>
        `
    },
    'san-pham': {
        title: 'Sản phẩm',
        content: `
            <h2>Quản lý Sản phẩm</h2>
            <p>Đây là trang quản lý sản phẩm.</p>
        `
    },
    'don-hang': {
        title: 'Đơn hàng',
        content: `
            <h2>Quản lý Đơn hàng</h2>
            <p>Đây là trang quản lý đơn hàng.</p>
        `
    },
};

// Thêm sự kiện click cho mỗi mục <li>
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Lấy giá trị của thuộc tính data-page
        const page = item.getAttribute('data-page');

        // Cập nhật nội dung phần main-content
        mainContent.querySelector('header h1').textContent = pages[page].title;
        mainContent.querySelector('.content').innerHTML = pages[page].content;
    });
});
