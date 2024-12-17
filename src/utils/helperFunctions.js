import {ThemeColors} from '../theme/colors';
import {statusTypes} from './constant';

export const setColor = status => {
  switch (status) {
    case statusTypes.ONHOLD:
      return ThemeColors.green;
    case statusTypes.INPROGRESS:
      return ThemeColors.blue;
    case statusTypes.INREVIEW:
      return ThemeColors.pink;
    case statusTypes.COMPLATED:
      return ThemeColors.yellow;

    default:
      return ThemeColors.white;
  }
};
