const RED = '#E92742';
const WHITE = '#FFFFFF';
const BLACK = '#1F2022';
const MID_GRAY = '#808797';
const SECONDARY = '#409CFF';
const YELLOW = '#F8FE11';
const BLUER = '#DCDFE7';
const LIGHT_BLACK = '#141414';
const MID_BLACK = '#4B4B4B';
const LIGHT_HOT = '#EBEBEB';
const GREEN = '#1F8E4B';

const Common = {
  primary: RED,
};

const Light = {
  ...Common,
  background: WHITE,
  text: BLACK,
  subtext: MID_GRAY,
  text_secondary: SECONDARY,
  other: BLUER,
  headerIcon: LIGHT_BLACK,
  icon: MID_BLACK,
  card: LIGHT_HOT,
  textcolor: GREEN,
};

const Dark = {
  ...Common,
  BACKGROUND: BLACK,
  TEXT: WHITE,
  SECONDARY: YELLOW,
};

const Font = {
  TekoBold: 'Teko-Bold',
  TekoLight: 'Teko-Light',
  TekoMedium: 'Teko-Medium',
  TekoRegular: 'Teko-Regular',
  TekoSemibold: 'Teko-SemiBold',
  InterBlack: 'Inter-Black',
  InterBold: 'Inter-Bold',
  InterExtreBold: 'Inter-ExtraBold',
  InterExtraLight: 'Inter-ExtraLight',
  InterLight: 'Inter-Light',
  InterMedium: 'Inter-Medium',
  InterRegular: 'Inter-Regular',
  InterSemiBold: 'Inter-SemiBold',
  InterThin: 'Inter-Thin',
};

export {Common, Light, Font};
