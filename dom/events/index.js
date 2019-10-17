let names = [
    {
        os: 'android',
        ver: 5.0
    },
    {
        os: 'ios',
        ver: 11
    },
    {
        os: 'mango',
        ver: 5
    },
    {
        os: 'rim',
        ver: 3
    },
    {
        os: 'windows IoT',
        ver: 10
    },
    {
        os: 'LinuxCNC',
        ver: 5
    }
]

let table = document.getElementById('tabOs')
console.log(table)

let totalCost = 0

names.forEach(os => {
    let row = document.createElement('tr')
    row.onclick = () => {
        let labOs = document.getElementById('labOs')
        labOs.textContent = os.os

        let labVer = document.getElementById('labVer')
        labVer.textContent = os.ver
    }
    let tdOs = document.createElement('td')
    tdOs.innerHTML = os.os
    row.appendChild(tdOs)

    let tdVer = document.createElement('td')
    tdVer.innerHTML = os.ver
    row.appendChild(tdVer)

    let tdCost = document.createElement('td')
    let inp = document.createElement('input')
    inp.type = 'number'
    inp.onkeyup = ev => {
        totalCost = 0
        totalCost += parseInt(ev.target.value)
        console.log(totalCost)
    }
    tdCost.appendChild(inp)
    row.appendChild(tdCost)

    table.appendChild(row)
})

console.log(document)