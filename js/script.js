const activeContent1 = () =>{
    const divContent = document.getElementById('active-content');
    divContent.innerHTML = `
        <div class="col-md-6">
            <h1>01.</h1>
            <h3>Fully Branded Portal</h3>
            <p>Assertively incentivize long-term high-impact scenarios whereas accurate imperatives. <br><br>
            Quickly communicate multimedia based materials for enabled channels. Seamlessly disintermediate robust best practices for B2C e-tailers. Efficiently procrastinate prospective experiences.</p>
            <a class="learn-more" href="#">Learn more about this <i class="fas fa-angle-right"></i></a>
        </div>
        <div class="col-md-6">
            <img class="img-fluid" src="images/svg-icon-1.svg" alt="">
        </div>
    `;
}
const activeContent2 = () =>{
    const divContent = document.getElementById('active-content');
    divContent.innerHTML = `
        <div class="col-md-6">
            <h1>02.</h1>
            <h3>Returns to Exchanges</h3>
            <p>Quickly communicate multimedia based materials for enabled channels. Turn Returns to Exchanges Seamlessly disintermediate robust best practices for B2C e-tailers. Efficiently procrastinate prospective experiences. <br><br>
            Dramatically reconceptualize user-centric expertise whereas competitive synergy.</p>
            <a class="learn-more" href="#">Learn more about this <i class="fas fa-angle-right"></i></a>
        </div>
        <div class="col-md-6">
            <img class="img-fluid" src="images/svg-icon-2.svg" alt="">
        </div>
    `;
}
const activeContent3 = () =>{
    const divContent = document.getElementById('active-content');
    divContent.innerHTML = `
        <div class="col-md-6">
            <h1>03.</h1>
            <h3>Multichannel Returns</h3>
            <p>Quickly communicate multimedia based materials to team driven infrastructures. Seamlessly disintermediate robust best practices for B2C e-tailers. Efficiently procrastinate prospective experiences. <br><br>
            Competently disintermediate web-enabled growth strategies whereas professional applications.</p>
            <a class="learn-more" href="#">Learn more about this <i class="fas fa-angle-right"></i></a>
        </div>
        <div class="col-md-6">
            <img class="img-fluid" src="images/svg-icon-3.svg" alt="">
        </div>
    `;
}
const activeContent4 = () =>{
    const divContent = document.getElementById('active-content');
    divContent.innerHTML = `
        <div class="col-md-6">
            <h1>04.</h1>
            <h3>Set goals & timelines</h3>
            <p>Quickly communicate multimedia based materials for enabled channels. Seamlessly disintermediate robust best practices for B2C e-tailers. Efficiently procrastinate prospective experiences. <br><br>
            Continually architect multifunctional schemas rather than superior users. Conveniently scale.</p>
            <a class="learn-more" href="#">Learn more about this <i class="fas fa-angle-right"></i></a>
        </div>
        <div class="col-md-6">
            <img class="img-fluid" src="images/svg-icon-4.svg" alt="">
        </div>
    `;
}

document.getElementById('tech-btn').addEventListener('click', function(){
    activeContent1();
});
document.getElementById('wifi-btn').addEventListener('click', function(){
    activeContent2();
});
document.getElementById('shop-btn').addEventListener('click', function(){
    activeContent3();
});
document.getElementById('store-btn').addEventListener('click', function(){
    activeContent4();
});
/* function btnClick(){
    activeContent();
} */