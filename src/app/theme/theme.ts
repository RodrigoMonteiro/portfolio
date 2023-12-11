export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--main-background': '#FFFFFF',
    '--background-primary': '#7DA0CA',
    '--background-secondary': '#001F3F',
    '--background-extra': '#FF0000',
    '--font-color': '#000000',
  },
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--main-background': '#000000',
    '--background-primary': '#052659',
    '--background-secondary': '#7FB8E5',
    '--background-extra': '#CC0000',
    '--font-color': '#F5F3F4',
  },
};
