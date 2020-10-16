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
    
            Game.FivePK = (function() {
    
                /**
                 * Namespace FivePK.
                 * @memberof Protocol.Game
                 * @namespace
                 */
                var FivePK = {};
    
                /**
                 * MessageID_FivePK enum.
                 * @name Protocol.Game.FivePK.MessageID_FivePK
                 * @enum {string}
                 * @property {number} MESSAGEID_FIVEPK_DEFAULT=0 MESSAGEID_FIVEPK_DEFAULT value
                 * @property {number} UC_TO_GL_OPEN=10012001 UC_TO_GL_OPEN value
                 * @property {number} UC_TO_GL_HOLD=10012002 UC_TO_GL_HOLD value
                 * @property {number} UC_TO_GL_SCORE=10012003 UC_TO_GL_SCORE value
                 * @property {number} UC_TO_GL_MUCH=10012004 UC_TO_GL_MUCH value
                 * @property {number} UC_TO_GL_STATE_COMPLETED=10012005 UC_TO_GL_STATE_COMPLETED value
                 * @property {number} UC_TO_GL_CHEAT_CODE=10012021 UC_TO_GL_CHEAT_CODE value
                 * @property {number} GL_TO_UC_WAIT=20012001 GL_TO_UC_WAIT value
                 * @property {number} GL_TO_UC_OPEN=20012002 GL_TO_UC_OPEN value
                 * @property {number} GL_TO_UC_HOLD=20012003 GL_TO_UC_HOLD value
                 * @property {number} GL_TO_UC_DG_WAIT=20012004 GL_TO_UC_DG_WAIT value
                 * @property {number} GL_TO_UC_MUCH=20012005 GL_TO_UC_MUCH value
                 * @property {number} GL_TO_UC_CHEAT_CODE=20012021 GL_TO_UC_CHEAT_CODE value
                 * @property {number} GL_TO_UC_INIT_INFO=21012001 GL_TO_UC_INIT_INFO value
                 * @property {number} GL_TO_UC_UPDATE_POINT=21012006 GL_TO_UC_UPDATE_POINT value
                 */
                FivePK.MessageID_FivePK = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "MESSAGEID_FIVEPK_DEFAULT"] = 0;
                    values[valuesById[10012001] = "UC_TO_GL_OPEN"] = 10012001;
                    values[valuesById[10012002] = "UC_TO_GL_HOLD"] = 10012002;
                    values[valuesById[10012003] = "UC_TO_GL_SCORE"] = 10012003;
                    values[valuesById[10012004] = "UC_TO_GL_MUCH"] = 10012004;
                    values[valuesById[10012005] = "UC_TO_GL_STATE_COMPLETED"] = 10012005;
                    values[valuesById[10012021] = "UC_TO_GL_CHEAT_CODE"] = 10012021;
                    values[valuesById[20012001] = "GL_TO_UC_WAIT"] = 20012001;
                    values[valuesById[20012002] = "GL_TO_UC_OPEN"] = 20012002;
                    values[valuesById[20012003] = "GL_TO_UC_HOLD"] = 20012003;
                    values[valuesById[20012004] = "GL_TO_UC_DG_WAIT"] = 20012004;
                    values[valuesById[20012005] = "GL_TO_UC_MUCH"] = 20012005;
                    values[valuesById[20012021] = "GL_TO_UC_CHEAT_CODE"] = 20012021;
                    values[valuesById[21012001] = "GL_TO_UC_INIT_INFO"] = 21012001;
                    values[valuesById[21012006] = "GL_TO_UC_UPDATE_POINT"] = 21012006;
                    return values;
                })();
    
                FivePK.UC_TO_GL_OPEN_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_OPEN_T.
                     * @memberof Protocol.Game.FivePK
                     * @interface IUC_TO_GL_OPEN_T
                     * @property {number|Long|null} [llTotalBet] UC_TO_GL_OPEN_T llTotalBet
                     * @property {boolean|null} [bIsAuto] UC_TO_GL_OPEN_T bIsAuto
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_OPEN_T.
                     * @memberof Protocol.Game.FivePK
                     * @classdesc Represents a UC_TO_GL_OPEN_T.
                     * @implements IUC_TO_GL_OPEN_T
                     * @constructor
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_OPEN_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_OPEN_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UC_TO_GL_OPEN_T llTotalBet.
                     * @member {number|Long} llTotalBet
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_OPEN_T
                     * @instance
                     */
                    UC_TO_GL_OPEN_T.prototype.llTotalBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * UC_TO_GL_OPEN_T bIsAuto.
                     * @member {boolean} bIsAuto
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_OPEN_T
                     * @instance
                     */
                    UC_TO_GL_OPEN_T.prototype.bIsAuto = false;
    
                    /**
                     * Creates a new UC_TO_GL_OPEN_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_OPEN_T
                     * @static
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_OPEN_T=} [properties] Properties to set
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_OPEN_T} UC_TO_GL_OPEN_T instance
                     */
                    UC_TO_GL_OPEN_T.create = function create(properties) {
                        return new UC_TO_GL_OPEN_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_OPEN_T message. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_OPEN_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_OPEN_T
                     * @static
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_OPEN_T} message UC_TO_GL_OPEN_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_OPEN_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.llTotalBet != null && message.hasOwnProperty("llTotalBet"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.llTotalBet);
                        if (message.bIsAuto != null && message.hasOwnProperty("bIsAuto"))
                            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.bIsAuto);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_OPEN_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_OPEN_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_OPEN_T
                     * @static
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_OPEN_T} message UC_TO_GL_OPEN_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_OPEN_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_OPEN_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_OPEN_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_OPEN_T} UC_TO_GL_OPEN_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_OPEN_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.FivePK.UC_TO_GL_OPEN_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.llTotalBet = reader.int64();
                                break;
                            case 2:
                                message.bIsAuto = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a UC_TO_GL_OPEN_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_OPEN_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_OPEN_T} UC_TO_GL_OPEN_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_OPEN_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a UC_TO_GL_OPEN_T message.
                     * @function verify
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_OPEN_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_OPEN_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.llTotalBet != null && message.hasOwnProperty("llTotalBet"))
                            if (!$util.isInteger(message.llTotalBet) && !(message.llTotalBet && $util.isInteger(message.llTotalBet.low) && $util.isInteger(message.llTotalBet.high)))
                                return "llTotalBet: integer|Long expected";
                        if (message.bIsAuto != null && message.hasOwnProperty("bIsAuto"))
                            if (typeof message.bIsAuto !== "boolean")
                                return "bIsAuto: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_OPEN_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_OPEN_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_OPEN_T} UC_TO_GL_OPEN_T
                     */
                    UC_TO_GL_OPEN_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.FivePK.UC_TO_GL_OPEN_T)
                            return object;
                        var message = new $root.Protocol.Game.FivePK.UC_TO_GL_OPEN_T();
                        if (object.llTotalBet != null)
                            if ($util.Long)
                                (message.llTotalBet = $util.Long.fromValue(object.llTotalBet)).unsigned = false;
                            else if (typeof object.llTotalBet === "string")
                                message.llTotalBet = parseInt(object.llTotalBet, 10);
                            else if (typeof object.llTotalBet === "number")
                                message.llTotalBet = object.llTotalBet;
                            else if (typeof object.llTotalBet === "object")
                                message.llTotalBet = new $util.LongBits(object.llTotalBet.low >>> 0, object.llTotalBet.high >>> 0).toNumber();
                        if (object.bIsAuto != null)
                            message.bIsAuto = Boolean(object.bIsAuto);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_OPEN_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_OPEN_T
                     * @static
                     * @param {Protocol.Game.FivePK.UC_TO_GL_OPEN_T} message UC_TO_GL_OPEN_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_OPEN_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.llTotalBet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.llTotalBet = options.longs === String ? "0" : 0;
                            object.bIsAuto = false;
                        }
                        if (message.llTotalBet != null && message.hasOwnProperty("llTotalBet"))
                            if (typeof message.llTotalBet === "number")
                                object.llTotalBet = options.longs === String ? String(message.llTotalBet) : message.llTotalBet;
                            else
                                object.llTotalBet = options.longs === String ? $util.Long.prototype.toString.call(message.llTotalBet) : options.longs === Number ? new $util.LongBits(message.llTotalBet.low >>> 0, message.llTotalBet.high >>> 0).toNumber() : message.llTotalBet;
                        if (message.bIsAuto != null && message.hasOwnProperty("bIsAuto"))
                            object.bIsAuto = message.bIsAuto;
                        return object;
                    };
    
                    /**
                     * Converts this UC_TO_GL_OPEN_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_OPEN_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_OPEN_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_OPEN_T;
                })();
    
                FivePK.UC_TO_GL_HOLD_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_HOLD_T.
                     * @memberof Protocol.Game.FivePK
                     * @interface IUC_TO_GL_HOLD_T
                     * @property {Array.<number>|null} [holdArr] UC_TO_GL_HOLD_T holdArr
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_HOLD_T.
                     * @memberof Protocol.Game.FivePK
                     * @classdesc Represents a UC_TO_GL_HOLD_T.
                     * @implements IUC_TO_GL_HOLD_T
                     * @constructor
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_HOLD_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_HOLD_T(properties) {
                        this.holdArr = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UC_TO_GL_HOLD_T holdArr.
                     * @member {Array.<number>} holdArr
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_HOLD_T
                     * @instance
                     */
                    UC_TO_GL_HOLD_T.prototype.holdArr = $util.emptyArray;
    
                    /**
                     * Creates a new UC_TO_GL_HOLD_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_HOLD_T
                     * @static
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_HOLD_T=} [properties] Properties to set
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_HOLD_T} UC_TO_GL_HOLD_T instance
                     */
                    UC_TO_GL_HOLD_T.create = function create(properties) {
                        return new UC_TO_GL_HOLD_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_HOLD_T message. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_HOLD_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_HOLD_T
                     * @static
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_HOLD_T} message UC_TO_GL_HOLD_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_HOLD_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.holdArr != null && message.holdArr.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.holdArr.length; ++i)
                                writer.int32(message.holdArr[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_HOLD_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_HOLD_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_HOLD_T
                     * @static
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_HOLD_T} message UC_TO_GL_HOLD_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_HOLD_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_HOLD_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_HOLD_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_HOLD_T} UC_TO_GL_HOLD_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_HOLD_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.FivePK.UC_TO_GL_HOLD_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.holdArr && message.holdArr.length))
                                    message.holdArr = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.holdArr.push(reader.int32());
                                } else
                                    message.holdArr.push(reader.int32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a UC_TO_GL_HOLD_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_HOLD_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_HOLD_T} UC_TO_GL_HOLD_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_HOLD_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a UC_TO_GL_HOLD_T message.
                     * @function verify
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_HOLD_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_HOLD_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.holdArr != null && message.hasOwnProperty("holdArr")) {
                            if (!Array.isArray(message.holdArr))
                                return "holdArr: array expected";
                            for (var i = 0; i < message.holdArr.length; ++i)
                                if (!$util.isInteger(message.holdArr[i]))
                                    return "holdArr: integer[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_HOLD_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_HOLD_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_HOLD_T} UC_TO_GL_HOLD_T
                     */
                    UC_TO_GL_HOLD_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.FivePK.UC_TO_GL_HOLD_T)
                            return object;
                        var message = new $root.Protocol.Game.FivePK.UC_TO_GL_HOLD_T();
                        if (object.holdArr) {
                            if (!Array.isArray(object.holdArr))
                                throw TypeError(".Protocol.Game.FivePK.UC_TO_GL_HOLD_T.holdArr: array expected");
                            message.holdArr = [];
                            for (var i = 0; i < object.holdArr.length; ++i)
                                message.holdArr[i] = object.holdArr[i] | 0;
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_HOLD_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_HOLD_T
                     * @static
                     * @param {Protocol.Game.FivePK.UC_TO_GL_HOLD_T} message UC_TO_GL_HOLD_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_HOLD_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.holdArr = [];
                        if (message.holdArr && message.holdArr.length) {
                            object.holdArr = [];
                            for (var j = 0; j < message.holdArr.length; ++j)
                                object.holdArr[j] = message.holdArr[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this UC_TO_GL_HOLD_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_HOLD_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_HOLD_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_HOLD_T;
                })();
    
                FivePK.UC_TO_GL_SCORE_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_SCORE_T.
                     * @memberof Protocol.Game.FivePK
                     * @interface IUC_TO_GL_SCORE_T
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_SCORE_T.
                     * @memberof Protocol.Game.FivePK
                     * @classdesc Represents a UC_TO_GL_SCORE_T.
                     * @implements IUC_TO_GL_SCORE_T
                     * @constructor
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_SCORE_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_SCORE_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Creates a new UC_TO_GL_SCORE_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_SCORE_T
                     * @static
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_SCORE_T=} [properties] Properties to set
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_SCORE_T} UC_TO_GL_SCORE_T instance
                     */
                    UC_TO_GL_SCORE_T.create = function create(properties) {
                        return new UC_TO_GL_SCORE_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_SCORE_T message. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_SCORE_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_SCORE_T
                     * @static
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_SCORE_T} message UC_TO_GL_SCORE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_SCORE_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_SCORE_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_SCORE_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_SCORE_T
                     * @static
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_SCORE_T} message UC_TO_GL_SCORE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_SCORE_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_SCORE_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_SCORE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_SCORE_T} UC_TO_GL_SCORE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_SCORE_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.FivePK.UC_TO_GL_SCORE_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a UC_TO_GL_SCORE_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_SCORE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_SCORE_T} UC_TO_GL_SCORE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_SCORE_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a UC_TO_GL_SCORE_T message.
                     * @function verify
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_SCORE_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_SCORE_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_SCORE_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_SCORE_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_SCORE_T} UC_TO_GL_SCORE_T
                     */
                    UC_TO_GL_SCORE_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.FivePK.UC_TO_GL_SCORE_T)
                            return object;
                        return new $root.Protocol.Game.FivePK.UC_TO_GL_SCORE_T();
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_SCORE_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_SCORE_T
                     * @static
                     * @param {Protocol.Game.FivePK.UC_TO_GL_SCORE_T} message UC_TO_GL_SCORE_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_SCORE_T.toObject = function toObject() {
                        return {};
                    };
    
                    /**
                     * Converts this UC_TO_GL_SCORE_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_SCORE_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_SCORE_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_SCORE_T;
                })();
    
                FivePK.UC_TO_GL_MUCH_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_MUCH_T.
                     * @memberof Protocol.Game.FivePK
                     * @interface IUC_TO_GL_MUCH_T
                     * @property {Array.<number>|null} [holdArr] UC_TO_GL_MUCH_T holdArr
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_MUCH_T.
                     * @memberof Protocol.Game.FivePK
                     * @classdesc Represents a UC_TO_GL_MUCH_T.
                     * @implements IUC_TO_GL_MUCH_T
                     * @constructor
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_MUCH_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_MUCH_T(properties) {
                        this.holdArr = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UC_TO_GL_MUCH_T holdArr.
                     * @member {Array.<number>} holdArr
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_MUCH_T
                     * @instance
                     */
                    UC_TO_GL_MUCH_T.prototype.holdArr = $util.emptyArray;
    
                    /**
                     * Creates a new UC_TO_GL_MUCH_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_MUCH_T
                     * @static
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_MUCH_T=} [properties] Properties to set
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_MUCH_T} UC_TO_GL_MUCH_T instance
                     */
                    UC_TO_GL_MUCH_T.create = function create(properties) {
                        return new UC_TO_GL_MUCH_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_MUCH_T message. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_MUCH_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_MUCH_T
                     * @static
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_MUCH_T} message UC_TO_GL_MUCH_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_MUCH_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.holdArr != null && message.holdArr.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.holdArr.length; ++i)
                                writer.int32(message.holdArr[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_MUCH_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_MUCH_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_MUCH_T
                     * @static
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_MUCH_T} message UC_TO_GL_MUCH_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_MUCH_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_MUCH_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_MUCH_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_MUCH_T} UC_TO_GL_MUCH_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_MUCH_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.FivePK.UC_TO_GL_MUCH_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.holdArr && message.holdArr.length))
                                    message.holdArr = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.holdArr.push(reader.int32());
                                } else
                                    message.holdArr.push(reader.int32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a UC_TO_GL_MUCH_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_MUCH_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_MUCH_T} UC_TO_GL_MUCH_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_MUCH_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a UC_TO_GL_MUCH_T message.
                     * @function verify
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_MUCH_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_MUCH_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.holdArr != null && message.hasOwnProperty("holdArr")) {
                            if (!Array.isArray(message.holdArr))
                                return "holdArr: array expected";
                            for (var i = 0; i < message.holdArr.length; ++i)
                                if (!$util.isInteger(message.holdArr[i]))
                                    return "holdArr: integer[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_MUCH_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_MUCH_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_MUCH_T} UC_TO_GL_MUCH_T
                     */
                    UC_TO_GL_MUCH_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.FivePK.UC_TO_GL_MUCH_T)
                            return object;
                        var message = new $root.Protocol.Game.FivePK.UC_TO_GL_MUCH_T();
                        if (object.holdArr) {
                            if (!Array.isArray(object.holdArr))
                                throw TypeError(".Protocol.Game.FivePK.UC_TO_GL_MUCH_T.holdArr: array expected");
                            message.holdArr = [];
                            for (var i = 0; i < object.holdArr.length; ++i)
                                message.holdArr[i] = object.holdArr[i] | 0;
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_MUCH_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_MUCH_T
                     * @static
                     * @param {Protocol.Game.FivePK.UC_TO_GL_MUCH_T} message UC_TO_GL_MUCH_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_MUCH_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.holdArr = [];
                        if (message.holdArr && message.holdArr.length) {
                            object.holdArr = [];
                            for (var j = 0; j < message.holdArr.length; ++j)
                                object.holdArr[j] = message.holdArr[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this UC_TO_GL_MUCH_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_MUCH_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_MUCH_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_MUCH_T;
                })();
    
                FivePK.UC_TO_GL_STATE_COMPLETED_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_STATE_COMPLETED_T.
                     * @memberof Protocol.Game.FivePK
                     * @interface IUC_TO_GL_STATE_COMPLETED_T
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_STATE_COMPLETED_T.
                     * @memberof Protocol.Game.FivePK
                     * @classdesc Represents a UC_TO_GL_STATE_COMPLETED_T.
                     * @implements IUC_TO_GL_STATE_COMPLETED_T
                     * @constructor
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_STATE_COMPLETED_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_STATE_COMPLETED_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Creates a new UC_TO_GL_STATE_COMPLETED_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T
                     * @static
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_STATE_COMPLETED_T=} [properties] Properties to set
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T} UC_TO_GL_STATE_COMPLETED_T instance
                     */
                    UC_TO_GL_STATE_COMPLETED_T.create = function create(properties) {
                        return new UC_TO_GL_STATE_COMPLETED_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_STATE_COMPLETED_T message. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T
                     * @static
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_STATE_COMPLETED_T} message UC_TO_GL_STATE_COMPLETED_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_STATE_COMPLETED_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_STATE_COMPLETED_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T
                     * @static
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_STATE_COMPLETED_T} message UC_TO_GL_STATE_COMPLETED_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_STATE_COMPLETED_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_STATE_COMPLETED_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T} UC_TO_GL_STATE_COMPLETED_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_STATE_COMPLETED_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a UC_TO_GL_STATE_COMPLETED_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T} UC_TO_GL_STATE_COMPLETED_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_STATE_COMPLETED_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a UC_TO_GL_STATE_COMPLETED_T message.
                     * @function verify
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_STATE_COMPLETED_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_STATE_COMPLETED_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T} UC_TO_GL_STATE_COMPLETED_T
                     */
                    UC_TO_GL_STATE_COMPLETED_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T)
                            return object;
                        return new $root.Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T();
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_STATE_COMPLETED_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T
                     * @static
                     * @param {Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T} message UC_TO_GL_STATE_COMPLETED_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_STATE_COMPLETED_T.toObject = function toObject() {
                        return {};
                    };
    
                    /**
                     * Converts this UC_TO_GL_STATE_COMPLETED_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_STATE_COMPLETED_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_STATE_COMPLETED_T;
                })();
    
                FivePK.UC_TO_GL_CHEAT_CODE_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_CHEAT_CODE_T.
                     * @memberof Protocol.Game.FivePK
                     * @interface IUC_TO_GL_CHEAT_CODE_T
                     * @property {string|null} [command] UC_TO_GL_CHEAT_CODE_T command
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_CHEAT_CODE_T.
                     * @memberof Protocol.Game.FivePK
                     * @classdesc Represents a UC_TO_GL_CHEAT_CODE_T.
                     * @implements IUC_TO_GL_CHEAT_CODE_T
                     * @constructor
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_CHEAT_CODE_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_CHEAT_CODE_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UC_TO_GL_CHEAT_CODE_T command.
                     * @member {string} command
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T
                     * @instance
                     */
                    UC_TO_GL_CHEAT_CODE_T.prototype.command = "";
    
                    /**
                     * Creates a new UC_TO_GL_CHEAT_CODE_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T
                     * @static
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_CHEAT_CODE_T=} [properties] Properties to set
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T} UC_TO_GL_CHEAT_CODE_T instance
                     */
                    UC_TO_GL_CHEAT_CODE_T.create = function create(properties) {
                        return new UC_TO_GL_CHEAT_CODE_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_CHEAT_CODE_T message. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T
                     * @static
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_CHEAT_CODE_T} message UC_TO_GL_CHEAT_CODE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_CHEAT_CODE_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.command != null && message.hasOwnProperty("command"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.command);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_CHEAT_CODE_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T
                     * @static
                     * @param {Protocol.Game.FivePK.IUC_TO_GL_CHEAT_CODE_T} message UC_TO_GL_CHEAT_CODE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_CHEAT_CODE_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_CHEAT_CODE_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T} UC_TO_GL_CHEAT_CODE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_CHEAT_CODE_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.command = reader.string();
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
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T} UC_TO_GL_CHEAT_CODE_T
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
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_CHEAT_CODE_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.command != null && message.hasOwnProperty("command"))
                            if (!$util.isString(message.command))
                                return "command: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_CHEAT_CODE_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T} UC_TO_GL_CHEAT_CODE_T
                     */
                    UC_TO_GL_CHEAT_CODE_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T)
                            return object;
                        var message = new $root.Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T();
                        if (object.command != null)
                            message.command = String(object.command);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_CHEAT_CODE_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T
                     * @static
                     * @param {Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T} message UC_TO_GL_CHEAT_CODE_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_CHEAT_CODE_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.command = "";
                        if (message.command != null && message.hasOwnProperty("command"))
                            object.command = message.command;
                        return object;
                    };
    
                    /**
                     * Converts this UC_TO_GL_CHEAT_CODE_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_CHEAT_CODE_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_CHEAT_CODE_T;
                })();
    
                FivePK.GL_TO_UC_WAIT_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_WAIT_T.
                     * @memberof Protocol.Game.FivePK
                     * @interface IGL_TO_UC_WAIT_T
                     * @property {number|Long|null} [llCrd] GL_TO_UC_WAIT_T llCrd
                     * @property {number|Long|null} [kickPoint] GL_TO_UC_WAIT_T kickPoint
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_WAIT_T.
                     * @memberof Protocol.Game.FivePK
                     * @classdesc Represents a GL_TO_UC_WAIT_T.
                     * @implements IGL_TO_UC_WAIT_T
                     * @constructor
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_WAIT_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_WAIT_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_WAIT_T llCrd.
                     * @member {number|Long} llCrd
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_WAIT_T
                     * @instance
                     */
                    GL_TO_UC_WAIT_T.prototype.llCrd = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_WAIT_T kickPoint.
                     * @member {number|Long} kickPoint
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_WAIT_T
                     * @instance
                     */
                    GL_TO_UC_WAIT_T.prototype.kickPoint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * Creates a new GL_TO_UC_WAIT_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_WAIT_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_WAIT_T=} [properties] Properties to set
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_WAIT_T} GL_TO_UC_WAIT_T instance
                     */
                    GL_TO_UC_WAIT_T.create = function create(properties) {
                        return new GL_TO_UC_WAIT_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_WAIT_T message. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_WAIT_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_WAIT_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_WAIT_T} message GL_TO_UC_WAIT_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_WAIT_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.llCrd != null && message.hasOwnProperty("llCrd"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.llCrd);
                        if (message.kickPoint != null && message.hasOwnProperty("kickPoint"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.kickPoint);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_WAIT_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_WAIT_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_WAIT_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_WAIT_T} message GL_TO_UC_WAIT_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_WAIT_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_WAIT_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_WAIT_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_WAIT_T} GL_TO_UC_WAIT_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_WAIT_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.FivePK.GL_TO_UC_WAIT_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.llCrd = reader.int64();
                                break;
                            case 2:
                                message.kickPoint = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_WAIT_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_WAIT_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_WAIT_T} GL_TO_UC_WAIT_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_WAIT_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_WAIT_T message.
                     * @function verify
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_WAIT_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_WAIT_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.llCrd != null && message.hasOwnProperty("llCrd"))
                            if (!$util.isInteger(message.llCrd) && !(message.llCrd && $util.isInteger(message.llCrd.low) && $util.isInteger(message.llCrd.high)))
                                return "llCrd: integer|Long expected";
                        if (message.kickPoint != null && message.hasOwnProperty("kickPoint"))
                            if (!$util.isInteger(message.kickPoint) && !(message.kickPoint && $util.isInteger(message.kickPoint.low) && $util.isInteger(message.kickPoint.high)))
                                return "kickPoint: integer|Long expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_WAIT_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_WAIT_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_WAIT_T} GL_TO_UC_WAIT_T
                     */
                    GL_TO_UC_WAIT_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.FivePK.GL_TO_UC_WAIT_T)
                            return object;
                        var message = new $root.Protocol.Game.FivePK.GL_TO_UC_WAIT_T();
                        if (object.llCrd != null)
                            if ($util.Long)
                                (message.llCrd = $util.Long.fromValue(object.llCrd)).unsigned = false;
                            else if (typeof object.llCrd === "string")
                                message.llCrd = parseInt(object.llCrd, 10);
                            else if (typeof object.llCrd === "number")
                                message.llCrd = object.llCrd;
                            else if (typeof object.llCrd === "object")
                                message.llCrd = new $util.LongBits(object.llCrd.low >>> 0, object.llCrd.high >>> 0).toNumber();
                        if (object.kickPoint != null)
                            if ($util.Long)
                                (message.kickPoint = $util.Long.fromValue(object.kickPoint)).unsigned = false;
                            else if (typeof object.kickPoint === "string")
                                message.kickPoint = parseInt(object.kickPoint, 10);
                            else if (typeof object.kickPoint === "number")
                                message.kickPoint = object.kickPoint;
                            else if (typeof object.kickPoint === "object")
                                message.kickPoint = new $util.LongBits(object.kickPoint.low >>> 0, object.kickPoint.high >>> 0).toNumber();
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_WAIT_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_WAIT_T
                     * @static
                     * @param {Protocol.Game.FivePK.GL_TO_UC_WAIT_T} message GL_TO_UC_WAIT_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_WAIT_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.llCrd = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.llCrd = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.kickPoint = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.kickPoint = options.longs === String ? "0" : 0;
                        }
                        if (message.llCrd != null && message.hasOwnProperty("llCrd"))
                            if (typeof message.llCrd === "number")
                                object.llCrd = options.longs === String ? String(message.llCrd) : message.llCrd;
                            else
                                object.llCrd = options.longs === String ? $util.Long.prototype.toString.call(message.llCrd) : options.longs === Number ? new $util.LongBits(message.llCrd.low >>> 0, message.llCrd.high >>> 0).toNumber() : message.llCrd;
                        if (message.kickPoint != null && message.hasOwnProperty("kickPoint"))
                            if (typeof message.kickPoint === "number")
                                object.kickPoint = options.longs === String ? String(message.kickPoint) : message.kickPoint;
                            else
                                object.kickPoint = options.longs === String ? $util.Long.prototype.toString.call(message.kickPoint) : options.longs === Number ? new $util.LongBits(message.kickPoint.low >>> 0, message.kickPoint.high >>> 0).toNumber() : message.kickPoint;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_WAIT_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_WAIT_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_WAIT_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_WAIT_T;
                })();
    
                FivePK.GL_TO_UC_OPEN_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_OPEN_T.
                     * @memberof Protocol.Game.FivePK
                     * @interface IGL_TO_UC_OPEN_T
                     * @property {number|null} [resultCode] GL_TO_UC_OPEN_T resultCode
                     * @property {number|Long|null} [llCrd] GL_TO_UC_OPEN_T llCrd
                     * @property {Array.<number>|null} [cardArr] GL_TO_UC_OPEN_T cardArr
                     * @property {Array.<number>|null} [holdArr] GL_TO_UC_OPEN_T holdArr
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_OPEN_T.
                     * @memberof Protocol.Game.FivePK
                     * @classdesc Represents a GL_TO_UC_OPEN_T.
                     * @implements IGL_TO_UC_OPEN_T
                     * @constructor
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_OPEN_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_OPEN_T(properties) {
                        this.cardArr = [];
                        this.holdArr = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_OPEN_T resultCode.
                     * @member {number} resultCode
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_OPEN_T
                     * @instance
                     */
                    GL_TO_UC_OPEN_T.prototype.resultCode = 0;
    
                    /**
                     * GL_TO_UC_OPEN_T llCrd.
                     * @member {number|Long} llCrd
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_OPEN_T
                     * @instance
                     */
                    GL_TO_UC_OPEN_T.prototype.llCrd = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_OPEN_T cardArr.
                     * @member {Array.<number>} cardArr
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_OPEN_T
                     * @instance
                     */
                    GL_TO_UC_OPEN_T.prototype.cardArr = $util.emptyArray;
    
                    /**
                     * GL_TO_UC_OPEN_T holdArr.
                     * @member {Array.<number>} holdArr
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_OPEN_T
                     * @instance
                     */
                    GL_TO_UC_OPEN_T.prototype.holdArr = $util.emptyArray;
    
                    /**
                     * Creates a new GL_TO_UC_OPEN_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_OPEN_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_OPEN_T=} [properties] Properties to set
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_OPEN_T} GL_TO_UC_OPEN_T instance
                     */
                    GL_TO_UC_OPEN_T.create = function create(properties) {
                        return new GL_TO_UC_OPEN_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_OPEN_T message. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_OPEN_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_OPEN_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_OPEN_T} message GL_TO_UC_OPEN_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_OPEN_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.resultCode);
                        if (message.llCrd != null && message.hasOwnProperty("llCrd"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.llCrd);
                        if (message.cardArr != null && message.cardArr.length) {
                            writer.uint32(/* id 3, wireType 2 =*/26).fork();
                            for (var i = 0; i < message.cardArr.length; ++i)
                                writer.int32(message.cardArr[i]);
                            writer.ldelim();
                        }
                        if (message.holdArr != null && message.holdArr.length) {
                            writer.uint32(/* id 4, wireType 2 =*/34).fork();
                            for (var i = 0; i < message.holdArr.length; ++i)
                                writer.int32(message.holdArr[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_OPEN_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_OPEN_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_OPEN_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_OPEN_T} message GL_TO_UC_OPEN_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_OPEN_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_OPEN_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_OPEN_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_OPEN_T} GL_TO_UC_OPEN_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_OPEN_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.FivePK.GL_TO_UC_OPEN_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.resultCode = reader.int32();
                                break;
                            case 2:
                                message.llCrd = reader.int64();
                                break;
                            case 3:
                                if (!(message.cardArr && message.cardArr.length))
                                    message.cardArr = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.cardArr.push(reader.int32());
                                } else
                                    message.cardArr.push(reader.int32());
                                break;
                            case 4:
                                if (!(message.holdArr && message.holdArr.length))
                                    message.holdArr = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.holdArr.push(reader.int32());
                                } else
                                    message.holdArr.push(reader.int32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_OPEN_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_OPEN_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_OPEN_T} GL_TO_UC_OPEN_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_OPEN_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_OPEN_T message.
                     * @function verify
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_OPEN_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_OPEN_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            if (!$util.isInteger(message.resultCode))
                                return "resultCode: integer expected";
                        if (message.llCrd != null && message.hasOwnProperty("llCrd"))
                            if (!$util.isInteger(message.llCrd) && !(message.llCrd && $util.isInteger(message.llCrd.low) && $util.isInteger(message.llCrd.high)))
                                return "llCrd: integer|Long expected";
                        if (message.cardArr != null && message.hasOwnProperty("cardArr")) {
                            if (!Array.isArray(message.cardArr))
                                return "cardArr: array expected";
                            for (var i = 0; i < message.cardArr.length; ++i)
                                if (!$util.isInteger(message.cardArr[i]))
                                    return "cardArr: integer[] expected";
                        }
                        if (message.holdArr != null && message.hasOwnProperty("holdArr")) {
                            if (!Array.isArray(message.holdArr))
                                return "holdArr: array expected";
                            for (var i = 0; i < message.holdArr.length; ++i)
                                if (!$util.isInteger(message.holdArr[i]))
                                    return "holdArr: integer[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_OPEN_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_OPEN_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_OPEN_T} GL_TO_UC_OPEN_T
                     */
                    GL_TO_UC_OPEN_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.FivePK.GL_TO_UC_OPEN_T)
                            return object;
                        var message = new $root.Protocol.Game.FivePK.GL_TO_UC_OPEN_T();
                        if (object.resultCode != null)
                            message.resultCode = object.resultCode | 0;
                        if (object.llCrd != null)
                            if ($util.Long)
                                (message.llCrd = $util.Long.fromValue(object.llCrd)).unsigned = false;
                            else if (typeof object.llCrd === "string")
                                message.llCrd = parseInt(object.llCrd, 10);
                            else if (typeof object.llCrd === "number")
                                message.llCrd = object.llCrd;
                            else if (typeof object.llCrd === "object")
                                message.llCrd = new $util.LongBits(object.llCrd.low >>> 0, object.llCrd.high >>> 0).toNumber();
                        if (object.cardArr) {
                            if (!Array.isArray(object.cardArr))
                                throw TypeError(".Protocol.Game.FivePK.GL_TO_UC_OPEN_T.cardArr: array expected");
                            message.cardArr = [];
                            for (var i = 0; i < object.cardArr.length; ++i)
                                message.cardArr[i] = object.cardArr[i] | 0;
                        }
                        if (object.holdArr) {
                            if (!Array.isArray(object.holdArr))
                                throw TypeError(".Protocol.Game.FivePK.GL_TO_UC_OPEN_T.holdArr: array expected");
                            message.holdArr = [];
                            for (var i = 0; i < object.holdArr.length; ++i)
                                message.holdArr[i] = object.holdArr[i] | 0;
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_OPEN_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_OPEN_T
                     * @static
                     * @param {Protocol.Game.FivePK.GL_TO_UC_OPEN_T} message GL_TO_UC_OPEN_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_OPEN_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.cardArr = [];
                            object.holdArr = [];
                        }
                        if (options.defaults) {
                            object.resultCode = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.llCrd = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.llCrd = options.longs === String ? "0" : 0;
                        }
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            object.resultCode = message.resultCode;
                        if (message.llCrd != null && message.hasOwnProperty("llCrd"))
                            if (typeof message.llCrd === "number")
                                object.llCrd = options.longs === String ? String(message.llCrd) : message.llCrd;
                            else
                                object.llCrd = options.longs === String ? $util.Long.prototype.toString.call(message.llCrd) : options.longs === Number ? new $util.LongBits(message.llCrd.low >>> 0, message.llCrd.high >>> 0).toNumber() : message.llCrd;
                        if (message.cardArr && message.cardArr.length) {
                            object.cardArr = [];
                            for (var j = 0; j < message.cardArr.length; ++j)
                                object.cardArr[j] = message.cardArr[j];
                        }
                        if (message.holdArr && message.holdArr.length) {
                            object.holdArr = [];
                            for (var j = 0; j < message.holdArr.length; ++j)
                                object.holdArr[j] = message.holdArr[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_OPEN_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_OPEN_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_OPEN_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_OPEN_T;
                })();
    
                FivePK.GL_TO_UC_HOLD_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_HOLD_T.
                     * @memberof Protocol.Game.FivePK
                     * @interface IGL_TO_UC_HOLD_T
                     * @property {number|Long|null} [llCrd] GL_TO_UC_HOLD_T llCrd
                     * @property {number|Long|null} [llWin] GL_TO_UC_HOLD_T llWin
                     * @property {Array.<number>|null} [cardArr] GL_TO_UC_HOLD_T cardArr
                     * @property {Array.<number>|null} [holdArr] GL_TO_UC_HOLD_T holdArr
                     * @property {number|null} [winBool] GL_TO_UC_HOLD_T winBool
                     * @property {number|null} [winType] GL_TO_UC_HOLD_T winType
                     * @property {number|null} [JPType] GL_TO_UC_HOLD_T JPType
                     * @property {number|Long|null} [llJPWin] GL_TO_UC_HOLD_T llJPWin
                     * @property {number|Long|null} [llJPBefore] GL_TO_UC_HOLD_T llJPBefore
                     * @property {number|Long|null} [llJPAfter] GL_TO_UC_HOLD_T llJPAfter
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_HOLD_T.
                     * @memberof Protocol.Game.FivePK
                     * @classdesc Represents a GL_TO_UC_HOLD_T.
                     * @implements IGL_TO_UC_HOLD_T
                     * @constructor
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_HOLD_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_HOLD_T(properties) {
                        this.cardArr = [];
                        this.holdArr = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_HOLD_T llCrd.
                     * @member {number|Long} llCrd
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_HOLD_T
                     * @instance
                     */
                    GL_TO_UC_HOLD_T.prototype.llCrd = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_HOLD_T llWin.
                     * @member {number|Long} llWin
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_HOLD_T
                     * @instance
                     */
                    GL_TO_UC_HOLD_T.prototype.llWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_HOLD_T cardArr.
                     * @member {Array.<number>} cardArr
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_HOLD_T
                     * @instance
                     */
                    GL_TO_UC_HOLD_T.prototype.cardArr = $util.emptyArray;
    
                    /**
                     * GL_TO_UC_HOLD_T holdArr.
                     * @member {Array.<number>} holdArr
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_HOLD_T
                     * @instance
                     */
                    GL_TO_UC_HOLD_T.prototype.holdArr = $util.emptyArray;
    
                    /**
                     * GL_TO_UC_HOLD_T winBool.
                     * @member {number} winBool
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_HOLD_T
                     * @instance
                     */
                    GL_TO_UC_HOLD_T.prototype.winBool = 0;
    
                    /**
                     * GL_TO_UC_HOLD_T winType.
                     * @member {number} winType
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_HOLD_T
                     * @instance
                     */
                    GL_TO_UC_HOLD_T.prototype.winType = 0;
    
                    /**
                     * GL_TO_UC_HOLD_T JPType.
                     * @member {number} JPType
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_HOLD_T
                     * @instance
                     */
                    GL_TO_UC_HOLD_T.prototype.JPType = 0;
    
                    /**
                     * GL_TO_UC_HOLD_T llJPWin.
                     * @member {number|Long} llJPWin
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_HOLD_T
                     * @instance
                     */
                    GL_TO_UC_HOLD_T.prototype.llJPWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_HOLD_T llJPBefore.
                     * @member {number|Long} llJPBefore
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_HOLD_T
                     * @instance
                     */
                    GL_TO_UC_HOLD_T.prototype.llJPBefore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_HOLD_T llJPAfter.
                     * @member {number|Long} llJPAfter
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_HOLD_T
                     * @instance
                     */
                    GL_TO_UC_HOLD_T.prototype.llJPAfter = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * Creates a new GL_TO_UC_HOLD_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_HOLD_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_HOLD_T=} [properties] Properties to set
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_HOLD_T} GL_TO_UC_HOLD_T instance
                     */
                    GL_TO_UC_HOLD_T.create = function create(properties) {
                        return new GL_TO_UC_HOLD_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_HOLD_T message. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_HOLD_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_HOLD_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_HOLD_T} message GL_TO_UC_HOLD_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_HOLD_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.llCrd != null && message.hasOwnProperty("llCrd"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.llCrd);
                        if (message.llWin != null && message.hasOwnProperty("llWin"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.llWin);
                        if (message.cardArr != null && message.cardArr.length) {
                            writer.uint32(/* id 3, wireType 2 =*/26).fork();
                            for (var i = 0; i < message.cardArr.length; ++i)
                                writer.int32(message.cardArr[i]);
                            writer.ldelim();
                        }
                        if (message.holdArr != null && message.holdArr.length) {
                            writer.uint32(/* id 4, wireType 2 =*/34).fork();
                            for (var i = 0; i < message.holdArr.length; ++i)
                                writer.int32(message.holdArr[i]);
                            writer.ldelim();
                        }
                        if (message.winBool != null && message.hasOwnProperty("winBool"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.winBool);
                        if (message.winType != null && message.hasOwnProperty("winType"))
                            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.winType);
                        if (message.JPType != null && message.hasOwnProperty("JPType"))
                            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.JPType);
                        if (message.llJPWin != null && message.hasOwnProperty("llJPWin"))
                            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.llJPWin);
                        if (message.llJPBefore != null && message.hasOwnProperty("llJPBefore"))
                            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.llJPBefore);
                        if (message.llJPAfter != null && message.hasOwnProperty("llJPAfter"))
                            writer.uint32(/* id 10, wireType 0 =*/80).int64(message.llJPAfter);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_HOLD_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_HOLD_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_HOLD_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_HOLD_T} message GL_TO_UC_HOLD_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_HOLD_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_HOLD_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_HOLD_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_HOLD_T} GL_TO_UC_HOLD_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_HOLD_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.FivePK.GL_TO_UC_HOLD_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.llCrd = reader.int64();
                                break;
                            case 2:
                                message.llWin = reader.int64();
                                break;
                            case 3:
                                if (!(message.cardArr && message.cardArr.length))
                                    message.cardArr = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.cardArr.push(reader.int32());
                                } else
                                    message.cardArr.push(reader.int32());
                                break;
                            case 4:
                                if (!(message.holdArr && message.holdArr.length))
                                    message.holdArr = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.holdArr.push(reader.int32());
                                } else
                                    message.holdArr.push(reader.int32());
                                break;
                            case 5:
                                message.winBool = reader.int32();
                                break;
                            case 6:
                                message.winType = reader.int32();
                                break;
                            case 7:
                                message.JPType = reader.int32();
                                break;
                            case 8:
                                message.llJPWin = reader.int64();
                                break;
                            case 9:
                                message.llJPBefore = reader.int64();
                                break;
                            case 10:
                                message.llJPAfter = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_HOLD_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_HOLD_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_HOLD_T} GL_TO_UC_HOLD_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_HOLD_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_HOLD_T message.
                     * @function verify
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_HOLD_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_HOLD_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.llCrd != null && message.hasOwnProperty("llCrd"))
                            if (!$util.isInteger(message.llCrd) && !(message.llCrd && $util.isInteger(message.llCrd.low) && $util.isInteger(message.llCrd.high)))
                                return "llCrd: integer|Long expected";
                        if (message.llWin != null && message.hasOwnProperty("llWin"))
                            if (!$util.isInteger(message.llWin) && !(message.llWin && $util.isInteger(message.llWin.low) && $util.isInteger(message.llWin.high)))
                                return "llWin: integer|Long expected";
                        if (message.cardArr != null && message.hasOwnProperty("cardArr")) {
                            if (!Array.isArray(message.cardArr))
                                return "cardArr: array expected";
                            for (var i = 0; i < message.cardArr.length; ++i)
                                if (!$util.isInteger(message.cardArr[i]))
                                    return "cardArr: integer[] expected";
                        }
                        if (message.holdArr != null && message.hasOwnProperty("holdArr")) {
                            if (!Array.isArray(message.holdArr))
                                return "holdArr: array expected";
                            for (var i = 0; i < message.holdArr.length; ++i)
                                if (!$util.isInteger(message.holdArr[i]))
                                    return "holdArr: integer[] expected";
                        }
                        if (message.winBool != null && message.hasOwnProperty("winBool"))
                            if (!$util.isInteger(message.winBool))
                                return "winBool: integer expected";
                        if (message.winType != null && message.hasOwnProperty("winType"))
                            if (!$util.isInteger(message.winType))
                                return "winType: integer expected";
                        if (message.JPType != null && message.hasOwnProperty("JPType"))
                            if (!$util.isInteger(message.JPType))
                                return "JPType: integer expected";
                        if (message.llJPWin != null && message.hasOwnProperty("llJPWin"))
                            if (!$util.isInteger(message.llJPWin) && !(message.llJPWin && $util.isInteger(message.llJPWin.low) && $util.isInteger(message.llJPWin.high)))
                                return "llJPWin: integer|Long expected";
                        if (message.llJPBefore != null && message.hasOwnProperty("llJPBefore"))
                            if (!$util.isInteger(message.llJPBefore) && !(message.llJPBefore && $util.isInteger(message.llJPBefore.low) && $util.isInteger(message.llJPBefore.high)))
                                return "llJPBefore: integer|Long expected";
                        if (message.llJPAfter != null && message.hasOwnProperty("llJPAfter"))
                            if (!$util.isInteger(message.llJPAfter) && !(message.llJPAfter && $util.isInteger(message.llJPAfter.low) && $util.isInteger(message.llJPAfter.high)))
                                return "llJPAfter: integer|Long expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_HOLD_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_HOLD_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_HOLD_T} GL_TO_UC_HOLD_T
                     */
                    GL_TO_UC_HOLD_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.FivePK.GL_TO_UC_HOLD_T)
                            return object;
                        var message = new $root.Protocol.Game.FivePK.GL_TO_UC_HOLD_T();
                        if (object.llCrd != null)
                            if ($util.Long)
                                (message.llCrd = $util.Long.fromValue(object.llCrd)).unsigned = false;
                            else if (typeof object.llCrd === "string")
                                message.llCrd = parseInt(object.llCrd, 10);
                            else if (typeof object.llCrd === "number")
                                message.llCrd = object.llCrd;
                            else if (typeof object.llCrd === "object")
                                message.llCrd = new $util.LongBits(object.llCrd.low >>> 0, object.llCrd.high >>> 0).toNumber();
                        if (object.llWin != null)
                            if ($util.Long)
                                (message.llWin = $util.Long.fromValue(object.llWin)).unsigned = false;
                            else if (typeof object.llWin === "string")
                                message.llWin = parseInt(object.llWin, 10);
                            else if (typeof object.llWin === "number")
                                message.llWin = object.llWin;
                            else if (typeof object.llWin === "object")
                                message.llWin = new $util.LongBits(object.llWin.low >>> 0, object.llWin.high >>> 0).toNumber();
                        if (object.cardArr) {
                            if (!Array.isArray(object.cardArr))
                                throw TypeError(".Protocol.Game.FivePK.GL_TO_UC_HOLD_T.cardArr: array expected");
                            message.cardArr = [];
                            for (var i = 0; i < object.cardArr.length; ++i)
                                message.cardArr[i] = object.cardArr[i] | 0;
                        }
                        if (object.holdArr) {
                            if (!Array.isArray(object.holdArr))
                                throw TypeError(".Protocol.Game.FivePK.GL_TO_UC_HOLD_T.holdArr: array expected");
                            message.holdArr = [];
                            for (var i = 0; i < object.holdArr.length; ++i)
                                message.holdArr[i] = object.holdArr[i] | 0;
                        }
                        if (object.winBool != null)
                            message.winBool = object.winBool | 0;
                        if (object.winType != null)
                            message.winType = object.winType | 0;
                        if (object.JPType != null)
                            message.JPType = object.JPType | 0;
                        if (object.llJPWin != null)
                            if ($util.Long)
                                (message.llJPWin = $util.Long.fromValue(object.llJPWin)).unsigned = false;
                            else if (typeof object.llJPWin === "string")
                                message.llJPWin = parseInt(object.llJPWin, 10);
                            else if (typeof object.llJPWin === "number")
                                message.llJPWin = object.llJPWin;
                            else if (typeof object.llJPWin === "object")
                                message.llJPWin = new $util.LongBits(object.llJPWin.low >>> 0, object.llJPWin.high >>> 0).toNumber();
                        if (object.llJPBefore != null)
                            if ($util.Long)
                                (message.llJPBefore = $util.Long.fromValue(object.llJPBefore)).unsigned = false;
                            else if (typeof object.llJPBefore === "string")
                                message.llJPBefore = parseInt(object.llJPBefore, 10);
                            else if (typeof object.llJPBefore === "number")
                                message.llJPBefore = object.llJPBefore;
                            else if (typeof object.llJPBefore === "object")
                                message.llJPBefore = new $util.LongBits(object.llJPBefore.low >>> 0, object.llJPBefore.high >>> 0).toNumber();
                        if (object.llJPAfter != null)
                            if ($util.Long)
                                (message.llJPAfter = $util.Long.fromValue(object.llJPAfter)).unsigned = false;
                            else if (typeof object.llJPAfter === "string")
                                message.llJPAfter = parseInt(object.llJPAfter, 10);
                            else if (typeof object.llJPAfter === "number")
                                message.llJPAfter = object.llJPAfter;
                            else if (typeof object.llJPAfter === "object")
                                message.llJPAfter = new $util.LongBits(object.llJPAfter.low >>> 0, object.llJPAfter.high >>> 0).toNumber();
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_HOLD_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_HOLD_T
                     * @static
                     * @param {Protocol.Game.FivePK.GL_TO_UC_HOLD_T} message GL_TO_UC_HOLD_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_HOLD_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.cardArr = [];
                            object.holdArr = [];
                        }
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.llCrd = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.llCrd = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.llWin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.llWin = options.longs === String ? "0" : 0;
                            object.winBool = 0;
                            object.winType = 0;
                            object.JPType = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.llJPWin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.llJPWin = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.llJPBefore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.llJPBefore = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.llJPAfter = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.llJPAfter = options.longs === String ? "0" : 0;
                        }
                        if (message.llCrd != null && message.hasOwnProperty("llCrd"))
                            if (typeof message.llCrd === "number")
                                object.llCrd = options.longs === String ? String(message.llCrd) : message.llCrd;
                            else
                                object.llCrd = options.longs === String ? $util.Long.prototype.toString.call(message.llCrd) : options.longs === Number ? new $util.LongBits(message.llCrd.low >>> 0, message.llCrd.high >>> 0).toNumber() : message.llCrd;
                        if (message.llWin != null && message.hasOwnProperty("llWin"))
                            if (typeof message.llWin === "number")
                                object.llWin = options.longs === String ? String(message.llWin) : message.llWin;
                            else
                                object.llWin = options.longs === String ? $util.Long.prototype.toString.call(message.llWin) : options.longs === Number ? new $util.LongBits(message.llWin.low >>> 0, message.llWin.high >>> 0).toNumber() : message.llWin;
                        if (message.cardArr && message.cardArr.length) {
                            object.cardArr = [];
                            for (var j = 0; j < message.cardArr.length; ++j)
                                object.cardArr[j] = message.cardArr[j];
                        }
                        if (message.holdArr && message.holdArr.length) {
                            object.holdArr = [];
                            for (var j = 0; j < message.holdArr.length; ++j)
                                object.holdArr[j] = message.holdArr[j];
                        }
                        if (message.winBool != null && message.hasOwnProperty("winBool"))
                            object.winBool = message.winBool;
                        if (message.winType != null && message.hasOwnProperty("winType"))
                            object.winType = message.winType;
                        if (message.JPType != null && message.hasOwnProperty("JPType"))
                            object.JPType = message.JPType;
                        if (message.llJPWin != null && message.hasOwnProperty("llJPWin"))
                            if (typeof message.llJPWin === "number")
                                object.llJPWin = options.longs === String ? String(message.llJPWin) : message.llJPWin;
                            else
                                object.llJPWin = options.longs === String ? $util.Long.prototype.toString.call(message.llJPWin) : options.longs === Number ? new $util.LongBits(message.llJPWin.low >>> 0, message.llJPWin.high >>> 0).toNumber() : message.llJPWin;
                        if (message.llJPBefore != null && message.hasOwnProperty("llJPBefore"))
                            if (typeof message.llJPBefore === "number")
                                object.llJPBefore = options.longs === String ? String(message.llJPBefore) : message.llJPBefore;
                            else
                                object.llJPBefore = options.longs === String ? $util.Long.prototype.toString.call(message.llJPBefore) : options.longs === Number ? new $util.LongBits(message.llJPBefore.low >>> 0, message.llJPBefore.high >>> 0).toNumber() : message.llJPBefore;
                        if (message.llJPAfter != null && message.hasOwnProperty("llJPAfter"))
                            if (typeof message.llJPAfter === "number")
                                object.llJPAfter = options.longs === String ? String(message.llJPAfter) : message.llJPAfter;
                            else
                                object.llJPAfter = options.longs === String ? $util.Long.prototype.toString.call(message.llJPAfter) : options.longs === Number ? new $util.LongBits(message.llJPAfter.low >>> 0, message.llJPAfter.high >>> 0).toNumber() : message.llJPAfter;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_HOLD_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_HOLD_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_HOLD_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_HOLD_T;
                })();
    
                FivePK.GL_TO_UC_DG_WAIT_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_DG_WAIT_T.
                     * @memberof Protocol.Game.FivePK
                     * @interface IGL_TO_UC_DG_WAIT_T
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_DG_WAIT_T.
                     * @memberof Protocol.Game.FivePK
                     * @classdesc Represents a GL_TO_UC_DG_WAIT_T.
                     * @implements IGL_TO_UC_DG_WAIT_T
                     * @constructor
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_DG_WAIT_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_DG_WAIT_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Creates a new GL_TO_UC_DG_WAIT_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_DG_WAIT_T=} [properties] Properties to set
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T} GL_TO_UC_DG_WAIT_T instance
                     */
                    GL_TO_UC_DG_WAIT_T.create = function create(properties) {
                        return new GL_TO_UC_DG_WAIT_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_DG_WAIT_T message. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_DG_WAIT_T} message GL_TO_UC_DG_WAIT_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_DG_WAIT_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_DG_WAIT_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_DG_WAIT_T} message GL_TO_UC_DG_WAIT_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_DG_WAIT_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_DG_WAIT_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T} GL_TO_UC_DG_WAIT_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_DG_WAIT_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_DG_WAIT_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T} GL_TO_UC_DG_WAIT_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_DG_WAIT_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_DG_WAIT_T message.
                     * @function verify
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_DG_WAIT_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_DG_WAIT_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T} GL_TO_UC_DG_WAIT_T
                     */
                    GL_TO_UC_DG_WAIT_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T)
                            return object;
                        return new $root.Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T();
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_DG_WAIT_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T
                     * @static
                     * @param {Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T} message GL_TO_UC_DG_WAIT_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_DG_WAIT_T.toObject = function toObject() {
                        return {};
                    };
    
                    /**
                     * Converts this GL_TO_UC_DG_WAIT_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_DG_WAIT_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_DG_WAIT_T;
                })();
    
                FivePK.GL_TO_UC_MUCH_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_MUCH_T.
                     * @memberof Protocol.Game.FivePK
                     * @interface IGL_TO_UC_MUCH_T
                     * @property {number|Long|null} [llCrd] GL_TO_UC_MUCH_T llCrd
                     * @property {number|Long|null} [llDGWin] GL_TO_UC_MUCH_T llDGWin
                     * @property {Array.<number>|null} [cardArr] GL_TO_UC_MUCH_T cardArr
                     * @property {number|null} [result] GL_TO_UC_MUCH_T result
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_MUCH_T.
                     * @memberof Protocol.Game.FivePK
                     * @classdesc Represents a GL_TO_UC_MUCH_T.
                     * @implements IGL_TO_UC_MUCH_T
                     * @constructor
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_MUCH_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_MUCH_T(properties) {
                        this.cardArr = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_MUCH_T llCrd.
                     * @member {number|Long} llCrd
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_MUCH_T
                     * @instance
                     */
                    GL_TO_UC_MUCH_T.prototype.llCrd = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_MUCH_T llDGWin.
                     * @member {number|Long} llDGWin
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_MUCH_T
                     * @instance
                     */
                    GL_TO_UC_MUCH_T.prototype.llDGWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_MUCH_T cardArr.
                     * @member {Array.<number>} cardArr
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_MUCH_T
                     * @instance
                     */
                    GL_TO_UC_MUCH_T.prototype.cardArr = $util.emptyArray;
    
                    /**
                     * GL_TO_UC_MUCH_T result.
                     * @member {number} result
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_MUCH_T
                     * @instance
                     */
                    GL_TO_UC_MUCH_T.prototype.result = 0;
    
                    /**
                     * Creates a new GL_TO_UC_MUCH_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_MUCH_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_MUCH_T=} [properties] Properties to set
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_MUCH_T} GL_TO_UC_MUCH_T instance
                     */
                    GL_TO_UC_MUCH_T.create = function create(properties) {
                        return new GL_TO_UC_MUCH_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_MUCH_T message. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_MUCH_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_MUCH_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_MUCH_T} message GL_TO_UC_MUCH_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_MUCH_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.llCrd != null && message.hasOwnProperty("llCrd"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.llCrd);
                        if (message.llDGWin != null && message.hasOwnProperty("llDGWin"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.llDGWin);
                        if (message.cardArr != null && message.cardArr.length) {
                            writer.uint32(/* id 3, wireType 2 =*/26).fork();
                            for (var i = 0; i < message.cardArr.length; ++i)
                                writer.int32(message.cardArr[i]);
                            writer.ldelim();
                        }
                        if (message.result != null && message.hasOwnProperty("result"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.result);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_MUCH_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_MUCH_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_MUCH_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_MUCH_T} message GL_TO_UC_MUCH_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_MUCH_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_MUCH_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_MUCH_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_MUCH_T} GL_TO_UC_MUCH_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_MUCH_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.FivePK.GL_TO_UC_MUCH_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.llCrd = reader.int64();
                                break;
                            case 2:
                                message.llDGWin = reader.int64();
                                break;
                            case 3:
                                if (!(message.cardArr && message.cardArr.length))
                                    message.cardArr = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.cardArr.push(reader.int32());
                                } else
                                    message.cardArr.push(reader.int32());
                                break;
                            case 4:
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
                     * Decodes a GL_TO_UC_MUCH_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_MUCH_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_MUCH_T} GL_TO_UC_MUCH_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_MUCH_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_MUCH_T message.
                     * @function verify
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_MUCH_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_MUCH_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.llCrd != null && message.hasOwnProperty("llCrd"))
                            if (!$util.isInteger(message.llCrd) && !(message.llCrd && $util.isInteger(message.llCrd.low) && $util.isInteger(message.llCrd.high)))
                                return "llCrd: integer|Long expected";
                        if (message.llDGWin != null && message.hasOwnProperty("llDGWin"))
                            if (!$util.isInteger(message.llDGWin) && !(message.llDGWin && $util.isInteger(message.llDGWin.low) && $util.isInteger(message.llDGWin.high)))
                                return "llDGWin: integer|Long expected";
                        if (message.cardArr != null && message.hasOwnProperty("cardArr")) {
                            if (!Array.isArray(message.cardArr))
                                return "cardArr: array expected";
                            for (var i = 0; i < message.cardArr.length; ++i)
                                if (!$util.isInteger(message.cardArr[i]))
                                    return "cardArr: integer[] expected";
                        }
                        if (message.result != null && message.hasOwnProperty("result"))
                            if (!$util.isInteger(message.result))
                                return "result: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_MUCH_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_MUCH_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_MUCH_T} GL_TO_UC_MUCH_T
                     */
                    GL_TO_UC_MUCH_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.FivePK.GL_TO_UC_MUCH_T)
                            return object;
                        var message = new $root.Protocol.Game.FivePK.GL_TO_UC_MUCH_T();
                        if (object.llCrd != null)
                            if ($util.Long)
                                (message.llCrd = $util.Long.fromValue(object.llCrd)).unsigned = false;
                            else if (typeof object.llCrd === "string")
                                message.llCrd = parseInt(object.llCrd, 10);
                            else if (typeof object.llCrd === "number")
                                message.llCrd = object.llCrd;
                            else if (typeof object.llCrd === "object")
                                message.llCrd = new $util.LongBits(object.llCrd.low >>> 0, object.llCrd.high >>> 0).toNumber();
                        if (object.llDGWin != null)
                            if ($util.Long)
                                (message.llDGWin = $util.Long.fromValue(object.llDGWin)).unsigned = false;
                            else if (typeof object.llDGWin === "string")
                                message.llDGWin = parseInt(object.llDGWin, 10);
                            else if (typeof object.llDGWin === "number")
                                message.llDGWin = object.llDGWin;
                            else if (typeof object.llDGWin === "object")
                                message.llDGWin = new $util.LongBits(object.llDGWin.low >>> 0, object.llDGWin.high >>> 0).toNumber();
                        if (object.cardArr) {
                            if (!Array.isArray(object.cardArr))
                                throw TypeError(".Protocol.Game.FivePK.GL_TO_UC_MUCH_T.cardArr: array expected");
                            message.cardArr = [];
                            for (var i = 0; i < object.cardArr.length; ++i)
                                message.cardArr[i] = object.cardArr[i] | 0;
                        }
                        if (object.result != null)
                            message.result = object.result | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_MUCH_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_MUCH_T
                     * @static
                     * @param {Protocol.Game.FivePK.GL_TO_UC_MUCH_T} message GL_TO_UC_MUCH_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_MUCH_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.cardArr = [];
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.llCrd = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.llCrd = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.llDGWin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.llDGWin = options.longs === String ? "0" : 0;
                            object.result = 0;
                        }
                        if (message.llCrd != null && message.hasOwnProperty("llCrd"))
                            if (typeof message.llCrd === "number")
                                object.llCrd = options.longs === String ? String(message.llCrd) : message.llCrd;
                            else
                                object.llCrd = options.longs === String ? $util.Long.prototype.toString.call(message.llCrd) : options.longs === Number ? new $util.LongBits(message.llCrd.low >>> 0, message.llCrd.high >>> 0).toNumber() : message.llCrd;
                        if (message.llDGWin != null && message.hasOwnProperty("llDGWin"))
                            if (typeof message.llDGWin === "number")
                                object.llDGWin = options.longs === String ? String(message.llDGWin) : message.llDGWin;
                            else
                                object.llDGWin = options.longs === String ? $util.Long.prototype.toString.call(message.llDGWin) : options.longs === Number ? new $util.LongBits(message.llDGWin.low >>> 0, message.llDGWin.high >>> 0).toNumber() : message.llDGWin;
                        if (message.cardArr && message.cardArr.length) {
                            object.cardArr = [];
                            for (var j = 0; j < message.cardArr.length; ++j)
                                object.cardArr[j] = message.cardArr[j];
                        }
                        if (message.result != null && message.hasOwnProperty("result"))
                            object.result = message.result;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_MUCH_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_MUCH_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_MUCH_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_MUCH_T;
                })();
    
                FivePK.GL_TO_UC_CHEAT_CODE_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_CHEAT_CODE_T.
                     * @memberof Protocol.Game.FivePK
                     * @interface IGL_TO_UC_CHEAT_CODE_T
                     * @property {number|null} [resultCode] GL_TO_UC_CHEAT_CODE_T resultCode
                     * @property {string|null} [message] GL_TO_UC_CHEAT_CODE_T message
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_CHEAT_CODE_T.
                     * @memberof Protocol.Game.FivePK
                     * @classdesc Represents a GL_TO_UC_CHEAT_CODE_T.
                     * @implements IGL_TO_UC_CHEAT_CODE_T
                     * @constructor
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_CHEAT_CODE_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_CHEAT_CODE_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_CHEAT_CODE_T resultCode.
                     * @member {number} resultCode
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T
                     * @instance
                     */
                    GL_TO_UC_CHEAT_CODE_T.prototype.resultCode = 0;
    
                    /**
                     * GL_TO_UC_CHEAT_CODE_T message.
                     * @member {string} message
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T
                     * @instance
                     */
                    GL_TO_UC_CHEAT_CODE_T.prototype.message = "";
    
                    /**
                     * Creates a new GL_TO_UC_CHEAT_CODE_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_CHEAT_CODE_T=} [properties] Properties to set
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T} GL_TO_UC_CHEAT_CODE_T instance
                     */
                    GL_TO_UC_CHEAT_CODE_T.create = function create(properties) {
                        return new GL_TO_UC_CHEAT_CODE_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_CHEAT_CODE_T message. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_CHEAT_CODE_T} message GL_TO_UC_CHEAT_CODE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_CHEAT_CODE_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.resultCode);
                        if (message.message != null && message.hasOwnProperty("message"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_CHEAT_CODE_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_CHEAT_CODE_T} message GL_TO_UC_CHEAT_CODE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_CHEAT_CODE_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_CHEAT_CODE_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T} GL_TO_UC_CHEAT_CODE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_CHEAT_CODE_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.resultCode = reader.int32();
                                break;
                            case 2:
                                message.message = reader.string();
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
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T} GL_TO_UC_CHEAT_CODE_T
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
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_CHEAT_CODE_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            if (!$util.isInteger(message.resultCode))
                                return "resultCode: integer expected";
                        if (message.message != null && message.hasOwnProperty("message"))
                            if (!$util.isString(message.message))
                                return "message: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_CHEAT_CODE_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T} GL_TO_UC_CHEAT_CODE_T
                     */
                    GL_TO_UC_CHEAT_CODE_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T)
                            return object;
                        var message = new $root.Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T();
                        if (object.resultCode != null)
                            message.resultCode = object.resultCode | 0;
                        if (object.message != null)
                            message.message = String(object.message);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_CHEAT_CODE_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T
                     * @static
                     * @param {Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T} message GL_TO_UC_CHEAT_CODE_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_CHEAT_CODE_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.resultCode = 0;
                            object.message = "";
                        }
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            object.resultCode = message.resultCode;
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = message.message;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_CHEAT_CODE_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_CHEAT_CODE_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_CHEAT_CODE_T;
                })();
    
                FivePK.GL_TO_UC_INIT_INFO_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_INIT_INFO_T.
                     * @memberof Protocol.Game.FivePK
                     * @interface IGL_TO_UC_INIT_INFO_T
                     * @property {number|null} [tableId] GL_TO_UC_INIT_INFO_T tableId
                     * @property {number|Long|null} [llMinBet] GL_TO_UC_INIT_INFO_T llMinBet
                     * @property {number|Long|null} [llMaxBet] GL_TO_UC_INIT_INFO_T llMaxBet
                     * @property {number|Long|null} [llBetUnit] GL_TO_UC_INIT_INFO_T llBetUnit
                     * @property {number|null} [dRate] GL_TO_UC_INIT_INFO_T dRate
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_INIT_INFO_T.
                     * @memberof Protocol.Game.FivePK
                     * @classdesc Represents a GL_TO_UC_INIT_INFO_T.
                     * @implements IGL_TO_UC_INIT_INFO_T
                     * @constructor
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_INIT_INFO_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_INIT_INFO_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_INIT_INFO_T tableId.
                     * @member {number} tableId
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T
                     * @instance
                     */
                    GL_TO_UC_INIT_INFO_T.prototype.tableId = 0;
    
                    /**
                     * GL_TO_UC_INIT_INFO_T llMinBet.
                     * @member {number|Long} llMinBet
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T
                     * @instance
                     */
                    GL_TO_UC_INIT_INFO_T.prototype.llMinBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_INIT_INFO_T llMaxBet.
                     * @member {number|Long} llMaxBet
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T
                     * @instance
                     */
                    GL_TO_UC_INIT_INFO_T.prototype.llMaxBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_INIT_INFO_T llBetUnit.
                     * @member {number|Long} llBetUnit
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T
                     * @instance
                     */
                    GL_TO_UC_INIT_INFO_T.prototype.llBetUnit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_INIT_INFO_T dRate.
                     * @member {number} dRate
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T
                     * @instance
                     */
                    GL_TO_UC_INIT_INFO_T.prototype.dRate = 0;
    
                    /**
                     * Creates a new GL_TO_UC_INIT_INFO_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_INIT_INFO_T=} [properties] Properties to set
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T} GL_TO_UC_INIT_INFO_T instance
                     */
                    GL_TO_UC_INIT_INFO_T.create = function create(properties) {
                        return new GL_TO_UC_INIT_INFO_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_INIT_INFO_T message. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_INIT_INFO_T} message GL_TO_UC_INIT_INFO_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_INIT_INFO_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.tableId != null && message.hasOwnProperty("tableId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tableId);
                        if (message.llMinBet != null && message.hasOwnProperty("llMinBet"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.llMinBet);
                        if (message.llMaxBet != null && message.hasOwnProperty("llMaxBet"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.llMaxBet);
                        if (message.llBetUnit != null && message.hasOwnProperty("llBetUnit"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.llBetUnit);
                        if (message.dRate != null && message.hasOwnProperty("dRate"))
                            writer.uint32(/* id 5, wireType 1 =*/41).double(message.dRate);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_INIT_INFO_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_INIT_INFO_T} message GL_TO_UC_INIT_INFO_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_INIT_INFO_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_INIT_INFO_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T} GL_TO_UC_INIT_INFO_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_INIT_INFO_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.tableId = reader.int32();
                                break;
                            case 2:
                                message.llMinBet = reader.int64();
                                break;
                            case 3:
                                message.llMaxBet = reader.int64();
                                break;
                            case 4:
                                message.llBetUnit = reader.int64();
                                break;
                            case 5:
                                message.dRate = reader.double();
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
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T} GL_TO_UC_INIT_INFO_T
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
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T
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
                        if (message.llMinBet != null && message.hasOwnProperty("llMinBet"))
                            if (!$util.isInteger(message.llMinBet) && !(message.llMinBet && $util.isInteger(message.llMinBet.low) && $util.isInteger(message.llMinBet.high)))
                                return "llMinBet: integer|Long expected";
                        if (message.llMaxBet != null && message.hasOwnProperty("llMaxBet"))
                            if (!$util.isInteger(message.llMaxBet) && !(message.llMaxBet && $util.isInteger(message.llMaxBet.low) && $util.isInteger(message.llMaxBet.high)))
                                return "llMaxBet: integer|Long expected";
                        if (message.llBetUnit != null && message.hasOwnProperty("llBetUnit"))
                            if (!$util.isInteger(message.llBetUnit) && !(message.llBetUnit && $util.isInteger(message.llBetUnit.low) && $util.isInteger(message.llBetUnit.high)))
                                return "llBetUnit: integer|Long expected";
                        if (message.dRate != null && message.hasOwnProperty("dRate"))
                            if (typeof message.dRate !== "number")
                                return "dRate: number expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_INIT_INFO_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T} GL_TO_UC_INIT_INFO_T
                     */
                    GL_TO_UC_INIT_INFO_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T)
                            return object;
                        var message = new $root.Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T();
                        if (object.tableId != null)
                            message.tableId = object.tableId | 0;
                        if (object.llMinBet != null)
                            if ($util.Long)
                                (message.llMinBet = $util.Long.fromValue(object.llMinBet)).unsigned = false;
                            else if (typeof object.llMinBet === "string")
                                message.llMinBet = parseInt(object.llMinBet, 10);
                            else if (typeof object.llMinBet === "number")
                                message.llMinBet = object.llMinBet;
                            else if (typeof object.llMinBet === "object")
                                message.llMinBet = new $util.LongBits(object.llMinBet.low >>> 0, object.llMinBet.high >>> 0).toNumber();
                        if (object.llMaxBet != null)
                            if ($util.Long)
                                (message.llMaxBet = $util.Long.fromValue(object.llMaxBet)).unsigned = false;
                            else if (typeof object.llMaxBet === "string")
                                message.llMaxBet = parseInt(object.llMaxBet, 10);
                            else if (typeof object.llMaxBet === "number")
                                message.llMaxBet = object.llMaxBet;
                            else if (typeof object.llMaxBet === "object")
                                message.llMaxBet = new $util.LongBits(object.llMaxBet.low >>> 0, object.llMaxBet.high >>> 0).toNumber();
                        if (object.llBetUnit != null)
                            if ($util.Long)
                                (message.llBetUnit = $util.Long.fromValue(object.llBetUnit)).unsigned = false;
                            else if (typeof object.llBetUnit === "string")
                                message.llBetUnit = parseInt(object.llBetUnit, 10);
                            else if (typeof object.llBetUnit === "number")
                                message.llBetUnit = object.llBetUnit;
                            else if (typeof object.llBetUnit === "object")
                                message.llBetUnit = new $util.LongBits(object.llBetUnit.low >>> 0, object.llBetUnit.high >>> 0).toNumber();
                        if (object.dRate != null)
                            message.dRate = Number(object.dRate);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_INIT_INFO_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T
                     * @static
                     * @param {Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T} message GL_TO_UC_INIT_INFO_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_INIT_INFO_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.tableId = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.llMinBet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.llMinBet = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.llMaxBet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.llMaxBet = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.llBetUnit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.llBetUnit = options.longs === String ? "0" : 0;
                            object.dRate = 0;
                        }
                        if (message.tableId != null && message.hasOwnProperty("tableId"))
                            object.tableId = message.tableId;
                        if (message.llMinBet != null && message.hasOwnProperty("llMinBet"))
                            if (typeof message.llMinBet === "number")
                                object.llMinBet = options.longs === String ? String(message.llMinBet) : message.llMinBet;
                            else
                                object.llMinBet = options.longs === String ? $util.Long.prototype.toString.call(message.llMinBet) : options.longs === Number ? new $util.LongBits(message.llMinBet.low >>> 0, message.llMinBet.high >>> 0).toNumber() : message.llMinBet;
                        if (message.llMaxBet != null && message.hasOwnProperty("llMaxBet"))
                            if (typeof message.llMaxBet === "number")
                                object.llMaxBet = options.longs === String ? String(message.llMaxBet) : message.llMaxBet;
                            else
                                object.llMaxBet = options.longs === String ? $util.Long.prototype.toString.call(message.llMaxBet) : options.longs === Number ? new $util.LongBits(message.llMaxBet.low >>> 0, message.llMaxBet.high >>> 0).toNumber() : message.llMaxBet;
                        if (message.llBetUnit != null && message.hasOwnProperty("llBetUnit"))
                            if (typeof message.llBetUnit === "number")
                                object.llBetUnit = options.longs === String ? String(message.llBetUnit) : message.llBetUnit;
                            else
                                object.llBetUnit = options.longs === String ? $util.Long.prototype.toString.call(message.llBetUnit) : options.longs === Number ? new $util.LongBits(message.llBetUnit.low >>> 0, message.llBetUnit.high >>> 0).toNumber() : message.llBetUnit;
                        if (message.dRate != null && message.hasOwnProperty("dRate"))
                            object.dRate = options.json && !isFinite(message.dRate) ? String(message.dRate) : message.dRate;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_INIT_INFO_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_INIT_INFO_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_INIT_INFO_T;
                })();
    
                FivePK.GL_TO_UC_UPDATE_POINT_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_UPDATE_POINT_T.
                     * @memberof Protocol.Game.FivePK
                     * @interface IGL_TO_UC_UPDATE_POINT_T
                     * @property {number|Long|null} [llCrd] GL_TO_UC_UPDATE_POINT_T llCrd
                     * @property {number|Long|null} [kickPoint] GL_TO_UC_UPDATE_POINT_T kickPoint
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_UPDATE_POINT_T.
                     * @memberof Protocol.Game.FivePK
                     * @classdesc Represents a GL_TO_UC_UPDATE_POINT_T.
                     * @implements IGL_TO_UC_UPDATE_POINT_T
                     * @constructor
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_UPDATE_POINT_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_UPDATE_POINT_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_UPDATE_POINT_T llCrd.
                     * @member {number|Long} llCrd
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T
                     * @instance
                     */
                    GL_TO_UC_UPDATE_POINT_T.prototype.llCrd = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_UPDATE_POINT_T kickPoint.
                     * @member {number|Long} kickPoint
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T
                     * @instance
                     */
                    GL_TO_UC_UPDATE_POINT_T.prototype.kickPoint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * Creates a new GL_TO_UC_UPDATE_POINT_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_UPDATE_POINT_T=} [properties] Properties to set
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T} GL_TO_UC_UPDATE_POINT_T instance
                     */
                    GL_TO_UC_UPDATE_POINT_T.create = function create(properties) {
                        return new GL_TO_UC_UPDATE_POINT_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_UPDATE_POINT_T message. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_UPDATE_POINT_T} message GL_TO_UC_UPDATE_POINT_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_UPDATE_POINT_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.llCrd != null && message.hasOwnProperty("llCrd"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.llCrd);
                        if (message.kickPoint != null && message.hasOwnProperty("kickPoint"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.kickPoint);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_UPDATE_POINT_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T
                     * @static
                     * @param {Protocol.Game.FivePK.IGL_TO_UC_UPDATE_POINT_T} message GL_TO_UC_UPDATE_POINT_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_UPDATE_POINT_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_UPDATE_POINT_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T} GL_TO_UC_UPDATE_POINT_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_UPDATE_POINT_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.llCrd = reader.int64();
                                break;
                            case 2:
                                message.kickPoint = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_UPDATE_POINT_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T} GL_TO_UC_UPDATE_POINT_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_UPDATE_POINT_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_UPDATE_POINT_T message.
                     * @function verify
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_UPDATE_POINT_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.llCrd != null && message.hasOwnProperty("llCrd"))
                            if (!$util.isInteger(message.llCrd) && !(message.llCrd && $util.isInteger(message.llCrd.low) && $util.isInteger(message.llCrd.high)))
                                return "llCrd: integer|Long expected";
                        if (message.kickPoint != null && message.hasOwnProperty("kickPoint"))
                            if (!$util.isInteger(message.kickPoint) && !(message.kickPoint && $util.isInteger(message.kickPoint.low) && $util.isInteger(message.kickPoint.high)))
                                return "kickPoint: integer|Long expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_UPDATE_POINT_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T} GL_TO_UC_UPDATE_POINT_T
                     */
                    GL_TO_UC_UPDATE_POINT_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T)
                            return object;
                        var message = new $root.Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T();
                        if (object.llCrd != null)
                            if ($util.Long)
                                (message.llCrd = $util.Long.fromValue(object.llCrd)).unsigned = false;
                            else if (typeof object.llCrd === "string")
                                message.llCrd = parseInt(object.llCrd, 10);
                            else if (typeof object.llCrd === "number")
                                message.llCrd = object.llCrd;
                            else if (typeof object.llCrd === "object")
                                message.llCrd = new $util.LongBits(object.llCrd.low >>> 0, object.llCrd.high >>> 0).toNumber();
                        if (object.kickPoint != null)
                            if ($util.Long)
                                (message.kickPoint = $util.Long.fromValue(object.kickPoint)).unsigned = false;
                            else if (typeof object.kickPoint === "string")
                                message.kickPoint = parseInt(object.kickPoint, 10);
                            else if (typeof object.kickPoint === "number")
                                message.kickPoint = object.kickPoint;
                            else if (typeof object.kickPoint === "object")
                                message.kickPoint = new $util.LongBits(object.kickPoint.low >>> 0, object.kickPoint.high >>> 0).toNumber();
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_UPDATE_POINT_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T
                     * @static
                     * @param {Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T} message GL_TO_UC_UPDATE_POINT_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_UPDATE_POINT_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.llCrd = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.llCrd = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.kickPoint = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.kickPoint = options.longs === String ? "0" : 0;
                        }
                        if (message.llCrd != null && message.hasOwnProperty("llCrd"))
                            if (typeof message.llCrd === "number")
                                object.llCrd = options.longs === String ? String(message.llCrd) : message.llCrd;
                            else
                                object.llCrd = options.longs === String ? $util.Long.prototype.toString.call(message.llCrd) : options.longs === Number ? new $util.LongBits(message.llCrd.low >>> 0, message.llCrd.high >>> 0).toNumber() : message.llCrd;
                        if (message.kickPoint != null && message.hasOwnProperty("kickPoint"))
                            if (typeof message.kickPoint === "number")
                                object.kickPoint = options.longs === String ? String(message.kickPoint) : message.kickPoint;
                            else
                                object.kickPoint = options.longs === String ? $util.Long.prototype.toString.call(message.kickPoint) : options.longs === Number ? new $util.LongBits(message.kickPoint.low >>> 0, message.kickPoint.high >>> 0).toNumber() : message.kickPoint;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_UPDATE_POINT_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_UPDATE_POINT_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_UPDATE_POINT_T;
                })();
    
                return FivePK;
            })();
    
            return Game;
        })();
    
        return Protocol;
    })();

    return $root;
})(protobuf).Protocol;
