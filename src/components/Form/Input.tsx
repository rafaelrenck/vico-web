import { FormControl, FormLabel, Input as FormInput, InputProps as FormInputProps } from '@chakra-ui/react';
import { useState } from 'react';

interface InputProps extends FormInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  const [isFilled, setIsFilled] = useState(false);
  const [value, setValue] = useState("");

  function handleTextChange(text) {
    setValue(text);

    setIsFilled(text !== "" ? true : false);
  }

  return (
    <FormControl
      position="relative"
    >
      <FormInput
        id={name}
        name={name}
        value={value}
        onChange={(e) => handleTextChange(e.target.value)}
        {...rest}
        variant="filled"
        bg="gray.800"
        borderRadius="full"
        borderColor="gray.700"
        transition="0.25s"
        _focus={{
          borderColor: "white",
          "& + label": {
            top: "-10px",
            left: "12px",
            px: "3px",
          }
        }}
        _hover={{
          borderColor: "gray.600"
        }}
      />

      {!!label && (
        <FormLabel
          htmlFor={name}
          position="absolute"
          top={ isFilled ? "-10px" : "6px" }
          left={ isFilled ? "12px" : "15px" }
          px={ isFilled ? "3px" : "0" }
          bg="gray.800"
          zIndex="100"
          transition="0.25s"
        >
          {label}
        </FormLabel>
      )}

    </FormControl>
  );
}
