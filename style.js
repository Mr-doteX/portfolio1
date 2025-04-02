var setVanta = () => {
    if (window.VANTA) window.VANTA.GLOBE({
        el: document.getElementById("animeGlobe"),
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xa2a2ac,
        backgroundColor: 0xdbdbdb
    });
}
setVanta();


function openPopup() {
    document.getElementById("emailPopup").style.display = "block";
}
function closePopup(){
    document.getElementById("emailPopup").style.display = "none";
}




// https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.min.js