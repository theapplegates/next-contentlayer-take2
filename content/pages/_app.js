import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '/public/fonts/Atkinson-Hyperlegible-Regular'



const Atkinson-Hyperlegible-Regular-102a = localFont({
    src: [
      {
        path: '/public/fonts/Atkinson-Hyperlegible/Atkinson-Hyperlegible-Bold-102a.woff2',
        weight: '400',
        style: 'normal',
      },
      {
        path: '/public/fonts/Atkinson-Hyperlegible/Atkinson-Hyperlegible-BoldItalic-102a.woff2',
        weight: '400',
        style: 'italic',
      },
      {
        path: '/public/fonts/Atkinson-Hyperlegible/Atkinson-Hyperlegible-Italic-102a.woff2',
        weight: '700',
        style: 'normal',
      },
      {
        path: '/public/fonts/Atkinson-Hyperlegible/Atkinson-Hyperlegible-Regular-102a.woff2',
        weight: '700',
        style: 'italic',
      },
    ],
  })