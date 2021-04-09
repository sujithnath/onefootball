const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  desktop: "1024px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileLMax: `(max-width: ${size.mobileL})`,
  tabletMin: `(min-width: ${size.tablet})`,
  tabletMax: `(max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};
