import { NFTs } from 'databases';

const allNFTs = async (req, res) => {
    let data = NFTs;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ data }));
};

export default allNFTs;
