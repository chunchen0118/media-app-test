class VolumeProcessor extends AudioWorkletProcessor {
    constructor() {
        super();
        this.volume = 0;
        // console.log('VolumeProcessor 載入成功');
    }

    process(inputs, outputs, parameters) {
        const input = inputs[0];
        if (input.length > 0) {
            const channelData = input[0];
            let sum = 0;
            for (let i = 0; i < channelData.length; i++) {
            sum += channelData[i] * channelData[i];
            }
            this.volume = Math.sqrt(sum / channelData.length);
            this.port.postMessage(this.volume);
        }
        return true;
    }
}

registerProcessor('volume-processor', VolumeProcessor);
