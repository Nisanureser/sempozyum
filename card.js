document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        const overlay = card.querySelector('.overlay');
        const dataImg = card.querySelector('.data_img');

        if (overlay.style.opacity === '1') {
            overlay.style.opacity = '0';
            dataImg.style.bottom = '0%';
            dataImg.style.opacity = '0';
        } else {
            overlay.style.opacity = '1';
            dataImg.style.bottom = '40%';
            dataImg.style.opacity = '1';
        }
    });
});