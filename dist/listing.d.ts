import { TonHelper } from 'xp.network/dist/helpers/ton';
import { ChainFactory } from 'xp.network';
export declare const listing: (factory: ChainFactory, address: string, chain: TonHelper) => Promise<import("xp.network").NftInfo<import("xp.network/dist/helpers/ton").TonNft>[]>;
