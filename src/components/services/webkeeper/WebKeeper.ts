import Waves from '@waves/waves-js';
import Provider from '@waves.exchange/storage-provider';

class WebKeeper {
    lib!: Waves;
    provider!: Provider;
    nodeUrl!: string;
    storageProviderUrl!: string;

    constructor ({ nodeUrl, provider }: { nodeUrl: string, provider?: string }) {
        this.nodeUrl = nodeUrl;
        this.storageProviderUrl = provider;
        this.provider = new Provider(provider);
        this.lib = new Waves({ NODE_URL: nodeUrl });
        this.lib.setProvider(this.provider);
    }
}

export default WebKeeper;