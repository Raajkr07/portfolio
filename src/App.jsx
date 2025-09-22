import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider, createTheme } from '@mantine/core';
import { motion } from 'framer-motion';
import ClickSpark from './components/reactBits/ClickSpark';

import StarsBackground from './components/backgroundAnimation/StarBackground';
import AppRoutes from './routes/AppRoutes';

// Custom Mantine theme
const theme = createTheme({
  focusRing: 'never',
  fontFamily: 'poppins, sans-serif',
  heading: { fontFamily: 'merriweather, serif' },
  colors: {
    primary: ['#11071F'],
    dark: [
      '#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888',
      '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d', '#000000'
    ],
  },
});

function App() {
  return (
    <MantineProvider theme={theme} withNormalizeCSS withGlobalStyles>
      <div >
        <StarsBackground />
        <ClickSpark
          sparkColor='#fff'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <BrowserRouter>
            <Suspense fallback={<div className="text-white text-center mt-20">
              Just a Sec....
            </div>}>
              <motion.main
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <AppRoutes />
              </motion.main>
            </Suspense>
          </BrowserRouter>
        </ClickSpark>
      </div>
    </MantineProvider>
  );
}

export default App;
