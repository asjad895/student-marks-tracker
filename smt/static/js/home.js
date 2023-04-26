
let dates = [];
let marksBySubject = {};

{% for mark in marks %}
    let date = "{{ mark.date }}";
    let subject = "{{ mark.subject }}";
    let marks = "{{ mark.marks }}";

    if (!dates.includes(date)) {
        dates.push(date);
    }

    if (!marksBySubject[subject]) {
        marksBySubject[subject] = {
            label: subject,
            data: [],
            borderColor: getRandomColor(),
            fill: false
        };
    }

    marksBySubject[subject].data[dates.indexOf(date)] = marks;
{% endfor %}

let lineChartData = {
    labels: dates,
    datasets: Object.values(marksBySubject)
};

let lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
            type: 'time',
            time: {
                unit: 'day',
                displayFormats: {
                    day: 'MMM D'
                }
            },
            ticks: {
                source: 'labels'
            }
        }],
        yAxes: [{
            ticks: {
                beginAtZero: true,
                suggestedMax: 100
            }
        }]
    }
};

let lineChart = new Chart(document.getElementById('line-chart'), {
    type: 'line',
    data: lineChartData,
    options: lineChartOptions
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
