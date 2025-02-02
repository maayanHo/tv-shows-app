import '@/styles/global.scss';

export const metadata = {
  title: 'Powerpuff Girls',
  description: 'TV Show Details and Episodes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body>{children}</body>
      </html>
  );
}
