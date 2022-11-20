"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listing = void 0;
const config_1 = require("./config");
const process_1 = require("process");
const listing = async (factory, address, chain) => {
    const nfts = await factory.nftList(chain, address);
    return nfts;
};
exports.listing = listing;
(async () => {
    const { factory, PK, ton } = await (0, config_1.setup)();
    const result = await (0, exports.listing)(factory, PK, ton);
    console.log("NFTs", result);
    (0, process_1.exit)(0);
})().catch(e => {
    console.error(e);
    (0, process_1.exit)(1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9saXN0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUErQjtBQUMvQixxQ0FBK0I7QUFJeEIsTUFBTSxPQUFPLEdBQUcsS0FBSyxFQUN4QixPQUFvQixFQUNwQixPQUFlLEVBQ2YsS0FBZSxFQUNqQixFQUFFO0lBRUEsTUFBTSxJQUFJLEdBQUcsTUFBTSxPQUFPLENBQUMsT0FBTyxDQUM5QixLQUFLLEVBQ0wsT0FBTyxDQUNWLENBQUM7SUFFRixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUE7QUFaWSxRQUFBLE9BQU8sV0FZbkI7QUFFRCxDQUFDLEtBQUssSUFBSSxFQUFFO0lBRVIsTUFBTSxFQUNGLE9BQU8sRUFDUCxFQUFFLEVBQ0YsR0FBRyxFQUNOLEdBQUcsTUFBTSxJQUFBLGNBQUssR0FBRSxDQUFBO0lBRWpCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxlQUFPLEVBQ3hCLE9BQU8sRUFDUCxFQUFFLEVBQ0YsR0FBRyxDQUNOLENBQUM7SUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUc1QixJQUFBLGNBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztBQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixJQUFBLGNBQUksRUFBQyxDQUFDLENBQUMsQ0FBQTtBQUNYLENBQUMsQ0FBQyxDQUFBIn0=