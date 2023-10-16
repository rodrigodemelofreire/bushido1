        const listItems = document.querySelectorAll('li');
        listItems.forEach((item, index) => {
            item.style.transition = `transform 0.1s ease ${index * 0.1}s`;
            item.addEventListener('mouseover', () => {
                item.style.transform = 'scale(1.05)';
            });
            item.addEventListener('mouseout', () => {
                item.style.transform = 'scale(1)';
            });
        });