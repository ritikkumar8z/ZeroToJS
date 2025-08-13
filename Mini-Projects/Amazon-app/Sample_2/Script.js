// Enhanced Product data with more details
        const products = [
            {
                id: 1,
                title: "Wireless Bluetooth Headphones",
                price: 79.99,
                originalPrice: 99.99,
                category: "electronics", 
                rating: 4.5,  
                reviews: 1234, 
                image: "🎧",
                description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
                features: ["Noise Cancellation", "30h Battery", "Bluetooth 5.0", "Fast Charging"],
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
                description: "100% organic cotton t-shirt with comfortable fit and premium quality.",
                features: ["100% Organic Cotton", "Machine Washable", "Various Colors", "Comfortable Fit"],
                inStock: true,
                discount: 29
            },
            {
                id: 3,
                title: "Smart Home Security Camera",
                price: 149.99,
                originalPrice: 199.99,
                category: "electronics",
                rating: 4.7,
                reviews: 892,
                image: "📹",
                description: "1080p HD security camera with night vision and mobile app control.",
                features: ["1080p HD", "Night Vision", "Mobile App", "Cloud Storage"],
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
                description: "Natural organic moisturizer with SPF protection and anti-aging properties.",
                features: ["SPF 30", "Anti-Aging", "Organic Ingredients", "All Skin Types"],
                inStock: true,
                discount: 22
            },
            {
                id: 5,
                title: "Yoga Mat - Extra Thick",
                price: 39.99,
                originalPrice: 54.99,
                category: "sports",
                rating: 4.6,
                reviews: 678,
                image: "🧘",
                description: "Extra thick yoga mat with non-slip surface and carrying strap.",
                features: ["Extra Thick", "Non-Slip", "Eco-Friendly", "Carrying Strap"],
                inStock: true,
                discount: 27
            },
            {
                id: 6,
                title: "LED Desk Lamp",
                price: 45.99,
                originalPrice: 59.99,
                category: "home",
                rating: 4.4,
                reviews: 321,
                image: "💡",
                description: "Adjustable LED desk lamp with multiple brightness levels and USB charging port.",
                features: ["LED Technology", "Adjustable", "USB Charging", "Touch Control"],
                inStock: false,
                discount: 23
            },
            {
                id: 7,
                title: "Bestselling Novel",
                price: 14.99,
                originalPrice: 19.99,
                category: "books",
                rating: 4.8,
                reviews: 1567,
                image: "📖",
                description: "Award-winning fiction novel that topped bestseller lists worldwide.",
                features: ["Award Winner", "Bestseller", "Paperback", "Fiction"],
                inStock: true,
                discount: 25
            },
            {
                id: 8,
                title: "Wireless Gaming Mouse",
                price: 89.99,
                originalPrice: 119.99,
                category: "electronics",
                rating: 4.5,
                reviews: 234,
                image: "🖱️",
                description: "High-precision gaming mouse with customizable RGB lighting and programmable buttons.",
                features: ["High Precision", "RGB Lighting", "Programmable", "Wireless"],
                inStock: true,
                discount: 25
            },
            {
                id: 9,
                title: "Denim Jacket",
                price: 59.99,
                originalPrice: 79.99,
                category: "clothing",
                rating: 4.1,
                reviews: 123,
                image: "🧥",
                description: "Classic denim jacket with vintage wash and comfortable fit.",
                features: ["Classic Design", "Vintage Wash", "Multiple Sizes", "Durable"],
                inStock: true,
                discount: 25
            },
            {
                id: 10,
                title: "Coffee Maker",
                price: 129.99,
                originalPrice: 159.99,
                category: "home",
                rating: 4.6,
                reviews: 456,
                image: "☕",
                description: "Programmable coffee maker with thermal carafe and auto-brew timer.",
                features: ["Programmable", "Thermal Carafe", "Auto-Brew", "12-Cup Capacity"],
                inStock: true,
                discount: 19
            },
            {
                id: 11,
                title: "Lipstick Set",
                price: 29.99,
                originalPrice: 39.99,
                category: "beauty",
                rating: 4.2,
                reviews: 789,
                image: "💄",
                description: "Professional lipstick set with 6 trending colors and long-lasting formula.",
                features: ["6 Colors", "Long-Lasting", "Professional", "Cruelty-Free"],
                inStock: true,
                discount: 25
            },
            {
                id: 12,
                title: "Basketball",
                price: 19.99,
                originalPrice: 24.99,
                category: "sports",
                rating: 4.4,
                reviews: 234,
                image: "🏀",
                description: "Official size basketball with superior grip and bounce control.",
                features: ["Official Size", "Superior Grip", "Indoor/Outdoor", "Durable"],
                inStock: true,
                discount: 20
            }
        ];

        // Enhanced cart functionality
        let cart = [];
        let filteredProducts = [...products];
        let wishlist = [];

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            loadProducts();
            updateCartCount();
            loadFromStorage();
            
            // Add enter key support for search
            document.getElementById('searchInput').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    searchProducts();
                }
            });

            // Add scroll to top functionality
            window.addEventListener('scroll', function() {
                const scrollBtn = document.getElementById('scrollToTop');
                if (window.pageYOffset > 300) {
                    if (scrollBtn) scrollBtn.style.display = 'block';
                } else {
                    if (scrollBtn) scrollBtn.style.display = 'none';
                }
            });
        });

        // Load from localStorage simulation (using variables since localStorage isn't available)
        function loadFromStorage() {
            // In a real app, you would load from localStorage here
            // cart = JSON.parse(localStorage.getItem('cart')) || [];
            // wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        }

        // Save to localStorage simulation
        function saveToStorage() {
            // In a real app, you would save to localStorage here
            // localStorage.setItem('cart', JSON.stringify(cart));
            // localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }

        // Enhanced product loading with animation
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
                    productCard.style.transform = 'translateY(20px)';
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

        // Enhanced product card creation
        function createProductCard(product) {
            const card = document.createElement('div');
            card.className = 'product-card';
            
            const discountBadge = product.discount ? 
                `<div style="position: absolute; top: 10px; left: 10px; background: #ff4757; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; font-weight: 600;">-${product.discount}%</div>` : '';
                
            const stockStatus = product.inStock ? 
                '<div style="color: #48bb78; font-size: 0.875rem; font-weight: 600;">✓ In Stock</div>' : 
                '<div style="color: #f56565; font-size: 0.875rem; font-weight: 600;">⚠ Out of Stock</div>';
                
            const originalPriceDisplay = product.originalPrice && product.originalPrice > product.price ?
                `<span style="text-decoration: line-through; color: #718096; font-size: 1rem; margin-right: 0.5rem;">${product.originalPrice.toFixed(2)}</span>` : '';

            card.innerHTML = `
                <div class="product-image" style="position: relative;">
                    ${discountBadge}
                    <button class="quick-view-btn" onclick="quickView(${product.id})" title="Quick View">👁️</button>
                    ${product.image}
                </div>
                <div class="product-info">
                    <div class="product-title">${product.title}</div>
                    <div class="product-rating">
                        <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                        <span class="rating-count">(${product.reviews})</span>
                    </div>
                    <div class="product-price">
                        ${originalPriceDisplay}
                        ${product.price.toFixed(2)}
                    </div>
                    ${stockStatus}
                    <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                        <button class="add-to-cart" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                            ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                        <button onclick="toggleWishlist(${product.id})" style="background: none; border: 1px solid #e2e8f0; padding: 0.5rem; border-radius: 0.25rem; cursor: pointer; font-size: 1.2rem;" title="Add to Wishlist">
                            ${wishlist.includes(product.id) ? '❤️' : '🤍'}
                        </button>
                    </div>
                </div>
            `;
            return card;
        }

        // Quick view functionality
        function quickView(productId) {
            const product = products.find(p => p.id === productId);
            const modal = document.getElementById('quickViewModal');
            const content = document.getElementById('quickViewContent');
            
            content.innerHTML = `
                <div style="display: flex; gap: 2rem; margin-bottom: 1.5rem;">
                    <div style="font-size: 6rem; text-align: center; flex-shrink: 0;">${product.image}</div>
                    <div style="flex: 1;">
                        <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">${product.title}</h3>
                        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                            <span style="color: #ffd700;">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                            <span style="color: #718096;">(${product.reviews} reviews)</span>
                        </div>
                        <div style="font-size: 1.5rem; font-weight: 700; color: #e53e3e; margin-bottom: 1rem;">
                            ${product.originalPrice && product.originalPrice > product.price ? 
                                `<span style="text-decoration: line-through; color: #718096; font-size: 1rem; margin-right: 0.5rem;">${product.originalPrice.toFixed(2)}</span>` : ''}
                            ${product.price.toFixed(2)}
                        </div>
                        <p style="color: #4a5568; margin-bottom: 1rem;">${product.description}</p>
                    </div>
                </div>
                <div style="margin-bottom: 1.5rem;">
                    <h4 style="margin-bottom: 0.5rem;">Key Features:</h4>
                    <ul style="list-style: none; padding: 0;">
                        ${product.features.map(feature => `<li style="padding: 0.25rem 0; color: #4a5568;">✓ ${feature}</li>`).join('')}
                    </ul>
                </div>
                <div style="display: flex; gap: 1rem;">
                    <button onclick="addToCart(${product.id}); closeQuickView();" style="flex: 1; background: linear-gradient(135deg, #ff9500 0%, #ff6b00 100%); color: white; border: none; padding: 0.875rem; border-radius: 0.5rem; font-weight: 600; cursor: pointer;" ${!product.inStock ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                        ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                    <button onclick="toggleWishlist(${product.id})" style="background: none; border: 1px solid #e2e8f0; padding: 0.875rem 1rem; border-radius: 0.5rem; cursor: pointer; font-size: 1.2rem;">
                        ${wishlist.includes(product.id) ? '❤️' : '🤍'}
                    </button>
                </div>
            `;
            
            modal.classList.add('show');
        }

        function closeQuickView() {
            document.getElementById('quickViewModal').classList.remove('show');
        }

        // Wishlist functionality
        function toggleWishlist(productId) {
            const index = wishlist.indexOf(productId);
            if (index > -1) {
                wishlist.splice(index, 1);
                showNotification('Removed from wishlist');
            } else {
                wishlist.push(productId);
                showNotification('Added to wishlist');
            }
            saveToStorage();
            loadProducts(); // Refresh to update heart icons
        }

        // Enhanced add to cart with animations
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (!product.inStock) {
                showNotification('Product is out of stock', 'error');
                return;
            }
            
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({...product, quantity: 1});
            }
            
            updateCartCount();
            updateCartDisplay();
            saveToStorage();
            showNotification('Product added to cart!', 'success');
            
            // Add visual feedback
            const cartIcon = document.querySelector('.cart-icon');
            cartIcon.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartIcon.style.transform = 'scale(1)';
            }, 200);
        }

        // Update cart count with animation
        function updateCartCount() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const countElement = document.getElementById('cartCount');
            countElement.textContent = totalItems;
            
            if (totalItems > 0) {
                countElement.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    countElement.style.transform = 'scale(1)';
                }, 200);
            }
        }

        // Enhanced cart functionality
        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    updateCartCount();
                    updateCartDisplay();
                    saveToStorage();
                }
            }
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartCount();
            updateCartDisplay();
            saveToStorage();
            showNotification('Item removed from cart');
        }

        // Toggle cart sidebar
        function toggleCart() {
            const sidebar = document.getElementById('cartSidebar');
            sidebar.classList.toggle('open');
            updateCartDisplay();
        }

        // Enhanced cart display
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
            
            cart.forEach(item => {
                total += item.price * item.quantity;
                
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
            cartTotal.style.display = 'block';
        }

        // Enhanced search functionality
        function searchProducts() {
            const query = document.getElementById('searchInput').value.toLowerCase().trim();
            
            if (query === '') {
                filteredProducts = [...products];
            } else {
                filteredProducts = products.filter(product => 
                    product.title.toLowerCase().includes(query) ||
                    product.category.toLowerCase().includes(query) ||
                    product.description.toLowerCase().includes(query) ||
                    product.features.some(feature => feature.toLowerCase().includes(query))
                );
            }
            
            loadProducts();
            
            if (filteredProducts.length === 0 && query !== '') {
                document.getElementById('productsGrid').innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #718096;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
                        <h3>No products found</h3>
                        <p>Try searching with different keywords</p>
                    </div>
                `;
            }
        }

        // Filter by category
        function filterByCategory(category) {
            document.getElementById('categoryFilter').value = category;
            applyFilters();
        }

        // Enhanced filtering system
        function applyFilters() {
            const categoryFilter = document.getElementById('categoryFilter').value;
            const priceFilter = document.getElementById('priceFilter').value;
            const sortFilter = document.getElementById('sortFilter').value;
            
            let filtered = [...products];
            
            // Apply category filter
            if (categoryFilter) {
                filtered = filtered.filter(product => product.category === categoryFilter);
            }
            
            // Apply price filter
            if (priceFilter) {
                const [min, max] = priceFilter.split('-').map(p => p === '+' ? Infinity : parseFloat(p));
                filtered = filtered.filter(product => {
                    if (max === undefined) {
                        return product.price >= min;
                    }
                    return product.price >= min && product.price <= max;
                });
            }
            
            // Apply sorting
            switch (sortFilter) {
                case 'price-low':
                    filtered.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    filtered.sort((a, b) => b.price - a.price);
                    break;
                case 'rating':
                    filtered.sort((a, b) => b.rating - a.rating);
                    break;
                default:
                    // Keep original order for "Featured"
                    break;
            }
            
            filteredProducts = filtered;
            loadProducts();
        }

        // Scroll to products section
        function scrollToProducts() {
            document.querySelector('.products').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }

        // Enhanced checkout process
        function checkout() {
            if (cart.length === 0) {
                showNotification('Your cart is empty', 'error');
                return;
            }
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            // Simulate checkout process
            showNotification('Processing your order...', 'info');
            
            setTimeout(() => {
                showNotification(`Order placed successfully! Total: ${total.toFixed(2)}`, 'success');
                cart = [];
                updateCartCount();
                updateCartDisplay();
                saveToStorage();
                toggleCart();
            }, 2000);
        }

        // Enhanced notification system
        function showNotification(message, type = 'success') {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.className = 'notification show';
            
            // Set color based on type
            switch (type) {
                case 'error':
                    notification.style.background = '#f56565';
                    break;
                case 'info':
                    notification.style.background = '#4299e1';
                    break;
                case 'success':
                default:
                    notification.style.background = '#48bb78';
                    break;
            }
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Close modal when clicking outside
        document.addEventListener('click', function(e) {
            const modal = document.getElementById('quickViewModal');
            if (e.target === modal) {
                closeQuickView();
            }
        });

        // Close cart when clicking outside
        document.addEventListener('click', function(e) {
            const cartSidebar = document.getElementById('cartSidebar');
            const cartIcon = document.querySelector('.cart-icon');
            
            if (!cartSidebar.contains(e.target) && !cartIcon.contains(e.target) && cartSidebar.classList.contains('open')) {
                toggleCart();
            }
        });

        // Keyboard shortcuts 
        document.addEventListener('keydown', function(e) {
            // ESC to close modals
            if (e.key === 'Escape') {
                closeQuickView();
                if (document.getElementById('cartSidebar').classList.contains('open')) {
                    toggleCart();
                }
            }
            
            // Ctrl/Cmd + K to focus search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                document.getElementById('searchInput').focus();
            }
        });
