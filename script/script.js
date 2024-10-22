// Get all required elements
const heart1 = document.getElementById('heart1');
const heart2 = document.getElementById('heart2');
const addToCartButtons = document.querySelectorAll('.btn button:nth-child(2)');
const buyNowButtons = document.querySelectorAll('.btn button:nth-child(1)');
const cards = document.querySelectorAll('.card');

// Shopping cart array to store items
let shoppingCart = [];

// Toggle heart animation
function toggleHeart(heartElement) {
    heartElement.classList.toggle('active');
}

// Add click event listeners to heart icons
heart1.addEventListener('click', () => toggleHeart(heart1));
heart2.addEventListener('click', () => toggleHeart(heart2));

// Function to handle adding items to cart
function addToCart(itemName, price) {
    const item = {
        name: itemName,
        price: price
    };
    shoppingCart.push(item);
    
    // Show notification
    showNotification(`${itemName} added to cart!`);
    
    // Update cart count if you have a cart counter in your HTML
    updateCartCount();
}

// Function to show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #db1d4b;
        color: white;
        padding: 15px;
        border-radius: 5px;
        z-index: 1000;
        animation: fadeIn 0.5s, fadeOut 0.5s 2.5s;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Function to update cart count
function updateCartCount() {
    // If you have a cart counter element in your HTML, update it here
    console.log(`Cart items: ${shoppingCart.length}`);
}

// Add hover effects for cards
cards.forEach(card => {
    const img = card.querySelector('img');
    const price = card.querySelector('.price');
    
    card.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
        price.style.transform = 'scale(1.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        price.style.transform = 'scale(1)';
    });
});

// Add click events to Add Cart buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        const itemName = card.querySelector('h2').textContent;
        const price = card.querySelector('.price').textContent;
        addToCart(itemName, price);
    });
});

// Add click events to Buy Now buttons
buyNowButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        const itemName = card.querySelector('h2').textContent;
        const price = card.querySelector('.price').textContent;
        showNotification(`Processing purchase for ${itemName}...`);
        // Here you would typically redirect to a checkout page
        // window.location.href = '/checkout';
    });
});

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-20px); }
    }
`;
document.head.appendChild(style);