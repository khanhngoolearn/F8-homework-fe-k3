var content = "Julia Morgan đã dành cả đời mình để theo đuổi đam mê kiến trúc. Bà là người phụ nữ đầu tiên được nhận vào trường mỹ thuật danh tiếng Beaux-Arts de Paris cũng như trở thành nữ KTS đầu tiên được cấp phép tại California.";
content = `<span>${content}</span>`;
content = content.replaceAll(" "," </span> <span>" );
// console.log(content);
var index = 0;
setInterval(() => {
    var letterPresent = content.charAt(index);
    var letterNext = content.charAt(index + 1);
    if (letterPresent === '>' && letterNext !== ' ') {
        var AnimateContent = content.slice(0, index) + ` class="highlight"` + content.slice(index);
        document.body.innerHTML = AnimateContent;
    }
    index++;
    if (index === content.length) {
        index = 0;
    }
}, 30);
document.write(content);