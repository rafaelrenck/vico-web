import { forwardRef, ForwardRefRenderFunction, ReactElement, useState } from 'react';
import { FieldError } from 'react-hook-form';
import { FormControl, FormLabel, InputGroup, InputLeftElement, InputRightElement, Input as FormInput, InputProps as FormInputProps, Icon, Tooltip } from '@chakra-ui/react';
import { FiAlertTriangle } from "react-icons/fi";


interface InputProps extends FormInputProps {
  name: string;
  label?: string;
  fixedLabel?: boolean;
  icon?: ReactElement;
  error?: FieldError;
}

const InputCore: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, fixedLabel, icon, error, ...rest }, ref) => {
  const [isFilled, setIsFilled] = useState(false);

  function handleTextChange(value: string) {
    setIsFilled(value !== "" ? true : false);
  }

  return (
    <FormControl
      position="relative"
      bg="inherit"
      w={ rest.w ? rest.w : "100%" }
      isInvalid={!!error}
    >
      {!!label && (
        <FormLabel
          htmlFor={name}
          position="absolute"
          top={ fixedLabel || isFilled ? "-11px" : "6px" }
          left={ fixedLabel || isFilled ? "12px" : icon ? "36px" : "15px" }
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
      <InputGroup>
        {icon && (
          <InputLeftElement fontSize="1.2rem" color="gray.700">
            {icon}
          </InputLeftElement>
        )}

        <FormInput
          id={name}
          name={name}
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
          sx={{
            "::-webkit-calendar-picker-indicator": {
              filter: "invert(1)",
              cursor: "pointer",
            },
          }}
          errorBorderColor="primary.500"
          ref={ref}
          onChange={(e) => handleTextChange(e.target.value)}
        />
        {error && (
          <InputRightElement fontSize="1.2rem">
            <Tooltip hasArrow label={error.message} bg="gray.700" color="white" p="0.5rem 1rem" shouldWrapChildren>
              <Icon as={FiAlertTriangle} color="primary.500"  />
            </Tooltip>
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  );
}

export const Input = forwardRef(InputCore);
