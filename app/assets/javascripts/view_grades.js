$(function () {
    $('.btnFade').click(function(){
        $(this).closest('.panel').fadeOut();
    });

    // highchart code
    $('#grade_graph').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Class Grades'
        },
        subtitle: {
            text: 'Source: vvvacademy.com/view_grades'
        },
        xAxis: {
            categories: [
                'Chapter 1',
                'Chapter 2',
                'Chapter 3',
                'Chapter 4',
                'Chapter 5',
                'Chapter 6',
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentile (%)'
            },
            max: 100
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} % </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'John Smith',
            data: [69.9, 71.5, 96.4, 89.2, 78.0, 83.0]

        }]
    });
    

});