import { HStack, Icon } from "@chakra-ui/react";
import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";

function StarRating({ score }: { score: number }) {
  const rawStars = (score / 10) * 5;
  const stars = Math.ceil(rawStars * 2) / 2;

  const starsArray = Array.from({ length: 5 }, (_, i) => {
    if (stars >= i + 1) return "full";
    if (stars >= i + 0.5) return "half";
    return "empty";
  });

  return (
    <HStack gap={1}>
      {starsArray.map((type, i) => {
        const iconMap = {
          full: FaStar,
          half: FaStarHalfStroke,
          empty: FaRegStar,
        };

        return (
          <Icon
            key={i}
            as={iconMap[type]}
            boxSize={3}
            color={type === "empty" ? "gray.600" : "yellow.600"}
          />
        );
      })}
    </HStack>
  );
}

export default StarRating;
