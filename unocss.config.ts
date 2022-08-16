import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({

  // theme

  theme: {
    colors: {
      primary: {
        1: '#01080E',
        2: '#011627',
        3: '#011221',
      },
      secondary: {
        1: '#607B96',
        2: '#3C9D93',
        3: '#4D5BCE',
        4: '#FFFFFF',
      },
      accent: {
        1: '#FEA55F',
        2: '#43D9AD',
        3: '#E99287',
        4: '#C98BDF',
      },
      lines: '#1E2D3D',
    },
  },
  shortcuts: {
    'nav-link': 'text-center h-full items-center grid hover:text-secondary-4',
    'nav-link-active': 'text-secondary-4 border-b border-b-hovered border-b-2px',
    'highlight': 'hover:text-secondary-4 cursor-pointer',
    'form-input': 'bg-primary-3 border w-full rounded-2 p-2 mt-1 outline-none focus:border-secondary-1',
  },

  // configs

  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'Fira Code',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
