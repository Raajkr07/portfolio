import { useMantineColorScheme } from '@mantine/core';

export function useTheme() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return {
    isDark: colorScheme === 'dark',
    toggleColorScheme,
  };
}
