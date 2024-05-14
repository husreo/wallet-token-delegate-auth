
import {
    PublicKey,
} from "@solana/web3.js";

export const GLOBAL_AUTHORITY_SEED = "global-sol-token-authority";
export const VAULT_AUTHORITY_SEED = "vault-space-authority";
export const USER_POOL_SEED = "user-pool-facon-seed";       

export const PROGRAM_ID = new PublicKey("54dsLCfTCBzBx49Wpbzprz2boriZqJjZ8XMv8kqA1cpe");
    
export const LOYALTY_ADDRESS = new PublicKey("7cbsZBiTashVtc1ANEnUCFfNen8Fj4ATumZbRPxWZuJ6");

export const MILSECS_IN_DAY = (1000 * 60 * 60 * 24);

export const ELMNT_ADDRESS = new PublicKey("5CY4inXAWEKDENqJ5ZLNaTYX8gzjHZNXimuj7VmFmVi6");
export const ELMNT_DECIMAL = 100_000;

// Define the minimum lock duration in seconds (1 month = 30 days)
export const MIN_LOCK_DURATION_SECONDS = 30 * 24 * 60 * 60;



