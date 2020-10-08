declare global {
 // DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace Protocol. */
export namespace Protocol {

    /** Namespace Game. */
    namespace Game {

        /** Namespace Shared. */
        namespace Shared {

            /** ResultCode enum. */
            enum ResultCode {
                NO_ERROR = 0,
                JOIN_GAME_FAIL = 1,
                LEAVE_GAME_FAIL = 2,
                LIMIT_LOCAL_MIN = 3,
                LIMIT_LOCAL_MAX = 4,
                LIMIT_GLOBAL_MAX = 5,
                CREDIT_NOT_ENOUGH = 6,
                TIME_OVER = 7,
                WRONG_BET_ID = 8,
                WRONG_CHIP_ID = 9,
                WRONG_COMMAND_ID = 10,
                WRONG_PARAMETER = 11,
                COMMAND_DENY = 12,
                ERROR_VERSION = 13,
                MAINTAIN = 14,
                SERVICE_OVERTIME = 15,
                KICKBACK_ERROR = 16,
                POINT_INIT_ERROR = 17,
                POINT_REQUESTING = 18,
                POINT_RETURNING = 19,
                POINT_CHANGING = 20,
                POINT_USING = 21,
                RECOVER_FAIL = 31,
                OTHER_ERROR = 99
            }

            /** CreditHandleState enum. */
            enum CreditHandleState {
                CREDIT_HANDLE_STATE_DEFAULT = 0,
                REQUEST = 1,
                RETURN = 2,
                USING = 3
            }

            /** SystemMessageType enum. */
            enum SystemMessageType {
                SYSTEM_MESSAGE_TYPE_DEFAULT = 0,
                NOTIFY_PLAYER_OFFLINE_LEAVE = 1
            }

            /** MessageID_Shared enum. */
            enum MessageID_Shared {
                SHARED_DEFAULT = 0,
                UC_TO_GL_SEND_TEST = 19000,
                UC_TO_GL_INIT_GAME = 19001,
                UC_TO_GL_LEAVE_GAME = 19002,
                UC_TO_GL_CHANGE_CHIP = 19003,
                UC_TO_GL_UPDATE_CREDIT = 19004,
                UC_TO_GL_ACTIVITY_ANIM = 19005,
                UC_TO_GL_ACTIVITY_REQ = 19006,
                UC_TO_GL_ACTIVITY_ANIM_END = 19007,
                UC_TO_GL_RESX_LOAD_FINISH = 19008,
                UC_TO_GL_SHARED_CHEAT = 19009,
                UC_TO_GL_SEND_TICK = 19999,
                GL_TO_UC_SEND_TEST_ACK = 29000,
                GL_TO_UC_INIT_GAME = 29001,
                GL_TO_UC_LEAVE_GAME = 29002,
                GL_TO_UC_CHANGE_CHIP = 29003,
                GL_TO_UC_UPDATE_CREDIT = 29004,
                GL_TO_UC_ACTIVITY_ACK = 29005,
                GL_TO_UC_SHARED_CHEAT = 29009,
                GL_TO_UC_SEND_TICK_ACK = 29999,
                GL_TO_UC_SYSTEM_MESSAGE = 29203,
                GL_TO_UC_UPDATE_ONLINE = 29204,
                GL_TO_UC_SYSTEM_MAINTAIN = 29205,
                GL_TO_UC_MAINTAIN_LEAVE = 29206,
                GL_TO_UC_IDLE_LEAVE = 29207,
                GL_TO_UC_TICK_OVERTIME_LEAVE = 29208,
                GL_TO_UC_PACKET_ERROR = 29209,
                GL_TO_UC_CREDIT_HANDLE = 29210,
                GL_TO_UC_ACTIVITY_START = 29211,
                GL_TO_UC_ACTIVITY_END = 29212
            }

            /** Properties of a UC_TO_GL_SEND_TEST_T. */
            interface IUC_TO_GL_SEND_TEST_T {

                /** UC_TO_GL_SEND_TEST_T iTest */
                iTest?: (number|null);
            }

            /** Represents a UC_TO_GL_SEND_TEST_T. */
            class UC_TO_GL_SEND_TEST_T implements IUC_TO_GL_SEND_TEST_T {

                /**
                 * Constructs a new UC_TO_GL_SEND_TEST_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IUC_TO_GL_SEND_TEST_T);

                /** UC_TO_GL_SEND_TEST_T iTest. */
                public iTest: number;

                /**
                 * Creates a new UC_TO_GL_SEND_TEST_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_SEND_TEST_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IUC_TO_GL_SEND_TEST_T): Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T;

                /**
                 * Encodes the specified UC_TO_GL_SEND_TEST_T message. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T.verify|verify} messages.
                 * @param message UC_TO_GL_SEND_TEST_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IUC_TO_GL_SEND_TEST_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_SEND_TEST_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T.verify|verify} messages.
                 * @param message UC_TO_GL_SEND_TEST_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IUC_TO_GL_SEND_TEST_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_SEND_TEST_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_SEND_TEST_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T;

                /**
                 * Decodes a UC_TO_GL_SEND_TEST_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_SEND_TEST_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T;

                /**
                 * Verifies a UC_TO_GL_SEND_TEST_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UC_TO_GL_SEND_TEST_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UC_TO_GL_SEND_TEST_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T;

                /**
                 * Creates a plain object from a UC_TO_GL_SEND_TEST_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_SEND_TEST_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_SEND_TEST_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UC_TO_GL_INIT_GAME_T. */
            interface IUC_TO_GL_INIT_GAME_T {

                /** UC_TO_GL_INIT_GAME_T sharedProtoVersion */
                sharedProtoVersion?: (number|null);

                /** UC_TO_GL_INIT_GAME_T gameProtoVersion */
                gameProtoVersion?: (number|null);

                /** UC_TO_GL_INIT_GAME_T enterType */
                enterType?: (number|null);

                /** UC_TO_GL_INIT_GAME_T serialNumber */
                serialNumber?: (number|null);
            }

            /** Represents a UC_TO_GL_INIT_GAME_T. */
            class UC_TO_GL_INIT_GAME_T implements IUC_TO_GL_INIT_GAME_T {

                /**
                 * Constructs a new UC_TO_GL_INIT_GAME_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IUC_TO_GL_INIT_GAME_T);

                /** UC_TO_GL_INIT_GAME_T sharedProtoVersion. */
                public sharedProtoVersion: number;

                /** UC_TO_GL_INIT_GAME_T gameProtoVersion. */
                public gameProtoVersion: number;

                /** UC_TO_GL_INIT_GAME_T enterType. */
                public enterType: number;

                /** UC_TO_GL_INIT_GAME_T serialNumber. */
                public serialNumber: number;

                /**
                 * Creates a new UC_TO_GL_INIT_GAME_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_INIT_GAME_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IUC_TO_GL_INIT_GAME_T): Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T;

                /**
                 * Encodes the specified UC_TO_GL_INIT_GAME_T message. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T.verify|verify} messages.
                 * @param message UC_TO_GL_INIT_GAME_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IUC_TO_GL_INIT_GAME_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_INIT_GAME_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T.verify|verify} messages.
                 * @param message UC_TO_GL_INIT_GAME_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IUC_TO_GL_INIT_GAME_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_INIT_GAME_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_INIT_GAME_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T;

                /**
                 * Decodes a UC_TO_GL_INIT_GAME_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_INIT_GAME_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T;

                /**
                 * Verifies a UC_TO_GL_INIT_GAME_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UC_TO_GL_INIT_GAME_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UC_TO_GL_INIT_GAME_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T;

                /**
                 * Creates a plain object from a UC_TO_GL_INIT_GAME_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_INIT_GAME_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.UC_TO_GL_INIT_GAME_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_INIT_GAME_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UC_TO_GL_LEAVE_GAME_T. */
            interface IUC_TO_GL_LEAVE_GAME_T {

                /** UC_TO_GL_LEAVE_GAME_T isManualSend */
                isManualSend?: (boolean|null);
            }

            /** Represents a UC_TO_GL_LEAVE_GAME_T. */
            class UC_TO_GL_LEAVE_GAME_T implements IUC_TO_GL_LEAVE_GAME_T {

                /**
                 * Constructs a new UC_TO_GL_LEAVE_GAME_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IUC_TO_GL_LEAVE_GAME_T);

                /** UC_TO_GL_LEAVE_GAME_T isManualSend. */
                public isManualSend: boolean;

                /**
                 * Creates a new UC_TO_GL_LEAVE_GAME_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_LEAVE_GAME_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IUC_TO_GL_LEAVE_GAME_T): Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T;

                /**
                 * Encodes the specified UC_TO_GL_LEAVE_GAME_T message. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T.verify|verify} messages.
                 * @param message UC_TO_GL_LEAVE_GAME_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IUC_TO_GL_LEAVE_GAME_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_LEAVE_GAME_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T.verify|verify} messages.
                 * @param message UC_TO_GL_LEAVE_GAME_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IUC_TO_GL_LEAVE_GAME_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_LEAVE_GAME_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_LEAVE_GAME_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T;

                /**
                 * Decodes a UC_TO_GL_LEAVE_GAME_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_LEAVE_GAME_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T;

                /**
                 * Verifies a UC_TO_GL_LEAVE_GAME_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UC_TO_GL_LEAVE_GAME_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UC_TO_GL_LEAVE_GAME_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T;

                /**
                 * Creates a plain object from a UC_TO_GL_LEAVE_GAME_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_LEAVE_GAME_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.UC_TO_GL_LEAVE_GAME_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_LEAVE_GAME_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UC_TO_GL_CHANGE_CHIP_T. */
            interface IUC_TO_GL_CHANGE_CHIP_T {

                /** UC_TO_GL_CHANGE_CHIP_T chipIdList */
                chipIdList?: (number[]|null);
            }

            /** Represents a UC_TO_GL_CHANGE_CHIP_T. */
            class UC_TO_GL_CHANGE_CHIP_T implements IUC_TO_GL_CHANGE_CHIP_T {

                /**
                 * Constructs a new UC_TO_GL_CHANGE_CHIP_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IUC_TO_GL_CHANGE_CHIP_T);

                /** UC_TO_GL_CHANGE_CHIP_T chipIdList. */
                public chipIdList: number[];

                /**
                 * Creates a new UC_TO_GL_CHANGE_CHIP_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_CHANGE_CHIP_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IUC_TO_GL_CHANGE_CHIP_T): Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T;

                /**
                 * Encodes the specified UC_TO_GL_CHANGE_CHIP_T message. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T.verify|verify} messages.
                 * @param message UC_TO_GL_CHANGE_CHIP_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IUC_TO_GL_CHANGE_CHIP_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_CHANGE_CHIP_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T.verify|verify} messages.
                 * @param message UC_TO_GL_CHANGE_CHIP_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IUC_TO_GL_CHANGE_CHIP_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_CHANGE_CHIP_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_CHANGE_CHIP_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T;

                /**
                 * Decodes a UC_TO_GL_CHANGE_CHIP_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_CHANGE_CHIP_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T;

                /**
                 * Verifies a UC_TO_GL_CHANGE_CHIP_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UC_TO_GL_CHANGE_CHIP_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UC_TO_GL_CHANGE_CHIP_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T;

                /**
                 * Creates a plain object from a UC_TO_GL_CHANGE_CHIP_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_CHANGE_CHIP_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.UC_TO_GL_CHANGE_CHIP_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_CHANGE_CHIP_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UC_TO_GL_UPDATE_CREDIT_T. */
            interface IUC_TO_GL_UPDATE_CREDIT_T {
            }

            /** Represents a UC_TO_GL_UPDATE_CREDIT_T. */
            class UC_TO_GL_UPDATE_CREDIT_T implements IUC_TO_GL_UPDATE_CREDIT_T {

                /**
                 * Constructs a new UC_TO_GL_UPDATE_CREDIT_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IUC_TO_GL_UPDATE_CREDIT_T);

                /**
                 * Creates a new UC_TO_GL_UPDATE_CREDIT_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_UPDATE_CREDIT_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IUC_TO_GL_UPDATE_CREDIT_T): Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T;

                /**
                 * Encodes the specified UC_TO_GL_UPDATE_CREDIT_T message. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T.verify|verify} messages.
                 * @param message UC_TO_GL_UPDATE_CREDIT_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IUC_TO_GL_UPDATE_CREDIT_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_UPDATE_CREDIT_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T.verify|verify} messages.
                 * @param message UC_TO_GL_UPDATE_CREDIT_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IUC_TO_GL_UPDATE_CREDIT_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_UPDATE_CREDIT_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_UPDATE_CREDIT_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T;

                /**
                 * Decodes a UC_TO_GL_UPDATE_CREDIT_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_UPDATE_CREDIT_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T;

                /**
                 * Verifies a UC_TO_GL_UPDATE_CREDIT_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UC_TO_GL_UPDATE_CREDIT_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UC_TO_GL_UPDATE_CREDIT_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T;

                /**
                 * Creates a plain object from a UC_TO_GL_UPDATE_CREDIT_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_UPDATE_CREDIT_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.UC_TO_GL_UPDATE_CREDIT_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_UPDATE_CREDIT_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UC_TO_GL_SEND_TICK_T. */
            interface IUC_TO_GL_SEND_TICK_T {

                /** UC_TO_GL_SEND_TICK_T gameID */
                gameID?: (number|null);

                /** UC_TO_GL_SEND_TICK_T tableID */
                tableID?: (number|null);

                /** UC_TO_GL_SEND_TICK_T timeStamp */
                timeStamp?: (number|null);
            }

            /** Represents a UC_TO_GL_SEND_TICK_T. */
            class UC_TO_GL_SEND_TICK_T implements IUC_TO_GL_SEND_TICK_T {

                /**
                 * Constructs a new UC_TO_GL_SEND_TICK_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IUC_TO_GL_SEND_TICK_T);

                /** UC_TO_GL_SEND_TICK_T gameID. */
                public gameID: number;

                /** UC_TO_GL_SEND_TICK_T tableID. */
                public tableID: number;

                /** UC_TO_GL_SEND_TICK_T timeStamp. */
                public timeStamp: number;

                /**
                 * Creates a new UC_TO_GL_SEND_TICK_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_SEND_TICK_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IUC_TO_GL_SEND_TICK_T): Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T;

                /**
                 * Encodes the specified UC_TO_GL_SEND_TICK_T message. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T.verify|verify} messages.
                 * @param message UC_TO_GL_SEND_TICK_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IUC_TO_GL_SEND_TICK_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_SEND_TICK_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T.verify|verify} messages.
                 * @param message UC_TO_GL_SEND_TICK_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IUC_TO_GL_SEND_TICK_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_SEND_TICK_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_SEND_TICK_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T;

                /**
                 * Decodes a UC_TO_GL_SEND_TICK_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_SEND_TICK_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T;

                /**
                 * Verifies a UC_TO_GL_SEND_TICK_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UC_TO_GL_SEND_TICK_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UC_TO_GL_SEND_TICK_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T;

                /**
                 * Creates a plain object from a UC_TO_GL_SEND_TICK_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_SEND_TICK_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.UC_TO_GL_SEND_TICK_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_SEND_TICK_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UC_TO_GL_ACTIVITY_ANIM_T. */
            interface IUC_TO_GL_ACTIVITY_ANIM_T {

                /** UC_TO_GL_ACTIVITY_ANIM_T ActivityID */
                ActivityID?: (number|null);
            }

            /** Represents a UC_TO_GL_ACTIVITY_ANIM_T. */
            class UC_TO_GL_ACTIVITY_ANIM_T implements IUC_TO_GL_ACTIVITY_ANIM_T {

                /**
                 * Constructs a new UC_TO_GL_ACTIVITY_ANIM_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_ANIM_T);

                /** UC_TO_GL_ACTIVITY_ANIM_T ActivityID. */
                public ActivityID: number;

                /**
                 * Creates a new UC_TO_GL_ACTIVITY_ANIM_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_ACTIVITY_ANIM_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_ANIM_T): Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T;

                /**
                 * Encodes the specified UC_TO_GL_ACTIVITY_ANIM_T message. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T.verify|verify} messages.
                 * @param message UC_TO_GL_ACTIVITY_ANIM_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_ANIM_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_ACTIVITY_ANIM_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T.verify|verify} messages.
                 * @param message UC_TO_GL_ACTIVITY_ANIM_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_ANIM_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_ACTIVITY_ANIM_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_ACTIVITY_ANIM_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T;

                /**
                 * Decodes a UC_TO_GL_ACTIVITY_ANIM_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_ACTIVITY_ANIM_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T;

                /**
                 * Verifies a UC_TO_GL_ACTIVITY_ANIM_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UC_TO_GL_ACTIVITY_ANIM_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UC_TO_GL_ACTIVITY_ANIM_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T;

                /**
                 * Creates a plain object from a UC_TO_GL_ACTIVITY_ANIM_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_ACTIVITY_ANIM_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_ACTIVITY_ANIM_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UC_TO_GL_ACTIVITY_ANIM_END_T. */
            interface IUC_TO_GL_ACTIVITY_ANIM_END_T {

                /** UC_TO_GL_ACTIVITY_ANIM_END_T ActivityID */
                ActivityID?: (number|null);
            }

            /** Represents a UC_TO_GL_ACTIVITY_ANIM_END_T. */
            class UC_TO_GL_ACTIVITY_ANIM_END_T implements IUC_TO_GL_ACTIVITY_ANIM_END_T {

                /**
                 * Constructs a new UC_TO_GL_ACTIVITY_ANIM_END_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_ANIM_END_T);

                /** UC_TO_GL_ACTIVITY_ANIM_END_T ActivityID. */
                public ActivityID: number;

                /**
                 * Creates a new UC_TO_GL_ACTIVITY_ANIM_END_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_ACTIVITY_ANIM_END_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_ANIM_END_T): Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T;

                /**
                 * Encodes the specified UC_TO_GL_ACTIVITY_ANIM_END_T message. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T.verify|verify} messages.
                 * @param message UC_TO_GL_ACTIVITY_ANIM_END_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_ANIM_END_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_ACTIVITY_ANIM_END_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T.verify|verify} messages.
                 * @param message UC_TO_GL_ACTIVITY_ANIM_END_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_ANIM_END_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_ACTIVITY_ANIM_END_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_ACTIVITY_ANIM_END_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T;

                /**
                 * Decodes a UC_TO_GL_ACTIVITY_ANIM_END_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_ACTIVITY_ANIM_END_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T;

                /**
                 * Verifies a UC_TO_GL_ACTIVITY_ANIM_END_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UC_TO_GL_ACTIVITY_ANIM_END_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UC_TO_GL_ACTIVITY_ANIM_END_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T;

                /**
                 * Creates a plain object from a UC_TO_GL_ACTIVITY_ANIM_END_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_ACTIVITY_ANIM_END_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.UC_TO_GL_ACTIVITY_ANIM_END_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_ACTIVITY_ANIM_END_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UC_TO_GL_RESX_LOAD_FINISH_T. */
            interface IUC_TO_GL_RESX_LOAD_FINISH_T {

                /** UC_TO_GL_RESX_LOAD_FINISH_T resxID */
                resxID?: (number|null);
            }

            /** Represents a UC_TO_GL_RESX_LOAD_FINISH_T. */
            class UC_TO_GL_RESX_LOAD_FINISH_T implements IUC_TO_GL_RESX_LOAD_FINISH_T {

                /**
                 * Constructs a new UC_TO_GL_RESX_LOAD_FINISH_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IUC_TO_GL_RESX_LOAD_FINISH_T);

                /** UC_TO_GL_RESX_LOAD_FINISH_T resxID. */
                public resxID: number;

                /**
                 * Creates a new UC_TO_GL_RESX_LOAD_FINISH_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_RESX_LOAD_FINISH_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IUC_TO_GL_RESX_LOAD_FINISH_T): Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T;

                /**
                 * Encodes the specified UC_TO_GL_RESX_LOAD_FINISH_T message. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T.verify|verify} messages.
                 * @param message UC_TO_GL_RESX_LOAD_FINISH_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IUC_TO_GL_RESX_LOAD_FINISH_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_RESX_LOAD_FINISH_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T.verify|verify} messages.
                 * @param message UC_TO_GL_RESX_LOAD_FINISH_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IUC_TO_GL_RESX_LOAD_FINISH_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_RESX_LOAD_FINISH_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_RESX_LOAD_FINISH_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T;

                /**
                 * Decodes a UC_TO_GL_RESX_LOAD_FINISH_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_RESX_LOAD_FINISH_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T;

                /**
                 * Verifies a UC_TO_GL_RESX_LOAD_FINISH_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UC_TO_GL_RESX_LOAD_FINISH_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UC_TO_GL_RESX_LOAD_FINISH_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T;

                /**
                 * Creates a plain object from a UC_TO_GL_RESX_LOAD_FINISH_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_RESX_LOAD_FINISH_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.UC_TO_GL_RESX_LOAD_FINISH_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_RESX_LOAD_FINISH_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UC_TO_GL_SHARED_CHEAT_T. */
            interface IUC_TO_GL_SHARED_CHEAT_T {

                /** UC_TO_GL_SHARED_CHEAT_T iType */
                iType?: (number|null);

                /** UC_TO_GL_SHARED_CHEAT_T arrValue */
                arrValue?: (number[]|null);

                /** UC_TO_GL_SHARED_CHEAT_T jsonContent */
                jsonContent?: (string|null);
            }

            /** Represents a UC_TO_GL_SHARED_CHEAT_T. */
            class UC_TO_GL_SHARED_CHEAT_T implements IUC_TO_GL_SHARED_CHEAT_T {

                /**
                 * Constructs a new UC_TO_GL_SHARED_CHEAT_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IUC_TO_GL_SHARED_CHEAT_T);

                /** UC_TO_GL_SHARED_CHEAT_T iType. */
                public iType: number;

                /** UC_TO_GL_SHARED_CHEAT_T arrValue. */
                public arrValue: number[];

                /** UC_TO_GL_SHARED_CHEAT_T jsonContent. */
                public jsonContent: string;

                /**
                 * Creates a new UC_TO_GL_SHARED_CHEAT_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_SHARED_CHEAT_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IUC_TO_GL_SHARED_CHEAT_T): Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T;

                /**
                 * Encodes the specified UC_TO_GL_SHARED_CHEAT_T message. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T.verify|verify} messages.
                 * @param message UC_TO_GL_SHARED_CHEAT_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IUC_TO_GL_SHARED_CHEAT_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_SHARED_CHEAT_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T.verify|verify} messages.
                 * @param message UC_TO_GL_SHARED_CHEAT_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IUC_TO_GL_SHARED_CHEAT_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_SHARED_CHEAT_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_SHARED_CHEAT_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T;

                /**
                 * Decodes a UC_TO_GL_SHARED_CHEAT_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_SHARED_CHEAT_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T;

                /**
                 * Verifies a UC_TO_GL_SHARED_CHEAT_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UC_TO_GL_SHARED_CHEAT_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UC_TO_GL_SHARED_CHEAT_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T;

                /**
                 * Creates a plain object from a UC_TO_GL_SHARED_CHEAT_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_SHARED_CHEAT_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.UC_TO_GL_SHARED_CHEAT_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_SHARED_CHEAT_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UC_TO_GL_ACTIVITY_REQ_T. */
            interface IUC_TO_GL_ACTIVITY_REQ_T {

                /** UC_TO_GL_ACTIVITY_REQ_T ActivityID */
                ActivityID?: (number|null);

                /** UC_TO_GL_ACTIVITY_REQ_T SID */
                SID?: (number|null);
            }

            /** Represents a UC_TO_GL_ACTIVITY_REQ_T. */
            class UC_TO_GL_ACTIVITY_REQ_T implements IUC_TO_GL_ACTIVITY_REQ_T {

                /**
                 * Constructs a new UC_TO_GL_ACTIVITY_REQ_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_REQ_T);

                /** UC_TO_GL_ACTIVITY_REQ_T ActivityID. */
                public ActivityID: number;

                /** UC_TO_GL_ACTIVITY_REQ_T SID. */
                public SID: number;

                /**
                 * Creates a new UC_TO_GL_ACTIVITY_REQ_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_ACTIVITY_REQ_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_REQ_T): Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T;

                /**
                 * Encodes the specified UC_TO_GL_ACTIVITY_REQ_T message. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T.verify|verify} messages.
                 * @param message UC_TO_GL_ACTIVITY_REQ_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_REQ_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_ACTIVITY_REQ_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T.verify|verify} messages.
                 * @param message UC_TO_GL_ACTIVITY_REQ_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IUC_TO_GL_ACTIVITY_REQ_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_ACTIVITY_REQ_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_ACTIVITY_REQ_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T;

                /**
                 * Decodes a UC_TO_GL_ACTIVITY_REQ_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_ACTIVITY_REQ_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T;

                /**
                 * Verifies a UC_TO_GL_ACTIVITY_REQ_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UC_TO_GL_ACTIVITY_REQ_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UC_TO_GL_ACTIVITY_REQ_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T;

                /**
                 * Creates a plain object from a UC_TO_GL_ACTIVITY_REQ_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_ACTIVITY_REQ_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.UC_TO_GL_ACTIVITY_REQ_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_ACTIVITY_REQ_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_SEND_TEST_ACK_T. */
            interface IGL_TO_UC_SEND_TEST_ACK_T {

                /** GL_TO_UC_SEND_TEST_ACK_T iTest */
                iTest?: (number|null);
            }

            /** Represents a GL_TO_UC_SEND_TEST_ACK_T. */
            class GL_TO_UC_SEND_TEST_ACK_T implements IGL_TO_UC_SEND_TEST_ACK_T {

                /**
                 * Constructs a new GL_TO_UC_SEND_TEST_ACK_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IGL_TO_UC_SEND_TEST_ACK_T);

                /** GL_TO_UC_SEND_TEST_ACK_T iTest. */
                public iTest: number;

                /**
                 * Creates a new GL_TO_UC_SEND_TEST_ACK_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_SEND_TEST_ACK_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IGL_TO_UC_SEND_TEST_ACK_T): Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T;

                /**
                 * Encodes the specified GL_TO_UC_SEND_TEST_ACK_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T.verify|verify} messages.
                 * @param message GL_TO_UC_SEND_TEST_ACK_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IGL_TO_UC_SEND_TEST_ACK_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_SEND_TEST_ACK_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T.verify|verify} messages.
                 * @param message GL_TO_UC_SEND_TEST_ACK_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IGL_TO_UC_SEND_TEST_ACK_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_SEND_TEST_ACK_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_SEND_TEST_ACK_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T;

                /**
                 * Decodes a GL_TO_UC_SEND_TEST_ACK_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_SEND_TEST_ACK_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T;

                /**
                 * Verifies a GL_TO_UC_SEND_TEST_ACK_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_SEND_TEST_ACK_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_SEND_TEST_ACK_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T;

                /**
                 * Creates a plain object from a GL_TO_UC_SEND_TEST_ACK_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_SEND_TEST_ACK_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.GL_TO_UC_SEND_TEST_ACK_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_SEND_TEST_ACK_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_INIT_GAME_T. */
            interface IGL_TO_UC_INIT_GAME_T {

                /** GL_TO_UC_INIT_GAME_T resultCode */
                resultCode?: (number|null);

                /** GL_TO_UC_INIT_GAME_T sharedProtoVersion */
                sharedProtoVersion?: (number|null);

                /** GL_TO_UC_INIT_GAME_T gameProtoVersion */
                gameProtoVersion?: (number|null);

                /** GL_TO_UC_INIT_GAME_T enterType */
                enterType?: (number|null);

                /** GL_TO_UC_INIT_GAME_T serialNumber */
                serialNumber?: (number|null);
            }

            /** Represents a GL_TO_UC_INIT_GAME_T. */
            class GL_TO_UC_INIT_GAME_T implements IGL_TO_UC_INIT_GAME_T {

                /**
                 * Constructs a new GL_TO_UC_INIT_GAME_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IGL_TO_UC_INIT_GAME_T);

                /** GL_TO_UC_INIT_GAME_T resultCode. */
                public resultCode: number;

                /** GL_TO_UC_INIT_GAME_T sharedProtoVersion. */
                public sharedProtoVersion: number;

                /** GL_TO_UC_INIT_GAME_T gameProtoVersion. */
                public gameProtoVersion: number;

                /** GL_TO_UC_INIT_GAME_T enterType. */
                public enterType: number;

                /** GL_TO_UC_INIT_GAME_T serialNumber. */
                public serialNumber: number;

                /**
                 * Creates a new GL_TO_UC_INIT_GAME_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_INIT_GAME_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IGL_TO_UC_INIT_GAME_T): Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T;

                /**
                 * Encodes the specified GL_TO_UC_INIT_GAME_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T.verify|verify} messages.
                 * @param message GL_TO_UC_INIT_GAME_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IGL_TO_UC_INIT_GAME_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_INIT_GAME_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T.verify|verify} messages.
                 * @param message GL_TO_UC_INIT_GAME_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IGL_TO_UC_INIT_GAME_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_INIT_GAME_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_INIT_GAME_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T;

                /**
                 * Decodes a GL_TO_UC_INIT_GAME_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_INIT_GAME_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T;

                /**
                 * Verifies a GL_TO_UC_INIT_GAME_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_INIT_GAME_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_INIT_GAME_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T;

                /**
                 * Creates a plain object from a GL_TO_UC_INIT_GAME_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_INIT_GAME_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.GL_TO_UC_INIT_GAME_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_INIT_GAME_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_LEAVE_GAME_T. */
            interface IGL_TO_UC_LEAVE_GAME_T {

                /** GL_TO_UC_LEAVE_GAME_T resultCode */
                resultCode?: (number|null);

                /** GL_TO_UC_LEAVE_GAME_T isReserved */
                isReserved?: (boolean|null);
            }

            /** Represents a GL_TO_UC_LEAVE_GAME_T. */
            class GL_TO_UC_LEAVE_GAME_T implements IGL_TO_UC_LEAVE_GAME_T {

                /**
                 * Constructs a new GL_TO_UC_LEAVE_GAME_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IGL_TO_UC_LEAVE_GAME_T);

                /** GL_TO_UC_LEAVE_GAME_T resultCode. */
                public resultCode: number;

                /** GL_TO_UC_LEAVE_GAME_T isReserved. */
                public isReserved: boolean;

                /**
                 * Creates a new GL_TO_UC_LEAVE_GAME_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_LEAVE_GAME_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IGL_TO_UC_LEAVE_GAME_T): Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T;

                /**
                 * Encodes the specified GL_TO_UC_LEAVE_GAME_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T.verify|verify} messages.
                 * @param message GL_TO_UC_LEAVE_GAME_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IGL_TO_UC_LEAVE_GAME_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_LEAVE_GAME_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T.verify|verify} messages.
                 * @param message GL_TO_UC_LEAVE_GAME_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IGL_TO_UC_LEAVE_GAME_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_LEAVE_GAME_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_LEAVE_GAME_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T;

                /**
                 * Decodes a GL_TO_UC_LEAVE_GAME_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_LEAVE_GAME_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T;

                /**
                 * Verifies a GL_TO_UC_LEAVE_GAME_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_LEAVE_GAME_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_LEAVE_GAME_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T;

                /**
                 * Creates a plain object from a GL_TO_UC_LEAVE_GAME_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_LEAVE_GAME_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.GL_TO_UC_LEAVE_GAME_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_LEAVE_GAME_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_CHANGE_CHIP_T. */
            interface IGL_TO_UC_CHANGE_CHIP_T {

                /** GL_TO_UC_CHANGE_CHIP_T resultCode */
                resultCode?: (number|null);
            }

            /** Represents a GL_TO_UC_CHANGE_CHIP_T. */
            class GL_TO_UC_CHANGE_CHIP_T implements IGL_TO_UC_CHANGE_CHIP_T {

                /**
                 * Constructs a new GL_TO_UC_CHANGE_CHIP_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IGL_TO_UC_CHANGE_CHIP_T);

                /** GL_TO_UC_CHANGE_CHIP_T resultCode. */
                public resultCode: number;

                /**
                 * Creates a new GL_TO_UC_CHANGE_CHIP_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_CHANGE_CHIP_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IGL_TO_UC_CHANGE_CHIP_T): Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T;

                /**
                 * Encodes the specified GL_TO_UC_CHANGE_CHIP_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T.verify|verify} messages.
                 * @param message GL_TO_UC_CHANGE_CHIP_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IGL_TO_UC_CHANGE_CHIP_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_CHANGE_CHIP_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T.verify|verify} messages.
                 * @param message GL_TO_UC_CHANGE_CHIP_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IGL_TO_UC_CHANGE_CHIP_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_CHANGE_CHIP_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_CHANGE_CHIP_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T;

                /**
                 * Decodes a GL_TO_UC_CHANGE_CHIP_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_CHANGE_CHIP_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T;

                /**
                 * Verifies a GL_TO_UC_CHANGE_CHIP_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_CHANGE_CHIP_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_CHANGE_CHIP_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T;

                /**
                 * Creates a plain object from a GL_TO_UC_CHANGE_CHIP_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_CHANGE_CHIP_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.GL_TO_UC_CHANGE_CHIP_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_CHANGE_CHIP_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_UPDATE_CREDIT_T. */
            interface IGL_TO_UC_UPDATE_CREDIT_T {

                /** GL_TO_UC_UPDATE_CREDIT_T credit */
                credit?: (number|Long|null);
            }

            /** Represents a GL_TO_UC_UPDATE_CREDIT_T. */
            class GL_TO_UC_UPDATE_CREDIT_T implements IGL_TO_UC_UPDATE_CREDIT_T {

                /**
                 * Constructs a new GL_TO_UC_UPDATE_CREDIT_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IGL_TO_UC_UPDATE_CREDIT_T);

                /** GL_TO_UC_UPDATE_CREDIT_T credit. */
                public credit: (number|Long);

                /**
                 * Creates a new GL_TO_UC_UPDATE_CREDIT_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_UPDATE_CREDIT_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IGL_TO_UC_UPDATE_CREDIT_T): Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T;

                /**
                 * Encodes the specified GL_TO_UC_UPDATE_CREDIT_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T.verify|verify} messages.
                 * @param message GL_TO_UC_UPDATE_CREDIT_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IGL_TO_UC_UPDATE_CREDIT_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_UPDATE_CREDIT_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T.verify|verify} messages.
                 * @param message GL_TO_UC_UPDATE_CREDIT_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IGL_TO_UC_UPDATE_CREDIT_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_UPDATE_CREDIT_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_UPDATE_CREDIT_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T;

                /**
                 * Decodes a GL_TO_UC_UPDATE_CREDIT_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_UPDATE_CREDIT_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T;

                /**
                 * Verifies a GL_TO_UC_UPDATE_CREDIT_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_UPDATE_CREDIT_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_UPDATE_CREDIT_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T;

                /**
                 * Creates a plain object from a GL_TO_UC_UPDATE_CREDIT_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_UPDATE_CREDIT_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.GL_TO_UC_UPDATE_CREDIT_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_UPDATE_CREDIT_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_SEND_TICK_ACK_T. */
            interface IGL_TO_UC_SEND_TICK_ACK_T {

                /** GL_TO_UC_SEND_TICK_ACK_T gameID */
                gameID?: (number|null);

                /** GL_TO_UC_SEND_TICK_ACK_T tableID */
                tableID?: (number|null);

                /** GL_TO_UC_SEND_TICK_ACK_T timeStamp */
                timeStamp?: (number|null);

                /** GL_TO_UC_SEND_TICK_ACK_T active */
                active?: (boolean|null);
            }

            /** Represents a GL_TO_UC_SEND_TICK_ACK_T. */
            class GL_TO_UC_SEND_TICK_ACK_T implements IGL_TO_UC_SEND_TICK_ACK_T {

                /**
                 * Constructs a new GL_TO_UC_SEND_TICK_ACK_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IGL_TO_UC_SEND_TICK_ACK_T);

                /** GL_TO_UC_SEND_TICK_ACK_T gameID. */
                public gameID: number;

                /** GL_TO_UC_SEND_TICK_ACK_T tableID. */
                public tableID: number;

                /** GL_TO_UC_SEND_TICK_ACK_T timeStamp. */
                public timeStamp: number;

                /** GL_TO_UC_SEND_TICK_ACK_T active. */
                public active: boolean;

                /**
                 * Creates a new GL_TO_UC_SEND_TICK_ACK_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_SEND_TICK_ACK_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IGL_TO_UC_SEND_TICK_ACK_T): Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T;

                /**
                 * Encodes the specified GL_TO_UC_SEND_TICK_ACK_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T.verify|verify} messages.
                 * @param message GL_TO_UC_SEND_TICK_ACK_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IGL_TO_UC_SEND_TICK_ACK_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_SEND_TICK_ACK_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T.verify|verify} messages.
                 * @param message GL_TO_UC_SEND_TICK_ACK_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IGL_TO_UC_SEND_TICK_ACK_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_SEND_TICK_ACK_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_SEND_TICK_ACK_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T;

                /**
                 * Decodes a GL_TO_UC_SEND_TICK_ACK_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_SEND_TICK_ACK_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T;

                /**
                 * Verifies a GL_TO_UC_SEND_TICK_ACK_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_SEND_TICK_ACK_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_SEND_TICK_ACK_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T;

                /**
                 * Creates a plain object from a GL_TO_UC_SEND_TICK_ACK_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_SEND_TICK_ACK_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.GL_TO_UC_SEND_TICK_ACK_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_SEND_TICK_ACK_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_SYSTEM_MESSAGE_T. */
            interface IGL_TO_UC_SYSTEM_MESSAGE_T {

                /** GL_TO_UC_SYSTEM_MESSAGE_T infoType */
                infoType?: (number|null);

                /** GL_TO_UC_SYSTEM_MESSAGE_T infoMsg */
                infoMsg?: (string|null);
            }

            /** Represents a GL_TO_UC_SYSTEM_MESSAGE_T. */
            class GL_TO_UC_SYSTEM_MESSAGE_T implements IGL_TO_UC_SYSTEM_MESSAGE_T {

                /**
                 * Constructs a new GL_TO_UC_SYSTEM_MESSAGE_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IGL_TO_UC_SYSTEM_MESSAGE_T);

                /** GL_TO_UC_SYSTEM_MESSAGE_T infoType. */
                public infoType: number;

                /** GL_TO_UC_SYSTEM_MESSAGE_T infoMsg. */
                public infoMsg: string;

                /**
                 * Creates a new GL_TO_UC_SYSTEM_MESSAGE_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_SYSTEM_MESSAGE_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IGL_TO_UC_SYSTEM_MESSAGE_T): Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T;

                /**
                 * Encodes the specified GL_TO_UC_SYSTEM_MESSAGE_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T.verify|verify} messages.
                 * @param message GL_TO_UC_SYSTEM_MESSAGE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IGL_TO_UC_SYSTEM_MESSAGE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_SYSTEM_MESSAGE_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T.verify|verify} messages.
                 * @param message GL_TO_UC_SYSTEM_MESSAGE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IGL_TO_UC_SYSTEM_MESSAGE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_SYSTEM_MESSAGE_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_SYSTEM_MESSAGE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T;

                /**
                 * Decodes a GL_TO_UC_SYSTEM_MESSAGE_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_SYSTEM_MESSAGE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T;

                /**
                 * Verifies a GL_TO_UC_SYSTEM_MESSAGE_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_SYSTEM_MESSAGE_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_SYSTEM_MESSAGE_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T;

                /**
                 * Creates a plain object from a GL_TO_UC_SYSTEM_MESSAGE_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_SYSTEM_MESSAGE_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.GL_TO_UC_SYSTEM_MESSAGE_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_SYSTEM_MESSAGE_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_UPDATE_ONLINE_T. */
            interface IGL_TO_UC_UPDATE_ONLINE_T {

                /** GL_TO_UC_UPDATE_ONLINE_T onlineNum */
                onlineNum?: (number|null);
            }

            /** Represents a GL_TO_UC_UPDATE_ONLINE_T. */
            class GL_TO_UC_UPDATE_ONLINE_T implements IGL_TO_UC_UPDATE_ONLINE_T {

                /**
                 * Constructs a new GL_TO_UC_UPDATE_ONLINE_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IGL_TO_UC_UPDATE_ONLINE_T);

                /** GL_TO_UC_UPDATE_ONLINE_T onlineNum. */
                public onlineNum: number;

                /**
                 * Creates a new GL_TO_UC_UPDATE_ONLINE_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_UPDATE_ONLINE_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IGL_TO_UC_UPDATE_ONLINE_T): Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T;

                /**
                 * Encodes the specified GL_TO_UC_UPDATE_ONLINE_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T.verify|verify} messages.
                 * @param message GL_TO_UC_UPDATE_ONLINE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IGL_TO_UC_UPDATE_ONLINE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_UPDATE_ONLINE_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T.verify|verify} messages.
                 * @param message GL_TO_UC_UPDATE_ONLINE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IGL_TO_UC_UPDATE_ONLINE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_UPDATE_ONLINE_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_UPDATE_ONLINE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T;

                /**
                 * Decodes a GL_TO_UC_UPDATE_ONLINE_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_UPDATE_ONLINE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T;

                /**
                 * Verifies a GL_TO_UC_UPDATE_ONLINE_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_UPDATE_ONLINE_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_UPDATE_ONLINE_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T;

                /**
                 * Creates a plain object from a GL_TO_UC_UPDATE_ONLINE_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_UPDATE_ONLINE_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.GL_TO_UC_UPDATE_ONLINE_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_UPDATE_ONLINE_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_SYSTEM_MAINTAIN_T. */
            interface IGL_TO_UC_SYSTEM_MAINTAIN_T {
            }

            /** Represents a GL_TO_UC_SYSTEM_MAINTAIN_T. */
            class GL_TO_UC_SYSTEM_MAINTAIN_T implements IGL_TO_UC_SYSTEM_MAINTAIN_T {

                /**
                 * Constructs a new GL_TO_UC_SYSTEM_MAINTAIN_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IGL_TO_UC_SYSTEM_MAINTAIN_T);

                /**
                 * Creates a new GL_TO_UC_SYSTEM_MAINTAIN_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_SYSTEM_MAINTAIN_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IGL_TO_UC_SYSTEM_MAINTAIN_T): Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T;

                /**
                 * Encodes the specified GL_TO_UC_SYSTEM_MAINTAIN_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T.verify|verify} messages.
                 * @param message GL_TO_UC_SYSTEM_MAINTAIN_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IGL_TO_UC_SYSTEM_MAINTAIN_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_SYSTEM_MAINTAIN_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T.verify|verify} messages.
                 * @param message GL_TO_UC_SYSTEM_MAINTAIN_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IGL_TO_UC_SYSTEM_MAINTAIN_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_SYSTEM_MAINTAIN_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_SYSTEM_MAINTAIN_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T;

                /**
                 * Decodes a GL_TO_UC_SYSTEM_MAINTAIN_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_SYSTEM_MAINTAIN_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T;

                /**
                 * Verifies a GL_TO_UC_SYSTEM_MAINTAIN_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_SYSTEM_MAINTAIN_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_SYSTEM_MAINTAIN_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T;

                /**
                 * Creates a plain object from a GL_TO_UC_SYSTEM_MAINTAIN_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_SYSTEM_MAINTAIN_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.GL_TO_UC_SYSTEM_MAINTAIN_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_SYSTEM_MAINTAIN_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_MAINTAIN_LEAVE_T. */
            interface IGL_TO_UC_MAINTAIN_LEAVE_T {
            }

            /** Represents a GL_TO_UC_MAINTAIN_LEAVE_T. */
            class GL_TO_UC_MAINTAIN_LEAVE_T implements IGL_TO_UC_MAINTAIN_LEAVE_T {

                /**
                 * Constructs a new GL_TO_UC_MAINTAIN_LEAVE_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IGL_TO_UC_MAINTAIN_LEAVE_T);

                /**
                 * Creates a new GL_TO_UC_MAINTAIN_LEAVE_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_MAINTAIN_LEAVE_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IGL_TO_UC_MAINTAIN_LEAVE_T): Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T;

                /**
                 * Encodes the specified GL_TO_UC_MAINTAIN_LEAVE_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T.verify|verify} messages.
                 * @param message GL_TO_UC_MAINTAIN_LEAVE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IGL_TO_UC_MAINTAIN_LEAVE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_MAINTAIN_LEAVE_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T.verify|verify} messages.
                 * @param message GL_TO_UC_MAINTAIN_LEAVE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IGL_TO_UC_MAINTAIN_LEAVE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_MAINTAIN_LEAVE_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_MAINTAIN_LEAVE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T;

                /**
                 * Decodes a GL_TO_UC_MAINTAIN_LEAVE_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_MAINTAIN_LEAVE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T;

                /**
                 * Verifies a GL_TO_UC_MAINTAIN_LEAVE_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_MAINTAIN_LEAVE_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_MAINTAIN_LEAVE_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T;

                /**
                 * Creates a plain object from a GL_TO_UC_MAINTAIN_LEAVE_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_MAINTAIN_LEAVE_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.GL_TO_UC_MAINTAIN_LEAVE_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_MAINTAIN_LEAVE_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_IDLE_LEAVE_T. */
            interface IGL_TO_UC_IDLE_LEAVE_T {
            }

            /** Represents a GL_TO_UC_IDLE_LEAVE_T. */
            class GL_TO_UC_IDLE_LEAVE_T implements IGL_TO_UC_IDLE_LEAVE_T {

                /**
                 * Constructs a new GL_TO_UC_IDLE_LEAVE_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IGL_TO_UC_IDLE_LEAVE_T);

                /**
                 * Creates a new GL_TO_UC_IDLE_LEAVE_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_IDLE_LEAVE_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IGL_TO_UC_IDLE_LEAVE_T): Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T;

                /**
                 * Encodes the specified GL_TO_UC_IDLE_LEAVE_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T.verify|verify} messages.
                 * @param message GL_TO_UC_IDLE_LEAVE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IGL_TO_UC_IDLE_LEAVE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_IDLE_LEAVE_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T.verify|verify} messages.
                 * @param message GL_TO_UC_IDLE_LEAVE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IGL_TO_UC_IDLE_LEAVE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_IDLE_LEAVE_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_IDLE_LEAVE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T;

                /**
                 * Decodes a GL_TO_UC_IDLE_LEAVE_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_IDLE_LEAVE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T;

                /**
                 * Verifies a GL_TO_UC_IDLE_LEAVE_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_IDLE_LEAVE_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_IDLE_LEAVE_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T;

                /**
                 * Creates a plain object from a GL_TO_UC_IDLE_LEAVE_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_IDLE_LEAVE_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.GL_TO_UC_IDLE_LEAVE_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_IDLE_LEAVE_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_TICK_OVERTIME_LEAVE_T. */
            interface IGL_TO_UC_TICK_OVERTIME_LEAVE_T {
            }

            /** Represents a GL_TO_UC_TICK_OVERTIME_LEAVE_T. */
            class GL_TO_UC_TICK_OVERTIME_LEAVE_T implements IGL_TO_UC_TICK_OVERTIME_LEAVE_T {

                /**
                 * Constructs a new GL_TO_UC_TICK_OVERTIME_LEAVE_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IGL_TO_UC_TICK_OVERTIME_LEAVE_T);

                /**
                 * Creates a new GL_TO_UC_TICK_OVERTIME_LEAVE_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_TICK_OVERTIME_LEAVE_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IGL_TO_UC_TICK_OVERTIME_LEAVE_T): Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T;

                /**
                 * Encodes the specified GL_TO_UC_TICK_OVERTIME_LEAVE_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T.verify|verify} messages.
                 * @param message GL_TO_UC_TICK_OVERTIME_LEAVE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IGL_TO_UC_TICK_OVERTIME_LEAVE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_TICK_OVERTIME_LEAVE_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T.verify|verify} messages.
                 * @param message GL_TO_UC_TICK_OVERTIME_LEAVE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IGL_TO_UC_TICK_OVERTIME_LEAVE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_TICK_OVERTIME_LEAVE_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_TICK_OVERTIME_LEAVE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T;

                /**
                 * Decodes a GL_TO_UC_TICK_OVERTIME_LEAVE_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_TICK_OVERTIME_LEAVE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T;

                /**
                 * Verifies a GL_TO_UC_TICK_OVERTIME_LEAVE_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_TICK_OVERTIME_LEAVE_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_TICK_OVERTIME_LEAVE_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T;

                /**
                 * Creates a plain object from a GL_TO_UC_TICK_OVERTIME_LEAVE_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_TICK_OVERTIME_LEAVE_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.GL_TO_UC_TICK_OVERTIME_LEAVE_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_TICK_OVERTIME_LEAVE_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_PACKET_ERROR_T. */
            interface IGL_TO_UC_PACKET_ERROR_T {
            }

            /** Represents a GL_TO_UC_PACKET_ERROR_T. */
            class GL_TO_UC_PACKET_ERROR_T implements IGL_TO_UC_PACKET_ERROR_T {

                /**
                 * Constructs a new GL_TO_UC_PACKET_ERROR_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IGL_TO_UC_PACKET_ERROR_T);

                /**
                 * Creates a new GL_TO_UC_PACKET_ERROR_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_PACKET_ERROR_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IGL_TO_UC_PACKET_ERROR_T): Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T;

                /**
                 * Encodes the specified GL_TO_UC_PACKET_ERROR_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T.verify|verify} messages.
                 * @param message GL_TO_UC_PACKET_ERROR_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IGL_TO_UC_PACKET_ERROR_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_PACKET_ERROR_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T.verify|verify} messages.
                 * @param message GL_TO_UC_PACKET_ERROR_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IGL_TO_UC_PACKET_ERROR_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_PACKET_ERROR_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_PACKET_ERROR_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T;

                /**
                 * Decodes a GL_TO_UC_PACKET_ERROR_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_PACKET_ERROR_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T;

                /**
                 * Verifies a GL_TO_UC_PACKET_ERROR_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_PACKET_ERROR_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_PACKET_ERROR_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T;

                /**
                 * Creates a plain object from a GL_TO_UC_PACKET_ERROR_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_PACKET_ERROR_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.GL_TO_UC_PACKET_ERROR_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_PACKET_ERROR_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_CREDIT_HANDLE_T. */
            interface IGL_TO_UC_CREDIT_HANDLE_T {

                /** GL_TO_UC_CREDIT_HANDLE_T state */
                state?: (number|null);

                /** GL_TO_UC_CREDIT_HANDLE_T credit */
                credit?: (number|Long|null);

                /** GL_TO_UC_CREDIT_HANDLE_T gap */
                gap?: (number|Long|null);
            }

            /** Represents a GL_TO_UC_CREDIT_HANDLE_T. */
            class GL_TO_UC_CREDIT_HANDLE_T implements IGL_TO_UC_CREDIT_HANDLE_T {

                /**
                 * Constructs a new GL_TO_UC_CREDIT_HANDLE_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IGL_TO_UC_CREDIT_HANDLE_T);

                /** GL_TO_UC_CREDIT_HANDLE_T state. */
                public state: number;

                /** GL_TO_UC_CREDIT_HANDLE_T credit. */
                public credit: (number|Long);

                /** GL_TO_UC_CREDIT_HANDLE_T gap. */
                public gap: (number|Long);

                /**
                 * Creates a new GL_TO_UC_CREDIT_HANDLE_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_CREDIT_HANDLE_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IGL_TO_UC_CREDIT_HANDLE_T): Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T;

                /**
                 * Encodes the specified GL_TO_UC_CREDIT_HANDLE_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T.verify|verify} messages.
                 * @param message GL_TO_UC_CREDIT_HANDLE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IGL_TO_UC_CREDIT_HANDLE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_CREDIT_HANDLE_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T.verify|verify} messages.
                 * @param message GL_TO_UC_CREDIT_HANDLE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IGL_TO_UC_CREDIT_HANDLE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_CREDIT_HANDLE_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_CREDIT_HANDLE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T;

                /**
                 * Decodes a GL_TO_UC_CREDIT_HANDLE_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_CREDIT_HANDLE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T;

                /**
                 * Verifies a GL_TO_UC_CREDIT_HANDLE_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_CREDIT_HANDLE_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_CREDIT_HANDLE_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T;

                /**
                 * Creates a plain object from a GL_TO_UC_CREDIT_HANDLE_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_CREDIT_HANDLE_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.GL_TO_UC_CREDIT_HANDLE_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_CREDIT_HANDLE_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_ACTIVITY_START_T. */
            interface IGL_TO_UC_ACTIVITY_START_T {

                /** GL_TO_UC_ACTIVITY_START_T ActivityID */
                ActivityID?: (number|null);

                /** GL_TO_UC_ACTIVITY_START_T ActivityCount */
                ActivityCount?: (number|null);
            }

            /** Represents a GL_TO_UC_ACTIVITY_START_T. */
            class GL_TO_UC_ACTIVITY_START_T implements IGL_TO_UC_ACTIVITY_START_T {

                /**
                 * Constructs a new GL_TO_UC_ACTIVITY_START_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_START_T);

                /** GL_TO_UC_ACTIVITY_START_T ActivityID. */
                public ActivityID: number;

                /** GL_TO_UC_ACTIVITY_START_T ActivityCount. */
                public ActivityCount: number;

                /**
                 * Creates a new GL_TO_UC_ACTIVITY_START_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_ACTIVITY_START_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_START_T): Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T;

                /**
                 * Encodes the specified GL_TO_UC_ACTIVITY_START_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T.verify|verify} messages.
                 * @param message GL_TO_UC_ACTIVITY_START_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_START_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_ACTIVITY_START_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T.verify|verify} messages.
                 * @param message GL_TO_UC_ACTIVITY_START_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_START_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_ACTIVITY_START_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_ACTIVITY_START_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T;

                /**
                 * Decodes a GL_TO_UC_ACTIVITY_START_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_ACTIVITY_START_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T;

                /**
                 * Verifies a GL_TO_UC_ACTIVITY_START_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_ACTIVITY_START_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_ACTIVITY_START_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T;

                /**
                 * Creates a plain object from a GL_TO_UC_ACTIVITY_START_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_ACTIVITY_START_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.GL_TO_UC_ACTIVITY_START_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_ACTIVITY_START_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_ACTIVITY_END_T. */
            interface IGL_TO_UC_ACTIVITY_END_T {

                /** GL_TO_UC_ACTIVITY_END_T ActivityID */
                ActivityID?: (number|null);

                /** GL_TO_UC_ACTIVITY_END_T TotalWin */
                TotalWin?: (number|Long|null);

                /** GL_TO_UC_ACTIVITY_END_T Credit */
                Credit?: (number|Long|null);
            }

            /** Represents a GL_TO_UC_ACTIVITY_END_T. */
            class GL_TO_UC_ACTIVITY_END_T implements IGL_TO_UC_ACTIVITY_END_T {

                /**
                 * Constructs a new GL_TO_UC_ACTIVITY_END_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_END_T);

                /** GL_TO_UC_ACTIVITY_END_T ActivityID. */
                public ActivityID: number;

                /** GL_TO_UC_ACTIVITY_END_T TotalWin. */
                public TotalWin: (number|Long);

                /** GL_TO_UC_ACTIVITY_END_T Credit. */
                public Credit: (number|Long);

                /**
                 * Creates a new GL_TO_UC_ACTIVITY_END_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_ACTIVITY_END_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_END_T): Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T;

                /**
                 * Encodes the specified GL_TO_UC_ACTIVITY_END_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T.verify|verify} messages.
                 * @param message GL_TO_UC_ACTIVITY_END_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_END_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_ACTIVITY_END_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T.verify|verify} messages.
                 * @param message GL_TO_UC_ACTIVITY_END_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_END_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_ACTIVITY_END_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_ACTIVITY_END_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T;

                /**
                 * Decodes a GL_TO_UC_ACTIVITY_END_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_ACTIVITY_END_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T;

                /**
                 * Verifies a GL_TO_UC_ACTIVITY_END_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_ACTIVITY_END_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_ACTIVITY_END_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T;

                /**
                 * Creates a plain object from a GL_TO_UC_ACTIVITY_END_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_ACTIVITY_END_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.GL_TO_UC_ACTIVITY_END_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_ACTIVITY_END_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_ACTIVITY_ACK_T. */
            interface IGL_TO_UC_ACTIVITY_ACK_T {

                /** GL_TO_UC_ACTIVITY_ACK_T ActivityID */
                ActivityID?: (number|null);

                /** GL_TO_UC_ACTIVITY_ACK_T SID */
                SID?: (number|null);

                /** GL_TO_UC_ACTIVITY_ACK_T IsWin */
                IsWin?: (boolean|null);

                /** GL_TO_UC_ACTIVITY_ACK_T WinPoint */
                WinPoint?: (number|Long|null);

                /** GL_TO_UC_ACTIVITY_ACK_T iResultCode */
                iResultCode?: (number|null);
            }

            /** Represents a GL_TO_UC_ACTIVITY_ACK_T. */
            class GL_TO_UC_ACTIVITY_ACK_T implements IGL_TO_UC_ACTIVITY_ACK_T {

                /**
                 * Constructs a new GL_TO_UC_ACTIVITY_ACK_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_ACK_T);

                /** GL_TO_UC_ACTIVITY_ACK_T ActivityID. */
                public ActivityID: number;

                /** GL_TO_UC_ACTIVITY_ACK_T SID. */
                public SID: number;

                /** GL_TO_UC_ACTIVITY_ACK_T IsWin. */
                public IsWin: boolean;

                /** GL_TO_UC_ACTIVITY_ACK_T WinPoint. */
                public WinPoint: (number|Long);

                /** GL_TO_UC_ACTIVITY_ACK_T iResultCode. */
                public iResultCode: number;

                /**
                 * Creates a new GL_TO_UC_ACTIVITY_ACK_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_ACTIVITY_ACK_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_ACK_T): Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T;

                /**
                 * Encodes the specified GL_TO_UC_ACTIVITY_ACK_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T.verify|verify} messages.
                 * @param message GL_TO_UC_ACTIVITY_ACK_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_ACK_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_ACTIVITY_ACK_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T.verify|verify} messages.
                 * @param message GL_TO_UC_ACTIVITY_ACK_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IGL_TO_UC_ACTIVITY_ACK_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_ACTIVITY_ACK_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_ACTIVITY_ACK_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T;

                /**
                 * Decodes a GL_TO_UC_ACTIVITY_ACK_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_ACTIVITY_ACK_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T;

                /**
                 * Verifies a GL_TO_UC_ACTIVITY_ACK_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_ACTIVITY_ACK_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_ACTIVITY_ACK_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T;

                /**
                 * Creates a plain object from a GL_TO_UC_ACTIVITY_ACK_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_ACTIVITY_ACK_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.GL_TO_UC_ACTIVITY_ACK_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_ACTIVITY_ACK_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_SHARED_CHEAT_T. */
            interface IGL_TO_UC_SHARED_CHEAT_T {

                /** GL_TO_UC_SHARED_CHEAT_T errorCode */
                errorCode?: (number|null);

                /** GL_TO_UC_SHARED_CHEAT_T arrValue */
                arrValue?: (number[]|null);
            }

            /** Represents a GL_TO_UC_SHARED_CHEAT_T. */
            class GL_TO_UC_SHARED_CHEAT_T implements IGL_TO_UC_SHARED_CHEAT_T {

                /**
                 * Constructs a new GL_TO_UC_SHARED_CHEAT_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Shared.IGL_TO_UC_SHARED_CHEAT_T);

                /** GL_TO_UC_SHARED_CHEAT_T errorCode. */
                public errorCode: number;

                /** GL_TO_UC_SHARED_CHEAT_T arrValue. */
                public arrValue: number[];

                /**
                 * Creates a new GL_TO_UC_SHARED_CHEAT_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_SHARED_CHEAT_T instance
                 */
                public static create(properties?: Protocol.Game.Shared.IGL_TO_UC_SHARED_CHEAT_T): Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T;

                /**
                 * Encodes the specified GL_TO_UC_SHARED_CHEAT_T message. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T.verify|verify} messages.
                 * @param message GL_TO_UC_SHARED_CHEAT_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Shared.IGL_TO_UC_SHARED_CHEAT_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_SHARED_CHEAT_T message, length delimited. Does not implicitly {@link Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T.verify|verify} messages.
                 * @param message GL_TO_UC_SHARED_CHEAT_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Shared.IGL_TO_UC_SHARED_CHEAT_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_SHARED_CHEAT_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_SHARED_CHEAT_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T;

                /**
                 * Decodes a GL_TO_UC_SHARED_CHEAT_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_SHARED_CHEAT_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T;

                /**
                 * Verifies a GL_TO_UC_SHARED_CHEAT_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_SHARED_CHEAT_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_SHARED_CHEAT_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T;

                /**
                 * Creates a plain object from a GL_TO_UC_SHARED_CHEAT_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_SHARED_CHEAT_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Shared.GL_TO_UC_SHARED_CHEAT_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_SHARED_CHEAT_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
 
} 
 export {}