import { Box, SimpleGrid, Skeleton, SkeletonText } from "@chakra-ui/react";
import { useState } from "react";
import AnimeCard from "./AnimeCard";
import type { Anime } from "../type/anime";

type AnimeListProps = {
  animes: Anime[];
  isLoading: boolean;
};

export default function AnimeList({ animes, isLoading }: AnimeListProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const renderLoading = () =>
    Array.from({ length: 5 }).map((_, i) => (
      <Box key={i} w={"full"}>
        <Skeleton borderRadius="sm" h={{ base: 200, md: 300 }} />
        <Box mt={2}>
          <SkeletonText noOfLines={1} gap="2" mb={2} />
          <SkeletonText noOfLines={1} gap="2" w={"40%"} />
        </Box>
      </Box>
    ));

  const renderAnimeList = () =>
    animes.map((anime) => (
      <AnimeCard
        key={anime.mal_id}
        anime={anime}
        isDimmed={hoveredId !== null && hoveredId !== anime.mal_id}
        onHoverStart={() => setHoveredId(anime.mal_id)}
        onHoverEnd={() => setHoveredId(null)}
      />
    ));

  return (
    <SimpleGrid columns={{ base: 2, md: 3, lg: 4, xl: 5 }} gap={4} w={"full"}>
      {isLoading ? renderLoading() : renderAnimeList()}
    </SimpleGrid>
  );
}
