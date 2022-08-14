// common update price funtion 
function priceUpdate(itemId, price) {
    const memory = document.getElementById(itemId);
    memory.innerText = price;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const totalCost = parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(deliveryCost);
    const totalCostOutput = document.getElementById('total-cost');
    totalCostOutput.innerText = totalCost;
}

// memory cost update 
document.getElementById('fourGB').addEventListener('click', function () {
    priceUpdate('memory-cost', 100);
})
document.getElementById('eightGB').addEventListener('click', function () {
    priceUpdate('memory-cost', 150)
})
document.getElementById('sixteenGB').addEventListener('click', function () {
    priceUpdate('memory-cost', 200)
})

// storage cost update 
document.getElementById('ssd1').addEventListener('click', function () {
    priceUpdate('storage-cost', 300)
})
document.getElementById('ssd2').addEventListener('click', function () {
    priceUpdate('storage-cost', 350)
})
document.getElementById('ssd3').addEventListener('click', function () {
    priceUpdate('storage-cost', 400)
})

// delivery cost update
document.getElementById('free-delivery').addEventListener('click', function () {
    priceUpdate('delivery-cost', 0)
})
document.getElementById('delivery1').addEventListener('click', function () {
    priceUpdate('delivery-cost', 10)
})
document.getElementById('delivery2').addEventListener('click', function () {
    priceUpdate('delivery-cost', 20)
})

// promo code apply 
const promoCode = 'HARDWORK';
document.getElementById('apply-btn').addEventListener('click', function () {
    const inputCode = document.getElementById('promo-input').value;
    if (inputCode === promoCode) {
        const totalPriceText = document.getElementById('total-cost');
        let totalPrice = parseFloat(totalPriceText.innerText)
        const discount = totalPrice * 0.20;
        totalPrice = totalPrice - discount;
        totalPriceText.innerText = totalPrice;
    }
    else {

    }

})











/* document.getElementById('eightGB').addEventListener('click', function () {
    const memory = document.getElementById('memory-cost');
    memory.innerText = 150;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const totalCost = parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(deliveryCost);
    const totalCostOutput = document.getElementById('total-cost');
    totalCostOutput.innerText = totalCost;
}) */
