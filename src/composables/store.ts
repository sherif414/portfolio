export const useGlobalState = createGlobalState(() =>
  useStorage('stateStore', () => ({
    currSheet: 'bio',
    score: 0,
    openFolders: {
      bio: false,
      education: false,
      interests: false,
    },
  })),
)
