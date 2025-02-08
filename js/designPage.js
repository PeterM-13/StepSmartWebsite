const floatRadius = 10;

document.addEventListener('DOMContentLoaded', () => {
    const floatingImgs = document.querySelectorAll('.floatingImg');

    floatingImgs.forEach(img => {
        let originalX, originalY;

        img.addEventListener('mouseenter', (e) => {
            const rect = img.getBoundingClientRect();
            originalX = rect.left + img.offsetWidth / 2;
            originalY = rect.top + img.offsetHeight / 2;
        });

        img.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            let offsetX = mouseX - originalX;
            let offsetY = mouseY - originalY;

            const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
            if (distance > floatRadius) {
                const angle = Math.atan2(offsetY, offsetX);
                offsetX = floatRadius * Math.cos(angle);
                offsetY = floatRadius * Math.sin(angle);
            }

            img.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = 'translate(0, 0)';
        });
    });
});