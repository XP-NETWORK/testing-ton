import {setup} from './config';
import { exit } from "process";
import { TonHelper } from 'xp.network/dist/helpers/ton';
import { ChainFactory } from 'xp.network';

export const listing = async (
    factory:ChainFactory,
    address: string,
    chain:TonHelper
) => {

    const nfts = await factory.nftList(
        chain,
        address
    );

    return nfts;
}

(async () => {

    const {
        factory,
        PK,
        ton
    } = await setup()

    const result = await listing(
        factory,
        PK,
        ton
    );

    console.log("NFTs", result);
    

    exit(0);
})().catch(e => {
    console.error(e);
    exit(1)
})