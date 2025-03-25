let text = "CALCULATRICE DE SOLDES"
let i = 0;
let speed = 150;

 function type() {
    if (i < text.length) {
    document.querySelector("#headingText").textContent += text.charAt(i);
    i++;
    setTimeout(type, speed)
 }
}
type()


const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", calculateSale);
});

function calculateSale(e) {
    e.preventDefault();
    const noDiscount = parseFloat(document.querySelector("#noDiscount").value);

    const discountPercentage = parseFloat(e.target.value);


    if (isNaN(noDiscount) || noDiscount <= 0) {
  
        Swal.fire({
            
            text: 'Merci de renseigner un prix non soldé valide!',
            imageUrl: 'https://cdn.glitch.global/f9fd8832-a5a5-472e-b9e2-8dd3bf8a3cb4/smiley1.png?v=1690383742556 ',
            imageWidth: 80,
            imageHeight: 80,
            imageAlt: 'Custom image',
          })
        return;
    }

    let discountPrice = noDiscount * discountPercentage;
    let discountedPrice = noDiscount - discountPrice;

    discountPrice = discountPrice.toFixed(2);
    discountedPrice = discountedPrice.toFixed(2);

    document.querySelector("#discount").textContent = discountedPrice;
}
