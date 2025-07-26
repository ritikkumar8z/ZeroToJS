// Document ready
        document.addEventListener('DOMContentLoaded', function() {
            // Cart toggle
            const cart = document.getElementById('cart');
            const cartSidebar = document.querySelector('.cart-sidebar');
            const closeCart = document.querySelector('.close-cart');
            
            cart.addEventListener('click', function() {
                cartSidebar.classList.add('active');
            });
            
            closeCart.addEventListener('click', function() {
                cartSidebar.classList.remove('active');
            });
            
            // Simulate loading content
            setTimeout(function() {
                // Show hero slider
                const heroSlider = document.querySelector('.hero-slider');
                const heroSlides = document.querySelectorAll('.hero-slide');
                const sliderDots = document.querySelectorAll('.slider-nav-dot');
                
                if (heroSlider) {
                    heroSlider.classList.remove('hidden');
                    heroSlides[0].classList.remove('hidden');
                    sliderDots[0].classList.add('active');
                }
                
                // Show loading placeholders
                const placeholders = document.querySelectorAll('[class*="pulse"]');
                placeholders.forEach(placeholder => {
                    placeholder.parentElement.parentElement.classList.remove('hidden');
                    placeholder.parentElement.remove();
                });
                
                // Show product sections
                const hiddenSections = document.querySelectorAll('.hidden');
                hiddenSections.forEach(section => {
                    section.classList.remove('hidden');
                });
                
                // Initialize hero slider if elements exist
                if (heroSlider && heroSlides.length > 0) {
                    let currentSlide = 0;
                    
                    function showSlide(index) {
                        heroSlides.forEach((slide, i) => {
                            slide.style.opacity = i === index ? '1' : '0';
                        });
                        
                        sliderDots.forEach((dot, i) => {
                            dot.classList.toggle('active', i === index);
                        });
                    }
                    
                    function nextSlide() {
                        currentSlide = (currentSlide + 1) % heroSlides.length;
                        showSlide(currentSlide);
                    }
                    
                    sliderDots.forEach((dot, index) => {
                        dot.addEventListener('click', () => {
                            currentSlide = index;
                            showSlide(currentSlide);
                        });
                    });
                    
                    // Auto-advance slides every 3 seconds
                    setInterval(nextSlide, 5000);
                    
                    // Show first slide
                    showSlide(0);
                }
            }, 1000);
            
            // Product hover effects
            const productCards = document.querySelectorAll('.product-card');
            productCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.classList.add('shadow-lg');
                });
                
                card.addEventListener('mouseleave', function() {
                    this.classList.remove('shadow-lg');
                });
            });
            
            // Search bar focus effect
            const searchBar = document.querySelector('.search-bar');
            if (searchBar) {
                searchBar.addEventListener('focusin', function() {
                    this.classList.add('ring-2', 'ring-yellow-400');
                });
                
                searchBar.addEventListener('focusout', function() {
                    this.classList.remove('ring-2', 'ring-yellow-400');
                });
            }
        });