import phrases from '../data';
import wallpapers from '../assets';

const getDayOfWeak = () => {
  const date = new Date().getDay();
  const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  return daysOfWeek[date];
};

const getRandomPhrases = () => {
  const { others } = phrases;
  const NUMBER_OF_PHRASES = others.length - 1;
  const phraseOfTheDay = Math.round(Math.random() * NUMBER_OF_PHRASES);
  return others[phraseOfTheDay];
};

const getRandomWallpapers = () => {
  const WALLPAPERS_LENGTH = 2;
  const currentWallpaper = Math.round(Math.random() * WALLPAPERS_LENGTH);
  return wallpapers[currentWallpaper];
};

export { getDayOfWeak, getRandomPhrases, getRandomWallpapers };
