export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--main-background': '#FFFFFF',
    '--background-primary': '#7DA0CA',
    '--background-secondary': '#ffcb05',
    '--background-extra': '#FF0000',
    '--font-color': '#000000',
  },
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--main-background': '#000000',
    '--background-primary': '#052659',
    '--background-secondary': '#c7a008',
    '--background-extra': '#CC0000',
    '--font-color': '#F5F3F4',
  },
};
