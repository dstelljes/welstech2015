// for the sake of simplicity, we'll just put all the data here
var container, area, legend, chart, charts = [
  {
    id: 'coverage-chart',
    type: 'Pie',
    data: [
      {
        value: 1044,
        color: '#56e289',
        label: 'Website'
      },
      {
        value: 341,
        color: '#e2cf56',
        label: 'No website'
      }
    ],
    options: null
  },
  {
    id: 'tld-chart',
    type: 'Pie',
    data: [
      {
        value: 518,
        color: '#e25668',
        label: '.org'
      },
      {
        value: 415,
        color: '#e28956',
        label: '.com'
      },
      {
        value: 94,
        color: '#e2cf56',
        label: '.net'
      },
      {
        value: 8,
        color: '#aee256',
        label: '.us'
      },
      {
        value: 4,
        color: '#68e256',
        label: '.info'
      },
      {
        value: 2,
        color: '#56e289',
        label: '.ws'
      },
      {
        value: 1,
        color: '#56e2cf',
        label: '.church'
      },
      {
        value: 1,
        color: '#56aee2',
        label: '.co'
      },
      {
        value: 1,
        color: '#5668e2',
        label: '.edu'
      }
    ],
    options: null
  },
  {
    id: 'https-chart',
    type: 'Pie',
    data: [
      {
        value: 1034,
        color: '#e2cf56',
        label: 'No'
      },
      {
        value: 10,
        color: '#56e289',
        label: 'Yes'
      }
    ],
    options: null
  },
  {
    id: 'popular-chart',
    type: 'Pie',
    data: [
      {
        value: 115,
        color: '#68e256',
        label: 'John'
      },
      {
        value: 98,
        color: '#56e289',
        label: 'Paul'
      },
      {
        value: 36,
        color: '#56e2cf',
        label: 'Peter'
      },
      {
        value: 20,
        color: '#56aee2',
        label: 'Mark'
      },
      {
        value: 19,
        color: '#5668e2',
        label: 'Matthew'
      },
      {
        value: 12,
        color: '#8a56e2',
        label: 'Luke'
      },
      {
        value: 6,
        color: '#cf56e2',
        label: 'Andrew'
      },
      {
        value: 5,
        color: '#e256ae',
        label: 'James'
      },
      {
        value: 1,
        color: '#e25668',
        label: 'Bartholemew'
      },
      {
        value: 1,
        color: '#e28956',
        label: 'Philip'
      },
      {
        value: 1,
        color: '#e2cf56',
        label: 'Thomas'
      }
    ],
    options: null
  },
  {
    id: 'tech-chart',
    type: 'Pie',
    data: [
      {
        value: 456,
        color: '#e25668',
        label: 'Finalweb'
      },
      {
        value: 156,
        color: '#e28956',
        label: 'WordPress'
      },
      {
        value: 29,
        color: '#e2cf56',
        label: 'Squarespace'
      },
      {
        value: 29,
        color: '#aee256',
        label: 'Weebly'
      },
      {
        value: 28,
        color: '#68e256',
        label: 'Joomla!'
      },
      {
        value: 25,
        color: '#56e289',
        label: 'Clover'
      },
      {
        value: 25,
        color: '#56e2cf',
        label: 'Drupal'
      },
      {
        value: 20,
        color: '#56aee2',
        label: '(site builder)'
      },
      {
        value: 16,
        color: '#5668e2',
        label: 'Google Sites'
      },
      {
        value: 10,
        color: '#e256ae',
        label: 'Wix'
      },
      {
        value: 251,
        color: '#cccccc',
        label: 'Other'
      }
    ],
    options: null
  }
];

// global chart settings
Chart.defaults.global.animation = false;
//Chart.defaults.global.legendTemplate = '<ul><li>Foo</li></ul>';
Chart.defaults.global.tooltipFontFamily = 'Noto Sans, sans-serif';

// draw the charts
for (var i = 0; i < charts.length; i++) {
  container = document.getElementById(charts[i].id);

  area = container.getElementsByClassName('area')[0];
  legend = container.getElementsByClassName('legend')[0];

  var chart = new Chart(area.getContext('2d'))[charts[i].type](
    charts[i].data,
    charts[i].options
  );

  legend.innerHTML = chart.generateLegend();
}
