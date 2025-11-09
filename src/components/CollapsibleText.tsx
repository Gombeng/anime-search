"use client";

import { Button, Collapsible, Stack, Text } from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";

type CollapsibleTextProps = {
  text: string;
  collapsedHeight?: string;
};

export default function CollapsibleText({
  text,
  collapsedHeight = "100px",
}: CollapsibleTextProps) {
  return (
    <Collapsible.Root collapsedHeight={collapsedHeight}>
      <Collapsible.Content
        _closed={{
          shadow: "inset 0 -12px 12px -12px var(--shadow-color)",
          shadowColor: "blackAlpha.500",
        }}
      >
        <Stack paddingY="2">
          <Text fontSize="sm" color="whiteAlpha.600" lineHeight="1.6">
            {text}
          </Text>
        </Stack>
      </Collapsible.Content>

      <Collapsible.Trigger asChild mt="2">
        <Button variant="plain" size="xs" color={"whiteAlpha.600"}>
          <Collapsible.Context>
            {(api) => (api.open ? "Read Less" : "Read More")}
          </Collapsible.Context>
          <Collapsible.Indicator
            transition="transform 0.2s"
            ml="1"
            _open={{ transform: "rotate(180deg)" }}
          >
            <LuChevronDown />
          </Collapsible.Indicator>
        </Button>
      </Collapsible.Trigger>
    </Collapsible.Root>
  );
}
