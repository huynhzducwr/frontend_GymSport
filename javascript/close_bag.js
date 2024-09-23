// Chọn biểu tượng giỏ hàng
const shopIcon = document.querySelector('.fa-solid.fa-shop');
const bag = document.querySelector('.Bag_order');
const closeIcon = document.querySelector('.fa-solid.fa-xmark');


shopIcon.addEventListener('click', function() {
 

  
    if (bag.style.display === 'none' || bag.style.display === '') {
        bag.style.display = 'block';
    } else {
        bag.style.display = 'none';
    }
});
closeIcon.addEventListener('mouseenter',function(){
    closeIcon.style.cursor ='pointer';
})

// Sự kiện click cho biểu tượng đóng
closeIcon.addEventListener('click', function() {
    bag.style.display = 'none'; // Ẩn giỏ hàng
});
