# Tempo Testnet — Stablecoin Issuance

Built and deployed custom stablecoins on Tempo Testnet using the official 
Accounts SDK + Wagmi + Viem stack.

## What I built

A full stablecoin issuance app using Tempo's Accounts SDK that demonstrates
the complete TIP-20 token lifecycle on Tempo Testnet.

## Deployed Stablecoins

| Token | Symbol | Network | Tx Hash |
|-------|--------|---------|---------|
| pjUSD | pUSD | Tempo Testnet | 0xc38ac2dc2c2cc060babe073dc101687600ab891de866dffa67f597819d8392dc |
| pooriUSD | pjUSD | Tempo Testnet | 0x5c37b9f6ce89ba7ca667f2c95d1332ff36e0e0751114e92377b10f12e286599b |

## Stack
- React + Vite
- Wagmi + wagmi/tempo
- Viem
- Tempo Accounts SDK
- vite-plugin-mkcert (HTTPS on localhost)

## Features
- Create custom TIP-20 stablecoins
- Grant token roles (issuer, pause, unpause)
- Mint and burn tokens
- Set supply caps
- Create transfer policies
- AMM liquidity management
- Reward distribution and claiming
