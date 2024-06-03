document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.querySelector('.language-selector');
    const dropdown = document.querySelector('.dropdown');

    languageSelector.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (event) => {
        if (!languageSelector.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
});
// 2page----------
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.learn-more').addEventListener('click', (event) => {
        event.preventDefault();
        alert('Learn more about what sets us apart!');
    });
});
// 4th page
document.addEventListener('DOMContentLoaded', () => {
    const servicesContainer = document.getElementById('servicesContainer');
    const scrollLine = document.getElementById('scrollLine');
    let isDragging = false;
    let startX, scrollLeft, containerRect;
    const initialScrollPosition = servicesContainer.scrollWidth / 2;
    servicesContainer.scrollLeft = initialScrollPosition;
    updateScrollLine();

    servicesContainer.addEventListener('scroll', updateScrollLine);
    scrollLine.addEventListener('mousedown', (e) => {
        isDragging = true;
        containerRect = servicesContainer.getBoundingClientRect();
        startX = e.clientX;
        scrollLeft = servicesContainer.scrollLeft;
        document.body.style.cursor = 'grabbing';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        document.body.style.cursor = 'default';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.clientX - startX;
        const walk = (x / containerRect.width) * servicesContainer.scrollWidth;
        servicesContainer.scrollLeft = scrollLeft + walk;
    });

    function updateScrollLine() {
        const maxScrollLeft = servicesContainer.scrollWidth - servicesContainer.clientWidth;
        const scrollLeft = servicesContainer.scrollLeft;
        const scrollPercentage = (scrollLeft / maxScrollLeft) * 100;
        scrollLine.style.width = `${scrollPercentage}%`;
    }
});

//   6th page----------
function scrollCarousel(direction) {
    const carouselWrapper = document.getElementById('carousel-content-wrapper');
    const scrollAmount = 200;
    carouselWrapper.scrollBy({
        top: 0,
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

let isDown = false;
let startX;
let scrollLeft;

const carouselWrapper = document.getElementById('carousel-content-wrapper');

carouselWrapper.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carouselWrapper.offsetLeft;
    scrollLeft = carouselWrapper.scrollLeft;
});

carouselWrapper.addEventListener('mouseleave', () => {
    isDown = false;
});

carouselWrapper.addEventListener('mouseup', () => {
    isDown = false;
});

carouselWrapper.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselWrapper.offsetLeft;
    const walk = (x - startX) * 2;
    carouselWrapper.scrollLeft = scrollLeft - walk;
});

// 7thpage 3 box 

document.querySelector('.view-all').addEventListener('click', function (event) {
    event.preventDefault();
    alert('View all case studies clicked!');
});
// 9th------page--------
document.addEventListener('DOMContentLoaded', () => {
    const timePoints = document.querySelectorAll('.interactive-clock-time-point');
    const timeDisplay = document.getElementById('interactive-clock-time');
    const categoryDisplay = document.getElementById('interactive-clock-category');
    const descriptionDisplay = document.getElementById('interactive-clock-description');

    timePoints.forEach(point => {
        point.addEventListener('mouseover', () => {
            const parentGroup = point.parentElement;
            const time = point.getAttribute('data-time');

            timeDisplay.textContent = time;
            categoryDisplay.textContent = 'RETAIL';
            descriptionDisplay.textContent = 'Use the interactive kiosk to order a coffee';

            document.querySelector('.interactive-clock-time-point.active').classList.remove('active');
            document.querySelector('.time-group.active').classList.remove('active');

            point.classList.add('active');
            parentGroup.classList.add('active');
        });
    });

    let isDragging = false;
    let startX, scrollLeft;

    const timeline = document.querySelector('.interactive-clock-timeline-container');
    timeline.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - timeline.offsetLeft;
        scrollLeft = timeline.scrollLeft;
    });

    timeline.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    timeline.addEventListener('mouseup', () => {
        isDragging = false;
    });

    timeline.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - timeline.offsetLeft;
        const walk = (x - startX) * 3;
        timeline.scrollLeft = scrollLeft - walk;
    });
});


// 11-----image
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.unique-card-section11');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    const seeAllLink = document.querySelector('.unique-see-all-section11');

    seeAllLink.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Redirecting to the full list of articles.');
    });
});
