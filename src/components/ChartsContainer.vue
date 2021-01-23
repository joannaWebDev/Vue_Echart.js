<template>
  <div class="chartsContainer">

    <div class="chart">
      <investment-targets :companyName="companyName" :dataset="dataset"/>
    </div>

    <div class="chart">
      <investment-predicted :dataset="probabilitiesByMonth" />
    </div>
    
  </div>
</template>

<script>
import InvestmentTargets from './InvestmentTargets';
import InvestmentPredicted from './InvestmentPredicted'

export default {
  components: {
    "investment-targets": InvestmentTargets,
    "investment-predicted": InvestmentPredicted
  },

  data: () => ({
    companyName: "Company name",
    dataset: [-3200, 7000, 8000, 10000],
    probabilitiesByMonth: [
      {
        month: 'Jan',
        high: 75,
        low: 35
      },
      {
        month: 'Feb',
        high: 47,
        low: 22
      },
      {
        month: 'Mar',
        high: 80,
        low: 53
      },
      {
        month: 'Apr',
        high: 50,
        low: 30
      },
      {
        month: 'May',
        high: 70,
        low: 50
      },
      {
        month: 'Jun',
        high: 80,
        low: 10
      }
    ]
  })
}
</script>

<style>
.chartsContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin: 7% auto;
  overflow-x: hidden;
}
.chart {
  width:45%;
  }
@media only screen and (max-width: 600px) {
  .chartsContainer {
    flex-direction: column;
  }
}
</style>