import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchAnimeDetail } from "../features/anime/animeSlice";
import {
  Box,
  Image,
  Text,
  Button,
  Container,
  Heading,
  Link as CLink,
  Flex,
} from "@chakra-ui/react";
import Loader from "../components/Loader";
import type { RootState } from "../app/store";
import { useAppDispatch } from "../hooks/redux";
import CollapsibleText from "../components/CollapsibleText";
import StarRating from "../components/StarRating";
import { BsYoutube } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import GenreBadge from "../components/GenreBadge";

export default function DetailPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { detail, loading, error } = useSelector(
    (state: RootState) => state.anime
  );

  useEffect(() => {
    if (id) dispatch(fetchAnimeDetail(id));
  }, [id, dispatch]);

  if (loading) return <Loader />;
  if (error) return <Text color="red.500">{error}</Text>;
  if (!detail) return <Text>No details available.</Text>;

  return (
    <Container py={4} maxW="4xl">
      <Link to={"/"}>
        <Button mb={4} size={"xs"} fontWeight={600} gap={2}>
          <BiArrowBack />
          Back
        </Button>
      </Link>
      <Flex
        align="start"
        gap={{ base: 4, md: 6 }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Image
          src={detail.images?.webp?.large_image_url}
          h={{ base: "full", md: 400, lg: 500 }}
          borderRadius="md"
        />
        <Box>
          {detail.year && (
            <Text mb={2} fontSize={"12px"} color={"whiteAlpha.600"}>
              {detail.year}
            </Text>
          )}
          <Heading mb={2} fontSize={"md"}>
            {detail.title}
          </Heading>

          {detail.score ? (
            <StarRating score={detail.score} />
          ) : (
            <Text fontSize={"10px"}>N/A</Text>
          )}
          <Box m={3} />
          <GenreBadge genres={detail.genres} />
          {detail.synopsis && <CollapsibleText text={detail.synopsis} />}

          <Flex mt={5} gap={2}>
            <CLink href={detail.trailer.embed_url} target="_blank">
              <Button
                size={"sm"}
                colorPalette={"red"}
                fontSize={"xs"}
                fontWeight={600}
                gap={3}
              >
                <BsYoutube />
                Watch trailer
              </Button>
            </CLink>
            <CLink href={detail.url} target="_blank">
              <Button size={"sm"} fontSize={"xs"} fontWeight={600} gap={3}>
                See More
              </Button>
            </CLink>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
