let time = 1500; // 25 min
let interval;

function startTimer() {
    interval = setInterval(() => {
        time--;
        let min = Math.floor(time / 60);
        let sec = time % 60;
        document.getElementById('timer').innerText = `${min}:${sec < 10 ? '0' : ''}${sec}`;
        if (time <= 0) clearInterval(interval);
    }, 1000);
}

function resetTimer() {
    clearInterval(interval);
    time = 1500;
    document.getElementById('timer').innerText = '25:00';
}

function addBlock() {
    let site = document.getElementById('block-input').value.trim();
    if (site === '') return;

    let blocks = JSON.parse(localStorage.getItem('blocks')) || [];
    blocks.push(site);
    localStorage.setItem('blocks', JSON.stringify(blocks));

    document.getElementById('block-input').value = '';
    loadBlocks();
}

function loadBlocks() {
    let list = document.getElementById('block-list');
    list.innerHTML = '';
    let blocks = JSON.parse(localStorage.getItem('blocks')) || [];
    blocks.forEach(site => {
        let li = document.createElement('li');
        li.innerText = site;
        list.appendChild(li);
    });
}
