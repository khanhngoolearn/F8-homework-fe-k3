var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var boldBtn = $('#bold-btn');
var underlineBtn = $('#underline-btn');
var italicBtn = $('#italic-btn');
var colorBtn = $('#color-btn');
var content = $('#content');
var characterCount = $('.count-character').querySelector('span');
var wordCount = $('.count-words').querySelector('span');
var newBtn = $('.new-btn');
var txtBtn = $('.txt-btn');
var pdfBtn = $('.pdf-btn');
var fileName = $('#file-name');


// Nhập text 
content.addEventListener('input', () => {
    var text = content.innerText;
    // set mặc định kí tự và chữ bằng 0
    wordCount.innerText = 0;
    characterCount.innerText = 0;
    // lấy ra mảng chứa các kí tự 
    var characters = text.split('');
    // lặp qua mảng để tính kí tự bằng index
    characters.forEach((char, index) => {
        characterCount.innerText = `${index + 1}`;
    });
    // lấy ra mảng chứa các từ 
    var words = text.trim().replaceAll('\n',' ').split(' ');
    words.forEach((word) => {
        // lọc qua mảng nếu mảng không trả về kí tự rỗng thì wordCount + 1
        if (word !== '') {
            wordCount.innerText++;
        }
    });
});

boldBtn.onclick = () => {
    document.execCommand("bold");
};
underlineBtn.onclick = () => {
    document.execCommand("underline");
};
italicBtn.onclick = () => {
    document.execCommand("italic");
};
colorBtn.oninput = () => {
    document.execCommand("forecolor", false, colorBtn.value);
};

newBtn.onclick = () => {
    content.innerText = '';
    wordCount.innerText = 0;
    characterCount.innerText = 0;
};

txtBtn.onclick = () => {
    let a = document.createElement("a");
    let blob = new Blob([content.innerText]);
    console.log(blob);
    let dataUrl = URL.createObjectURL(blob);
    console.log(dataUrl);
    a.href = dataUrl;
    a.download = fileName.value + ".txt";
    a.click();
};

pdfBtn.onclick = () => {
    html2pdf().from(content).save(fileName.value);
};