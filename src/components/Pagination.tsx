import {
  ButtonGroup,
  IconButton,
  Pagination,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function PaginationComp({
  page,
  lastPage,
  onPageChange,
}: {
  page: number;
  lastPage: number;
  onPageChange: (page: number) => void;
}) {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Pagination.Root
      count={lastPage}
      page={page}
      pageSize={1}
      onPageChange={(e) => onPageChange(e.page)}
    >
      {isMobile ? (
        <ButtonGroup gap="4" size={"sm"} variant="outline">
          <Pagination.PrevTrigger asChild>
            <IconButton>
              <HiChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>
          <Pagination.PageText fontSize={"sm"} />
          <Pagination.NextTrigger asChild>
            <IconButton>
              <HiChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      ) : (
        <ButtonGroup variant="ghost" size={"sm"} gap={4}>
          <Pagination.PrevTrigger asChild>
            <IconButton
              disabled={page === 1}
              aria-label="Previous page"
              variant={"outline"}
            >
              <HiChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(pageItem) => (
              <IconButton
                key={pageItem.value}
                variant={{
                  _selected: "solid",
                }}
                aria-label={`Page ${pageItem.value}`}
              >
                {pageItem.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton
              disabled={page === lastPage}
              aria-label="Next page"
              variant={"outline"}
            >
              <HiChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      )}
    </Pagination.Root>
  );
}
