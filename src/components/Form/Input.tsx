import { useState } from 'react';
import { css } from '@emotion/react';
import { FormControl, FormLabel, Input as FormInput, InputProps as FormInputProps } from '@chakra-ui/react';

interface InputProps extends FormInputProps {
  name: string;
  label?: string;
  fixedLabel?: boolean;
}

export function Input({ name, label, fixedLabel, ...rest }: InputProps) {
  const [isFilled, setIsFilled] = useState(false);
  const [value, setValue] = useState("");

  function handleTextChange(text) {
    setValue(text);

    setIsFilled(text !== "" ? true : false);
  }

  return (
    <FormControl
      position="relative"
      bg="inherit"
      w={ rest.w ? rest.w : "auto" }
      minW="16rem"
    >
      {!!label && (
        <FormLabel
          htmlFor={name}
          position="absolute"
          top={ fixedLabel || isFilled ? "-11px" : "6px" }
          left={ fixedLabel || isFilled ? "12px" : "15px" }
          px={ fixedLabel || isFilled ? "3px" : "0" }
          color={ fixedLabel || isFilled ? "gray.500" : "white" }
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
        textTransform="uppercase"
        _hover={{
          borderColor: "gray.600"
        }}
        css={css`
          ::-webkit-calendar-picker-indicator {
            filter: invert(1);
            cursor: pointer;
          }
        `}
      />
    </FormControl>
  );
}
