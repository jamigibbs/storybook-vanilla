import React from 'react';
import PropTypes from 'prop-types';
import { VaSegmentedProgressBar } from '@department-of-veterans-affairs/web-components/react-bindings';

export const SegmentedProgressBar = ({
  current = 2,
  total = 5,
  ...props
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
    <VaSegmentedProgressBar
      current={current}
      total={total}
      {...props}
    ></VaSegmentedProgressBar>
  </div>
  );
};

SegmentedProgressBar.propTypes = {
  /**
   * Current segment
   */
  current: PropTypes.number.isRequired,
  /**
   * Total segments
   */
  total: PropTypes.number.isRequired,
};

SegmentedProgressBar.defaultProps = {
  current: 4,
  total: 6,
};
