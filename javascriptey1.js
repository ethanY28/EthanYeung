function toggleTheme() {
            document.body.classList.toggle('dark-theme');
            const themeToggle = document.querySelector('.theme-toggle i');
            if (document.body.classList.contains('dark-theme')) {
                themeToggle.classList.remove('fa-sun');
                themeToggle.classList.add('fa-moon');
            } else {
                themeToggle.classList.remove('fa-moon');
                themeToggle.classList.add('fa-sun');
            }
        }
function handleScroll() {
            const scrollIcon = document.getElementById('scroll-icon');
            const backToTop = document.getElementById('back-to-top');
            if (window.scrollY > 50) {
                scrollIcon.classList.add('hidden');
                backToTop.style.display = 'block';
            } else {
                scrollIcon.classList.remove('hidden');
                backToTop.style.display = 'none';
            }
        }

        function typeEffect(element, text, delay = 100) {
            let index = 0;
            function type() {
                if (index < text.length) {
                    element.innerHTML += text.charAt(index);
                    index++;
                    setTimeout(type, delay);
                }
            }
            type();
        }

        function toggleMenu() {
            const buttonContainer = document.getElementById('button-container');
            const menuToggle = document.getElementById('menu-toggle');
            buttonContainer.classList.toggle('show');
            menuToggle.classList.toggle('open');
            menuToggle.innerHTML = menuToggle.classList.contains('open') ? '<i class="fas fa-times"></i><span>Close</span>' : '<i class="fas fa-bars"></i><span>Menu</span>';
        }

        function closeMenu() {
            const buttonContainer = document.getElementById('button-container');
            const menuToggle = document.getElementById('menu-toggle');
            buttonContainer.classList.remove('show');
            menuToggle.classList.remove('open');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i><span>Menu</span>';
        }

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        window.addEventListener('load', () => {
            typeEffect(document.getElementById('typing-effect'), 'Welcome to my personal website!');
        });
        window.addEventListener('scroll', handleScroll);