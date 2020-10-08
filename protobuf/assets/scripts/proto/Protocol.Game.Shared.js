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
    
            Game.Shared = (function() {
    
                /**
                 * Namespace Shared.
                 * @memberof Protocol.Game
                 * @namespace
                 */
                var Shared = {};
    
                /**
                 * ResultCode enum.
                 * @name Protocol.Game.Shared.ResultCode
                 * @enum {string}
                 * @property {number} NO_ERROR=0 NO_ERROR value
                 * @property {number} JOIN_GAME_FAIL=1 JOIN_GAME_FAIL value
                 * @property {number} LEAVE_GAME_FAIL=2 LEAVE_GAME_FAIL value
                 * @property {number} LIMIT_LOCAL_MIN=3 LIMIT_LOCAL_MIN value
                 * @property {number} LIMIT_LOCAL_MAX=4 LIMIT_LOCAL_MAX value
                 * @property {number} LIMIT_GLOBAL_MAX=5 LIMIT_GLOBAL_MAX value
                 * @property {number} CREDIT_NOT_ENOUGH=6 CREDIT_NOT_ENOUGH value
                 * @property {number} TIME_OVER=7 TIME_OVER value
                 * @property {number} WRONG_BET_ID=8 WRONG_BET_ID value
                 * @property {number} WRONG_CHIP_ID=9 WRONG_CHIP_ID value
                 * @property {number} WRONG_COMMAND_ID=10 WRONG_COMMAND_ID value
                 * @property {number} WRONG_PARAMETER=11 WRONG_PARAMETER value
                 * @property {number} COMMAND_DENY=12 COMMAND_DENY value
                 * @property {number} ERROR_VERSION=13 ERROR_VERSION value
                 * @property {number} MAINTAIN=14 MAINTAIN value
                 * @property {number} SERVICE_OVERTIME=15 SERVICE_OVERTIME value
                 * @property {number} KICKBACK_ERROR=16 KICKBACK_ERROR value
                 * @property {number} POINT_INIT_ERROR=17 POINT_INIT_ERROR value
                 * @property {number} POINT_REQUESTING=18 POINT_REQUESTING value
                 * @property {number} POINT_RETURNING=19 POINT_RETURNING value
                 * @property {number} POINT_CHANGING=20 POINT_CHANGING value
                 * @property {number} POINT_USING=21 POINT_USING value
                 * @property {number} RECOVER_FAIL=31 RECOVER_FAIL value
                 * @property {number} OTHER_ERROR=99 OTHER_ERROR value
                 */
                Shared.ResultCode = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "NO_ERROR"] = 0;
                    values[valuesById[1] = "JOIN_GAME_FAIL"] = 1;
                    values[valuesById[2] = "LEAVE_GAME_FAIL"] = 2;
                    values[valuesById[3] = "LIMIT_LOCAL_MIN"] = 3;
                    values[valuesById[4] = "LIMIT_LOCAL_MAX"] = 4;
                    values[valuesById[5] = "LIMIT_GLOBAL_MAX"] = 5;
                    values[valuesById[6] = "CREDIT_NOT_ENOUGH"] = 6;
                    values[valuesById[7] = "TIME_OVER"] = 7;
                    values[valuesById[8] = "WRONG_BET_ID"] = 8;
                    values[valuesById[9] = "WRONG_CHIP_ID"] = 9;
                    values[valuesById[10] = "WRONG_COMMAND_ID"] = 10;
                    values[valuesById[11] = "WRONG_PARAMETER"] = 11;
                    values[valuesById[12] = "COMMAND_DENY"] = 12;
                    values[valuesById[13] = "ERROR_VERSION"] = 13;
                    values[valuesById[14] = "MAINTAIN"] = 14;
                    values[valuesById[15] = "SERVICE_OVERTIME"] = 15;
                    values[valuesById[16] = "KICKBACK_ERROR"] = 16;
                    values[valuesById[17] = "POINT_INIT_ERROR"] = 17;
                    values[valuesById[18] = "POINT_REQUESTING"] = 18;
                    values[valuesById[19] = "POINT_RETURNING"] = 19;
                    values[valuesById[20] = "POINT_CHANGING"] = 20;
                    values[valuesById[21] = "POINT_USING"] = 21;
                    values[valuesById[31] = "RECOVER_FAIL"] = 31;
                    values[valuesById[99] = "OTHER_ERROR"] = 99;
                    return values;
                })();
    
                /**
                 * CreditHandleState enum.
                 * @name Protocol.Game.Shared.CreditHandleState
                 * @enum {string}
                 * @property {number} CREDIT_HANDLE_STATE_DEFAULT=0 CREDIT_HANDLE_STATE_DEFAULT value
                 * @property {number} REQUEST=1 REQUEST value
                 * @property {number} RETURN=2 RETURN value
                 * @property {number} USING=3 USING value
                 */
                Shared.CreditHandleState = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "CREDIT_HANDLE_STATE_DEFAULT"] = 0;
                    values[valuesById[1] = "REQUEST"] = 1;
                    values[valuesById[2] = "RETURN"] = 2;
                    values[valuesById[3] = "USING"] = 3;
                    return values;
                })();
    
                /**
                 * SystemMessageType enum.
                 * @name Protocol.Game.Shared.SystemMessageType
                 * @enum {string}
                 * @property {number} SYSTEM_MESSAGE_TYPE_DEFAULT=0 SYSTEM_MESSAGE_TYPE_DEFAULT value
                 * @property {number} NOTIFY_PLAYER_OFFLINE_LEAVE=1 NOTIFY_PLAYER_OFFLINE_LEAVE value
                 */
                Shared.SystemMessageType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SYSTEM_MESSAGE_TYPE_DEFAULT"] = 0;
                    values[valuesById[1] = "NOTIFY_PLAYER_OFFLINE_LEAVE"] = 1;
                    return values;
                })();
    
                /**
                 * MessageID_Shared enum.
                 * @name Protocol.Game.Shared.MessageID_Shared
                 * @enum {string}
                 * @property {number} SHARED_DEFAULT=0 SHARED_DEFAULT value
                 * @property {number} UC_TO_GL_SEND_TEST=19000 UC_TO_GL_SEND_TEST value
                 * @property {number} UC_TO_GL_INIT_GAME=19001 UC_TO_GL_INIT_GAME value
                 * @property {number} UC_TO_GL_LEAVE_GAME=19002 UC_TO_GL_LEAVE_GAME value
                 * @property {number} UC_TO_GL_CHANGE_CHIP=19003 UC_TO_GL_CHANGE_CHIP value
                 * @property {number} UC_TO_GL_UPDATE_CREDIT=19004 UC_TO_GL_UPDATE_CREDIT value
                 * @property {number} UC_TO_GL_ACTIVITY_ANIM=19005 UC_TO_GL_ACTIVITY_ANIM value
                 * @property {number} UC_TO_GL_ACTIVITY_REQ=19006 UC_TO_GL_ACTIVITY_REQ value
                 * @property {number} UC_TO_GL_ACTIVITY_ANIM_END=19007 UC_TO_GL_ACTIVITY_ANIM_END value
                 * @property {number} UC_TO_GL_RESX_LOAD_FINISH=19008 UC_TO_GL_RESX_LOAD_FINISH value
                 * @property {number} UC_TO_GL_SHARED_CHEAT=19009 UC_TO_GL_SHARED_CHEAT value
                 * @property {number} UC_TO_GL_SEND_TICK=19999 UC_TO_GL_SEND_TICK value
                 * @property {number} GL_TO_UC_SEND_TEST_ACK=29000 GL_TO_UC_SEND_TEST_ACK value
                 * @property {number} GL_TO_UC_INIT_GAME=29001 GL_TO_UC_INIT_GAME value
                 * @property {number} GL_TO_UC_LEAVE_GAME=29002 GL_TO_UC_LEAVE_GAME value
                 * @property {number} GL_TO_UC_CHANGE_CHIP=29003 GL_TO_UC_CHANGE_CHIP value
                 * @property {number} GL_TO_UC_UPDATE_CREDIT=29004 GL_TO_UC_UPDATE_CREDIT value
                 * @property {number} GL_TO_UC_ACTIVITY_ACK=29005 GL_TO_UC_ACTIVITY_ACK value
                 * @property {number} GL_TO_UC_SHARED_CHEAT=29009 GL_TO_UC_SHARED_CHEAT value
                 * @property {number} GL_TO_UC_SEND_TICK_ACK=29999 GL_TO_UC_SEND_TICK_ACK value
                 * @property {number} GL_TO_UC_SYSTEM_MESSAGE=29203 GL_TO_UC_SYSTEM_MESSAGE value
                 * @property {number} GL_TO_UC_UPDATE_ONLINE=29204 GL_TO_UC_UPDATE_ONLINE value
                 * @property {number} GL_TO_UC_SYSTEM_MAINTAIN=29205 GL_TO_UC_SYSTEM_MAINTAIN value
                 * @property {number} GL_TO_UC_MAINTAIN_LEAVE=29206 GL_TO_UC_MAINTAIN_LEAVE value
                 * @property {number} GL_TO_UC_IDLE_LEAVE=29207 GL_TO_UC_IDLE_LEAVE value
                 * @property {number} GL_TO_UC_TICK_OVERTIME_LEAVE=29208 GL_TO_UC_TICK_OVERTIME_LEAVE value
                 * @property {number} GL_TO_UC_PACKET_ERROR=29209 GL_TO_UC_PACKET_ERROR value
                 * @property {number} GL_TO_UC_CREDIT_HANDLE=29210 GL_TO_UC_CREDIT_HANDLE value
                 * @property {number} GL_TO_UC_ACTIVITY_START=29211 GL_TO_UC_ACTIVITY_START value
                 * @property {number} GL_TO_UC_ACTIVITY_END=29212 GL_TO_UC_ACTIVITY_END value
                 */
                Shared.MessageID_Shared = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SHARED_DEFAULT"] = 0;
                    values[valuesById[19000] = "UC_TO_GL_SEND_TEST"] = 19000;
                    values[valuesById[19001] = "UC_TO_GL_INIT_GAME"] = 19001;
                    values[valuesById[19002] = "UC_TO_GL_LEAVE_GAME"] = 19002;
                    values[valuesById[19003] = "UC_TO_GL_CHANGE_CHIP"] = 19003;
                    values[valuesById[19004] = "UC_TO_GL_UPDATE_CREDIT"] = 19004;
                    values[valuesById[19005] = "UC_TO_GL_ACTIVITY_ANIM"] = 19005;
                    values[valuesById[19006] = "UC_TO_GL_ACTIVITY_REQ"] = 19006;
                    values[valuesById[19007] = "UC_TO_GL_ACTIVITY_ANIM_END"] = 19007;
                    values[valuesById[19008] = "UC_TO_GL_RESX_LOAD_FINISH"] = 19008;
                    values[valuesById[19009] = "UC_TO_GL_SHARED_CHEAT"] = 19009;
                    values[valuesById[19999] = "UC_TO_GL_SEND_TICK"] = 19999;
                    values[valuesById[29000] = "GL_TO_UC_SEND_TEST_ACK"] = 29000;
                    values[valuesById[29001] = "GL_TO_UC_INIT_GAME"] = 29001;
                    values[valuesById[29002] = "GL_TO_UC_LEAVE_GAME"] = 29002;
                    values[valuesById[29003] = "GL_TO_UC_CHANGE_CHIP"] = 29003;
                    values[valuesById[29004] = "GL_TO_UC_UPDATE_CREDIT"] = 29004;
                    values[valuesById[29005] = "GL_TO_UC_ACTIVITY_ACK"] = 29005;
                    values[valuesById[29009] = "GL_TO_UC_SHARED_CHEAT"] = 29009;
                    values[valuesById[29999] = "GL_TO_UC_SEND_TICK_ACK"] = 29999;
                    values[valuesById[29203] = "GL_TO_UC_SYSTEM_MESSAGE"] = 29203;
                    values[valuesById[29204] = "GL_TO_UC_UPDATE_ONLINE"] = 29204;
                    values[valuesById[29205] = "GL_TO_UC_SYSTEM_MAINTAIN"] = 29205;
                    values[valuesById[29206] = "GL_TO_UC_MAINTAIN_LEAVE"] = 29206;
                    values[valuesById[29207] = "GL_TO_UC_IDLE_LEAVE"] = 29207;
                    values[valuesById[29208] = "GL_TO_UC_TICK_OVERTIME_LEAVE"] = 29208;
                    values[valuesById[29209] = "GL_TO_UC_PACKET_ERROR"] = 29209;
                    values[valuesById[29210] = "GL_TO_UC_CREDIT_HANDLE"] = 29210;
                    values[valuesById[29211] = "GL_TO_UC_ACTIVITY_START"] = 29211;
                    values[valuesById[29212] = "GL_TO_UC_ACTIVITY_END"] = 29212;
                    return values;
                })();
    
                Shared.UC_TO_GL_SEND_TEST_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_SEND_TEST_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IUC_TO_GL_SEND_TEST_T
                     * @property {number|null} [iTest] UC_TO_GL_SEND_TEST_T iTest
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_SEND_TEST_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a UC_TO_GL_SEND_TEST_T.
                     * @implements IUC_TO_GL_SEND_TEST_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IUC_TO_GL_SEND_TEST_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_SEND_TEST_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UC_TO_GL_SEND_TEST_T iTest.
                     * @member {number} iTest
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T
                     * @instance
                     */
                    UC_TO_GL_SEND_TEST_T.prototype.iTest = 0;
    
                    /**
                     * Creates a new UC_TO_GL_SEND_TEST_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_SEND_TEST_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T} UC_TO_GL_SEND_TEST_T instance
                     */
                    UC_TO_GL_SEND_TEST_T.create = function create(properties) {
                        return new UC_TO_GL_SEND_TEST_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_SEND_TEST_T message. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_SEND_TEST_T} message UC_TO_GL_SEND_TEST_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_SEND_TEST_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.iTest != null && message.hasOwnProperty("iTest"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.iTest);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_SEND_TEST_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_SEND_TEST_T} message UC_TO_GL_SEND_TEST_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_SEND_TEST_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_SEND_TEST_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T} UC_TO_GL_SEND_TEST_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_SEND_TEST_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.iTest = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a UC_TO_GL_SEND_TEST_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T} UC_TO_GL_SEND_TEST_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_SEND_TEST_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a UC_TO_GL_SEND_TEST_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_SEND_TEST_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.iTest != null && message.hasOwnProperty("iTest"))
                            if (!$util.isInteger(message.iTest))
                                return "iTest: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_SEND_TEST_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T} UC_TO_GL_SEND_TEST_T
                     */
                    UC_TO_GL_SEND_TEST_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T();
                        if (object.iTest != null)
                            message.iTest = object.iTest | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_SEND_TEST_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T
                     * @static
                     * @param {Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T} message UC_TO_GL_SEND_TEST_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_SEND_TEST_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.iTest = 0;
                        if (message.iTest != null && message.hasOwnProperty("iTest"))
                            object.iTest = message.iTest;
                        return object;
                    };
    
                    /**
                     * Converts this UC_TO_GL_SEND_TEST_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_SEND_TEST_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_SEND_TEST_T;
                })();
    
                Shared.UC_TO_GL_INIT_GAME_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_INIT_GAME_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IUC_TO_GL_INIT_GAME_T
                     * @property {number|null} [sharedProtoVersion] UC_TO_GL_INIT_GAME_T sharedProtoVersion
                     * @property {number|null} [gameProtoVersion] UC_TO_GL_INIT_GAME_T gameProtoVersion
                     * @property {number|null} [enterType] UC_TO_GL_INIT_GAME_T enterType
                     * @property {number|null} [serialNumber] UC_TO_GL_INIT_GAME_T serialNumber
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_INIT_GAME_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a UC_TO_GL_INIT_GAME_T.
                     * @implements IUC_TO_GL_INIT_GAME_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IUC_TO_GL_INIT_GAME_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_INIT_GAME_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UC_TO_GL_INIT_GAME_T sharedProtoVersion.
                     * @member {number} sharedProtoVersion
                     * @memberof Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T
                     * @instance
                     */
                    UC_TO_GL_INIT_GAME_T.prototype.sharedProtoVersion = 0;
    
                    /**
                     * UC_TO_GL_INIT_GAME_T gameProtoVersion.
                     * @member {number} gameProtoVersion
                     * @memberof Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T
                     * @instance
                     */
                    UC_TO_GL_INIT_GAME_T.prototype.gameProtoVersion = 0;
    
                    /**
                     * UC_TO_GL_INIT_GAME_T enterType.
                     * @member {number} enterType
                     * @memberof Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T
                     * @instance
                     */
                    UC_TO_GL_INIT_GAME_T.prototype.enterType = 0;
    
                    /**
                     * UC_TO_GL_INIT_GAME_T serialNumber.
                     * @member {number} serialNumber
                     * @memberof Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T
                     * @instance
                     */
                    UC_TO_GL_INIT_GAME_T.prototype.serialNumber = 0;
    
                    /**
                     * Creates a new UC_TO_GL_INIT_GAME_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_INIT_GAME_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T} UC_TO_GL_INIT_GAME_T instance
                     */
                    UC_TO_GL_INIT_GAME_T.create = function create(properties) {
                        return new UC_TO_GL_INIT_GAME_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_INIT_GAME_T message. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_INIT_GAME_T} message UC_TO_GL_INIT_GAME_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_INIT_GAME_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.sharedProtoVersion != null && message.hasOwnProperty("sharedProtoVersion"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sharedProtoVersion);
                        if (message.gameProtoVersion != null && message.hasOwnProperty("gameProtoVersion"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gameProtoVersion);
                        if (message.enterType != null && message.hasOwnProperty("enterType"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.enterType);
                        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.serialNumber);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_INIT_GAME_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_INIT_GAME_T} message UC_TO_GL_INIT_GAME_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_INIT_GAME_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_INIT_GAME_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T} UC_TO_GL_INIT_GAME_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_INIT_GAME_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.sharedProtoVersion = reader.int32();
                                break;
                            case 2:
                                message.gameProtoVersion = reader.int32();
                                break;
                            case 3:
                                message.enterType = reader.int32();
                                break;
                            case 4:
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
                     * Decodes a UC_TO_GL_INIT_GAME_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T} UC_TO_GL_INIT_GAME_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_INIT_GAME_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a UC_TO_GL_INIT_GAME_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_INIT_GAME_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.sharedProtoVersion != null && message.hasOwnProperty("sharedProtoVersion"))
                            if (!$util.isInteger(message.sharedProtoVersion))
                                return "sharedProtoVersion: integer expected";
                        if (message.gameProtoVersion != null && message.hasOwnProperty("gameProtoVersion"))
                            if (!$util.isInteger(message.gameProtoVersion))
                                return "gameProtoVersion: integer expected";
                        if (message.enterType != null && message.hasOwnProperty("enterType"))
                            if (!$util.isInteger(message.enterType))
                                return "enterType: integer expected";
                        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
                            if (!$util.isInteger(message.serialNumber))
                                return "serialNumber: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_INIT_GAME_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T} UC_TO_GL_INIT_GAME_T
                     */
                    UC_TO_GL_INIT_GAME_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T();
                        if (object.sharedProtoVersion != null)
                            message.sharedProtoVersion = object.sharedProtoVersion | 0;
                        if (object.gameProtoVersion != null)
                            message.gameProtoVersion = object.gameProtoVersion | 0;
                        if (object.enterType != null)
                            message.enterType = object.enterType | 0;
                        if (object.serialNumber != null)
                            message.serialNumber = object.serialNumber | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_INIT_GAME_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T
                     * @static
                     * @param {Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T} message UC_TO_GL_INIT_GAME_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_INIT_GAME_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.sharedProtoVersion = 0;
                            object.gameProtoVersion = 0;
                            object.enterType = 0;
                            object.serialNumber = 0;
                        }
                        if (message.sharedProtoVersion != null && message.hasOwnProperty("sharedProtoVersion"))
                            object.sharedProtoVersion = message.sharedProtoVersion;
                        if (message.gameProtoVersion != null && message.hasOwnProperty("gameProtoVersion"))
                            object.gameProtoVersion = message.gameProtoVersion;
                        if (message.enterType != null && message.hasOwnProperty("enterType"))
                            object.enterType = message.enterType;
                        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
                            object.serialNumber = message.serialNumber;
                        return object;
                    };
    
                    /**
                     * Converts this UC_TO_GL_INIT_GAME_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_INIT_GAME_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_INIT_GAME_T;
                })();
    
                Shared.UC_TO_GL_LEAVE_GAME_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_LEAVE_GAME_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IUC_TO_GL_LEAVE_GAME_T
                     * @property {boolean|null} [isManualSend] UC_TO_GL_LEAVE_GAME_T isManualSend
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_LEAVE_GAME_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a UC_TO_GL_LEAVE_GAME_T.
                     * @implements IUC_TO_GL_LEAVE_GAME_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IUC_TO_GL_LEAVE_GAME_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_LEAVE_GAME_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UC_TO_GL_LEAVE_GAME_T isManualSend.
                     * @member {boolean} isManualSend
                     * @memberof Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T
                     * @instance
                     */
                    UC_TO_GL_LEAVE_GAME_T.prototype.isManualSend = false;
    
                    /**
                     * Creates a new UC_TO_GL_LEAVE_GAME_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_LEAVE_GAME_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T} UC_TO_GL_LEAVE_GAME_T instance
                     */
                    UC_TO_GL_LEAVE_GAME_T.create = function create(properties) {
                        return new UC_TO_GL_LEAVE_GAME_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_LEAVE_GAME_T message. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_LEAVE_GAME_T} message UC_TO_GL_LEAVE_GAME_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_LEAVE_GAME_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.isManualSend != null && message.hasOwnProperty("isManualSend"))
                            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isManualSend);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_LEAVE_GAME_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_LEAVE_GAME_T} message UC_TO_GL_LEAVE_GAME_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_LEAVE_GAME_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_LEAVE_GAME_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T} UC_TO_GL_LEAVE_GAME_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_LEAVE_GAME_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.isManualSend = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a UC_TO_GL_LEAVE_GAME_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T} UC_TO_GL_LEAVE_GAME_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_LEAVE_GAME_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a UC_TO_GL_LEAVE_GAME_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_LEAVE_GAME_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.isManualSend != null && message.hasOwnProperty("isManualSend"))
                            if (typeof message.isManualSend !== "boolean")
                                return "isManualSend: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_LEAVE_GAME_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T} UC_TO_GL_LEAVE_GAME_T
                     */
                    UC_TO_GL_LEAVE_GAME_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T();
                        if (object.isManualSend != null)
                            message.isManualSend = Boolean(object.isManualSend);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_LEAVE_GAME_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T
                     * @static
                     * @param {Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T} message UC_TO_GL_LEAVE_GAME_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_LEAVE_GAME_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.isManualSend = false;
                        if (message.isManualSend != null && message.hasOwnProperty("isManualSend"))
                            object.isManualSend = message.isManualSend;
                        return object;
                    };
    
                    /**
                     * Converts this UC_TO_GL_LEAVE_GAME_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_LEAVE_GAME_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_LEAVE_GAME_T;
                })();
    
                Shared.UC_TO_GL_CHANGE_CHIP_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_CHANGE_CHIP_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IUC_TO_GL_CHANGE_CHIP_T
                     * @property {Array.<number>|null} [chipIdList] UC_TO_GL_CHANGE_CHIP_T chipIdList
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_CHANGE_CHIP_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a UC_TO_GL_CHANGE_CHIP_T.
                     * @implements IUC_TO_GL_CHANGE_CHIP_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IUC_TO_GL_CHANGE_CHIP_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_CHANGE_CHIP_T(properties) {
                        this.chipIdList = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UC_TO_GL_CHANGE_CHIP_T chipIdList.
                     * @member {Array.<number>} chipIdList
                     * @memberof Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T
                     * @instance
                     */
                    UC_TO_GL_CHANGE_CHIP_T.prototype.chipIdList = $util.emptyArray;
    
                    /**
                     * Creates a new UC_TO_GL_CHANGE_CHIP_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_CHANGE_CHIP_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T} UC_TO_GL_CHANGE_CHIP_T instance
                     */
                    UC_TO_GL_CHANGE_CHIP_T.create = function create(properties) {
                        return new UC_TO_GL_CHANGE_CHIP_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_CHANGE_CHIP_T message. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_CHANGE_CHIP_T} message UC_TO_GL_CHANGE_CHIP_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_CHANGE_CHIP_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.chipIdList != null && message.chipIdList.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.chipIdList.length; ++i)
                                writer.int32(message.chipIdList[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_CHANGE_CHIP_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_CHANGE_CHIP_T} message UC_TO_GL_CHANGE_CHIP_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_CHANGE_CHIP_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_CHANGE_CHIP_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T} UC_TO_GL_CHANGE_CHIP_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_CHANGE_CHIP_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.chipIdList && message.chipIdList.length))
                                    message.chipIdList = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.chipIdList.push(reader.int32());
                                } else
                                    message.chipIdList.push(reader.int32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a UC_TO_GL_CHANGE_CHIP_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T} UC_TO_GL_CHANGE_CHIP_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_CHANGE_CHIP_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a UC_TO_GL_CHANGE_CHIP_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_CHANGE_CHIP_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.chipIdList != null && message.hasOwnProperty("chipIdList")) {
                            if (!Array.isArray(message.chipIdList))
                                return "chipIdList: array expected";
                            for (var i = 0; i < message.chipIdList.length; ++i)
                                if (!$util.isInteger(message.chipIdList[i]))
                                    return "chipIdList: integer[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_CHANGE_CHIP_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T} UC_TO_GL_CHANGE_CHIP_T
                     */
                    UC_TO_GL_CHANGE_CHIP_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T();
                        if (object.chipIdList) {
                            if (!Array.isArray(object.chipIdList))
                                throw TypeError(".Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T.chipIdList: array expected");
                            message.chipIdList = [];
                            for (var i = 0; i < object.chipIdList.length; ++i)
                                message.chipIdList[i] = object.chipIdList[i] | 0;
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_CHANGE_CHIP_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T
                     * @static
                     * @param {Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T} message UC_TO_GL_CHANGE_CHIP_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_CHANGE_CHIP_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.chipIdList = [];
                        if (message.chipIdList && message.chipIdList.length) {
                            object.chipIdList = [];
                            for (var j = 0; j < message.chipIdList.length; ++j)
                                object.chipIdList[j] = message.chipIdList[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this UC_TO_GL_CHANGE_CHIP_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_CHANGE_CHIP_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_CHANGE_CHIP_T;
                })();
    
                Shared.UC_TO_GL_UPDATE_CREDIT_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_UPDATE_CREDIT_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IUC_TO_GL_UPDATE_CREDIT_T
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_UPDATE_CREDIT_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a UC_TO_GL_UPDATE_CREDIT_T.
                     * @implements IUC_TO_GL_UPDATE_CREDIT_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IUC_TO_GL_UPDATE_CREDIT_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_UPDATE_CREDIT_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Creates a new UC_TO_GL_UPDATE_CREDIT_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_UPDATE_CREDIT_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T} UC_TO_GL_UPDATE_CREDIT_T instance
                     */
                    UC_TO_GL_UPDATE_CREDIT_T.create = function create(properties) {
                        return new UC_TO_GL_UPDATE_CREDIT_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_UPDATE_CREDIT_T message. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_UPDATE_CREDIT_T} message UC_TO_GL_UPDATE_CREDIT_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_UPDATE_CREDIT_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_UPDATE_CREDIT_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_UPDATE_CREDIT_T} message UC_TO_GL_UPDATE_CREDIT_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_UPDATE_CREDIT_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_UPDATE_CREDIT_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T} UC_TO_GL_UPDATE_CREDIT_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_UPDATE_CREDIT_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T();
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
                     * Decodes a UC_TO_GL_UPDATE_CREDIT_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T} UC_TO_GL_UPDATE_CREDIT_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_UPDATE_CREDIT_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a UC_TO_GL_UPDATE_CREDIT_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_UPDATE_CREDIT_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_UPDATE_CREDIT_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T} UC_TO_GL_UPDATE_CREDIT_T
                     */
                    UC_TO_GL_UPDATE_CREDIT_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T)
                            return object;
                        return new $root.Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T();
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_UPDATE_CREDIT_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T
                     * @static
                     * @param {Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T} message UC_TO_GL_UPDATE_CREDIT_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_UPDATE_CREDIT_T.toObject = function toObject() {
                        return {};
                    };
    
                    /**
                     * Converts this UC_TO_GL_UPDATE_CREDIT_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_UPDATE_CREDIT_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_UPDATE_CREDIT_T;
                })();
    
                Shared.UC_TO_GL_SEND_TICK_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_SEND_TICK_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IUC_TO_GL_SEND_TICK_T
                     * @property {number|null} [gameID] UC_TO_GL_SEND_TICK_T gameID
                     * @property {number|null} [tableID] UC_TO_GL_SEND_TICK_T tableID
                     * @property {number|null} [timeStamp] UC_TO_GL_SEND_TICK_T timeStamp
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_SEND_TICK_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a UC_TO_GL_SEND_TICK_T.
                     * @implements IUC_TO_GL_SEND_TICK_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IUC_TO_GL_SEND_TICK_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_SEND_TICK_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UC_TO_GL_SEND_TICK_T gameID.
                     * @member {number} gameID
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T
                     * @instance
                     */
                    UC_TO_GL_SEND_TICK_T.prototype.gameID = 0;
    
                    /**
                     * UC_TO_GL_SEND_TICK_T tableID.
                     * @member {number} tableID
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T
                     * @instance
                     */
                    UC_TO_GL_SEND_TICK_T.prototype.tableID = 0;
    
                    /**
                     * UC_TO_GL_SEND_TICK_T timeStamp.
                     * @member {number} timeStamp
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T
                     * @instance
                     */
                    UC_TO_GL_SEND_TICK_T.prototype.timeStamp = 0;
    
                    /**
                     * Creates a new UC_TO_GL_SEND_TICK_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_SEND_TICK_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T} UC_TO_GL_SEND_TICK_T instance
                     */
                    UC_TO_GL_SEND_TICK_T.create = function create(properties) {
                        return new UC_TO_GL_SEND_TICK_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_SEND_TICK_T message. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_SEND_TICK_T} message UC_TO_GL_SEND_TICK_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_SEND_TICK_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.gameID != null && message.hasOwnProperty("gameID"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameID);
                        if (message.tableID != null && message.hasOwnProperty("tableID"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.tableID);
                        if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                            writer.uint32(/* id 3, wireType 1 =*/25).double(message.timeStamp);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_SEND_TICK_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_SEND_TICK_T} message UC_TO_GL_SEND_TICK_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_SEND_TICK_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_SEND_TICK_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T} UC_TO_GL_SEND_TICK_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_SEND_TICK_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.gameID = reader.int32();
                                break;
                            case 2:
                                message.tableID = reader.int32();
                                break;
                            case 3:
                                message.timeStamp = reader.double();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a UC_TO_GL_SEND_TICK_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T} UC_TO_GL_SEND_TICK_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_SEND_TICK_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a UC_TO_GL_SEND_TICK_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_SEND_TICK_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.gameID != null && message.hasOwnProperty("gameID"))
                            if (!$util.isInteger(message.gameID))
                                return "gameID: integer expected";
                        if (message.tableID != null && message.hasOwnProperty("tableID"))
                            if (!$util.isInteger(message.tableID))
                                return "tableID: integer expected";
                        if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                            if (typeof message.timeStamp !== "number")
                                return "timeStamp: number expected";
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_SEND_TICK_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T} UC_TO_GL_SEND_TICK_T
                     */
                    UC_TO_GL_SEND_TICK_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T();
                        if (object.gameID != null)
                            message.gameID = object.gameID | 0;
                        if (object.tableID != null)
                            message.tableID = object.tableID | 0;
                        if (object.timeStamp != null)
                            message.timeStamp = Number(object.timeStamp);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_SEND_TICK_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T
                     * @static
                     * @param {Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T} message UC_TO_GL_SEND_TICK_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_SEND_TICK_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.gameID = 0;
                            object.tableID = 0;
                            object.timeStamp = 0;
                        }
                        if (message.gameID != null && message.hasOwnProperty("gameID"))
                            object.gameID = message.gameID;
                        if (message.tableID != null && message.hasOwnProperty("tableID"))
                            object.tableID = message.tableID;
                        if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                            object.timeStamp = options.json && !isFinite(message.timeStamp) ? String(message.timeStamp) : message.timeStamp;
                        return object;
                    };
    
                    /**
                     * Converts this UC_TO_GL_SEND_TICK_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_SEND_TICK_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_SEND_TICK_T;
                })();
    
                Shared.UC_TO_GL_ACTIVITY_ANIM_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_ACTIVITY_ANIM_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IUC_TO_GL_ACTIVITY_ANIM_T
                     * @property {number|null} [ActivityID] UC_TO_GL_ACTIVITY_ANIM_T ActivityID
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_ACTIVITY_ANIM_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a UC_TO_GL_ACTIVITY_ANIM_T.
                     * @implements IUC_TO_GL_ACTIVITY_ANIM_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_ANIM_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_ACTIVITY_ANIM_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UC_TO_GL_ACTIVITY_ANIM_T ActivityID.
                     * @member {number} ActivityID
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T
                     * @instance
                     */
                    UC_TO_GL_ACTIVITY_ANIM_T.prototype.ActivityID = 0;
    
                    /**
                     * Creates a new UC_TO_GL_ACTIVITY_ANIM_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_ANIM_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T} UC_TO_GL_ACTIVITY_ANIM_T instance
                     */
                    UC_TO_GL_ACTIVITY_ANIM_T.create = function create(properties) {
                        return new UC_TO_GL_ACTIVITY_ANIM_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_ACTIVITY_ANIM_T message. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_ANIM_T} message UC_TO_GL_ACTIVITY_ANIM_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_ACTIVITY_ANIM_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.ActivityID != null && message.hasOwnProperty("ActivityID"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ActivityID);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_ACTIVITY_ANIM_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_ANIM_T} message UC_TO_GL_ACTIVITY_ANIM_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_ACTIVITY_ANIM_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_ACTIVITY_ANIM_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T} UC_TO_GL_ACTIVITY_ANIM_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_ACTIVITY_ANIM_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.ActivityID = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a UC_TO_GL_ACTIVITY_ANIM_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T} UC_TO_GL_ACTIVITY_ANIM_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_ACTIVITY_ANIM_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a UC_TO_GL_ACTIVITY_ANIM_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_ACTIVITY_ANIM_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.ActivityID != null && message.hasOwnProperty("ActivityID"))
                            if (!$util.isInteger(message.ActivityID))
                                return "ActivityID: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_ACTIVITY_ANIM_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T} UC_TO_GL_ACTIVITY_ANIM_T
                     */
                    UC_TO_GL_ACTIVITY_ANIM_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T();
                        if (object.ActivityID != null)
                            message.ActivityID = object.ActivityID | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_ACTIVITY_ANIM_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T
                     * @static
                     * @param {Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T} message UC_TO_GL_ACTIVITY_ANIM_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_ACTIVITY_ANIM_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.ActivityID = 0;
                        if (message.ActivityID != null && message.hasOwnProperty("ActivityID"))
                            object.ActivityID = message.ActivityID;
                        return object;
                    };
    
                    /**
                     * Converts this UC_TO_GL_ACTIVITY_ANIM_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_ACTIVITY_ANIM_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_ACTIVITY_ANIM_T;
                })();
    
                Shared.UC_TO_GL_ACTIVITY_ANIM_END_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_ACTIVITY_ANIM_END_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IUC_TO_GL_ACTIVITY_ANIM_END_T
                     * @property {number|null} [ActivityID] UC_TO_GL_ACTIVITY_ANIM_END_T ActivityID
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_ACTIVITY_ANIM_END_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a UC_TO_GL_ACTIVITY_ANIM_END_T.
                     * @implements IUC_TO_GL_ACTIVITY_ANIM_END_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_ANIM_END_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_ACTIVITY_ANIM_END_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UC_TO_GL_ACTIVITY_ANIM_END_T ActivityID.
                     * @member {number} ActivityID
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T
                     * @instance
                     */
                    UC_TO_GL_ACTIVITY_ANIM_END_T.prototype.ActivityID = 0;
    
                    /**
                     * Creates a new UC_TO_GL_ACTIVITY_ANIM_END_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_ANIM_END_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T} UC_TO_GL_ACTIVITY_ANIM_END_T instance
                     */
                    UC_TO_GL_ACTIVITY_ANIM_END_T.create = function create(properties) {
                        return new UC_TO_GL_ACTIVITY_ANIM_END_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_ACTIVITY_ANIM_END_T message. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_ANIM_END_T} message UC_TO_GL_ACTIVITY_ANIM_END_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_ACTIVITY_ANIM_END_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.ActivityID != null && message.hasOwnProperty("ActivityID"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ActivityID);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_ACTIVITY_ANIM_END_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_ANIM_END_T} message UC_TO_GL_ACTIVITY_ANIM_END_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_ACTIVITY_ANIM_END_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_ACTIVITY_ANIM_END_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T} UC_TO_GL_ACTIVITY_ANIM_END_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_ACTIVITY_ANIM_END_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.ActivityID = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a UC_TO_GL_ACTIVITY_ANIM_END_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T} UC_TO_GL_ACTIVITY_ANIM_END_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_ACTIVITY_ANIM_END_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a UC_TO_GL_ACTIVITY_ANIM_END_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_ACTIVITY_ANIM_END_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.ActivityID != null && message.hasOwnProperty("ActivityID"))
                            if (!$util.isInteger(message.ActivityID))
                                return "ActivityID: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_ACTIVITY_ANIM_END_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T} UC_TO_GL_ACTIVITY_ANIM_END_T
                     */
                    UC_TO_GL_ACTIVITY_ANIM_END_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T();
                        if (object.ActivityID != null)
                            message.ActivityID = object.ActivityID | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_ACTIVITY_ANIM_END_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T
                     * @static
                     * @param {Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T} message UC_TO_GL_ACTIVITY_ANIM_END_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_ACTIVITY_ANIM_END_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.ActivityID = 0;
                        if (message.ActivityID != null && message.hasOwnProperty("ActivityID"))
                            object.ActivityID = message.ActivityID;
                        return object;
                    };
    
                    /**
                     * Converts this UC_TO_GL_ACTIVITY_ANIM_END_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_ACTIVITY_ANIM_END_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_ACTIVITY_ANIM_END_T;
                })();
    
                Shared.UC_TO_GL_RESX_LOAD_FINISH_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_RESX_LOAD_FINISH_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IUC_TO_GL_RESX_LOAD_FINISH_T
                     * @property {number|null} [resxID] UC_TO_GL_RESX_LOAD_FINISH_T resxID
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_RESX_LOAD_FINISH_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a UC_TO_GL_RESX_LOAD_FINISH_T.
                     * @implements IUC_TO_GL_RESX_LOAD_FINISH_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IUC_TO_GL_RESX_LOAD_FINISH_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_RESX_LOAD_FINISH_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UC_TO_GL_RESX_LOAD_FINISH_T resxID.
                     * @member {number} resxID
                     * @memberof Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T
                     * @instance
                     */
                    UC_TO_GL_RESX_LOAD_FINISH_T.prototype.resxID = 0;
    
                    /**
                     * Creates a new UC_TO_GL_RESX_LOAD_FINISH_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_RESX_LOAD_FINISH_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T} UC_TO_GL_RESX_LOAD_FINISH_T instance
                     */
                    UC_TO_GL_RESX_LOAD_FINISH_T.create = function create(properties) {
                        return new UC_TO_GL_RESX_LOAD_FINISH_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_RESX_LOAD_FINISH_T message. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_RESX_LOAD_FINISH_T} message UC_TO_GL_RESX_LOAD_FINISH_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_RESX_LOAD_FINISH_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.resxID != null && message.hasOwnProperty("resxID"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.resxID);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_RESX_LOAD_FINISH_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_RESX_LOAD_FINISH_T} message UC_TO_GL_RESX_LOAD_FINISH_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_RESX_LOAD_FINISH_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_RESX_LOAD_FINISH_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T} UC_TO_GL_RESX_LOAD_FINISH_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_RESX_LOAD_FINISH_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.resxID = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a UC_TO_GL_RESX_LOAD_FINISH_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T} UC_TO_GL_RESX_LOAD_FINISH_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_RESX_LOAD_FINISH_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a UC_TO_GL_RESX_LOAD_FINISH_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_RESX_LOAD_FINISH_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.resxID != null && message.hasOwnProperty("resxID"))
                            if (!$util.isInteger(message.resxID))
                                return "resxID: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_RESX_LOAD_FINISH_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T} UC_TO_GL_RESX_LOAD_FINISH_T
                     */
                    UC_TO_GL_RESX_LOAD_FINISH_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T();
                        if (object.resxID != null)
                            message.resxID = object.resxID | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_RESX_LOAD_FINISH_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T
                     * @static
                     * @param {Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T} message UC_TO_GL_RESX_LOAD_FINISH_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_RESX_LOAD_FINISH_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.resxID = 0;
                        if (message.resxID != null && message.hasOwnProperty("resxID"))
                            object.resxID = message.resxID;
                        return object;
                    };
    
                    /**
                     * Converts this UC_TO_GL_RESX_LOAD_FINISH_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_RESX_LOAD_FINISH_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_RESX_LOAD_FINISH_T;
                })();
    
                Shared.UC_TO_GL_SHARED_CHEAT_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_SHARED_CHEAT_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IUC_TO_GL_SHARED_CHEAT_T
                     * @property {number|null} [iType] UC_TO_GL_SHARED_CHEAT_T iType
                     * @property {Array.<number>|null} [arrValue] UC_TO_GL_SHARED_CHEAT_T arrValue
                     * @property {string|null} [jsonContent] UC_TO_GL_SHARED_CHEAT_T jsonContent
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_SHARED_CHEAT_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a UC_TO_GL_SHARED_CHEAT_T.
                     * @implements IUC_TO_GL_SHARED_CHEAT_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IUC_TO_GL_SHARED_CHEAT_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_SHARED_CHEAT_T(properties) {
                        this.arrValue = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UC_TO_GL_SHARED_CHEAT_T iType.
                     * @member {number} iType
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T
                     * @instance
                     */
                    UC_TO_GL_SHARED_CHEAT_T.prototype.iType = 0;
    
                    /**
                     * UC_TO_GL_SHARED_CHEAT_T arrValue.
                     * @member {Array.<number>} arrValue
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T
                     * @instance
                     */
                    UC_TO_GL_SHARED_CHEAT_T.prototype.arrValue = $util.emptyArray;
    
                    /**
                     * UC_TO_GL_SHARED_CHEAT_T jsonContent.
                     * @member {string} jsonContent
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T
                     * @instance
                     */
                    UC_TO_GL_SHARED_CHEAT_T.prototype.jsonContent = "";
    
                    /**
                     * Creates a new UC_TO_GL_SHARED_CHEAT_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_SHARED_CHEAT_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T} UC_TO_GL_SHARED_CHEAT_T instance
                     */
                    UC_TO_GL_SHARED_CHEAT_T.create = function create(properties) {
                        return new UC_TO_GL_SHARED_CHEAT_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_SHARED_CHEAT_T message. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_SHARED_CHEAT_T} message UC_TO_GL_SHARED_CHEAT_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_SHARED_CHEAT_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.iType != null && message.hasOwnProperty("iType"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.iType);
                        if (message.arrValue != null && message.arrValue.length) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork();
                            for (var i = 0; i < message.arrValue.length; ++i)
                                writer.int32(message.arrValue[i]);
                            writer.ldelim();
                        }
                        if (message.jsonContent != null && message.hasOwnProperty("jsonContent"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.jsonContent);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_SHARED_CHEAT_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_SHARED_CHEAT_T} message UC_TO_GL_SHARED_CHEAT_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_SHARED_CHEAT_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_SHARED_CHEAT_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T} UC_TO_GL_SHARED_CHEAT_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_SHARED_CHEAT_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.iType = reader.int32();
                                break;
                            case 2:
                                if (!(message.arrValue && message.arrValue.length))
                                    message.arrValue = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.arrValue.push(reader.int32());
                                } else
                                    message.arrValue.push(reader.int32());
                                break;
                            case 3:
                                message.jsonContent = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a UC_TO_GL_SHARED_CHEAT_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T} UC_TO_GL_SHARED_CHEAT_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_SHARED_CHEAT_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a UC_TO_GL_SHARED_CHEAT_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_SHARED_CHEAT_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.iType != null && message.hasOwnProperty("iType"))
                            if (!$util.isInteger(message.iType))
                                return "iType: integer expected";
                        if (message.arrValue != null && message.hasOwnProperty("arrValue")) {
                            if (!Array.isArray(message.arrValue))
                                return "arrValue: array expected";
                            for (var i = 0; i < message.arrValue.length; ++i)
                                if (!$util.isInteger(message.arrValue[i]))
                                    return "arrValue: integer[] expected";
                        }
                        if (message.jsonContent != null && message.hasOwnProperty("jsonContent"))
                            if (!$util.isString(message.jsonContent))
                                return "jsonContent: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_SHARED_CHEAT_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T} UC_TO_GL_SHARED_CHEAT_T
                     */
                    UC_TO_GL_SHARED_CHEAT_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T();
                        if (object.iType != null)
                            message.iType = object.iType | 0;
                        if (object.arrValue) {
                            if (!Array.isArray(object.arrValue))
                                throw TypeError(".Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T.arrValue: array expected");
                            message.arrValue = [];
                            for (var i = 0; i < object.arrValue.length; ++i)
                                message.arrValue[i] = object.arrValue[i] | 0;
                        }
                        if (object.jsonContent != null)
                            message.jsonContent = String(object.jsonContent);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_SHARED_CHEAT_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T
                     * @static
                     * @param {Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T} message UC_TO_GL_SHARED_CHEAT_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_SHARED_CHEAT_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.arrValue = [];
                        if (options.defaults) {
                            object.iType = 0;
                            object.jsonContent = "";
                        }
                        if (message.iType != null && message.hasOwnProperty("iType"))
                            object.iType = message.iType;
                        if (message.arrValue && message.arrValue.length) {
                            object.arrValue = [];
                            for (var j = 0; j < message.arrValue.length; ++j)
                                object.arrValue[j] = message.arrValue[j];
                        }
                        if (message.jsonContent != null && message.hasOwnProperty("jsonContent"))
                            object.jsonContent = message.jsonContent;
                        return object;
                    };
    
                    /**
                     * Converts this UC_TO_GL_SHARED_CHEAT_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_SHARED_CHEAT_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_SHARED_CHEAT_T;
                })();
    
                Shared.UC_TO_GL_ACTIVITY_REQ_T = (function() {
    
                    /**
                     * Properties of a UC_TO_GL_ACTIVITY_REQ_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IUC_TO_GL_ACTIVITY_REQ_T
                     * @property {number|null} [ActivityID] UC_TO_GL_ACTIVITY_REQ_T ActivityID
                     * @property {number|null} [SID] UC_TO_GL_ACTIVITY_REQ_T SID
                     */
    
                    /**
                     * Constructs a new UC_TO_GL_ACTIVITY_REQ_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a UC_TO_GL_ACTIVITY_REQ_T.
                     * @implements IUC_TO_GL_ACTIVITY_REQ_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_REQ_T=} [properties] Properties to set
                     */
                    function UC_TO_GL_ACTIVITY_REQ_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UC_TO_GL_ACTIVITY_REQ_T ActivityID.
                     * @member {number} ActivityID
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T
                     * @instance
                     */
                    UC_TO_GL_ACTIVITY_REQ_T.prototype.ActivityID = 0;
    
                    /**
                     * UC_TO_GL_ACTIVITY_REQ_T SID.
                     * @member {number} SID
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T
                     * @instance
                     */
                    UC_TO_GL_ACTIVITY_REQ_T.prototype.SID = 0;
    
                    /**
                     * Creates a new UC_TO_GL_ACTIVITY_REQ_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_REQ_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T} UC_TO_GL_ACTIVITY_REQ_T instance
                     */
                    UC_TO_GL_ACTIVITY_REQ_T.create = function create(properties) {
                        return new UC_TO_GL_ACTIVITY_REQ_T(properties);
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_ACTIVITY_REQ_T message. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_REQ_T} message UC_TO_GL_ACTIVITY_REQ_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_ACTIVITY_REQ_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.ActivityID != null && message.hasOwnProperty("ActivityID"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ActivityID);
                        if (message.SID != null && message.hasOwnProperty("SID"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.SID);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UC_TO_GL_ACTIVITY_REQ_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T
                     * @static
                     * @param {Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_REQ_T} message UC_TO_GL_ACTIVITY_REQ_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UC_TO_GL_ACTIVITY_REQ_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a UC_TO_GL_ACTIVITY_REQ_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T} UC_TO_GL_ACTIVITY_REQ_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_ACTIVITY_REQ_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.ActivityID = reader.int32();
                                break;
                            case 2:
                                message.SID = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a UC_TO_GL_ACTIVITY_REQ_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T} UC_TO_GL_ACTIVITY_REQ_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UC_TO_GL_ACTIVITY_REQ_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a UC_TO_GL_ACTIVITY_REQ_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UC_TO_GL_ACTIVITY_REQ_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.ActivityID != null && message.hasOwnProperty("ActivityID"))
                            if (!$util.isInteger(message.ActivityID))
                                return "ActivityID: integer expected";
                        if (message.SID != null && message.hasOwnProperty("SID"))
                            if (!$util.isInteger(message.SID))
                                return "SID: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a UC_TO_GL_ACTIVITY_REQ_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T} UC_TO_GL_ACTIVITY_REQ_T
                     */
                    UC_TO_GL_ACTIVITY_REQ_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T();
                        if (object.ActivityID != null)
                            message.ActivityID = object.ActivityID | 0;
                        if (object.SID != null)
                            message.SID = object.SID | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a UC_TO_GL_ACTIVITY_REQ_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T
                     * @static
                     * @param {Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T} message UC_TO_GL_ACTIVITY_REQ_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UC_TO_GL_ACTIVITY_REQ_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.ActivityID = 0;
                            object.SID = 0;
                        }
                        if (message.ActivityID != null && message.hasOwnProperty("ActivityID"))
                            object.ActivityID = message.ActivityID;
                        if (message.SID != null && message.hasOwnProperty("SID"))
                            object.SID = message.SID;
                        return object;
                    };
    
                    /**
                     * Converts this UC_TO_GL_ACTIVITY_REQ_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UC_TO_GL_ACTIVITY_REQ_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UC_TO_GL_ACTIVITY_REQ_T;
                })();
    
                Shared.GL_TO_UC_SEND_TEST_ACK_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_SEND_TEST_ACK_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IGL_TO_UC_SEND_TEST_ACK_T
                     * @property {number|null} [iTest] GL_TO_UC_SEND_TEST_ACK_T iTest
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_SEND_TEST_ACK_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a GL_TO_UC_SEND_TEST_ACK_T.
                     * @implements IGL_TO_UC_SEND_TEST_ACK_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IGL_TO_UC_SEND_TEST_ACK_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_SEND_TEST_ACK_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_SEND_TEST_ACK_T iTest.
                     * @member {number} iTest
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T
                     * @instance
                     */
                    GL_TO_UC_SEND_TEST_ACK_T.prototype.iTest = 0;
    
                    /**
                     * Creates a new GL_TO_UC_SEND_TEST_ACK_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_SEND_TEST_ACK_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T} GL_TO_UC_SEND_TEST_ACK_T instance
                     */
                    GL_TO_UC_SEND_TEST_ACK_T.create = function create(properties) {
                        return new GL_TO_UC_SEND_TEST_ACK_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_SEND_TEST_ACK_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_SEND_TEST_ACK_T} message GL_TO_UC_SEND_TEST_ACK_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_SEND_TEST_ACK_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.iTest != null && message.hasOwnProperty("iTest"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.iTest);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_SEND_TEST_ACK_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_SEND_TEST_ACK_T} message GL_TO_UC_SEND_TEST_ACK_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_SEND_TEST_ACK_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_SEND_TEST_ACK_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T} GL_TO_UC_SEND_TEST_ACK_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_SEND_TEST_ACK_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.iTest = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_SEND_TEST_ACK_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T} GL_TO_UC_SEND_TEST_ACK_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_SEND_TEST_ACK_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_SEND_TEST_ACK_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_SEND_TEST_ACK_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.iTest != null && message.hasOwnProperty("iTest"))
                            if (!$util.isInteger(message.iTest))
                                return "iTest: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_SEND_TEST_ACK_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T} GL_TO_UC_SEND_TEST_ACK_T
                     */
                    GL_TO_UC_SEND_TEST_ACK_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T();
                        if (object.iTest != null)
                            message.iTest = object.iTest | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_SEND_TEST_ACK_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T
                     * @static
                     * @param {Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T} message GL_TO_UC_SEND_TEST_ACK_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_SEND_TEST_ACK_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.iTest = 0;
                        if (message.iTest != null && message.hasOwnProperty("iTest"))
                            object.iTest = message.iTest;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_SEND_TEST_ACK_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_SEND_TEST_ACK_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_SEND_TEST_ACK_T;
                })();
    
                Shared.GL_TO_UC_INIT_GAME_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_INIT_GAME_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IGL_TO_UC_INIT_GAME_T
                     * @property {number|null} [resultCode] GL_TO_UC_INIT_GAME_T resultCode
                     * @property {number|null} [sharedProtoVersion] GL_TO_UC_INIT_GAME_T sharedProtoVersion
                     * @property {number|null} [gameProtoVersion] GL_TO_UC_INIT_GAME_T gameProtoVersion
                     * @property {number|null} [enterType] GL_TO_UC_INIT_GAME_T enterType
                     * @property {number|null} [serialNumber] GL_TO_UC_INIT_GAME_T serialNumber
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_INIT_GAME_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a GL_TO_UC_INIT_GAME_T.
                     * @implements IGL_TO_UC_INIT_GAME_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IGL_TO_UC_INIT_GAME_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_INIT_GAME_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_INIT_GAME_T resultCode.
                     * @member {number} resultCode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T
                     * @instance
                     */
                    GL_TO_UC_INIT_GAME_T.prototype.resultCode = 0;
    
                    /**
                     * GL_TO_UC_INIT_GAME_T sharedProtoVersion.
                     * @member {number} sharedProtoVersion
                     * @memberof Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T
                     * @instance
                     */
                    GL_TO_UC_INIT_GAME_T.prototype.sharedProtoVersion = 0;
    
                    /**
                     * GL_TO_UC_INIT_GAME_T gameProtoVersion.
                     * @member {number} gameProtoVersion
                     * @memberof Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T
                     * @instance
                     */
                    GL_TO_UC_INIT_GAME_T.prototype.gameProtoVersion = 0;
    
                    /**
                     * GL_TO_UC_INIT_GAME_T enterType.
                     * @member {number} enterType
                     * @memberof Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T
                     * @instance
                     */
                    GL_TO_UC_INIT_GAME_T.prototype.enterType = 0;
    
                    /**
                     * GL_TO_UC_INIT_GAME_T serialNumber.
                     * @member {number} serialNumber
                     * @memberof Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T
                     * @instance
                     */
                    GL_TO_UC_INIT_GAME_T.prototype.serialNumber = 0;
    
                    /**
                     * Creates a new GL_TO_UC_INIT_GAME_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_INIT_GAME_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T} GL_TO_UC_INIT_GAME_T instance
                     */
                    GL_TO_UC_INIT_GAME_T.create = function create(properties) {
                        return new GL_TO_UC_INIT_GAME_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_INIT_GAME_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_INIT_GAME_T} message GL_TO_UC_INIT_GAME_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_INIT_GAME_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.resultCode);
                        if (message.sharedProtoVersion != null && message.hasOwnProperty("sharedProtoVersion"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sharedProtoVersion);
                        if (message.gameProtoVersion != null && message.hasOwnProperty("gameProtoVersion"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gameProtoVersion);
                        if (message.enterType != null && message.hasOwnProperty("enterType"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.enterType);
                        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.serialNumber);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_INIT_GAME_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_INIT_GAME_T} message GL_TO_UC_INIT_GAME_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_INIT_GAME_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_INIT_GAME_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T} GL_TO_UC_INIT_GAME_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_INIT_GAME_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.resultCode = reader.int32();
                                break;
                            case 2:
                                message.sharedProtoVersion = reader.int32();
                                break;
                            case 3:
                                message.gameProtoVersion = reader.int32();
                                break;
                            case 4:
                                message.enterType = reader.int32();
                                break;
                            case 5:
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
                     * Decodes a GL_TO_UC_INIT_GAME_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T} GL_TO_UC_INIT_GAME_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_INIT_GAME_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_INIT_GAME_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_INIT_GAME_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            if (!$util.isInteger(message.resultCode))
                                return "resultCode: integer expected";
                        if (message.sharedProtoVersion != null && message.hasOwnProperty("sharedProtoVersion"))
                            if (!$util.isInteger(message.sharedProtoVersion))
                                return "sharedProtoVersion: integer expected";
                        if (message.gameProtoVersion != null && message.hasOwnProperty("gameProtoVersion"))
                            if (!$util.isInteger(message.gameProtoVersion))
                                return "gameProtoVersion: integer expected";
                        if (message.enterType != null && message.hasOwnProperty("enterType"))
                            if (!$util.isInteger(message.enterType))
                                return "enterType: integer expected";
                        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
                            if (!$util.isInteger(message.serialNumber))
                                return "serialNumber: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_INIT_GAME_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T} GL_TO_UC_INIT_GAME_T
                     */
                    GL_TO_UC_INIT_GAME_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T();
                        if (object.resultCode != null)
                            message.resultCode = object.resultCode | 0;
                        if (object.sharedProtoVersion != null)
                            message.sharedProtoVersion = object.sharedProtoVersion | 0;
                        if (object.gameProtoVersion != null)
                            message.gameProtoVersion = object.gameProtoVersion | 0;
                        if (object.enterType != null)
                            message.enterType = object.enterType | 0;
                        if (object.serialNumber != null)
                            message.serialNumber = object.serialNumber | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_INIT_GAME_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T
                     * @static
                     * @param {Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T} message GL_TO_UC_INIT_GAME_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_INIT_GAME_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.resultCode = 0;
                            object.sharedProtoVersion = 0;
                            object.gameProtoVersion = 0;
                            object.enterType = 0;
                            object.serialNumber = 0;
                        }
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            object.resultCode = message.resultCode;
                        if (message.sharedProtoVersion != null && message.hasOwnProperty("sharedProtoVersion"))
                            object.sharedProtoVersion = message.sharedProtoVersion;
                        if (message.gameProtoVersion != null && message.hasOwnProperty("gameProtoVersion"))
                            object.gameProtoVersion = message.gameProtoVersion;
                        if (message.enterType != null && message.hasOwnProperty("enterType"))
                            object.enterType = message.enterType;
                        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
                            object.serialNumber = message.serialNumber;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_INIT_GAME_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_INIT_GAME_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_INIT_GAME_T;
                })();
    
                Shared.GL_TO_UC_LEAVE_GAME_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_LEAVE_GAME_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IGL_TO_UC_LEAVE_GAME_T
                     * @property {number|null} [resultCode] GL_TO_UC_LEAVE_GAME_T resultCode
                     * @property {boolean|null} [isReserved] GL_TO_UC_LEAVE_GAME_T isReserved
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_LEAVE_GAME_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a GL_TO_UC_LEAVE_GAME_T.
                     * @implements IGL_TO_UC_LEAVE_GAME_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IGL_TO_UC_LEAVE_GAME_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_LEAVE_GAME_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_LEAVE_GAME_T resultCode.
                     * @member {number} resultCode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T
                     * @instance
                     */
                    GL_TO_UC_LEAVE_GAME_T.prototype.resultCode = 0;
    
                    /**
                     * GL_TO_UC_LEAVE_GAME_T isReserved.
                     * @member {boolean} isReserved
                     * @memberof Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T
                     * @instance
                     */
                    GL_TO_UC_LEAVE_GAME_T.prototype.isReserved = false;
    
                    /**
                     * Creates a new GL_TO_UC_LEAVE_GAME_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_LEAVE_GAME_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T} GL_TO_UC_LEAVE_GAME_T instance
                     */
                    GL_TO_UC_LEAVE_GAME_T.create = function create(properties) {
                        return new GL_TO_UC_LEAVE_GAME_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_LEAVE_GAME_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_LEAVE_GAME_T} message GL_TO_UC_LEAVE_GAME_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_LEAVE_GAME_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.resultCode);
                        if (message.isReserved != null && message.hasOwnProperty("isReserved"))
                            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isReserved);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_LEAVE_GAME_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_LEAVE_GAME_T} message GL_TO_UC_LEAVE_GAME_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_LEAVE_GAME_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_LEAVE_GAME_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T} GL_TO_UC_LEAVE_GAME_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_LEAVE_GAME_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.resultCode = reader.int32();
                                break;
                            case 2:
                                message.isReserved = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_LEAVE_GAME_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T} GL_TO_UC_LEAVE_GAME_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_LEAVE_GAME_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_LEAVE_GAME_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_LEAVE_GAME_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            if (!$util.isInteger(message.resultCode))
                                return "resultCode: integer expected";
                        if (message.isReserved != null && message.hasOwnProperty("isReserved"))
                            if (typeof message.isReserved !== "boolean")
                                return "isReserved: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_LEAVE_GAME_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T} GL_TO_UC_LEAVE_GAME_T
                     */
                    GL_TO_UC_LEAVE_GAME_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T();
                        if (object.resultCode != null)
                            message.resultCode = object.resultCode | 0;
                        if (object.isReserved != null)
                            message.isReserved = Boolean(object.isReserved);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_LEAVE_GAME_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T
                     * @static
                     * @param {Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T} message GL_TO_UC_LEAVE_GAME_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_LEAVE_GAME_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.resultCode = 0;
                            object.isReserved = false;
                        }
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            object.resultCode = message.resultCode;
                        if (message.isReserved != null && message.hasOwnProperty("isReserved"))
                            object.isReserved = message.isReserved;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_LEAVE_GAME_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_LEAVE_GAME_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_LEAVE_GAME_T;
                })();
    
                Shared.GL_TO_UC_CHANGE_CHIP_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_CHANGE_CHIP_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IGL_TO_UC_CHANGE_CHIP_T
                     * @property {number|null} [resultCode] GL_TO_UC_CHANGE_CHIP_T resultCode
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_CHANGE_CHIP_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a GL_TO_UC_CHANGE_CHIP_T.
                     * @implements IGL_TO_UC_CHANGE_CHIP_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IGL_TO_UC_CHANGE_CHIP_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_CHANGE_CHIP_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_CHANGE_CHIP_T resultCode.
                     * @member {number} resultCode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T
                     * @instance
                     */
                    GL_TO_UC_CHANGE_CHIP_T.prototype.resultCode = 0;
    
                    /**
                     * Creates a new GL_TO_UC_CHANGE_CHIP_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_CHANGE_CHIP_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T} GL_TO_UC_CHANGE_CHIP_T instance
                     */
                    GL_TO_UC_CHANGE_CHIP_T.create = function create(properties) {
                        return new GL_TO_UC_CHANGE_CHIP_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_CHANGE_CHIP_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_CHANGE_CHIP_T} message GL_TO_UC_CHANGE_CHIP_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_CHANGE_CHIP_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.resultCode);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_CHANGE_CHIP_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_CHANGE_CHIP_T} message GL_TO_UC_CHANGE_CHIP_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_CHANGE_CHIP_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_CHANGE_CHIP_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T} GL_TO_UC_CHANGE_CHIP_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_CHANGE_CHIP_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.resultCode = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_CHANGE_CHIP_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T} GL_TO_UC_CHANGE_CHIP_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_CHANGE_CHIP_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_CHANGE_CHIP_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_CHANGE_CHIP_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            if (!$util.isInteger(message.resultCode))
                                return "resultCode: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_CHANGE_CHIP_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T} GL_TO_UC_CHANGE_CHIP_T
                     */
                    GL_TO_UC_CHANGE_CHIP_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T();
                        if (object.resultCode != null)
                            message.resultCode = object.resultCode | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_CHANGE_CHIP_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T
                     * @static
                     * @param {Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T} message GL_TO_UC_CHANGE_CHIP_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_CHANGE_CHIP_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.resultCode = 0;
                        if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                            object.resultCode = message.resultCode;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_CHANGE_CHIP_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_CHANGE_CHIP_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_CHANGE_CHIP_T;
                })();
    
                Shared.GL_TO_UC_UPDATE_CREDIT_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_UPDATE_CREDIT_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IGL_TO_UC_UPDATE_CREDIT_T
                     * @property {number|Long|null} [credit] GL_TO_UC_UPDATE_CREDIT_T credit
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_UPDATE_CREDIT_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a GL_TO_UC_UPDATE_CREDIT_T.
                     * @implements IGL_TO_UC_UPDATE_CREDIT_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IGL_TO_UC_UPDATE_CREDIT_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_UPDATE_CREDIT_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_UPDATE_CREDIT_T credit.
                     * @member {number|Long} credit
                     * @memberof Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T
                     * @instance
                     */
                    GL_TO_UC_UPDATE_CREDIT_T.prototype.credit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * Creates a new GL_TO_UC_UPDATE_CREDIT_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_UPDATE_CREDIT_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T} GL_TO_UC_UPDATE_CREDIT_T instance
                     */
                    GL_TO_UC_UPDATE_CREDIT_T.create = function create(properties) {
                        return new GL_TO_UC_UPDATE_CREDIT_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_UPDATE_CREDIT_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_UPDATE_CREDIT_T} message GL_TO_UC_UPDATE_CREDIT_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_UPDATE_CREDIT_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.credit != null && message.hasOwnProperty("credit"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.credit);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_UPDATE_CREDIT_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_UPDATE_CREDIT_T} message GL_TO_UC_UPDATE_CREDIT_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_UPDATE_CREDIT_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_UPDATE_CREDIT_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T} GL_TO_UC_UPDATE_CREDIT_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_UPDATE_CREDIT_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.credit = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_UPDATE_CREDIT_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T} GL_TO_UC_UPDATE_CREDIT_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_UPDATE_CREDIT_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_UPDATE_CREDIT_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_UPDATE_CREDIT_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.credit != null && message.hasOwnProperty("credit"))
                            if (!$util.isInteger(message.credit) && !(message.credit && $util.isInteger(message.credit.low) && $util.isInteger(message.credit.high)))
                                return "credit: integer|Long expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_UPDATE_CREDIT_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T} GL_TO_UC_UPDATE_CREDIT_T
                     */
                    GL_TO_UC_UPDATE_CREDIT_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T();
                        if (object.credit != null)
                            if ($util.Long)
                                (message.credit = $util.Long.fromValue(object.credit)).unsigned = false;
                            else if (typeof object.credit === "string")
                                message.credit = parseInt(object.credit, 10);
                            else if (typeof object.credit === "number")
                                message.credit = object.credit;
                            else if (typeof object.credit === "object")
                                message.credit = new $util.LongBits(object.credit.low >>> 0, object.credit.high >>> 0).toNumber();
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_UPDATE_CREDIT_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T
                     * @static
                     * @param {Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T} message GL_TO_UC_UPDATE_CREDIT_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_UPDATE_CREDIT_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.credit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.credit = options.longs === String ? "0" : 0;
                        if (message.credit != null && message.hasOwnProperty("credit"))
                            if (typeof message.credit === "number")
                                object.credit = options.longs === String ? String(message.credit) : message.credit;
                            else
                                object.credit = options.longs === String ? $util.Long.prototype.toString.call(message.credit) : options.longs === Number ? new $util.LongBits(message.credit.low >>> 0, message.credit.high >>> 0).toNumber() : message.credit;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_UPDATE_CREDIT_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_UPDATE_CREDIT_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_UPDATE_CREDIT_T;
                })();
    
                Shared.GL_TO_UC_SEND_TICK_ACK_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_SEND_TICK_ACK_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IGL_TO_UC_SEND_TICK_ACK_T
                     * @property {number|null} [gameID] GL_TO_UC_SEND_TICK_ACK_T gameID
                     * @property {number|null} [tableID] GL_TO_UC_SEND_TICK_ACK_T tableID
                     * @property {number|null} [timeStamp] GL_TO_UC_SEND_TICK_ACK_T timeStamp
                     * @property {boolean|null} [active] GL_TO_UC_SEND_TICK_ACK_T active
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_SEND_TICK_ACK_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a GL_TO_UC_SEND_TICK_ACK_T.
                     * @implements IGL_TO_UC_SEND_TICK_ACK_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IGL_TO_UC_SEND_TICK_ACK_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_SEND_TICK_ACK_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_SEND_TICK_ACK_T gameID.
                     * @member {number} gameID
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T
                     * @instance
                     */
                    GL_TO_UC_SEND_TICK_ACK_T.prototype.gameID = 0;
    
                    /**
                     * GL_TO_UC_SEND_TICK_ACK_T tableID.
                     * @member {number} tableID
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T
                     * @instance
                     */
                    GL_TO_UC_SEND_TICK_ACK_T.prototype.tableID = 0;
    
                    /**
                     * GL_TO_UC_SEND_TICK_ACK_T timeStamp.
                     * @member {number} timeStamp
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T
                     * @instance
                     */
                    GL_TO_UC_SEND_TICK_ACK_T.prototype.timeStamp = 0;
    
                    /**
                     * GL_TO_UC_SEND_TICK_ACK_T active.
                     * @member {boolean} active
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T
                     * @instance
                     */
                    GL_TO_UC_SEND_TICK_ACK_T.prototype.active = false;
    
                    /**
                     * Creates a new GL_TO_UC_SEND_TICK_ACK_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_SEND_TICK_ACK_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T} GL_TO_UC_SEND_TICK_ACK_T instance
                     */
                    GL_TO_UC_SEND_TICK_ACK_T.create = function create(properties) {
                        return new GL_TO_UC_SEND_TICK_ACK_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_SEND_TICK_ACK_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_SEND_TICK_ACK_T} message GL_TO_UC_SEND_TICK_ACK_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_SEND_TICK_ACK_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.gameID != null && message.hasOwnProperty("gameID"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameID);
                        if (message.tableID != null && message.hasOwnProperty("tableID"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.tableID);
                        if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                            writer.uint32(/* id 3, wireType 1 =*/25).double(message.timeStamp);
                        if (message.active != null && message.hasOwnProperty("active"))
                            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.active);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_SEND_TICK_ACK_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_SEND_TICK_ACK_T} message GL_TO_UC_SEND_TICK_ACK_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_SEND_TICK_ACK_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_SEND_TICK_ACK_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T} GL_TO_UC_SEND_TICK_ACK_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_SEND_TICK_ACK_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.gameID = reader.int32();
                                break;
                            case 2:
                                message.tableID = reader.int32();
                                break;
                            case 3:
                                message.timeStamp = reader.double();
                                break;
                            case 4:
                                message.active = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_SEND_TICK_ACK_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T} GL_TO_UC_SEND_TICK_ACK_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_SEND_TICK_ACK_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_SEND_TICK_ACK_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_SEND_TICK_ACK_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.gameID != null && message.hasOwnProperty("gameID"))
                            if (!$util.isInteger(message.gameID))
                                return "gameID: integer expected";
                        if (message.tableID != null && message.hasOwnProperty("tableID"))
                            if (!$util.isInteger(message.tableID))
                                return "tableID: integer expected";
                        if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                            if (typeof message.timeStamp !== "number")
                                return "timeStamp: number expected";
                        if (message.active != null && message.hasOwnProperty("active"))
                            if (typeof message.active !== "boolean")
                                return "active: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_SEND_TICK_ACK_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T} GL_TO_UC_SEND_TICK_ACK_T
                     */
                    GL_TO_UC_SEND_TICK_ACK_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T();
                        if (object.gameID != null)
                            message.gameID = object.gameID | 0;
                        if (object.tableID != null)
                            message.tableID = object.tableID | 0;
                        if (object.timeStamp != null)
                            message.timeStamp = Number(object.timeStamp);
                        if (object.active != null)
                            message.active = Boolean(object.active);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_SEND_TICK_ACK_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T
                     * @static
                     * @param {Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T} message GL_TO_UC_SEND_TICK_ACK_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_SEND_TICK_ACK_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.gameID = 0;
                            object.tableID = 0;
                            object.timeStamp = 0;
                            object.active = false;
                        }
                        if (message.gameID != null && message.hasOwnProperty("gameID"))
                            object.gameID = message.gameID;
                        if (message.tableID != null && message.hasOwnProperty("tableID"))
                            object.tableID = message.tableID;
                        if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                            object.timeStamp = options.json && !isFinite(message.timeStamp) ? String(message.timeStamp) : message.timeStamp;
                        if (message.active != null && message.hasOwnProperty("active"))
                            object.active = message.active;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_SEND_TICK_ACK_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_SEND_TICK_ACK_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_SEND_TICK_ACK_T;
                })();
    
                Shared.GL_TO_UC_SYSTEM_MESSAGE_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_SYSTEM_MESSAGE_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IGL_TO_UC_SYSTEM_MESSAGE_T
                     * @property {number|null} [infoType] GL_TO_UC_SYSTEM_MESSAGE_T infoType
                     * @property {string|null} [infoMsg] GL_TO_UC_SYSTEM_MESSAGE_T infoMsg
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_SYSTEM_MESSAGE_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a GL_TO_UC_SYSTEM_MESSAGE_T.
                     * @implements IGL_TO_UC_SYSTEM_MESSAGE_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IGL_TO_UC_SYSTEM_MESSAGE_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_SYSTEM_MESSAGE_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_SYSTEM_MESSAGE_T infoType.
                     * @member {number} infoType
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T
                     * @instance
                     */
                    GL_TO_UC_SYSTEM_MESSAGE_T.prototype.infoType = 0;
    
                    /**
                     * GL_TO_UC_SYSTEM_MESSAGE_T infoMsg.
                     * @member {string} infoMsg
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T
                     * @instance
                     */
                    GL_TO_UC_SYSTEM_MESSAGE_T.prototype.infoMsg = "";
    
                    /**
                     * Creates a new GL_TO_UC_SYSTEM_MESSAGE_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_SYSTEM_MESSAGE_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T} GL_TO_UC_SYSTEM_MESSAGE_T instance
                     */
                    GL_TO_UC_SYSTEM_MESSAGE_T.create = function create(properties) {
                        return new GL_TO_UC_SYSTEM_MESSAGE_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_SYSTEM_MESSAGE_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_SYSTEM_MESSAGE_T} message GL_TO_UC_SYSTEM_MESSAGE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_SYSTEM_MESSAGE_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.infoType != null && message.hasOwnProperty("infoType"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.infoType);
                        if (message.infoMsg != null && message.hasOwnProperty("infoMsg"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.infoMsg);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_SYSTEM_MESSAGE_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_SYSTEM_MESSAGE_T} message GL_TO_UC_SYSTEM_MESSAGE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_SYSTEM_MESSAGE_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_SYSTEM_MESSAGE_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T} GL_TO_UC_SYSTEM_MESSAGE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_SYSTEM_MESSAGE_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.infoType = reader.int32();
                                break;
                            case 2:
                                message.infoMsg = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_SYSTEM_MESSAGE_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T} GL_TO_UC_SYSTEM_MESSAGE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_SYSTEM_MESSAGE_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_SYSTEM_MESSAGE_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_SYSTEM_MESSAGE_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.infoType != null && message.hasOwnProperty("infoType"))
                            if (!$util.isInteger(message.infoType))
                                return "infoType: integer expected";
                        if (message.infoMsg != null && message.hasOwnProperty("infoMsg"))
                            if (!$util.isString(message.infoMsg))
                                return "infoMsg: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_SYSTEM_MESSAGE_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T} GL_TO_UC_SYSTEM_MESSAGE_T
                     */
                    GL_TO_UC_SYSTEM_MESSAGE_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T();
                        if (object.infoType != null)
                            message.infoType = object.infoType | 0;
                        if (object.infoMsg != null)
                            message.infoMsg = String(object.infoMsg);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_SYSTEM_MESSAGE_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T
                     * @static
                     * @param {Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T} message GL_TO_UC_SYSTEM_MESSAGE_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_SYSTEM_MESSAGE_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.infoType = 0;
                            object.infoMsg = "";
                        }
                        if (message.infoType != null && message.hasOwnProperty("infoType"))
                            object.infoType = message.infoType;
                        if (message.infoMsg != null && message.hasOwnProperty("infoMsg"))
                            object.infoMsg = message.infoMsg;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_SYSTEM_MESSAGE_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_SYSTEM_MESSAGE_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_SYSTEM_MESSAGE_T;
                })();
    
                Shared.GL_TO_UC_UPDATE_ONLINE_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_UPDATE_ONLINE_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IGL_TO_UC_UPDATE_ONLINE_T
                     * @property {number|null} [onlineNum] GL_TO_UC_UPDATE_ONLINE_T onlineNum
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_UPDATE_ONLINE_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a GL_TO_UC_UPDATE_ONLINE_T.
                     * @implements IGL_TO_UC_UPDATE_ONLINE_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IGL_TO_UC_UPDATE_ONLINE_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_UPDATE_ONLINE_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_UPDATE_ONLINE_T onlineNum.
                     * @member {number} onlineNum
                     * @memberof Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T
                     * @instance
                     */
                    GL_TO_UC_UPDATE_ONLINE_T.prototype.onlineNum = 0;
    
                    /**
                     * Creates a new GL_TO_UC_UPDATE_ONLINE_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_UPDATE_ONLINE_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T} GL_TO_UC_UPDATE_ONLINE_T instance
                     */
                    GL_TO_UC_UPDATE_ONLINE_T.create = function create(properties) {
                        return new GL_TO_UC_UPDATE_ONLINE_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_UPDATE_ONLINE_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_UPDATE_ONLINE_T} message GL_TO_UC_UPDATE_ONLINE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_UPDATE_ONLINE_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.onlineNum != null && message.hasOwnProperty("onlineNum"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.onlineNum);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_UPDATE_ONLINE_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_UPDATE_ONLINE_T} message GL_TO_UC_UPDATE_ONLINE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_UPDATE_ONLINE_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_UPDATE_ONLINE_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T} GL_TO_UC_UPDATE_ONLINE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_UPDATE_ONLINE_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.onlineNum = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_UPDATE_ONLINE_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T} GL_TO_UC_UPDATE_ONLINE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_UPDATE_ONLINE_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_UPDATE_ONLINE_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_UPDATE_ONLINE_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.onlineNum != null && message.hasOwnProperty("onlineNum"))
                            if (!$util.isInteger(message.onlineNum))
                                return "onlineNum: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_UPDATE_ONLINE_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T} GL_TO_UC_UPDATE_ONLINE_T
                     */
                    GL_TO_UC_UPDATE_ONLINE_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T();
                        if (object.onlineNum != null)
                            message.onlineNum = object.onlineNum | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_UPDATE_ONLINE_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T
                     * @static
                     * @param {Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T} message GL_TO_UC_UPDATE_ONLINE_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_UPDATE_ONLINE_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.onlineNum = 0;
                        if (message.onlineNum != null && message.hasOwnProperty("onlineNum"))
                            object.onlineNum = message.onlineNum;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_UPDATE_ONLINE_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_UPDATE_ONLINE_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_UPDATE_ONLINE_T;
                })();
    
                Shared.GL_TO_UC_SYSTEM_MAINTAIN_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_SYSTEM_MAINTAIN_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IGL_TO_UC_SYSTEM_MAINTAIN_T
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_SYSTEM_MAINTAIN_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a GL_TO_UC_SYSTEM_MAINTAIN_T.
                     * @implements IGL_TO_UC_SYSTEM_MAINTAIN_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IGL_TO_UC_SYSTEM_MAINTAIN_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_SYSTEM_MAINTAIN_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Creates a new GL_TO_UC_SYSTEM_MAINTAIN_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_SYSTEM_MAINTAIN_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T} GL_TO_UC_SYSTEM_MAINTAIN_T instance
                     */
                    GL_TO_UC_SYSTEM_MAINTAIN_T.create = function create(properties) {
                        return new GL_TO_UC_SYSTEM_MAINTAIN_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_SYSTEM_MAINTAIN_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_SYSTEM_MAINTAIN_T} message GL_TO_UC_SYSTEM_MAINTAIN_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_SYSTEM_MAINTAIN_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_SYSTEM_MAINTAIN_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_SYSTEM_MAINTAIN_T} message GL_TO_UC_SYSTEM_MAINTAIN_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_SYSTEM_MAINTAIN_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_SYSTEM_MAINTAIN_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T} GL_TO_UC_SYSTEM_MAINTAIN_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_SYSTEM_MAINTAIN_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T();
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
                     * Decodes a GL_TO_UC_SYSTEM_MAINTAIN_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T} GL_TO_UC_SYSTEM_MAINTAIN_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_SYSTEM_MAINTAIN_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_SYSTEM_MAINTAIN_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_SYSTEM_MAINTAIN_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_SYSTEM_MAINTAIN_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T} GL_TO_UC_SYSTEM_MAINTAIN_T
                     */
                    GL_TO_UC_SYSTEM_MAINTAIN_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T)
                            return object;
                        return new $root.Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T();
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_SYSTEM_MAINTAIN_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T
                     * @static
                     * @param {Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T} message GL_TO_UC_SYSTEM_MAINTAIN_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_SYSTEM_MAINTAIN_T.toObject = function toObject() {
                        return {};
                    };
    
                    /**
                     * Converts this GL_TO_UC_SYSTEM_MAINTAIN_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_SYSTEM_MAINTAIN_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_SYSTEM_MAINTAIN_T;
                })();
    
                Shared.GL_TO_UC_MAINTAIN_LEAVE_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_MAINTAIN_LEAVE_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IGL_TO_UC_MAINTAIN_LEAVE_T
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_MAINTAIN_LEAVE_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a GL_TO_UC_MAINTAIN_LEAVE_T.
                     * @implements IGL_TO_UC_MAINTAIN_LEAVE_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IGL_TO_UC_MAINTAIN_LEAVE_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_MAINTAIN_LEAVE_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Creates a new GL_TO_UC_MAINTAIN_LEAVE_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_MAINTAIN_LEAVE_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T} GL_TO_UC_MAINTAIN_LEAVE_T instance
                     */
                    GL_TO_UC_MAINTAIN_LEAVE_T.create = function create(properties) {
                        return new GL_TO_UC_MAINTAIN_LEAVE_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_MAINTAIN_LEAVE_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_MAINTAIN_LEAVE_T} message GL_TO_UC_MAINTAIN_LEAVE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_MAINTAIN_LEAVE_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_MAINTAIN_LEAVE_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_MAINTAIN_LEAVE_T} message GL_TO_UC_MAINTAIN_LEAVE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_MAINTAIN_LEAVE_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_MAINTAIN_LEAVE_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T} GL_TO_UC_MAINTAIN_LEAVE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_MAINTAIN_LEAVE_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T();
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
                     * Decodes a GL_TO_UC_MAINTAIN_LEAVE_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T} GL_TO_UC_MAINTAIN_LEAVE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_MAINTAIN_LEAVE_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_MAINTAIN_LEAVE_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_MAINTAIN_LEAVE_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_MAINTAIN_LEAVE_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T} GL_TO_UC_MAINTAIN_LEAVE_T
                     */
                    GL_TO_UC_MAINTAIN_LEAVE_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T)
                            return object;
                        return new $root.Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T();
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_MAINTAIN_LEAVE_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T
                     * @static
                     * @param {Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T} message GL_TO_UC_MAINTAIN_LEAVE_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_MAINTAIN_LEAVE_T.toObject = function toObject() {
                        return {};
                    };
    
                    /**
                     * Converts this GL_TO_UC_MAINTAIN_LEAVE_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_MAINTAIN_LEAVE_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_MAINTAIN_LEAVE_T;
                })();
    
                Shared.GL_TO_UC_IDLE_LEAVE_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_IDLE_LEAVE_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IGL_TO_UC_IDLE_LEAVE_T
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_IDLE_LEAVE_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a GL_TO_UC_IDLE_LEAVE_T.
                     * @implements IGL_TO_UC_IDLE_LEAVE_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IGL_TO_UC_IDLE_LEAVE_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_IDLE_LEAVE_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Creates a new GL_TO_UC_IDLE_LEAVE_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_IDLE_LEAVE_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T} GL_TO_UC_IDLE_LEAVE_T instance
                     */
                    GL_TO_UC_IDLE_LEAVE_T.create = function create(properties) {
                        return new GL_TO_UC_IDLE_LEAVE_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_IDLE_LEAVE_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_IDLE_LEAVE_T} message GL_TO_UC_IDLE_LEAVE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_IDLE_LEAVE_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_IDLE_LEAVE_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_IDLE_LEAVE_T} message GL_TO_UC_IDLE_LEAVE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_IDLE_LEAVE_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_IDLE_LEAVE_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T} GL_TO_UC_IDLE_LEAVE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_IDLE_LEAVE_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T();
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
                     * Decodes a GL_TO_UC_IDLE_LEAVE_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T} GL_TO_UC_IDLE_LEAVE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_IDLE_LEAVE_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_IDLE_LEAVE_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_IDLE_LEAVE_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_IDLE_LEAVE_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T} GL_TO_UC_IDLE_LEAVE_T
                     */
                    GL_TO_UC_IDLE_LEAVE_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T)
                            return object;
                        return new $root.Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T();
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_IDLE_LEAVE_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T
                     * @static
                     * @param {Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T} message GL_TO_UC_IDLE_LEAVE_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_IDLE_LEAVE_T.toObject = function toObject() {
                        return {};
                    };
    
                    /**
                     * Converts this GL_TO_UC_IDLE_LEAVE_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_IDLE_LEAVE_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_IDLE_LEAVE_T;
                })();
    
                Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_TICK_OVERTIME_LEAVE_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IGL_TO_UC_TICK_OVERTIME_LEAVE_T
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_TICK_OVERTIME_LEAVE_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a GL_TO_UC_TICK_OVERTIME_LEAVE_T.
                     * @implements IGL_TO_UC_TICK_OVERTIME_LEAVE_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IGL_TO_UC_TICK_OVERTIME_LEAVE_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_TICK_OVERTIME_LEAVE_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Creates a new GL_TO_UC_TICK_OVERTIME_LEAVE_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_TICK_OVERTIME_LEAVE_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T} GL_TO_UC_TICK_OVERTIME_LEAVE_T instance
                     */
                    GL_TO_UC_TICK_OVERTIME_LEAVE_T.create = function create(properties) {
                        return new GL_TO_UC_TICK_OVERTIME_LEAVE_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_TICK_OVERTIME_LEAVE_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_TICK_OVERTIME_LEAVE_T} message GL_TO_UC_TICK_OVERTIME_LEAVE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_TICK_OVERTIME_LEAVE_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_TICK_OVERTIME_LEAVE_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_TICK_OVERTIME_LEAVE_T} message GL_TO_UC_TICK_OVERTIME_LEAVE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_TICK_OVERTIME_LEAVE_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_TICK_OVERTIME_LEAVE_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T} GL_TO_UC_TICK_OVERTIME_LEAVE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_TICK_OVERTIME_LEAVE_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T();
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
                     * Decodes a GL_TO_UC_TICK_OVERTIME_LEAVE_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T} GL_TO_UC_TICK_OVERTIME_LEAVE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_TICK_OVERTIME_LEAVE_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_TICK_OVERTIME_LEAVE_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_TICK_OVERTIME_LEAVE_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_TICK_OVERTIME_LEAVE_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T} GL_TO_UC_TICK_OVERTIME_LEAVE_T
                     */
                    GL_TO_UC_TICK_OVERTIME_LEAVE_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T)
                            return object;
                        return new $root.Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T();
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_TICK_OVERTIME_LEAVE_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T
                     * @static
                     * @param {Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T} message GL_TO_UC_TICK_OVERTIME_LEAVE_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_TICK_OVERTIME_LEAVE_T.toObject = function toObject() {
                        return {};
                    };
    
                    /**
                     * Converts this GL_TO_UC_TICK_OVERTIME_LEAVE_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_TICK_OVERTIME_LEAVE_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_TICK_OVERTIME_LEAVE_T;
                })();
    
                Shared.GL_TO_UC_PACKET_ERROR_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_PACKET_ERROR_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IGL_TO_UC_PACKET_ERROR_T
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_PACKET_ERROR_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a GL_TO_UC_PACKET_ERROR_T.
                     * @implements IGL_TO_UC_PACKET_ERROR_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IGL_TO_UC_PACKET_ERROR_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_PACKET_ERROR_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Creates a new GL_TO_UC_PACKET_ERROR_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_PACKET_ERROR_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T} GL_TO_UC_PACKET_ERROR_T instance
                     */
                    GL_TO_UC_PACKET_ERROR_T.create = function create(properties) {
                        return new GL_TO_UC_PACKET_ERROR_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_PACKET_ERROR_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_PACKET_ERROR_T} message GL_TO_UC_PACKET_ERROR_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_PACKET_ERROR_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_PACKET_ERROR_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_PACKET_ERROR_T} message GL_TO_UC_PACKET_ERROR_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_PACKET_ERROR_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_PACKET_ERROR_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T} GL_TO_UC_PACKET_ERROR_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_PACKET_ERROR_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T();
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
                     * Decodes a GL_TO_UC_PACKET_ERROR_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T} GL_TO_UC_PACKET_ERROR_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_PACKET_ERROR_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_PACKET_ERROR_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_PACKET_ERROR_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_PACKET_ERROR_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T} GL_TO_UC_PACKET_ERROR_T
                     */
                    GL_TO_UC_PACKET_ERROR_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T)
                            return object;
                        return new $root.Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T();
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_PACKET_ERROR_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T
                     * @static
                     * @param {Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T} message GL_TO_UC_PACKET_ERROR_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_PACKET_ERROR_T.toObject = function toObject() {
                        return {};
                    };
    
                    /**
                     * Converts this GL_TO_UC_PACKET_ERROR_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_PACKET_ERROR_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_PACKET_ERROR_T;
                })();
    
                Shared.GL_TO_UC_CREDIT_HANDLE_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_CREDIT_HANDLE_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IGL_TO_UC_CREDIT_HANDLE_T
                     * @property {number|null} [state] GL_TO_UC_CREDIT_HANDLE_T state
                     * @property {number|Long|null} [credit] GL_TO_UC_CREDIT_HANDLE_T credit
                     * @property {number|Long|null} [gap] GL_TO_UC_CREDIT_HANDLE_T gap
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_CREDIT_HANDLE_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a GL_TO_UC_CREDIT_HANDLE_T.
                     * @implements IGL_TO_UC_CREDIT_HANDLE_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IGL_TO_UC_CREDIT_HANDLE_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_CREDIT_HANDLE_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_CREDIT_HANDLE_T state.
                     * @member {number} state
                     * @memberof Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T
                     * @instance
                     */
                    GL_TO_UC_CREDIT_HANDLE_T.prototype.state = 0;
    
                    /**
                     * GL_TO_UC_CREDIT_HANDLE_T credit.
                     * @member {number|Long} credit
                     * @memberof Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T
                     * @instance
                     */
                    GL_TO_UC_CREDIT_HANDLE_T.prototype.credit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_CREDIT_HANDLE_T gap.
                     * @member {number|Long} gap
                     * @memberof Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T
                     * @instance
                     */
                    GL_TO_UC_CREDIT_HANDLE_T.prototype.gap = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * Creates a new GL_TO_UC_CREDIT_HANDLE_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_CREDIT_HANDLE_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T} GL_TO_UC_CREDIT_HANDLE_T instance
                     */
                    GL_TO_UC_CREDIT_HANDLE_T.create = function create(properties) {
                        return new GL_TO_UC_CREDIT_HANDLE_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_CREDIT_HANDLE_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_CREDIT_HANDLE_T} message GL_TO_UC_CREDIT_HANDLE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_CREDIT_HANDLE_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.state != null && message.hasOwnProperty("state"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
                        if (message.credit != null && message.hasOwnProperty("credit"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.credit);
                        if (message.gap != null && message.hasOwnProperty("gap"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.gap);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_CREDIT_HANDLE_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_CREDIT_HANDLE_T} message GL_TO_UC_CREDIT_HANDLE_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_CREDIT_HANDLE_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_CREDIT_HANDLE_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T} GL_TO_UC_CREDIT_HANDLE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_CREDIT_HANDLE_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.state = reader.int32();
                                break;
                            case 2:
                                message.credit = reader.int64();
                                break;
                            case 3:
                                message.gap = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_CREDIT_HANDLE_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T} GL_TO_UC_CREDIT_HANDLE_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_CREDIT_HANDLE_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_CREDIT_HANDLE_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_CREDIT_HANDLE_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.state != null && message.hasOwnProperty("state"))
                            if (!$util.isInteger(message.state))
                                return "state: integer expected";
                        if (message.credit != null && message.hasOwnProperty("credit"))
                            if (!$util.isInteger(message.credit) && !(message.credit && $util.isInteger(message.credit.low) && $util.isInteger(message.credit.high)))
                                return "credit: integer|Long expected";
                        if (message.gap != null && message.hasOwnProperty("gap"))
                            if (!$util.isInteger(message.gap) && !(message.gap && $util.isInteger(message.gap.low) && $util.isInteger(message.gap.high)))
                                return "gap: integer|Long expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_CREDIT_HANDLE_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T} GL_TO_UC_CREDIT_HANDLE_T
                     */
                    GL_TO_UC_CREDIT_HANDLE_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T();
                        if (object.state != null)
                            message.state = object.state | 0;
                        if (object.credit != null)
                            if ($util.Long)
                                (message.credit = $util.Long.fromValue(object.credit)).unsigned = false;
                            else if (typeof object.credit === "string")
                                message.credit = parseInt(object.credit, 10);
                            else if (typeof object.credit === "number")
                                message.credit = object.credit;
                            else if (typeof object.credit === "object")
                                message.credit = new $util.LongBits(object.credit.low >>> 0, object.credit.high >>> 0).toNumber();
                        if (object.gap != null)
                            if ($util.Long)
                                (message.gap = $util.Long.fromValue(object.gap)).unsigned = false;
                            else if (typeof object.gap === "string")
                                message.gap = parseInt(object.gap, 10);
                            else if (typeof object.gap === "number")
                                message.gap = object.gap;
                            else if (typeof object.gap === "object")
                                message.gap = new $util.LongBits(object.gap.low >>> 0, object.gap.high >>> 0).toNumber();
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_CREDIT_HANDLE_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T
                     * @static
                     * @param {Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T} message GL_TO_UC_CREDIT_HANDLE_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_CREDIT_HANDLE_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.state = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.credit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.credit = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.gap = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.gap = options.longs === String ? "0" : 0;
                        }
                        if (message.state != null && message.hasOwnProperty("state"))
                            object.state = message.state;
                        if (message.credit != null && message.hasOwnProperty("credit"))
                            if (typeof message.credit === "number")
                                object.credit = options.longs === String ? String(message.credit) : message.credit;
                            else
                                object.credit = options.longs === String ? $util.Long.prototype.toString.call(message.credit) : options.longs === Number ? new $util.LongBits(message.credit.low >>> 0, message.credit.high >>> 0).toNumber() : message.credit;
                        if (message.gap != null && message.hasOwnProperty("gap"))
                            if (typeof message.gap === "number")
                                object.gap = options.longs === String ? String(message.gap) : message.gap;
                            else
                                object.gap = options.longs === String ? $util.Long.prototype.toString.call(message.gap) : options.longs === Number ? new $util.LongBits(message.gap.low >>> 0, message.gap.high >>> 0).toNumber() : message.gap;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_CREDIT_HANDLE_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_CREDIT_HANDLE_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_CREDIT_HANDLE_T;
                })();
    
                Shared.GL_TO_UC_ACTIVITY_START_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_ACTIVITY_START_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IGL_TO_UC_ACTIVITY_START_T
                     * @property {number|null} [ActivityID] GL_TO_UC_ACTIVITY_START_T ActivityID
                     * @property {number|null} [ActivityCount] GL_TO_UC_ACTIVITY_START_T ActivityCount
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_ACTIVITY_START_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a GL_TO_UC_ACTIVITY_START_T.
                     * @implements IGL_TO_UC_ACTIVITY_START_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_START_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_ACTIVITY_START_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_ACTIVITY_START_T ActivityID.
                     * @member {number} ActivityID
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T
                     * @instance
                     */
                    GL_TO_UC_ACTIVITY_START_T.prototype.ActivityID = 0;
    
                    /**
                     * GL_TO_UC_ACTIVITY_START_T ActivityCount.
                     * @member {number} ActivityCount
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T
                     * @instance
                     */
                    GL_TO_UC_ACTIVITY_START_T.prototype.ActivityCount = 0;
    
                    /**
                     * Creates a new GL_TO_UC_ACTIVITY_START_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_START_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T} GL_TO_UC_ACTIVITY_START_T instance
                     */
                    GL_TO_UC_ACTIVITY_START_T.create = function create(properties) {
                        return new GL_TO_UC_ACTIVITY_START_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_ACTIVITY_START_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_START_T} message GL_TO_UC_ACTIVITY_START_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_ACTIVITY_START_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.ActivityID != null && message.hasOwnProperty("ActivityID"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ActivityID);
                        if (message.ActivityCount != null && message.hasOwnProperty("ActivityCount"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ActivityCount);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_ACTIVITY_START_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_START_T} message GL_TO_UC_ACTIVITY_START_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_ACTIVITY_START_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_ACTIVITY_START_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T} GL_TO_UC_ACTIVITY_START_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_ACTIVITY_START_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.ActivityID = reader.int32();
                                break;
                            case 2:
                                message.ActivityCount = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_ACTIVITY_START_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T} GL_TO_UC_ACTIVITY_START_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_ACTIVITY_START_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_ACTIVITY_START_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_ACTIVITY_START_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.ActivityID != null && message.hasOwnProperty("ActivityID"))
                            if (!$util.isInteger(message.ActivityID))
                                return "ActivityID: integer expected";
                        if (message.ActivityCount != null && message.hasOwnProperty("ActivityCount"))
                            if (!$util.isInteger(message.ActivityCount))
                                return "ActivityCount: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_ACTIVITY_START_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T} GL_TO_UC_ACTIVITY_START_T
                     */
                    GL_TO_UC_ACTIVITY_START_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T();
                        if (object.ActivityID != null)
                            message.ActivityID = object.ActivityID | 0;
                        if (object.ActivityCount != null)
                            message.ActivityCount = object.ActivityCount | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_ACTIVITY_START_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T
                     * @static
                     * @param {Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T} message GL_TO_UC_ACTIVITY_START_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_ACTIVITY_START_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.ActivityID = 0;
                            object.ActivityCount = 0;
                        }
                        if (message.ActivityID != null && message.hasOwnProperty("ActivityID"))
                            object.ActivityID = message.ActivityID;
                        if (message.ActivityCount != null && message.hasOwnProperty("ActivityCount"))
                            object.ActivityCount = message.ActivityCount;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_ACTIVITY_START_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_ACTIVITY_START_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_ACTIVITY_START_T;
                })();
    
                Shared.GL_TO_UC_ACTIVITY_END_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_ACTIVITY_END_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IGL_TO_UC_ACTIVITY_END_T
                     * @property {number|null} [ActivityID] GL_TO_UC_ACTIVITY_END_T ActivityID
                     * @property {number|Long|null} [TotalWin] GL_TO_UC_ACTIVITY_END_T TotalWin
                     * @property {number|Long|null} [Credit] GL_TO_UC_ACTIVITY_END_T Credit
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_ACTIVITY_END_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a GL_TO_UC_ACTIVITY_END_T.
                     * @implements IGL_TO_UC_ACTIVITY_END_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_END_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_ACTIVITY_END_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_ACTIVITY_END_T ActivityID.
                     * @member {number} ActivityID
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T
                     * @instance
                     */
                    GL_TO_UC_ACTIVITY_END_T.prototype.ActivityID = 0;
    
                    /**
                     * GL_TO_UC_ACTIVITY_END_T TotalWin.
                     * @member {number|Long} TotalWin
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T
                     * @instance
                     */
                    GL_TO_UC_ACTIVITY_END_T.prototype.TotalWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_ACTIVITY_END_T Credit.
                     * @member {number|Long} Credit
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T
                     * @instance
                     */
                    GL_TO_UC_ACTIVITY_END_T.prototype.Credit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * Creates a new GL_TO_UC_ACTIVITY_END_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_END_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T} GL_TO_UC_ACTIVITY_END_T instance
                     */
                    GL_TO_UC_ACTIVITY_END_T.create = function create(properties) {
                        return new GL_TO_UC_ACTIVITY_END_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_ACTIVITY_END_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_END_T} message GL_TO_UC_ACTIVITY_END_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_ACTIVITY_END_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.ActivityID != null && message.hasOwnProperty("ActivityID"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ActivityID);
                        if (message.TotalWin != null && message.hasOwnProperty("TotalWin"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.TotalWin);
                        if (message.Credit != null && message.hasOwnProperty("Credit"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Credit);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_ACTIVITY_END_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_END_T} message GL_TO_UC_ACTIVITY_END_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_ACTIVITY_END_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_ACTIVITY_END_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T} GL_TO_UC_ACTIVITY_END_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_ACTIVITY_END_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.ActivityID = reader.int32();
                                break;
                            case 2:
                                message.TotalWin = reader.int64();
                                break;
                            case 3:
                                message.Credit = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_ACTIVITY_END_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T} GL_TO_UC_ACTIVITY_END_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_ACTIVITY_END_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_ACTIVITY_END_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_ACTIVITY_END_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.ActivityID != null && message.hasOwnProperty("ActivityID"))
                            if (!$util.isInteger(message.ActivityID))
                                return "ActivityID: integer expected";
                        if (message.TotalWin != null && message.hasOwnProperty("TotalWin"))
                            if (!$util.isInteger(message.TotalWin) && !(message.TotalWin && $util.isInteger(message.TotalWin.low) && $util.isInteger(message.TotalWin.high)))
                                return "TotalWin: integer|Long expected";
                        if (message.Credit != null && message.hasOwnProperty("Credit"))
                            if (!$util.isInteger(message.Credit) && !(message.Credit && $util.isInteger(message.Credit.low) && $util.isInteger(message.Credit.high)))
                                return "Credit: integer|Long expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_ACTIVITY_END_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T} GL_TO_UC_ACTIVITY_END_T
                     */
                    GL_TO_UC_ACTIVITY_END_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T();
                        if (object.ActivityID != null)
                            message.ActivityID = object.ActivityID | 0;
                        if (object.TotalWin != null)
                            if ($util.Long)
                                (message.TotalWin = $util.Long.fromValue(object.TotalWin)).unsigned = false;
                            else if (typeof object.TotalWin === "string")
                                message.TotalWin = parseInt(object.TotalWin, 10);
                            else if (typeof object.TotalWin === "number")
                                message.TotalWin = object.TotalWin;
                            else if (typeof object.TotalWin === "object")
                                message.TotalWin = new $util.LongBits(object.TotalWin.low >>> 0, object.TotalWin.high >>> 0).toNumber();
                        if (object.Credit != null)
                            if ($util.Long)
                                (message.Credit = $util.Long.fromValue(object.Credit)).unsigned = false;
                            else if (typeof object.Credit === "string")
                                message.Credit = parseInt(object.Credit, 10);
                            else if (typeof object.Credit === "number")
                                message.Credit = object.Credit;
                            else if (typeof object.Credit === "object")
                                message.Credit = new $util.LongBits(object.Credit.low >>> 0, object.Credit.high >>> 0).toNumber();
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_ACTIVITY_END_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T
                     * @static
                     * @param {Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T} message GL_TO_UC_ACTIVITY_END_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_ACTIVITY_END_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.ActivityID = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.TotalWin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.TotalWin = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.Credit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.Credit = options.longs === String ? "0" : 0;
                        }
                        if (message.ActivityID != null && message.hasOwnProperty("ActivityID"))
                            object.ActivityID = message.ActivityID;
                        if (message.TotalWin != null && message.hasOwnProperty("TotalWin"))
                            if (typeof message.TotalWin === "number")
                                object.TotalWin = options.longs === String ? String(message.TotalWin) : message.TotalWin;
                            else
                                object.TotalWin = options.longs === String ? $util.Long.prototype.toString.call(message.TotalWin) : options.longs === Number ? new $util.LongBits(message.TotalWin.low >>> 0, message.TotalWin.high >>> 0).toNumber() : message.TotalWin;
                        if (message.Credit != null && message.hasOwnProperty("Credit"))
                            if (typeof message.Credit === "number")
                                object.Credit = options.longs === String ? String(message.Credit) : message.Credit;
                            else
                                object.Credit = options.longs === String ? $util.Long.prototype.toString.call(message.Credit) : options.longs === Number ? new $util.LongBits(message.Credit.low >>> 0, message.Credit.high >>> 0).toNumber() : message.Credit;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_ACTIVITY_END_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_ACTIVITY_END_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_ACTIVITY_END_T;
                })();
    
                Shared.GL_TO_UC_ACTIVITY_ACK_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_ACTIVITY_ACK_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IGL_TO_UC_ACTIVITY_ACK_T
                     * @property {number|null} [ActivityID] GL_TO_UC_ACTIVITY_ACK_T ActivityID
                     * @property {number|null} [SID] GL_TO_UC_ACTIVITY_ACK_T SID
                     * @property {boolean|null} [IsWin] GL_TO_UC_ACTIVITY_ACK_T IsWin
                     * @property {number|Long|null} [WinPoint] GL_TO_UC_ACTIVITY_ACK_T WinPoint
                     * @property {number|null} [iResultCode] GL_TO_UC_ACTIVITY_ACK_T iResultCode
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_ACTIVITY_ACK_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a GL_TO_UC_ACTIVITY_ACK_T.
                     * @implements IGL_TO_UC_ACTIVITY_ACK_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_ACK_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_ACTIVITY_ACK_T(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_ACTIVITY_ACK_T ActivityID.
                     * @member {number} ActivityID
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T
                     * @instance
                     */
                    GL_TO_UC_ACTIVITY_ACK_T.prototype.ActivityID = 0;
    
                    /**
                     * GL_TO_UC_ACTIVITY_ACK_T SID.
                     * @member {number} SID
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T
                     * @instance
                     */
                    GL_TO_UC_ACTIVITY_ACK_T.prototype.SID = 0;
    
                    /**
                     * GL_TO_UC_ACTIVITY_ACK_T IsWin.
                     * @member {boolean} IsWin
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T
                     * @instance
                     */
                    GL_TO_UC_ACTIVITY_ACK_T.prototype.IsWin = false;
    
                    /**
                     * GL_TO_UC_ACTIVITY_ACK_T WinPoint.
                     * @member {number|Long} WinPoint
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T
                     * @instance
                     */
                    GL_TO_UC_ACTIVITY_ACK_T.prototype.WinPoint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * GL_TO_UC_ACTIVITY_ACK_T iResultCode.
                     * @member {number} iResultCode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T
                     * @instance
                     */
                    GL_TO_UC_ACTIVITY_ACK_T.prototype.iResultCode = 0;
    
                    /**
                     * Creates a new GL_TO_UC_ACTIVITY_ACK_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_ACK_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T} GL_TO_UC_ACTIVITY_ACK_T instance
                     */
                    GL_TO_UC_ACTIVITY_ACK_T.create = function create(properties) {
                        return new GL_TO_UC_ACTIVITY_ACK_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_ACTIVITY_ACK_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_ACK_T} message GL_TO_UC_ACTIVITY_ACK_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_ACTIVITY_ACK_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.ActivityID != null && message.hasOwnProperty("ActivityID"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ActivityID);
                        if (message.SID != null && message.hasOwnProperty("SID"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.SID);
                        if (message.IsWin != null && message.hasOwnProperty("IsWin"))
                            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.IsWin);
                        if (message.WinPoint != null && message.hasOwnProperty("WinPoint"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.WinPoint);
                        if (message.iResultCode != null && message.hasOwnProperty("iResultCode"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.iResultCode);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_ACTIVITY_ACK_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_ACK_T} message GL_TO_UC_ACTIVITY_ACK_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_ACTIVITY_ACK_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_ACTIVITY_ACK_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T} GL_TO_UC_ACTIVITY_ACK_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_ACTIVITY_ACK_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.ActivityID = reader.int32();
                                break;
                            case 2:
                                message.SID = reader.int32();
                                break;
                            case 3:
                                message.IsWin = reader.bool();
                                break;
                            case 4:
                                message.WinPoint = reader.int64();
                                break;
                            case 5:
                                message.iResultCode = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_ACTIVITY_ACK_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T} GL_TO_UC_ACTIVITY_ACK_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_ACTIVITY_ACK_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_ACTIVITY_ACK_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_ACTIVITY_ACK_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.ActivityID != null && message.hasOwnProperty("ActivityID"))
                            if (!$util.isInteger(message.ActivityID))
                                return "ActivityID: integer expected";
                        if (message.SID != null && message.hasOwnProperty("SID"))
                            if (!$util.isInteger(message.SID))
                                return "SID: integer expected";
                        if (message.IsWin != null && message.hasOwnProperty("IsWin"))
                            if (typeof message.IsWin !== "boolean")
                                return "IsWin: boolean expected";
                        if (message.WinPoint != null && message.hasOwnProperty("WinPoint"))
                            if (!$util.isInteger(message.WinPoint) && !(message.WinPoint && $util.isInteger(message.WinPoint.low) && $util.isInteger(message.WinPoint.high)))
                                return "WinPoint: integer|Long expected";
                        if (message.iResultCode != null && message.hasOwnProperty("iResultCode"))
                            if (!$util.isInteger(message.iResultCode))
                                return "iResultCode: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_ACTIVITY_ACK_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T} GL_TO_UC_ACTIVITY_ACK_T
                     */
                    GL_TO_UC_ACTIVITY_ACK_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T();
                        if (object.ActivityID != null)
                            message.ActivityID = object.ActivityID | 0;
                        if (object.SID != null)
                            message.SID = object.SID | 0;
                        if (object.IsWin != null)
                            message.IsWin = Boolean(object.IsWin);
                        if (object.WinPoint != null)
                            if ($util.Long)
                                (message.WinPoint = $util.Long.fromValue(object.WinPoint)).unsigned = false;
                            else if (typeof object.WinPoint === "string")
                                message.WinPoint = parseInt(object.WinPoint, 10);
                            else if (typeof object.WinPoint === "number")
                                message.WinPoint = object.WinPoint;
                            else if (typeof object.WinPoint === "object")
                                message.WinPoint = new $util.LongBits(object.WinPoint.low >>> 0, object.WinPoint.high >>> 0).toNumber();
                        if (object.iResultCode != null)
                            message.iResultCode = object.iResultCode | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_ACTIVITY_ACK_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T
                     * @static
                     * @param {Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T} message GL_TO_UC_ACTIVITY_ACK_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_ACTIVITY_ACK_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.ActivityID = 0;
                            object.SID = 0;
                            object.IsWin = false;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.WinPoint = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.WinPoint = options.longs === String ? "0" : 0;
                            object.iResultCode = 0;
                        }
                        if (message.ActivityID != null && message.hasOwnProperty("ActivityID"))
                            object.ActivityID = message.ActivityID;
                        if (message.SID != null && message.hasOwnProperty("SID"))
                            object.SID = message.SID;
                        if (message.IsWin != null && message.hasOwnProperty("IsWin"))
                            object.IsWin = message.IsWin;
                        if (message.WinPoint != null && message.hasOwnProperty("WinPoint"))
                            if (typeof message.WinPoint === "number")
                                object.WinPoint = options.longs === String ? String(message.WinPoint) : message.WinPoint;
                            else
                                object.WinPoint = options.longs === String ? $util.Long.prototype.toString.call(message.WinPoint) : options.longs === Number ? new $util.LongBits(message.WinPoint.low >>> 0, message.WinPoint.high >>> 0).toNumber() : message.WinPoint;
                        if (message.iResultCode != null && message.hasOwnProperty("iResultCode"))
                            object.iResultCode = message.iResultCode;
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_ACTIVITY_ACK_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_ACTIVITY_ACK_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_ACTIVITY_ACK_T;
                })();
    
                Shared.GL_TO_UC_SHARED_CHEAT_T = (function() {
    
                    /**
                     * Properties of a GL_TO_UC_SHARED_CHEAT_T.
                     * @memberof Protocol.Game.Shared
                     * @interface IGL_TO_UC_SHARED_CHEAT_T
                     * @property {number|null} [errorCode] GL_TO_UC_SHARED_CHEAT_T errorCode
                     * @property {Array.<number>|null} [arrValue] GL_TO_UC_SHARED_CHEAT_T arrValue
                     */
    
                    /**
                     * Constructs a new GL_TO_UC_SHARED_CHEAT_T.
                     * @memberof Protocol.Game.Shared
                     * @classdesc Represents a GL_TO_UC_SHARED_CHEAT_T.
                     * @implements IGL_TO_UC_SHARED_CHEAT_T
                     * @constructor
                     * @param {Protocol.Game.Shared.IGL_TO_UC_SHARED_CHEAT_T=} [properties] Properties to set
                     */
                    function GL_TO_UC_SHARED_CHEAT_T(properties) {
                        this.arrValue = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GL_TO_UC_SHARED_CHEAT_T errorCode.
                     * @member {number} errorCode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T
                     * @instance
                     */
                    GL_TO_UC_SHARED_CHEAT_T.prototype.errorCode = 0;
    
                    /**
                     * GL_TO_UC_SHARED_CHEAT_T arrValue.
                     * @member {Array.<number>} arrValue
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T
                     * @instance
                     */
                    GL_TO_UC_SHARED_CHEAT_T.prototype.arrValue = $util.emptyArray;
    
                    /**
                     * Creates a new GL_TO_UC_SHARED_CHEAT_T instance using the specified properties.
                     * @function create
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_SHARED_CHEAT_T=} [properties] Properties to set
                     * @returns {Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T} GL_TO_UC_SHARED_CHEAT_T instance
                     */
                    GL_TO_UC_SHARED_CHEAT_T.create = function create(properties) {
                        return new GL_TO_UC_SHARED_CHEAT_T(properties);
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_SHARED_CHEAT_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T.verify|verify} messages.
                     * @function encode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_SHARED_CHEAT_T} message GL_TO_UC_SHARED_CHEAT_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_SHARED_CHEAT_T.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorCode);
                        if (message.arrValue != null && message.arrValue.length) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork();
                            for (var i = 0; i < message.arrValue.length; ++i)
                                writer.int32(message.arrValue[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GL_TO_UC_SHARED_CHEAT_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T
                     * @static
                     * @param {Protocol.Game.Shared.IGL_TO_UC_SHARED_CHEAT_T} message GL_TO_UC_SHARED_CHEAT_T message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GL_TO_UC_SHARED_CHEAT_T.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GL_TO_UC_SHARED_CHEAT_T message from the specified reader or buffer.
                     * @function decode
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T} GL_TO_UC_SHARED_CHEAT_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_SHARED_CHEAT_T.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.errorCode = reader.int32();
                                break;
                            case 2:
                                if (!(message.arrValue && message.arrValue.length))
                                    message.arrValue = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.arrValue.push(reader.int32());
                                } else
                                    message.arrValue.push(reader.int32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GL_TO_UC_SHARED_CHEAT_T message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T} GL_TO_UC_SHARED_CHEAT_T
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GL_TO_UC_SHARED_CHEAT_T.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GL_TO_UC_SHARED_CHEAT_T message.
                     * @function verify
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GL_TO_UC_SHARED_CHEAT_T.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                            if (!$util.isInteger(message.errorCode))
                                return "errorCode: integer expected";
                        if (message.arrValue != null && message.hasOwnProperty("arrValue")) {
                            if (!Array.isArray(message.arrValue))
                                return "arrValue: array expected";
                            for (var i = 0; i < message.arrValue.length; ++i)
                                if (!$util.isInteger(message.arrValue[i]))
                                    return "arrValue: integer[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a GL_TO_UC_SHARED_CHEAT_T message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T} GL_TO_UC_SHARED_CHEAT_T
                     */
                    GL_TO_UC_SHARED_CHEAT_T.fromObject = function fromObject(object) {
                        if (object instanceof $root.Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T)
                            return object;
                        var message = new $root.Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T();
                        if (object.errorCode != null)
                            message.errorCode = object.errorCode | 0;
                        if (object.arrValue) {
                            if (!Array.isArray(object.arrValue))
                                throw TypeError(".Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T.arrValue: array expected");
                            message.arrValue = [];
                            for (var i = 0; i < object.arrValue.length; ++i)
                                message.arrValue[i] = object.arrValue[i] | 0;
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GL_TO_UC_SHARED_CHEAT_T message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T
                     * @static
                     * @param {Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T} message GL_TO_UC_SHARED_CHEAT_T
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GL_TO_UC_SHARED_CHEAT_T.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.arrValue = [];
                        if (options.defaults)
                            object.errorCode = 0;
                        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                            object.errorCode = message.errorCode;
                        if (message.arrValue && message.arrValue.length) {
                            object.arrValue = [];
                            for (var j = 0; j < message.arrValue.length; ++j)
                                object.arrValue[j] = message.arrValue[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this GL_TO_UC_SHARED_CHEAT_T to JSON.
                     * @function toJSON
                     * @memberof Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GL_TO_UC_SHARED_CHEAT_T.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GL_TO_UC_SHARED_CHEAT_T;
                })();
    
                return Shared;
            })();
    
            return Game;
        })();
    
        return Protocol;
    })();

    return $root;
})(protobuf).Protocol;
