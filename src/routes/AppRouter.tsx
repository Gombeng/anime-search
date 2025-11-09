import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import DetailPage from "../pages/DetailPage";
import { Box, Text } from "@chakra-ui/react";

export default function AppRouter() {
  return (
    <Box position={"relative"}>
      <Box
        position={"sticky"}
        top={0}
        zIndex={999}
        p={4}
        bg={"gray.950"}
        shadow={"sm"}
      >
        <Text textAlign={"center"} fontWeight={500} fontSize={"sm"}>
          AnimeFlix
        </Text>
      </Box>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/anime/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
