const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        const target = tab.getAttribute('data-target');

        contents.forEach(content => {
            content.classList.remove('visible');
            setTimeout(() => {
                content.style.display = 'none';
            }, 500);
        });

        const selectedContent = document.getElementById(target);
        setTimeout(() => {
            selectedContent.style.display = 'block';
            selectedContent.classList.add('visible');
        }, 500);
    });
});
