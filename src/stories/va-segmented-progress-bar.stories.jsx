import { SegmentedProgressBar } from './va-segmented-progress-bar';

export default {
  title: 'Example/Progress bar - segmented',
  component: SegmentedProgressBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    current: { control: 'number' },
    total: { control: 'number' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    current: 3,
    total: 10,
  },
};