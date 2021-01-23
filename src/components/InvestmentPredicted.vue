<template>
  <div>
    <chart-predicted  :options="bar" />
  </div>
</template>

<script>
  import ECharts from 'vue-echarts/components/ECharts';
  import 'echarts/lib/chart/bar';

  export default {
    name: 'InvestmentPredicted',
    components: {
      'chart-predicted': ECharts,
    },
    props: {
      dataset: {
        type: Array,
        required: true
      }
    },
    data: function() {
      return {
        bar: {
          title: {
            text: 'Investment Predicted',
            subtext: 'Charts'
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {           
                  type: ''        
              },
              formatter: function (params) {
                  var tar = params[1];
                  return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
              }
          },
      grid: {
              top: 80,
              bottom: 30,
              left:10, 
              width:300,
              containLabel: true
          },
      xAxis: {
            type: 'category',
            splitLine: {show: false},
            data: [],
            axisLine: {
                symbol: ['none', 'arrow']
            }
          },
          yAxis: {
            type: 'value',
            splitNumber: 2,
            axisLine: {
              symbol: ['none', 'arrow'],
              show: true
            },
          },
          series: []
        },
      };
    },
    computed: {
      months() {
        return this.dataset.map(item => item.month);
      },
      processedSeries() {
        // value bands
        const fillers = this.dataset.map(item => item.low);
        const lowerBand = this.dataset.map(item => {
          if (item.low > 50) {
            return 0;
          }
          return Math.min(item.high, 50) - item.low;
        })
        const upperBand = this.dataset.map(item => {
          if (item.low > 50) {
            return item.high - item.low;
          }
          return item.high > 50 ? item.high - 50 : 0;
        })

        return [
          {
              name: 'bar1',
              type: 'bar',
              stack: 'stack',
              itemStyle: {
                  color: 'rgba(0,0,0,0)'
              },
              data: fillers
          },
          {
              name: 'bar1',
              type: 'bar',
              stack: 'stack',
              itemStyle: {
                  color: '#f00',
              },
              data: lowerBand
          },
          {
              name: 'bar1',
              type: 'bar',
              stack: 'stack',
              itemStyle: {
                  color: '#000',
              },
              data: upperBand
          },
        ]
      }
    },
    mounted() {
      this.bar.xAxis.data = this.months;
      this.bar.series = this.processedSeries;
    },
    watch: {
      dataset() {
        this.bar.xAxis.data = this.months;
        this.bar.series = this.processedSeries;
      }
    }
  };
</script>

