const ctx = document.getElementById('myChart');
const sub = document.getElementById('subject');

let chart = null;

function createChart(type, data) {
  if (chart) {
    chart.destroy();
  }
  chart = new Chart(ctx, {
    type: type,
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            color: '#3b5998',
            stepSize: 30,
            padding: 10,
            font: {
              size: 16
            }
          }
        },
        x: {
          ticks: {
            color: '#3b5998',
            padding: 10,
            font: {
              size: 16
            }
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'My ' + subject.value + ' performance',
          color: '#02102d',
          font: {
            size: 20,
            weight: 'bold'
          }
        }
      }
    }
  });
}

function updateChart(subject) {
  if (subject=='total'){
    fetch(`/api/marks/${subject}`)
    .then(response => response.json())
    .then(data => {
      const chartData = {
        labels: data.marks.map(item => item.date),
        datasets: [{
          label: 'Total Marks',
          data: data.marks.map(item => item.total),
          borderWidth: 1
        }]
      };
      createChart('line', chartData);
    });
  }else if (subject=='physics'){
    fetch(`/api/marks/${subject}`)
    .then(response => response.json())
    .then(data => {
      const chartData = {
        labels: data.marks.map(item => item.date),
        datasets: [{
          label: 'Marks',
          data: data.marks.map(item => item.marks_p),
          borderWidth: 1
        }]
      };
      createChart('line', chartData);
    });
  }else if (subject=='chemistry'){
    fetch(`/api/marks/${subject}`)
    .then(response => response.json())
    .then(data => {
      const chartData = {
        labels: data.marks.map(item => item.date),
        datasets: [{
          label: 'Marks',
          data: data.marks.map(item => item.marks_c),
          borderWidth: 1
        }]
      };
      createChart('line', chartData);
    });
  }else if (subject=='biology'){
    fetch(`/api/marks/${subject}`)
    .then(response => response.json())
    .then(data => {
      const chartData = {
        labels: data.marks.map(item => item.date),
        datasets: [{
          label: 'Marks',
          data: data.marks.map(item => item.marks_b),
          borderWidth: 1
        }]
      };
      createChart('line', chartData);
    });
  }
}
// set the canvas size to be equal to the browser screen size
sub.addEventListener('change', () => {
  const subject = sub.value.toLowerCase();
  if (subject === 'biology' || subject === 'physics' || subject === 'chemistry' || subject === 'total') {
    updateChart(subject);
  }
});
