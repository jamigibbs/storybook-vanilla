import React from 'react';

export const VaSegmentedProgressBar = ({
  current,
  total,
  label,
}) => {
  return (
  // Wrapper for spacing when viewing in storybook
  // Component can be used without it
  <div style={{ margin: '3em' }}>
    <div
      className="schemaform-title"
      style={{ alignItems: 'baseline', display: 'flex', marginBottom: '3rem' }}
    >
      <h1
        data-testid="form-title"
        style={{ marginBottom: 0, paddingRight: '10px' }}
      >
        Apply for health care
      </h1>
      <div
        className="schemaform-subtitle"
        data-testid="form-subtitle"
        style={{ fontSize: '2rem' }}
      >
        Form 10-10EZ
      </div>
    </div>
    <va-segmented-progress-bar
      current={current}
      total={total}
      label={label}
    ></va-segmented-progress-bar>
    <div
      className="schemaform-chapter-progress"
      style={{ paddingLeft: '2rem' }}
    >
      <div className="nav-header nav-header-schemaform">
        <h2 id="nav-form-header" className="vads-u-font-size--h4" tabIndex="-1">
          Step 2 of 6: VA Benefits
        </h2>
      </div>
    </div>
  </div>
  );
};

export default {
  title: 'Example/VaSegmentedProgressBar',
  component: VaSegmentedProgressBar,
  args: {
    current: 2,
    total: 6,
    label: undefined,
  },
};