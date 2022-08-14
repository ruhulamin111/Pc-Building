
document.getElementById('fourGB').addEventListener('click', function () {
    const memory = document.getElementById('memory-cost');
    memory.innerText = 100;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const totalCost = parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(deliveryCost);
    const totalCostOutput = document.getElementById('total-cost');
    totalCostOutput.innerText = totalCost;
})