<template>
  <chart-target :options="bar" />
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts';
import 'echarts/lib/chart/bar';

export default {
  name: 'InvestmentTargets',
  components: {
    'chart-target': ECharts,
  },
  props: {
    companyName: {
      type: String,
      required: true,
    },
    dataset: {
      type: Array,
      required: true,
    },
  },
  data: function() {
    return {
      labelRight: {
        position: 'right',
      },
      labelLeft: {
        position: 'left',
      },
      barBlue: {
        color: 'blue',
      },
      barGreen: {
        color: 'green',
      },
      bar: {
        title: {
          text: 'Investment Targets',
          subtext: 'Chart',
        },
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'shadow',
          },
          formatter: '{a}<br />{b}<br />{c}',
        },
        grid: {
          top: 80,
          bottom: 30,
          left: 10,
          width: 300,
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          position: 'bottom',
          splitLine: {
            show: false,
          },
          axisLine: {
            show: true,
            symbol: ['none', 'arrow'],
          },
          axisLabel: { show: false },
          axisTick: { show: false },
        },
        yAxis: {
          type: 'category',
          axisLine: {
            show: true,
            symbol: ['none', 'arrow'],
          },
          axisLabel: { show: false },
          axisTick: { show: false },
        },
        series: [],
      },
    };
  },
  //for any complex logic, you should use a computed property.
  computed: {
    processedSeries() {
      return [
        {
          name: this.companyName,
          type: 'bar',
          label: {
            show: true,
            formatter: '{b}',
          },
          //returns the absolute value of a number
          data: this.dataset.map((value) => ({
            value: value,
            name: Math.abs(value).toString(),
            label: value < 0 ? this.labelLeft : this.labelRight,
            itemStyle: value < 0 ? this.barGreen : this.barBlue,
          })),
        },
      ];
    },
  },
  mounted() {
    this.bar.series = this.processedSeries;
  },
  watch: {
    processedSeries(newValue) {
      this.bar.series = newValue;
    },
  },
};
</script>
