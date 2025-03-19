import Logo from './components/Logo';
import Navigation from './components/Navigation';

export const metadata = {
  title: 'Woodsy',
};

function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
      </body>
      <main>{children}</main>
      <footer>This is footer.</footer>
    </html>
  );
}

export default RootLayout;
