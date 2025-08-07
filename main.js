let slideIndex = 1;

function plusSlide(n){
    showSlide(slideIndex += n);
};

function showSlide(n) {
    let slide = document.getElementsByClassName("myslide");
    let dots = document.getElementsByClassName("dot");

    if (n > slide.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slide.length}

    for(let i=0;i < slide.length;i++){
        slide[i].style.display = 'none';
    };
    
    slide[slideIndex-1].style.display = 'block';
};

showSlide();

