import React from "react";
import PropTypes from "prop-types";

/**
 * withCustomProps
 * @param CustomizedComponent - Component to be customized by this HoC
 * @param config - config object to set defaultProps, propTypes and propValidator
 */
const withCustomProps = (CustomizedComponent: React.ComponentType, config: any) => (props: any) => {

  let customizedDefaultProps: any = {};
  let customizedPropTypes: any = {};

  const setPropTypes = (prop: string, propTypes: any) => Object.assign(customizedPropTypes, { [prop]: propTypes });

  for (const prop in config) {

    // propTypes
    if (config[prop].type) {
      // Type String
      if (config[prop].type === String) {
        config[prop].options
          ? setPropTypes(prop, PropTypes.oneOf(config[prop].options))
          : setPropTypes(prop, PropTypes.string);
      }

      // Type Number
      config[prop].type === Number && setPropTypes(prop, PropTypes.number);

      // Type Boolean
      config[prop].type === Boolean && setPropTypes(prop, PropTypes.bool);

      // Type Array
      config[prop].type === Array && setPropTypes(prop, PropTypes.array);
    }


    // defaultProps
    if (config[prop].default) {
      Object.assign(customizedDefaultProps, {
        [prop]: config[prop].default
      });
    }


    // propValidator
    if (config[prop].options) {
      if (!config[prop].options.includes(props[prop]) && !config[prop].hasOwnProperty("default")) {
        console.error(
          `[Invalid Prop @ ${CustomizedComponent.name}] Validation failed in '${prop}' prop, the selected '${props[prop]}' value does not exist in options config.`
        );
      }
    }
  }

  // Define PropTypes spreading CustomizedComponent and customizedPropTypes
  CustomizedComponent.propTypes = {
    ...CustomizedComponent.propTypes,
    ...customizedPropTypes
  };

  // Define defaultProps
  CustomizedComponent.defaultProps = customizedDefaultProps;
  CustomizedComponent.displayName = CustomizedComponent.displayName;

  return <CustomizedComponent {...props} className={[props.className, "with-custom-props"].join(' ')} />
};

export default withCustomProps
