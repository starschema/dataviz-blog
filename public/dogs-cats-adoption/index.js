const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
]
;(function () {
  var files = [
      'https://code.highcharts.com/stock/highstock.js',
      'https://code.highcharts.com/highcharts-more.js',
      'https://code.highcharts.com/highcharts-3d.js',
      'https://code.highcharts.com/modules/data.js',
      'https://code.highcharts.com/modules/exporting.js',
      'https://code.highcharts.com/modules/funnel.js',
      'https://code.highcharts.com/modules/annotations.js',
      'https://code.highcharts.com/modules/accessibility.js',
      'https://code.highcharts.com/modules/solid-gauge.js',
    ],
    loaded = 0
  if (typeof window['HighchartsEditor'] === 'undefined') {
    window.HighchartsEditor = {
      ondone: [cl],
      hasWrapped: false,
      hasLoaded: false,
    }
    include(files[0])
  } else {
    if (window.HighchartsEditor.hasLoaded) {
      cl()
    } else {
      window.HighchartsEditor.ondone.push(cl)
    }
  }
  function isScriptAlreadyIncluded(src) {
    var scripts = document.getElementsByTagName('script')
    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].hasAttribute('src')) {
        if (
          (scripts[i].getAttribute('src') || '').indexOf(src) >= 0 ||
          (scripts[i].getAttribute('src') ===
            'http://code.highcharts.com/highcharts.js' &&
            src === 'https://code.highcharts.com/stock/highstock.js')
        ) {
          return true
        }
      }
    }
    return false
  }
  function check() {
    if (loaded === files.length) {
      for (var i = 0; i < window.HighchartsEditor.ondone.length; i++) {
        try {
          window.HighchartsEditor.ondone[i]()
        } catch (e) {
          console.error(e)
        }
      }
      window.HighchartsEditor.hasLoaded = true
    }
  }
  function include(script) {
    function next() {
      ++loaded
      if (loaded < files.length) {
        include(files[loaded])
      }
      check()
    }
    if (isScriptAlreadyIncluded(script)) {
      return next()
    }
    var sc = document.createElement('script')
    sc.src = script
    sc.type = 'text/javascript'
    sc.onload = function () {
      next()
    }
    document.head.appendChild(sc)
  }
  function each(a, fn) {
    if (typeof a.forEach !== 'undefined') {
      a.forEach(fn)
    } else {
      for (var i = 0; i < a.length; i++) {
        if (fn) {
          fn(a[i])
        }
      }
    }
  }
  var inc = {},
    incl = []
  each(document.querySelectorAll('script'), function (t) {
    inc[t.src.substr(0, t.src.indexOf('?'))] = 1
  })
  function cl() {
    if (typeof window['Highcharts'] !== 'undefined') {
      var options = {
        title: {
          text: 'In 2022, the adoption of cats and dogs was the highest during the summer',
          style: {
            fontFamily:
              '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
            color: '#333333',
            fontSize: '16px',
            fontWeight: 'bold',
            fontStyle: 'normal',
          },
          align: 'left',
        },
        subtitle: {
          text: 'Number of <b style="color:#f29c4d;">cats</b> vs<b     style="color:#c676bd;"> dogs</b> in adoption in Austin Animal Center in 2022',
          style: {
            fontFamily:
              '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
            color: '#666666',
            fontSize: '12px',
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
          align: 'left',
        },
        exporting: {},
        chart: {
          type: 'line',
          // width: 993,
          // height: 470,
          inverted: false,
          alignTicks: true,
          animation: true,
          parallelAxes: { alignTicks: true },
          zooming: {
            mouseWheel: { enabled: false },
          },
          description:
            'This chart displays how the cat and dog adoption changed over 2022 in Austin Animal Center.',
        },
        series: [
          {
            lineWidth: 1,
            allowPointSelect: false,
            crisp: true,
            showCheckbox: false,
            animation: false,
            enableMouseTracking: true,
            events: {},
            marker: {
              enabledThreshold: 2,
              lineColor: '#ffffff',
              lineWidth: 0,
              radius: 4,
              states: {
                normal: { animation: true, opacity: 0 },
                hover: {
                  animation: { duration: 150 },
                  enabled: true,
                  radiusPlus: 2,
                  lineWidthPlus: 1,
                },
                select: {
                  fillColor: '#cccccc',
                  lineColor: '#000000',
                  lineWidth: 2,
                },
              },
              enabled: true,
            },
            point: { events: {} },
            dataLabels: {
              animation: {},
              align: 'center',
              borderWidth: 0,
              defer: true,
              formatter: function () {
                const { numberFormatter: a } = this.series.chart
                return 'number' !== typeof this.y ? '' : a(this.y, -1)
              },
              padding: 5,
              style: {
                fontSize: '0.7em',
                fontWeight: 'bold',
                color: 'contrast',
                textOutline: '1px contrast',
              },
              verticalAlign: 'bottom',
              x: 0,
              y: 0,
              enabled: false,
            },
            cropThreshold: 300,
            opacity: 1,
            pointRange: 0,
            softThreshold: true,
            states: {
              normal: { animation: true },
              hover: {
                animation: { duration: 150 },
                lineWidthPlus: 1,
                marker: {},
                halo: { size: 10, opacity: 0.25 },
              },
              select: { animation: { duration: 0 } },
              inactive: { animation: { duration: 150 }, opacity: 0.2 },
            },
            stickyTracking: true,
            turboThreshold: 0,
            findNearestPointBy: 'x',
            legendSymbol: 'lineMarker',
            name: 'Cat',
            dataGrouping: {
              groupPixelWidth: 2,
              dateTimeLabelFormats: {
                millisecond: [
                  '%A, %e %b, %H:%M:%S.%L',
                  '%A, %e %b, %H:%M:%S.%L',
                  '-%H:%M:%S.%L',
                ],
                second: [
                  '%A, %e %b, %H:%M:%S',
                  '%A, %e %b, %H:%M:%S',
                  '-%H:%M:%S',
                ],
                minute: ['%A, %e %b, %H:%M', '%A, %e %b, %H:%M', '-%H:%M'],
                hour: ['%A, %e %b, %H:%M', '%A, %e %b, %H:%M', '-%H:%M'],
                day: ['%A, %e %b %Y', '%A, %e %b', '-%A, %e %b %Y'],
                week: ['Week from %A, %e %b %Y', '%A, %e %b', '-%A, %e %b %Y'],
                month: ['%B %Y', '%B', '-%B %Y'],
                year: ['%Y', '%Y', '-%Y'],
              },
            },
            colorByPoint: false,
            type: 'line',
          },
          {
            lineWidth: 1,
            allowPointSelect: false,
            crisp: true,
            showCheckbox: false,
            animation: false,
            enableMouseTracking: true,
            events: {},
            marker: {
              enabledThreshold: 2,
              lineColor: '#ffffff',
              lineWidth: 0,
              radius: 4,
              states: {
                normal: { animation: true, opacity: 0 },
                hover: {
                  animation: { duration: 150 },
                  enabled: true,
                  radiusPlus: 2,
                  lineWidthPlus: 1,
                },
                select: {
                  fillColor: '#cccccc',
                  lineColor: '#000000',
                  lineWidth: 2,
                },
              },
              enabled: true,
            },
            point: { events: {} },
            dataLabels: {
              animation: {},
              align: 'center',
              borderWidth: 0,
              defer: true,
              formatter: function () {
                const { numberFormatter: a } = this.series.chart
                return 'number' !== typeof this.y ? '' : a(this.y, -1)
              },
              padding: 5,
              style: {
                fontSize: '0.7em',
                fontWeight: 'bold',
                color: 'contrast',
                textOutline: '1px contrast',
              },
              verticalAlign: 'bottom',
              x: 0,
              y: 0,
              enabled: false,
            },
            cropThreshold: 300,
            opacity: 1,
            pointRange: 0,
            softThreshold: true,
            states: {
              normal: { animation: true },
              hover: {
                animation: { duration: 150 },
                lineWidthPlus: 1,
                marker: {},
                halo: { size: 10, opacity: 0.25 },
              },
              select: { animation: { duration: 0 } },
              inactive: { animation: { duration: 150 }, opacity: 0.2 },
            },
            stickyTracking: true,
            turboThreshold: 0,
            findNearestPointBy: 'x',
            legendSymbol: 'lineMarker',
            name: 'Dog',
            dataGrouping: {
              groupPixelWidth: 2,
              dateTimeLabelFormats: {
                millisecond: [
                  '%A, %e %b, %H:%M:%S.%L',
                  '%A, %e %b, %H:%M:%S.%L',
                  '-%H:%M:%S.%L',
                ],
                second: [
                  '%A, %e %b, %H:%M:%S',
                  '%A, %e %b, %H:%M:%S',
                  '-%H:%M:%S',
                ],
                minute: ['%A, %e %b, %H:%M', '%A, %e %b, %H:%M', '-%H:%M'],
                hour: ['%A, %e %b, %H:%M', '%A, %e %b, %H:%M', '-%H:%M'],
                day: ['%A, %e %b %Y', '%A, %e %b', '-%A, %e %b %Y'],
                week: ['Week from %A, %e %b %Y', '%A, %e %b', '-%A, %e %b %Y'],
                month: ['%B %Y', '%B', '-%B %Y'],
                year: ['%Y', '%Y', '-%Y'],
              },
            },
            type: 'line',
            dashStyle: 'LongDash',
            zones: [{}],
          },
        ],
        plotOptions: {
          series: {
            dataLabels: {
              enabled: false,
              style: {
                color: 'contrast',
                fontSize: '0',
                fontWeight: 'bold',
                textOutline: '1px 1px contrast',
              },
            },
            animation: false,
          },
        },
        data: {
          csv: `"Month";"Cat";"Dog"
                "Jan";291;330
                "Feb";159;260
                "Mar";128;276
                "Apr";130;272
                "May";237;221
                "Jun";366;238
                "Jul";401;310
                "Aug";410;371
                "Sep";317;346
                "Oct";228;205
                "Nov";250;218
                "Dec";274;280`,
          googleSpreadsheetKey: false,
          googleSpreadsheetWorksheet: false,
        },
        colors: [
          '#f29c4d',
          '#c676bd',
          '#90ed7d',
          '#f7a35c',
          '#8085e9',
          '#f15c80',
          '#e4d354',
          '#2b908f',
          '#f45b5b',
          '#91e8e1',
        ],
        annotations: [
          {
            draggable: false,
            labels: [
              {
                point: { x: 4, xAxis: 0, y: 225, yAxis: 0 },
                text: 'Cat adoptions exceeded<br/>the adoption of dogs in May',
                x: -80,
                y: -120,
              },
              {
                point: { x: 7, xAxis: 0, y: 410, yAxis: 0 },
                text: 'The adoption of cats<br/>reached its peak in August<br/>with <b>411</b> adoptions',
                x: 120,
                y: -32,
              },
            ],
            labelOptions: {
              shape: 'rect',
              backgroundColor: 'rgba(255,255,255,0.75)',
              borderWidth: 2,
              borderColor: '#dadada',
              padding: 8,
              style: {
                color: '#0a0a0a',
                fontSize: '12px',
                fontFamily:
                  '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
              },
            },
          },
          {
            draggable: false,
            labels: [
              {
                point: { x: 11, xAxis: 0, y: 280, yAxis: 0 },
                text: 'Dogs',
                x: 120,
                y: -4,
                style: {
                  color: '#c676bd',
                },
              },
              {
                point: { x: 11, xAxis: 0, y: 274, yAxis: 0 },
                text: 'Cats',
                x: 120,
                y: 28,
                style: {
                  color: '#f29c4d',
                },
              },
            ],
            labelOptions: {
              shape: 'rect',
              distance: 0,
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              style: {
                fontWeight: '700',
                fontSize: '14px',
              },
            },
          },
        ],
        pane: { background: [] },
        responsive: { rules: [{ condition: {} }] },
        accessibility: { describeSingleSeries: true },
        xAxis: [
          {
            title: {
              text: '',
              style: {
                fontFamily:
                  '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
                color: '#333333',
                fontSize: '18px',
                fontWeight: 'normal',
                fontStyle: 'normal',
              },
            },
            categories: monthNames,
            reversed: false,
            opposite: false,
            lineColor: '#666666',
            labels: {
              style: {
                color: '#666666',
              },
            },
            description: 'Month of the selected year (2022)',
          },
        ],
        yAxis: [
          {
            title: { text: '' },
            alignTicks: true,
            allowDecimals: false,
            className: 'sdsd',
            reversed: false,
            description: 'Number of adoption in unit',
            labels: {
              style: {
                color: '#666666',
              },
            },
          },
        ],
        labels: { items: [{}] },
        // legend: { layout: 'proximate', align: 'right', enabled: true },
        legend: { enabled: false },
      }
      /*
// Sample of extending options:
Highcharts.merge(true, options, {
    chart: {
        backgroundColor: "#bada55"
    },
    plotOptions: {
        series: {
            cursor: "pointer",
            events: {
                click: function(event) {
                    alert(this.name + " clicked\n" +
                          "Alt: " + event.altKey + "\n" +
                          "Control: " + event.ctrlKey + "\n" +
                          "Shift: " + event.shiftKey + "\n");
                }
            }
        }
    }
});
*/
      new Highcharts.Chart('highcharts-container', options)
    }
  }
})()
