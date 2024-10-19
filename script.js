// script.js
document.addEventListener('DOMContentLoaded', function () {
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const articleId = this.getAttribute('data-article');
            const likeCountElement = document.getElementById(`like-count-${articleId}`);
            let currentCount = parseInt(likeCountElement.textContent);

            // Toggle like status and update the count
            currentCount += 1;
            likeCountElement.textContent = currentCount;
        });
    });
});
