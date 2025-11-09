import { Image, Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import type { Anime } from "../type/anime";

type AnimeCardProps = {
  anime: Anime;
  isDimmed: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
};

export default function AnimeCard({
  anime,
  isDimmed,
  onHoverStart,
  onHoverEnd,
}: AnimeCardProps) {
  return (
    <Link to={`/anime/${anime.mal_id}`}>
      <Box
        overflow="hidden"
        borderRadius="sm"
        cursor="pointer"
        filter={isDimmed ? "grayscale(100%) brightness(0.5)" : "none"}
        transition="all 0.25s ease"
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
      >
        <Image
          borderRadius={"sm"}
          src={anime.images.webp.large_image_url}
          alt={`Cover image ${anime.title}`}
          h={{ base: 200, md: 300 }}
          w={"full"}
          objectFit="cover"
          objectPosition={"top"}
          loading="lazy"
        />
        <Box my={2}>
          <Heading fontWeight={600} fontSize={"sm"} lineHeight={1.5} mb={2}>
            {anime.title}
          </Heading>
          {anime.score ? (
            <StarRating score={anime.score} />
          ) : (
            <Text fontSize={"10px"}>N/A</Text>
          )}
        </Box>
      </Box>
    </Link>
  );
}
