
window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let leftText = document.getElementById('text-left');
    let rightText = document.getElementById('text-right');
    leftText.style.opacity = 0;
    rightText.style.opacity = 0;


    if (scrollY > 1130) {
        leftText.style.opacity = 1;
        leftText.style.transition = 'opacity 0.5s ease-in-out';
    }

    if (scrollY > 2000) {
        leftText.style.opacity = 0;
        leftText.style.transition = 'opacity 0.5s ease-in-out';
        setTimeout(() => leftText.textContent = "My name is...", 700);
        
    }

    if (scrollY > 5000) {
        leftText.style.opacity = 1;
        leftText.style.transition = 'opacity 0.5s ease-in-out';
    }

    if (scrollY > 7000) {
        rightText.style.opacity = 1;
        rightText.style.transition = 'opacity 0.5s ease-in-out';
    }
    

})


//1130

//5800