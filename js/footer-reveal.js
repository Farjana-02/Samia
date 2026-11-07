(function () {
    'use strict';

    var motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            if (!motion.matches) entry.target.classList.add('contact-reveal');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.talk-links').forEach(function (list) {
        Array.prototype.forEach.call(list.children, function (item, index) {
            item.style.setProperty('--contact-delay', (index * 120) + 'ms');
        });
        observer.observe(list);
    });
})();
