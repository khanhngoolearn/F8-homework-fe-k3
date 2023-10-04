var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

// Element variables
var list = $('.list');
// lấy tất cả các item trong list
var items = Array.from(list.children);
// Lấy ra các item bài học
var subItems = Array.from( $$('.list-item:not(.list-main-item)'));
// lấy ra các item module
var mainItems = Array.from($$('.list-main-item'));

items.forEach(item => {
    // set attribute draggable to true cho tất cả các item
    item.setAttribute('draggable', 'true');
    // add class dragging cho item được kéo(.dragging được tạo sẵn ở file css), điều này giúp cho khi kéo item sẽ hiện bóng của nó 
    item.addEventListener('dragstart', () => {
        item.classList.add('dragging');
    });
    // khi ngưng kéo thì remove class dragging đi để bóng biến mất 
    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
        // sắp xếp lại thứ tự cho các item 
        handleRoll();
    });
});

items.forEach(item => {
    item.addEventListener('dragover', e => {
        e.preventDefault();
        //lấy item đang được kéo
        const itemDragging = $('.dragging');
        //lấy item khi kéo itemDragging tới
        let target = e.target;
        // lấy khoảng cách từ itemDragging tới chân của list
        let positionTargetItem = target.getBoundingClientRect().bottom;
        // nếu như kéo item xuống dưới chân list thì sẽ thêm item vào cuối list, bước này bổ trở cho insertBefore vì insertBefore không thể thêm phần tử vào sau 
        if (positionTargetItem === 320) {
            list.appendChild(itemDragging)
        }
        // thêm itemDragging vào trước vị trí item kéo tới
        else
        if (target.className === 'list-item' || target.className === 'list-item list-main-item') {
            target.parentElement.insertBefore(itemDragging, target);
        }
        // set lại mảng để các item được đặt đúng theo index
        mainItems = Array.from($$('.list-main-item'));
        subItems = Array.from( $$('.list-item:not(.list-main-item)'));
    })
})
// reset số thứ tự các item
const handleRoll = () => {
    mainItems.forEach((item, index) => {
        item.querySelector('span').innerText = index + 1;
    });
    subItems.forEach((item, index) => {
        item.querySelector('span').innerText = index + 1;
    });
};

handleRoll();
