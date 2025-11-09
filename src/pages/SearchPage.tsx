import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchAnime, setPage, setQuery } from "../features/anime/animeSlice";
import { useDebounce } from "../hooks/useDebounce";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import type { RootState } from "../app/store";
import AnimeList from "../components/AnimeList";
import { useAppDispatch } from "../hooks/redux";

export default function SearchPage() {
  const dispatch = useAppDispatch();

  const { list, loading, pagination, error, query, page } = useSelector(
    (state: RootState) => state.anime
  );

  const [localQuery, setLocalQuery] = useState(query);
  const debouncedQuery = useDebounce(localQuery);

  const isNotfound =
    !loading && list.length === 0 && debouncedQuery.trim() && !error;
  const isEmptyState = !debouncedQuery.trim() && list.length === 0;

  useEffect(() => {
    dispatch(setQuery(localQuery));
  }, [localQuery, dispatch]);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      dispatch(fetchAnime({ query: debouncedQuery, page }));
    }
  }, [debouncedQuery, page, dispatch]);

  const handlePageChange = (p: number) => {
    dispatch(setPage(p));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (val: string) => {
    setLocalQuery(val);
    dispatch(setQuery(val));
    dispatch(setPage(1));
  };

  return (
    <Container maxW="6xl" py={4}>
      <VStack gap={4}>
        <SearchBar value={localQuery} onChange={handleSearchChange} />
        {error && (
          <Text
            textAlign={"center"}
            color="red.500"
            fontSize={"14px"}
            fontWeight={500}
            p={10}
          >
            {error}
          </Text>
        )}

        {isNotfound && (
          <Box p={10} maxW={"xs"} textAlign={"center"}>
            <Heading fontSize={"14px"} fontWeight={600} mb={2}>
              {localQuery}
            </Heading>
            <Text fontSize={"12px"} fontWeight={500}>
              Not found, try something else.
            </Text>
          </Box>
        )}

        {isEmptyState ? (
          <Text textAlign={"center"} fontSize={"14px"} fontWeight={500} p={10}>
            Search something.
          </Text>
        ) : (
          <AnimeList animes={list} isLoading={loading} />
        )}

        {list?.length > 0 && !loading && (
          <Pagination
            page={page}
            lastPage={pagination.lastPage}
            onPageChange={handlePageChange}
          />
        )}
      </VStack>
    </Container>
  );
}
