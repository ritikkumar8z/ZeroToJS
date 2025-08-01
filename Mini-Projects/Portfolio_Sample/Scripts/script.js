 // Project data
        const projects = [
            {
                id: 1,
                title: "E-Commerce Platform", 
                description: "A modern e-commerce solution with real-time inventory and payment processing.",
                category: "web",
                tags: ["React", "Node.js", "MongoDB", "Stripe"], 
                image: "linear-gradient(45deg, #667eea, #764ba2)", 
                details: "Full-stack e-commerce platform featuring user authentication, product catalog, shopping cart, payment processing, and admin dashboard. Built with React frontend and Node.js backend."
            },
            { 
                id: 2, 
                title: "Task Management App", 
                description: "Collaborative project management tool with real-time updates and team features.",
                category: "app",
                tags: ["Vue.js", "Firebase", "PWA"],
                image: "linear-gradient(45deg, #f093fb, #f5576c)",
                details: "Progressive Web App for team collaboration with real-time synchronization, offline support, and intuitive drag-and-drop interface."
            },
            {
                id: 3,
                title: "3D Portfolio Showcase",
                description: "Interactive 3D portfolio website using Three.js and WebGL technologies.",
                category: "web",
                tags: ["Three.js", "WebGL", "GSAP"],
                image: "linear-gradient(45deg, #4facfe, #00f2fe)",
                details: "Immersive 3D experience showcasing creative projects with interactive elements, particle systems, and smooth animations."
            },
            {
                id: 4,
                title: "Puzzle Game",
                description: "Browser-based puzzle game with multiple levels and achievements system.",
                category: "game",
                tags: ["JavaScript", "Canvas", "LocalStorage"],
                image: "linear-gradient(45deg, #43e97b, #38f9d7)",
                details: "Engaging puzzle game with procedurally generated levels, achievement system, and competitive leaderboards."
            },
            {
                id: 5,
                title: "Code Generator Tool",
                description: "Automated code generation tool for rapid prototyping and development.",
                category: "tool",
                tags: ["Python", "AI", "Templates"],
                image: "linear-gradient(45deg, #fa709a, #fee140)",
                details: "AI-powered code generator that creates boilerplate code, components, and project structures based on user specifications."
            },
            {
                id: 6,
                title: "Weather Dashboard",
                description: "Real-time weather monitoring dashboard with interactive maps and forecasts.",
                category: "web",
                tags: ["React", "APIs", "Charts"],
                image: "linear-gradient(45deg, #a8edea, #fed6e3)",
                details: "Comprehensive weather application with location-based forecasts, interactive maps, and detailed meteorological data visualization."
            }
        ];

        // Initialize the application
        document.addEventListener('DOMContentLoaded', function() {
            initializeApp();
        });

        function initializeApp() {
            createParticles();
            setupEventListeners();
            setupTypewriter();
            setupScrollAnimations();
            setupCustomCursor();
            loadProjects();
            
            // Load saved theme
            const savedTheme = localStorage.getItem('theme') || 'dark';
            document.body.setAttribute('data-theme', savedTheme);
            updateThemeButton(savedTheme);
        }

        function createParticles() {
            const particlesContainer = document.querySelector('.particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        function setupEventListeners() {
            // Navigation
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetPage = link.getAttribute('data-page');
                    navigateToPage(targetPage);
                });
            });

            // CTA buttons
            document.querySelectorAll('[data-page]').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetPage = btn.getAttribute('data-page');
                    navigateToPage(targetPage);
                });
            });

            // Theme toggle
            document.querySelectorAll('.theme-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const theme = btn.getAttribute('data-theme');
                    document.body.setAttribute('data-theme', theme);
                    localStorage.setItem('theme', theme);
                    updateThemeButton(theme);
                }); 
            });

            // Filter buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const filter = btn.getAttribute('data-filter');
                    filterProjects(filter);
                    
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                });
            });

            // Back to top
            const backToTop = document.getElementById('back-to-top');
            backToTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            // Scroll events
            window.addEventListener('scroll', () => {
                updateScrollProgress();
                toggleBackToTop();
            });

            // Contact form
            document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);

            // Modal close
            document.querySelector('.modal-close').addEventListener('click', closeModal);
            document.getElementById('project-modal').addEventListener('click', (e) => {
                if (e.target.id === 'project-modal') closeModal();
            });
        }

        function setupTypewriter() {
            const typewriter = document.getElementById('typewriter');
            const texts = [
                'Creative Developer',
                'UI/UX Designer',
                'Problem Solver',
                'Digital Innovator'
            ];
            
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            
            function type() {
                const currentText = texts[textIndex];
                
                if (isDeleting) {
                    typewriter.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    typewriter.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                }
                
                let typeSpeed = isDeleting ? 50 : 100;
                
                if (!isDeleting && charIndex === currentText.length) {
                    typeSpeed = 2000;
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    typeSpeed = 500;
                }
                
                setTimeout(type, typeSpeed);
            }
            
            type();
        }

        function setupScrollAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        
                        // Animate skill progress bars
                        if (entry.target.classList.contains('skill-card')) {
                            const progressBar = entry.target.querySelector('.skill-progress-bar');
                            if (progressBar) {
                                const width = progressBar.getAttribute('data-width');
                                setTimeout(() => {
                                    progressBar.style.width = width + '%';
                                }, 300);
                            }
                        }
                    }
                });
            }, { threshold: 0.1 });

            // Observe elements for animation
            document.querySelectorAll('.fade-in, .timeline-item, .skill-card').forEach(el => {
                observer.observe(el);
            });
        }

        function setupCustomCursor() {
            const cursor = document.querySelector('.custom-cursor');
            
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });
            
            document.querySelectorAll('a, button, .project-card').forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
            });
        }

        function navigateToPage(pageName) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Show target page
            document.getElementById(pageName).classList.add('active');
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`[data-page="${pageName}"]`).classList.add('active');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function updateThemeButton(theme) {
            document.querySelectorAll('.theme-btn').forEach(btn => {
                btn.style.transform = btn.getAttribute('data-theme') === theme ? 'scale(1.2)' : 'scale(1)';
            });
        }

        function loadProjects() {
            const projectsGrid = document.getElementById('projects-grid');
            projectsGrid.innerHTML = '';
            
            projects.forEach(project => {
                const projectCard = createProjectCard(project);
                projectsGrid.appendChild(projectCard);
            });
        }

        function createProjectCard(project) {
            const card = document.createElement('div');
            card.className = `project-card fade-in ${project.category}`;
            card.innerHTML = `
                <div class="project-image" style="background: ${project.image}"></div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            
            card.addEventListener('click', () => openProjectModal(project));
            
            return card;
        }

        function filterProjects(category) {
            const projectCards = document.querySelectorAll('.project-card');
            
            projectCards.forEach(card => {
                if (category === 'all' || card.classList.contains(category)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        }

        function openProjectModal(project) {
            const modal = document.getElementById('project-modal');
            const modalContent = document.getElementById('modal-content');
            
            modalContent.innerHTML = `
                <div class="project-image" style="background: ${project.image}; height: 300px; border-radius: 15px; margin-bottom: 30px;"></div>
                <h2>${project.title}</h2>
                <p style="margin: 20px 0; line-height: 1.6;">${project.details}</p>
                <div class="project-tags" style="margin: 20px 0;">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div style="display: flex; gap: 20px; margin-top: 30px;">
                    <a href="#" class="btn btn-primary">Live Demo</a>
                    <a href="#" class="btn btn-secondary">View Code</a>
                </div>
            `;
            
            modal.style.display = 'block';
            setTimeout(() => modal.classList.add('active'), 10);
        }

        function closeModal() {
            const modal = document.getElementById('project-modal');
            modal.classList.remove('active');
            setTimeout(() => modal.style.display = 'none', 300);
        }

        function updateScrollProgress() {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            document.querySelector('.scroll-progress').style.width = scrollPercent + '%';
        }

        function toggleBackToTop() {
            const backToTop = document.getElementById('back-to-top');
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }

        function handleFormSubmit(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            
            // Simple form validation
            const inputs = e.target.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderBottomColor = 'var(--secondary)';
                } else {
                    input.style.borderBottomColor = 'var(--primary)';
                }
            });
            
            if (isValid) {
                // Simulate form submission
                const submitBtn = e.target.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    submitBtn.textContent = 'Message Sent! ✅';
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        e.target.reset();
                    }, 2000);
                }, 1500);
            }
        }

        // Keyboard shortcuts (Easter egg)
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'D') {
                console.log('🎉 Developer mode activated! Thanks for checking the code!');
                document.body.style.filter = 'hue-rotate(180deg)';
                setTimeout(() => {
                    document.body.style.filter = 'none';
                }, 2000);
            }
        });

        // Add some magic sparkles on click
        document.addEventListener('click', (e) => {
            if (Math.random() > 0.7) {
                createSparkle(e.clientX, e.clientY);
            }
        });

        function createSparkle(x, y) {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'fixed';
            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';
            sparkle.style.width = '6px';
            sparkle.style.height = '6px';
            sparkle.style.background = 'var(--primary)';
            sparkle.style.borderRadius = '50%';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '9999';
            sparkle.style.animation = 'sparkle 1s ease-out forwards';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }

        // Add sparkle animation
        const sparkleStyle = document.createElement('style');
        sparkleStyle.textContent = `
            @keyframes sparkle {
                0% {
                    transform: scale(0) rotate(0deg);
                    opacity: 1;
                }
                50% {
                    transform: scale(1) rotate(180deg);
                    opacity: 1;
                }
                100% {
                    transform: scale(0) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(sparkleStyle);
