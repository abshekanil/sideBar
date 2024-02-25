let sideBar = document.querySelector('.side-bar');
let closeBtn = document.querySelector('.closeBtn');
let toggleBtn = document.querySelector('.optionsBtn');

toggleBtn.addEventListener("click", function(){
    if(sideBar.classList.contains('side-Bar-Active'))
    {
        sideBar.classList.remove('side-Bar-Active')
    }
    else{
        sideBar.classList.add('side-Bar-Active');
    }
});

closeBtn.addEventListener("click", function(){
    sideBar.classList.remove('side-Bar-Active');
});