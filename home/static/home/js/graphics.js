let div = document.getElementById("graphics");
/*
// g1
create_chart(labels.slice(0, 99), tpnf.slice(0, 99), 'Tempo NLP + WS em Segundos - G1', 'line', '255, 99, 132');
create_chart(labels.slice(100, 199), tpnf.slice(100, 199), 'Tempo NLP + WS em Segundos - G2', 'line', '255, 99, 132');
create_chart(labels.slice(200, 299), tpnf.slice(200, 299), 'Tempo NLP + WS em Segundos - G3', 'line', '255, 99, 132');
create_chart(labels.slice(300, 399), tpnf.slice(300, 399), 'Tempo NLP + WS em Segundos - G4', 'line', '255, 99, 132');
create_chart(labels.slice(400, 501), tpnf.slice(400, 501), 'Tempo NLP + WS em Segundos - G5', 'line', '255, 99, 132');

// g2
create_chart(labels.slice(0, 99), tpwf.slice(0, 99), 'Tempo WS em Segundos - G1', 'line', '34,139,34');
create_chart(labels.slice(100, 199), tpwf.slice(100, 199), 'Tempo WS em Segundos - G2', 'line', '34,139,34');
create_chart(labels.slice(200, 299), tpwf.slice(200, 299), 'Tempo WS em Segundos - G3', 'line', '34,139,34');
create_chart(labels.slice(300, 399), tpwf.slice(300, 399), 'Tempo WS em Segundos - G4', 'line', '34,139,34');
create_chart(labels.slice(400, 501), tpwf.slice(400, 501), 'Tempo WS em Segundos - G5', 'line', '34,139,34');

// g3
create_chart(labels.slice(0, 99), trf.slice(0, 99), 'Tempo RQ em Segundos - G1', 'line', '255,165,0');
create_chart(labels.slice(100, 199), trf.slice(100, 199), 'Tempo RQ em Segundos - G2', 'line', '255,165,0');
create_chart(labels.slice(200, 299), trf.slice(200, 299), 'Tempo RQ em Segundos - G3', 'line', '255,165,0');
create_chart(labels.slice(300, 399), trf.slice(300, 399), 'Tempo RQ em Segundos - G4', 'line', '255,165,0');
create_chart(labels.slice(400, 501), trf.slice(400, 501), 'Tempo RQ em Segundos - G5', 'line', '255,165,0');

// g4
create_chart(labels.slice(0, 99), tbf.slice(0, 99), 'Tempo BS4 em Segundos - G1', 'line', '153,50,204');
create_chart(labels.slice(100, 199), tbf.slice(100, 199), 'Tempo BS4 em Segundos - G2', 'line', '153,50,204');
create_chart(labels.slice(200, 299), tbf.slice(200, 299), 'Tempo BS4 em Segundos - G3', 'line', '153,50,204');
create_chart(labels.slice(300, 399), tbf.slice(300, 399), 'Tempo BS4 em Segundos - G4', 'line', '153,50,204');
create_chart(labels.slice(400, 501), tbf.slice(400, 501), 'Tempo BS4 em Segundos - G5', 'line', '153,50,204');

// g5
create_chart(labels.slice(0, 99), abytes.slice(0, 99), 'Tamanho resposta em Bytes / encode(utf-8) - G1', 'line', '30,144,255');
create_chart(labels.slice(100, 199), abytes.slice(0, 99), 'Tamanho resposta em Bytes / encode(utf-8) - G2', 'line', '30,144,255');
create_chart(labels.slice(200, 299), abytes.slice(0, 99), 'Tamanho resposta em Bytes / encode(utf-8) - G3', 'line', '30,144,255');
create_chart(labels.slice(300, 399), abytes.slice(0, 99), 'Tamanho resposta em Bytes / encode(utf-8) - G4', 'line', '30,144,255');
create_chart(labels.slice(400, 501), abytes.slice(0, 99), 'Tamanho resposta em Bytes / encode(utf-8) - G5', 'line', '30,144,255');

*/
// Tempo NLP + WS * WS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
create_compare_line(labels,
tpnf,
tpwf,
'Tempo NLP + WS em Segundos',
'Tempo WS em Segundos',
'255, 99, 132',
'34,139,34',
);
/*
create_compare_line(labels.slice(100, 199),
tpnf.slice(100, 199),
tpwf.slice(100, 199),
'Tempo NLP + WS em Segundos - 101 ao 200',
'Tempo WS em Segundos - 101 ao 200',
'255, 99, 132',
'34,139,34',
);

create_compare_line(labels.slice(200, 299),
tpnf.slice(200, 299),
tpwf.slice(200, 299),
'Tempo NLP + WS em Segundos - 201 ao 300',
'Tempo WS em Segundos - 201 ao 300',
'255, 99, 132',
'34,139,34',
);

create_compare_line(labels.slice(300, 399),
tpnf.slice(300, 399),
tpwf.slice(300, 399),
'Tempo NLP + WS em Segundos - 301 ao 400',
'Tempo WS em Segundos - 301 ao 400',
'255, 99, 132',
'34,139,34',
);

create_compare_line(labels.slice(400, 501),
tpnf.slice(400, 501),
tpwf.slice(400, 501),
'Tempo NLP + WS em Segundos - 401 ao 500+',
'Tempo WS em Segundos - 401 ao 500+',
'255, 99, 132',
'34,139,34',
);*/

// Tempo NLP + WS * RQ /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
create_compare_line(labels,
tpnf,
trf,
'Tempo NLP + WS em Segundos',
'Tempo RQ em Segundos',
'255, 99, 132',
'255,165,0',
);
/*
create_compare_line(labels.slice(100, 199),
tpnf.slice(100, 199),
trf.slice(100, 199),
'Tempo NLP + WS em Segundos - 101 ao 200',
'Tempo RQ em Segundos - 101 ao 200',
'255, 99, 132',
'255,165,0',
);

create_compare_line(labels.slice(200, 299),
tpnf.slice(200, 299),
trf.slice(200, 299),
'Tempo NLP + WS em Segundos - 201 ao 300',
'Tempo RQ em Segundos - 201 ao 300',
'255, 99, 132',
'255,165,0',
);

create_compare_line(labels.slice(300, 399),
tpnf.slice(300, 399),
trf.slice(300, 399),
'Tempo NLP + WS em Segundos - 301 ao 400',
'Tempo RQ em Segundos - 301 ao 400',
'255, 99, 132',
'255,165,0',
);

create_compare_line(labels.slice(400, 502),
tpnf.slice(400, 502),
trf.slice(400, 502),
'Tempo NLP + WS em Segundos - 401 ao 500+',
'Tempo RQ em Segundos - 401 ao 500+',
'255, 99, 132',
'255,165,0',
);

*/
// Tempo NLP + WS * BS4 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
create_compare_line(labels,
tpnf,
tbf,
'Tempo NLP + WS em Segundos',
'Tempo BS4 em Segundos',
'255, 99, 132',
'153,50,204'
);
/*
create_compare_line(labels.slice(100, 199),
tpnf.slice(100, 199),
tbf.slice(100, 199),
'Tempo NLP + WS em Segundos - 101 ao 200',
'Tempo BS4 em Segundos - 101 ao 200',
'255, 99, 132',
'153,50,204'
);


create_compare_line(labels.slice(200, 299),
tpnf.slice(200, 299),
tbf.slice(200, 299),
'Tempo NLP + WS em Segundos - 201 ao 300',
'Tempo BS4 em Segundos - 201 ao 300',
'255, 99, 132',
'153,50,204'
);

create_compare_line(labels.slice(300, 399),
tpnf.slice(300, 399),
tbf.slice(300, 399),
'Tempo NLP + WS em Segundos - 301 ao 400',
'Tempo BS4 em Segundos - 301 ao 400',
'255, 99, 132',
'153,50,204'
);

create_compare_line(labels.slice(400, 501),
tpnf.slice(400, 501),
tbf.slice(400, 501),
'Tempo NLP + WS em Segundos - 401 ao 500+',
'Tempo BS4 em Segundos - 401 ao 500+',
'255, 99, 132',
'153,50,204'
);
*/

// Tempo WS * RQ /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
create_compare_line(labels,
tpwf,
trf,
'Tempo WS em Segundos',
'Tempo RQ em Segundos',
'34,139,34',
'255,165,0',
);
/*
create_compare_line(labels.slice(100, 199),
tpwf.slice(100, 199),
trf.slice(100, 199),
'Tempo WS em Segundos - 101 ao 200',
'Tempo RQ em Segundos - 101 ao 200',
'34,139,34',
'255,165,0',
);

create_compare_line(labels.slice(200, 299),
tpwf.slice(200, 299),
trf.slice(200, 299),
'Tempo WS em Segundos - 201 ao 300',
'Tempo RQ em Segundos - 201 ao 300',
'34,139,34',
'255,165,0',
);

create_compare_line(labels.slice(300, 399),
tpwf.slice(300, 399),
trf.slice(300, 399),
'Tempo WS em Segundos - 301 ao 400',
'Tempo RQ em Segundos - 301 ao 400',
'34,139,34',
'255,165,0',
);

create_compare_line(labels.slice(400, 501),
tpwf.slice(400, 501),
trf.slice(400, 501),
'Tempo WS em Segundos - 401 ao 500+',
'Tempo RQ em Segundos  - 401 ao 500+',
'34,139,34',
'255,165,0',
);
*/
// Tempo WS * BS4 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
create_compare_line(labels,
tpwf,
tbf,
'Tempo WS em Segundos',
'Tempo BS4 em Segundos',
'34,139,34',
'153,50,204'
);
/*
create_compare_line(labels.slice(100, 199),
tpwf.slice(100, 199),
tbf.slice(100, 199),
'Tempo WS em Segundos - 101 ao 200',
'Tempo BS4 em Segundos - 101 ao 200',
'34,139,34',
'153,50,204'
);

create_compare_line(labels.slice(200, 299),
tpwf.slice(200, 299),
tbf.slice(200, 299),
'Tempo WS em Segundos - 201 ao 300',
'Tempo BS4 em Segundos - 201 ao 300',
'34,139,34',
'153,50,204'
);

create_compare_line(labels.slice(300, 399),
tpwf.slice(300, 399),
tbf.slice(300, 399),
'Tempo WS em Segundos - 301 ao 400',
'Tempo BS4 em Segundos - 301 ao 400',
'34,139,34',
'153,50,204'
);

create_compare_line(labels.slice(400, 501),
tpwf.slice(400, 501),
tbf.slice(400, 501),
'Tempo WS em Segundos - 401 ao 500+',
'Tempo BS4 em Segundos - 401 ao 500+',
'34,139,34',
'153,50,204'
);
*/
//Tempo RQ + BS4 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
create_compare_line(labels,
trf,
tbf,
'Tempo RQ em Segundos',
'Tempo BS4 em Segundos',
'255,165,0',
'153,50,204'
);
/*
create_compare_line(labels.slice(100, 199),
trf.slice(100, 199),
tbf.slice(100, 199),
'Tempo RQ em Segundos - 101 ao 200',
'Tempo BS4 em Segundos - 101 ao 200',
'255,165,0',
'153,50,204'
);

create_compare_line(labels.slice(200, 299),
trf.slice(200, 299),
tbf.slice(200, 299),
'Tempo RQ em Segundos - 201 ao 300',
'Tempo BS4 em Segundos - 201 ao 300',
'255,165,0',
'153,50,204'
);

create_compare_line(labels.slice(300, 399),
trf.slice(300, 399),
tbf.slice(300, 399),
'Tempo RQ em Segundos - 301 ao 400',
'Tempo BS4 em Segundos - 301 ao 400',
'255,165,0',
'153,50,204'
);

create_compare_line(labels.slice(400, 501),
trf.slice(400, 501),
tbf.slice(400, 501),
'Tempo RQ em Segundos - 401 ao 500+',
'Tempo BS4 em Segundos - 401 ao 500+',
'255,165,0',
'153,50,204'
);
*/
// media all /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
create_compare_bar_all(
    ['Média NLP+WS', 'Média WS', 'Média RQ', 'Média BS4'],
    snm, swm, srm, sbm, 
    '255, 99, 132', '34,139,34', '255,165,0', '153,50,204'
)

// functions /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function create_chart(labels_items, items, label_g, type, color) {

    let r_id = 'g-' + Math.random(1, 10000);

    let canvas = document.createElement('canvas');
    canvas.id = r_id;
    canvas.style.margin = '50px 0px';

    let phater = document.querySelector('.graphics');
    phater.appendChild(canvas);

    let ctx = document.getElementById(r_id);

    return new Chart(ctx, {
        type: type,
        data: {
            labels: labels_items,
            datasets: [{
                label: label_g,
                data: items,
                backgroundColor: [
                    'rgba(' + color + ', 0.2)'
                ],
                borderColor: [
                    'rgba(' + color + ', 1)'
                ],
                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function create_compare_line(labels_items, items1, items2, label_g1, label_g2, color1, color2) {

    let r_id = 'g-' + Math.random(1, 10000);

    let canvas = document.createElement('canvas');
    canvas.id = r_id;
    canvas.style.margin = '50px 0px';

    let phater = document.querySelector('.graphics');
    phater.appendChild(canvas);

    let ctx = document.getElementById(r_id);

    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels_items,
            datasets: [{
                    label: label_g1,
                    fill: false,
                    tension: 0,
                    showLine: true,
                    pointStyle: 'rect',
                    pointRadius: 3,
                    data: items1,
                    pointBackgroundColor: 'rgba(' + color1 + ', 0.1)', 
                    pointBorderColor: 'rgba(' + color1 + ', 1)',
                    backgroundColor: [
                        'rgba(' + color1 + ', 0.2)'
                    ],
                    borderColor: [
                        'rgba(' + color1 + ', 1)'
                    ],
                    borderWidth: 1,
                },
                {
                    label: label_g2,
                    fill: false,
                    tension: 0,
                    showLine: true,
                    pointStyle: 'triangle',
                    pointBackgroundColor: 'rgba(' + color2 + ', 0.1)', 
                    pointBorderColor: 'rgba(' + color2 + ', 1)',
                    pointRadius: 3,
                    data: items2,
                    backgroundColor: [
                        'rgba(' + color2 + ', 0.2)'
                    ],
                    borderColor: [
                        'rgba(' + color2 + ', 1)'
                    ],
                    borderWidth: 1,
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function create_compare_bar_all(labels_items, items1, items2, items3, items4, color1, color2, color3, color4) {

    let r_id = 'g-' + Math.random(1, 10000);

    let canvas = document.createElement('canvas');
    canvas.id = r_id;
    canvas.style.margin = '50px 0px';
    let phater = document.querySelector('.graphics');
    phater.appendChild(canvas);

    let ctx = document.getElementById(r_id);

    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels:labels_items,
            datasets: [{
                    label: "Média de tempo em Segundos",
                    data: [items1, items2, items3, items4],
                    backgroundColor: [
                        'rgba(' + color1 + ', 0.2)',
                        'rgba(' + color2 + ', 0.2)',
                        'rgba(' + color3 + ', 0.2)',
                        'rgba(' + color4 + ', 0.2)',
                    ],
                    borderColor: [
                        'rgba(' + color1 + ', 1)',
                        'rgba(' + color2 + ', 1)',
                        'rgba(' + color3 + ', 1)',
                        'rgba(' + color4 + ', 1)'
                    ],
                    borderWidth: 1,
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}