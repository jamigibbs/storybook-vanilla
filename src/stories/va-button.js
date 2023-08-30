import React from 'react';
import PropTypes from 'prop-types';

export const Template = ({
  back,
  big,
  'continue': _continue,
  disabled,
  secondary,
  text,
  primaryAlternate,
}) => {
  return (
  <va-button
    back={back}
    big={big}
    continue={_continue}
    disabled={disabled}
    secondary={secondary}
    text={text}
    primary-alternate = {primaryAlternate}
  />
  );
};

Template.propTypes = {
  /**
   * If true, the button will use Back as its text and an icon to represent going back in form flows.
   */
  back: PropTypes.bool,
  /**
   * If true, the button will use the big variant.
   */
  big: PropTypes.bool,
  /**
   * If true, the button will use Continue as its text and an icon to represent proceeding forward in form flows.
   */
  continue: PropTypes.bool,
  /**
   * If true, the click event will not fire.
   */
  disabled: PropTypes.bool,
  /**
   * If true, the button will use the secondary variant.
   */
  secondary: PropTypes.bool,
  /**
   * The text displayed on the button. If continue or back is true, the value of text is ignored.
   */
  text : PropTypes.string,
  /**
   * If true, the button will use the primary alternate variant.
   */
  primaryAlternate: PropTypes.bool,
};

Template.defaultProps = {
  back: false,
  big: false,
  continue: false,
  disabled: false,
  secondary: false,
  text: 'My button',
  primaryAlternate: false,
};
