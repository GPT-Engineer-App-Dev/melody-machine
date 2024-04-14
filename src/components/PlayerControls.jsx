import { Flex, Button, Icon } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const PlayerControls = ({ isPlaying, onPlayClick, onPauseClick, onNextClick, onPrevClick }) => {
  return (
    <Flex justify="center" mb={6}>
      <Button size="lg" variant="outline" mr={4} onClick={onPrevClick}>
        <Icon as={FaBackward} />
      </Button>
      <Button size="lg" colorScheme="purple" px={8} onClick={isPlaying ? onPauseClick : onPlayClick}>
        <Icon as={isPlaying ? FaPause : FaPlay} />
      </Button>
      <Button size="lg" variant="outline" ml={4} onClick={onNextClick}>
        <Icon as={FaForward} />
      </Button>
    </Flex>
  );
};

export default PlayerControls;
