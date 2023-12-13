export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--main-background': '#FFFFFF',
    '--background-contrast': '#E0E0E0',
    '--background-primary': '#7DA0CA',
    '--background-secondary': '#001F3F',
    '--font-color': '#000000',
    '--project-chip': '#4caf50',
  },
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--main-background': '#000000',
    '--background-contrast': '#777777',
    '--background-primary': '#052659',
    '--background-secondary': '#7FB8E5',
    '--font-color': '#F5F3F4',
    '--project-chip': '#4CAF50',
  },
};
