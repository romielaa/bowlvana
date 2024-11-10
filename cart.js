// Product Configurations
const products = {
    featuredBowls: [
        {
            name: 'Blue Lagoon',
            price: 950.00,
            image: 'assets/images/bluelagoon.png',
            description: 'Açaí blend with strawberry,coconut, chia seeds.',
            calories: 350
        },
        {
            id: 'coral-kiss',
            name: 'Coral Kiss',
            price: 650.00,
            image: 'assets/images/coralkiss.png',
            description: 'Refreshing blend with mango, banana pineapple and blueberry.',
            calories: 350
        },
        {
            id: 'markono',
            name: 'Markono',
            price: 750.00,
            image: 'assets/images/markono.png',
            description: 'Açaí topped with edible flowers, pomegranate and blueberry.',
            calories: 350
        },
        {
            id: 'emerald-dew',
            name: 'Emerald Dew',
            price: 850.00,
            image: 'assets/images/emeralddew.png',
            description: 'Spirulina blend with kiwi, matcha, and flaxseeds.',
            calories: 350
        }
    ],
    quickBowls: [
{
    id: 'merry-berry',
    name: 'Merry Berry',
    price: 900.00,
    image: 'assets/images/merryberry.png',
    description: 'Açaí with granola, sliced banana, and blueberry, coconut flakes and peanut butter.',
    calories: 250,
    bestSeller: false
},
{
    id: 'blue-majik',
    name: 'Blue Majik',
    price: 750.00,
    image: 'assets/images/bluemajik.png',
    description: 'Pure açaí blend topped with blueberry, edible flowers, and coconut flakes.',
    calories: 350,
    bestSeller: false
},
{
    id: 'mystic-moon',
    name: 'Mystic Moon',
    price: 850.00,
    image: 'assets/images/mysticmoon.png',
    description: 'Pure coconut blend topped with coconut flakes, shaved chocolate and chocolate bar.',
    calories: 250,
    bestSeller: false
},
{
    id: 'zen-garden',
    name: 'Zen Garden',
    price: 950.00,
    image: 'assets/images/zengarden.png',
    description: 'Pure açaí blend topped with strawberry, mulberry, edible flowers and balls.',
    calories: 350,
    bestSeller: true
},
{
    id: 'nirvana-bowl',
    name: 'Nirvana Bowl',
    price: 750.00,
    image: 'assets/images/nirvana.png',
    description: 'Pure berry blend topped with blackberry, mint and blueberry.',
    calories: 250,
    bestSeller: false
},
{
    id: 'cosmic-wave',
    name: 'Cosmic Wave',
    price: 850.00,
    image: 'assets/images/cosmicwave.png',
    description: 'Pure Yogurt and berry blend with blackberry and blueberry.',
    calories: 350,
    bestSeller: true
},
{
    id: 'sunset-serenade',
    name: 'Sunset Serenade',
    price: 750.00,
    image: 'assets/images/sunsetserenade.png',
    description: 'Pure mango blend with kiwi, shaved coconut mango cubes.',
    calories: 250,
    bestSeller: false
},
{
    id: 'ocean-pearl',
    name: 'Ocean Pearl',
    price: 750.00,
    image: 'assets/images/oceanpearl.png',
    description: 'Pure Yogurt beryy blend with mango, pecan and blueberry.',
    calories: 350,
    bestSeller: true
},
{
    id: 'violet-mist',
    name: 'Violet Mist',
    price: 850.00,
    image: 'assets/images/violetmist.png',
    description: 'Pure berry blend with raspberry, grapes and blueberry.',
    calories: 250,
    bestSeller: false
},
{
    id: 'berry-breeze',
    name: 'Berry Breeze',
    price: 900.00,
    image: 'assets/images/berrybreeze.png',
    description: 'Pure berry blend with blueberry, edible flower and raspberry.',
    calories: 350,
    bestSeller: false
},
{
    id: 'tropical-trust',
    name: 'Tropical Trust',
    price: 850.00,
    image: 'assets/images/tropicaltrust.png',
    description: 'Pure blue with raspberry, blackberry and blueberries.',
    calories: 250,
    bestSeller: true
},
{
    id: 'moonwave',
    name: 'Moonwave',
    price: 900.00,
    image: 'assets/images/moonwave.png',
    description: 'Açaí with granola, kiwi, coconut flakes, passion and blueberries.',
    calories: 350,
    bestSeller: false
},
{
    id: 'kiwi-kiss',
    name: 'Kiwi Kiss',
    price: 850.00,
    image: 'assets/images/kiwikiss.png',
    description: 'Açaí with nuts, kiwi and blueberries.',
    calories: 250,
    bestSeller: false
},
{
    id: 'mellow-munch',
    name: 'Mellow Munch',
    price: 900.00,
    image: 'assets/images/mellowmunch.png',
    description: 'Pina açaí with nuts and sliced banana.',
    calories: 350,
    bestSeller: false
},
{
    id: 'fig-fizz',
    name: 'Fig Fizz',
    price: 850.00,
    image: 'assets/images/figfrizz.png',
    description: 'Açaí with flaxseed, pumpkin seed and coconut flakes.',
    calories: 250,
    bestSeller: true
},
{
    id: 'dondadda',
    name: 'DONDADDA',
    price: 900.00,
    image: 'assets/images/dondadda.png',
    description: 'Açaí blend with dragonfruit, mulberry and blueberry.',
    calories: 350,
    bestSeller: false
},
{
    id: 'fruity-fluff',
    name: 'Fruity Fluff',
    price: 750.00,
    image: 'assets/images/fruityfluff.png',
    description: 'Açaí blend with strawberry, coconut flakes and blueberries.',
    calories: 250,
    bestSeller: false
},
{
    id: 'choco-charm',
    name: 'Choco Charm',
    price: 750.00,
    image: 'assets/images/chococharm.png',
    description: 'Cocoa blend with chocolate, granola, sliced banana, nuts and blueberries.',
    calories: 350,
    bestSeller: true
},
{
    id: 'matchelo',
    name: 'Matchelo',
    price: 900.00,
    image: 'assets/images/matchelo.png',
    description: 'Matcha blend with edible fruits.',
    calories: 250,
    bestSeller: false
},
{
    id: 'bombom',
    name: 'BOMBOM',
    price: 750.00,
    image: 'assets/images/bombom.png',
    description: 'Açaí blend with edible flower, granola, chocolate and flaxseed.',
    calories: 350,
    bestSeller: false
},
{
    id: 'dawn-delight',
    name: 'Dawn Delight',
    price: 950.00,
    image: 'assets/images/dawndelight.png',
    description: 'Açaí blend with granola, coconut flakes, dragonfruit.',
    calories: 250,
    bestSeller: false
},
{
    id: 'sage-dust',
    name: 'Sage Dust',
    price: 750.00,
    image: 'assets/images/sagedust.png',
    description: 'Matchaberry blend with granola, nuts, banana, coconut flakes.',
    calories: 350,
    bestSeller: true
},
{
    id: 'pitaya',
    name: 'Pitaya',
    price: 900.00,
    image: 'assets/images/pitaya.png',
    description: 'Pitaya blend with granola, kiwi, coconut flakes.',
    calories: 250,
    bestSeller: false
},
{
    id: 'nutty-nova',
    name: 'Nutty Nova',
    price: 850.00,
    image: 'assets/images/nuttynova.png',
    description: 'Pistachio açaí with peanut butter,nuts and yogurt.',
    calories: 350,
    bestSeller: false
}
],
};// Cart state management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to calculate totals
function calculateTotals() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.15; // 15% tax
    const total = subtotal + tax;
    
    return {
        subtotal: subtotal.toFixed(2),
        tax: tax.toFixed(2),
        total: total.toFixed(2)
    };
}

// Function to update totals display
function updateTotalsDisplay() {
    const totals = calculateTotals();
    const priceBreakdown = document.querySelector('.price-breakdown');
    if (priceBreakdown) {
        priceBreakdown.innerHTML = `
            <div class="price-row">
                <span>Subtotal</span>
                <span>J$${totals.subtotal}</span>
            </div>
            <div class="price-row">
                <span>Tax (15%)</span>
                <span>J$${totals.tax}</span>
            </div>
            <div class="price-row total-row">
                <span>Total</span>
                <span>J$${totals.total}</span>
            </div>
        `;
    }
}

// Helper function to generate order number
function generateOrderNumber() {
    return 'BV' + Date.now().toString().slice(-6) + Math.random().toString(36).substring(2, 5).toUpperCase();
}

// Function to display thank you message
function displayThankYouMessage(orderDetails) {
    const thankYouMessage = document.getElementById('thank-you-message');
    if (thankYouMessage) {
        thankYouMessage.style.display = 'block';
        thankYouMessage.innerHTML = `
            <div class="order-success">
                <i class="fas fa-check-circle"></i>
                <h3>Thank you for your order!</h3>
                <p class="order-number">Order #${orderDetails.orderNumber}</p>
                <p>Your order has been received and will be delivered to ${orderDetails.deliveryArea}.</p>
                <p>Payment method: ${orderDetails.paymentMethod}</p>
                <div class="order-details">
                    <h4>Order Summary:</h4>
                    <div class="order-items">
                        ${orderDetails.items.map(item => `
                            <div class="order-item">
                                <span>${item.name} x${item.quantity}</span>
                                <span>J$${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="order-totals">
                        <div class="total-row">
                            <span>Subtotal:</span>
                            <span>J$${orderDetails.totals.subtotal}</span>
                        </div>
                        <div class="total-row">
                            <span>Tax (15%):</span>
                            <span>J$${orderDetails.totals.tax}</span>
                        </div>
                        <div class="total-row final-total">
                            <span>Total:</span>
                            <span>J$${orderDetails.totals.total}</span>
                        </div>
                    </div>
                </div>
                <p>You will receive a confirmation email shortly.</p>
                <button onclick="window.location.href='menu.html'" class="continue-shopping-btn">
                    Continue Shopping
                </button>
            </div>
        `;
    }
}
// Initialize cart from localStorage or as empty array if no saved cart exists
cart = JSON.parse(localStorage.getItem('cart')) || [];

// Calculate total prices including tax for items in cart
function calculateTotals() {
    // Calculate subtotal by multiplying each item's price by quantity and summing
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    // Calculate 15% tax amount
    const tax = subtotal * 0.15; // 15% tax
    // Calculate final total by adding subtotal and tax
    const total = subtotal + tax;
    
    // Return formatted amounts with 2 decimal places
    return {
        subtotal: subtotal.toFixed(2),
        tax: tax.toFixed(2),
        total: total.toFixed(2)
    };
}

// Update price display in the UI
function updateTotalsDisplay() {
    // Get calculated totals
    const totals = calculateTotals();
    // Find price breakdown element in DOM
    const priceBreakdown = document.querySelector('.price-breakdown');
    // If element exists, update its contents
    if (priceBreakdown) {
        priceBreakdown.innerHTML = `
            <div class="price-row">
                <span>Subtotal</span>
                <span>J$${totals.subtotal}</span>
            </div>
            <div class="price-row">
                <span>Tax (15%)</span>
                <span>J$${totals.tax}</span>
            </div>
            <div class="price-row total-row">
                <span>Total</span>
                <span>J$${totals.total}</span>
            </div>
        `;
    }
}

// Create unique order reference number
function generateOrderNumber() {
    // Combine 'BV' prefix with timestamp and random characters
    return 'BV' + Date.now().toString().slice(-6) + Math.random().toString(36).substring(2, 5).toUpperCase();
}

// Show order confirmation message
function displayThankYouMessage(orderDetails) {
    // Find thank you message container
    const thankYouMessage = document.getElementById('thank-you-message');
    // If container exists, show confirmation details
    if (thankYouMessage) {
        // Make container visible
        thankYouMessage.style.display = 'block';
        // Populate with order details
        thankYouMessage.innerHTML = `
            <div class="order-success">
                <i class="fas fa-check-circle"></i>
                <h3>Thank you for your order!</h3>
                <p class="order-number">Order #${orderDetails.orderNumber}</p>
                <p>Your order has been received and will be delivered to ${orderDetails.deliveryArea}.</p>
                <p>Payment method: ${orderDetails.paymentMethod}</p>
                <div class="order-details">
                    <h4>Order Summary:</h4>
                    <div class="order-items">
                        ${orderDetails.items.map(item => `
                            <div class="order-item">
                                <span>${item.name} x${item.quantity}</span>
                                <span>J$${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="order-totals">
                        <div class="total-row">
                            <span>Subtotal:</span>
                            <span>J$${orderDetails.totals.subtotal}</span>
                        </div>
                        <div class="total-row">
                            <span>Tax (15%):</span>
                            <span>J$${orderDetails.totals.tax}</span>
                        </div>
                        <div class="total-row final-total">
                            <span>Total:</span>
                            <span>J$${orderDetails.totals.total}</span>
                        </div>
                    </div>
                </div>
                <p>You will receive a confirmation email shortly.</p>
                <button onclick="window.location.href='menu.html'" class="continue-shopping-btn">
                    Continue Shopping
                </button>
            </div>
        `;
    }
}

// Setup cart functionality when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Update cart count display
    updateCartCount();
    // Update cart items display
    updateCartDisplay();
    // Setup cart icon click handler
    initializeCartIcon();
});

// Setup cart icon click behavior
function initializeCartIcon() {
    // Find cart icon element
    const cartIcon = document.querySelector('.cart-icon');
    // If icon exists, add click handler
    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            // Prevent default link behavior
            e.preventDefault();
            // Navigate to cart page
            window.location.href = '/cart.html';
        });
    }
}

// Add new item to cart
function addToCart(name, price, image) {
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.name === name);
    
    // If item exists, increase quantity, otherwise add new item
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image || `assets/images/${name.toLowerCase().replace(/\s+/g, '')}.png`,
            quantity: 1
        });
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    // Update cart UI elements
    updateCartCount();
    updateCartDisplay();
    // Show success notification
    showNotification(`${name} added to cart!`);
}

// Update cart item count display
function updateCartCount() {
    // Calculate total quantity across all items
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    // Update all cart count elements
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(element => {
        element.textContent = cartCount.toString();
    });
}

// Update item quantity in cart
function updateQuantity(name, newQuantity) {
    // Find item in cart
    const item = cart.find(item => item.name === name);
    if (item) {
        // Remove item if quantity is 0 or less
        if (newQuantity <= 0) {
            cart = cart.filter(item => item.name !== name);
        } else {
            // Update quantity
            item.quantity = newQuantity;
        }
        // Save cart and update UI
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCartDisplay();
    }
}

// Update cart display in UI
function updateCartDisplay() {
    // Get container elements
    const cartContainer = document.getElementById('cart-items-container');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    
    // Return if container doesn't exist
    if (!cartContainer) return;
    
    // Handle empty cart state
    if (cart.length === 0) {
        if (cartContainer) cartContainer.style.display = 'none';
        if (emptyCartMessage) emptyCartMessage.style.display = 'block';
        return;
    }
    
    // Show cart items and hide empty message
    if (cartContainer) cartContainer.style.display = 'block';
    if (emptyCartMessage) emptyCartMessage.style.display = 'none';
    
    // Render cart items
    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}" />
            </div>
            <div class="item-details">
                <h3>${item.name}</h3>
                <p class="item-price">J$${item.price.toFixed(2)}</p>
            </div>
            <div class="item-quantity">
                <button class="quantity-btn minus" onclick="updateQuantity('${item.name}', ${item.quantity - 1})">
                    <i class="fas fa-minus"></i>
                </button>
                <span class="quantity-number">${item.quantity}</span>
                <button class="quantity-btn plus" onclick="updateQuantity('${item.name}', ${item.quantity + 1})">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
            <div class="item-total">
                J$${(item.price * item.quantity).toFixed(2)}
            </div>
            <button class="remove-item" onclick="removeFromCart('${item.name}')" aria-label="Remove ${item.name} from cart">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
    
    // Update price totals
    updateTotalsDisplay();
}

// Remove item from cart
function removeFromCart(name) {
    // Find item index in cart
    const itemIndex = cart.findIndex(item => item.name === name);
    
    // Remove item if found
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
        // Update storage and UI
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCartDisplay();
        showNotification(`${name} removed from cart`);
    }
}

// Process checkout
function proceedToCheckout() {
    // Get form values
    const deliveryArea = document.getElementById('delivery-area')?.value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value;
    
    // Check if cart is empty
    if (cart.length === 0) {
        showNotification('Your cart is empty. Please add items before checking out.');
        return;
    }

    // Validate delivery area selection
    if (!deliveryArea) {
        showNotification('Please select a delivery area');
        const deliverySelect = document.getElementById('delivery-area');
        if (deliverySelect) {
            deliverySelect.style.borderColor = '#ff4444';
            setTimeout(() => {
                deliverySelect.style.borderColor = '';
            }, 3000);
        }
        return;
    }
    
    // Validate payment method selection
    if (!paymentMethod) {
        showNotification('Please select a payment method');
        const paymentFieldset = document.getElementById('payment-method');
        if (paymentFieldset) {
            paymentFieldset.style.borderColor = '#ff4444';
            setTimeout(() => {
                paymentFieldset.style.borderColor = '';
            }, 3000);
        }
        return;
    }
    
    // Create order details object
    const orderDetails = {
        items: cart,
        deliveryArea: deliveryArea,
        paymentMethod: paymentMethod,
        totals: calculateTotals(),
        orderDate: new Date().toLocaleString(),
        orderNumber: generateOrderNumber()
    };
    
    // Save order to history
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory') || '[]');
    orderHistory.push(orderDetails);
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    
    // Show confirmation message
    displayThankYouMessage(orderDetails);
    
    // Clear cart after successful order
    cart = [];
    localStorage.removeItem('cart');
    updateCartCount();
    updateCartDisplay();
}

// Display notification message
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        <span>${message}</span>
    `;
    // Add to document
    document.body.appendChild(notification);
    
    // Show notification with animation
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove notification after delay
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Make functions available globally for HTML onclick handlers
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.proceedToCheckout = proceedToCheckout;