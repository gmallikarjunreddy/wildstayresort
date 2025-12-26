// Initialize Icons
lucide.createIcons();

// Preloader Logic
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const loadingBar = document.getElementById('loadingBar');
    const progressText = document.getElementById('progressText');
    let progress = 0;

    // Simulate loading progress
    const progressInterval = setInterval(() => {
        if (progress < 90) {
            progress += Math.random() * 30;
            if (progress > 90) progress = 90;
        } else if (progress < 100) {
            progress += Math.random() * 5;
        }
        
        progress = Math.min(progress, 100);
        loadingBar.style.width = progress + '%';
        progressText.textContent = Math.floor(progress) + '%';

        if (progress >= 100) {
            clearInterval(progressInterval);
            loadingBar.style.width = '100%';
            progressText.textContent = '100%';
            
            setTimeout(() => {
                preloader.classList.add('loaded');
            }, 800);
        }
    }, 300);
});

// Navbar Scroll Logic
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.remove('bg-transparent', 'py-6', 'md:py-8');
        navbar.classList.add('bg-theme-bg/90', 'backdrop-blur-md', 'py-4', 'border-b', 'border-white/5');
    } else {
        navbar.classList.add('bg-transparent', 'py-6', 'md:py-8');
        navbar.classList.remove('bg-theme-bg/90', 'backdrop-blur-md', 'py-4', 'border-b', 'border-white/5');
    }
});

// Mobile Menu Logic
const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
        // Small delay to allow display:flex to apply before opacity transition
        setTimeout(() => mobileMenu.classList.remove('opacity-0'), 10);
        document.body.style.overflow = 'hidden';
    } else {
        mobileMenu.classList.add('opacity-0');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        }, 500);
        document.body.style.overflow = '';
    }
}

menuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-up, .reveal-text').forEach((el) => {
    observer.observe(el);
});
