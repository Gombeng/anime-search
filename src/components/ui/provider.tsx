"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: { value: "'Open Sans', sans-serif" },
        heading: { value: "'Montserrat', sans-serif" },
      },
    },
  },

  globalCss: {
    body: {
      fontFamily: "{fonts.body}",
    },
  },
});

const system = createSystem(defaultConfig, config);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
