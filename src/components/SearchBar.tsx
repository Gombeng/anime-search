import { CloseButton, Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { useAppDispatch } from "../hooks/redux";
import { clearAnimeList } from "../features/anime/animeSlice";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const endElement = value ? (
    <CloseButton
      size="sm"
      onClick={() => {
        onChange("");
        inputRef.current?.focus();
        dispatch(clearAnimeList());
      }}
      me="-2"
    />
  ) : undefined;
  return (
    <InputGroup endElement={endElement}>
      <Input
        placeholder="Search anime..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        size={{ base: "sm", md: "md" }}
        variant="subtle"
        aria-label="Search anime"
      />
    </InputGroup>
  );
}
