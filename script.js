document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Ви додали товар до кошика!');
        });
    });
});

window.scrollTo(0, document.body.scrollHeight);
    
