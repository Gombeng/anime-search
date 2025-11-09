import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { Provider as ChakraProvider } from "./components/ui/provider.tsx";
import AppRouter from "./routes/AppRouter.tsx";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./pages/FallbackError.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <ErrorBoundary FallbackComponent={Fallback}>
          <AppRouter />
        </ErrorBoundary>
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
