// Sample vlog data
        const vlogData = [
            {
                id: 1,
                title: "Epic Road Trip Through Iceland",
                description: "Join me on an incredible journey through Iceland's stunning landscapes, from glaciers to geysers!",
                category: "travel",
                author: "Alex Travel",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                thumbnail: "https://images.unsplash.com/photo-1539066636863-1ec19e8a4d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                duration: "12:34",
                views: "2.1M"
            }, 
            {
                id: 2,
                title: "Authentic Italian Pasta Making",
                description: "Learn how to make fresh pasta from scratch with traditional Italian techniques passed down for generations.",
                category: "food",
                author: "Maria Cucina",
                avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                thumbnail: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                duration: "18:45",
                views: "890K"
            },
            {
                id: 3,
                title: "Morning Routine for Success",
                description: "Transform your mornings with this powerful routine that will boost your productivity and energy levels.",
                category: "lifestyle",
                author: "Life Coach Emma",
                avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                duration: "15:20",
                views: "1.5M"
            },
            {
                id: 4,
                title: "Latest iPhone 15 Pro Review",
                description: "Comprehensive review of Apple's latest flagship with real-world testing and honest opinions.",
                category: "tech",
                author: "Tech Guru Mike",
                avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                thumbnail: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                duration: "22:15",
                views: "3.2M"
            },
            {
                id: 5,
                title: "Spring Fashion Haul 2025",
                description: "Check out the latest spring trends with affordable finds and styling tips for every occasion.",
                category: "fashion",
                author: "Style Maven Sophie",
                avatar: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                duration: "16:42",
                views: "675K"
            },
            {
                id: 6,
                title: "Cozy Home Office Setup",
                description: "Create the perfect work-from-home space that inspires productivity and creativity on any budget.",
                category: "lifestyle",
                author: "Home Design Pro",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                duration: "13:28",
                views: "1.1M"
            }
        ];

        // DOM Elements
        const header = document.getElementById('header');
        const themeToggle = document.getElementById('theme-toggle');
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        const vlogsGrid = document.getElementById('vlogs-grid');
        const filterOptions = document.querySelectorAll('.filter-option');
        const newsletterFloat = document.getElementById('newsletter-float');

        // Theme Management
        let currentTheme = 'light';

        function toggleTheme() {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', currentTheme);
            
            const icon = themeToggle.querySelector('i');
            icon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }

        themeToggle.addEventListener('click', toggleTheme);

        // Mobile Menu Toggle
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        });

        // Header Scroll Effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Hero Carousel
        let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.hero-slide');

        function nextSlide() {
            slides[currentSlideIndex].classList.remove('active');
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            slides[currentSlideIndex].classList.add('active');
        }

        // Auto-advance hero carousel
        setInterval(nextSlide, 5000);

        // Render Vlogs
        function renderVlogs(vlogs = vlogData) {
            vlogsGrid.innerHTML = vlogs.map(vlog => `
                <div class="vlog-card" data-category="${vlog.category}">
                    <div class="vlog-thumbnail">
                        <img src="${vlog.thumbnail}" alt="${vlog.title}" class="vlog-image">
                        <div class="play-button">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                    <div class="vlog-content">
                        <span class="vlog-category">${vlog.category.charAt(0).toUpperCase() + vlog.category.slice(1)}</span>
                        <h3 class="vlog-title">${vlog.title}</h3>
                        <p class="vlog-description">${vlog.description}</p>
                        <div class="vlog-meta">
                            <div class="vlog-author">
                                <img src="${vlog.avatar}" alt="${vlog.author}" class="author-avatar">
                                <span>${vlog.author}</span>
                            </div>
                            <div class="vlog-stats">
                                <span>${vlog.views} views • ${vlog.duration}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Category Filtering
        filterOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Update active filter
                filterOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                const category = option.dataset.category;
                const filteredVlogs = category === 'all' 
                    ? vlogData 
                    : vlogData.filter(vlog => vlog.category === category);
                
                renderVlogs(filteredVlogs);
            });
        });

        // Testimonials Carousel
        let currentTestimonial = 1;
        const totalTestimonials = 3;

        function currentSlide(n) {
            showSlide(currentTestimonial = n);
        }

        function showSlide(n) {
            const slides = document.querySelectorAll('.testimonial-slide');
            const dots = document.querySelectorAll('.dot');
            
            if (n > totalTestimonials) currentTestimonial = 1;
            if (n < 1) currentTestimonial = totalTestimonials;
            
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            slides[currentTestimonial - 1].classList.add('active');
            dots[currentTestimonial - 1].classList.add('active');
        }

        // Auto-advance testimonials
        setInterval(() => {
            currentTestimonial++;
            if (currentTestimonial > totalTestimonials) currentTestimonial = 1;
            showSlide(currentTestimonial);
        }, 6000);

        // Newsletter Functions
        function showNewsletter() {
            newsletterFloat.classList.add('show');
        }

        function closeNewsletter() {
            newsletterFloat.classList.remove('show');
        }

        function subscribeNewsletter(event) {
            event.preventDefault();
            const email = event.target.querySelector('.newsletter-input').value;
            
            // Simulate subscription
            alert(`Thank you for subscribing with ${email}! 🎉`);
            closeNewsletter();
            event.target.reset();
        }

        // Show newsletter after 10 seconds
        setTimeout(showNewsletter, 10000);

        // Scroll Animations
        function animateOnScroll() {
            const elements = document.querySelectorAll('.fade-in');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        }

        window.addEventListener('scroll', animateOnScroll);

        // Search Functionality
        const searchInput = document.querySelector('.search-input');
        
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            if (searchTerm === '') {
                renderVlogs(vlogData);
                return;
            }
            
            const filteredVlogs = vlogData.filter(vlog => 
                vlog.title.toLowerCase().includes(searchTerm) ||
                vlog.description.toLowerCase().includes(searchTerm) ||
                vlog.category.toLowerCase().includes(searchTerm) ||
                vlog.author.toLowerCase().includes(searchTerm)
            );
            
            renderVlogs(filteredVlogs);
        });

        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
                }
            });
        });

        // Play Button Click Effect
        document.addEventListener('click', (e) => {
            if (e.target.closest('.play-button')) {
                const button = e.target.closest('.play-button');
                button.style.transform = 'translate(-50%, -50%) scale(0.9)';
                
                setTimeout(() => {
                    button.style.transform = 'translate(-50%, -50%) scale(1.1)';
                    
                    // Simulate video play
                    alert('🎥 Video would start playing here!');
                }, 150);
                
                setTimeout(() => {
                    button.style.transform = 'translate(-50%, -50%) scale(1)';
                }, 300);
            }
        });

        // Initialize page
        document.addEventListener('DOMContentLoaded', () => {
            renderVlogs();
            animateOnScroll();
        });

        // Parallax Effect for Hero Section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero-background');
            const speed = scrolled * 0.5;
            
            if (parallax) {
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });

        // Add loading animation for images
        document.addEventListener('DOMContentLoaded', () => {
            const images = document.querySelectorAll('img');
            
            images.forEach(img => {
                img.addEventListener('load', () => {
                    img.style.opacity = '1';
                });
                
                // Set initial opacity
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease';
            });
        });

        // Enhanced mobile experience
        if ('ontouchstart' in window) {
            document.body.classList.add('touch-device');
            
            // Add touch feedback for buttons
            document.addEventListener('touchstart', (e) => {
                if (e.target.matches('button, .cta-button, .filter-option')) {
                    e.target.style.transform = 'scale(0.95)';
                }
            });
            
            document.addEventListener('touchend', (e) => {
                if (e.target.matches('button, .cta-button, .filter-option')) {
                    setTimeout(() => {
                        e.target.style.transform = 'scale(1)';
                    }, 150);
                }
            });
        }