// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-flatpickr components
import Flatpickr from "react-flatpickr";

// react-flatpickr styles
import "flatpickr/dist/flatpickr.css";

// Material Kit 2 React components
import NPInput from "components/NPInput";

function NPDatePicker({ input, ...rest }) {
  return (
    <Flatpickr
      {...rest}
      render={({ defaultValue }, ref) => (
        <NPInput {...input} defaultValue={defaultValue} inputRef={ref} />
      )}
    />
  );
}

// Setting default values for the props of NPDatePicker
NPDatePicker.defaultProps = {
  input: {},
};

// Typechecking props for the NPDatePicker
NPDatePicker.propTypes = {
  input: PropTypes.objectOf(PropTypes.any),
};

export default NPDatePicker;
