import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <html lang="en">
          <body>
          <main>
            <Container maxWidth="xl" sx={{mt: 2}}>
              {children}
            </Container>
          </main>
          </body>
          </html>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
