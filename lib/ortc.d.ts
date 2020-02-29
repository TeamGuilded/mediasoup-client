import { RtpCapabilities, MediaKind, RtpCodecCapability, RtpHeaderExtension, RtpParameters, RtpCodecParameters, RtcpFeedback, RtpEncodingParameters, RtpHeaderExtensionParameters, RtcpParameters } from './RtpParameters';
import { SctpCapabilities, NumSctpStreams, SctpParameters, SctpStreamParameters } from './SctpParameters';
/**
 * Validates RtpCapabilities. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
export declare function validateRtpCapabilities(caps: RtpCapabilities): void;
/**
 * Validates RtpCodecCapability. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
export declare function validateRtpCodecCapability(codec: RtpCodecCapability): void;
/**
 * Validates RtcpFeedback. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
export declare function validateRtcpFeedback(fb: RtcpFeedback): void;
/**
 * Validates RtpHeaderExtension. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
export declare function validateRtpHeaderExtension(ext: RtpHeaderExtension): void;
/**
 * Validates RtpParameters. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
export declare function validateRtpParameters(params: RtpParameters): void;
/**
 * Validates RtpCodecParameters. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
export declare function validateRtpCodecParameters(codec: RtpCodecParameters): void;
/**
 * Validates RtpHeaderExtensionParameteters. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
export declare function validateRtpHeaderExtensionParameters(ext: RtpHeaderExtensionParameters): void;
/**
 * Validates RtpEncodingParameters. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
export declare function validateRtpEncodingParameters(encoding: RtpEncodingParameters): void;
/**
 * Validates RtcpParameters. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
export declare function validateRtcpParameters(rtcp: RtcpParameters): void;
/**
 * Validates SctpCapabilities. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
export declare function validateSctpCapabilities(caps: SctpCapabilities): void;
/**
 * Validates NumSctpStreams. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
export declare function validateNumSctpStreams(numStreams: NumSctpStreams): void;
/**
 * Validates SctpParameters. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
export declare function validateSctpParameters(params: SctpParameters): void;
/**
 * Validates SctpStreamParameters. It may modify given data by adding missing
 * fields with default values.
 * It throws if invalid.
 */
export declare function validateSctpStreamParameters(params: SctpStreamParameters): void;
/**
 * Generate extended RTP capabilities for sending and receiving.
 */
export declare function getExtendedRtpCapabilities(localCaps: RtpCapabilities, remoteCaps: RtpCapabilities): any;
/**
 * Generate RTP capabilities for receiving media based on the given extended
 * RTP capabilities.
 */
export declare function getRecvRtpCapabilities(extendedRtpCapabilities: any): RtpCapabilities;
/**
 * Generate RTP parameters of the given kind for sending media.
 * Just the first media codec per kind is considered.
 * NOTE: mid, encodings and rtcp fields are left empty.
 */
export declare function getSendingRtpParameters(kind: MediaKind, extendedRtpCapabilities: any): RtpParameters;
/**
 * Generate RTP parameters of the given kind suitable for the remote SDP answer.
 */
export declare function getSendingRemoteRtpParameters(kind: MediaKind, extendedRtpCapabilities: any): RtpParameters;
/**
 * Create RTP parameters for a Consumer for the RTP probator.
 */
export declare function generateProbatorRtpParameters(videoRtpParameters: RtpParameters): RtpParameters;
/**
 * Whether media can be sent based on the given RTP capabilities.
 */
export declare function canSend(kind: MediaKind, extendedRtpCapabilities: any): boolean;
/**
 * Whether the given RTP parameters can be received with the given RTP
 * capabilities.
 */
export declare function canReceive(rtpParameters: RtpParameters, extendedRtpCapabilities: any): boolean;
//# sourceMappingURL=ortc.d.ts.map