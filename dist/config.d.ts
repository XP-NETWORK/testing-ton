import { ChainFactory } from "xp.network";
export declare const setup: () => Promise<{
    factory: ChainFactory;
    signer: import("xp.network/dist/helpers/ton").TonSigner;
    ton: import("xp.network/dist/helpers/ton").TonHelper;
    bsc: import("xp.network").Web3Helper;
    PK: string;
}>;
