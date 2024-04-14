import { Box, Flex, Button, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Icon } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp } from "react-icons/fa";

const Index = () => {
  return (
    <Box maxWidth="400px" mx="auto" p={4}>
      <Box bg="gray.100" borderRadius="md" p={4}>
        <Box mb={8}>
          {/* Album Art */}
          <Box width="300px" height="300px" bg="gray.300" mx="auto" borderRadius="md" />
        </Box>

        <Box mb={4}>
          {/* Song Title and Artist */}
          <Box as="h3" fontSize="xl" fontWeight="bold" mb={1}>
            Song Title
          </Box>
          <Box as="p" fontSize="lg" color="gray.500">
            Artist Name
          </Box>
        </Box>

        <Box mb={6}>
          {/* Progress Bar */}
          <Slider aria-label="music-progress" defaultValue={30}>
            <SliderTrack bg="gray.300">
              <SliderFilledTrack bg="purple.500" />
            </SliderTrack>
            <SliderThumb boxSize={4} />
          </Slider>
        </Box>

        <Flex justify="center" mb={6}>
          {/* Previous, Play/Pause, Next Buttons */}
          <Button size="lg" variant="outline" mr={4} leftIcon={<Icon as={FaBackward} />}>
            Prev
          </Button>
          <Button size="lg" colorScheme="purple" px={8} leftIcon={<Icon as={FaPlay} />}>
            Play
          </Button>
          <Button size="lg" variant="outline" ml={4} leftIcon={<Icon as={FaForward} />}>
            Next
          </Button>
        </Flex>

        <Flex align="center">
          {/* Volume Control */}
          <Icon as={FaVolumeUp} mr={4} />
          <Slider flex={1} aria-label="volume-control" defaultValue={30}>
            <SliderTrack bg="gray.300">
              <SliderFilledTrack bg="purple.500" />
            </SliderTrack>
            <SliderThumb boxSize={4} />
          </Slider>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
