type InjectedProviders = {
  isMetaMask?: true;
};

interface Window {
  ethereum: InjectedProviders & {
    on: (...args: any[]) => void;
    removeListener?: (...args: any[]) => void;
    request<T = any>(args: any): Promise<T>;
    _state: {
      accounts: string[];
      initialized: boolean;
      isConnected: boolean;
      isPermanentlyDisconnected: boolean;
      isUnlocked: boolean;
    };
  };
}
