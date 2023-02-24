import { useState } from "react";
import {
  Box,
  FormControl,
  Input,
  Spacer,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";

export type BookSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export function BooksSearchForm({ value, onChange }: BookSearchProps) {
  const [error, setError] = useState<string | null>(null);
  const [internalValue, changeInternalValue] = useState(value);

  const onInternalChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    changeInternalValue(event.target.value);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (internalValue.trim() == "") {
      setError("Search query should not be empty");
    } else {
      setError(null);
      onChange(internalValue);
    }
  };

  return (
    <form onSubmit={onSubmit} style={{ width: "100%", display: "flex" }}>
      <Box flex={10}>
        <FormControl isInvalid={error != null}>
          <Input
            id="name"
            name="name"
            placeholder="Enter a word..."
            value={internalValue}
            onChange={onInternalChange}
          />
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
      </Box>
      <Spacer />
      <Box flex={10}>
        <Button colorScheme="purple" type="submit">
          Search
        </Button>
      </Box>
    </form>
  );
}
