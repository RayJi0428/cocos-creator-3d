declare global {
 // DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace Protocol. */
export namespace Protocol {

    /** Namespace Game. */
    namespace Game {

        /** Namespace Roulette. */
        namespace Roulette {

            /** Phase enum. */
            enum Phase {
                PHASE_DEFAULT = 0,
                BET = 1,
                SPIN = 2,
                SETTLE = 3
            }

            /** Timing enum. */
            enum Timing {
                Timing_DEFAULT = 0,
                BEGIN = 1,
                END = 2,
                ING = 3,
                NONE = 4
            }

            /** MessageID_Roulette enum. */
            enum MessageID_Roulette {
                MESSAGEID_ROULETTE_DEFAULT = 0,
                UC_TO_GL_BET = 10001001,
                UC_TO_GL_CALL = 10001002,
                UC_TO_GL_UNDO = 10001003,
                UC_TO_GL_CLEAR = 10001004,
                UC_TO_GL_REPEAT = 10001005,
                UC_TO_GL_CHEAT_CODE = 10001006,
                GL_TO_UC_BET = 20001001,
                GL_TO_UC_CALL = 20001002,
                GL_TO_UC_UNDO = 20001003,
                GL_TO_UC_CLEAR = 20001004,
                GL_TO_UC_REPEAT = 20001005,
                GL_TO_UC_RETURN_REPEAT = 20001006,
                GL_TO_UC_CHEAT_CODE = 20001007,
                GL_TO_UC_INIT_INFO = 20001101,
                GL_TO_UC_INIT_PHASE = 20001102,
                GL_TO_UC_INIT_HISTORY = 20001103,
                GL_TO_UC_CHANGE_PHASE = 20001201,
                GL_TO_UC_UPDATE_TABLE = 20001202,
                GL_TO_UC_SPIN_NUMBER = 20001203,
                GL_TO_UC_SETTLE_RESULT = 20001204,
                GL_TO_FL_UPDATE_ROUND_INFO = 20001205,
                GL_TO_UC_UPDATE_POINT_INFO = 20001206
            }

            /** Properties of a UC_TO_GL_BET_T. */
            interface IUC_TO_GL_BET_T {

                /** UC_TO_GL_BET_T betFieldId */
                betFieldId?: (number|null);

                /** UC_TO_GL_BET_T chipId */
                chipId?: (number|null);

                /** UC_TO_GL_BET_T roundNumber */
                roundNumber?: (number|null);
            }

            /** Represents a UC_TO_GL_BET_T. */
            class UC_TO_GL_BET_T implements IUC_TO_GL_BET_T {

                /**
                 * Constructs a new UC_TO_GL_BET_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Roulette.IUC_TO_GL_BET_T);

                /** UC_TO_GL_BET_T betFieldId. */
                public betFieldId: number;

                /** UC_TO_GL_BET_T chipId. */
                public chipId: number;

                /** UC_TO_GL_BET_T roundNumber. */
                public roundNumber: number;

                /**
                 * Creates a new UC_TO_GL_BET_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_BET_T instance
                 */
                public static create(properties?: Protocol.Game.Roulette.IUC_TO_GL_BET_T): Protocol.Game.Roulette.UC_TO_GL_BET_T;

                /**
                 * Encodes the specified UC_TO_GL_BET_T message. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_BET_T.verify|verify} messages.
                 * @param message UC_TO_GL_BET_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Roulette.IUC_TO_GL_BET_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_BET_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_BET_T.verify|verify} messages.
                 * @param message UC_TO_GL_BET_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Roulette.IUC_TO_GL_BET_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_BET_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_BET_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Roulette.UC_TO_GL_BET_T;

                /**
                 * Decodes a UC_TO_GL_BET_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_BET_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Roulette.UC_TO_GL_BET_T;

                /**
                 * Verifies a UC_TO_GL_BET_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UC_TO_GL_BET_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UC_TO_GL_BET_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Roulette.UC_TO_GL_BET_T;

                /**
                 * Creates a plain object from a UC_TO_GL_BET_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_BET_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Roulette.UC_TO_GL_BET_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_BET_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UC_TO_GL_CALL_T. */
            interface IUC_TO_GL_CALL_T {

                /** UC_TO_GL_CALL_T calledBetId */
                calledBetId?: (number|null);

                /** UC_TO_GL_CALL_T chipId */
                chipId?: (number|null);

                /** UC_TO_GL_CALL_T roundNumber */
                roundNumber?: (number|null);
            }

            /** Represents a UC_TO_GL_CALL_T. */
            class UC_TO_GL_CALL_T implements IUC_TO_GL_CALL_T {

                /**
                 * Constructs a new UC_TO_GL_CALL_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Roulette.IUC_TO_GL_CALL_T);

                /** UC_TO_GL_CALL_T calledBetId. */
                public calledBetId: number;

                /** UC_TO_GL_CALL_T chipId. */
                public chipId: number;

                /** UC_TO_GL_CALL_T roundNumber. */
                public roundNumber: number;

                /**
                 * Creates a new UC_TO_GL_CALL_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_CALL_T instance
                 */
                public static create(properties?: Protocol.Game.Roulette.IUC_TO_GL_CALL_T): Protocol.Game.Roulette.UC_TO_GL_CALL_T;

                /**
                 * Encodes the specified UC_TO_GL_CALL_T message. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_CALL_T.verify|verify} messages.
                 * @param message UC_TO_GL_CALL_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Roulette.IUC_TO_GL_CALL_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_CALL_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_CALL_T.verify|verify} messages.
                 * @param message UC_TO_GL_CALL_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Roulette.IUC_TO_GL_CALL_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_CALL_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_CALL_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Roulette.UC_TO_GL_CALL_T;

                /**
                 * Decodes a UC_TO_GL_CALL_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_CALL_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Roulette.UC_TO_GL_CALL_T;

                /**
                 * Verifies a UC_TO_GL_CALL_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UC_TO_GL_CALL_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UC_TO_GL_CALL_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Roulette.UC_TO_GL_CALL_T;

                /**
                 * Creates a plain object from a UC_TO_GL_CALL_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_CALL_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Roulette.UC_TO_GL_CALL_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_CALL_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UC_TO_GL_UNDO_T. */
            interface IUC_TO_GL_UNDO_T {

                /** UC_TO_GL_UNDO_T roundNumber */
                roundNumber?: (number|null);
            }

            /** Represents a UC_TO_GL_UNDO_T. */
            class UC_TO_GL_UNDO_T implements IUC_TO_GL_UNDO_T {

                /**
                 * Constructs a new UC_TO_GL_UNDO_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Roulette.IUC_TO_GL_UNDO_T);

                /** UC_TO_GL_UNDO_T roundNumber. */
                public roundNumber: number;

                /**
                 * Creates a new UC_TO_GL_UNDO_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_UNDO_T instance
                 */
                public static create(properties?: Protocol.Game.Roulette.IUC_TO_GL_UNDO_T): Protocol.Game.Roulette.UC_TO_GL_UNDO_T;

                /**
                 * Encodes the specified UC_TO_GL_UNDO_T message. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_UNDO_T.verify|verify} messages.
                 * @param message UC_TO_GL_UNDO_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Roulette.IUC_TO_GL_UNDO_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_UNDO_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_UNDO_T.verify|verify} messages.
                 * @param message UC_TO_GL_UNDO_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Roulette.IUC_TO_GL_UNDO_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_UNDO_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_UNDO_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Roulette.UC_TO_GL_UNDO_T;

                /**
                 * Decodes a UC_TO_GL_UNDO_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_UNDO_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Roulette.UC_TO_GL_UNDO_T;

                /**
                 * Verifies a UC_TO_GL_UNDO_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UC_TO_GL_UNDO_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UC_TO_GL_UNDO_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Roulette.UC_TO_GL_UNDO_T;

                /**
                 * Creates a plain object from a UC_TO_GL_UNDO_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_UNDO_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Roulette.UC_TO_GL_UNDO_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_UNDO_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UC_TO_GL_CLEAR_T. */
            interface IUC_TO_GL_CLEAR_T {

                /** UC_TO_GL_CLEAR_T roundNumber */
                roundNumber?: (number|null);
            }

            /** Represents a UC_TO_GL_CLEAR_T. */
            class UC_TO_GL_CLEAR_T implements IUC_TO_GL_CLEAR_T {

                /**
                 * Constructs a new UC_TO_GL_CLEAR_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Roulette.IUC_TO_GL_CLEAR_T);

                /** UC_TO_GL_CLEAR_T roundNumber. */
                public roundNumber: number;

                /**
                 * Creates a new UC_TO_GL_CLEAR_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_CLEAR_T instance
                 */
                public static create(properties?: Protocol.Game.Roulette.IUC_TO_GL_CLEAR_T): Protocol.Game.Roulette.UC_TO_GL_CLEAR_T;

                /**
                 * Encodes the specified UC_TO_GL_CLEAR_T message. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_CLEAR_T.verify|verify} messages.
                 * @param message UC_TO_GL_CLEAR_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Roulette.IUC_TO_GL_CLEAR_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_CLEAR_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_CLEAR_T.verify|verify} messages.
                 * @param message UC_TO_GL_CLEAR_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Roulette.IUC_TO_GL_CLEAR_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_CLEAR_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_CLEAR_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Roulette.UC_TO_GL_CLEAR_T;

                /**
                 * Decodes a UC_TO_GL_CLEAR_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_CLEAR_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Roulette.UC_TO_GL_CLEAR_T;

                /**
                 * Verifies a UC_TO_GL_CLEAR_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UC_TO_GL_CLEAR_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UC_TO_GL_CLEAR_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Roulette.UC_TO_GL_CLEAR_T;

                /**
                 * Creates a plain object from a UC_TO_GL_CLEAR_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_CLEAR_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Roulette.UC_TO_GL_CLEAR_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_CLEAR_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UC_TO_GL_REPEAT_T. */
            interface IUC_TO_GL_REPEAT_T {

                /** UC_TO_GL_REPEAT_T roundNumber */
                roundNumber?: (number|null);
            }

            /** Represents a UC_TO_GL_REPEAT_T. */
            class UC_TO_GL_REPEAT_T implements IUC_TO_GL_REPEAT_T {

                /**
                 * Constructs a new UC_TO_GL_REPEAT_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Roulette.IUC_TO_GL_REPEAT_T);

                /** UC_TO_GL_REPEAT_T roundNumber. */
                public roundNumber: number;

                /**
                 * Creates a new UC_TO_GL_REPEAT_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_REPEAT_T instance
                 */
                public static create(properties?: Protocol.Game.Roulette.IUC_TO_GL_REPEAT_T): Protocol.Game.Roulette.UC_TO_GL_REPEAT_T;

                /**
                 * Encodes the specified UC_TO_GL_REPEAT_T message. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_REPEAT_T.verify|verify} messages.
                 * @param message UC_TO_GL_REPEAT_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Roulette.IUC_TO_GL_REPEAT_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_REPEAT_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_REPEAT_T.verify|verify} messages.
                 * @param message UC_TO_GL_REPEAT_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Roulette.IUC_TO_GL_REPEAT_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_REPEAT_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_REPEAT_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Roulette.UC_TO_GL_REPEAT_T;

                /**
                 * Decodes a UC_TO_GL_REPEAT_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_REPEAT_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Roulette.UC_TO_GL_REPEAT_T;

                /**
                 * Verifies a UC_TO_GL_REPEAT_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UC_TO_GL_REPEAT_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UC_TO_GL_REPEAT_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Roulette.UC_TO_GL_REPEAT_T;

                /**
                 * Creates a plain object from a UC_TO_GL_REPEAT_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_REPEAT_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Roulette.UC_TO_GL_REPEAT_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_REPEAT_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UC_TO_GL_CHEAT_CODE_T. */
            interface IUC_TO_GL_CHEAT_CODE_T {

                /** UC_TO_GL_CHEAT_CODE_T spinNumber */
                spinNumber?: (number|null);
            }

            /** Represents a UC_TO_GL_CHEAT_CODE_T. */
            class UC_TO_GL_CHEAT_CODE_T implements IUC_TO_GL_CHEAT_CODE_T {

                /**
                 * Constructs a new UC_TO_GL_CHEAT_CODE_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Roulette.IUC_TO_GL_CHEAT_CODE_T);

                /** UC_TO_GL_CHEAT_CODE_T spinNumber. */
                public spinNumber: number;

                /**
                 * Creates a new UC_TO_GL_CHEAT_CODE_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_CHEAT_CODE_T instance
                 */
                public static create(properties?: Protocol.Game.Roulette.IUC_TO_GL_CHEAT_CODE_T): Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T;

                /**
                 * Encodes the specified UC_TO_GL_CHEAT_CODE_T message. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T.verify|verify} messages.
                 * @param message UC_TO_GL_CHEAT_CODE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Roulette.IUC_TO_GL_CHEAT_CODE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_CHEAT_CODE_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T.verify|verify} messages.
                 * @param message UC_TO_GL_CHEAT_CODE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Roulette.IUC_TO_GL_CHEAT_CODE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_CHEAT_CODE_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_CHEAT_CODE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T;

                /**
                 * Decodes a UC_TO_GL_CHEAT_CODE_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_CHEAT_CODE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T;

                /**
                 * Verifies a UC_TO_GL_CHEAT_CODE_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UC_TO_GL_CHEAT_CODE_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UC_TO_GL_CHEAT_CODE_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T;

                /**
                 * Creates a plain object from a UC_TO_GL_CHEAT_CODE_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_CHEAT_CODE_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Roulette.UC_TO_GL_CHEAT_CODE_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_CHEAT_CODE_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_BET_T. */
            interface IGL_TO_UC_BET_T {

                /** GL_TO_UC_BET_T betFieldId */
                betFieldId?: (number|null);

                /** GL_TO_UC_BET_T resultCode */
                resultCode?: (number|null);

                /** GL_TO_UC_BET_T betMoney */
                betMoney?: ((number|Long)[]|null);

                /** GL_TO_UC_BET_T credit */
                credit?: (number|Long|null);

                /** GL_TO_UC_BET_T roundNumber */
                roundNumber?: (number|null);
            }

            /** Represents a GL_TO_UC_BET_T. */
            class GL_TO_UC_BET_T implements IGL_TO_UC_BET_T {

                /**
                 * Constructs a new GL_TO_UC_BET_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Roulette.IGL_TO_UC_BET_T);

                /** GL_TO_UC_BET_T betFieldId. */
                public betFieldId: number;

                /** GL_TO_UC_BET_T resultCode. */
                public resultCode: number;

                /** GL_TO_UC_BET_T betMoney. */
                public betMoney: (number|Long)[];

                /** GL_TO_UC_BET_T credit. */
                public credit: (number|Long);

                /** GL_TO_UC_BET_T roundNumber. */
                public roundNumber: number;

                /**
                 * Creates a new GL_TO_UC_BET_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_BET_T instance
                 */
                public static create(properties?: Protocol.Game.Roulette.IGL_TO_UC_BET_T): Protocol.Game.Roulette.GL_TO_UC_BET_T;

                /**
                 * Encodes the specified GL_TO_UC_BET_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_BET_T.verify|verify} messages.
                 * @param message GL_TO_UC_BET_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Roulette.IGL_TO_UC_BET_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_BET_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_BET_T.verify|verify} messages.
                 * @param message GL_TO_UC_BET_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Roulette.IGL_TO_UC_BET_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_BET_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_BET_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Roulette.GL_TO_UC_BET_T;

                /**
                 * Decodes a GL_TO_UC_BET_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_BET_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Roulette.GL_TO_UC_BET_T;

                /**
                 * Verifies a GL_TO_UC_BET_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_BET_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_BET_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Roulette.GL_TO_UC_BET_T;

                /**
                 * Creates a plain object from a GL_TO_UC_BET_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_BET_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Roulette.GL_TO_UC_BET_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_BET_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_CALL_T. */
            interface IGL_TO_UC_CALL_T {

                /** GL_TO_UC_CALL_T calledBetId */
                calledBetId?: (number|null);

                /** GL_TO_UC_CALL_T resultCode */
                resultCode?: (number|null);

                /** GL_TO_UC_CALL_T betMoney */
                betMoney?: ((number|Long)[]|null);

                /** GL_TO_UC_CALL_T credit */
                credit?: (number|Long|null);

                /** GL_TO_UC_CALL_T roundNumber */
                roundNumber?: (number|null);
            }

            /** Represents a GL_TO_UC_CALL_T. */
            class GL_TO_UC_CALL_T implements IGL_TO_UC_CALL_T {

                /**
                 * Constructs a new GL_TO_UC_CALL_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Roulette.IGL_TO_UC_CALL_T);

                /** GL_TO_UC_CALL_T calledBetId. */
                public calledBetId: number;

                /** GL_TO_UC_CALL_T resultCode. */
                public resultCode: number;

                /** GL_TO_UC_CALL_T betMoney. */
                public betMoney: (number|Long)[];

                /** GL_TO_UC_CALL_T credit. */
                public credit: (number|Long);

                /** GL_TO_UC_CALL_T roundNumber. */
                public roundNumber: number;

                /**
                 * Creates a new GL_TO_UC_CALL_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_CALL_T instance
                 */
                public static create(properties?: Protocol.Game.Roulette.IGL_TO_UC_CALL_T): Protocol.Game.Roulette.GL_TO_UC_CALL_T;

                /**
                 * Encodes the specified GL_TO_UC_CALL_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_CALL_T.verify|verify} messages.
                 * @param message GL_TO_UC_CALL_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Roulette.IGL_TO_UC_CALL_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_CALL_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_CALL_T.verify|verify} messages.
                 * @param message GL_TO_UC_CALL_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Roulette.IGL_TO_UC_CALL_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_CALL_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_CALL_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Roulette.GL_TO_UC_CALL_T;

                /**
                 * Decodes a GL_TO_UC_CALL_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_CALL_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Roulette.GL_TO_UC_CALL_T;

                /**
                 * Verifies a GL_TO_UC_CALL_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_CALL_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_CALL_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Roulette.GL_TO_UC_CALL_T;

                /**
                 * Creates a plain object from a GL_TO_UC_CALL_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_CALL_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Roulette.GL_TO_UC_CALL_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_CALL_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_UNDO_T. */
            interface IGL_TO_UC_UNDO_T {

                /** GL_TO_UC_UNDO_T resultCode */
                resultCode?: (number|null);

                /** GL_TO_UC_UNDO_T credit */
                credit?: (number|Long|null);

                /** GL_TO_UC_UNDO_T roundNumber */
                roundNumber?: (number|null);
            }

            /** Represents a GL_TO_UC_UNDO_T. */
            class GL_TO_UC_UNDO_T implements IGL_TO_UC_UNDO_T {

                /**
                 * Constructs a new GL_TO_UC_UNDO_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Roulette.IGL_TO_UC_UNDO_T);

                /** GL_TO_UC_UNDO_T resultCode. */
                public resultCode: number;

                /** GL_TO_UC_UNDO_T credit. */
                public credit: (number|Long);

                /** GL_TO_UC_UNDO_T roundNumber. */
                public roundNumber: number;

                /**
                 * Creates a new GL_TO_UC_UNDO_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_UNDO_T instance
                 */
                public static create(properties?: Protocol.Game.Roulette.IGL_TO_UC_UNDO_T): Protocol.Game.Roulette.GL_TO_UC_UNDO_T;

                /**
                 * Encodes the specified GL_TO_UC_UNDO_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_UNDO_T.verify|verify} messages.
                 * @param message GL_TO_UC_UNDO_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Roulette.IGL_TO_UC_UNDO_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_UNDO_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_UNDO_T.verify|verify} messages.
                 * @param message GL_TO_UC_UNDO_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Roulette.IGL_TO_UC_UNDO_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_UNDO_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_UNDO_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Roulette.GL_TO_UC_UNDO_T;

                /**
                 * Decodes a GL_TO_UC_UNDO_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_UNDO_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Roulette.GL_TO_UC_UNDO_T;

                /**
                 * Verifies a GL_TO_UC_UNDO_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_UNDO_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_UNDO_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Roulette.GL_TO_UC_UNDO_T;

                /**
                 * Creates a plain object from a GL_TO_UC_UNDO_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_UNDO_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Roulette.GL_TO_UC_UNDO_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_UNDO_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_CLEAR_T. */
            interface IGL_TO_UC_CLEAR_T {

                /** GL_TO_UC_CLEAR_T resultCode */
                resultCode?: (number|null);

                /** GL_TO_UC_CLEAR_T credit */
                credit?: (number|Long|null);

                /** GL_TO_UC_CLEAR_T roundNumber */
                roundNumber?: (number|null);
            }

            /** Represents a GL_TO_UC_CLEAR_T. */
            class GL_TO_UC_CLEAR_T implements IGL_TO_UC_CLEAR_T {

                /**
                 * Constructs a new GL_TO_UC_CLEAR_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Roulette.IGL_TO_UC_CLEAR_T);

                /** GL_TO_UC_CLEAR_T resultCode. */
                public resultCode: number;

                /** GL_TO_UC_CLEAR_T credit. */
                public credit: (number|Long);

                /** GL_TO_UC_CLEAR_T roundNumber. */
                public roundNumber: number;

                /**
                 * Creates a new GL_TO_UC_CLEAR_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_CLEAR_T instance
                 */
                public static create(properties?: Protocol.Game.Roulette.IGL_TO_UC_CLEAR_T): Protocol.Game.Roulette.GL_TO_UC_CLEAR_T;

                /**
                 * Encodes the specified GL_TO_UC_CLEAR_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_CLEAR_T.verify|verify} messages.
                 * @param message GL_TO_UC_CLEAR_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Roulette.IGL_TO_UC_CLEAR_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_CLEAR_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_CLEAR_T.verify|verify} messages.
                 * @param message GL_TO_UC_CLEAR_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Roulette.IGL_TO_UC_CLEAR_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_CLEAR_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_CLEAR_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Roulette.GL_TO_UC_CLEAR_T;

                /**
                 * Decodes a GL_TO_UC_CLEAR_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_CLEAR_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Roulette.GL_TO_UC_CLEAR_T;

                /**
                 * Verifies a GL_TO_UC_CLEAR_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_CLEAR_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_CLEAR_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Roulette.GL_TO_UC_CLEAR_T;

                /**
                 * Creates a plain object from a GL_TO_UC_CLEAR_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_CLEAR_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Roulette.GL_TO_UC_CLEAR_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_CLEAR_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_REPEAT_T. */
            interface IGL_TO_UC_REPEAT_T {

                /** GL_TO_UC_REPEAT_T resultCode */
                resultCode?: (number|null);

                /** GL_TO_UC_REPEAT_T credit */
                credit?: (number|Long|null);

                /** GL_TO_UC_REPEAT_T roundNumber */
                roundNumber?: (number|null);
            }

            /** Represents a GL_TO_UC_REPEAT_T. */
            class GL_TO_UC_REPEAT_T implements IGL_TO_UC_REPEAT_T {

                /**
                 * Constructs a new GL_TO_UC_REPEAT_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Roulette.IGL_TO_UC_REPEAT_T);

                /** GL_TO_UC_REPEAT_T resultCode. */
                public resultCode: number;

                /** GL_TO_UC_REPEAT_T credit. */
                public credit: (number|Long);

                /** GL_TO_UC_REPEAT_T roundNumber. */
                public roundNumber: number;

                /**
                 * Creates a new GL_TO_UC_REPEAT_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_REPEAT_T instance
                 */
                public static create(properties?: Protocol.Game.Roulette.IGL_TO_UC_REPEAT_T): Protocol.Game.Roulette.GL_TO_UC_REPEAT_T;

                /**
                 * Encodes the specified GL_TO_UC_REPEAT_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_REPEAT_T.verify|verify} messages.
                 * @param message GL_TO_UC_REPEAT_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Roulette.IGL_TO_UC_REPEAT_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_REPEAT_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_REPEAT_T.verify|verify} messages.
                 * @param message GL_TO_UC_REPEAT_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Roulette.IGL_TO_UC_REPEAT_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_REPEAT_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_REPEAT_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Roulette.GL_TO_UC_REPEAT_T;

                /**
                 * Decodes a GL_TO_UC_REPEAT_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_REPEAT_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Roulette.GL_TO_UC_REPEAT_T;

                /**
                 * Verifies a GL_TO_UC_REPEAT_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_REPEAT_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_REPEAT_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Roulette.GL_TO_UC_REPEAT_T;

                /**
                 * Creates a plain object from a GL_TO_UC_REPEAT_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_REPEAT_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Roulette.GL_TO_UC_REPEAT_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_REPEAT_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_RETURN_REPEAT_T. */
            interface IGL_TO_UC_RETURN_REPEAT_T {

                /** GL_TO_UC_RETURN_REPEAT_T totalBetPoint */
                totalBetPoint?: (number|Long|null);

                /** GL_TO_UC_RETURN_REPEAT_T betPoints */
                betPoints?: ((number|Long)[]|null);
            }

            /** Represents a GL_TO_UC_RETURN_REPEAT_T. */
            class GL_TO_UC_RETURN_REPEAT_T implements IGL_TO_UC_RETURN_REPEAT_T {

                /**
                 * Constructs a new GL_TO_UC_RETURN_REPEAT_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Roulette.IGL_TO_UC_RETURN_REPEAT_T);

                /** GL_TO_UC_RETURN_REPEAT_T totalBetPoint. */
                public totalBetPoint: (number|Long);

                /** GL_TO_UC_RETURN_REPEAT_T betPoints. */
                public betPoints: (number|Long)[];

                /**
                 * Creates a new GL_TO_UC_RETURN_REPEAT_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_RETURN_REPEAT_T instance
                 */
                public static create(properties?: Protocol.Game.Roulette.IGL_TO_UC_RETURN_REPEAT_T): Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T;

                /**
                 * Encodes the specified GL_TO_UC_RETURN_REPEAT_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T.verify|verify} messages.
                 * @param message GL_TO_UC_RETURN_REPEAT_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Roulette.IGL_TO_UC_RETURN_REPEAT_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_RETURN_REPEAT_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T.verify|verify} messages.
                 * @param message GL_TO_UC_RETURN_REPEAT_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Roulette.IGL_TO_UC_RETURN_REPEAT_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_RETURN_REPEAT_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_RETURN_REPEAT_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T;

                /**
                 * Decodes a GL_TO_UC_RETURN_REPEAT_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_RETURN_REPEAT_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T;

                /**
                 * Verifies a GL_TO_UC_RETURN_REPEAT_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_RETURN_REPEAT_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_RETURN_REPEAT_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T;

                /**
                 * Creates a plain object from a GL_TO_UC_RETURN_REPEAT_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_RETURN_REPEAT_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Roulette.GL_TO_UC_RETURN_REPEAT_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_RETURN_REPEAT_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_CHEAT_CODE_T. */
            interface IGL_TO_UC_CHEAT_CODE_T {

                /** GL_TO_UC_CHEAT_CODE_T result */
                result?: (number|null);
            }

            /** Represents a GL_TO_UC_CHEAT_CODE_T. */
            class GL_TO_UC_CHEAT_CODE_T implements IGL_TO_UC_CHEAT_CODE_T {

                /**
                 * Constructs a new GL_TO_UC_CHEAT_CODE_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Roulette.IGL_TO_UC_CHEAT_CODE_T);

                /** GL_TO_UC_CHEAT_CODE_T result. */
                public result: number;

                /**
                 * Creates a new GL_TO_UC_CHEAT_CODE_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_CHEAT_CODE_T instance
                 */
                public static create(properties?: Protocol.Game.Roulette.IGL_TO_UC_CHEAT_CODE_T): Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T;

                /**
                 * Encodes the specified GL_TO_UC_CHEAT_CODE_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T.verify|verify} messages.
                 * @param message GL_TO_UC_CHEAT_CODE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Roulette.IGL_TO_UC_CHEAT_CODE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_CHEAT_CODE_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T.verify|verify} messages.
                 * @param message GL_TO_UC_CHEAT_CODE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Roulette.IGL_TO_UC_CHEAT_CODE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_CHEAT_CODE_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_CHEAT_CODE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T;

                /**
                 * Decodes a GL_TO_UC_CHEAT_CODE_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_CHEAT_CODE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T;

                /**
                 * Verifies a GL_TO_UC_CHEAT_CODE_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_CHEAT_CODE_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_CHEAT_CODE_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T;

                /**
                 * Creates a plain object from a GL_TO_UC_CHEAT_CODE_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_CHEAT_CODE_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Roulette.GL_TO_UC_CHEAT_CODE_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_CHEAT_CODE_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_INIT_INFO_T. */
            interface IGL_TO_UC_INIT_INFO_T {

                /** GL_TO_UC_INIT_INFO_T tableId */
                tableId?: (number|null);

                /** GL_TO_UC_INIT_INFO_T onlineNum */
                onlineNum?: (number|null);

                /** GL_TO_UC_INIT_INFO_T betOdds */
                betOdds?: (number[]|null);

                /** GL_TO_UC_INIT_INFO_T minBetPoint */
                minBetPoint?: ((number|Long)[]|null);

                /** GL_TO_UC_INIT_INFO_T maxBetPoint */
                maxBetPoint?: ((number|Long)[]|null);

                /** GL_TO_UC_INIT_INFO_T betTime */
                betTime?: (number|null);

                /** GL_TO_UC_INIT_INFO_T spinTime */
                spinTime?: (number|null);

                /** GL_TO_UC_INIT_INFO_T settleTime */
                settleTime?: (number|null);

                /** GL_TO_UC_INIT_INFO_T tableMinBetPoint */
                tableMinBetPoint?: (number|Long|null);

                /** GL_TO_UC_INIT_INFO_T tableMaxBetPoint */
                tableMaxBetPoint?: (number|Long|null);

                /** GL_TO_UC_INIT_INFO_T roundNumber */
                roundNumber?: (number|null);

                /** GL_TO_UC_INIT_INFO_T defaultChips */
                defaultChips?: (number[]|null);

                /** GL_TO_UC_INIT_INFO_T enterType */
                enterType?: (number|null);

                /** GL_TO_UC_INIT_INFO_T recoverSuccess */
                recoverSuccess?: (number|null);

                /** GL_TO_UC_INIT_INFO_T serialNumber */
                serialNumber?: (number|null);
            }

            /** Represents a GL_TO_UC_INIT_INFO_T. */
            class GL_TO_UC_INIT_INFO_T implements IGL_TO_UC_INIT_INFO_T {

                /**
                 * Constructs a new GL_TO_UC_INIT_INFO_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Roulette.IGL_TO_UC_INIT_INFO_T);

                /** GL_TO_UC_INIT_INFO_T tableId. */
                public tableId: number;

                /** GL_TO_UC_INIT_INFO_T onlineNum. */
                public onlineNum: number;

                /** GL_TO_UC_INIT_INFO_T betOdds. */
                public betOdds: number[];

                /** GL_TO_UC_INIT_INFO_T minBetPoint. */
                public minBetPoint: (number|Long)[];

                /** GL_TO_UC_INIT_INFO_T maxBetPoint. */
                public maxBetPoint: (number|Long)[];

                /** GL_TO_UC_INIT_INFO_T betTime. */
                public betTime: number;

                /** GL_TO_UC_INIT_INFO_T spinTime. */
                public spinTime: number;

                /** GL_TO_UC_INIT_INFO_T settleTime. */
                public settleTime: number;

                /** GL_TO_UC_INIT_INFO_T tableMinBetPoint. */
                public tableMinBetPoint: (number|Long);

                /** GL_TO_UC_INIT_INFO_T tableMaxBetPoint. */
                public tableMaxBetPoint: (number|Long);

                /** GL_TO_UC_INIT_INFO_T roundNumber. */
                public roundNumber: number;

                /** GL_TO_UC_INIT_INFO_T defaultChips. */
                public defaultChips: number[];

                /** GL_TO_UC_INIT_INFO_T enterType. */
                public enterType: number;

                /** GL_TO_UC_INIT_INFO_T recoverSuccess. */
                public recoverSuccess: number;

                /** GL_TO_UC_INIT_INFO_T serialNumber. */
                public serialNumber: number;

                /**
                 * Creates a new GL_TO_UC_INIT_INFO_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_INIT_INFO_T instance
                 */
                public static create(properties?: Protocol.Game.Roulette.IGL_TO_UC_INIT_INFO_T): Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T;

                /**
                 * Encodes the specified GL_TO_UC_INIT_INFO_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T.verify|verify} messages.
                 * @param message GL_TO_UC_INIT_INFO_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Roulette.IGL_TO_UC_INIT_INFO_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_INIT_INFO_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T.verify|verify} messages.
                 * @param message GL_TO_UC_INIT_INFO_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Roulette.IGL_TO_UC_INIT_INFO_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_INIT_INFO_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_INIT_INFO_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T;

                /**
                 * Decodes a GL_TO_UC_INIT_INFO_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_INIT_INFO_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T;

                /**
                 * Verifies a GL_TO_UC_INIT_INFO_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_INIT_INFO_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_INIT_INFO_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T;

                /**
                 * Creates a plain object from a GL_TO_UC_INIT_INFO_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_INIT_INFO_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Roulette.GL_TO_UC_INIT_INFO_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_INIT_INFO_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_INIT_PHASE_T. */
            interface IGL_TO_UC_INIT_PHASE_T {

                /** GL_TO_UC_INIT_PHASE_T phase */
                phase?: (Protocol.Game.Roulette.Phase|null);

                /** GL_TO_UC_INIT_PHASE_T countdown */
                countdown?: (number|null);

                /** GL_TO_UC_INIT_PHASE_T totalBetPoint */
                totalBetPoint?: (number|Long|null);

                /** GL_TO_UC_INIT_PHASE_T betPoints */
                betPoints?: ((number|Long)[]|null);

                /** GL_TO_UC_INIT_PHASE_T personalBetMoney */
                personalBetMoney?: ((number|Long)[]|null);

                /** GL_TO_UC_INIT_PHASE_T spinNumber */
                spinNumber?: (number|null);

                /** GL_TO_UC_INIT_PHASE_T totalWinPoint */
                totalWinPoint?: (number|Long|null);

                /** GL_TO_UC_INIT_PHASE_T winPoints */
                winPoints?: ((number|Long)[]|null);
            }

            /** Represents a GL_TO_UC_INIT_PHASE_T. */
            class GL_TO_UC_INIT_PHASE_T implements IGL_TO_UC_INIT_PHASE_T {

                /**
                 * Constructs a new GL_TO_UC_INIT_PHASE_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Roulette.IGL_TO_UC_INIT_PHASE_T);

                /** GL_TO_UC_INIT_PHASE_T phase. */
                public phase: Protocol.Game.Roulette.Phase;

                /** GL_TO_UC_INIT_PHASE_T countdown. */
                public countdown: number;

                /** GL_TO_UC_INIT_PHASE_T totalBetPoint. */
                public totalBetPoint: (number|Long);

                /** GL_TO_UC_INIT_PHASE_T betPoints. */
                public betPoints: (number|Long)[];

                /** GL_TO_UC_INIT_PHASE_T personalBetMoney. */
                public personalBetMoney: (number|Long)[];

                /** GL_TO_UC_INIT_PHASE_T spinNumber. */
                public spinNumber: number;

                /** GL_TO_UC_INIT_PHASE_T totalWinPoint. */
                public totalWinPoint: (number|Long);

                /** GL_TO_UC_INIT_PHASE_T winPoints. */
                public winPoints: (number|Long)[];

                /**
                 * Creates a new GL_TO_UC_INIT_PHASE_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_INIT_PHASE_T instance
                 */
                public static create(properties?: Protocol.Game.Roulette.IGL_TO_UC_INIT_PHASE_T): Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T;

                /**
                 * Encodes the specified GL_TO_UC_INIT_PHASE_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T.verify|verify} messages.
                 * @param message GL_TO_UC_INIT_PHASE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Roulette.IGL_TO_UC_INIT_PHASE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_INIT_PHASE_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T.verify|verify} messages.
                 * @param message GL_TO_UC_INIT_PHASE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Roulette.IGL_TO_UC_INIT_PHASE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_INIT_PHASE_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_INIT_PHASE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T;

                /**
                 * Decodes a GL_TO_UC_INIT_PHASE_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_INIT_PHASE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T;

                /**
                 * Verifies a GL_TO_UC_INIT_PHASE_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_INIT_PHASE_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_INIT_PHASE_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T;

                /**
                 * Creates a plain object from a GL_TO_UC_INIT_PHASE_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_INIT_PHASE_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Roulette.GL_TO_UC_INIT_PHASE_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_INIT_PHASE_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_INIT_HISTORY_T. */
            interface IGL_TO_UC_INIT_HISTORY_T {

                /** GL_TO_UC_INIT_HISTORY_T trend */
                trend?: (number[]|null);

                /** GL_TO_UC_INIT_HISTORY_T statistics */
                statistics?: (number[]|null);
            }

            /** Represents a GL_TO_UC_INIT_HISTORY_T. */
            class GL_TO_UC_INIT_HISTORY_T implements IGL_TO_UC_INIT_HISTORY_T {

                /**
                 * Constructs a new GL_TO_UC_INIT_HISTORY_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Roulette.IGL_TO_UC_INIT_HISTORY_T);

                /** GL_TO_UC_INIT_HISTORY_T trend. */
                public trend: number[];

                /** GL_TO_UC_INIT_HISTORY_T statistics. */
                public statistics: number[];

                /**
                 * Creates a new GL_TO_UC_INIT_HISTORY_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_INIT_HISTORY_T instance
                 */
                public static create(properties?: Protocol.Game.Roulette.IGL_TO_UC_INIT_HISTORY_T): Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T;

                /**
                 * Encodes the specified GL_TO_UC_INIT_HISTORY_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T.verify|verify} messages.
                 * @param message GL_TO_UC_INIT_HISTORY_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Roulette.IGL_TO_UC_INIT_HISTORY_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_INIT_HISTORY_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T.verify|verify} messages.
                 * @param message GL_TO_UC_INIT_HISTORY_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Roulette.IGL_TO_UC_INIT_HISTORY_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_INIT_HISTORY_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_INIT_HISTORY_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T;

                /**
                 * Decodes a GL_TO_UC_INIT_HISTORY_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_INIT_HISTORY_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T;

                /**
                 * Verifies a GL_TO_UC_INIT_HISTORY_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_INIT_HISTORY_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_INIT_HISTORY_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T;

                /**
                 * Creates a plain object from a GL_TO_UC_INIT_HISTORY_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_INIT_HISTORY_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Roulette.GL_TO_UC_INIT_HISTORY_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_INIT_HISTORY_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_CHANGE_PHASE_T. */
            interface IGL_TO_UC_CHANGE_PHASE_T {

                /** GL_TO_UC_CHANGE_PHASE_T phase */
                phase?: (Protocol.Game.Roulette.Phase|null);

                /** GL_TO_UC_CHANGE_PHASE_T timing */
                timing?: (Protocol.Game.Roulette.Timing|null);

                /** GL_TO_UC_CHANGE_PHASE_T countdown */
                countdown?: (number|null);
            }

            /** Represents a GL_TO_UC_CHANGE_PHASE_T. */
            class GL_TO_UC_CHANGE_PHASE_T implements IGL_TO_UC_CHANGE_PHASE_T {

                /**
                 * Constructs a new GL_TO_UC_CHANGE_PHASE_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Roulette.IGL_TO_UC_CHANGE_PHASE_T);

                /** GL_TO_UC_CHANGE_PHASE_T phase. */
                public phase: Protocol.Game.Roulette.Phase;

                /** GL_TO_UC_CHANGE_PHASE_T timing. */
                public timing: Protocol.Game.Roulette.Timing;

                /** GL_TO_UC_CHANGE_PHASE_T countdown. */
                public countdown: number;

                /**
                 * Creates a new GL_TO_UC_CHANGE_PHASE_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_CHANGE_PHASE_T instance
                 */
                public static create(properties?: Protocol.Game.Roulette.IGL_TO_UC_CHANGE_PHASE_T): Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T;

                /**
                 * Encodes the specified GL_TO_UC_CHANGE_PHASE_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T.verify|verify} messages.
                 * @param message GL_TO_UC_CHANGE_PHASE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Roulette.IGL_TO_UC_CHANGE_PHASE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_CHANGE_PHASE_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T.verify|verify} messages.
                 * @param message GL_TO_UC_CHANGE_PHASE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Roulette.IGL_TO_UC_CHANGE_PHASE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_CHANGE_PHASE_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_CHANGE_PHASE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T;

                /**
                 * Decodes a GL_TO_UC_CHANGE_PHASE_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_CHANGE_PHASE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T;

                /**
                 * Verifies a GL_TO_UC_CHANGE_PHASE_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_CHANGE_PHASE_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_CHANGE_PHASE_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T;

                /**
                 * Creates a plain object from a GL_TO_UC_CHANGE_PHASE_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_CHANGE_PHASE_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Roulette.GL_TO_UC_CHANGE_PHASE_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_CHANGE_PHASE_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_UPDATE_TABLE_T. */
            interface IGL_TO_UC_UPDATE_TABLE_T {

                /** GL_TO_UC_UPDATE_TABLE_T totalBetPoint */
                totalBetPoint?: (number|Long|null);

                /** GL_TO_UC_UPDATE_TABLE_T betPoints */
                betPoints?: ((number|Long)[]|null);
            }

            /** Represents a GL_TO_UC_UPDATE_TABLE_T. */
            class GL_TO_UC_UPDATE_TABLE_T implements IGL_TO_UC_UPDATE_TABLE_T {

                /**
                 * Constructs a new GL_TO_UC_UPDATE_TABLE_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Roulette.IGL_TO_UC_UPDATE_TABLE_T);

                /** GL_TO_UC_UPDATE_TABLE_T totalBetPoint. */
                public totalBetPoint: (number|Long);

                /** GL_TO_UC_UPDATE_TABLE_T betPoints. */
                public betPoints: (number|Long)[];

                /**
                 * Creates a new GL_TO_UC_UPDATE_TABLE_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_UPDATE_TABLE_T instance
                 */
                public static create(properties?: Protocol.Game.Roulette.IGL_TO_UC_UPDATE_TABLE_T): Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T;

                /**
                 * Encodes the specified GL_TO_UC_UPDATE_TABLE_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T.verify|verify} messages.
                 * @param message GL_TO_UC_UPDATE_TABLE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Roulette.IGL_TO_UC_UPDATE_TABLE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_UPDATE_TABLE_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T.verify|verify} messages.
                 * @param message GL_TO_UC_UPDATE_TABLE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Roulette.IGL_TO_UC_UPDATE_TABLE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_UPDATE_TABLE_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_UPDATE_TABLE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T;

                /**
                 * Decodes a GL_TO_UC_UPDATE_TABLE_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_UPDATE_TABLE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T;

                /**
                 * Verifies a GL_TO_UC_UPDATE_TABLE_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_UPDATE_TABLE_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_UPDATE_TABLE_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T;

                /**
                 * Creates a plain object from a GL_TO_UC_UPDATE_TABLE_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_UPDATE_TABLE_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Roulette.GL_TO_UC_UPDATE_TABLE_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_UPDATE_TABLE_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_SPIN_NUMBER_T. */
            interface IGL_TO_UC_SPIN_NUMBER_T {

                /** GL_TO_UC_SPIN_NUMBER_T spinNumber */
                spinNumber?: (number|null);
            }

            /** Represents a GL_TO_UC_SPIN_NUMBER_T. */
            class GL_TO_UC_SPIN_NUMBER_T implements IGL_TO_UC_SPIN_NUMBER_T {

                /**
                 * Constructs a new GL_TO_UC_SPIN_NUMBER_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Roulette.IGL_TO_UC_SPIN_NUMBER_T);

                /** GL_TO_UC_SPIN_NUMBER_T spinNumber. */
                public spinNumber: number;

                /**
                 * Creates a new GL_TO_UC_SPIN_NUMBER_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_SPIN_NUMBER_T instance
                 */
                public static create(properties?: Protocol.Game.Roulette.IGL_TO_UC_SPIN_NUMBER_T): Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T;

                /**
                 * Encodes the specified GL_TO_UC_SPIN_NUMBER_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T.verify|verify} messages.
                 * @param message GL_TO_UC_SPIN_NUMBER_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Roulette.IGL_TO_UC_SPIN_NUMBER_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_SPIN_NUMBER_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T.verify|verify} messages.
                 * @param message GL_TO_UC_SPIN_NUMBER_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Roulette.IGL_TO_UC_SPIN_NUMBER_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_SPIN_NUMBER_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_SPIN_NUMBER_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T;

                /**
                 * Decodes a GL_TO_UC_SPIN_NUMBER_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_SPIN_NUMBER_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T;

                /**
                 * Verifies a GL_TO_UC_SPIN_NUMBER_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_SPIN_NUMBER_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_SPIN_NUMBER_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T;

                /**
                 * Creates a plain object from a GL_TO_UC_SPIN_NUMBER_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_SPIN_NUMBER_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Roulette.GL_TO_UC_SPIN_NUMBER_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_SPIN_NUMBER_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_SETTLE_RESULT_T. */
            interface IGL_TO_UC_SETTLE_RESULT_T {

                /** GL_TO_UC_SETTLE_RESULT_T totalWinPoint */
                totalWinPoint?: (number|Long|null);

                /** GL_TO_UC_SETTLE_RESULT_T winPoints */
                winPoints?: ((number|Long)[]|null);
            }

            /** Represents a GL_TO_UC_SETTLE_RESULT_T. */
            class GL_TO_UC_SETTLE_RESULT_T implements IGL_TO_UC_SETTLE_RESULT_T {

                /**
                 * Constructs a new GL_TO_UC_SETTLE_RESULT_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Roulette.IGL_TO_UC_SETTLE_RESULT_T);

                /** GL_TO_UC_SETTLE_RESULT_T totalWinPoint. */
                public totalWinPoint: (number|Long);

                /** GL_TO_UC_SETTLE_RESULT_T winPoints. */
                public winPoints: (number|Long)[];

                /**
                 * Creates a new GL_TO_UC_SETTLE_RESULT_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_SETTLE_RESULT_T instance
                 */
                public static create(properties?: Protocol.Game.Roulette.IGL_TO_UC_SETTLE_RESULT_T): Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T;

                /**
                 * Encodes the specified GL_TO_UC_SETTLE_RESULT_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T.verify|verify} messages.
                 * @param message GL_TO_UC_SETTLE_RESULT_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Roulette.IGL_TO_UC_SETTLE_RESULT_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_SETTLE_RESULT_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T.verify|verify} messages.
                 * @param message GL_TO_UC_SETTLE_RESULT_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Roulette.IGL_TO_UC_SETTLE_RESULT_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_SETTLE_RESULT_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_SETTLE_RESULT_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T;

                /**
                 * Decodes a GL_TO_UC_SETTLE_RESULT_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_SETTLE_RESULT_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T;

                /**
                 * Verifies a GL_TO_UC_SETTLE_RESULT_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_SETTLE_RESULT_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_SETTLE_RESULT_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T;

                /**
                 * Creates a plain object from a GL_TO_UC_SETTLE_RESULT_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_SETTLE_RESULT_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Roulette.GL_TO_UC_SETTLE_RESULT_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_SETTLE_RESULT_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_FL_UPDATE_ROUND_INFO_T. */
            interface IGL_TO_FL_UPDATE_ROUND_INFO_T {

                /** GL_TO_FL_UPDATE_ROUND_INFO_T roundNumber */
                roundNumber?: (number|null);
            }

            /** Represents a GL_TO_FL_UPDATE_ROUND_INFO_T. */
            class GL_TO_FL_UPDATE_ROUND_INFO_T implements IGL_TO_FL_UPDATE_ROUND_INFO_T {

                /**
                 * Constructs a new GL_TO_FL_UPDATE_ROUND_INFO_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Roulette.IGL_TO_FL_UPDATE_ROUND_INFO_T);

                /** GL_TO_FL_UPDATE_ROUND_INFO_T roundNumber. */
                public roundNumber: number;

                /**
                 * Creates a new GL_TO_FL_UPDATE_ROUND_INFO_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_FL_UPDATE_ROUND_INFO_T instance
                 */
                public static create(properties?: Protocol.Game.Roulette.IGL_TO_FL_UPDATE_ROUND_INFO_T): Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T;

                /**
                 * Encodes the specified GL_TO_FL_UPDATE_ROUND_INFO_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T.verify|verify} messages.
                 * @param message GL_TO_FL_UPDATE_ROUND_INFO_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Roulette.IGL_TO_FL_UPDATE_ROUND_INFO_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_FL_UPDATE_ROUND_INFO_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T.verify|verify} messages.
                 * @param message GL_TO_FL_UPDATE_ROUND_INFO_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Roulette.IGL_TO_FL_UPDATE_ROUND_INFO_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_FL_UPDATE_ROUND_INFO_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_FL_UPDATE_ROUND_INFO_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T;

                /**
                 * Decodes a GL_TO_FL_UPDATE_ROUND_INFO_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_FL_UPDATE_ROUND_INFO_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T;

                /**
                 * Verifies a GL_TO_FL_UPDATE_ROUND_INFO_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_FL_UPDATE_ROUND_INFO_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_FL_UPDATE_ROUND_INFO_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T;

                /**
                 * Creates a plain object from a GL_TO_FL_UPDATE_ROUND_INFO_T message. Also converts values to other types if specified.
                 * @param message GL_TO_FL_UPDATE_ROUND_INFO_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Roulette.GL_TO_FL_UPDATE_ROUND_INFO_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_FL_UPDATE_ROUND_INFO_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_UPDATE_POINT_INFO_T. */
            interface IGL_TO_UC_UPDATE_POINT_INFO_T {

                /** GL_TO_UC_UPDATE_POINT_INFO_T point */
                point?: (number|Long|null);

                /** GL_TO_UC_UPDATE_POINT_INFO_T kickBackPoint */
                kickBackPoint?: (number|Long|null);
            }

            /** Represents a GL_TO_UC_UPDATE_POINT_INFO_T. */
            class GL_TO_UC_UPDATE_POINT_INFO_T implements IGL_TO_UC_UPDATE_POINT_INFO_T {

                /**
                 * Constructs a new GL_TO_UC_UPDATE_POINT_INFO_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.Roulette.IGL_TO_UC_UPDATE_POINT_INFO_T);

                /** GL_TO_UC_UPDATE_POINT_INFO_T point. */
                public point: (number|Long);

                /** GL_TO_UC_UPDATE_POINT_INFO_T kickBackPoint. */
                public kickBackPoint: (number|Long);

                /**
                 * Creates a new GL_TO_UC_UPDATE_POINT_INFO_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_UPDATE_POINT_INFO_T instance
                 */
                public static create(properties?: Protocol.Game.Roulette.IGL_TO_UC_UPDATE_POINT_INFO_T): Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T;

                /**
                 * Encodes the specified GL_TO_UC_UPDATE_POINT_INFO_T message. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T.verify|verify} messages.
                 * @param message GL_TO_UC_UPDATE_POINT_INFO_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.Roulette.IGL_TO_UC_UPDATE_POINT_INFO_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_UPDATE_POINT_INFO_T message, length delimited. Does not implicitly {@link Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T.verify|verify} messages.
                 * @param message GL_TO_UC_UPDATE_POINT_INFO_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.Roulette.IGL_TO_UC_UPDATE_POINT_INFO_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_UPDATE_POINT_INFO_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_UPDATE_POINT_INFO_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T;

                /**
                 * Decodes a GL_TO_UC_UPDATE_POINT_INFO_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_UPDATE_POINT_INFO_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T;

                /**
                 * Verifies a GL_TO_UC_UPDATE_POINT_INFO_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_UPDATE_POINT_INFO_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_UPDATE_POINT_INFO_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T;

                /**
                 * Creates a plain object from a GL_TO_UC_UPDATE_POINT_INFO_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_UPDATE_POINT_INFO_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.Roulette.GL_TO_UC_UPDATE_POINT_INFO_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_UPDATE_POINT_INFO_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
 
} 
 export {}