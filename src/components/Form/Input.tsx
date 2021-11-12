import { useState } from 'react';
import { css } from '@emotion/react';
import { FormControl, FormLabel, Input as FormInput, InputProps as FormInputProps } from '@chakra-ui/react';

interface InputProps extends FormInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  const [isFilled, setIsFilled] = useState(["date", "month"].includes(rest.type) ? true : false);
  const [value, setValue] = useState("");

  function handleTextChange(text) {
    setValue(text);

    setIsFilled(text !== "" ? true : false);
  }

  return (
    <FormControl
      position="relative"
      bg="inherit"
    >
      {!!label && (
        <FormLabel
          htmlFor={name}
          position="absolute"
          top={ isFilled ? "-11px" : "6px" }
          left={ isFilled ? "12px" : "15px" }
          px={ isFilled ? "3px" : "0" }
          color={ isFilled ? "gray.500" : "white" }
          bg="inherit"
          zIndex="100"
          transition="0.25s"
          _focus={{
            top: "-11px",
            left: "12px",
            px: "3px",
            color: "white",
          }}
        >
          {label}
        </FormLabel>
      )}

      <FormInput
        id={name}
        name={name}
        value={value}
        onChange={(e) => handleTextChange(e.target.value)}
        {...rest}
        variant="filled"
        bg="transparent"
        borderRadius="full"
        borderColor="gray.700"
        transition="0.25s"
        focusBorderColor="white"
        _hover={{
          borderColor: "gray.600"
        }}
        css={css`
          ::-webkit-calendar-picker-indicator {
            filter: invert(1);
            cursor: pointer;
          }
          &[type="month"] {
            max-width: 16rem;
          }
        `}
      />
    </FormControl>
  );
}
