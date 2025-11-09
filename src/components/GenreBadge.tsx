import { Badge, HStack } from "@chakra-ui/react";

export default function GenreBadge({ genres }) {
  if (!genres || genres.length === 0) return null;

  const getColor = (name) => {
    const lower = name.toLowerCase();
    if (lower.includes("action")) return "red";
    if (lower.includes("adventure")) return "blue";
    if (lower.includes("comedy")) return "yellow";
    if (lower.includes("drama")) return "orange";
    if (lower.includes("romance")) return "pink";
    if (lower.includes("fantasy")) return "purple";
    if (lower.includes("sci-fi") || lower.includes("mecha")) return "cyan";
    if (lower.includes("supernatural")) return "violet";
    if (lower.includes("horror") || lower.includes("mystery")) return "gray";
    if (lower.includes("sports")) return "green";
    if (lower.includes("slice")) return "teal";
    if (lower.includes("award")) return "gold";
    return "neutral";
  };

  return (
    <HStack wrap="wrap" gap={2}>
      {genres.map((genre) => (
        <Badge key={genre.mal_id} size="xs" colorPalette={getColor(genre.name)}>
          {genre.name}
        </Badge>
      ))}
    </HStack>
  );
}
