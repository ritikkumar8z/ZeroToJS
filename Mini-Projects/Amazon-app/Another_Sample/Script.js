// Enhanced product data with more details
        const products = [
            {
                id: 1,
                title: "Wireless Bluetooth Headphones Pro",
                price: 79.99,
                originalPrice: 99.99,
                category: "electronics",
                rating: 4.5,
                reviews: 1234,
                image: "🎧",
                description: "Premium wireless headphones with active noise cancellation and 30-hour battery life.",
                features: ["Active Noise Cancellation", "30h Battery", "Quick Charge", "Premium Audio"],
                inStock: true,
                discount: 20
            },
            {
                id: 2,
                title: "Premium Cotton T-Shirt",
                price: 24.99,
                originalPrice: 34.99,
                category: "clothing",
                rating: 4.2,
                reviews: 567,
                image: "👕",
                description: "Soft, breathable 100% organic cotton t-shirt. Perfect for everyday wear.",
                features: ["100% Organic Cotton", "Breathable", "Machine Washable", "Various Colors"],
                inStock: true,
                discount: 29
            },
            {
                id: 3,
                title: "Smart Home Security Camera 4K",
                price: 149.99,
                originalPrice: 199.99,
                category: "electronics",
                rating: 4.7,
                reviews: 892,
                image: "📹",
                description: "4K ultra HD security camera with night vision and smartphone alerts.",
                features: ["4K Ultra HD", "Night Vision", "Motion Detection", "Cloud Storage"],
                inStock: true,
                discount: 25
            },
            {
                id: 4,
                title: "Organic Face Moisturizer",
                price: 34.99,
                originalPrice: 44.99,
                category: "beauty",
                rating: 4.3,
                reviews: 445,
                image: "🧴",
                description: "Natural organic moisturizer with hyaluronic acid and vitamin E.",
                features: ["Organic Ingredients", "Hyaluronic Acid", "Anti-Aging", "All Skin Types"],
                inStock: true,
                discount: 22
            },
            {
                id: 5,
                title: "Yoga Mat - Extra Thick Pro",
                price: 39.99,
                originalPrice: 54.99,
                category: "sports",
                rating: 4.6,
                reviews: 678,
                image: "🧘",
                description: "Extra thick yoga mat with superior grip and comfort for all yoga styles.",
                features: ["Extra Thick 8mm", "Non-Slip Surface", "Eco-Friendly", "Carrying Strap"],
                inStock: true,
                discount: 27
            },
            {
                id: 6,
                title: "LED Desk Lamp with Wireless Charging",
                price: 45.99,
                originalPrice: 65.99,
                category: "home",
                rating: 4.4,
                reviews: 321,
                image: "💡",
                description: "Modern LED desk lamp with built-in wireless charging pad and touch controls.",
                features: ["Wireless Charging", "Touch Control", "Dimmable LED", "USB Ports"],
                inStock: true,
                discount: 30
            },
            {
                id: 7,
                title: "Bestselling Mystery Novel",
                price: 14.99,
                originalPrice: 19.99,
                category: "books",
                rating: 4.8,
                reviews: 1567,
                image: "📖",
                description: "Award-winning thriller that will keep you on the edge of your seat.",
                features: ["Bestseller", "Award Winner", "Hardcover", "340 Pages"],
                inStock: true,
                discount: 25
            },
            {
                id: 8,
                title: "Wireless Gaming Mouse RGB",
                price: 89.99,
                originalPrice: 119.99,
                category: "electronics",
                rating: 4.5,
                reviews: 234,
                image: "🖱️",
                description: "High-precision wireless gaming mouse with RGB lighting and programmable buttons.",
                features: ["16000 DPI", "RGB Lighting", "Programmable Buttons", "50h Battery"],
                inStock: true,
                discount: 25
            },
            {
                id: 9,
                title: "Vintage Denim Jacket",
                price: 59.99,
                originalPrice: 79.99,
                category: "clothing",
                rating: 4.1,
                reviews: 123,
                image: "🧥",
                description: "Classic vintage-style denim jacket made from premium denim fabric.",
                features: ["Premium Denim", "Vintage Style", "Multiple Pockets", "Unisex Design"],
                inStock: true,
                discount: 25
            },
            {
                id: 10,
                title: "Smart Coffee Maker Pro",
                price: 129.99,
                originalPrice: 169.99,
                category: "home",
                rating: 4.6,
                reviews: 456,
                image: "☕",
                description: "WiFi-enabled smart coffee maker with app control and custom brewing options.",
                features: ["WiFi Connected", "App Control", "Programmable", "12-Cup Capacity"],
                inStock: true,
                discount: 24
            },
            {
                id: 11,
                title: "Luxury Lipstick Set",
                price: 29.99,
                originalPrice: 39.99,
                category: "beauty",
                rating: 4.2,
                reviews: 789,
                image: "💄",
                description: "Professional lipstick set with 6 premium shades and long-lasting formula.",
                features: ["6 Premium Shades", "Long-Lasting", "Matte Finish", "Cruelty-Free"],
                inStock: true,
                discount: 25
            },
            {
                id: 12,
                title: "Professional Basketball",
                price: 19.99,
                originalPrice: 29.99,
                category: "sports",
                rating: 4.4,
                reviews: 234,
                image: "🏀",
                description: "Official size basketball with superior grip and bounce performance.",
                features: ["Official Size", "Superior Grip", "Indoor/Outdoor", "Durable"],
                inStock: true,
                discount: 33
            },
            {
                id: 13,
                title: "Mechanical Gaming Keyboard",
                price: 99.99,
                originalPrice: 129.99,
                category: "electronics",
                rating: 4.7,
                reviews: 567,
                image: "⌨️",
                description: "RGB mechanical gaming keyboard with blue switches and anti-ghosting.",
                features: ["Mechanical Switches", "RGB Backlight", "Anti-Ghosting", "Programmable"],
                inStock: false,
                discount: 23
            },
            {
                id: 14,
                title: "Wireless Earbuds Pro",
                price: 59.99,
                originalPrice: 79.99,
                category: "electronics",
                rating: 4.3,
                reviews: 892,
                image: "🎵",
                description: "True wireless earbuds with noise cancellation and premium sound quality.",
                features: ["True Wireless", "Noise Cancellation", "8h Battery", "Touch Control"],
                inStock: true,
                discount: 25
            },
            {
                id: 15,
                title: "Skincare Gift Set",
                price: 49.99,
                originalPrice: 69.99,
                category: "beauty",
                rating: 4.5,
                reviews: 345,
                image: "🎁",
                description: "Complete skincare gift set with cleanser, toner, serum, and moisturizer.",
                features: ["4-Step Routine", "Natural Ingredients", "Gift Box", "All Skin Types"],
                inStock: true,
                discount: 29
            }
        ];

        // Enhanced cart and state management
        let cart = [];
        let filteredProducts = [...products];
        let currentCategory = '';
        let searchQuery = '';

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            loadProducts();
            updateCartCount();
            setupEventListeners();
            animateOnScroll();
        });

        // Setup event listeners
        function setupEventListeners() {
            // Search functionality
            const searchInput = document.getElementById('searchInput');
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    searchProducts();
                }
            });

            // Real-time search
            searchInput.addEventListener('input', function(e) {
                clearTimeout(this.searchTimeout);
                this.searchTimeout = setTimeout(() => {
                    searchProducts();
                }, 300);
            });

            // Close cart when clicking outside
            document.addEventListener('click', function(e) {
                const cartSidebar = document.getElementById('cartSidebar');
                const cartIcon = document.querySelector('.cart-icon');
                
                if (!cartSidebar.contains(e.target) && !cartIcon.contains(e.target)) {
                    cartSidebar.classList.remove('open');
                }
            });

            // Close modal when clicking outside
            window.addEventListener('click', function(e) {
                const modal = document.getElementById('productModal');
                if (e.target === modal) {
                    closeModal();
                }
            });

            // Keyboard navigation
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    const cartSidebar = document.getElementById('cartSidebar');
                    const modal = document.getElementById('productModal');
                    
                    if (cartSidebar.classList.contains('open')) {
                        toggleCart();
                    }
                    if (modal.style.display === 'block') {
                        closeModal();
                    }
                }
            });
        }

        // Enhanced product loading with animations
        function loadProducts() {
            const loading = document.getElementById('loading');
            const grid = document.getElementById('productsGrid');
            
            loading.style.display = 'block';
            grid.innerHTML = '';
            
            setTimeout(() => {
                loading.style.display = 'none';
                
                filteredProducts.forEach((product, index) => {
                    const productCard = createProductCard(product);
                    productCard.style.opacity = '0';
                    productCard.style.transform = 'translateY(30px)';
                    grid.appendChild(productCard);
                    
                    // Staggered animation
                    setTimeout(() => {
                        productCard.style.transition = 'all 0.5s ease';
                        productCard.style.opacity = '1';
                        productCard.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }, 800);
        }

        // Enhanced product card with more features
        function createProductCard(product) {
            const card = document.createElement('div');
            card.className = 'product-card';
            
            const discountBadge = product.discount ? 
                `<div style="position: absolute; top: 10px; right: 10px; background: #ff4757; color: white; padding: 5px 10px; border-radius: 15px; font-size: 0.8rem; font-weight: bold;">-${product.discount}%</div>` : '';
            
            const stockStatus = product.inStock ? 
                '<div style="color: #2ed573; font-size: 0.9rem; font-weight: 600;">✓ In Stock</div>' : 
                '<div style="color: #ff4757; font-size: 0.9rem; font-weight: 600;">⚠ Out of Stock</div>';
            
            const originalPriceDisplay = product.originalPrice ? 
                `<span style="text-decoration: line-through; color: #999; font-size: 1rem; margin-right: 10px;">${product.originalPrice.toFixed(2)}</span>` : '';

            card.innerHTML = `
                ${discountBadge}
                <div class="product-image" onclick="showProductDetails(${product.id})">${product.image}</div>
                <div class="product-info">
                    <div class="product-title" onclick="showProductDetails(${product.id})">${product.title}</div>
                    <div class="product-rating">
                        <span class="stars">${generateStars(product.rating)}</span>
                        <span class="rating-count">(${product.reviews.toLocaleString()})</span>
                    </div>
                    <div class="product-price">
                        ${originalPriceDisplay}
                        ${product.price.toFixed(2)}
                    </div>
                    ${stockStatus}
                    <button class="add-to-cart" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                        ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                </div>
            `;
            return card;
        }

        // Generate star rating display
        function generateStars(rating) {
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 !== 0;
            let stars = '';
            
            for (let i = 0; i < fullStars; i++) {
                stars += '★';
            }
            
            if (hasHalfStar) {
                stars += '☆';
            }
            
            for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
                stars += '☆';
            }
            
            return stars;
        }

        // Enhanced product details modal
        function showProductDetails(productId) {
            const product = products.find(p => p.id === productId);
            const modal = document.getElementById('productModal');
            const modalContent = document.getElementById('modalContent');
            
            const stockStatus = product.inStock ? 
                '<div style="color: #2ed573; font-size: 1rem; font-weight: 600; margin: 10px 0;">✓ In Stock</div>' : 
                '<div style="color: #ff4757; font-size: 1rem; font-weight: 600; margin: 10px 0;">⚠ Out of Stock</div>';
            
            const originalPriceDisplay = product.originalPrice ? 
                `<span style="text-decoration: line-through; color: #999; font-size: 1.2rem; margin-right: 15px;">${product.originalPrice.toFixed(2)}</span>` : '';

            modalContent.innerHTML = `
                <div style="text-align: center; margin-bottom: 2rem;">
                    <div style="font-size: 6rem; margin-bottom: 1rem;">${product.image}</div>
                    <h2 style="margin-bottom: 1rem; color: #333;">${product.title}</h2>
                    <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 1rem;">
                        <span style="color: #ffd700; font-size: 1.2rem;">${generateStars(product.rating)}</span>
                        <span style="color: #666;">${product.rating} (${product.reviews.toLocaleString()} reviews)</span>
                    </div>
                    <div style="font-size: 2rem; font-weight: 700; color: #ff6b6b; margin-bottom: 1rem;">
                        ${originalPriceDisplay}
                        ${product.price.toFixed(2)}
                    </div>
                    ${stockStatus}
                </div>
                
                <div style="margin-bottom: 2rem;">
                    <h3 style="margin-bottom: 1rem; color: #333;">Description</h3>
                    <p style="color: #666; line-height: 1.6;">${product.description}</p>
                </div>
                
                <div style="margin-bottom: 2rem;">
                    <h3 style="margin-bottom: 1rem; color: #333;">Key Features</h3>
                    <div style="display: grid; gap: 0.5rem;">
                        ${product.features.map(feature => `<div style="display: flex; align-items: center; gap: 0.5rem; color: #666;"><span style="color: #4ecdc4;">✓</span> ${feature}</div>`).join('')}
                    </div>
                </div>
                
                <button onclick="addToCart(${product.id}); closeModal();" 
                        class="add-to-cart" 
                        style="width: 100%; padding: 1rem; font-size: 1.1rem; margin-top: 1rem;" 
                        ${!product.inStock ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                    ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
            `;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        // Close modal
        function closeModal() {
            const modal = document.getElementById('productModal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Enhanced add to cart with better feedback
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            
            if (!product.inStock) {
                showNotification('Sorry, this product is out of stock!', 'error');
                return;
            }
            
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
                showNotification(`Updated ${product.title} quantity in cart!`, 'success');
            } else {
                cart.push({...product, quantity: 1});
                showNotification(`${product.title} added to cart!`, 'success');
            }
            
            updateCartCount();
            updateCartDisplay();
            
            // Add visual feedback to the add to cart button
            const buttons = document.querySelectorAll(`button[onclick="addToCart(${productId})"]`);
            buttons.forEach(button => {
                const originalText = button.textContent;
                button.textContent = 'Added!';
                button.style.background = '#2ed573';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                }, 1000);
            });
        }

        // Enhanced cart count with animation
        function updateCartCount() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const cartCountElement = document.getElementById('cartCount');
            
            cartCountElement.style.transform = 'scale(1.5)';
            cartCountElement.textContent = totalItems;
            
            setTimeout(() => {
                cartCountElement.style.transform = 'scale(1)';
            }, 200);
        }

        // Enhanced cart sidebar toggle
        function toggleCart() {
            const sidebar = document.getElementById('cartSidebar');
            sidebar.classList.toggle('open');
            updateCartDisplay();
            
            // Prevent body scroll when cart is open
            if (sidebar.classList.contains('open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }

        // Enhanced cart display with better formatting
        function updateCartDisplay() {
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');
            
            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div class="empty-cart">
                        <div class="empty-cart-icon">🛒</div>
                        <h3>Your cart is empty</h3>
                        <p>Add some products to get started!</p>
                    </div>
                `;
                cartTotal.style.display = 'none';
                return;
            }
            
            cartItems.innerHTML = '';
            let total = 0;
            let totalSavings = 0;
            
            cart.forEach(item => {
                total += item.price * item.quantity;
                if (item.originalPrice) {
                    totalSavings += (item.originalPrice - item.price) * item.quantity;
                }
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-image">${item.image}</div>
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.title}</div>
                        <div class="cart-item-price">${item.price.toFixed(2)}</div>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                            <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                        </div>
                    </div>
                `;
                cartItems.appendChild(cartItem);
            });
            
            document.getElementById('totalAmount').textContent = total.toFixed(2);
            
            // Show savings if any
            if (totalSavings > 0) {
                const savingsElement = document.createElement('div');
                savingsElement.style.cssText = 'color: #2ed573; font-weight: 600; text-align: center; margin-bottom: 0.5rem;';
                savingsElement.textContent = `You save: ${totalSavings.toFixed(2)}`;
                cartTotal.insertBefore(savingsElement, cartTotal.firstChild);
            }
            
            cartTotal.style.display = 'block';
        }

        // Update quantity with validation
        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                    return;
                }
                if (item.quantity > 10) {
                    item.quantity = 10;
                    showNotification('Maximum quantity limit reached (10)', 'warning');
                }
                updateCartCount();
                updateCartDisplay();
            }
        }

        // Remove item from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartCount();
            updateCartDisplay();
            showNotification('Item removed from cart', 'info');
        }

        // Enhanced search functionality
        function searchProducts() {
            searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();
            applyFilters();
        }

        // Enhanced filtering system
        function applyFilters() {
            const categoryFilter = document.getElementById('categoryFilter').value;
            const priceFilter = document.getElementById('priceFilter').value;
            const sortFilter = document.getElementById('sortFilter').value;
            
            filteredProducts = products.filter(product => {
                // Category filter
                if (categoryFilter && product.category !== categoryFilter) {
                    return false;
                }
                
                // Search filter
                if (searchQuery && !product.title.toLowerCase().includes(searchQuery) && 
                    !product.description.toLowerCase().includes(searchQuery)) {
                    return false;
                }
                
                // Price filter
                if (priceFilter) {
                    const [min, max] = priceFilter.split('-').map(p => p === '+' ? Infinity : parseFloat(p));
                    if (max) {
                        if (product.price < min || product.price > max) return false;
                    } else {
                        if (product.price < min) return false;
                    }
                }
                
                return true;
            });
            
            // Apply sorting
            if (sortFilter) {
                switch (sortFilter) {
                    case 'price-low':
                        filteredProducts.sort((a, b) => a.price - b.price);
                        break;
                    case 'price-high':
                        filteredProducts.sort((a, b) => b.price - a.price);
                        break;
                    case 'rating':
                        filteredProducts.sort((a, b) => b.rating - a.rating);
                        break;
                }
            }
            
            loadProducts();
        }

        // Filter by category from category cards
        function filterByCategory(category) {
            document.getElementById('categoryFilter').value = category;
            currentCategory = category;
            applyFilters();
            scrollToProducts();
        }

        // Scroll to products section
        function scrollToProducts() {
            document.getElementById('products').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }

        // Enhanced checkout process
        function checkout() {
            if (cart.length === 0) {
                showNotification('Your cart is empty!', 'warning');
                return;
            }
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
            
            // Simulate checkout process
            showNotification('Processing your order...', 'info');
            
            setTimeout(() => {
                showNotification(`Order placed! Total: ${total.toFixed(2)} for ${itemCount} items`, 'success');
                cart = [];
                updateCartCount();
                updateCartDisplay();
                toggleCart();
            }, 2000);
        }

        // Enhanced notification system
        function showNotification(message, type = 'success') {
            const notification = document.getElementById('notification');
            
            // Set colors based on type
            const colors = {
                success: 'linear-gradient(45deg, #4ecdc4, #44a08d)',
                error: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
                warning: 'linear-gradient(45deg, #feca57, #ff9ff3)',
                info: 'linear-gradient(45deg, #54a0ff, #2e86de)'
            };
            
            notification.textContent = message;
            notification.style.background = colors[type] || colors.success;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Animate elements on scroll
        function animateOnScroll() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            // Observe elements that should animate
            document.querySelectorAll('.category-card, .product-card').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'all 0.6s ease';
                observer.observe(el);
            });
        }

        // Add some interactive features
        document.addEventListener('DOMContentLoaded', function() {
            // Add hover effects to interactive elements
            const interactiveElements = document.querySelectorAll('.category-card, .product-card, .nav-link');
            
            interactiveElements.forEach(element => {
                element.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px) scale(1.02)';
                });
                
                element.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        });

        // Add keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // Ctrl/Cmd + K to focus search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                document.getElementById('searchInput').focus();
            }
            
            // Ctrl/Cmd + Shift + C to open cart
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
                e.preventDefault();
                toggleCart();
            }
        });

        // Add product quick view on double click
        document.addEventListener('dblclick', function(e) {
            const productCard = e.target.closest('.product-card');
            if (productCard) {
                const productId = parseInt(productCard.querySelector('.add-to-cart').getAttribute('onclick').match(/\d+/)[0]);
                showProductDetails(productId);
            }
        });

        // Add loading states for better UX
        function showLoadingState(element) {
            const originalContent = element.innerHTML;
            element.innerHTML = '<div class="spinner" style="width: 20px; height: 20px; margin: 0 auto;"></div>';
            
            return function() {
                element.innerHTML = originalContent;
            };
        }

        // Enhanced error handling
        function handleError(error, context = '') {
            console.error(`Error ${context}:`, error);
            showNotification(`Something went wrong ${context}. Please try again.`, 'error');
        }

        // Add product comparison feature
        let compareList = [];

        function addToCompare(productId) {
            const product = products.find(p => p.id === productId);
            
            if (compareList.length >= 3) {
                showNotification('You can compare up to 3 products at a time', 'warning');
                return;
            }
            
            if (compareList.find(p => p.id === productId)) {
                showNotification('Product already in comparison list', 'info');
                return;
            }
            
            compareList.push(product);
            showNotification(`${product.title} added to comparison`, 'success');
            updateCompareButton();
        }

        function updateCompareButton() {
            let compareButton = document.getElementById('compareButton');
            
            if (!compareButton && compareList.length > 0) {
                compareButton = document.createElement('button');
                compareButton.id = 'compareButton';
                compareButton.innerHTML = `Compare (${compareList.length})`;
                compareButton.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: linear-gradient(45deg, #667eea, #764ba2);
                    color: white;
                    border: none;
                    padding: 1rem 1.5rem;
                    border-radius: 25px;
                    cursor: pointer;
                    font-weight: 600;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                    z-index: 1000;
                    transition: all 0.3s ease;
                `;
                compareButton.onclick = showComparison;
                document.body.appendChild(compareButton);
            } else if (compareButton) {
                if (compareList.length === 0) {
                    compareButton.remove();
                } else {
                    compareButton.innerHTML = `Compare (${compareList.length})`;
                }
            }
        }

        function showComparison() {
            if (compareList.length < 2) {
                showNotification('Add at least 2 products to compare', 'warning');
                return;
            }

            const modal = document.getElementById('productModal');
            const modalContent = document.getElementById('modalContent');
            
            let comparisonHTML = `
                <h2 style="text-align: center; margin-bottom: 2rem; color: #333;">Product Comparison</h2>
                <div style="display: grid; grid-template-columns: repeat(${compareList.length}, 1fr); gap: 2rem; margin-bottom: 2rem;">
            `;
            
            compareList.forEach(product => {
                comparisonHTML += `
                    <div style="text-align: center; padding: 1rem; border: 1px solid #ddd; border-radius: 10px;">
                        <div style="font-size: 4rem; margin-bottom: 1rem;">${product.image}</div>
                        <h3 style="margin-bottom: 1rem; color: #333;">${product.title}</h3>
                        <div style="color: #ff6b6b; font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">${product.price.toFixed(2)}</div>
                        <div style="color: #ffd700; margin-bottom: 0.5rem;">${generateStars(product.rating)} (${product.reviews})</div>
                        <div style="margin-bottom: 1rem;">
                            ${product.features.map(feature => `<div style="font-size: 0.9rem; color: #666; margin: 0.2rem 0;">• ${feature}</div>`).join('')}
                        </div>
                        <button onclick="addToCart(${product.id})" class="add-to-cart" style="width: 100%; padding: 0.8rem;">Add to Cart</button>
                    </div>
                `;
            });
            
            comparisonHTML += `
                </div>
                <div style="text-align: center;">
                    <button onclick="clearComparison()" style="background: #ff4757; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 20px; cursor: pointer; margin-right: 1rem;">Clear Comparison</button>
                    <button onclick="closeModal()" style="background: #333; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 20px; cursor: pointer;">Close</button>
                </div>
            `;
            
            modalContent.innerHTML = comparisonHTML;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function clearComparison() {
            compareList = [];
            updateCompareButton();
            closeModal();
            showNotification('Comparison cleared', 'info');
        }

        // Add wishlist functionality
        let wishlist = [];

        function toggleWishlist(productId) {
            const product = products.find(p => p.id === productId);
            const index = wishlist.findIndex(item => item.id === productId);
            
            if (index > -1) {
                wishlist.splice(index, 1);
                showNotification(`${product.title} removed from wishlist`, 'info');
            } else {
                wishlist.push(product);
                showNotification(`${product.title} added to wishlist`, 'success');
            }
            
            updateWishlistUI();
        }

        function updateWishlistUI() {
            // Update heart icons if they exist
            const heartIcons = document.querySelectorAll('.wishlist-heart');
            heartIcons.forEach(heart => {
                const productId = parseInt(heart.dataset.productId);
                const isInWishlist = wishlist.some(item => item.id === productId);
                heart.style.color = isInWishlist ? '#ff6b6b' : '#ccc';
            });
        }

        // Add recent views tracking
        let recentViews = [];

        function addToRecentViews(productId) {
            const product = products.find(p => p.id === productId);
            
            // Remove if already exists
            recentViews = recentViews.filter(item => item.id !== productId);
            
            // Add to beginning
            recentViews.unshift(product);
            
            // Keep only last 5
            recentViews = recentViews.slice(0, 5);
        }

        // Enhanced product details with recent views
        const originalShowProductDetails = showProductDetails;
        showProductDetails = function(productId) {
            addToRecentViews(productId);
            originalShowProductDetails(productId);
        };

        // Add auto-save cart functionality
        function saveCartToStorage() {
            try {
                // Note: Using in-memory storage simulation since localStorage is not available
                window.cartBackup = JSON.stringify(cart);
            } catch (error) {
                console.warn('Could not save cart:', error);
            }
        }

        function loadCartFromStorage() {
            try {
                if (window.cartBackup) {
                    cart = JSON.parse(window.cartBackup);
                    updateCartCount();
                    updateCartDisplay();
                }
            } catch (error) {
                console.warn('Could not load cart:', error);
            }
        }

        // Auto-save cart on changes
        const originalAddToCart = addToCart;
        addToCart = function(productId) {
            originalAddToCart(productId);
            saveCartToStorage();
        };

        const originalUpdateQuantity = updateQuantity;
        updateQuantity = function(productId, change) {
            originalUpdateQuantity(productId, change);
            saveCartToStorage();
        };

        const originalRemoveFromCart = removeFromCart;
        removeFromCart = function(productId) {
            originalRemoveFromCart(productId);
            saveCartToStorage();
        };

        // Add price drop alerts simulation
        function simulatePriceAlerts() {
            setInterval(() => {
                if (Math.random() < 0.1) { // 10% chance every interval
                    const randomProduct = products[Math.floor(Math.random() * products.length)];
                    const discount = Math.floor(Math.random() * 20) + 5; // 5-25% discount
                    
                    showNotification(`🔥 Price Drop Alert! ${randomProduct.title} is now ${discount}% off!`, 'success');
                }
            }, 30000); // Check every 30 seconds
        }

        // Add product recommendations
        function getRecommendations(currentProductId) {
            const currentProduct = products.find(p => p.id === currentProductId);
            
            return products
                .filter(p => p.id !== currentProductId && p.category === currentProduct.category)
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 3);
        }

        // Add advanced search suggestions
        function showSearchSuggestions(query) {
            if (!query || query.length < 2) return;
            
            const suggestions = products
                .filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
                .slice(0, 5)
                .map(p => p.title);
            
            // Create suggestions dropdown (simplified version)
            let dropdown = document.getElementById('searchSuggestions');
            if (!dropdown) {
                dropdown = document.createElement('div');
                dropdown.id = 'searchSuggestions';
                dropdown.style.cssText = `
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: white;
                    border: 1px solid #ddd;
                    border-radius: 0 0 10px 10px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                    z-index: 1000;
                    max-height: 200px;
                    overflow-y: auto;
                `;
                document.querySelector('.search-container').appendChild(dropdown);
            }
            
            dropdown.innerHTML = suggestions
                .map(suggestion => `
                    <div style="padding: 10px; cursor: pointer; border-bottom: 1px solid #eee;" 
                         onclick="selectSuggestion('${suggestion}')"
                         onmouseover="this.style.background='#f5f5f5'"
                         onmouseout="this.style.background='white'">
                        ${suggestion}
                    </div>
                `).join('');
        }

        function selectSuggestion(suggestion) {
            document.getElementById('searchInput').value = suggestion;
            document.getElementById('searchSuggestions').remove();
            searchProducts();
        }

        // Enhanced search with suggestions
        document.getElementById('searchInput').addEventListener('input', function(e) {
            const query = e.target.value;
            showSearchSuggestions(query);
            
            clearTimeout(this.searchTimeout);
            this.searchTimeout = setTimeout(() => {
                if (query.length >= 2) {
                    searchProducts();
                }
            }, 300);
        });

        // Hide suggestions when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-container')) {
                const suggestions = document.getElementById('searchSuggestions');
                if (suggestions) suggestions.remove();
            }
        });

        // Initialize enhanced features
        document.addEventListener('DOMContentLoaded', function() {
            loadCartFromStorage();
            simulatePriceAlerts();
            
            // Add performance monitoring
            if ('performance' in window) {
                window.addEventListener('load', function() {
                    setTimeout(() => {
                        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
                        console.log(`Page loaded in ${loadTime}ms`);
                    }, 0);
                });
            }
        });

        // Add service worker registration for offline functionality (simplified)
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                // Service worker would be registered here in a real app
                console.log('Service Worker ready for registration');
            });
        }

        // Add analytics tracking (simplified)
        function trackEvent(eventName, eventData = {}) {
            console.log(`Analytics Event: ${eventName}`, eventData);
            // In a real app, this would send data to analytics service
        }

        // Track product views
        const originalShowProductDetailsTracked = showProductDetails;
        showProductDetails = function(productId) {
            trackEvent('product_view', { productId });
            originalShowProductDetailsTracked(productId);
        };

        // Track purchases
        const originalCheckout = checkout;
        checkout = function() {
            const totalValue = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            trackEvent('purchase', { 
                items: cart.length, 
                value: totalValue,
                products: cart.map(item => ({ id: item.id, quantity: item.quantity }))
            });
            originalCheckout();
        };

        // Add accessibility improvements
        function improveAccessibility() {
            // Add ARIA labels
            document.querySelector('.search-input').setAttribute('aria-label', 'Search products');
            document.querySelector('.cart-icon').setAttribute('aria-label', `Shopping cart with ${cart.length} items`);
            
            // Add keyboard navigation for product grid
            const productCards = document.querySelectorAll('.product-card');
            productCards.forEach((card, index) => {
                card.setAttribute('tabindex', '0');
                card.setAttribute('role', 'button');
                card.setAttribute('aria-label', `Product ${index + 1}`);
                
                card.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        const productId = parseInt(this.querySelector('.add-to-cart').getAttribute('onclick').match(/\d+/)[0]);
                        showProductDetails(productId);
                    }
                });
            });
        }

        // Initialize accessibility improvements
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(improveAccessibility, 1000); // Wait for products to load
        });

        // Add print functionality
        function printCart() {
            const cartContent = cart.map(item => 
                `${item.title} - Quantity: ${item.quantity} - Price: ${(item.price * item.quantity).toFixed(2)}`
            ).join('\n');
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <html>
                <head><title>Shopping Cart</title></head>
                <body>
                    <h1>Shopping Cart</h1>
                    <pre>${cartContent}</pre>
                    <h2>Total: ${total.toFixed(2)}</h2>
                </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.print();
        }

        // Add export functionality
        function exportCart() {
            const cartData = {
                items: cart,
                total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                exportDate: new Date().toISOString()
            }; 
            
            const dataStr = JSON.stringify(cartData, null, 2);
            const dataBlob = new Blob([dataStr], {type: 'application/json'});
            
            const link = document.createElement('a');
            link.href = URL.createObjectURL(dataBlob);
            link.download = 'shopping-cart.json';
            link.click();
        }

        console.log('🚀 Amazon Clone loaded successfully!');
        console.log('Features included: Advanced search, cart management, product comparison, wishlist, and more!');