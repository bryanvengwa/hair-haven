
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

export const metadata = {
  title: 'hair Haven',
  description: 'hair haven login page',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className='flex justify-center items-center' >
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}