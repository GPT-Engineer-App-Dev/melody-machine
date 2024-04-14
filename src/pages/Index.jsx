import { useEffect, useRef, useState } from "react";
import { Box, Flex, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Icon } from "@chakra-ui/react";
import { FaVolumeUp } from "react-icons/fa";
import PlayerControls from "../components/PlayerControls";
import playlist from "../data/playlist";

const Index = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const playSong = () => {
    setIsPlaying(true);
  };

  const pauseSong = () => {
    setIsPlaying(false);
  };

  const playNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  const playPreviousSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length);
  };

  const handleTimeUpdate = () => {
    const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(progress);
  };

  const handleEnded = () => {
    playNextSong();
  };

  const currentSong = playlist[currentSongIndex];

  return (
    <Box maxWidth="400px" mx="auto" p={4}>
      <Box bg="gray.100" borderRadius="md" p={4}>
        <Box mb={8}>
          <Box width="300px" height="300px" mx="auto" borderRadius="md" bgImage={`url('${currentSong.albumArt}')`} bgSize="cover" />
        </Box>

        <Box mb={4}>
          <Box as="h3" fontSize="xl" fontWeight="bold" mb={1}>
            {currentSong.title}
          </Box>
          <Box as="p" fontSize="lg" color="gray.500">
            {currentSong.artist}
          </Box>
        </Box>

        <Box mb={6}>
          <Slider
            aria-label="music-progress"
            value={progress}
            onChange={(value) => {
              audioRef.current.currentTime = (audioRef.current.duration / 100) * value;
            }}
          >
            <SliderTrack bg="gray.300">
              <SliderFilledTrack bg="purple.500" />
            </SliderTrack>
            <SliderThumb boxSize={4} />
          </Slider>
        </Box>

        <PlayerControls isPlaying={isPlaying} onPlayClick={playSong} onPauseClick={pauseSong} onNextClick={playNextSong} onPrevClick={playPreviousSong} />

        <Flex align="center">
          <Icon as={FaVolumeUp} mr={4} />
          <Slider flex={1} aria-label="volume-control" defaultValue={30}>
            <SliderTrack bg="gray.300">
              <SliderFilledTrack bg="purple.500" />
            </SliderTrack>
            <SliderThumb boxSize={4} />
          </Slider>
        </Flex>
      </Box>

      <audio ref={audioRef} src={currentSong.audioSrc} onTimeUpdate={handleTimeUpdate} onEnded={handleEnded} />
    </Box>
  );
};

export default Index;
