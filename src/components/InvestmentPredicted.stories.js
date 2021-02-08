import InvestmentPredicted from './InvestmentPredicted.vue'
import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';

const stories = storiesOf('InvestmentPredicted', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
stories.addDecorator(withKnobs);

stories.add('Investment Predicted component', () => ({
 components: { InvestmentPredicted },
 props: { 
  msg: {
   /* 
   * The text(label, defaultValue) method from Knobs allows you to receive 
   * value dynamically in the Storybook Ui.
   */
  default: text('Text', 'Hello Storybook')
}
 },
 template: '<InvestmentPredicted :msg="msg"/>'
}));