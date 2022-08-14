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
document.getElementById('fourGB').addEventListener('click', function () {
    priceUpdate('memory-cost', 100);
})
document.getElementById('eightGB').addEventListener('click', function () {
    priceUpdate('memory-cost', 150)
})
document.getElementById('sixteenGB').addEventListener('click', function () {
    priceUpdate('memory-cost', 200)
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

