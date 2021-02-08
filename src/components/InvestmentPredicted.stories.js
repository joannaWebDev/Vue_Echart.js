import InvestmentPredicted from './InvestmentPredicted.vue'
import { storiesOf } from '@storybook/vue';
import { withKnobs, array } from '@storybook/addon-knobs';

const stories = storiesOf('InvestmentPredicted', module);

const label = 'Dataset';
const defaultValue = [{
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
}]

// Add the `withKnobs` decorator to add knobs support to your stories.
stories.addDecorator(withKnobs);

stories.add('Investment Predicted component', () => ({
 components: { InvestmentPredicted },
 props: { 
  
  dataset: {
   /* 
   * The text(label, defaultValue) method from Knobs allows you to receive 
   * value dynamically in the Storybook Ui.
   */
  default: array(label, defaultValue)
}
 },
 template: '<InvestmentPredicted :dataset="dataset"/>'
}));