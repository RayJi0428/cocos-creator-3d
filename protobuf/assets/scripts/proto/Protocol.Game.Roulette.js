/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(window || global).Protocol = (function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.Protocol = (function() {
    
        /**
         * Namespace Protocol.
         * @exports Protocol
         * @namespace
         */
        var Protocol = {};
    
        Protocol.Game = (function() {
    
            /**
             * Namespace Game.
             * @memberof Protocol
             * @namespace
             */
            var Game = {};
    
            Game.Roulette = (function() {
    
                /**
                 * Namespace Roulette.
                 * @memberof Protocol.Game
                 * @namespace
                 */
                var Roulette = {};
    
                /**
                 * Phase enum.
                 * @name Protocol.Game.Roulette.Phase
                 * @enum {string}
                 * @property {number} PHASE_DEFAULT=0 PHASE_DEFAULT value
                 * @property {number} BET=1 BET value
                 * @property {number} SPIN=2 SPIN value
                 * @property {number} SETTLE=3 SETTLE value
                 */
                Roulette.Phase = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "PHASE_DEFAULT"] = 0;
                    values[valuesById[1] = "BET"] = 1;
                    values[valuesById[2] = "SPIN"] = 2;
                    values[valuesById[3] = "SETTLE"] = 3;
                    return values;
                })();
    
                /**
                 * Timing enum.
                 * @name Protocol.Game.Roulette.Timing
                 * @enum {string}
                 * @property {number} Timing_DEFAULT=0 Timing_DEFAULT value
                 * @property {number} BEGIN=1 BEGIN value
                 * @property {number} END=2 END value
                 * @property {number} ING=3 ING value
                 * @property {number} NONE=4 NONE value
                 */
                Roulette.Timing = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "Timing_DEFAULT"] = 0;
                    values[valuesById[1] = "BEGIN"] = 1;
                    values[valuesById[2] = "END"] = 2;
                    values[valuesById[3] = "ING"] = 3;
                    values[valuesById[4] = "NONE"] = 4;
                    return values;
                })();
    
                /**
                 * MessageID_Roulette enum.
                 * @name Protocol.Game.Roulette.MessageID_Roulette
                 * @enum {string}
                 * @property {number} MESSAGEID_ROULETTE_DEFAULT=0 MESSAGEID_ROULETTE_DEFAULT value
                 * @property {number} UC_TO_GL_BET=10001001 UC_TO_GL_BET value
                 * @property {number} UC_TO_GL_CALL=10001002 UC_TO_GL_CALL value
                 * @property {number} UC_TO_GL_UNDO=10001003 UC_TO_GL_UNDO value
                 * @property {number} UC_TO_GL_CLEAR=10001004 UC_TO_GL_CLEAR value
                 * @property {number} UC_TO_GL_REPEAT=10001005 UC_TO_GL_REPEAT value
                 * @property {number} UC_TO_GL_CHEAT_CODE=10001006 UC_TO_GL_CHEAT_CODE value
                 * @property {number} GL_TO_UC_BET=20001001 GL_TO_UC_BET value
                 * @property {number} GL_TO_UC_CALL=20001002 GL_TO_UC_CALL value
                 * @property {number} GL_TO_UC_UNDO=20001003 GL_TO_UC_UNDO value
                 * @property {number} GL_TO_UC_CLEAR=20001004 GL_TO_UC_CLEAR value
                 * @property {number} GL_TO_UC_REPEAT=20001005 GL_TO_UC_REPEAT value
                 * @property {number} GL_TO_UC_RETURN_REPEAT=20001006 GL_TO_UC_RETURN_REPEAT value
                 * @property {number} GL_TO_UC_CHEAT_CODE=20001007 GL_TO_UC_CHEAT_CODE value
                 * @property {number} GL_TO_UC_INIT_INFO=20001101 GL_TO_UC_INIT_INFO value
                 * @property {number} GL_TO_UC_INIT_PHASE=20001102 GL_TO_UC_INIT_PHASE value
                 * @property {number} GL_TO_UC_INIT_HISTORY=20001103 GL_TO_UC_INIT_HISTORY value
                 * @property {number} GL_TO_UC_CHANGE_PHASE=20001201 GL_TO_UC_CHANGE_PHASE value
                 * @property {number} GL_TO_UC_UPDATE_TABLE=20001202 GL_TO_UC_UPDATE_TABLE value
                 * @property {number} GL_TO_UC_SPIN_NUMBER=20001203 GL_TO_UC_SPIN_NUMBER value
                 * @property {number} GL_TO_UC_SETTLE_RESULT=20001204 GL_TO_UC_SETTLE_RESULT value
                 * @property {number} GL_TO_FL_UPDATE_ROUND_INFO=20001205 GL_TO_FL_UPDATE_ROUND_INFO value
                 * @property {number} GL_TO_UC_UPDATE_POINT_INFO=20001206 GL_TO_UC_UPDATE_POINT_INFO value
                 */
                Roulette.MessageID_Roulette = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "MESSAGEID_ROULETTE_DEFAULT"] = 0;
                    values[valuesById[10001001] = "UC_TO_GL_BET"] = 10001001;
                    values[valuesById[10001002] = "UC_TO_GL_CALL"] = 10001002;
                    values[valuesById[10001003] = "UC_TO_GL_UNDO"] = 10001003;
                    values[valuesById[10001004] = "UC_TO_GL_CLEAR"] = 10001004;
                    values[valuesById[10001005] = "UC_TO_GL_REPEAT"] = 10001005;
                    values[valuesById[10001006] = "UC_TO_GL_CHEAT_CODE"] = 10001006;
                    values[valuesById[20001001] = "GL_TO_UC_BET"] = 20001001;
                    values[valuesById[20001002] = "GL_TO_UC_CALL"] = 20001002;
                    values[valuesById[20001003] = "GL_TO_UC_UNDO"] = 20001003;
                    values[valuesById[20001004] = "GL_TO_UC_CLEAR"] = 20001004;
                    values[valuesById[20001005] = "GL_TO_UC_REPEAT"] = 20001005;
                    values[valuesById[20001006] = "GL_TO_UC_RETURN_REPEAT"] = 20001006;
                    values[valuesById[20001007] = "GL_TO_UC_CHEAT_CODE"] = 20001007;
                    values[valuesById[20001101] = "GL_TO_UC_INIT_INFO"] = 20001101;
                    values[valuesById[20001102] = "GL_TO_UC_INIT_PHASE"] = 20001102;
                    values[valuesById[20001103] = "GL_TO_UC_INIT_HISTORY"] = 20001103;
                    values[valuesById[20001201] = "GL_TO_UC_CHANGE_PHASE"] = 20001201;
                    values[valuesById[20001202] = "GL_TO_UC_UPDATE_TABLE"] = 20001202;
                    values[valuesById[20001203] = "GL_TO_UC_SPIN_NUMBER"] = 20001203;
                    values[valuesById[20001204] = "GL_TO_UC_SETTLE_RESULT"] = 20001204;
                    values[valuesById[20001205] = "GL_TO_FL_UPDATE_ROUND_INFO"] = 20001205;
                    values[valuesById[20001206] = "GL_TO_UC_UPDATE_POINT_INFO"] = 20001206;
                    return values;
                })();
    
                Roulette.UC_TO_GL_BET_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_BET_T.
                     * @memberof Protocol.Game.Roulette
                     * @interface IUC_TO_GL_BET_T
                     * @property {number|null} [betFieldId] UC_TO_GL_BET_T betFieldId
                     * @property {number|null} [chipId] UC_TO_GL_BET_T chipId
                     * @property {number|null} [roundNumber] UC_TO_GL_BET_T roundNumber
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_BET_T.
                     * @memberof Protocol.Game.Roulette
                     * @classdesc Represents a UC_TO_GL_BET_T.
                     * @implements IUC_TO_GL_BET_T
                     * @constructor
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_BET_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_BET_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UC_TO_GL_BET_T betFieldId.
                     * @member {number} betFieldId
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_BET_T
                     * @instance
                     */
                    UC_TO_GL_BET_T.prototype.betFieldId = 0;
    
                    /**
                     * UC_TO_GL_BET_T chipId.
                     * @member {number} chipId
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_BET_T
                     * @instance
                     */
                    UC_TO_GL_BET_T.prototype.chipId = 0;
    
                    /**
                     * UC_TO_GL_BET_T roundNumber.
                     * @member {number} roundNumber
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_BET_T
                     * @instance
                     */
                    UC_TO_GL_BET_T.prototype.roundNumber = 0;
    
                    /**
                     * Creates a new UC_TO_GL_BET_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_BET_T
                     * @static
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_BET_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_BET_T} UC_TO_GL_BET_T instance
                     */
                    UC_TO_GL_BET_T.create = function create(properties) {
                        return new UC_TO_GL_BET_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_BET_T message. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_BET_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_BET_T
                     * @static
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_BET_T} message UC_TO_GL_BET_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_BET_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.betFieldId != null && message.hasOwnProperty("betFieldId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.betFieldId);
                        if (message.chipId != null && message.hasOwnProperty("chipId"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.chipId);
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roundNumber);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_BET_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_BET_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_BET_T
                     * @static
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_BET_T} message UC_TO_GL_BET_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_BET_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_BET_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_BET_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_BET_T} UC_TO_GL_BET_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_BET_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Roulette.UC_TO_GL_BET_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.betFieldId = reader.int32();
                                break;
                            case 2:
                                message.chipId = reader.int32();
                                break;
                            case 3:
                                message.roundNumber = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a UC_TO_GL_BET_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_BET_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_BET_T} UC_TO_GL_BET_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_BET_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a UC_TO_GL_BET_T message.
                     * @function verify
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_BET_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_BET_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.betFieldId != null && message.hasOwnProperty("betFieldId"))
                            if (!$util.isInteger(message.betFieldId))
                                return "betFieldId: integer expected";
                        if (message.chipId != null && message.hasOwnProperty("chipId"))
                            if (!$util.isInteger(message.chipId))
                                return "chipId: integer expected";
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            if (!$util.isInteger(message.roundNumber))
                                return "roundNumber: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_BET_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_BET_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_BET_T} UC_TO_GL_BET_T
                     */
                    UC_TO_GL_BET_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Roulette.UC_TO_GL_BET_T)
                            return object;
                        var message = new $root.Protocol.Game.Roulette.UC_TO_GL_BET_T();
                        if (object.betFieldId != null)
                            message.betFieldId = object.betFieldId | 0;
                        if (object.chipId != null)
                            message.chipId = object.chipId | 0;
                        if (object.roundNumber != null)
                            message.roundNumber = object.roundNumber | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_BET_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_BET_T
                     * @static
                     * @param {Protocol.Game.Roulette.UC_TO_GL_BET_T} message UC_TO_GL_BET_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_BET_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.betFieldId = 0;
                            object.chipId = 0;
                            object.roundNumber = 0;
                        }
                        if (message.betFieldId != null && message.hasOwnProperty("betFieldId"))
                            object.betFieldId = message.betFieldId;
                        if (message.chipId != null && message.hasOwnProperty("chipId"))
                            object.chipId = message.chipId;
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            object.roundNumber = message.roundNumber;
                        return object;
                    };
    
                    /**
                     * Converts this UC_TO_GL_BET_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_BET_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_BET_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_BET_T;
                })();
    
                Roulette.UC_TO_GL_CALL_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_CALL_T.
                     * @memberof Protocol.Game.Roulette
                     * @interface IUC_TO_GL_CALL_T
                     * @property {number|null} [calledBetId] UC_TO_GL_CALL_T calledBetId
                     * @property {number|null} [chipId] UC_TO_GL_CALL_T chipId
                     * @property {number|null} [roundNumber] UC_TO_GL_CALL_T roundNumber
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_CALL_T.
                     * @memberof Protocol.Game.Roulette
                     * @classdesc Represents a UC_TO_GL_CALL_T.
                     * @implements IUC_TO_GL_CALL_T
                     * @constructor
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_CALL_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_CALL_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UC_TO_GL_CALL_T calledBetId.
                     * @member {number} calledBetId
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CALL_T
                     * @instance
                     */
                    UC_TO_GL_CALL_T.prototype.calledBetId = 0;
    
                    /**
                     * UC_TO_GL_CALL_T chipId.
                     * @member {number} chipId
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CALL_T
                     * @instance
                     */
                    UC_TO_GL_CALL_T.prototype.chipId = 0;
    
                    /**
                     * UC_TO_GL_CALL_T roundNumber.
                     * @member {number} roundNumber
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CALL_T
                     * @instance
                     */
                    UC_TO_GL_CALL_T.prototype.roundNumber = 0;
    
                    /**
                     * Creates a new UC_TO_GL_CALL_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CALL_T
                     * @static
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_CALL_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_CALL_T} UC_TO_GL_CALL_T instance
                     */
                    UC_TO_GL_CALL_T.create = function create(properties) {
                        return new UC_TO_GL_CALL_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_CALL_T message. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_CALL_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CALL_T
                     * @static
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_CALL_T} message UC_TO_GL_CALL_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_CALL_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.calledBetId != null && message.hasOwnProperty("calledBetId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.calledBetId);
                        if (message.chipId != null && message.hasOwnProperty("chipId"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.chipId);
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roundNumber);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_CALL_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_CALL_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CALL_T
                     * @static
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_CALL_T} message UC_TO_GL_CALL_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_CALL_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_CALL_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CALL_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_CALL_T} UC_TO_GL_CALL_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_CALL_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Roulette.UC_TO_GL_CALL_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.calledBetId = reader.int32();
                                break;
                            case 2:
                                message.chipId = reader.int32();
                                break;
                            case 3:
                                message.roundNumber = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a UC_TO_GL_CALL_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CALL_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_CALL_T} UC_TO_GL_CALL_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_CALL_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a UC_TO_GL_CALL_T message.
                     * @function verify
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CALL_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_CALL_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.calledBetId != null && message.hasOwnProperty("calledBetId"))
                            if (!$util.isInteger(message.calledBetId))
                                return "calledBetId: integer expected";
                        if (message.chipId != null && message.hasOwnProperty("chipId"))
                            if (!$util.isInteger(message.chipId))
                                return "chipId: integer expected";
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            if (!$util.isInteger(message.roundNumber))
                                return "roundNumber: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_CALL_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CALL_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_CALL_T} UC_TO_GL_CALL_T
                     */
                    UC_TO_GL_CALL_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Roulette.UC_TO_GL_CALL_T)
                            return object;
                        var message = new $root.Protocol.Game.Roulette.UC_TO_GL_CALL_T();
                        if (object.calledBetId != null)
                            message.calledBetId = object.calledBetId | 0;
                        if (object.chipId != null)
                            message.chipId = object.chipId | 0;
                        if (object.roundNumber != null)
                            message.roundNumber = object.roundNumber | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_CALL_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CALL_T
                     * @static
                     * @param {Protocol.Game.Roulette.UC_TO_GL_CALL_T} message UC_TO_GL_CALL_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_CALL_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.calledBetId = 0;
                            object.chipId = 0;
                            object.roundNumber = 0;
                        }
                        if (message.calledBetId != null && message.hasOwnProperty("calledBetId"))
                            object.calledBetId = message.calledBetId;
                        if (message.chipId != null && message.hasOwnProperty("chipId"))
                            object.chipId = message.chipId;
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            object.roundNumber = message.roundNumber;
                        return object;
                    };
    
                    /**
                     * Converts this UC_TO_GL_CALL_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CALL_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_CALL_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_CALL_T;
                })();
    
                Roulette.UC_TO_GL_UNDO_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_UNDO_T.
                     * @memberof Protocol.Game.Roulette
                     * @interface IUC_TO_GL_UNDO_T
                     * @property {number|null} [roundNumber] UC_TO_GL_UNDO_T roundNumber
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_UNDO_T.
                     * @memberof Protocol.Game.Roulette
                     * @classdesc Represents a UC_TO_GL_UNDO_T.
                     * @implements IUC_TO_GL_UNDO_T
                     * @constructor
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_UNDO_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_UNDO_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UC_TO_GL_UNDO_T roundNumber.
                     * @member {number} roundNumber
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_UNDO_T
                     * @instance
                     */
                    UC_TO_GL_UNDO_T.prototype.roundNumber = 0;
    
                    /**
                     * Creates a new UC_TO_GL_UNDO_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_UNDO_T
                     * @static
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_UNDO_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_UNDO_T} UC_TO_GL_UNDO_T instance
                     */
                    UC_TO_GL_UNDO_T.create = function create(properties) {
                        return new UC_TO_GL_UNDO_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_UNDO_T message. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_UNDO_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_UNDO_T
                     * @static
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_UNDO_T} message UC_TO_GL_UNDO_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_UNDO_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roundNumber);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_UNDO_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_UNDO_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_UNDO_T
                     * @static
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_UNDO_T} message UC_TO_GL_UNDO_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_UNDO_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_UNDO_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_UNDO_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_UNDO_T} UC_TO_GL_UNDO_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_UNDO_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Roulette.UC_TO_GL_UNDO_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.roundNumber = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a UC_TO_GL_UNDO_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_UNDO_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_UNDO_T} UC_TO_GL_UNDO_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_UNDO_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a UC_TO_GL_UNDO_T message.
                     * @function verify
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_UNDO_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_UNDO_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            if (!$util.isInteger(message.roundNumber))
                                return "roundNumber: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_UNDO_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_UNDO_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_UNDO_T} UC_TO_GL_UNDO_T
                     */
                    UC_TO_GL_UNDO_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Roulette.UC_TO_GL_UNDO_T)
                            return object;
                        var message = new $root.Protocol.Game.Roulette.UC_TO_GL_UNDO_T();
                        if (object.roundNumber != null)
                            message.roundNumber = object.roundNumber | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_UNDO_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_UNDO_T
                     * @static
                     * @param {Protocol.Game.Roulette.UC_TO_GL_UNDO_T} message UC_TO_GL_UNDO_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_UNDO_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.roundNumber = 0;
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            object.roundNumber = message.roundNumber;
                        return object;
                    };
    
                    /**
                     * Converts this UC_TO_GL_UNDO_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_UNDO_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_UNDO_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_UNDO_T;
                })();
    
                Roulette.UC_TO_GL_CLEAR_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_CLEAR_T.
                     * @memberof Protocol.Game.Roulette
                     * @interface IUC_TO_GL_CLEAR_T
                     * @property {number|null} [roundNumber] UC_TO_GL_CLEAR_T roundNumber
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_CLEAR_T.
                     * @memberof Protocol.Game.Roulette
                     * @classdesc Represents a UC_TO_GL_CLEAR_T.
                     * @implements IUC_TO_GL_CLEAR_T
                     * @constructor
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_CLEAR_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_CLEAR_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UC_TO_GL_CLEAR_T roundNumber.
                     * @member {number} roundNumber
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CLEAR_T
                     * @instance
                     */
                    UC_TO_GL_CLEAR_T.prototype.roundNumber = 0;
    
                    /**
                     * Creates a new UC_TO_GL_CLEAR_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CLEAR_T
                     * @static
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_CLEAR_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_CLEAR_T} UC_TO_GL_CLEAR_T instance
                     */
                    UC_TO_GL_CLEAR_T.create = function create(properties) {
                        return new UC_TO_GL_CLEAR_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_CLEAR_T message. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_CLEAR_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CLEAR_T
                     * @static
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_CLEAR_T} message UC_TO_GL_CLEAR_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_CLEAR_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roundNumber);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_CLEAR_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_CLEAR_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CLEAR_T
                     * @static
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_CLEAR_T} message UC_TO_GL_CLEAR_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_CLEAR_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_CLEAR_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CLEAR_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_CLEAR_T} UC_TO_GL_CLEAR_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_CLEAR_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Roulette.UC_TO_GL_CLEAR_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.roundNumber = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a UC_TO_GL_CLEAR_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CLEAR_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_CLEAR_T} UC_TO_GL_CLEAR_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_CLEAR_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a UC_TO_GL_CLEAR_T message.
                     * @function verify
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CLEAR_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_CLEAR_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            if (!$util.isInteger(message.roundNumber))
                                return "roundNumber: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_CLEAR_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CLEAR_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_CLEAR_T} UC_TO_GL_CLEAR_T
                     */
                    UC_TO_GL_CLEAR_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Roulette.UC_TO_GL_CLEAR_T)
                            return object;
                        var message = new $root.Protocol.Game.Roulette.UC_TO_GL_CLEAR_T();
                        if (object.roundNumber != null)
                            message.roundNumber = object.roundNumber | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_CLEAR_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CLEAR_T
                     * @static
                     * @param {Protocol.Game.Roulette.UC_TO_GL_CLEAR_T} message UC_TO_GL_CLEAR_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_CLEAR_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.roundNumber = 0;
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            object.roundNumber = message.roundNumber;
                        return object;
                    };
    
                    /**
                     * Converts this UC_TO_GL_CLEAR_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CLEAR_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_CLEAR_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_CLEAR_T;
                })();
    
                Roulette.UC_TO_GL_REPEAT_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_REPEAT_T.
                     * @memberof Protocol.Game.Roulette
                     * @interface IUC_TO_GL_REPEAT_T
                     * @property {number|null} [roundNumber] UC_TO_GL_REPEAT_T roundNumber
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_REPEAT_T.
                     * @memberof Protocol.Game.Roulette
                     * @classdesc Represents a UC_TO_GL_REPEAT_T.
                     * @implements IUC_TO_GL_REPEAT_T
                     * @constructor
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_REPEAT_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_REPEAT_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UC_TO_GL_REPEAT_T roundNumber.
                     * @member {number} roundNumber
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_REPEAT_T
                     * @instance
                     */
                    UC_TO_GL_REPEAT_T.prototype.roundNumber = 0;
    
                    /**
                     * Creates a new UC_TO_GL_REPEAT_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_REPEAT_T
                     * @static
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_REPEAT_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_REPEAT_T} UC_TO_GL_REPEAT_T instance
                     */
                    UC_TO_GL_REPEAT_T.create = function create(properties) {
                        return new UC_TO_GL_REPEAT_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_REPEAT_T message. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_REPEAT_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_REPEAT_T
                     * @static
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_REPEAT_T} message UC_TO_GL_REPEAT_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_REPEAT_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roundNumber);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_REPEAT_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_REPEAT_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_REPEAT_T
                     * @static
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_REPEAT_T} message UC_TO_GL_REPEAT_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_REPEAT_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_REPEAT_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_REPEAT_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_REPEAT_T} UC_TO_GL_REPEAT_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_REPEAT_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Roulette.UC_TO_GL_REPEAT_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.roundNumber = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a UC_TO_GL_REPEAT_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_REPEAT_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_REPEAT_T} UC_TO_GL_REPEAT_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_REPEAT_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a UC_TO_GL_REPEAT_T message.
                     * @function verify
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_REPEAT_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_REPEAT_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            if (!$util.isInteger(message.roundNumber))
                                return "roundNumber: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_REPEAT_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_REPEAT_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_REPEAT_T} UC_TO_GL_REPEAT_T
                     */
                    UC_TO_GL_REPEAT_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Roulette.UC_TO_GL_REPEAT_T)
                            return object;
                        var message = new $root.Protocol.Game.Roulette.UC_TO_GL_REPEAT_T();
                        if (object.roundNumber != null)
                            message.roundNumber = object.roundNumber | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_REPEAT_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_REPEAT_T
                     * @static
                     * @param {Protocol.Game.Roulette.UC_TO_GL_REPEAT_T} message UC_TO_GL_REPEAT_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_REPEAT_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.roundNumber = 0;
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            object.roundNumber = message.roundNumber;
                        return object;
                    };
    
                    /**
                     * Converts this UC_TO_GL_REPEAT_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_REPEAT_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_REPEAT_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_REPEAT_T;
                })();
    
                Roulette.UC_TO_GL_CHEAT_CODE_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_CHEAT_CODE_T.
                     * @memberof Protocol.Game.Roulette
                     * @interface IUC_TO_GL_CHEAT_CODE_T
                     * @property {number|null} [spinNumber] UC_TO_GL_CHEAT_CODE_T spinNumber
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_CHEAT_CODE_T.
                     * @memberof Protocol.Game.Roulette
                     * @classdesc Represents a UC_TO_GL_CHEAT_CODE_T.
                     * @implements IUC_TO_GL_CHEAT_CODE_T
                     * @constructor
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_CHEAT_CODE_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_CHEAT_CODE_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UC_TO_GL_CHEAT_CODE_T spinNumber.
                     * @member {number} spinNumber
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T
                     * @instance
                     */
                    UC_TO_GL_CHEAT_CODE_T.prototype.spinNumber = 0;
    
                    /**
                     * Creates a new UC_TO_GL_CHEAT_CODE_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T
                     * @static
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_CHEAT_CODE_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T} UC_TO_GL_CHEAT_CODE_T instance
                     */
                    UC_TO_GL_CHEAT_CODE_T.create = function create(properties) {
                        return new UC_TO_GL_CHEAT_CODE_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_CHEAT_CODE_T message. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T
                     * @static
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_CHEAT_CODE_T} message UC_TO_GL_CHEAT_CODE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_CHEAT_CODE_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.spinNumber != null && message.hasOwnProperty("spinNumber"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.spinNumber);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_CHEAT_CODE_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T
                     * @static
                     * @param {Protocol.Game.Roulette.IUC_TO_GL_CHEAT_CODE_T} message UC_TO_GL_CHEAT_CODE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_CHEAT_CODE_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_CHEAT_CODE_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T} UC_TO_GL_CHEAT_CODE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_CHEAT_CODE_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.spinNumber = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a UC_TO_GL_CHEAT_CODE_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T} UC_TO_GL_CHEAT_CODE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_CHEAT_CODE_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a UC_TO_GL_CHEAT_CODE_T message.
                     * @function verify
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_CHEAT_CODE_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.spinNumber != null && message.hasOwnProperty("spinNumber"))
                            if (!$util.isInteger(message.spinNumber))
                                return "spinNumber: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_CHEAT_CODE_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T} UC_TO_GL_CHEAT_CODE_T
                     */
                    UC_TO_GL_CHEAT_CODE_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T)
                            return object;
                        var message = new $root.Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T();
                        if (object.spinNumber != null)
                            message.spinNumber = object.spinNumber | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_CHEAT_CODE_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T
                     * @static
                     * @param {Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T} message UC_TO_GL_CHEAT_CODE_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_CHEAT_CODE_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.spinNumber = 0;
                        if (message.spinNumber != null && message.hasOwnProperty("spinNumber"))
                            object.spinNumber = message.spinNumber;
                        return object;
                    };
    
                    /**
                     * Converts this UC_TO_GL_CHEAT_CODE_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_CHEAT_CODE_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_CHEAT_CODE_T;
                })();
    
                Roulette.GL_TO_UC_BET_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_BET_T.
                     * @memberof Protocol.Game.Roulette
                     * @interface IGL_TO_UC_BET_T
                     * @property {number|null} [betFieldId] GL_TO_UC_BET_T betFieldId
                     * @property {number|null} [resultCode] GL_TO_UC_BET_T resultCode
                     * @property {Array.<number|Long>|null} [betMoney] GL_TO_UC_BET_T betMoney
                     * @property {number|Long|null} [credit] GL_TO_UC_BET_T credit
                     * @property {number|null} [roundNumber] GL_TO_UC_BET_T roundNumber
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_BET_T.
                     * @memberof Protocol.Game.Roulette
                     * @classdesc Represents a GL_TO_UC_BET_T.
                     * @implements IGL_TO_UC_BET_T
                     * @constructor
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_BET_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_BET_T(properties) {
                        this.betMoney = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_BET_T betFieldId.
                     * @member {number} betFieldId
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_BET_T
                     * @instance
                     */
                    GL_TO_UC_BET_T.prototype.betFieldId = 0;
    
                    /**
                     * GL_TO_UC_BET_T resultCode.
                     * @member {number} resultCode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_BET_T
                     * @instance
                     */
                    GL_TO_UC_BET_T.prototype.resultCode = 0;
    
                    /**
                     * GL_TO_UC_BET_T betMoney.
                     * @member {Array.<number|Long>} betMoney
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_BET_T
                     * @instance
                     */
                    GL_TO_UC_BET_T.prototype.betMoney = $util.emptyArray;
    
                    /**
                     * GL_TO_UC_BET_T credit.
                     * @member {number|Long} credit
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_BET_T
                     * @instance
                     */
                    GL_TO_UC_BET_T.prototype.credit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_BET_T roundNumber.
                     * @member {number} roundNumber
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_BET_T
                     * @instance
                     */
                    GL_TO_UC_BET_T.prototype.roundNumber = 0;
    
                    /**
                     * Creates a new GL_TO_UC_BET_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_BET_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_BET_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_BET_T} GL_TO_UC_BET_T instance
                     */
                    GL_TO_UC_BET_T.create = function create(properties) {
                        return new GL_TO_UC_BET_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_BET_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_BET_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_BET_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_BET_T} message GL_TO_UC_BET_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_BET_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.betFieldId != null && message.hasOwnProperty("betFieldId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.betFieldId);
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.resultCode);
                        if (message.betMoney != null && message.betMoney.length) {
                            writer.uint32(/* id 3, wireType 2 =*/26).fork();
                            for (var i = 0; i < message.betMoney.length; ++i)
                                writer.int64(message.betMoney[i]);
                            writer.ldelim();
                        }
                        if (message.credit != null && message.hasOwnProperty("credit"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.credit);
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.roundNumber);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_BET_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_BET_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_BET_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_BET_T} message GL_TO_UC_BET_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_BET_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_BET_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_BET_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_BET_T} GL_TO_UC_BET_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_BET_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Roulette.GL_TO_UC_BET_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.betFieldId = reader.int32();
                                break;
                            case 2:
                                message.resultCode = reader.int32();
                                break;
                            case 3:
                                if (!(message.betMoney && message.betMoney.length))
                                    message.betMoney = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.betMoney.push(reader.int64());
                                } else
                                    message.betMoney.push(reader.int64());
                                break;
                            case 4:
                                message.credit = reader.int64();
                                break;
                            case 5:
                                message.roundNumber = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_BET_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_BET_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_BET_T} GL_TO_UC_BET_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_BET_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_BET_T message.
                     * @function verify
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_BET_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_BET_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.betFieldId != null && message.hasOwnProperty("betFieldId"))
                            if (!$util.isInteger(message.betFieldId))
                                return "betFieldId: integer expected";
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            if (!$util.isInteger(message.resultCode))
                                return "resultCode: integer expected";
                        if (message.betMoney != null && message.hasOwnProperty("betMoney")) {
                            if (!Array.isArray(message.betMoney))
                                return "betMoney: array expected";
                            for (var i = 0; i < message.betMoney.length; ++i)
                                if (!$util.isInteger(message.betMoney[i]) && !(message.betMoney[i] && $util.isInteger(message.betMoney[i].low) && $util.isInteger(message.betMoney[i].high)))
                                    return "betMoney: integer|Long[] expected";
                        }
                        if (message.credit != null && message.hasOwnProperty("credit"))
                            if (!$util.isInteger(message.credit) && !(message.credit && $util.isInteger(message.credit.low) && $util.isInteger(message.credit.high)))
                                return "credit: integer|Long expected";
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            if (!$util.isInteger(message.roundNumber))
                                return "roundNumber: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_BET_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_BET_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_BET_T} GL_TO_UC_BET_T
                     */
                    GL_TO_UC_BET_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Roulette.GL_TO_UC_BET_T)
                            return object;
                        var message = new $root.Protocol.Game.Roulette.GL_TO_UC_BET_T();
                        if (object.betFieldId != null)
                            message.betFieldId = object.betFieldId | 0;
                        if (object.resultCode != null)
                            message.resultCode = object.resultCode | 0;
                        if (object.betMoney) {
                            if (!Array.isArray(object.betMoney))
                                throw TypeError(".Protocol.Game.Roulette.GL_TO_UC_BET_T.betMoney: array expected");
                            message.betMoney = [];
                            for (var i = 0; i < object.betMoney.length; ++i)
                                if ($util.Long)
                                    (message.betMoney[i] = $util.Long.fromValue(object.betMoney[i])).unsigned = false;
                                else if (typeof object.betMoney[i] === "string")
                                    message.betMoney[i] = parseInt(object.betMoney[i], 10);
                                else if (typeof object.betMoney[i] === "number")
                                    message.betMoney[i] = object.betMoney[i];
                                else if (typeof object.betMoney[i] === "object")
                                    message.betMoney[i] = new $util.LongBits(object.betMoney[i].low >>> 0, object.betMoney[i].high >>> 0).toNumber();
                        }
                        if (object.credit != null)
                            if ($util.Long)
                                (message.credit = $util.Long.fromValue(object.credit)).unsigned = false;
                            else if (typeof object.credit === "string")
                                message.credit = parseInt(object.credit, 10);
                            else if (typeof object.credit === "number")
                                message.credit = object.credit;
                            else if (typeof object.credit === "object")
                                message.credit = new $util.LongBits(object.credit.low >>> 0, object.credit.high >>> 0).toNumber();
                        if (object.roundNumber != null)
                            message.roundNumber = object.roundNumber | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_BET_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_BET_T
                     * @static
                     * @param {Protocol.Game.Roulette.GL_TO_UC_BET_T} message GL_TO_UC_BET_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_BET_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.betMoney = [];
                        if (options.defaults) {
                            object.betFieldId = 0;
                            object.resultCode = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.credit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.credit = options.longs === String ? "0" : 0;
                            object.roundNumber = 0;
                        }
                        if (message.betFieldId != null && message.hasOwnProperty("betFieldId"))
                            object.betFieldId = message.betFieldId;
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            object.resultCode = message.resultCode;
                        if (message.betMoney && message.betMoney.length) {
                            object.betMoney = [];
                            for (var j = 0; j < message.betMoney.length; ++j)
                                if (typeof message.betMoney[j] === "number")
                                    object.betMoney[j] = options.longs === String ? String(message.betMoney[j]) : message.betMoney[j];
                                else
                                    object.betMoney[j] = options.longs === String ? $util.Long.prototype.toString.call(message.betMoney[j]) : options.longs === Number ? new $util.LongBits(message.betMoney[j].low >>> 0, message.betMoney[j].high >>> 0).toNumber() : message.betMoney[j];
                        }
                        if (message.credit != null && message.hasOwnProperty("credit"))
                            if (typeof message.credit === "number")
                                object.credit = options.longs === String ? String(message.credit) : message.credit;
                            else
                                object.credit = options.longs === String ? $util.Long.prototype.toString.call(message.credit) : options.longs === Number ? new $util.LongBits(message.credit.low >>> 0, message.credit.high >>> 0).toNumber() : message.credit;
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            object.roundNumber = message.roundNumber;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_BET_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_BET_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_BET_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_BET_T;
                })();
    
                Roulette.GL_TO_UC_CALL_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_CALL_T.
                     * @memberof Protocol.Game.Roulette
                     * @interface IGL_TO_UC_CALL_T
                     * @property {number|null} [calledBetId] GL_TO_UC_CALL_T calledBetId
                     * @property {number|null} [resultCode] GL_TO_UC_CALL_T resultCode
                     * @property {Array.<number|Long>|null} [betMoney] GL_TO_UC_CALL_T betMoney
                     * @property {number|Long|null} [credit] GL_TO_UC_CALL_T credit
                     * @property {number|null} [roundNumber] GL_TO_UC_CALL_T roundNumber
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_CALL_T.
                     * @memberof Protocol.Game.Roulette
                     * @classdesc Represents a GL_TO_UC_CALL_T.
                     * @implements IGL_TO_UC_CALL_T
                     * @constructor
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_CALL_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_CALL_T(properties) {
                        this.betMoney = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_CALL_T calledBetId.
                     * @member {number} calledBetId
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CALL_T
                     * @instance
                     */
                    GL_TO_UC_CALL_T.prototype.calledBetId = 0;
    
                    /**
                     * GL_TO_UC_CALL_T resultCode.
                     * @member {number} resultCode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CALL_T
                     * @instance
                     */
                    GL_TO_UC_CALL_T.prototype.resultCode = 0;
    
                    /**
                     * GL_TO_UC_CALL_T betMoney.
                     * @member {Array.<number|Long>} betMoney
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CALL_T
                     * @instance
                     */
                    GL_TO_UC_CALL_T.prototype.betMoney = $util.emptyArray;
    
                    /**
                     * GL_TO_UC_CALL_T credit.
                     * @member {number|Long} credit
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CALL_T
                     * @instance
                     */
                    GL_TO_UC_CALL_T.prototype.credit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_CALL_T roundNumber.
                     * @member {number} roundNumber
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CALL_T
                     * @instance
                     */
                    GL_TO_UC_CALL_T.prototype.roundNumber = 0;
    
                    /**
                     * Creates a new GL_TO_UC_CALL_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CALL_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_CALL_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_CALL_T} GL_TO_UC_CALL_T instance
                     */
                    GL_TO_UC_CALL_T.create = function create(properties) {
                        return new GL_TO_UC_CALL_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_CALL_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_CALL_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CALL_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_CALL_T} message GL_TO_UC_CALL_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_CALL_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.calledBetId != null && message.hasOwnProperty("calledBetId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.calledBetId);
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.resultCode);
                        if (message.betMoney != null && message.betMoney.length) {
                            writer.uint32(/* id 3, wireType 2 =*/26).fork();
                            for (var i = 0; i < message.betMoney.length; ++i)
                                writer.int64(message.betMoney[i]);
                            writer.ldelim();
                        }
                        if (message.credit != null && message.hasOwnProperty("credit"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.credit);
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.roundNumber);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_CALL_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_CALL_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CALL_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_CALL_T} message GL_TO_UC_CALL_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_CALL_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_CALL_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CALL_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_CALL_T} GL_TO_UC_CALL_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_CALL_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Roulette.GL_TO_UC_CALL_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.calledBetId = reader.int32();
                                break;
                            case 2:
                                message.resultCode = reader.int32();
                                break;
                            case 3:
                                if (!(message.betMoney && message.betMoney.length))
                                    message.betMoney = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.betMoney.push(reader.int64());
                                } else
                                    message.betMoney.push(reader.int64());
                                break;
                            case 4:
                                message.credit = reader.int64();
                                break;
                            case 5:
                                message.roundNumber = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_CALL_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CALL_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_CALL_T} GL_TO_UC_CALL_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_CALL_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_CALL_T message.
                     * @function verify
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CALL_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_CALL_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.calledBetId != null && message.hasOwnProperty("calledBetId"))
                            if (!$util.isInteger(message.calledBetId))
                                return "calledBetId: integer expected";
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            if (!$util.isInteger(message.resultCode))
                                return "resultCode: integer expected";
                        if (message.betMoney != null && message.hasOwnProperty("betMoney")) {
                            if (!Array.isArray(message.betMoney))
                                return "betMoney: array expected";
                            for (var i = 0; i < message.betMoney.length; ++i)
                                if (!$util.isInteger(message.betMoney[i]) && !(message.betMoney[i] && $util.isInteger(message.betMoney[i].low) && $util.isInteger(message.betMoney[i].high)))
                                    return "betMoney: integer|Long[] expected";
                        }
                        if (message.credit != null && message.hasOwnProperty("credit"))
                            if (!$util.isInteger(message.credit) && !(message.credit && $util.isInteger(message.credit.low) && $util.isInteger(message.credit.high)))
                                return "credit: integer|Long expected";
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            if (!$util.isInteger(message.roundNumber))
                                return "roundNumber: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_CALL_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CALL_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_CALL_T} GL_TO_UC_CALL_T
                     */
                    GL_TO_UC_CALL_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Roulette.GL_TO_UC_CALL_T)
                            return object;
                        var message = new $root.Protocol.Game.Roulette.GL_TO_UC_CALL_T();
                        if (object.calledBetId != null)
                            message.calledBetId = object.calledBetId | 0;
                        if (object.resultCode != null)
                            message.resultCode = object.resultCode | 0;
                        if (object.betMoney) {
                            if (!Array.isArray(object.betMoney))
                                throw TypeError(".Protocol.Game.Roulette.GL_TO_UC_CALL_T.betMoney: array expected");
                            message.betMoney = [];
                            for (var i = 0; i < object.betMoney.length; ++i)
                                if ($util.Long)
                                    (message.betMoney[i] = $util.Long.fromValue(object.betMoney[i])).unsigned = false;
                                else if (typeof object.betMoney[i] === "string")
                                    message.betMoney[i] = parseInt(object.betMoney[i], 10);
                                else if (typeof object.betMoney[i] === "number")
                                    message.betMoney[i] = object.betMoney[i];
                                else if (typeof object.betMoney[i] === "object")
                                    message.betMoney[i] = new $util.LongBits(object.betMoney[i].low >>> 0, object.betMoney[i].high >>> 0).toNumber();
                        }
                        if (object.credit != null)
                            if ($util.Long)
                                (message.credit = $util.Long.fromValue(object.credit)).unsigned = false;
                            else if (typeof object.credit === "string")
                                message.credit = parseInt(object.credit, 10);
                            else if (typeof object.credit === "number")
                                message.credit = object.credit;
                            else if (typeof object.credit === "object")
                                message.credit = new $util.LongBits(object.credit.low >>> 0, object.credit.high >>> 0).toNumber();
                        if (object.roundNumber != null)
                            message.roundNumber = object.roundNumber | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_CALL_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CALL_T
                     * @static
                     * @param {Protocol.Game.Roulette.GL_TO_UC_CALL_T} message GL_TO_UC_CALL_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_CALL_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.betMoney = [];
                        if (options.defaults) {
                            object.calledBetId = 0;
                            object.resultCode = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.credit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.credit = options.longs === String ? "0" : 0;
                            object.roundNumber = 0;
                        }
                        if (message.calledBetId != null && message.hasOwnProperty("calledBetId"))
                            object.calledBetId = message.calledBetId;
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            object.resultCode = message.resultCode;
                        if (message.betMoney && message.betMoney.length) {
                            object.betMoney = [];
                            for (var j = 0; j < message.betMoney.length; ++j)
                                if (typeof message.betMoney[j] === "number")
                                    object.betMoney[j] = options.longs === String ? String(message.betMoney[j]) : message.betMoney[j];
                                else
                                    object.betMoney[j] = options.longs === String ? $util.Long.prototype.toString.call(message.betMoney[j]) : options.longs === Number ? new $util.LongBits(message.betMoney[j].low >>> 0, message.betMoney[j].high >>> 0).toNumber() : message.betMoney[j];
                        }
                        if (message.credit != null && message.hasOwnProperty("credit"))
                            if (typeof message.credit === "number")
                                object.credit = options.longs === String ? String(message.credit) : message.credit;
                            else
                                object.credit = options.longs === String ? $util.Long.prototype.toString.call(message.credit) : options.longs === Number ? new $util.LongBits(message.credit.low >>> 0, message.credit.high >>> 0).toNumber() : message.credit;
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            object.roundNumber = message.roundNumber;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_CALL_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CALL_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_CALL_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_CALL_T;
                })();
    
                Roulette.GL_TO_UC_UNDO_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_UNDO_T.
                     * @memberof Protocol.Game.Roulette
                     * @interface IGL_TO_UC_UNDO_T
                     * @property {number|null} [resultCode] GL_TO_UC_UNDO_T resultCode
                     * @property {number|Long|null} [credit] GL_TO_UC_UNDO_T credit
                     * @property {number|null} [roundNumber] GL_TO_UC_UNDO_T roundNumber
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_UNDO_T.
                     * @memberof Protocol.Game.Roulette
                     * @classdesc Represents a GL_TO_UC_UNDO_T.
                     * @implements IGL_TO_UC_UNDO_T
                     * @constructor
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_UNDO_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_UNDO_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_UNDO_T resultCode.
                     * @member {number} resultCode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UNDO_T
                     * @instance
                     */
                    GL_TO_UC_UNDO_T.prototype.resultCode = 0;
    
                    /**
                     * GL_TO_UC_UNDO_T credit.
                     * @member {number|Long} credit
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UNDO_T
                     * @instance
                     */
                    GL_TO_UC_UNDO_T.prototype.credit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_UNDO_T roundNumber.
                     * @member {number} roundNumber
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UNDO_T
                     * @instance
                     */
                    GL_TO_UC_UNDO_T.prototype.roundNumber = 0;
    
                    /**
                     * Creates a new GL_TO_UC_UNDO_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UNDO_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_UNDO_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_UNDO_T} GL_TO_UC_UNDO_T instance
                     */
                    GL_TO_UC_UNDO_T.create = function create(properties) {
                        return new GL_TO_UC_UNDO_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_UNDO_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_UNDO_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UNDO_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_UNDO_T} message GL_TO_UC_UNDO_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_UNDO_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.resultCode);
                        if (message.credit != null && message.hasOwnProperty("credit"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.credit);
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roundNumber);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_UNDO_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_UNDO_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UNDO_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_UNDO_T} message GL_TO_UC_UNDO_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_UNDO_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_UNDO_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UNDO_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_UNDO_T} GL_TO_UC_UNDO_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_UNDO_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Roulette.GL_TO_UC_UNDO_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.resultCode = reader.int32();
                                break;
                            case 2:
                                message.credit = reader.int64();
                                break;
                            case 3:
                                message.roundNumber = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_UNDO_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UNDO_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_UNDO_T} GL_TO_UC_UNDO_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_UNDO_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_UNDO_T message.
                     * @function verify
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UNDO_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_UNDO_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            if (!$util.isInteger(message.resultCode))
                                return "resultCode: integer expected";
                        if (message.credit != null && message.hasOwnProperty("credit"))
                            if (!$util.isInteger(message.credit) && !(message.credit && $util.isInteger(message.credit.low) && $util.isInteger(message.credit.high)))
                                return "credit: integer|Long expected";
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            if (!$util.isInteger(message.roundNumber))
                                return "roundNumber: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_UNDO_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UNDO_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_UNDO_T} GL_TO_UC_UNDO_T
                     */
                    GL_TO_UC_UNDO_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Roulette.GL_TO_UC_UNDO_T)
                            return object;
                        var message = new $root.Protocol.Game.Roulette.GL_TO_UC_UNDO_T();
                        if (object.resultCode != null)
                            message.resultCode = object.resultCode | 0;
                        if (object.credit != null)
                            if ($util.Long)
                                (message.credit = $util.Long.fromValue(object.credit)).unsigned = false;
                            else if (typeof object.credit === "string")
                                message.credit = parseInt(object.credit, 10);
                            else if (typeof object.credit === "number")
                                message.credit = object.credit;
                            else if (typeof object.credit === "object")
                                message.credit = new $util.LongBits(object.credit.low >>> 0, object.credit.high >>> 0).toNumber();
                        if (object.roundNumber != null)
                            message.roundNumber = object.roundNumber | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_UNDO_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UNDO_T
                     * @static
                     * @param {Protocol.Game.Roulette.GL_TO_UC_UNDO_T} message GL_TO_UC_UNDO_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_UNDO_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.resultCode = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.credit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.credit = options.longs === String ? "0" : 0;
                            object.roundNumber = 0;
                        }
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            object.resultCode = message.resultCode;
                        if (message.credit != null && message.hasOwnProperty("credit"))
                            if (typeof message.credit === "number")
                                object.credit = options.longs === String ? String(message.credit) : message.credit;
                            else
                                object.credit = options.longs === String ? $util.Long.prototype.toString.call(message.credit) : options.longs === Number ? new $util.LongBits(message.credit.low >>> 0, message.credit.high >>> 0).toNumber() : message.credit;
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            object.roundNumber = message.roundNumber;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_UNDO_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UNDO_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_UNDO_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_UNDO_T;
                })();
    
                Roulette.GL_TO_UC_CLEAR_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_CLEAR_T.
                     * @memberof Protocol.Game.Roulette
                     * @interface IGL_TO_UC_CLEAR_T
                     * @property {number|null} [resultCode] GL_TO_UC_CLEAR_T resultCode
                     * @property {number|Long|null} [credit] GL_TO_UC_CLEAR_T credit
                     * @property {number|null} [roundNumber] GL_TO_UC_CLEAR_T roundNumber
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_CLEAR_T.
                     * @memberof Protocol.Game.Roulette
                     * @classdesc Represents a GL_TO_UC_CLEAR_T.
                     * @implements IGL_TO_UC_CLEAR_T
                     * @constructor
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_CLEAR_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_CLEAR_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_CLEAR_T resultCode.
                     * @member {number} resultCode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CLEAR_T
                     * @instance
                     */
                    GL_TO_UC_CLEAR_T.prototype.resultCode = 0;
    
                    /**
                     * GL_TO_UC_CLEAR_T credit.
                     * @member {number|Long} credit
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CLEAR_T
                     * @instance
                     */
                    GL_TO_UC_CLEAR_T.prototype.credit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_CLEAR_T roundNumber.
                     * @member {number} roundNumber
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CLEAR_T
                     * @instance
                     */
                    GL_TO_UC_CLEAR_T.prototype.roundNumber = 0;
    
                    /**
                     * Creates a new GL_TO_UC_CLEAR_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CLEAR_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_CLEAR_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_CLEAR_T} GL_TO_UC_CLEAR_T instance
                     */
                    GL_TO_UC_CLEAR_T.create = function create(properties) {
                        return new GL_TO_UC_CLEAR_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_CLEAR_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_CLEAR_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CLEAR_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_CLEAR_T} message GL_TO_UC_CLEAR_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_CLEAR_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.resultCode);
                        if (message.credit != null && message.hasOwnProperty("credit"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.credit);
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roundNumber);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_CLEAR_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_CLEAR_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CLEAR_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_CLEAR_T} message GL_TO_UC_CLEAR_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_CLEAR_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_CLEAR_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CLEAR_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_CLEAR_T} GL_TO_UC_CLEAR_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_CLEAR_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Roulette.GL_TO_UC_CLEAR_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.resultCode = reader.int32();
                                break;
                            case 2:
                                message.credit = reader.int64();
                                break;
                            case 3:
                                message.roundNumber = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_CLEAR_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CLEAR_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_CLEAR_T} GL_TO_UC_CLEAR_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_CLEAR_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_CLEAR_T message.
                     * @function verify
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CLEAR_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_CLEAR_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            if (!$util.isInteger(message.resultCode))
                                return "resultCode: integer expected";
                        if (message.credit != null && message.hasOwnProperty("credit"))
                            if (!$util.isInteger(message.credit) && !(message.credit && $util.isInteger(message.credit.low) && $util.isInteger(message.credit.high)))
                                return "credit: integer|Long expected";
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            if (!$util.isInteger(message.roundNumber))
                                return "roundNumber: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_CLEAR_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CLEAR_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_CLEAR_T} GL_TO_UC_CLEAR_T
                     */
                    GL_TO_UC_CLEAR_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Roulette.GL_TO_UC_CLEAR_T)
                            return object;
                        var message = new $root.Protocol.Game.Roulette.GL_TO_UC_CLEAR_T();
                        if (object.resultCode != null)
                            message.resultCode = object.resultCode | 0;
                        if (object.credit != null)
                            if ($util.Long)
                                (message.credit = $util.Long.fromValue(object.credit)).unsigned = false;
                            else if (typeof object.credit === "string")
                                message.credit = parseInt(object.credit, 10);
                            else if (typeof object.credit === "number")
                                message.credit = object.credit;
                            else if (typeof object.credit === "object")
                                message.credit = new $util.LongBits(object.credit.low >>> 0, object.credit.high >>> 0).toNumber();
                        if (object.roundNumber != null)
                            message.roundNumber = object.roundNumber | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_CLEAR_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CLEAR_T
                     * @static
                     * @param {Protocol.Game.Roulette.GL_TO_UC_CLEAR_T} message GL_TO_UC_CLEAR_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_CLEAR_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.resultCode = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.credit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.credit = options.longs === String ? "0" : 0;
                            object.roundNumber = 0;
                        }
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            object.resultCode = message.resultCode;
                        if (message.credit != null && message.hasOwnProperty("credit"))
                            if (typeof message.credit === "number")
                                object.credit = options.longs === String ? String(message.credit) : message.credit;
                            else
                                object.credit = options.longs === String ? $util.Long.prototype.toString.call(message.credit) : options.longs === Number ? new $util.LongBits(message.credit.low >>> 0, message.credit.high >>> 0).toNumber() : message.credit;
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            object.roundNumber = message.roundNumber;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_CLEAR_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CLEAR_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_CLEAR_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_CLEAR_T;
                })();
    
                Roulette.GL_TO_UC_REPEAT_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_REPEAT_T.
                     * @memberof Protocol.Game.Roulette
                     * @interface IGL_TO_UC_REPEAT_T
                     * @property {number|null} [resultCode] GL_TO_UC_REPEAT_T resultCode
                     * @property {number|Long|null} [credit] GL_TO_UC_REPEAT_T credit
                     * @property {number|null} [roundNumber] GL_TO_UC_REPEAT_T roundNumber
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_REPEAT_T.
                     * @memberof Protocol.Game.Roulette
                     * @classdesc Represents a GL_TO_UC_REPEAT_T.
                     * @implements IGL_TO_UC_REPEAT_T
                     * @constructor
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_REPEAT_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_REPEAT_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_REPEAT_T resultCode.
                     * @member {number} resultCode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_REPEAT_T
                     * @instance
                     */
                    GL_TO_UC_REPEAT_T.prototype.resultCode = 0;
    
                    /**
                     * GL_TO_UC_REPEAT_T credit.
                     * @member {number|Long} credit
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_REPEAT_T
                     * @instance
                     */
                    GL_TO_UC_REPEAT_T.prototype.credit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_REPEAT_T roundNumber.
                     * @member {number} roundNumber
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_REPEAT_T
                     * @instance
                     */
                    GL_TO_UC_REPEAT_T.prototype.roundNumber = 0;
    
                    /**
                     * Creates a new GL_TO_UC_REPEAT_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_REPEAT_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_REPEAT_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_REPEAT_T} GL_TO_UC_REPEAT_T instance
                     */
                    GL_TO_UC_REPEAT_T.create = function create(properties) {
                        return new GL_TO_UC_REPEAT_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_REPEAT_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_REPEAT_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_REPEAT_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_REPEAT_T} message GL_TO_UC_REPEAT_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_REPEAT_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.resultCode);
                        if (message.credit != null && message.hasOwnProperty("credit"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.credit);
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roundNumber);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_REPEAT_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_REPEAT_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_REPEAT_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_REPEAT_T} message GL_TO_UC_REPEAT_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_REPEAT_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_REPEAT_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_REPEAT_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_REPEAT_T} GL_TO_UC_REPEAT_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_REPEAT_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Roulette.GL_TO_UC_REPEAT_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.resultCode = reader.int32();
                                break;
                            case 2:
                                message.credit = reader.int64();
                                break;
                            case 3:
                                message.roundNumber = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_REPEAT_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_REPEAT_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_REPEAT_T} GL_TO_UC_REPEAT_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_REPEAT_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_REPEAT_T message.
                     * @function verify
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_REPEAT_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_REPEAT_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            if (!$util.isInteger(message.resultCode))
                                return "resultCode: integer expected";
                        if (message.credit != null && message.hasOwnProperty("credit"))
                            if (!$util.isInteger(message.credit) && !(message.credit && $util.isInteger(message.credit.low) && $util.isInteger(message.credit.high)))
                                return "credit: integer|Long expected";
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            if (!$util.isInteger(message.roundNumber))
                                return "roundNumber: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_REPEAT_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_REPEAT_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_REPEAT_T} GL_TO_UC_REPEAT_T
                     */
                    GL_TO_UC_REPEAT_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Roulette.GL_TO_UC_REPEAT_T)
                            return object;
                        var message = new $root.Protocol.Game.Roulette.GL_TO_UC_REPEAT_T();
                        if (object.resultCode != null)
                            message.resultCode = object.resultCode | 0;
                        if (object.credit != null)
                            if ($util.Long)
                                (message.credit = $util.Long.fromValue(object.credit)).unsigned = false;
                            else if (typeof object.credit === "string")
                                message.credit = parseInt(object.credit, 10);
                            else if (typeof object.credit === "number")
                                message.credit = object.credit;
                            else if (typeof object.credit === "object")
                                message.credit = new $util.LongBits(object.credit.low >>> 0, object.credit.high >>> 0).toNumber();
                        if (object.roundNumber != null)
                            message.roundNumber = object.roundNumber | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_REPEAT_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_REPEAT_T
                     * @static
                     * @param {Protocol.Game.Roulette.GL_TO_UC_REPEAT_T} message GL_TO_UC_REPEAT_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_REPEAT_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.resultCode = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.credit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.credit = options.longs === String ? "0" : 0;
                            object.roundNumber = 0;
                        }
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            object.resultCode = message.resultCode;
                        if (message.credit != null && message.hasOwnProperty("credit"))
                            if (typeof message.credit === "number")
                                object.credit = options.longs === String ? String(message.credit) : message.credit;
                            else
                                object.credit = options.longs === String ? $util.Long.prototype.toString.call(message.credit) : options.longs === Number ? new $util.LongBits(message.credit.low >>> 0, message.credit.high >>> 0).toNumber() : message.credit;
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            object.roundNumber = message.roundNumber;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_REPEAT_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_REPEAT_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_REPEAT_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_REPEAT_T;
                })();
    
                Roulette.GL_TO_UC_RETURN_REPEAT_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_RETURN_REPEAT_T.
                     * @memberof Protocol.Game.Roulette
                     * @interface IGL_TO_UC_RETURN_REPEAT_T
                     * @property {number|Long|null} [totalBetPoint] GL_TO_UC_RETURN_REPEAT_T totalBetPoint
                     * @property {Array.<number|Long>|null} [betPoints] GL_TO_UC_RETURN_REPEAT_T betPoints
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_RETURN_REPEAT_T.
                     * @memberof Protocol.Game.Roulette
                     * @classdesc Represents a GL_TO_UC_RETURN_REPEAT_T.
                     * @implements IGL_TO_UC_RETURN_REPEAT_T
                     * @constructor
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_RETURN_REPEAT_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_RETURN_REPEAT_T(properties) {
                        this.betPoints = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_RETURN_REPEAT_T totalBetPoint.
                     * @member {number|Long} totalBetPoint
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T
                     * @instance
                     */
                    GL_TO_UC_RETURN_REPEAT_T.prototype.totalBetPoint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_RETURN_REPEAT_T betPoints.
                     * @member {Array.<number|Long>} betPoints
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T
                     * @instance
                     */
                    GL_TO_UC_RETURN_REPEAT_T.prototype.betPoints = $util.emptyArray;
    
                    /**
                     * Creates a new GL_TO_UC_RETURN_REPEAT_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_RETURN_REPEAT_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T} GL_TO_UC_RETURN_REPEAT_T instance
                     */
                    GL_TO_UC_RETURN_REPEAT_T.create = function create(properties) {
                        return new GL_TO_UC_RETURN_REPEAT_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_RETURN_REPEAT_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_RETURN_REPEAT_T} message GL_TO_UC_RETURN_REPEAT_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_RETURN_REPEAT_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.totalBetPoint != null && message.hasOwnProperty("totalBetPoint"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.totalBetPoint);
                        if (message.betPoints != null && message.betPoints.length) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork();
                            for (var i = 0; i < message.betPoints.length; ++i)
                                writer.int64(message.betPoints[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_RETURN_REPEAT_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_RETURN_REPEAT_T} message GL_TO_UC_RETURN_REPEAT_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_RETURN_REPEAT_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_RETURN_REPEAT_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T} GL_TO_UC_RETURN_REPEAT_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_RETURN_REPEAT_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.totalBetPoint = reader.int64();
                                break;
                            case 2:
                                if (!(message.betPoints && message.betPoints.length))
                                    message.betPoints = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.betPoints.push(reader.int64());
                                } else
                                    message.betPoints.push(reader.int64());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_RETURN_REPEAT_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T} GL_TO_UC_RETURN_REPEAT_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_RETURN_REPEAT_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_RETURN_REPEAT_T message.
                     * @function verify
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_RETURN_REPEAT_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.totalBetPoint != null && message.hasOwnProperty("totalBetPoint"))
                            if (!$util.isInteger(message.totalBetPoint) && !(message.totalBetPoint && $util.isInteger(message.totalBetPoint.low) && $util.isInteger(message.totalBetPoint.high)))
                                return "totalBetPoint: integer|Long expected";
                        if (message.betPoints != null && message.hasOwnProperty("betPoints")) {
                            if (!Array.isArray(message.betPoints))
                                return "betPoints: array expected";
                            for (var i = 0; i < message.betPoints.length; ++i)
                                if (!$util.isInteger(message.betPoints[i]) && !(message.betPoints[i] && $util.isInteger(message.betPoints[i].low) && $util.isInteger(message.betPoints[i].high)))
                                    return "betPoints: integer|Long[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_RETURN_REPEAT_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T} GL_TO_UC_RETURN_REPEAT_T
                     */
                    GL_TO_UC_RETURN_REPEAT_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T)
                            return object;
                        var message = new $root.Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T();
                        if (object.totalBetPoint != null)
                            if ($util.Long)
                                (message.totalBetPoint = $util.Long.fromValue(object.totalBetPoint)).unsigned = false;
                            else if (typeof object.totalBetPoint === "string")
                                message.totalBetPoint = parseInt(object.totalBetPoint, 10);
                            else if (typeof object.totalBetPoint === "number")
                                message.totalBetPoint = object.totalBetPoint;
                            else if (typeof object.totalBetPoint === "object")
                                message.totalBetPoint = new $util.LongBits(object.totalBetPoint.low >>> 0, object.totalBetPoint.high >>> 0).toNumber();
                        if (object.betPoints) {
                            if (!Array.isArray(object.betPoints))
                                throw TypeError(".Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T.betPoints: array expected");
                            message.betPoints = [];
                            for (var i = 0; i < object.betPoints.length; ++i)
                                if ($util.Long)
                                    (message.betPoints[i] = $util.Long.fromValue(object.betPoints[i])).unsigned = false;
                                else if (typeof object.betPoints[i] === "string")
                                    message.betPoints[i] = parseInt(object.betPoints[i], 10);
                                else if (typeof object.betPoints[i] === "number")
                                    message.betPoints[i] = object.betPoints[i];
                                else if (typeof object.betPoints[i] === "object")
                                    message.betPoints[i] = new $util.LongBits(object.betPoints[i].low >>> 0, object.betPoints[i].high >>> 0).toNumber();
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_RETURN_REPEAT_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T
                     * @static
                     * @param {Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T} message GL_TO_UC_RETURN_REPEAT_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_RETURN_REPEAT_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.betPoints = [];
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.totalBetPoint = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.totalBetPoint = options.longs === String ? "0" : 0;
                        if (message.totalBetPoint != null && message.hasOwnProperty("totalBetPoint"))
                            if (typeof message.totalBetPoint === "number")
                                object.totalBetPoint = options.longs === String ? String(message.totalBetPoint) : message.totalBetPoint;
                            else
                                object.totalBetPoint = options.longs === String ? $util.Long.prototype.toString.call(message.totalBetPoint) : options.longs === Number ? new $util.LongBits(message.totalBetPoint.low >>> 0, message.totalBetPoint.high >>> 0).toNumber() : message.totalBetPoint;
                        if (message.betPoints && message.betPoints.length) {
                            object.betPoints = [];
                            for (var j = 0; j < message.betPoints.length; ++j)
                                if (typeof message.betPoints[j] === "number")
                                    object.betPoints[j] = options.longs === String ? String(message.betPoints[j]) : message.betPoints[j];
                                else
                                    object.betPoints[j] = options.longs === String ? $util.Long.prototype.toString.call(message.betPoints[j]) : options.longs === Number ? new $util.LongBits(message.betPoints[j].low >>> 0, message.betPoints[j].high >>> 0).toNumber() : message.betPoints[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_RETURN_REPEAT_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_RETURN_REPEAT_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_RETURN_REPEAT_T;
                })();
    
                Roulette.GL_TO_UC_CHEAT_CODE_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_CHEAT_CODE_T.
                     * @memberof Protocol.Game.Roulette
                     * @interface IGL_TO_UC_CHEAT_CODE_T
                     * @property {number|null} [result] GL_TO_UC_CHEAT_CODE_T result
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_CHEAT_CODE_T.
                     * @memberof Protocol.Game.Roulette
                     * @classdesc Represents a GL_TO_UC_CHEAT_CODE_T.
                     * @implements IGL_TO_UC_CHEAT_CODE_T
                     * @constructor
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_CHEAT_CODE_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_CHEAT_CODE_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_CHEAT_CODE_T result.
                     * @member {number} result
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T
                     * @instance
                     */
                    GL_TO_UC_CHEAT_CODE_T.prototype.result = 0;
    
                    /**
                     * Creates a new GL_TO_UC_CHEAT_CODE_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_CHEAT_CODE_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T} GL_TO_UC_CHEAT_CODE_T instance
                     */
                    GL_TO_UC_CHEAT_CODE_T.create = function create(properties) {
                        return new GL_TO_UC_CHEAT_CODE_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_CHEAT_CODE_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_CHEAT_CODE_T} message GL_TO_UC_CHEAT_CODE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_CHEAT_CODE_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.result != null && message.hasOwnProperty("result"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_CHEAT_CODE_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_CHEAT_CODE_T} message GL_TO_UC_CHEAT_CODE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_CHEAT_CODE_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_CHEAT_CODE_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T} GL_TO_UC_CHEAT_CODE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_CHEAT_CODE_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.result = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_CHEAT_CODE_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T} GL_TO_UC_CHEAT_CODE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_CHEAT_CODE_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_CHEAT_CODE_T message.
                     * @function verify
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_CHEAT_CODE_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.result != null && message.hasOwnProperty("result"))
                            if (!$util.isInteger(message.result))
                                return "result: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_CHEAT_CODE_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T} GL_TO_UC_CHEAT_CODE_T
                     */
                    GL_TO_UC_CHEAT_CODE_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T)
                            return object;
                        var message = new $root.Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T();
                        if (object.result != null)
                            message.result = object.result | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_CHEAT_CODE_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T
                     * @static
                     * @param {Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T} message GL_TO_UC_CHEAT_CODE_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_CHEAT_CODE_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.result = 0;
                        if (message.result != null && message.hasOwnProperty("result"))
                            object.result = message.result;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_CHEAT_CODE_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_CHEAT_CODE_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_CHEAT_CODE_T;
                })();
    
                Roulette.GL_TO_UC_INIT_INFO_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_INIT_INFO_T.
                     * @memberof Protocol.Game.Roulette
                     * @interface IGL_TO_UC_INIT_INFO_T
                     * @property {number|null} [tableId] GL_TO_UC_INIT_INFO_T tableId
                     * @property {number|null} [onlineNum] GL_TO_UC_INIT_INFO_T onlineNum
                     * @property {Array.<number>|null} [betOdds] GL_TO_UC_INIT_INFO_T betOdds
                     * @property {Array.<number|Long>|null} [minBetPoint] GL_TO_UC_INIT_INFO_T minBetPoint
                     * @property {Array.<number|Long>|null} [maxBetPoint] GL_TO_UC_INIT_INFO_T maxBetPoint
                     * @property {number|null} [betTime] GL_TO_UC_INIT_INFO_T betTime
                     * @property {number|null} [spinTime] GL_TO_UC_INIT_INFO_T spinTime
                     * @property {number|null} [settleTime] GL_TO_UC_INIT_INFO_T settleTime
                     * @property {number|Long|null} [tableMinBetPoint] GL_TO_UC_INIT_INFO_T tableMinBetPoint
                     * @property {number|Long|null} [tableMaxBetPoint] GL_TO_UC_INIT_INFO_T tableMaxBetPoint
                     * @property {number|null} [roundNumber] GL_TO_UC_INIT_INFO_T roundNumber
                     * @property {Array.<number>|null} [defaultChips] GL_TO_UC_INIT_INFO_T defaultChips
                     * @property {number|null} [enterType] GL_TO_UC_INIT_INFO_T enterType
                     * @property {number|null} [recoverSuccess] GL_TO_UC_INIT_INFO_T recoverSuccess
                     * @property {number|null} [serialNumber] GL_TO_UC_INIT_INFO_T serialNumber
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_INIT_INFO_T.
                     * @memberof Protocol.Game.Roulette
                     * @classdesc Represents a GL_TO_UC_INIT_INFO_T.
                     * @implements IGL_TO_UC_INIT_INFO_T
                     * @constructor
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_INIT_INFO_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_INIT_INFO_T(properties) {
                        this.betOdds = [];
                        this.minBetPoint = [];
                        this.maxBetPoint = [];
                        this.defaultChips = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_INIT_INFO_T tableId.
                     * @member {number} tableId
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @instance
                     */
                    GL_TO_UC_INIT_INFO_T.prototype.tableId = 0;
    
                    /**
                     * GL_TO_UC_INIT_INFO_T onlineNum.
                     * @member {number} onlineNum
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @instance
                     */
                    GL_TO_UC_INIT_INFO_T.prototype.onlineNum = 0;
    
                    /**
                     * GL_TO_UC_INIT_INFO_T betOdds.
                     * @member {Array.<number>} betOdds
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @instance
                     */
                    GL_TO_UC_INIT_INFO_T.prototype.betOdds = $util.emptyArray;
    
                    /**
                     * GL_TO_UC_INIT_INFO_T minBetPoint.
                     * @member {Array.<number|Long>} minBetPoint
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @instance
                     */
                    GL_TO_UC_INIT_INFO_T.prototype.minBetPoint = $util.emptyArray;
    
                    /**
                     * GL_TO_UC_INIT_INFO_T maxBetPoint.
                     * @member {Array.<number|Long>} maxBetPoint
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @instance
                     */
                    GL_TO_UC_INIT_INFO_T.prototype.maxBetPoint = $util.emptyArray;
    
                    /**
                     * GL_TO_UC_INIT_INFO_T betTime.
                     * @member {number} betTime
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @instance
                     */
                    GL_TO_UC_INIT_INFO_T.prototype.betTime = 0;
    
                    /**
                     * GL_TO_UC_INIT_INFO_T spinTime.
                     * @member {number} spinTime
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @instance
                     */
                    GL_TO_UC_INIT_INFO_T.prototype.spinTime = 0;
    
                    /**
                     * GL_TO_UC_INIT_INFO_T settleTime.
                     * @member {number} settleTime
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @instance
                     */
                    GL_TO_UC_INIT_INFO_T.prototype.settleTime = 0;
    
                    /**
                     * GL_TO_UC_INIT_INFO_T tableMinBetPoint.
                     * @member {number|Long} tableMinBetPoint
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @instance
                     */
                    GL_TO_UC_INIT_INFO_T.prototype.tableMinBetPoint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_INIT_INFO_T tableMaxBetPoint.
                     * @member {number|Long} tableMaxBetPoint
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @instance
                     */
                    GL_TO_UC_INIT_INFO_T.prototype.tableMaxBetPoint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_INIT_INFO_T roundNumber.
                     * @member {number} roundNumber
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @instance
                     */
                    GL_TO_UC_INIT_INFO_T.prototype.roundNumber = 0;
    
                    /**
                     * GL_TO_UC_INIT_INFO_T defaultChips.
                     * @member {Array.<number>} defaultChips
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @instance
                     */
                    GL_TO_UC_INIT_INFO_T.prototype.defaultChips = $util.emptyArray;
    
                    /**
                     * GL_TO_UC_INIT_INFO_T enterType.
                     * @member {number} enterType
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @instance
                     */
                    GL_TO_UC_INIT_INFO_T.prototype.enterType = 0;
    
                    /**
                     * GL_TO_UC_INIT_INFO_T recoverSuccess.
                     * @member {number} recoverSuccess
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @instance
                     */
                    GL_TO_UC_INIT_INFO_T.prototype.recoverSuccess = 0;
    
                    /**
                     * GL_TO_UC_INIT_INFO_T serialNumber.
                     * @member {number} serialNumber
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @instance
                     */
                    GL_TO_UC_INIT_INFO_T.prototype.serialNumber = 0;
    
                    /**
                     * Creates a new GL_TO_UC_INIT_INFO_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_INIT_INFO_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T} GL_TO_UC_INIT_INFO_T instance
                     */
                    GL_TO_UC_INIT_INFO_T.create = function create(properties) {
                        return new GL_TO_UC_INIT_INFO_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_INIT_INFO_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_INIT_INFO_T} message GL_TO_UC_INIT_INFO_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_INIT_INFO_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.tableId != null && message.hasOwnProperty("tableId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tableId);
                        if (message.onlineNum != null && message.hasOwnProperty("onlineNum"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.onlineNum);
                        if (message.betOdds != null && message.betOdds.length) {
                            writer.uint32(/* id 3, wireType 2 =*/26).fork();
                            for (var i = 0; i < message.betOdds.length; ++i)
                                writer.double(message.betOdds[i]);
                            writer.ldelim();
                        }
                        if (message.minBetPoint != null && message.minBetPoint.length) {
                            writer.uint32(/* id 4, wireType 2 =*/34).fork();
                            for (var i = 0; i < message.minBetPoint.length; ++i)
                                writer.int64(message.minBetPoint[i]);
                            writer.ldelim();
                        }
                        if (message.maxBetPoint != null && message.maxBetPoint.length) {
                            writer.uint32(/* id 5, wireType 2 =*/42).fork();
                            for (var i = 0; i < message.maxBetPoint.length; ++i)
                                writer.int64(message.maxBetPoint[i]);
                            writer.ldelim();
                        }
                        if (message.betTime != null && message.hasOwnProperty("betTime"))
                            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.betTime);
                        if (message.spinTime != null && message.hasOwnProperty("spinTime"))
                            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.spinTime);
                        if (message.settleTime != null && message.hasOwnProperty("settleTime"))
                            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.settleTime);
                        if (message.tableMinBetPoint != null && message.hasOwnProperty("tableMinBetPoint"))
                            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.tableMinBetPoint);
                        if (message.tableMaxBetPoint != null && message.hasOwnProperty("tableMaxBetPoint"))
                            writer.uint32(/* id 10, wireType 0 =*/80).int64(message.tableMaxBetPoint);
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.roundNumber);
                        if (message.defaultChips != null && message.defaultChips.length) {
                            writer.uint32(/* id 12, wireType 2 =*/98).fork();
                            for (var i = 0; i < message.defaultChips.length; ++i)
                                writer.int32(message.defaultChips[i]);
                            writer.ldelim();
                        }
                        if (message.enterType != null && message.hasOwnProperty("enterType"))
                            writer.uint32(/* id 21, wireType 0 =*/168).int32(message.enterType);
                        if (message.recoverSuccess != null && message.hasOwnProperty("recoverSuccess"))
                            writer.uint32(/* id 22, wireType 0 =*/176).int32(message.recoverSuccess);
                        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
                            writer.uint32(/* id 23, wireType 0 =*/184).int32(message.serialNumber);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_INIT_INFO_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_INIT_INFO_T} message GL_TO_UC_INIT_INFO_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_INIT_INFO_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_INIT_INFO_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T} GL_TO_UC_INIT_INFO_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_INIT_INFO_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.tableId = reader.int32();
                                break;
                            case 2:
                                message.onlineNum = reader.int32();
                                break;
                            case 3:
                                if (!(message.betOdds && message.betOdds.length))
                                    message.betOdds = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.betOdds.push(reader.double());
                                } else
                                    message.betOdds.push(reader.double());
                                break;
                            case 4:
                                if (!(message.minBetPoint && message.minBetPoint.length))
                                    message.minBetPoint = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.minBetPoint.push(reader.int64());
                                } else
                                    message.minBetPoint.push(reader.int64());
                                break;
                            case 5:
                                if (!(message.maxBetPoint && message.maxBetPoint.length))
                                    message.maxBetPoint = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.maxBetPoint.push(reader.int64());
                                } else
                                    message.maxBetPoint.push(reader.int64());
                                break;
                            case 6:
                                message.betTime = reader.int32();
                                break;
                            case 7:
                                message.spinTime = reader.int32();
                                break;
                            case 8:
                                message.settleTime = reader.int32();
                                break;
                            case 9:
                                message.tableMinBetPoint = reader.int64();
                                break;
                            case 10:
                                message.tableMaxBetPoint = reader.int64();
                                break;
                            case 11:
                                message.roundNumber = reader.int32();
                                break;
                            case 12:
                                if (!(message.defaultChips && message.defaultChips.length))
                                    message.defaultChips = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.defaultChips.push(reader.int32());
                                } else
                                    message.defaultChips.push(reader.int32());
                                break;
                            case 21:
                                message.enterType = reader.int32();
                                break;
                            case 22:
                                message.recoverSuccess = reader.int32();
                                break;
                            case 23:
                                message.serialNumber = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_INIT_INFO_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T} GL_TO_UC_INIT_INFO_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_INIT_INFO_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_INIT_INFO_T message.
                     * @function verify
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_INIT_INFO_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.tableId != null && message.hasOwnProperty("tableId"))
                            if (!$util.isInteger(message.tableId))
                                return "tableId: integer expected";
                        if (message.onlineNum != null && message.hasOwnProperty("onlineNum"))
                            if (!$util.isInteger(message.onlineNum))
                                return "onlineNum: integer expected";
                        if (message.betOdds != null && message.hasOwnProperty("betOdds")) {
                            if (!Array.isArray(message.betOdds))
                                return "betOdds: array expected";
                            for (var i = 0; i < message.betOdds.length; ++i)
                                if (typeof message.betOdds[i] !== "number")
                                    return "betOdds: number[] expected";
                        }
                        if (message.minBetPoint != null && message.hasOwnProperty("minBetPoint")) {
                            if (!Array.isArray(message.minBetPoint))
                                return "minBetPoint: array expected";
                            for (var i = 0; i < message.minBetPoint.length; ++i)
                                if (!$util.isInteger(message.minBetPoint[i]) && !(message.minBetPoint[i] && $util.isInteger(message.minBetPoint[i].low) && $util.isInteger(message.minBetPoint[i].high)))
                                    return "minBetPoint: integer|Long[] expected";
                        }
                        if (message.maxBetPoint != null && message.hasOwnProperty("maxBetPoint")) {
                            if (!Array.isArray(message.maxBetPoint))
                                return "maxBetPoint: array expected";
                            for (var i = 0; i < message.maxBetPoint.length; ++i)
                                if (!$util.isInteger(message.maxBetPoint[i]) && !(message.maxBetPoint[i] && $util.isInteger(message.maxBetPoint[i].low) && $util.isInteger(message.maxBetPoint[i].high)))
                                    return "maxBetPoint: integer|Long[] expected";
                        }
                        if (message.betTime != null && message.hasOwnProperty("betTime"))
                            if (!$util.isInteger(message.betTime))
                                return "betTime: integer expected";
                        if (message.spinTime != null && message.hasOwnProperty("spinTime"))
                            if (!$util.isInteger(message.spinTime))
                                return "spinTime: integer expected";
                        if (message.settleTime != null && message.hasOwnProperty("settleTime"))
                            if (!$util.isInteger(message.settleTime))
                                return "settleTime: integer expected";
                        if (message.tableMinBetPoint != null && message.hasOwnProperty("tableMinBetPoint"))
                            if (!$util.isInteger(message.tableMinBetPoint) && !(message.tableMinBetPoint && $util.isInteger(message.tableMinBetPoint.low) && $util.isInteger(message.tableMinBetPoint.high)))
                                return "tableMinBetPoint: integer|Long expected";
                        if (message.tableMaxBetPoint != null && message.hasOwnProperty("tableMaxBetPoint"))
                            if (!$util.isInteger(message.tableMaxBetPoint) && !(message.tableMaxBetPoint && $util.isInteger(message.tableMaxBetPoint.low) && $util.isInteger(message.tableMaxBetPoint.high)))
                                return "tableMaxBetPoint: integer|Long expected";
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            if (!$util.isInteger(message.roundNumber))
                                return "roundNumber: integer expected";
                        if (message.defaultChips != null && message.hasOwnProperty("defaultChips")) {
                            if (!Array.isArray(message.defaultChips))
                                return "defaultChips: array expected";
                            for (var i = 0; i < message.defaultChips.length; ++i)
                                if (!$util.isInteger(message.defaultChips[i]))
                                    return "defaultChips: integer[] expected";
                        }
                        if (message.enterType != null && message.hasOwnProperty("enterType"))
                            if (!$util.isInteger(message.enterType))
                                return "enterType: integer expected";
                        if (message.recoverSuccess != null && message.hasOwnProperty("recoverSuccess"))
                            if (!$util.isInteger(message.recoverSuccess))
                                return "recoverSuccess: integer expected";
                        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
                            if (!$util.isInteger(message.serialNumber))
                                return "serialNumber: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_INIT_INFO_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T} GL_TO_UC_INIT_INFO_T
                     */
                    GL_TO_UC_INIT_INFO_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T)
                            return object;
                        var message = new $root.Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T();
                        if (object.tableId != null)
                            message.tableId = object.tableId | 0;
                        if (object.onlineNum != null)
                            message.onlineNum = object.onlineNum | 0;
                        if (object.betOdds) {
                            if (!Array.isArray(object.betOdds))
                                throw TypeError(".Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T.betOdds: array expected");
                            message.betOdds = [];
                            for (var i = 0; i < object.betOdds.length; ++i)
                                message.betOdds[i] = Number(object.betOdds[i]);
                        }
                        if (object.minBetPoint) {
                            if (!Array.isArray(object.minBetPoint))
                                throw TypeError(".Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T.minBetPoint: array expected");
                            message.minBetPoint = [];
                            for (var i = 0; i < object.minBetPoint.length; ++i)
                                if ($util.Long)
                                    (message.minBetPoint[i] = $util.Long.fromValue(object.minBetPoint[i])).unsigned = false;
                                else if (typeof object.minBetPoint[i] === "string")
                                    message.minBetPoint[i] = parseInt(object.minBetPoint[i], 10);
                                else if (typeof object.minBetPoint[i] === "number")
                                    message.minBetPoint[i] = object.minBetPoint[i];
                                else if (typeof object.minBetPoint[i] === "object")
                                    message.minBetPoint[i] = new $util.LongBits(object.minBetPoint[i].low >>> 0, object.minBetPoint[i].high >>> 0).toNumber();
                        }
                        if (object.maxBetPoint) {
                            if (!Array.isArray(object.maxBetPoint))
                                throw TypeError(".Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T.maxBetPoint: array expected");
                            message.maxBetPoint = [];
                            for (var i = 0; i < object.maxBetPoint.length; ++i)
                                if ($util.Long)
                                    (message.maxBetPoint[i] = $util.Long.fromValue(object.maxBetPoint[i])).unsigned = false;
                                else if (typeof object.maxBetPoint[i] === "string")
                                    message.maxBetPoint[i] = parseInt(object.maxBetPoint[i], 10);
                                else if (typeof object.maxBetPoint[i] === "number")
                                    message.maxBetPoint[i] = object.maxBetPoint[i];
                                else if (typeof object.maxBetPoint[i] === "object")
                                    message.maxBetPoint[i] = new $util.LongBits(object.maxBetPoint[i].low >>> 0, object.maxBetPoint[i].high >>> 0).toNumber();
                        }
                        if (object.betTime != null)
                            message.betTime = object.betTime | 0;
                        if (object.spinTime != null)
                            message.spinTime = object.spinTime | 0;
                        if (object.settleTime != null)
                            message.settleTime = object.settleTime | 0;
                        if (object.tableMinBetPoint != null)
                            if ($util.Long)
                                (message.tableMinBetPoint = $util.Long.fromValue(object.tableMinBetPoint)).unsigned = false;
                            else if (typeof object.tableMinBetPoint === "string")
                                message.tableMinBetPoint = parseInt(object.tableMinBetPoint, 10);
                            else if (typeof object.tableMinBetPoint === "number")
                                message.tableMinBetPoint = object.tableMinBetPoint;
                            else if (typeof object.tableMinBetPoint === "object")
                                message.tableMinBetPoint = new $util.LongBits(object.tableMinBetPoint.low >>> 0, object.tableMinBetPoint.high >>> 0).toNumber();
                        if (object.tableMaxBetPoint != null)
                            if ($util.Long)
                                (message.tableMaxBetPoint = $util.Long.fromValue(object.tableMaxBetPoint)).unsigned = false;
                            else if (typeof object.tableMaxBetPoint === "string")
                                message.tableMaxBetPoint = parseInt(object.tableMaxBetPoint, 10);
                            else if (typeof object.tableMaxBetPoint === "number")
                                message.tableMaxBetPoint = object.tableMaxBetPoint;
                            else if (typeof object.tableMaxBetPoint === "object")
                                message.tableMaxBetPoint = new $util.LongBits(object.tableMaxBetPoint.low >>> 0, object.tableMaxBetPoint.high >>> 0).toNumber();
                        if (object.roundNumber != null)
                            message.roundNumber = object.roundNumber | 0;
                        if (object.defaultChips) {
                            if (!Array.isArray(object.defaultChips))
                                throw TypeError(".Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T.defaultChips: array expected");
                            message.defaultChips = [];
                            for (var i = 0; i < object.defaultChips.length; ++i)
                                message.defaultChips[i] = object.defaultChips[i] | 0;
                        }
                        if (object.enterType != null)
                            message.enterType = object.enterType | 0;
                        if (object.recoverSuccess != null)
                            message.recoverSuccess = object.recoverSuccess | 0;
                        if (object.serialNumber != null)
                            message.serialNumber = object.serialNumber | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_INIT_INFO_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @static
                     * @param {Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T} message GL_TO_UC_INIT_INFO_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_INIT_INFO_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.betOdds = [];
                            object.minBetPoint = [];
                            object.maxBetPoint = [];
                            object.defaultChips = [];
                        }
                        if (options.defaults) {
                            object.tableId = 0;
                            object.onlineNum = 0;
                            object.betTime = 0;
                            object.spinTime = 0;
                            object.settleTime = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.tableMinBetPoint = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.tableMinBetPoint = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.tableMaxBetPoint = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.tableMaxBetPoint = options.longs === String ? "0" : 0;
                            object.roundNumber = 0;
                            object.enterType = 0;
                            object.recoverSuccess = 0;
                            object.serialNumber = 0;
                        }
                        if (message.tableId != null && message.hasOwnProperty("tableId"))
                            object.tableId = message.tableId;
                        if (message.onlineNum != null && message.hasOwnProperty("onlineNum"))
                            object.onlineNum = message.onlineNum;
                        if (message.betOdds && message.betOdds.length) {
                            object.betOdds = [];
                            for (var j = 0; j < message.betOdds.length; ++j)
                                object.betOdds[j] = options.json && !isFinite(message.betOdds[j]) ? String(message.betOdds[j]) : message.betOdds[j];
                        }
                        if (message.minBetPoint && message.minBetPoint.length) {
                            object.minBetPoint = [];
                            for (var j = 0; j < message.minBetPoint.length; ++j)
                                if (typeof message.minBetPoint[j] === "number")
                                    object.minBetPoint[j] = options.longs === String ? String(message.minBetPoint[j]) : message.minBetPoint[j];
                                else
                                    object.minBetPoint[j] = options.longs === String ? $util.Long.prototype.toString.call(message.minBetPoint[j]) : options.longs === Number ? new $util.LongBits(message.minBetPoint[j].low >>> 0, message.minBetPoint[j].high >>> 0).toNumber() : message.minBetPoint[j];
                        }
                        if (message.maxBetPoint && message.maxBetPoint.length) {
                            object.maxBetPoint = [];
                            for (var j = 0; j < message.maxBetPoint.length; ++j)
                                if (typeof message.maxBetPoint[j] === "number")
                                    object.maxBetPoint[j] = options.longs === String ? String(message.maxBetPoint[j]) : message.maxBetPoint[j];
                                else
                                    object.maxBetPoint[j] = options.longs === String ? $util.Long.prototype.toString.call(message.maxBetPoint[j]) : options.longs === Number ? new $util.LongBits(message.maxBetPoint[j].low >>> 0, message.maxBetPoint[j].high >>> 0).toNumber() : message.maxBetPoint[j];
                        }
                        if (message.betTime != null && message.hasOwnProperty("betTime"))
                            object.betTime = message.betTime;
                        if (message.spinTime != null && message.hasOwnProperty("spinTime"))
                            object.spinTime = message.spinTime;
                        if (message.settleTime != null && message.hasOwnProperty("settleTime"))
                            object.settleTime = message.settleTime;
                        if (message.tableMinBetPoint != null && message.hasOwnProperty("tableMinBetPoint"))
                            if (typeof message.tableMinBetPoint === "number")
                                object.tableMinBetPoint = options.longs === String ? String(message.tableMinBetPoint) : message.tableMinBetPoint;
                            else
                                object.tableMinBetPoint = options.longs === String ? $util.Long.prototype.toString.call(message.tableMinBetPoint) : options.longs === Number ? new $util.LongBits(message.tableMinBetPoint.low >>> 0, message.tableMinBetPoint.high >>> 0).toNumber() : message.tableMinBetPoint;
                        if (message.tableMaxBetPoint != null && message.hasOwnProperty("tableMaxBetPoint"))
                            if (typeof message.tableMaxBetPoint === "number")
                                object.tableMaxBetPoint = options.longs === String ? String(message.tableMaxBetPoint) : message.tableMaxBetPoint;
                            else
                                object.tableMaxBetPoint = options.longs === String ? $util.Long.prototype.toString.call(message.tableMaxBetPoint) : options.longs === Number ? new $util.LongBits(message.tableMaxBetPoint.low >>> 0, message.tableMaxBetPoint.high >>> 0).toNumber() : message.tableMaxBetPoint;
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            object.roundNumber = message.roundNumber;
                        if (message.defaultChips && message.defaultChips.length) {
                            object.defaultChips = [];
                            for (var j = 0; j < message.defaultChips.length; ++j)
                                object.defaultChips[j] = message.defaultChips[j];
                        }
                        if (message.enterType != null && message.hasOwnProperty("enterType"))
                            object.enterType = message.enterType;
                        if (message.recoverSuccess != null && message.hasOwnProperty("recoverSuccess"))
                            object.recoverSuccess = message.recoverSuccess;
                        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
                            object.serialNumber = message.serialNumber;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_INIT_INFO_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_INIT_INFO_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_INIT_INFO_T;
                })();
    
                Roulette.GL_TO_UC_INIT_PHASE_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_INIT_PHASE_T.
                     * @memberof Protocol.Game.Roulette
                     * @interface IGL_TO_UC_INIT_PHASE_T
                     * @property {Protocol.Game.Roulette.Phase|null} [phase] GL_TO_UC_INIT_PHASE_T phase
                     * @property {number|null} [countdown] GL_TO_UC_INIT_PHASE_T countdown
                     * @property {number|Long|null} [totalBetPoint] GL_TO_UC_INIT_PHASE_T totalBetPoint
                     * @property {Array.<number|Long>|null} [betPoints] GL_TO_UC_INIT_PHASE_T betPoints
                     * @property {Array.<number|Long>|null} [personalBetMoney] GL_TO_UC_INIT_PHASE_T personalBetMoney
                     * @property {number|null} [spinNumber] GL_TO_UC_INIT_PHASE_T spinNumber
                     * @property {number|Long|null} [totalWinPoint] GL_TO_UC_INIT_PHASE_T totalWinPoint
                     * @property {Array.<number|Long>|null} [winPoints] GL_TO_UC_INIT_PHASE_T winPoints
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_INIT_PHASE_T.
                     * @memberof Protocol.Game.Roulette
                     * @classdesc Represents a GL_TO_UC_INIT_PHASE_T.
                     * @implements IGL_TO_UC_INIT_PHASE_T
                     * @constructor
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_INIT_PHASE_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_INIT_PHASE_T(properties) {
                        this.betPoints = [];
                        this.personalBetMoney = [];
                        this.winPoints = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_INIT_PHASE_T phase.
                     * @member {Protocol.Game.Roulette.Phase} phase
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T
                     * @instance
                     */
                    GL_TO_UC_INIT_PHASE_T.prototype.phase = 0;
    
                    /**
                     * GL_TO_UC_INIT_PHASE_T countdown.
                     * @member {number} countdown
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T
                     * @instance
                     */
                    GL_TO_UC_INIT_PHASE_T.prototype.countdown = 0;
    
                    /**
                     * GL_TO_UC_INIT_PHASE_T totalBetPoint.
                     * @member {number|Long} totalBetPoint
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T
                     * @instance
                     */
                    GL_TO_UC_INIT_PHASE_T.prototype.totalBetPoint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_INIT_PHASE_T betPoints.
                     * @member {Array.<number|Long>} betPoints
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T
                     * @instance
                     */
                    GL_TO_UC_INIT_PHASE_T.prototype.betPoints = $util.emptyArray;
    
                    /**
                     * GL_TO_UC_INIT_PHASE_T personalBetMoney.
                     * @member {Array.<number|Long>} personalBetMoney
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T
                     * @instance
                     */
                    GL_TO_UC_INIT_PHASE_T.prototype.personalBetMoney = $util.emptyArray;
    
                    /**
                     * GL_TO_UC_INIT_PHASE_T spinNumber.
                     * @member {number} spinNumber
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T
                     * @instance
                     */
                    GL_TO_UC_INIT_PHASE_T.prototype.spinNumber = 0;
    
                    /**
                     * GL_TO_UC_INIT_PHASE_T totalWinPoint.
                     * @member {number|Long} totalWinPoint
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T
                     * @instance
                     */
                    GL_TO_UC_INIT_PHASE_T.prototype.totalWinPoint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_INIT_PHASE_T winPoints.
                     * @member {Array.<number|Long>} winPoints
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T
                     * @instance
                     */
                    GL_TO_UC_INIT_PHASE_T.prototype.winPoints = $util.emptyArray;
    
                    /**
                     * Creates a new GL_TO_UC_INIT_PHASE_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_INIT_PHASE_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T} GL_TO_UC_INIT_PHASE_T instance
                     */
                    GL_TO_UC_INIT_PHASE_T.create = function create(properties) {
                        return new GL_TO_UC_INIT_PHASE_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_INIT_PHASE_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_INIT_PHASE_T} message GL_TO_UC_INIT_PHASE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_INIT_PHASE_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.phase != null && message.hasOwnProperty("phase"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.phase);
                        if (message.countdown != null && message.hasOwnProperty("countdown"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.countdown);
                        if (message.totalBetPoint != null && message.hasOwnProperty("totalBetPoint"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.totalBetPoint);
                        if (message.betPoints != null && message.betPoints.length) {
                            writer.uint32(/* id 4, wireType 2 =*/34).fork();
                            for (var i = 0; i < message.betPoints.length; ++i)
                                writer.int64(message.betPoints[i]);
                            writer.ldelim();
                        }
                        if (message.spinNumber != null && message.hasOwnProperty("spinNumber"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.spinNumber);
                        if (message.personalBetMoney != null && message.personalBetMoney.length) {
                            writer.uint32(/* id 6, wireType 2 =*/50).fork();
                            for (var i = 0; i < message.personalBetMoney.length; ++i)
                                writer.int64(message.personalBetMoney[i]);
                            writer.ldelim();
                        }
                        if (message.totalWinPoint != null && message.hasOwnProperty("totalWinPoint"))
                            writer.uint32(/* id 11, wireType 0 =*/88).int64(message.totalWinPoint);
                        if (message.winPoints != null && message.winPoints.length) {
                            writer.uint32(/* id 12, wireType 2 =*/98).fork();
                            for (var i = 0; i < message.winPoints.length; ++i)
                                writer.int64(message.winPoints[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_INIT_PHASE_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_INIT_PHASE_T} message GL_TO_UC_INIT_PHASE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_INIT_PHASE_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_INIT_PHASE_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T} GL_TO_UC_INIT_PHASE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_INIT_PHASE_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.phase = reader.int32();
                                break;
                            case 2:
                                message.countdown = reader.int32();
                                break;
                            case 3:
                                message.totalBetPoint = reader.int64();
                                break;
                            case 4:
                                if (!(message.betPoints && message.betPoints.length))
                                    message.betPoints = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.betPoints.push(reader.int64());
                                } else
                                    message.betPoints.push(reader.int64());
                                break;
                            case 6:
                                if (!(message.personalBetMoney && message.personalBetMoney.length))
                                    message.personalBetMoney = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.personalBetMoney.push(reader.int64());
                                } else
                                    message.personalBetMoney.push(reader.int64());
                                break;
                            case 5:
                                message.spinNumber = reader.int32();
                                break;
                            case 11:
                                message.totalWinPoint = reader.int64();
                                break;
                            case 12:
                                if (!(message.winPoints && message.winPoints.length))
                                    message.winPoints = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.winPoints.push(reader.int64());
                                } else
                                    message.winPoints.push(reader.int64());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_INIT_PHASE_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T} GL_TO_UC_INIT_PHASE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_INIT_PHASE_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_INIT_PHASE_T message.
                     * @function verify
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_INIT_PHASE_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.phase != null && message.hasOwnProperty("phase"))
                            switch (message.phase) {
                            default:
                                return "phase: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                break;
                            }
                        if (message.countdown != null && message.hasOwnProperty("countdown"))
                            if (!$util.isInteger(message.countdown))
                                return "countdown: integer expected";
                        if (message.totalBetPoint != null && message.hasOwnProperty("totalBetPoint"))
                            if (!$util.isInteger(message.totalBetPoint) && !(message.totalBetPoint && $util.isInteger(message.totalBetPoint.low) && $util.isInteger(message.totalBetPoint.high)))
                                return "totalBetPoint: integer|Long expected";
                        if (message.betPoints != null && message.hasOwnProperty("betPoints")) {
                            if (!Array.isArray(message.betPoints))
                                return "betPoints: array expected";
                            for (var i = 0; i < message.betPoints.length; ++i)
                                if (!$util.isInteger(message.betPoints[i]) && !(message.betPoints[i] && $util.isInteger(message.betPoints[i].low) && $util.isInteger(message.betPoints[i].high)))
                                    return "betPoints: integer|Long[] expected";
                        }
                        if (message.personalBetMoney != null && message.hasOwnProperty("personalBetMoney")) {
                            if (!Array.isArray(message.personalBetMoney))
                                return "personalBetMoney: array expected";
                            for (var i = 0; i < message.personalBetMoney.length; ++i)
                                if (!$util.isInteger(message.personalBetMoney[i]) && !(message.personalBetMoney[i] && $util.isInteger(message.personalBetMoney[i].low) && $util.isInteger(message.personalBetMoney[i].high)))
                                    return "personalBetMoney: integer|Long[] expected";
                        }
                        if (message.spinNumber != null && message.hasOwnProperty("spinNumber"))
                            if (!$util.isInteger(message.spinNumber))
                                return "spinNumber: integer expected";
                        if (message.totalWinPoint != null && message.hasOwnProperty("totalWinPoint"))
                            if (!$util.isInteger(message.totalWinPoint) && !(message.totalWinPoint && $util.isInteger(message.totalWinPoint.low) && $util.isInteger(message.totalWinPoint.high)))
                                return "totalWinPoint: integer|Long expected";
                        if (message.winPoints != null && message.hasOwnProperty("winPoints")) {
                            if (!Array.isArray(message.winPoints))
                                return "winPoints: array expected";
                            for (var i = 0; i < message.winPoints.length; ++i)
                                if (!$util.isInteger(message.winPoints[i]) && !(message.winPoints[i] && $util.isInteger(message.winPoints[i].low) && $util.isInteger(message.winPoints[i].high)))
                                    return "winPoints: integer|Long[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_INIT_PHASE_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T} GL_TO_UC_INIT_PHASE_T
                     */
                    GL_TO_UC_INIT_PHASE_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T)
                            return object;
                        var message = new $root.Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T();
                        switch (object.phase) {
                        case "PHASE_DEFAULT":
                        case 0:
                            message.phase = 0;
                            break;
                        case "BET":
                        case 1:
                            message.phase = 1;
                            break;
                        case "SPIN":
                        case 2:
                            message.phase = 2;
                            break;
                        case "SETTLE":
                        case 3:
                            message.phase = 3;
                            break;
                        }
                        if (object.countdown != null)
                            message.countdown = object.countdown | 0;
                        if (object.totalBetPoint != null)
                            if ($util.Long)
                                (message.totalBetPoint = $util.Long.fromValue(object.totalBetPoint)).unsigned = false;
                            else if (typeof object.totalBetPoint === "string")
                                message.totalBetPoint = parseInt(object.totalBetPoint, 10);
                            else if (typeof object.totalBetPoint === "number")
                                message.totalBetPoint = object.totalBetPoint;
                            else if (typeof object.totalBetPoint === "object")
                                message.totalBetPoint = new $util.LongBits(object.totalBetPoint.low >>> 0, object.totalBetPoint.high >>> 0).toNumber();
                        if (object.betPoints) {
                            if (!Array.isArray(object.betPoints))
                                throw TypeError(".Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T.betPoints: array expected");
                            message.betPoints = [];
                            for (var i = 0; i < object.betPoints.length; ++i)
                                if ($util.Long)
                                    (message.betPoints[i] = $util.Long.fromValue(object.betPoints[i])).unsigned = false;
                                else if (typeof object.betPoints[i] === "string")
                                    message.betPoints[i] = parseInt(object.betPoints[i], 10);
                                else if (typeof object.betPoints[i] === "number")
                                    message.betPoints[i] = object.betPoints[i];
                                else if (typeof object.betPoints[i] === "object")
                                    message.betPoints[i] = new $util.LongBits(object.betPoints[i].low >>> 0, object.betPoints[i].high >>> 0).toNumber();
                        }
                        if (object.personalBetMoney) {
                            if (!Array.isArray(object.personalBetMoney))
                                throw TypeError(".Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T.personalBetMoney: array expected");
                            message.personalBetMoney = [];
                            for (var i = 0; i < object.personalBetMoney.length; ++i)
                                if ($util.Long)
                                    (message.personalBetMoney[i] = $util.Long.fromValue(object.personalBetMoney[i])).unsigned = false;
                                else if (typeof object.personalBetMoney[i] === "string")
                                    message.personalBetMoney[i] = parseInt(object.personalBetMoney[i], 10);
                                else if (typeof object.personalBetMoney[i] === "number")
                                    message.personalBetMoney[i] = object.personalBetMoney[i];
                                else if (typeof object.personalBetMoney[i] === "object")
                                    message.personalBetMoney[i] = new $util.LongBits(object.personalBetMoney[i].low >>> 0, object.personalBetMoney[i].high >>> 0).toNumber();
                        }
                        if (object.spinNumber != null)
                            message.spinNumber = object.spinNumber | 0;
                        if (object.totalWinPoint != null)
                            if ($util.Long)
                                (message.totalWinPoint = $util.Long.fromValue(object.totalWinPoint)).unsigned = false;
                            else if (typeof object.totalWinPoint === "string")
                                message.totalWinPoint = parseInt(object.totalWinPoint, 10);
                            else if (typeof object.totalWinPoint === "number")
                                message.totalWinPoint = object.totalWinPoint;
                            else if (typeof object.totalWinPoint === "object")
                                message.totalWinPoint = new $util.LongBits(object.totalWinPoint.low >>> 0, object.totalWinPoint.high >>> 0).toNumber();
                        if (object.winPoints) {
                            if (!Array.isArray(object.winPoints))
                                throw TypeError(".Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T.winPoints: array expected");
                            message.winPoints = [];
                            for (var i = 0; i < object.winPoints.length; ++i)
                                if ($util.Long)
                                    (message.winPoints[i] = $util.Long.fromValue(object.winPoints[i])).unsigned = false;
                                else if (typeof object.winPoints[i] === "string")
                                    message.winPoints[i] = parseInt(object.winPoints[i], 10);
                                else if (typeof object.winPoints[i] === "number")
                                    message.winPoints[i] = object.winPoints[i];
                                else if (typeof object.winPoints[i] === "object")
                                    message.winPoints[i] = new $util.LongBits(object.winPoints[i].low >>> 0, object.winPoints[i].high >>> 0).toNumber();
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_INIT_PHASE_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T
                     * @static
                     * @param {Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T} message GL_TO_UC_INIT_PHASE_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_INIT_PHASE_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.betPoints = [];
                            object.personalBetMoney = [];
                            object.winPoints = [];
                        }
                        if (options.defaults) {
                            object.phase = options.enums === String ? "PHASE_DEFAULT" : 0;
                            object.countdown = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.totalBetPoint = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.totalBetPoint = options.longs === String ? "0" : 0;
                            object.spinNumber = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.totalWinPoint = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.totalWinPoint = options.longs === String ? "0" : 0;
                        }
                        if (message.phase != null && message.hasOwnProperty("phase"))
                            object.phase = options.enums === String ? $root.Protocol.Game.Roulette.Phase[message.phase] : message.phase;
                        if (message.countdown != null && message.hasOwnProperty("countdown"))
                            object.countdown = message.countdown;
                        if (message.totalBetPoint != null && message.hasOwnProperty("totalBetPoint"))
                            if (typeof message.totalBetPoint === "number")
                                object.totalBetPoint = options.longs === String ? String(message.totalBetPoint) : message.totalBetPoint;
                            else
                                object.totalBetPoint = options.longs === String ? $util.Long.prototype.toString.call(message.totalBetPoint) : options.longs === Number ? new $util.LongBits(message.totalBetPoint.low >>> 0, message.totalBetPoint.high >>> 0).toNumber() : message.totalBetPoint;
                        if (message.betPoints && message.betPoints.length) {
                            object.betPoints = [];
                            for (var j = 0; j < message.betPoints.length; ++j)
                                if (typeof message.betPoints[j] === "number")
                                    object.betPoints[j] = options.longs === String ? String(message.betPoints[j]) : message.betPoints[j];
                                else
                                    object.betPoints[j] = options.longs === String ? $util.Long.prototype.toString.call(message.betPoints[j]) : options.longs === Number ? new $util.LongBits(message.betPoints[j].low >>> 0, message.betPoints[j].high >>> 0).toNumber() : message.betPoints[j];
                        }
                        if (message.spinNumber != null && message.hasOwnProperty("spinNumber"))
                            object.spinNumber = message.spinNumber;
                        if (message.personalBetMoney && message.personalBetMoney.length) {
                            object.personalBetMoney = [];
                            for (var j = 0; j < message.personalBetMoney.length; ++j)
                                if (typeof message.personalBetMoney[j] === "number")
                                    object.personalBetMoney[j] = options.longs === String ? String(message.personalBetMoney[j]) : message.personalBetMoney[j];
                                else
                                    object.personalBetMoney[j] = options.longs === String ? $util.Long.prototype.toString.call(message.personalBetMoney[j]) : options.longs === Number ? new $util.LongBits(message.personalBetMoney[j].low >>> 0, message.personalBetMoney[j].high >>> 0).toNumber() : message.personalBetMoney[j];
                        }
                        if (message.totalWinPoint != null && message.hasOwnProperty("totalWinPoint"))
                            if (typeof message.totalWinPoint === "number")
                                object.totalWinPoint = options.longs === String ? String(message.totalWinPoint) : message.totalWinPoint;
                            else
                                object.totalWinPoint = options.longs === String ? $util.Long.prototype.toString.call(message.totalWinPoint) : options.longs === Number ? new $util.LongBits(message.totalWinPoint.low >>> 0, message.totalWinPoint.high >>> 0).toNumber() : message.totalWinPoint;
                        if (message.winPoints && message.winPoints.length) {
                            object.winPoints = [];
                            for (var j = 0; j < message.winPoints.length; ++j)
                                if (typeof message.winPoints[j] === "number")
                                    object.winPoints[j] = options.longs === String ? String(message.winPoints[j]) : message.winPoints[j];
                                else
                                    object.winPoints[j] = options.longs === String ? $util.Long.prototype.toString.call(message.winPoints[j]) : options.longs === Number ? new $util.LongBits(message.winPoints[j].low >>> 0, message.winPoints[j].high >>> 0).toNumber() : message.winPoints[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_INIT_PHASE_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_INIT_PHASE_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_INIT_PHASE_T;
                })();
    
                Roulette.GL_TO_UC_INIT_HISTORY_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_INIT_HISTORY_T.
                     * @memberof Protocol.Game.Roulette
                     * @interface IGL_TO_UC_INIT_HISTORY_T
                     * @property {Array.<number>|null} [trend] GL_TO_UC_INIT_HISTORY_T trend
                     * @property {Array.<number>|null} [statistics] GL_TO_UC_INIT_HISTORY_T statistics
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_INIT_HISTORY_T.
                     * @memberof Protocol.Game.Roulette
                     * @classdesc Represents a GL_TO_UC_INIT_HISTORY_T.
                     * @implements IGL_TO_UC_INIT_HISTORY_T
                     * @constructor
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_INIT_HISTORY_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_INIT_HISTORY_T(properties) {
                        this.trend = [];
                        this.statistics = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_INIT_HISTORY_T trend.
                     * @member {Array.<number>} trend
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T
                     * @instance
                     */
                    GL_TO_UC_INIT_HISTORY_T.prototype.trend = $util.emptyArray;
    
                    /**
                     * GL_TO_UC_INIT_HISTORY_T statistics.
                     * @member {Array.<number>} statistics
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T
                     * @instance
                     */
                    GL_TO_UC_INIT_HISTORY_T.prototype.statistics = $util.emptyArray;
    
                    /**
                     * Creates a new GL_TO_UC_INIT_HISTORY_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_INIT_HISTORY_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T} GL_TO_UC_INIT_HISTORY_T instance
                     */
                    GL_TO_UC_INIT_HISTORY_T.create = function create(properties) {
                        return new GL_TO_UC_INIT_HISTORY_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_INIT_HISTORY_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_INIT_HISTORY_T} message GL_TO_UC_INIT_HISTORY_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_INIT_HISTORY_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.trend != null && message.trend.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.trend.length; ++i)
                                writer.int32(message.trend[i]);
                            writer.ldelim();
                        }
                        if (message.statistics != null && message.statistics.length) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork();
                            for (var i = 0; i < message.statistics.length; ++i)
                                writer.int32(message.statistics[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_INIT_HISTORY_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_INIT_HISTORY_T} message GL_TO_UC_INIT_HISTORY_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_INIT_HISTORY_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_INIT_HISTORY_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T} GL_TO_UC_INIT_HISTORY_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_INIT_HISTORY_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.trend && message.trend.length))
                                    message.trend = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.trend.push(reader.int32());
                                } else
                                    message.trend.push(reader.int32());
                                break;
                            case 2:
                                if (!(message.statistics && message.statistics.length))
                                    message.statistics = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.statistics.push(reader.int32());
                                } else
                                    message.statistics.push(reader.int32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_INIT_HISTORY_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T} GL_TO_UC_INIT_HISTORY_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_INIT_HISTORY_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_INIT_HISTORY_T message.
                     * @function verify
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_INIT_HISTORY_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.trend != null && message.hasOwnProperty("trend")) {
                            if (!Array.isArray(message.trend))
                                return "trend: array expected";
                            for (var i = 0; i < message.trend.length; ++i)
                                if (!$util.isInteger(message.trend[i]))
                                    return "trend: integer[] expected";
                        }
                        if (message.statistics != null && message.hasOwnProperty("statistics")) {
                            if (!Array.isArray(message.statistics))
                                return "statistics: array expected";
                            for (var i = 0; i < message.statistics.length; ++i)
                                if (!$util.isInteger(message.statistics[i]))
                                    return "statistics: integer[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_INIT_HISTORY_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T} GL_TO_UC_INIT_HISTORY_T
                     */
                    GL_TO_UC_INIT_HISTORY_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T)
                            return object;
                        var message = new $root.Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T();
                        if (object.trend) {
                            if (!Array.isArray(object.trend))
                                throw TypeError(".Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T.trend: array expected");
                            message.trend = [];
                            for (var i = 0; i < object.trend.length; ++i)
                                message.trend[i] = object.trend[i] | 0;
                        }
                        if (object.statistics) {
                            if (!Array.isArray(object.statistics))
                                throw TypeError(".Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T.statistics: array expected");
                            message.statistics = [];
                            for (var i = 0; i < object.statistics.length; ++i)
                                message.statistics[i] = object.statistics[i] | 0;
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_INIT_HISTORY_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T
                     * @static
                     * @param {Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T} message GL_TO_UC_INIT_HISTORY_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_INIT_HISTORY_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.trend = [];
                            object.statistics = [];
                        }
                        if (message.trend && message.trend.length) {
                            object.trend = [];
                            for (var j = 0; j < message.trend.length; ++j)
                                object.trend[j] = message.trend[j];
                        }
                        if (message.statistics && message.statistics.length) {
                            object.statistics = [];
                            for (var j = 0; j < message.statistics.length; ++j)
                                object.statistics[j] = message.statistics[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_INIT_HISTORY_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_INIT_HISTORY_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_INIT_HISTORY_T;
                })();
    
                Roulette.GL_TO_UC_CHANGE_PHASE_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_CHANGE_PHASE_T.
                     * @memberof Protocol.Game.Roulette
                     * @interface IGL_TO_UC_CHANGE_PHASE_T
                     * @property {Protocol.Game.Roulette.Phase|null} [phase] GL_TO_UC_CHANGE_PHASE_T phase
                     * @property {Protocol.Game.Roulette.Timing|null} [timing] GL_TO_UC_CHANGE_PHASE_T timing
                     * @property {number|null} [countdown] GL_TO_UC_CHANGE_PHASE_T countdown
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_CHANGE_PHASE_T.
                     * @memberof Protocol.Game.Roulette
                     * @classdesc Represents a GL_TO_UC_CHANGE_PHASE_T.
                     * @implements IGL_TO_UC_CHANGE_PHASE_T
                     * @constructor
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_CHANGE_PHASE_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_CHANGE_PHASE_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_CHANGE_PHASE_T phase.
                     * @member {Protocol.Game.Roulette.Phase} phase
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T
                     * @instance
                     */
                    GL_TO_UC_CHANGE_PHASE_T.prototype.phase = 0;
    
                    /**
                     * GL_TO_UC_CHANGE_PHASE_T timing.
                     * @member {Protocol.Game.Roulette.Timing} timing
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T
                     * @instance
                     */
                    GL_TO_UC_CHANGE_PHASE_T.prototype.timing = 0;
    
                    /**
                     * GL_TO_UC_CHANGE_PHASE_T countdown.
                     * @member {number} countdown
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T
                     * @instance
                     */
                    GL_TO_UC_CHANGE_PHASE_T.prototype.countdown = 0;
    
                    /**
                     * Creates a new GL_TO_UC_CHANGE_PHASE_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_CHANGE_PHASE_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T} GL_TO_UC_CHANGE_PHASE_T instance
                     */
                    GL_TO_UC_CHANGE_PHASE_T.create = function create(properties) {
                        return new GL_TO_UC_CHANGE_PHASE_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_CHANGE_PHASE_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_CHANGE_PHASE_T} message GL_TO_UC_CHANGE_PHASE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_CHANGE_PHASE_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.phase != null && message.hasOwnProperty("phase"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.phase);
                        if (message.timing != null && message.hasOwnProperty("timing"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.timing);
                        if (message.countdown != null && message.hasOwnProperty("countdown"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.countdown);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_CHANGE_PHASE_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_CHANGE_PHASE_T} message GL_TO_UC_CHANGE_PHASE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_CHANGE_PHASE_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_CHANGE_PHASE_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T} GL_TO_UC_CHANGE_PHASE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_CHANGE_PHASE_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.phase = reader.int32();
                                break;
                            case 2:
                                message.timing = reader.int32();
                                break;
                            case 3:
                                message.countdown = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_CHANGE_PHASE_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T} GL_TO_UC_CHANGE_PHASE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_CHANGE_PHASE_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_CHANGE_PHASE_T message.
                     * @function verify
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_CHANGE_PHASE_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.phase != null && message.hasOwnProperty("phase"))
                            switch (message.phase) {
                            default:
                                return "phase: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                break;
                            }
                        if (message.timing != null && message.hasOwnProperty("timing"))
                            switch (message.timing) {
                            default:
                                return "timing: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                                break;
                            }
                        if (message.countdown != null && message.hasOwnProperty("countdown"))
                            if (!$util.isInteger(message.countdown))
                                return "countdown: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_CHANGE_PHASE_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T} GL_TO_UC_CHANGE_PHASE_T
                     */
                    GL_TO_UC_CHANGE_PHASE_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T)
                            return object;
                        var message = new $root.Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T();
                        switch (object.phase) {
                        case "PHASE_DEFAULT":
                        case 0:
                            message.phase = 0;
                            break;
                        case "BET":
                        case 1:
                            message.phase = 1;
                            break;
                        case "SPIN":
                        case 2:
                            message.phase = 2;
                            break;
                        case "SETTLE":
                        case 3:
                            message.phase = 3;
                            break;
                        }
                        switch (object.timing) {
                        case "Timing_DEFAULT":
                        case 0:
                            message.timing = 0;
                            break;
                        case "BEGIN":
                        case 1:
                            message.timing = 1;
                            break;
                        case "END":
                        case 2:
                            message.timing = 2;
                            break;
                        case "ING":
                        case 3:
                            message.timing = 3;
                            break;
                        case "NONE":
                        case 4:
                            message.timing = 4;
                            break;
                        }
                        if (object.countdown != null)
                            message.countdown = object.countdown | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_CHANGE_PHASE_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T
                     * @static
                     * @param {Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T} message GL_TO_UC_CHANGE_PHASE_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_CHANGE_PHASE_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.phase = options.enums === String ? "PHASE_DEFAULT" : 0;
                            object.timing = options.enums === String ? "Timing_DEFAULT" : 0;
                            object.countdown = 0;
                        }
                        if (message.phase != null && message.hasOwnProperty("phase"))
                            object.phase = options.enums === String ? $root.Protocol.Game.Roulette.Phase[message.phase] : message.phase;
                        if (message.timing != null && message.hasOwnProperty("timing"))
                            object.timing = options.enums === String ? $root.Protocol.Game.Roulette.Timing[message.timing] : message.timing;
                        if (message.countdown != null && message.hasOwnProperty("countdown"))
                            object.countdown = message.countdown;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_CHANGE_PHASE_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_CHANGE_PHASE_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_CHANGE_PHASE_T;
                })();
    
                Roulette.GL_TO_UC_UPDATE_TABLE_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_UPDATE_TABLE_T.
                     * @memberof Protocol.Game.Roulette
                     * @interface IGL_TO_UC_UPDATE_TABLE_T
                     * @property {number|Long|null} [totalBetPoint] GL_TO_UC_UPDATE_TABLE_T totalBetPoint
                     * @property {Array.<number|Long>|null} [betPoints] GL_TO_UC_UPDATE_TABLE_T betPoints
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_UPDATE_TABLE_T.
                     * @memberof Protocol.Game.Roulette
                     * @classdesc Represents a GL_TO_UC_UPDATE_TABLE_T.
                     * @implements IGL_TO_UC_UPDATE_TABLE_T
                     * @constructor
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_UPDATE_TABLE_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_UPDATE_TABLE_T(properties) {
                        this.betPoints = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_UPDATE_TABLE_T totalBetPoint.
                     * @member {number|Long} totalBetPoint
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T
                     * @instance
                     */
                    GL_TO_UC_UPDATE_TABLE_T.prototype.totalBetPoint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_UPDATE_TABLE_T betPoints.
                     * @member {Array.<number|Long>} betPoints
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T
                     * @instance
                     */
                    GL_TO_UC_UPDATE_TABLE_T.prototype.betPoints = $util.emptyArray;
    
                    /**
                     * Creates a new GL_TO_UC_UPDATE_TABLE_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_UPDATE_TABLE_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T} GL_TO_UC_UPDATE_TABLE_T instance
                     */
                    GL_TO_UC_UPDATE_TABLE_T.create = function create(properties) {
                        return new GL_TO_UC_UPDATE_TABLE_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_UPDATE_TABLE_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_UPDATE_TABLE_T} message GL_TO_UC_UPDATE_TABLE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_UPDATE_TABLE_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.totalBetPoint != null && message.hasOwnProperty("totalBetPoint"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.totalBetPoint);
                        if (message.betPoints != null && message.betPoints.length) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork();
                            for (var i = 0; i < message.betPoints.length; ++i)
                                writer.int64(message.betPoints[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_UPDATE_TABLE_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_UPDATE_TABLE_T} message GL_TO_UC_UPDATE_TABLE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_UPDATE_TABLE_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_UPDATE_TABLE_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T} GL_TO_UC_UPDATE_TABLE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_UPDATE_TABLE_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.totalBetPoint = reader.int64();
                                break;
                            case 2:
                                if (!(message.betPoints && message.betPoints.length))
                                    message.betPoints = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.betPoints.push(reader.int64());
                                } else
                                    message.betPoints.push(reader.int64());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_UPDATE_TABLE_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T} GL_TO_UC_UPDATE_TABLE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_UPDATE_TABLE_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_UPDATE_TABLE_T message.
                     * @function verify
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_UPDATE_TABLE_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.totalBetPoint != null && message.hasOwnProperty("totalBetPoint"))
                            if (!$util.isInteger(message.totalBetPoint) && !(message.totalBetPoint && $util.isInteger(message.totalBetPoint.low) && $util.isInteger(message.totalBetPoint.high)))
                                return "totalBetPoint: integer|Long expected";
                        if (message.betPoints != null && message.hasOwnProperty("betPoints")) {
                            if (!Array.isArray(message.betPoints))
                                return "betPoints: array expected";
                            for (var i = 0; i < message.betPoints.length; ++i)
                                if (!$util.isInteger(message.betPoints[i]) && !(message.betPoints[i] && $util.isInteger(message.betPoints[i].low) && $util.isInteger(message.betPoints[i].high)))
                                    return "betPoints: integer|Long[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_UPDATE_TABLE_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T} GL_TO_UC_UPDATE_TABLE_T
                     */
                    GL_TO_UC_UPDATE_TABLE_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T)
                            return object;
                        var message = new $root.Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T();
                        if (object.totalBetPoint != null)
                            if ($util.Long)
                                (message.totalBetPoint = $util.Long.fromValue(object.totalBetPoint)).unsigned = false;
                            else if (typeof object.totalBetPoint === "string")
                                message.totalBetPoint = parseInt(object.totalBetPoint, 10);
                            else if (typeof object.totalBetPoint === "number")
                                message.totalBetPoint = object.totalBetPoint;
                            else if (typeof object.totalBetPoint === "object")
                                message.totalBetPoint = new $util.LongBits(object.totalBetPoint.low >>> 0, object.totalBetPoint.high >>> 0).toNumber();
                        if (object.betPoints) {
                            if (!Array.isArray(object.betPoints))
                                throw TypeError(".Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T.betPoints: array expected");
                            message.betPoints = [];
                            for (var i = 0; i < object.betPoints.length; ++i)
                                if ($util.Long)
                                    (message.betPoints[i] = $util.Long.fromValue(object.betPoints[i])).unsigned = false;
                                else if (typeof object.betPoints[i] === "string")
                                    message.betPoints[i] = parseInt(object.betPoints[i], 10);
                                else if (typeof object.betPoints[i] === "number")
                                    message.betPoints[i] = object.betPoints[i];
                                else if (typeof object.betPoints[i] === "object")
                                    message.betPoints[i] = new $util.LongBits(object.betPoints[i].low >>> 0, object.betPoints[i].high >>> 0).toNumber();
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_UPDATE_TABLE_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T
                     * @static
                     * @param {Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T} message GL_TO_UC_UPDATE_TABLE_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_UPDATE_TABLE_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.betPoints = [];
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.totalBetPoint = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.totalBetPoint = options.longs === String ? "0" : 0;
                        if (message.totalBetPoint != null && message.hasOwnProperty("totalBetPoint"))
                            if (typeof message.totalBetPoint === "number")
                                object.totalBetPoint = options.longs === String ? String(message.totalBetPoint) : message.totalBetPoint;
                            else
                                object.totalBetPoint = options.longs === String ? $util.Long.prototype.toString.call(message.totalBetPoint) : options.longs === Number ? new $util.LongBits(message.totalBetPoint.low >>> 0, message.totalBetPoint.high >>> 0).toNumber() : message.totalBetPoint;
                        if (message.betPoints && message.betPoints.length) {
                            object.betPoints = [];
                            for (var j = 0; j < message.betPoints.length; ++j)
                                if (typeof message.betPoints[j] === "number")
                                    object.betPoints[j] = options.longs === String ? String(message.betPoints[j]) : message.betPoints[j];
                                else
                                    object.betPoints[j] = options.longs === String ? $util.Long.prototype.toString.call(message.betPoints[j]) : options.longs === Number ? new $util.LongBits(message.betPoints[j].low >>> 0, message.betPoints[j].high >>> 0).toNumber() : message.betPoints[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_UPDATE_TABLE_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_UPDATE_TABLE_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_UPDATE_TABLE_T;
                })();
    
                Roulette.GL_TO_UC_SPIN_NUMBER_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_SPIN_NUMBER_T.
                     * @memberof Protocol.Game.Roulette
                     * @interface IGL_TO_UC_SPIN_NUMBER_T
                     * @property {number|null} [spinNumber] GL_TO_UC_SPIN_NUMBER_T spinNumber
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_SPIN_NUMBER_T.
                     * @memberof Protocol.Game.Roulette
                     * @classdesc Represents a GL_TO_UC_SPIN_NUMBER_T.
                     * @implements IGL_TO_UC_SPIN_NUMBER_T
                     * @constructor
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_SPIN_NUMBER_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_SPIN_NUMBER_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_SPIN_NUMBER_T spinNumber.
                     * @member {number} spinNumber
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T
                     * @instance
                     */
                    GL_TO_UC_SPIN_NUMBER_T.prototype.spinNumber = 0;
    
                    /**
                     * Creates a new GL_TO_UC_SPIN_NUMBER_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_SPIN_NUMBER_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T} GL_TO_UC_SPIN_NUMBER_T instance
                     */
                    GL_TO_UC_SPIN_NUMBER_T.create = function create(properties) {
                        return new GL_TO_UC_SPIN_NUMBER_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_SPIN_NUMBER_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_SPIN_NUMBER_T} message GL_TO_UC_SPIN_NUMBER_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_SPIN_NUMBER_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.spinNumber != null && message.hasOwnProperty("spinNumber"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.spinNumber);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_SPIN_NUMBER_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_SPIN_NUMBER_T} message GL_TO_UC_SPIN_NUMBER_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_SPIN_NUMBER_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_SPIN_NUMBER_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T} GL_TO_UC_SPIN_NUMBER_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_SPIN_NUMBER_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.spinNumber = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_SPIN_NUMBER_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T} GL_TO_UC_SPIN_NUMBER_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_SPIN_NUMBER_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_SPIN_NUMBER_T message.
                     * @function verify
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_SPIN_NUMBER_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.spinNumber != null && message.hasOwnProperty("spinNumber"))
                            if (!$util.isInteger(message.spinNumber))
                                return "spinNumber: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_SPIN_NUMBER_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T} GL_TO_UC_SPIN_NUMBER_T
                     */
                    GL_TO_UC_SPIN_NUMBER_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T)
                            return object;
                        var message = new $root.Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T();
                        if (object.spinNumber != null)
                            message.spinNumber = object.spinNumber | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_SPIN_NUMBER_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T
                     * @static
                     * @param {Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T} message GL_TO_UC_SPIN_NUMBER_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_SPIN_NUMBER_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.spinNumber = 0;
                        if (message.spinNumber != null && message.hasOwnProperty("spinNumber"))
                            object.spinNumber = message.spinNumber;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_SPIN_NUMBER_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_SPIN_NUMBER_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_SPIN_NUMBER_T;
                })();
    
                Roulette.GL_TO_UC_SETTLE_RESULT_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_SETTLE_RESULT_T.
                     * @memberof Protocol.Game.Roulette
                     * @interface IGL_TO_UC_SETTLE_RESULT_T
                     * @property {number|Long|null} [totalWinPoint] GL_TO_UC_SETTLE_RESULT_T totalWinPoint
                     * @property {Array.<number|Long>|null} [winPoints] GL_TO_UC_SETTLE_RESULT_T winPoints
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_SETTLE_RESULT_T.
                     * @memberof Protocol.Game.Roulette
                     * @classdesc Represents a GL_TO_UC_SETTLE_RESULT_T.
                     * @implements IGL_TO_UC_SETTLE_RESULT_T
                     * @constructor
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_SETTLE_RESULT_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_SETTLE_RESULT_T(properties) {
                        this.winPoints = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_SETTLE_RESULT_T totalWinPoint.
                     * @member {number|Long} totalWinPoint
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T
                     * @instance
                     */
                    GL_TO_UC_SETTLE_RESULT_T.prototype.totalWinPoint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_SETTLE_RESULT_T winPoints.
                     * @member {Array.<number|Long>} winPoints
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T
                     * @instance
                     */
                    GL_TO_UC_SETTLE_RESULT_T.prototype.winPoints = $util.emptyArray;
    
                    /**
                     * Creates a new GL_TO_UC_SETTLE_RESULT_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_SETTLE_RESULT_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T} GL_TO_UC_SETTLE_RESULT_T instance
                     */
                    GL_TO_UC_SETTLE_RESULT_T.create = function create(properties) {
                        return new GL_TO_UC_SETTLE_RESULT_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_SETTLE_RESULT_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_SETTLE_RESULT_T} message GL_TO_UC_SETTLE_RESULT_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_SETTLE_RESULT_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.totalWinPoint != null && message.hasOwnProperty("totalWinPoint"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.totalWinPoint);
                        if (message.winPoints != null && message.winPoints.length) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork();
                            for (var i = 0; i < message.winPoints.length; ++i)
                                writer.int64(message.winPoints[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_SETTLE_RESULT_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_SETTLE_RESULT_T} message GL_TO_UC_SETTLE_RESULT_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_SETTLE_RESULT_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_SETTLE_RESULT_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T} GL_TO_UC_SETTLE_RESULT_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_SETTLE_RESULT_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.totalWinPoint = reader.int64();
                                break;
                            case 2:
                                if (!(message.winPoints && message.winPoints.length))
                                    message.winPoints = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.winPoints.push(reader.int64());
                                } else
                                    message.winPoints.push(reader.int64());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_SETTLE_RESULT_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T} GL_TO_UC_SETTLE_RESULT_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_SETTLE_RESULT_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_SETTLE_RESULT_T message.
                     * @function verify
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_SETTLE_RESULT_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.totalWinPoint != null && message.hasOwnProperty("totalWinPoint"))
                            if (!$util.isInteger(message.totalWinPoint) && !(message.totalWinPoint && $util.isInteger(message.totalWinPoint.low) && $util.isInteger(message.totalWinPoint.high)))
                                return "totalWinPoint: integer|Long expected";
                        if (message.winPoints != null && message.hasOwnProperty("winPoints")) {
                            if (!Array.isArray(message.winPoints))
                                return "winPoints: array expected";
                            for (var i = 0; i < message.winPoints.length; ++i)
                                if (!$util.isInteger(message.winPoints[i]) && !(message.winPoints[i] && $util.isInteger(message.winPoints[i].low) && $util.isInteger(message.winPoints[i].high)))
                                    return "winPoints: integer|Long[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_SETTLE_RESULT_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T} GL_TO_UC_SETTLE_RESULT_T
                     */
                    GL_TO_UC_SETTLE_RESULT_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T)
                            return object;
                        var message = new $root.Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T();
                        if (object.totalWinPoint != null)
                            if ($util.Long)
                                (message.totalWinPoint = $util.Long.fromValue(object.totalWinPoint)).unsigned = false;
                            else if (typeof object.totalWinPoint === "string")
                                message.totalWinPoint = parseInt(object.totalWinPoint, 10);
                            else if (typeof object.totalWinPoint === "number")
                                message.totalWinPoint = object.totalWinPoint;
                            else if (typeof object.totalWinPoint === "object")
                                message.totalWinPoint = new $util.LongBits(object.totalWinPoint.low >>> 0, object.totalWinPoint.high >>> 0).toNumber();
                        if (object.winPoints) {
                            if (!Array.isArray(object.winPoints))
                                throw TypeError(".Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T.winPoints: array expected");
                            message.winPoints = [];
                            for (var i = 0; i < object.winPoints.length; ++i)
                                if ($util.Long)
                                    (message.winPoints[i] = $util.Long.fromValue(object.winPoints[i])).unsigned = false;
                                else if (typeof object.winPoints[i] === "string")
                                    message.winPoints[i] = parseInt(object.winPoints[i], 10);
                                else if (typeof object.winPoints[i] === "number")
                                    message.winPoints[i] = object.winPoints[i];
                                else if (typeof object.winPoints[i] === "object")
                                    message.winPoints[i] = new $util.LongBits(object.winPoints[i].low >>> 0, object.winPoints[i].high >>> 0).toNumber();
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_SETTLE_RESULT_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T
                     * @static
                     * @param {Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T} message GL_TO_UC_SETTLE_RESULT_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_SETTLE_RESULT_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.winPoints = [];
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.totalWinPoint = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.totalWinPoint = options.longs === String ? "0" : 0;
                        if (message.totalWinPoint != null && message.hasOwnProperty("totalWinPoint"))
                            if (typeof message.totalWinPoint === "number")
                                object.totalWinPoint = options.longs === String ? String(message.totalWinPoint) : message.totalWinPoint;
                            else
                                object.totalWinPoint = options.longs === String ? $util.Long.prototype.toString.call(message.totalWinPoint) : options.longs === Number ? new $util.LongBits(message.totalWinPoint.low >>> 0, message.totalWinPoint.high >>> 0).toNumber() : message.totalWinPoint;
                        if (message.winPoints && message.winPoints.length) {
                            object.winPoints = [];
                            for (var j = 0; j < message.winPoints.length; ++j)
                                if (typeof message.winPoints[j] === "number")
                                    object.winPoints[j] = options.longs === String ? String(message.winPoints[j]) : message.winPoints[j];
                                else
                                    object.winPoints[j] = options.longs === String ? $util.Long.prototype.toString.call(message.winPoints[j]) : options.longs === Number ? new $util.LongBits(message.winPoints[j].low >>> 0, message.winPoints[j].high >>> 0).toNumber() : message.winPoints[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_SETTLE_RESULT_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_SETTLE_RESULT_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_SETTLE_RESULT_T;
                })();
    
                Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T = (function() {
    
                    /**
                     * Properties of a GL_TO_FL_UPDATE_ROUND_INFO_T.
                     * @memberof Protocol.Game.Roulette
                     * @interface IGL_TO_FL_UPDATE_ROUND_INFO_T
                     * @property {number|null} [roundNumber] GL_TO_FL_UPDATE_ROUND_INFO_T roundNumber
                     */
    
                    /**
                     * Constructs a new GL_TO_FL_UPDATE_ROUND_INFO_T.
                     * @memberof Protocol.Game.Roulette
                     * @classdesc Represents a GL_TO_FL_UPDATE_ROUND_INFO_T.
                     * @implements IGL_TO_FL_UPDATE_ROUND_INFO_T
                     * @constructor
                     * @param {Protocol.Game.Roulette.IGL_TO_FL_UPDATE_ROUND_INFO_T=} [properties] Properties to set
                     */
                    function GL_TO_FL_UPDATE_ROUND_INFO_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_FL_UPDATE_ROUND_INFO_T roundNumber.
                     * @member {number} roundNumber
                     * @memberof Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T
                     * @instance
                     */
                    GL_TO_FL_UPDATE_ROUND_INFO_T.prototype.roundNumber = 0;
    
                    /**
                     * Creates a new GL_TO_FL_UPDATE_ROUND_INFO_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_FL_UPDATE_ROUND_INFO_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T} GL_TO_FL_UPDATE_ROUND_INFO_T instance
                     */
                    GL_TO_FL_UPDATE_ROUND_INFO_T.create = function create(properties) {
                        return new GL_TO_FL_UPDATE_ROUND_INFO_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_FL_UPDATE_ROUND_INFO_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_FL_UPDATE_ROUND_INFO_T} message GL_TO_FL_UPDATE_ROUND_INFO_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_FL_UPDATE_ROUND_INFO_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roundNumber);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_FL_UPDATE_ROUND_INFO_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_FL_UPDATE_ROUND_INFO_T} message GL_TO_FL_UPDATE_ROUND_INFO_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_FL_UPDATE_ROUND_INFO_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_FL_UPDATE_ROUND_INFO_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T} GL_TO_FL_UPDATE_ROUND_INFO_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_FL_UPDATE_ROUND_INFO_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.roundNumber = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_FL_UPDATE_ROUND_INFO_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T} GL_TO_FL_UPDATE_ROUND_INFO_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_FL_UPDATE_ROUND_INFO_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_FL_UPDATE_ROUND_INFO_T message.
                     * @function verify
                     * @memberof Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_FL_UPDATE_ROUND_INFO_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            if (!$util.isInteger(message.roundNumber))
                                return "roundNumber: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_FL_UPDATE_ROUND_INFO_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T} GL_TO_FL_UPDATE_ROUND_INFO_T
                     */
                    GL_TO_FL_UPDATE_ROUND_INFO_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T)
                            return object;
                        var message = new $root.Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T();
                        if (object.roundNumber != null)
                            message.roundNumber = object.roundNumber | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_FL_UPDATE_ROUND_INFO_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T
                     * @static
                     * @param {Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T} message GL_TO_FL_UPDATE_ROUND_INFO_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_FL_UPDATE_ROUND_INFO_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.roundNumber = 0;
                        if (message.roundNumber != null && message.hasOwnProperty("roundNumber"))
                            object.roundNumber = message.roundNumber;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_FL_UPDATE_ROUND_INFO_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_FL_UPDATE_ROUND_INFO_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_FL_UPDATE_ROUND_INFO_T;
                })();
    
                Roulette.GL_TO_UC_UPDATE_POINT_INFO_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_UPDATE_POINT_INFO_T.
                     * @memberof Protocol.Game.Roulette
                     * @interface IGL_TO_UC_UPDATE_POINT_INFO_T
                     * @property {number|Long|null} [point] GL_TO_UC_UPDATE_POINT_INFO_T point
                     * @property {number|Long|null} [kickBackPoint] GL_TO_UC_UPDATE_POINT_INFO_T kickBackPoint
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_UPDATE_POINT_INFO_T.
                     * @memberof Protocol.Game.Roulette
                     * @classdesc Represents a GL_TO_UC_UPDATE_POINT_INFO_T.
                     * @implements IGL_TO_UC_UPDATE_POINT_INFO_T
                     * @constructor
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_UPDATE_POINT_INFO_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_UPDATE_POINT_INFO_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_UPDATE_POINT_INFO_T point.
                     * @member {number|Long} point
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T
                     * @instance
                     */
                    GL_TO_UC_UPDATE_POINT_INFO_T.prototype.point = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_UPDATE_POINT_INFO_T kickBackPoint.
                     * @member {number|Long} kickBackPoint
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T
                     * @instance
                     */
                    GL_TO_UC_UPDATE_POINT_INFO_T.prototype.kickBackPoint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * Creates a new GL_TO_UC_UPDATE_POINT_INFO_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_UPDATE_POINT_INFO_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T} GL_TO_UC_UPDATE_POINT_INFO_T instance
                     */
                    GL_TO_UC_UPDATE_POINT_INFO_T.create = function create(properties) {
                        return new GL_TO_UC_UPDATE_POINT_INFO_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_UPDATE_POINT_INFO_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_UPDATE_POINT_INFO_T} message GL_TO_UC_UPDATE_POINT_INFO_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_UPDATE_POINT_INFO_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.point != null && message.hasOwnProperty("point"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.point);
                        if (message.kickBackPoint != null && message.hasOwnProperty("kickBackPoint"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.kickBackPoint);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_UPDATE_POINT_INFO_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T
                     * @static
                     * @param {Protocol.Game.Roulette.IGL_TO_UC_UPDATE_POINT_INFO_T} message GL_TO_UC_UPDATE_POINT_INFO_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_UPDATE_POINT_INFO_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_UPDATE_POINT_INFO_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T} GL_TO_UC_UPDATE_POINT_INFO_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_UPDATE_POINT_INFO_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.point = reader.int64();
                                break;
                            case 2:
                                message.kickBackPoint = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_UPDATE_POINT_INFO_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T} GL_TO_UC_UPDATE_POINT_INFO_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_UPDATE_POINT_INFO_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_UPDATE_POINT_INFO_T message.
                     * @function verify
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_UPDATE_POINT_INFO_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.point != null && message.hasOwnProperty("point"))
                            if (!$util.isInteger(message.point) && !(message.point && $util.isInteger(message.point.low) && $util.isInteger(message.point.high)))
                                return "point: integer|Long expected";
                        if (message.kickBackPoint != null && message.hasOwnProperty("kickBackPoint"))
                            if (!$util.isInteger(message.kickBackPoint) && !(message.kickBackPoint && $util.isInteger(message.kickBackPoint.low) && $util.isInteger(message.kickBackPoint.high)))
                                return "kickBackPoint: integer|Long expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_UPDATE_POINT_INFO_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T} GL_TO_UC_UPDATE_POINT_INFO_T
                     */
                    GL_TO_UC_UPDATE_POINT_INFO_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T)
                            return object;
                        var message = new $root.Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T();
                        if (object.point != null)
                            if ($util.Long)
                                (message.point = $util.Long.fromValue(object.point)).unsigned = false;
                            else if (typeof object.point === "string")
                                message.point = parseInt(object.point, 10);
                            else if (typeof object.point === "number")
                                message.point = object.point;
                            else if (typeof object.point === "object")
                                message.point = new $util.LongBits(object.point.low >>> 0, object.point.high >>> 0).toNumber();
                        if (object.kickBackPoint != null)
                            if ($util.Long)
                                (message.kickBackPoint = $util.Long.fromValue(object.kickBackPoint)).unsigned = false;
                            else if (typeof object.kickBackPoint === "string")
                                message.kickBackPoint = parseInt(object.kickBackPoint, 10);
                            else if (typeof object.kickBackPoint === "number")
                                message.kickBackPoint = object.kickBackPoint;
                            else if (typeof object.kickBackPoint === "object")
                                message.kickBackPoint = new $util.LongBits(object.kickBackPoint.low >>> 0, object.kickBackPoint.high >>> 0).toNumber();
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_UPDATE_POINT_INFO_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T
                     * @static
                     * @param {Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T} message GL_TO_UC_UPDATE_POINT_INFO_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_UPDATE_POINT_INFO_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.point = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.point = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.kickBackPoint = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.kickBackPoint = options.longs === String ? "0" : 0;
                        }
                        if (message.point != null && message.hasOwnProperty("point"))
                            if (typeof message.point === "number")
                                object.point = options.longs === String ? String(message.point) : message.point;
                            else
                                object.point = options.longs === String ? $util.Long.prototype.toString.call(message.point) : options.longs === Number ? new $util.LongBits(message.point.low >>> 0, message.point.high >>> 0).toNumber() : message.point;
                        if (message.kickBackPoint != null && message.hasOwnProperty("kickBackPoint"))
                            if (typeof message.kickBackPoint === "number")
                                object.kickBackPoint = options.longs === String ? String(message.kickBackPoint) : message.kickBackPoint;
                            else
                                object.kickBackPoint = options.longs === String ? $util.Long.prototype.toString.call(message.kickBackPoint) : options.longs === Number ? new $util.LongBits(message.kickBackPoint.low >>> 0, message.kickBackPoint.high >>> 0).toNumber() : message.kickBackPoint;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_UPDATE_POINT_INFO_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_UPDATE_POINT_INFO_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_UPDATE_POINT_INFO_T;
                })();
    
                return Roulette;
            })();
    
            return Game;
        })();
    
        return Protocol;
    })();

    return $root;
})(protobuf).Protocol;
