let counter = 0;
const increment = 7551;
const baseTotal = 376888410000000;
const startTime = new Date('2024-07-14T17:00:00Z'); // Convert 1pm EST to UTC
const counterElement = document.getElementById('counter');
const btcCounterElement = document.getElementById('btcCounter');
const totalCounterElement = document.getElementById('totalCounter');

function updateCounter() {
    counter += increment;
    counterElement.textContent = getDisplayNumber(counter)

    const now = new Date();
    const secondsSinceStart = Math.floor((now - startTime) / 10);
    const totalSatoshisLost = baseTotal + (increment * secondsSinceStart);
    totalCounterElement.textContent = totalSatoshisLost.toLocaleString();
}

function getDisplayNumber(counter) {
    const toggleElement = document.getElementById('toggleCounter');
    if (toggleElement.innerText === 'bitcoins') {
        return (counter / 100000000).toFixed(5)
    } else {
        return counter.toLocaleString()
    }
}

function toggleCounter() {
    const toggleElement = document.getElementById('toggleCounter');
    if (toggleElement.innerText === 'sats') {
        toggleElement.innerText = 'bitcoins';
        counterElement.textContent = btcCounterElement.textContent;

    } else {
        toggleElement.innerText = 'sats';
        counterElement.textContent = counter.toLocaleString()
    }
}

function changeImage(newSrc) {
    document.getElementById('imageButton').src = newSrc;
}

setInterval(updateCounter, 10);
