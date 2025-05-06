let currentSection;

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let viewportHeight = window.innerHeight;
    let scrollYInVH = (scrollY / viewportHeight) * 100;

    let leftText = document.getElementById('text-left');
    let rightText = document.getElementById('text-right');
    let centerText = document.getElementById('text-center');

    if (scrollYInVH < 70) {
        leftText.style.opacity = 0;
    }else if (scrollYInVH > 70 && scrollYInVH < 200 && currentSection !== 'welcome') { 
        leftText.textContent = 'Welcome';
        leftText.style.opacity = 1;
        currentSection = 'welcome';
    }else if (scrollYInVH > 200 && scrollYInVH < 250) {
        leftText.style.opacity = 0;
        rightText.style.opacity = 0;
    }else if (scrollYInVH > 250 && scrollYInVH < 300 && currentSection !== 'myname') {
        leftText.textContent = 'My name is...';
        leftText.style.opacity = 1;
        centerText.style.opacity = 0;
        rightText.style.opacity = 0;
        currentSection = 'myname';
    }else if (scrollYInVH > 300 && scrollYInVH < 400 && currentSection !== 'name') {
        leftText.textContent = 'My name is...';
        rightText.textContent = "Yahshua"
        centerText.style.opacity = 0;
        leftText.style.opacity = 1;
        rightText.style.opacity = 1;
        currentSection = 'name';
    }else if (scrollYInVH > 450 && scrollYInVH < 500 && currentSection !== 'hope') {
        centerText.style.opacity = 1;
        leftText.style.opacity = 0;
        rightText.style.opacity = 0;
        currentSection = 'hope';
    } else {
        currentSection = null;
    }
    

})


//1130

//5800