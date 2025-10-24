// Dogecoin Core Documentation JavaScript
// Such interactivity, much functionality!

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initPlatformTabs();
    initExampleTabs();
    initCodeCopy();
    initDogeWords();
    initScrollAnimations();
    initSmoothScrolling();
});

// Sidebar navigation functionality
function initNavigation() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const mainContent = document.querySelector('.main-content');
    const searchInput = document.getElementById('sidebarSearch');
    
    // Toggle sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('open');
        sidebarOverlay.classList.toggle('active');
        
        // Add/remove sidebar class to main content
        if (window.innerWidth > 1024) {
            mainContent.classList.toggle('with-sidebar');
        }
        
        // Prevent body scroll when sidebar is open on mobile
        if (window.innerWidth <= 1024) {
            if (sidebar.classList.contains('open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    }
    
    // Close sidebar
    function closeSidebar() {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
        mainContent.classList.remove('with-sidebar');
        document.body.style.overflow = '';
    }
    
    // Event listeners
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }
    
    if (sidebarClose) {
        sidebarClose.addEventListener('click', closeSidebar);
    }
    
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }
    
    // Close sidebar when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 1024) {
                closeSidebar();
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            // Desktop: sidebar can be open with content shift
            if (sidebar.classList.contains('open')) {
                mainContent.classList.add('with-sidebar');
            }
            document.body.style.overflow = '';
        } else {
            // Mobile: sidebar overlay, no content shift
            mainContent.classList.remove('with-sidebar');
            if (!sidebar.classList.contains('open')) {
                document.body.style.overflow = '';
            }
        }
    });
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                const linkText = link.textContent.toLowerCase();
                const navSection = link.closest('.nav-section');
                
                if (linkText.includes(searchTerm) || searchTerm === '') {
                    link.style.display = 'flex';
                    if (navSection) {
                        navSection.style.display = 'block';
                    }
                } else {
                    link.style.display = 'none';
                }
            });
            
            // Hide empty sections
            const navSections = document.querySelectorAll('.nav-section');
            navSections.forEach(section => {
                const visibleLinks = section.querySelectorAll('.nav-link[style*="flex"]');
                if (visibleLinks.length === 0 && searchTerm !== '') {
                    section.style.display = 'none';
                } else {
                    section.style.display = 'block';
                }
            });
        });
    }

    // Add active class to current section
    const sections = document.querySelectorAll('.section');
    const navLinksArray = Array.from(navLinks);

    function updateActiveNavLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinksArray.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink();
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (searchInput) {
                searchInput.focus();
            }
        }
        
        // Escape to close sidebar
        if (e.key === 'Escape' && sidebar.classList.contains('open')) {
            closeSidebar();
        }
    });
}

// Platform tabs functionality
function initPlatformTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const platformSections = document.querySelectorAll('.platform-section');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            
            // Remove active class from all tabs and sections
            tabBtns.forEach(tab => tab.classList.remove('active'));
            platformSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding section
            this.classList.add('active');
            const targetSection = document.getElementById(platform);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
}

// Example tabs functionality
function initExampleTabs() {
    const exampleTabs = document.querySelectorAll('.example-tab');
    const exampleSections = document.querySelectorAll('.example-section');

    exampleTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const example = this.getAttribute('data-example');
            
            // Remove active class from all tabs and sections
            exampleTabs.forEach(t => t.classList.remove('active'));
            exampleSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding section
            this.classList.add('active');
            const targetSection = document.getElementById(example);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
}

// Code copy functionality
function initCodeCopy() {
    // Add copy functionality to all copy buttons
    window.copyCode = function(button) {
        const codeBlock = button.closest('.code-block');
        const codeElement = codeBlock.querySelector('code');
        const text = codeElement.textContent;
        
        // Create temporary textarea to copy text
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        
        // Show feedback
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.background = '#32CD32';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    };
}

// Random Doge words functionality
function initDogeWords() {
    const dogeWords = ['WOW', 'SUCH', 'MUCH', 'SO', 'VERY', 'MANY', 'PAW', 'DOGE', 'WOW', 'AMAZE'];
    const randomDogeElements = document.querySelectorAll('.random-doge');
    
    function updateRandomDogeWords() {
        randomDogeElements.forEach(element => {
            const randomWord = dogeWords[Math.floor(Math.random() * dogeWords.length)];
            element.textContent = randomWord;
        });
    }
    
    // Update every 3 seconds
    setInterval(updateRandomDogeWords, 3000);
    updateRandomDogeWords();
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll('.section, .quick-start-card, .benefit, .project, .tool, .education-item');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add some fun interactive elements
function addFunInteractions() {
    // Add click effects to doge emojis
    const dogeEmojis = document.querySelectorAll('.doge-emoji');
    dogeEmojis.forEach(emoji => {
        emoji.addEventListener('click', function() {
            this.style.transform = 'scale(1.2) rotate(10deg)';
            this.style.transition = 'transform 0.3s ease';
            
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });

    // Add hover effects to code blocks
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach(block => {
        block.addEventListener('mouseenter', function() {
            this.style.borderColor = 'var(--accent-primary)';
            this.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.3)';
        });
        
        block.addEventListener('mouseleave', function() {
            this.style.borderColor = '';
            this.style.boxShadow = '';
        });
    });

    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn, .tab-btn, .example-tab');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// Initialize fun interactions after DOM is loaded
document.addEventListener('DOMContentLoaded', addFunInteractions);

// Add some Easter eggs
function addEasterEggs() {
    // Konami code easter egg
    let konamiCode = [];
    const konamiSequence = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.code);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            // Trigger easter egg
            showDogeRain();
            konamiCode = [];
        }
    });
}

function showDogeRain() {
    // Create doge rain effect
    const rainContainer = document.createElement('div');
    rainContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        overflow: hidden;
    `;
    
    document.body.appendChild(rainContainer);
    
    // Create falling doge emojis
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const doge = document.createElement('div');
            doge.textContent = '🐕';
            doge.style.cssText = `
                position: absolute;
                top: -50px;
                left: ${Math.random() * 100}%;
                font-size: 2rem;
                animation: dogeFall 3s linear forwards;
                pointer-events: none;
            `;
            
            rainContainer.appendChild(doge);
            
            setTimeout(() => {
                if (doge.parentNode) {
                    doge.parentNode.removeChild(doge);
                }
            }, 3000);
        }, i * 100);
    }
    
    // Add CSS for falling animation
    if (!document.getElementById('doge-rain-styles')) {
        const style = document.createElement('style');
        style.id = 'doge-rain-styles';
        style.textContent = `
            @keyframes dogeFall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remove rain container after animation
    setTimeout(() => {
        if (rainContainer.parentNode) {
            rainContainer.parentNode.removeChild(rainContainer);
        }
    }, 5000);
}

// Initialize easter eggs
document.addEventListener('DOMContentLoaded', addEasterEggs);

// Add some performance optimizations
function optimizePerformance() {
    // Lazy load images (if any are added later)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', optimizePerformance);

// Add keyboard navigation support
function addKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Tab navigation for platform tabs
        if (e.key === 'Tab' && e.target.classList.contains('tab-btn')) {
            const tabs = Array.from(document.querySelectorAll('.tab-btn'));
            const currentIndex = tabs.indexOf(e.target);
            const nextIndex = e.shiftKey ? currentIndex - 1 : currentIndex + 1;
            
            if (nextIndex >= 0 && nextIndex < tabs.length) {
                e.preventDefault();
                tabs[nextIndex].focus();
            }
        }
        
        // Enter key to activate focused tab
        if (e.key === 'Enter' && e.target.classList.contains('tab-btn')) {
            e.target.click();
        }
    });
}

// Initialize keyboard navigation
document.addEventListener('DOMContentLoaded', addKeyboardNavigation);

// Add search functionality (basic)
function addSearchFunctionality() {
    // This could be expanded with a proper search implementation
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search documentation...';
    searchInput.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 10px;
        border: 1px solid var(--accent-primary);
        border-radius: 5px;
        background: var(--bg-primary);
        color: var(--text-primary);
        z-index: 1001;
        display: none;
    `;
    
    document.body.appendChild(searchInput);
    
    // Toggle search with Ctrl+K
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            searchInput.style.display = searchInput.style.display === 'none' ? 'block' : 'none';
            if (searchInput.style.display === 'block') {
                searchInput.focus();
            }
        }
    });
}

// Initialize search functionality
document.addEventListener('DOMContentLoaded', addSearchFunctionality);

// Add fun banana button with Doge words
function addBananaButton() {
    const bananaButton = document.createElement('button');
    bananaButton.innerHTML = '<span class="material-icons">pets</span>';
    bananaButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: var(--accent-primary);
        color: var(--bg-primary);
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 1000;
        box-shadow: var(--shadow-md);
        transition: all 0.3s ease;
    `;
    
    // Doge words array
    const dogeWords = [
        'SUCH', 'MUCH', 'SO', 'WOW', 'PAW', 'DOGE', 'VERY', 'MANY', 'WOW', 'AMAZE',
        'COIN', 'CRYPTO', 'BLOCKCHAIN', 'MINING', 'FAMILY', 'MOON', 'FRIENDS', 'CODING',
        'SHIBE', 'DOGE', 'WOW',
        'SUCH', 'MUCH', 'SO', 'VERY', 'MANY', 'WOW', 'AMAZE', 'COOL', 'NICE', 'GOOD'
    ];
    
    // Random colors array
    const colors = [
        '#FFD700', '#FF8C00', '#DC143C', '#1E90FF', '#32CD32', '#9370DB',
        '#FF69B4', '#00CED1', '#FF1493', '#00FF7F', '#FF4500', '#8A2BE2',
        '#FF6347', '#00BFFF', '#FFD700', '#FF69B4', '#32CD32', '#FF8C00'
    ];
    
    bananaButton.addEventListener('click', function() {
        // Create random words effect
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const word = document.createElement('div');
                const randomWord = dogeWords[Math.floor(Math.random() * dogeWords.length)];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                const randomSize = Math.random() * 25 + 12; // 12-37px
                const randomRotation = (Math.random() - 0.5) * 30; // -15 to +15 degrees
                const randomDuration = Math.random() * 2000 + 1500; // 1.5-3.5 seconds
                
                word.textContent = randomWord;
                word.style.cssText = `
                    position: fixed;
                    font-family: 'Comic Neue', cursive;
                    font-weight: bold;
                    font-size: ${randomSize}px;
                    color: ${randomColor};
                    pointer-events: none;
                    z-index: 9999;
                    left: ${Math.random() * (window.innerWidth - 100)}px;
                    top: ${Math.random() * (window.innerHeight - 50)}px;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
                    transform: rotate(${randomRotation}deg);
                `;
                
                // Add fade in/out animation for this specific word
                const wordId = 'word-' + Math.random().toString(36).substr(2, 9);
                word.id = wordId;
                
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes fadeInOut-${wordId} {
                        0% {
                            opacity: 0;
                            transform: rotate(${randomRotation}deg) scale(0.5);
                        }
                        20% {
                            opacity: 1;
                            transform: rotate(${randomRotation}deg) scale(1.1);
                        }
                        80% {
                            opacity: 1;
                            transform: rotate(${randomRotation}deg) scale(1);
                        }
                        100% {
                            opacity: 0;
                            transform: rotate(${randomRotation}deg) scale(0.8);
                        }
                    }
                `;
                document.head.appendChild(style);
                
                // Update the animation name
                word.style.animation = `fadeInOut-${wordId} ${randomDuration}ms ease-in-out forwards`;
                
                document.body.appendChild(word);
                
                // Remove word after animation
                setTimeout(() => {
                    if (word.parentNode) {
                        word.parentNode.removeChild(word);
                    }
                }, randomDuration);
            }, i * 80); // Stagger appearance
        }
        
        // Button bounce animation (no rotation)
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
    
    document.body.appendChild(bananaButton);
}

// Initialize banana button
document.addEventListener('DOMContentLoaded', addBananaButton);

// Console easter egg
console.log(`
🐕 Welcome to Dogecoin Core Documentation! 🐕

Such code, much JavaScript!
Wow, you found the console easter egg!

If you're a developer working with Dogecoin Core:
- Check out the RPC examples in the documentation
- Try the OP_CODES for smart contracts
- Learn about merged mining
- Contribute to the project!

Much thanks for learning with us! 🚀
`);

// Export functions for potential external use
window.DogeDocs = {
    copyCode: window.copyCode,
    showDogeRain: showDogeRain
};
