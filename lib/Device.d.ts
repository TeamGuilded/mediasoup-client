import { Transport, TransportOptions } from './Transport';
import { RtpCapabilities } from './RtpParametersAndCapabilities';
interface InternalTransportOptions extends TransportOptions {
    direction: 'send' | 'recv';
}
export default class Device {
    private _Handler;
    private _loaded;
    private _extendedRtpCapabilities;
    private _recvRtpCapabilities?;
    private _canProduceByKind;
    private _sctpCapabilities;
    /**
     * Create a new Device to connect to mediasoup server.
     *
     * @param {Class|String} [Handler] - An optional RTC handler class for unsupported or
     *   custom devices (not needed when running in a browser). If a String, it will
     *   force usage of the given built-in handler.
     *
     * @throws {UnsupportedError} if device is not supported.
     */
    constructor({ Handler }?: {
        Handler?: string | Record<string, any>;
    });
    /**
     * The RTC handler class name ('Chrome70', 'Firefox65', etc).
     */
    readonly handlerName: string;
    /**
     * Whether the Device is loaded.
     */
    readonly loaded: boolean;
    /**
     * RTP capabilities of the Device for receiving media.
     *
     * @throws {InvalidStateError} if not loaded.
     */
    readonly rtpCapabilities: RtpCapabilities | undefined;
    /**
     * SCTP capabilities of the Device.
     *
     * @throws {InvalidStateError} if not loaded.
     */
    readonly sctpCapabilities: any;
    /**
     * Initialize the Device.
     *
     * @throws {TypeError} if missing/wrong arguments.
     * @throws {InvalidStateError} if already loaded.
     */
    load({ routerRtpCapabilities }?: {
        routerRtpCapabilities?: RtpCapabilities;
    }): Promise<void>;
    /**
     * Whether we can produce audio/video.
     *
     * @throws {InvalidStateError} if not loaded.
     * @throws {TypeError} if wrong arguments.
     */
    canProduce(kind: 'audio' | 'video'): boolean;
    /**
     * Creates a Transport for sending media.
     *
     * @throws {InvalidStateError} if not loaded.
     * @throws {TypeError} if wrong arguments.
     */
    createSendTransport({ id, iceParameters, iceCandidates, dtlsParameters, sctpParameters, iceServers, iceTransportPolicy, additionalSettings, proprietaryConstraints, appData }: TransportOptions): Transport;
    /**
     * Creates a Transport for receiving media.
     *
     * @throws {InvalidStateError} if not loaded.
     * @throws {TypeError} if wrong arguments.
     */
    createRecvTransport({ id, iceParameters, iceCandidates, dtlsParameters, sctpParameters, iceServers, iceTransportPolicy, additionalSettings, proprietaryConstraints, appData }: TransportOptions): Transport;
    /**
     * @private
     */
    _createTransport({ direction, id, iceParameters, iceCandidates, dtlsParameters, sctpParameters, iceServers, iceTransportPolicy, additionalSettings, proprietaryConstraints, appData }: InternalTransportOptions): Transport;
}
export {};
//# sourceMappingURL=Device.d.ts.map