const ctx = document.getElementById('myChart');
//linking it the HTML element via id

const chartType = 'line';
//chartJS chart type

const chartData = 
{
  labels: 
  ['January', 'February', 'March', 'April', 'May', 'June'],
  
  datasets: 
  [
    {
      label: '1 rep max (KG)',
      data: [175, 175, 200, 220, 250, 300],
      borderWidth: 5
    }
  ]
};

const chartOptions = 
{
  scales: 
  {
    x: 
    {
      beginAtZero: false,
      title: 
      {
        display: true,
        text: 'Months',
        font: 
        {
          size: 15
        }
      }

    },

    y: 
    {
      beginAtZero: false,
      title: 
      {
        display: true,
        text: 'Weight (KG)',
        font: 
        {
          size: 15
        }
      }
    }
    

  }
}

let currentUnit = 'KG'

const chart = new Chart
(ctx, 
  {
      type: 'line',
      data: chartData,
      options: chartOptions
    }
);

document.getElementById('unit-Toggle').addEventListener
(
  'click', () => 

  {
    if(current === 'KG')
    {
      chart.data.datasets[0].data = chart.data.datasets[0].data.map(kgToLbs);
      chart.options.scales.y.title.text = 'Weight (LBS)';
      currentUnit = 'LBS';
    }
    else
    {
      chart.data.datasets[0].data = chart.data.datasets[0].data.map(lbsToKg);
      chart.options.scales.y.title.text = 'Weight (KG)';
      currentUnit = 'KG';
    }

    chart.update();
  }
);

function kgToLbs(kg) 
{
  return kg * 2.20462; // 1 KG = 2.20462 LBS
}

function lbsToKg(lbs) 
{
  return lbs / 2.20462; // 1 LBS = 0.453592 KG
}


