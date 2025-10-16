const months = Array.from({length: 12}, (_, i) => new Date(2e3, i).toLocaleString('en-EN', {month: 'short'}).toUpperCase());
const range = (n, s = 0) => Array.from({length: n}, (_, i) => (s + i + '').padStart(2, 0));
drums.innerHTML = ['year', 'month', 'day', 'hour', 'minute', 'second'].map(id => 
    `<div class="drum-container"><div class="drum" id="${id}"></div></div>`
).join('');
(function tick() {
    const d = new Date(), y = d.getFullYear(), pad = n => (n + '').padStart(2, 0);
    const daysInMonth = new Date(y, d.getMonth() + 1, 0).getDate();
    [
        ['year', range(21, y-10), y + ''],
        ['month', months, months[d.getMonth()]],
        ['day', range(daysInMonth, 1), pad(d.getDate())],
        ['hour', range(24), pad(d.getHours())],
        ['minute', range(60), pad(d.getMinutes())],
        ['second', range(60), pad(d.getSeconds())]
    ].forEach(([id, v, c]) => {
        const el = document.getElementById(id);
        el.innerHTML = Array.from({length: 9}, (_, i) => 
            `<div class="drum-item" style="top:${i*60-210}px">${v[(v.indexOf(c)-4+i+v.length)%v.length]}</div>`
        ).join('');
    });
    setTimeout(tick, 1e3);
})();