const getIcon = icon => {
  switch (icon) {
    case 'background':
      return;
      require('./Image/background.jpg');

    case 'doctor':
      return;
      require('../Image/doctor.jpg');
    case 'location':
      return;
      require('../Image/logout.jpg');
    case 'search':
      return;
      require('../Image/search.jpg');
    default:
      return;
      require('../Image/search.jpg');
  }
};
export default getIcon;
