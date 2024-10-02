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
        <table>
            <thead>
                <tr>
                    <th>UserID</th>
                    <th>RoleName</th>
                    <th>Email</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>PasswordHash</th>
                    <th>CreatedAt</th>
                    <th>LastLogin</th>
                    <th>IsActive</th>
                    <th>Update</th>
                </tr>
            </thead>
        <tbody>
            
       
            <tr>
                <td>1</td>
                <td>Admin</td>
                <td>admin@example.com</td>
                <td>thanh</td>
                <td>Dat</td>
                <td>abc123</td>
                <td>2024-10-01</td>
                <td>2024-10-02</td>
                <td>Yes</td>
                <td><button class="logout-btn">Cập nhật</button></td>
            </tr>

            <tr>
                <td>1</td>
                <td>Admin</td>
                <td>admin@example.com</td>
                <td>thanh</td>
                <td>Dat</td>
                <td>abc123</td>
                <td>2024-10-01</td>
                <td>2024-10-02</td>
                <td>Yes</td>
                 <td><button class="logout-btn">Cập nhật</button></td>
            </tr>

        </tbody>
    </table>


    <style>
    table {
    width: 100%;
    border-collapse: collapse;
    }

    th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
    }
    th {
    background-color: #f2f2f2;
    }/
    </style>
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
            <p>Đy là trang quản lý đơn hàng.</p>
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
