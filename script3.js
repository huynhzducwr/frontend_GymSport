const womensLink = document.getElementById('hoverWomens');
const cateHover = document.getElementById('cateHover');

womensLink.addEventListener('mouseenter', function() {
    cateHover.style.display = 'block';
});

womensLink.addEventListener('mouseleave', function() {
    setTimeout(function() {
        if (!cateHover.matches(':hover')) {
            cateHover.style.display = 'none';
        }
    }, 200); // Đợi 200ms trước khi ẩn
});

cateHover.addEventListener('mouseleave', function() {
    cateHover.style.display = 'none';
});
