new Vue({
    el: "#app",
    data() {
        return {
            pickerOptions: {
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近半年',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 180);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一年',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            value: "",
            isActive: true,
            error: null
        }
    },
    computed: {
        classObject: function () {
            return {
              active: this.isActive && !this.error,
              'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    },
    methods: {},
    mounted() {},
});


// $(document).ready(function() {
    // $.getJSON('https://data.jianshukeji.com/jsonp?filename=json/usdeur.json&callback=?', function (data) {
    	// console.log(data)
    // });
// });

var data = [{
    data: [
        [1538006400000, 0.5],
        [1538092800000, 1.0],
        [1538179200000, 2.0],
        [1538265600000, 3.0],
        [1538352000000, 3.0],
        [1538438400000, 3.0],
        [1538524800000, 3.0],
    ]
},{
    data: [
        [1538006400000, 0.5],
        [1538092800000, 1.0],
        [1538179200000, 2.0],
        [1538265600000, 3.0],
        [1538352000000, 3.0],
        [1538438400000, 3.0],
        [1538524800000, 3.0],
    ]
}]
console.log(data)
var data1 = [{
    data: [
        [Date.UTC(2018, 7, 27), 0.2],
        [Date.UTC(2018, 8, 27), 0.5],
        [Date.UTC(2018, 8, 28), 1.0],
        [Date.UTC(2018, 8, 29), 2.0],
        [Date.UTC(2018, 8, 30), 3.0],
        [Date.UTC(2018, 9, 1), 4.0],
        [Date.UTC(2018, 9, 2), 5.0],
        [Date.UTC(2018, 9, 3), 6.0],
    ]
}]
var data2 = [{
    data: [
        [Date.UTC(2018, 7, 27), 0.2],
        [Date.UTC(2018, 8, 27), 0.5],
        [Date.UTC(2018, 8, 28), 1.0],
        [Date.UTC(2018, 8, 29), 2.0],
        [Date.UTC(2018, 8, 30), 3.0],
        [Date.UTC(2018, 9, 1), 4.0],
        [Date.UTC(2018, 9, 2), 5.0],
        [Date.UTC(2018, 9, 3), 6.0],
        [Date.UTC(2018, 10, 10), 0.6],
        [Date.UTC(2018, 10, 18), 0.7],
        [Date.UTC(2018, 11, 2), 0.8],
        [Date.UTC(2018, 11, 9), 0.6],
        [Date.UTC(2018, 11, 16), 0.6],
        [Date.UTC(2018, 11, 28), 0.67],
        [Date.UTC(2019, 0, 1), 0.81],
        [Date.UTC(2019, 0, 2), 0.81],
        [Date.UTC(2019, 0, 3), 0.81],
        [Date.UTC(2019, 0, 8), 0.78],
        [Date.UTC(2019, 0, 12), 0.98],
        [Date.UTC(2019, 0, 27), 1.84],
        [Date.UTC(2019, 1, 10), 1.80],
        [Date.UTC(2019, 1, 11), 1.80],
        [Date.UTC(2019, 1, 18), 1.80],
        [Date.UTC(2019, 1, 24), 1.92],
        [Date.UTC(2019, 2, 4), 2.49],
        [Date.UTC(2019, 2, 11), 2.79],
        [Date.UTC(2019, 2, 15), 2.73],
        [Date.UTC(2019, 2, 25), 2.61],
        [Date.UTC(2019, 3, 2), 2.76],
        [Date.UTC(2019, 3, 6), 2.82],
        [Date.UTC(2019, 3, 13), 2.8],
        [Date.UTC(2019, 4, 3), 2.1],
        [Date.UTC(2019, 4, 26), 1.1],
        [Date.UTC(2019, 5, 9), 0.25],
        [Date.UTC(2019, 5, 12), 0]
    ]
}]
var container = Highcharts.chart('container', {
    chart: {
        type: 'spline',
        zoomType: 'x'
    },
    title: {
        text: '',
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
			millisecond: '%H:%M:%S.%L',
			second: '%H:%M:%S',
			minute: '%H:%M',
			hour: '%H:%M',
			day: '%m-%d',
			week: '%m-%d',
			month: '%Y-%m',
			year: '%Y'
		},
		tickInterval: 3600*1000*24 ,//x轴时间格式是一周/一个月
		// minRange:3600 * 1000 * 24,
		// minTickInterval: null
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '激活: <b>{point.y}次</b><br/>'
    },
    legend: {
        enabled: false
    },
    series: data
})
var main = Highcharts.chart('main', {
    chart: {
        type: 'spline',
        zoomType: 'x'
    },
    title: {
        text: '',
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
			millisecond: '%H:%M:%S.%L',
			second: '%H:%M:%S',
			minute: '%H:%M',
			hour: '%H:%M',
			day: '%m-%d',
			week: '%m-%d',
			month: '%Y-%m',
			year: '%Y'
		},
		tickInterval: 3600*1000*24*7 ,//x轴时间格式是一周/一个月
		// minRange:3600 * 1000 * 24,
		// minTickInterval: null
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br>',
        pointFormat: '激活: <b>{point.y}次</b><br/>'
    },
    legend: {
        enabled: false
    },
    series: data1
})
var all = Highcharts.chart('all', {
    chart: {
        type: 'spline',
        zoomType: 'x'
    },
    title: {
        text: '',
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
			millisecond: '%H:%M:%S.%L',
			second: '%H:%M:%S',
			minute: '%H:%M',
			hour: '%H:%M',
			day: '%m-%d',
			week: '%m-%d',
			month: '%Y-%m',
			year: '%Y'
		},
		tickInterval: 3600*1000*24*30 ,//x轴时间格式是一周/一个月
		// minRange:3600 * 1000 * 24,
		// minTickInterval: null
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br>',
        pointFormat: '激活: <b>{point.y}次</b><br/>'
    },
    legend: {
        enabled: false
    },
    series: data2
})