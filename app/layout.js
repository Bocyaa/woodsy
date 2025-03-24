import Logo from './_components/Logo';
import Navigation from './_components/Navigation';
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

import '@/app/_styles/globals.css';

export const metadata = {
  title: {
    template: '%s | Woodsy Hotel',
    default: 'Welcome | Woodsy Hotel',
  },
  description:
    'Luxurious cabin hotel, located in the heart of the italian Dolomites, surrounded by beautiful mountains and dark forests.',
};

function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>This is footer.</footer>
      </body>
    </html>
  );
}

export default RootLayout;
