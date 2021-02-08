import Input from './Input.vue';
import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';
const stories = storiesOf('Input', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
stories.addDecorator(withKnobs);

stories.add('Input component', () => ({
  components: { Input },
  props: {
    data: {
      default: text('Dataset', 'some text'),
    },
    label: {
      default: text('Label', 'some label'),
    },
  },
  template: '<Input :data="data" :label="label"/>',
}));
