import { QueryClient } from '@tanstack/react-query';
export function handleTreatyError(error: Error) {
  console.error(error);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (error) => {
        handleTreatyError(error);
      },
    },
  },
});
