import { useState } from "react";

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const clearInput = (e) => {
    e.target.value = setValue("");
  };

  return {
    value,
    onChange,
    clearInput,
  };
}
