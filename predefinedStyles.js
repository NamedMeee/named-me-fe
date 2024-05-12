const colorPalette = {
  black: '#000000',
  main_color: '#4DBFFF',
  gray_normal: '#646464',
  gray_5: '#D5D5D5',
  gray_10: '#2F2F2F',
  gray_50: '#BCBCBC',
  gray_100: '#E6E6E7',
  gray_200: '#CCCCCD',
  gray_300: '#B9B9BB',
  gray_400: '#99999A',
  gray_500: '#8A8A8B',
  gray_600: '#666667',
  gray_700: '#525253',
  gray_800: '#333334',
  gray_900: '#1D1D1E',
  black_opacity_6: 'rgba(0, 0, 0, 0.06)',
  black_opacity_10: 'rgba(0, 0, 0, 0.1)',
  black_opacity_20: 'rgba(0, 0, 0, 0.2)',
  black_opacity_40: 'rgba(0, 0, 0, 0.4)',
  black_opacity_60: 'rgba(0, 0, 0, 0.6)',
  black_opacity_80: 'rgba(0, 0, 0, 0.8)',

  white: '#FFFFFF',
  white_opacity_6: 'rgba(255, 255, 255, 0.06)',
  white_opacity_10: 'rgba(255, 255, 255, 0.1)',
  white_opacity_20: 'rgba(255, 255, 255, 0.2)',
  white_opacity_40: 'rgba(255, 255, 255, 0.4)',
  white_opacity_60: 'rgba(255, 255, 255, 0.6)',
  white_opacity_80: 'rgba(255, 255, 255, 0.8)',

  accent: '#7E69FE',
  accent_50: '#F2F0FC',
  accent_100: '#E1DDF9',
  accent_200: '#C2B8FF',
  accent_400: '#A394FF',
  accent_600: '#7E69FE',
  accent_800: '#5B44EA',

  negative: '#EB4545',
  negative_50: '#FFF7F6',
  negative_100: '#FFE9E6',
  negative_200: '#FFC1B8',
  negative_400: '#F78E8E',
  negative_600: '#EB4545',
  negative_800: '#DE2C2C',

  positive: '#16A471',
  positive_50: '#ECF9F2',
  positive_100: '#DDF2EA',
  positive_200: '#B9E9D5',
  positive_400: '#73D4AB',
  positive_600: '#16A471',
  positive_800: '#078962',
};

exports.colorPalette = colorPalette;

const surfaceColors = {
  surface_primary: 'white',
  surface_secondary: 'gray_10',
  surface_tertiary: 'gray_50',
  surface_primary_active: 'gray_100',
  surface_primary_inverse: 'gray_900',
  surface_secondary_inverse: 'gray_800',
  surface_tertiary_inverse: 'gray_700',
  surface_primary_inverse_active: 'black',
  surface_disabled: 'gray_50',
  surface_black_opacity_6: 'black_opacity_6',
  surface_black_opacity_10: 'black_opacity_10',
  surface_black_opacity_20: 'black_opacity_20',
  surface_black_opacity_40: 'black_opacity_40',
  surface_black_opacity_60: 'black_opacity_60',
  surface_black_opacity_80: 'black_opacity_80',
  surface_white_opacity_6: 'white_opacity_6',
  surface_white_opacity_10: 'white_opacity_10',
  surface_white_opacity_20: 'white_opacity_20',
  surface_white_opacity_40: 'white_opacity_40',
  surface_white_opacity_60: 'white_opacity_60',
  surface_white_opacity_80: 'white_opacity_80',
  surface_accent: 'accent_600',
  surface_accent_active: 'accent_800',
  surface_accent_light: 'accent_50',
  surface_accent_light_active: 'accent_100',
  surface_negative: 'negative_600',
  surface_negative_active: 'negative_800',
  surface_negative_light: 'negative_50',
  surface_negative_light_active: 'negative_100',
  surface_positive: 'positive_600',
  surface_positive_light: 'positive_50',
  surface_positive_active: 'positive_800',
};

const contentColors = {
  content_normal: 'gray_normal',
  content_primary: 'gray_10',
  content_secondary: 'main_color',
  content_tertiary: 'gray_600',
  content_quaternary: 'gray_500',
  content_disabled: 'gray_300',
  content_primary_inverse: 'white',
  content_secondary_inverse: 'gray_10',
  content_tertiary_inverse: 'gray_50',
  content_quaternary_inverse: 'gray_200',
  content_accent: 'accent_800',
  content_accent_active: 'accent_600',
  content_accent_light: 'accent_100',
  content_accent_light_active: 'accent_200',
  content_negative: 'negative_800',
  content_negative_active: 'negative_600',
  content_negative_light: 'negative_100',
  content_negative_light_active: 'negative_200',
  content_positive: 'positive_800',
  content_positive_active: 'positive_600',
  content_positive_light: 'positive_100',
  content_positive_light_active: 'positive_200',
};

const borderColors = {
  border_white: 'white',
  border_primary: 'gray_100',
  border_oridinary: 'gray_5',
  border_secondary: 'gray_800',
  border_primary_inverse: 'gray_800',
  border_secondary_inverse: 'gray_600',
  border_active: 'gray_300',
  border_disabled: 'black_opacity_6',
  border_black_opacity: 'black_opacity_10',
  border_black_opacity_active: 'black_opacity_40',
  border_accent: 'accent_800',
  border_accent_active: 'accent_600',
  border_negative: 'negative_800',
  border_negative_active: 'negative_600',
  border_positive: 'positive_800',
  border_positive_active: 'positive_600',
};

const dimmedColors = {
  dimmed_80: 'black_opacity_80',
  dimmed_60: 'black_opacity_60',
  dimmed_40: 'black_opacity_40',
};

const paletteGenerator = (colors, cssProperty) => {
  const classNames = Object.keys(colors);

  const cssProperties =
    typeof cssProperty === 'string' ? [cssProperty] : [...cssProperty];

  return classNames.reduce((palette, className) => {
    return {
      ...palette,
      [`.${className}`]: cssProperties.reduce(
        (cssStyle, property) => ({
          ...cssStyle,
          [property]: colorPalette[colors[className]],
        }),
        {},
      ),
    };
  }, {});
};

const customPalette = {
  ...paletteGenerator(surfaceColors, 'backgroundColor'),
  ...paletteGenerator(contentColors, ['color', 'fill']),
  ...paletteGenerator(borderColors, 'borderColor'),
  ...paletteGenerator(dimmedColors, 'backgroundColor'),
};

exports.customPalette = customPalette;

exports.fontStyles = {
  // display
  '.font_display_bold_lg': {
    fontWeight: 700,
    fontSize: '48px',
    lineHeight: '66px',
  },
  '.font_display_bold_md': {
    fontWeight: 700,
    fontSize: '40px',
    lineHeight: '56px',
  },
  '.font_display_bold_sm': {
    fontWeight: 700,
    fontSize: '32px',
    lineHeight: '44px',
  },

  // headline
  '.font_headline_bold_lg': {
    fontWeight: 700,
    fontSize: '28px',
    lineHeight: '40px',
  },
  '.font_headline_thin_md': {
    fontWeight: 300,
    fontSize: '18px',
    lineHeight: '24px',
  },
  '.font_headline_bold_md': {
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '34px',
  },
  '.font_headline_bold_sm': {
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '28px',
  },

  // title
  '.font_title_bold_lg': {
    fontWeight: 700,
    fontSize: '17px',
    lineHeight: '24px',
  },
  '.font_title_bold_md': {
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '22px',
  },
  '.font_title_bold_sm': {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '18px',
  },

  // body
  '.font_body_regular_lg': {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
  },
  '.font_body_regular_md': {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
  },
  '.font_body_regular_sm': {
    fontWeight: 400,
    fontSize: '13px',
    lineHeight: '18px',
  },

  // label
  '.font_label_bold_xl': {
    fontWeight: 700,
    fontSize: '15px',
    lineHeight: '20px',
  },
  '.font_label_bold_lg': {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '18px',
  },
  '.font_label_bold_md': {
    fontWeight: 700,
    fontSize: '13px',
    lineHeight: '18px',
  },
  '.font_label_bold_sm': {
    fontWeight: 700,
    fontSize: '12px',
    lineHeight: '16px',
  },

  '.font_label_medium_xl': {
    fontWeight: 500,
    fontSize: '15px',
    lineHeight: '20px',
  },
  '.font_label_medium_lg': {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '18px',
  },
  '.font_label_medium_md': {
    fontWeight: 500,
    fontSize: '13px',
    lineHeight: '18px',
  },
  '.font_label_medium_sm': {
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '16px',
  },

  '.font_label_regular_xl': {
    fontWeight: 400,
    fontSize: '15px',
    lineHeight: '20px',
  },
  '.font_label_regular_lg': {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '18px',
  },
  '.font_label_regular_md': {
    fontWeight: 400,
    fontSize: '13px',
    lineHeight: '18px',
  },
  '.font_label_regular_sm': {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16px',
  },
  '.font_label_regular_xsm': {
    fontWeight: 400,
    fontSize: '10px',
    lineHeight: '14px',
  },

  // button
  '.font_button_bold_md': {
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '16px',
  },

  // post
  '.font_post_regular_lg': {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '30px',
  },

  // link
  '.font_link_bold_md': {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '16px',
    borderBottom: '1px solid',
  },
  '.font_link_bold_lg': {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '16px',
    borderBottom: '1px solid',
  },
};
