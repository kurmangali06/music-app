import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPaying, activeSong, song, handlePause, handlePlay }) => (
  isPaying && activeSong?.title === song.title
    ? (<FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />)
    : (<FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />)
);

export default PlayPause;
