import { exit } from "process";
import {config} from 'dotenv'; config();
import {
    AppConfigs,
    Chain,
    ChainFactory,
    ChainFactoryConfigs,
  } from "xp.network";

  import { mnemonicToKeyPair } from 'tonweb-mnemonic';


export const setup = async (

) => {

    const factory = ChainFactory(
        AppConfigs.TestNet(),
        await ChainFactoryConfigs.TestNet(),
      );

      const ton = await factory.inner(Chain.TON);
      const bsc = await factory.inner(Chain.BSC);

    const signer = ton.tonKpWrapper(await mnemonicToKeyPair(process.env.TON_MNEMONIC!.split(',')));

    const PK = process.env.PK || '';
    if (!PK) throw Error("PK is missing in the environment");

    return {
        factory,
        signer,
        ton,
        bsc,
        PK
    }

}

// (async () => {

//     const {
//         factory,
//         signer,
//         ton,
//         bsc
//     } = await setup(

//     );

//     console.log("factory:", factory);
//     console.log("Signer:", signer);
//     console.log("ton:", ton);
//     console.log("bsc:", bsc);

//     exit(0);
// })().catch(e => {
//     console.error(e);
//     exit(1);
// })