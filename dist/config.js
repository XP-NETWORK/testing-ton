"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setup = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const xp_network_1 = require("xp.network");
const tonweb_mnemonic_1 = require("tonweb-mnemonic");
const setup = async () => {
    const factory = (0, xp_network_1.ChainFactory)(xp_network_1.AppConfigs.TestNet(), await xp_network_1.ChainFactoryConfigs.TestNet());
    const ton = await factory.inner(xp_network_1.Chain.TON);
    const bsc = await factory.inner(xp_network_1.Chain.BSC);
    const signer = ton.tonKpWrapper(await (0, tonweb_mnemonic_1.mnemonicToKeyPair)(process.env.TON_MNEMONIC.split(',')));
    const PK = process.env.PK || '';
    if (!PK)
        throw Error("PK is missing in the environment");
    return {
        factory,
        signer,
        ton,
        bsc,
        PK
    };
};
exports.setup = setup;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxtQ0FBOEI7QUFBQyxJQUFBLGVBQU0sR0FBRSxDQUFDO0FBQ3hDLDJDQUtzQjtBQUVwQixxREFBb0Q7QUFHL0MsTUFBTSxLQUFLLEdBQUcsS0FBSyxJQUV4QixFQUFFO0lBRUEsTUFBTSxPQUFPLEdBQUcsSUFBQSx5QkFBWSxFQUN4Qix1QkFBVSxDQUFDLE9BQU8sRUFBRSxFQUNwQixNQUFNLGdDQUFtQixDQUFDLE9BQU8sRUFBRSxDQUNwQyxDQUFDO0lBRUYsTUFBTSxHQUFHLEdBQUcsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0MsTUFBTSxHQUFHLEdBQUcsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFN0MsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUEsbUNBQWlCLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUvRixNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDaEMsSUFBSSxDQUFDLEVBQUU7UUFBRSxNQUFNLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBRXpELE9BQU87UUFDSCxPQUFPO1FBQ1AsTUFBTTtRQUNOLEdBQUc7UUFDSCxHQUFHO1FBQ0gsRUFBRTtLQUNMLENBQUE7QUFFTCxDQUFDLENBQUE7QUF6QlksUUFBQSxLQUFLLFNBeUJqQjtBQUVELGlCQUFpQjtBQUVqQixjQUFjO0FBQ2QsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQixlQUFlO0FBQ2YsY0FBYztBQUNkLHVCQUF1QjtBQUV2QixTQUFTO0FBRVQsd0NBQXdDO0FBQ3hDLHNDQUFzQztBQUN0QyxnQ0FBZ0M7QUFDaEMsZ0NBQWdDO0FBRWhDLGVBQWU7QUFDZixvQkFBb0I7QUFDcEIsd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZixLQUFLIn0=