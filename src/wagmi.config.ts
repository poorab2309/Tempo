import { createConfig, http } from 'wagmi'
import { tempo } from 'wagmi/chains'
import { tempoWallet } from 'accounts/wagmi'
import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient()
export const alphaUsd = '0x20c0000000000000000000000000000000000001'

export const config = createConfig({
  connectors: [tempoWallet()],
  chains: [tempo],
  multiInjectedProviderDiscovery: false,
  transports: {
    [tempo.id]: http(),
  },
})