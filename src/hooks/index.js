import { useState } from "react";

/**
 * Custom hook for managing input field state.
 *
 * Provides a value for the input field, a function to update the value
 * based on the input event, and a function to reset the value to an 
 * initial state.
 *
 * @returns {Object} An object containing the current value of the input 
 * field, a function to handle changes, and a function to reset the value.
 */
export const useField = () => {
  const [value, setValue] = useState("");

  /**
   * Handles changes to the input field.
   *
   * @param {Object} event - The event object from the input field change.
   */
  const onChange = (event) => {
    setValue(event.target.value);
  };

  /**
   * Resets the input field value to an empty string.
   */
  const onChangeReset = () => {
    setValue("");
  };

  return {
    value,
    onChange,
    onChangeReset,
  };
};
