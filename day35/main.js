var button = document.querySelector('button');
var action = document.querySelector('.action');
var result = document.querySelector('.result');

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'vi-VN';

button.addEventListener('click', () => {
    action.innerHTML = 'Hãy nói nội dung bạn muốn';
    action.classList.remove('green-text');
    action.classList.add('red-text');
    result.style.display = 'none';
    recognition.start();
});

recognition.onresult = (e) => {
    const searchContent = e.results[0][0].transcript.toLowerCase();

    recognition.stop();
    action.innerHTML = 'Đã nói xong. Hy vọng kết quả như ý bạn';
    action.classList.remove('red-text');
    action.classList.add('green-text');
    result.style.display = 'block';
    result.innerHTML = `Đang thực hiện: ${searchContent}`;

    if (searchContent.includes('chỉ đường vinhomes smartcity tây mỗ') || searchContent.includes('chỉ đường tới vinhomes smartcity tây mỗ') || searchContent.includes('tới vinhomes smartcity tây mỗ') || (searchContent.includes('đường tới vinhomes smartcity tây mỗ'))) {
        setTimeout(() => {
            window.open('https://www.google.com/maps/search/Vinhomes+Smartcity+T%C3%A2y+M%E1%BB%97/@21.00392,105.7351743,16z?hl=vi-VN&entry=ttu', '_blank');
            result.innerHTML = 'Đã thực hiện xong';
        }, 1100)
    } else if (searchContent.includes('bài hát ai chung tình được mãi') || searchContent.includes('mở bài hát ai chung tình được mãi') || searchContent.includes('nghe bài hát ai chung tình được mãi')) {
        setTimeout(() => {
            window.open('https://zingmp3.vn/tim-kiem/tat-ca?q=ai%20chung%20t%C3%ACnh%20%C4%91%C6%B0%E1%BB%A3c%20m%C3%A3i', '_blank');
            result.innerHTML = 'Đã thực hiện xong';
        }, 1100)
    } else if (searchContent.includes('video ai chung tình được mãi') || searchContent.includes('mở video ai chung tình được mãi') || searchContent.includes('xem video ai chung tình được mãi')) {
        setTimeout(() => {
            window.open('https://www.youtube.com/watch?v=eZpJdO22jZ0', '_blank');
            result.innerHTML = 'Đã thực hiện xong';
        }, 1100)
    } else if (searchContent.includes('facebook')) {
        setTimeout(() => {
            window.open('https://www.facebook.com', '_blank');
            result.innerHTML = 'Đã thực hiện xong';
        }, 1100)
    } else if (searchContent.includes('youtube')) {
        setTimeout(() => {
            window.open('https://www.youtube.com', '_blank');
            result.innerHTML = 'Đã thực hiện xong';
        }, 1100)
    } else if (searchContent.includes('google drive')) {
        setTimeout(() => {
            window.open('https://www.google.com/intl/vi_VN/drive/', '_blank');
            result.innerHTML = 'Đã thực hiện xong';
        }, 1100)
    } else if (searchContent.includes('google maps') || searchContent.includes('bản đồ')) {
        setTimeout(() => {
            window.open('https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN&entry=ttu', '_blank');
            result.innerHTML = 'Đã thực hiện xong';
        }, 1100)
    } else if (searchContent.includes('google')) {
        setTimeout(() => {
            window.open('https://www.google.com', '_blank');
            result.innerHTML = 'Đã thực hiện xong';
        }, 1100)
    } else {
        setTimeout(() => {
            result.innerHTML = 'Không thực hiện được yêu cầu';
        }, 1100);
    };
}