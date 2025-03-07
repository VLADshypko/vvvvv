document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Ви додали товар до кошика!');
        });
    });
});

window.scrollTo(0, document.body.scrollHeight);
    
document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    const cartLink = document.getElementById('cart-link');

    cartLink.addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('cart').classList.toggle('active');
    });

    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            const product = {
                id: id,
                name: button.parentElement.querySelector('h3').textContent,
                price: parseFloat(button.parentElement.querySelector('.price').textContent.replace('$', ''))
            };
            addToCart(product);
        });
    });

    function addToCart(product) {
        cart.push(product);
        updateCart();
    }

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price} грн`;
            cartItems.appendChild(li);
            total += item.price;
        });
        cartTotal.textContent = total;
        cartCount.textContent = cart.length;
    }
});
