import HomeIcon from 'react-feather/dist/icons/home';
import ListIcon from 'react-feather/dist/icons/list';
import InfoIcon from 'react-feather/dist/icons/info';

const menu = [
  { label: 'Home', to: '/', icon: HomeIcon },
  { label: 'By Category', to: '/categories', icon: ListIcon },
  // { label: 'By Tag', to: '/content', icon: ListIcon },
  { label: 'About', to: '/about', icon: InfoIcon },
  // { label: 'Search', to: '/search', icon: InfoIcon }
];

export default menu;