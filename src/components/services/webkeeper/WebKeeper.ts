// import Waves from '@waves/waves-js';
import Signer from '@waves/signer';
import Provider from '@waves.exchange/provider-web';

class WebKeeper {
    lib!: Signer;
    provider!: Provider;
    nodeUrl!: string;
    storageProviderUrl!: string;

    constructor ({ nodeUrl, provider }: { nodeUrl: string, provider?: string }) {
        this.nodeUrl = nodeUrl;
        this.storageProviderUrl = provider;
        this.provider = new Provider(provider);
        this.lib = new Signer({ NODE_URL: nodeUrl });
        this.lib.setProvider(this.provider);
    }
}

export default WebKeeper;