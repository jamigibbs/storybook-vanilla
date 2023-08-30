import { Template } from './va-button';


export default {
  title: 'Example/VA Button',
  component: Template,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    back: { control: 'boolean' },
    big: { control: 'boolean' },
    continue: { control: 'boolean' },
    disabled: { control: 'boolean' },
    secondary: { control: 'boolean' },
    text: { control: 'text' },
    primaryAlternate: { control: 'boolean' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    back: false,
    big: false,
    continue: false,
    disabled: false,
    secondary: false,
    text: 'My button',
    primaryAlternate: false,
  },
};