export const useGlobalState = createGlobalState(() =>
  useStorage('stateStore', () => ({
    currSheet: 'personal',
    score: 0,
    openFolders: {
      bio: false,
      education: false,
      interests: false,
    },
  })),
)
