const ACCESS_TOKEN = 'jwt';

export const storage = {
  /**Access Token */
  setAccessTokenLocalStorage: (value: string) => localStorage.setItem(ACCESS_TOKEN, value),
  getAccessTokenLocalStorageItem: (): string | null => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (!accessToken) return null;
    return JSON.parse(accessToken);
  },
  removeAccessToken: () => localStorage.removeItem(ACCESS_TOKEN),
};
