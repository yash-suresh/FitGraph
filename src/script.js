const ctx = document.getElementById('myChart');
  
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: '1 rep max (KG)',
          data: [175, 175, 200, 220, 250, 300],
          borderWidth: 5
        }]
      },
      options: {
        scales: {
          
          x: {
            beginAtZero: false,
            title: {
              display: true,
              text: 'Months',
              font: {
                size: 15
              }
            }

          },

          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: 'Weight (KG)',
              font: {
                size: 15
              }
            }
          }
          

        }
      }
    });