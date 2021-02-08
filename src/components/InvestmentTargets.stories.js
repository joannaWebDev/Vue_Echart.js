import InvestmentTargets from './InvestmentTargets.vue'
import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';

const stories = storiesOf('InvestmentTargets', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
stories.addDecorator(withKnobs);

stories.add('Investment Targets component', () => ({
 components: { InvestmentTargets },
 props: { 
  msg: {
   /* 
   * The text(label, defaultValue) method from Knobs allows you to receive 
   * value dynamically in the Storybook Ui.
   */
  default: text('Text', 'Hello Storybook')
}
 },
 template: '<InvestmentTargets :msg="msg"/>'
}));