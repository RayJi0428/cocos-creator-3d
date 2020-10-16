declare global {
 // DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace Protocol. */
export namespace Protocol {

    /** Namespace Game. */
    namespace Game {

        /** Namespace FivePK. */
        namespace FivePK {

            /** MessageID_FivePK enum. */
            enum MessageID_FivePK {
                MESSAGEID_FIVEPK_DEFAULT = 0,
                UC_TO_GL_OPEN = 10012001,
                UC_TO_GL_HOLD = 10012002,
                UC_TO_GL_SCORE = 10012003,
                UC_TO_GL_MUCH = 10012004,
                UC_TO_GL_STATE_COMPLETED = 10012005,
                UC_TO_GL_CHEAT_CODE = 10012021,
                GL_TO_UC_WAIT = 20012001,
                GL_TO_UC_OPEN = 20012002,
                GL_TO_UC_HOLD = 20012003,
                GL_TO_UC_DG_WAIT = 20012004,
                GL_TO_UC_MUCH = 20012005,
                GL_TO_UC_CHEAT_CODE = 20012021,
                GL_TO_UC_INIT_INFO = 21012001,
                GL_TO_UC_UPDATE_POINT = 21012006
            }

            /** Properties of a UC_TO_GL_OPEN_T. */
            interface IUC_TO_GL_OPEN_T {

                /** UC_TO_GL_OPEN_T llTotalBet */
                llTotalBet?: (number|Long|null);

                /** UC_TO_GL_OPEN_T bIsAuto */
                bIsAuto?: (boolean|null);
            }

            /** Represents a UC_TO_GL_OPEN_T. */
            class UC_TO_GL_OPEN_T implements IUC_TO_GL_OPEN_T {

                /**
                 * Constructs a new UC_TO_GL_OPEN_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.FivePK.IUC_TO_GL_OPEN_T);

                /** UC_TO_GL_OPEN_T llTotalBet. */
                public llTotalBet: (number|Long);

                /** UC_TO_GL_OPEN_T bIsAuto. */
                public bIsAuto: boolean;

                /**
                 * Creates a new UC_TO_GL_OPEN_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_OPEN_T instance
                 */
                public static create(properties?: Protocol.Game.FivePK.IUC_TO_GL_OPEN_T): Protocol.Game.FivePK.UC_TO_GL_OPEN_T;

                /**
                 * Encodes the specified UC_TO_GL_OPEN_T message. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_OPEN_T.verify|verify} messages.
                 * @param message UC_TO_GL_OPEN_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.FivePK.IUC_TO_GL_OPEN_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_OPEN_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_OPEN_T.verify|verify} messages.
                 * @param message UC_TO_GL_OPEN_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.FivePK.IUC_TO_GL_OPEN_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_OPEN_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_OPEN_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.FivePK.UC_TO_GL_OPEN_T;

                /**
                 * Decodes a UC_TO_GL_OPEN_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_OPEN_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.FivePK.UC_TO_GL_OPEN_T;

                /**
                 * Verifies a UC_TO_GL_OPEN_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UC_TO_GL_OPEN_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UC_TO_GL_OPEN_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.FivePK.UC_TO_GL_OPEN_T;

                /**
                 * Creates a plain object from a UC_TO_GL_OPEN_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_OPEN_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.FivePK.UC_TO_GL_OPEN_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_OPEN_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UC_TO_GL_HOLD_T. */
            interface IUC_TO_GL_HOLD_T {

                /** UC_TO_GL_HOLD_T holdArr */
                holdArr?: (number[]|null);
            }

            /** Represents a UC_TO_GL_HOLD_T. */
            class UC_TO_GL_HOLD_T implements IUC_TO_GL_HOLD_T {

                /**
                 * Constructs a new UC_TO_GL_HOLD_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.FivePK.IUC_TO_GL_HOLD_T);

                /** UC_TO_GL_HOLD_T holdArr. */
                public holdArr: number[];

                /**
                 * Creates a new UC_TO_GL_HOLD_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_HOLD_T instance
                 */
                public static create(properties?: Protocol.Game.FivePK.IUC_TO_GL_HOLD_T): Protocol.Game.FivePK.UC_TO_GL_HOLD_T;

                /**
                 * Encodes the specified UC_TO_GL_HOLD_T message. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_HOLD_T.verify|verify} messages.
                 * @param message UC_TO_GL_HOLD_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.FivePK.IUC_TO_GL_HOLD_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_HOLD_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_HOLD_T.verify|verify} messages.
                 * @param message UC_TO_GL_HOLD_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.FivePK.IUC_TO_GL_HOLD_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_HOLD_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_HOLD_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.FivePK.UC_TO_GL_HOLD_T;

                /**
                 * Decodes a UC_TO_GL_HOLD_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_HOLD_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.FivePK.UC_TO_GL_HOLD_T;

                /**
                 * Verifies a UC_TO_GL_HOLD_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UC_TO_GL_HOLD_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UC_TO_GL_HOLD_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.FivePK.UC_TO_GL_HOLD_T;

                /**
                 * Creates a plain object from a UC_TO_GL_HOLD_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_HOLD_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.FivePK.UC_TO_GL_HOLD_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_HOLD_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UC_TO_GL_SCORE_T. */
            interface IUC_TO_GL_SCORE_T {
            }

            /** Represents a UC_TO_GL_SCORE_T. */
            class UC_TO_GL_SCORE_T implements IUC_TO_GL_SCORE_T {

                /**
                 * Constructs a new UC_TO_GL_SCORE_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.FivePK.IUC_TO_GL_SCORE_T);

                /**
                 * Creates a new UC_TO_GL_SCORE_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_SCORE_T instance
                 */
                public static create(properties?: Protocol.Game.FivePK.IUC_TO_GL_SCORE_T): Protocol.Game.FivePK.UC_TO_GL_SCORE_T;

                /**
                 * Encodes the specified UC_TO_GL_SCORE_T message. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_SCORE_T.verify|verify} messages.
                 * @param message UC_TO_GL_SCORE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.FivePK.IUC_TO_GL_SCORE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_SCORE_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_SCORE_T.verify|verify} messages.
                 * @param message UC_TO_GL_SCORE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.FivePK.IUC_TO_GL_SCORE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_SCORE_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_SCORE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.FivePK.UC_TO_GL_SCORE_T;

                /**
                 * Decodes a UC_TO_GL_SCORE_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_SCORE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.FivePK.UC_TO_GL_SCORE_T;

                /**
                 * Verifies a UC_TO_GL_SCORE_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UC_TO_GL_SCORE_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UC_TO_GL_SCORE_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.FivePK.UC_TO_GL_SCORE_T;

                /**
                 * Creates a plain object from a UC_TO_GL_SCORE_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_SCORE_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.FivePK.UC_TO_GL_SCORE_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_SCORE_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UC_TO_GL_MUCH_T. */
            interface IUC_TO_GL_MUCH_T {

                /** UC_TO_GL_MUCH_T holdArr */
                holdArr?: (number[]|null);
            }

            /** Represents a UC_TO_GL_MUCH_T. */
            class UC_TO_GL_MUCH_T implements IUC_TO_GL_MUCH_T {

                /**
                 * Constructs a new UC_TO_GL_MUCH_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.FivePK.IUC_TO_GL_MUCH_T);

                /** UC_TO_GL_MUCH_T holdArr. */
                public holdArr: number[];

                /**
                 * Creates a new UC_TO_GL_MUCH_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_MUCH_T instance
                 */
                public static create(properties?: Protocol.Game.FivePK.IUC_TO_GL_MUCH_T): Protocol.Game.FivePK.UC_TO_GL_MUCH_T;

                /**
                 * Encodes the specified UC_TO_GL_MUCH_T message. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_MUCH_T.verify|verify} messages.
                 * @param message UC_TO_GL_MUCH_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.FivePK.IUC_TO_GL_MUCH_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_MUCH_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_MUCH_T.verify|verify} messages.
                 * @param message UC_TO_GL_MUCH_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.FivePK.IUC_TO_GL_MUCH_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_MUCH_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_MUCH_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.FivePK.UC_TO_GL_MUCH_T;

                /**
                 * Decodes a UC_TO_GL_MUCH_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_MUCH_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.FivePK.UC_TO_GL_MUCH_T;

                /**
                 * Verifies a UC_TO_GL_MUCH_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UC_TO_GL_MUCH_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UC_TO_GL_MUCH_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.FivePK.UC_TO_GL_MUCH_T;

                /**
                 * Creates a plain object from a UC_TO_GL_MUCH_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_MUCH_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.FivePK.UC_TO_GL_MUCH_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_MUCH_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UC_TO_GL_STATE_COMPLETED_T. */
            interface IUC_TO_GL_STATE_COMPLETED_T {
            }

            /** Represents a UC_TO_GL_STATE_COMPLETED_T. */
            class UC_TO_GL_STATE_COMPLETED_T implements IUC_TO_GL_STATE_COMPLETED_T {

                /**
                 * Constructs a new UC_TO_GL_STATE_COMPLETED_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.FivePK.IUC_TO_GL_STATE_COMPLETED_T);

                /**
                 * Creates a new UC_TO_GL_STATE_COMPLETED_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_STATE_COMPLETED_T instance
                 */
                public static create(properties?: Protocol.Game.FivePK.IUC_TO_GL_STATE_COMPLETED_T): Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T;

                /**
                 * Encodes the specified UC_TO_GL_STATE_COMPLETED_T message. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T.verify|verify} messages.
                 * @param message UC_TO_GL_STATE_COMPLETED_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.FivePK.IUC_TO_GL_STATE_COMPLETED_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_STATE_COMPLETED_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T.verify|verify} messages.
                 * @param message UC_TO_GL_STATE_COMPLETED_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.FivePK.IUC_TO_GL_STATE_COMPLETED_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_STATE_COMPLETED_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_STATE_COMPLETED_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T;

                /**
                 * Decodes a UC_TO_GL_STATE_COMPLETED_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_STATE_COMPLETED_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T;

                /**
                 * Verifies a UC_TO_GL_STATE_COMPLETED_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UC_TO_GL_STATE_COMPLETED_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UC_TO_GL_STATE_COMPLETED_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T;

                /**
                 * Creates a plain object from a UC_TO_GL_STATE_COMPLETED_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_STATE_COMPLETED_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.FivePK.UC_TO_GL_STATE_COMPLETED_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_STATE_COMPLETED_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UC_TO_GL_CHEAT_CODE_T. */
            interface IUC_TO_GL_CHEAT_CODE_T {

                /** UC_TO_GL_CHEAT_CODE_T command */
                command?: (string|null);
            }

            /** Represents a UC_TO_GL_CHEAT_CODE_T. */
            class UC_TO_GL_CHEAT_CODE_T implements IUC_TO_GL_CHEAT_CODE_T {

                /**
                 * Constructs a new UC_TO_GL_CHEAT_CODE_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.FivePK.IUC_TO_GL_CHEAT_CODE_T);

                /** UC_TO_GL_CHEAT_CODE_T command. */
                public command: string;

                /**
                 * Creates a new UC_TO_GL_CHEAT_CODE_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UC_TO_GL_CHEAT_CODE_T instance
                 */
                public static create(properties?: Protocol.Game.FivePK.IUC_TO_GL_CHEAT_CODE_T): Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T;

                /**
                 * Encodes the specified UC_TO_GL_CHEAT_CODE_T message. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T.verify|verify} messages.
                 * @param message UC_TO_GL_CHEAT_CODE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.FivePK.IUC_TO_GL_CHEAT_CODE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UC_TO_GL_CHEAT_CODE_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T.verify|verify} messages.
                 * @param message UC_TO_GL_CHEAT_CODE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.FivePK.IUC_TO_GL_CHEAT_CODE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UC_TO_GL_CHEAT_CODE_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UC_TO_GL_CHEAT_CODE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T;

                /**
                 * Decodes a UC_TO_GL_CHEAT_CODE_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UC_TO_GL_CHEAT_CODE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T;

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
                public static fromObject(object: { [k: string]: any }): Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T;

                /**
                 * Creates a plain object from a UC_TO_GL_CHEAT_CODE_T message. Also converts values to other types if specified.
                 * @param message UC_TO_GL_CHEAT_CODE_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.FivePK.UC_TO_GL_CHEAT_CODE_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UC_TO_GL_CHEAT_CODE_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_WAIT_T. */
            interface IGL_TO_UC_WAIT_T {

                /** GL_TO_UC_WAIT_T llCrd */
                llCrd?: (number|Long|null);

                /** GL_TO_UC_WAIT_T kickPoint */
                kickPoint?: (number|Long|null);
            }

            /** Represents a GL_TO_UC_WAIT_T. */
            class GL_TO_UC_WAIT_T implements IGL_TO_UC_WAIT_T {

                /**
                 * Constructs a new GL_TO_UC_WAIT_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.FivePK.IGL_TO_UC_WAIT_T);

                /** GL_TO_UC_WAIT_T llCrd. */
                public llCrd: (number|Long);

                /** GL_TO_UC_WAIT_T kickPoint. */
                public kickPoint: (number|Long);

                /**
                 * Creates a new GL_TO_UC_WAIT_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_WAIT_T instance
                 */
                public static create(properties?: Protocol.Game.FivePK.IGL_TO_UC_WAIT_T): Protocol.Game.FivePK.GL_TO_UC_WAIT_T;

                /**
                 * Encodes the specified GL_TO_UC_WAIT_T message. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_WAIT_T.verify|verify} messages.
                 * @param message GL_TO_UC_WAIT_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.FivePK.IGL_TO_UC_WAIT_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_WAIT_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_WAIT_T.verify|verify} messages.
                 * @param message GL_TO_UC_WAIT_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.FivePK.IGL_TO_UC_WAIT_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_WAIT_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_WAIT_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.FivePK.GL_TO_UC_WAIT_T;

                /**
                 * Decodes a GL_TO_UC_WAIT_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_WAIT_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.FivePK.GL_TO_UC_WAIT_T;

                /**
                 * Verifies a GL_TO_UC_WAIT_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_WAIT_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_WAIT_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.FivePK.GL_TO_UC_WAIT_T;

                /**
                 * Creates a plain object from a GL_TO_UC_WAIT_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_WAIT_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.FivePK.GL_TO_UC_WAIT_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_WAIT_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_OPEN_T. */
            interface IGL_TO_UC_OPEN_T {

                /** GL_TO_UC_OPEN_T resultCode */
                resultCode?: (number|null);

                /** GL_TO_UC_OPEN_T llCrd */
                llCrd?: (number|Long|null);

                /** GL_TO_UC_OPEN_T cardArr */
                cardArr?: (number[]|null);

                /** GL_TO_UC_OPEN_T holdArr */
                holdArr?: (number[]|null);
            }

            /** Represents a GL_TO_UC_OPEN_T. */
            class GL_TO_UC_OPEN_T implements IGL_TO_UC_OPEN_T {

                /**
                 * Constructs a new GL_TO_UC_OPEN_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.FivePK.IGL_TO_UC_OPEN_T);

                /** GL_TO_UC_OPEN_T resultCode. */
                public resultCode: number;

                /** GL_TO_UC_OPEN_T llCrd. */
                public llCrd: (number|Long);

                /** GL_TO_UC_OPEN_T cardArr. */
                public cardArr: number[];

                /** GL_TO_UC_OPEN_T holdArr. */
                public holdArr: number[];

                /**
                 * Creates a new GL_TO_UC_OPEN_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_OPEN_T instance
                 */
                public static create(properties?: Protocol.Game.FivePK.IGL_TO_UC_OPEN_T): Protocol.Game.FivePK.GL_TO_UC_OPEN_T;

                /**
                 * Encodes the specified GL_TO_UC_OPEN_T message. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_OPEN_T.verify|verify} messages.
                 * @param message GL_TO_UC_OPEN_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.FivePK.IGL_TO_UC_OPEN_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_OPEN_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_OPEN_T.verify|verify} messages.
                 * @param message GL_TO_UC_OPEN_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.FivePK.IGL_TO_UC_OPEN_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_OPEN_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_OPEN_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.FivePK.GL_TO_UC_OPEN_T;

                /**
                 * Decodes a GL_TO_UC_OPEN_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_OPEN_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.FivePK.GL_TO_UC_OPEN_T;

                /**
                 * Verifies a GL_TO_UC_OPEN_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_OPEN_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_OPEN_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.FivePK.GL_TO_UC_OPEN_T;

                /**
                 * Creates a plain object from a GL_TO_UC_OPEN_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_OPEN_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.FivePK.GL_TO_UC_OPEN_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_OPEN_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_HOLD_T. */
            interface IGL_TO_UC_HOLD_T {

                /** GL_TO_UC_HOLD_T llCrd */
                llCrd?: (number|Long|null);

                /** GL_TO_UC_HOLD_T llWin */
                llWin?: (number|Long|null);

                /** GL_TO_UC_HOLD_T cardArr */
                cardArr?: (number[]|null);

                /** GL_TO_UC_HOLD_T holdArr */
                holdArr?: (number[]|null);

                /** GL_TO_UC_HOLD_T winBool */
                winBool?: (number|null);

                /** GL_TO_UC_HOLD_T winType */
                winType?: (number|null);

                /** GL_TO_UC_HOLD_T JPType */
                JPType?: (number|null);

                /** GL_TO_UC_HOLD_T llJPWin */
                llJPWin?: (number|Long|null);

                /** GL_TO_UC_HOLD_T llJPBefore */
                llJPBefore?: (number|Long|null);

                /** GL_TO_UC_HOLD_T llJPAfter */
                llJPAfter?: (number|Long|null);
            }

            /** Represents a GL_TO_UC_HOLD_T. */
            class GL_TO_UC_HOLD_T implements IGL_TO_UC_HOLD_T {

                /**
                 * Constructs a new GL_TO_UC_HOLD_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.FivePK.IGL_TO_UC_HOLD_T);

                /** GL_TO_UC_HOLD_T llCrd. */
                public llCrd: (number|Long);

                /** GL_TO_UC_HOLD_T llWin. */
                public llWin: (number|Long);

                /** GL_TO_UC_HOLD_T cardArr. */
                public cardArr: number[];

                /** GL_TO_UC_HOLD_T holdArr. */
                public holdArr: number[];

                /** GL_TO_UC_HOLD_T winBool. */
                public winBool: number;

                /** GL_TO_UC_HOLD_T winType. */
                public winType: number;

                /** GL_TO_UC_HOLD_T JPType. */
                public JPType: number;

                /** GL_TO_UC_HOLD_T llJPWin. */
                public llJPWin: (number|Long);

                /** GL_TO_UC_HOLD_T llJPBefore. */
                public llJPBefore: (number|Long);

                /** GL_TO_UC_HOLD_T llJPAfter. */
                public llJPAfter: (number|Long);

                /**
                 * Creates a new GL_TO_UC_HOLD_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_HOLD_T instance
                 */
                public static create(properties?: Protocol.Game.FivePK.IGL_TO_UC_HOLD_T): Protocol.Game.FivePK.GL_TO_UC_HOLD_T;

                /**
                 * Encodes the specified GL_TO_UC_HOLD_T message. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_HOLD_T.verify|verify} messages.
                 * @param message GL_TO_UC_HOLD_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.FivePK.IGL_TO_UC_HOLD_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_HOLD_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_HOLD_T.verify|verify} messages.
                 * @param message GL_TO_UC_HOLD_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.FivePK.IGL_TO_UC_HOLD_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_HOLD_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_HOLD_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.FivePK.GL_TO_UC_HOLD_T;

                /**
                 * Decodes a GL_TO_UC_HOLD_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_HOLD_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.FivePK.GL_TO_UC_HOLD_T;

                /**
                 * Verifies a GL_TO_UC_HOLD_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_HOLD_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_HOLD_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.FivePK.GL_TO_UC_HOLD_T;

                /**
                 * Creates a plain object from a GL_TO_UC_HOLD_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_HOLD_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.FivePK.GL_TO_UC_HOLD_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_HOLD_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_DG_WAIT_T. */
            interface IGL_TO_UC_DG_WAIT_T {
            }

            /** Represents a GL_TO_UC_DG_WAIT_T. */
            class GL_TO_UC_DG_WAIT_T implements IGL_TO_UC_DG_WAIT_T {

                /**
                 * Constructs a new GL_TO_UC_DG_WAIT_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.FivePK.IGL_TO_UC_DG_WAIT_T);

                /**
                 * Creates a new GL_TO_UC_DG_WAIT_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_DG_WAIT_T instance
                 */
                public static create(properties?: Protocol.Game.FivePK.IGL_TO_UC_DG_WAIT_T): Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T;

                /**
                 * Encodes the specified GL_TO_UC_DG_WAIT_T message. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T.verify|verify} messages.
                 * @param message GL_TO_UC_DG_WAIT_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.FivePK.IGL_TO_UC_DG_WAIT_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_DG_WAIT_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T.verify|verify} messages.
                 * @param message GL_TO_UC_DG_WAIT_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.FivePK.IGL_TO_UC_DG_WAIT_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_DG_WAIT_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_DG_WAIT_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T;

                /**
                 * Decodes a GL_TO_UC_DG_WAIT_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_DG_WAIT_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T;

                /**
                 * Verifies a GL_TO_UC_DG_WAIT_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_DG_WAIT_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_DG_WAIT_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T;

                /**
                 * Creates a plain object from a GL_TO_UC_DG_WAIT_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_DG_WAIT_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.FivePK.GL_TO_UC_DG_WAIT_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_DG_WAIT_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_MUCH_T. */
            interface IGL_TO_UC_MUCH_T {

                /** GL_TO_UC_MUCH_T llCrd */
                llCrd?: (number|Long|null);

                /** GL_TO_UC_MUCH_T llDGWin */
                llDGWin?: (number|Long|null);

                /** GL_TO_UC_MUCH_T cardArr */
                cardArr?: (number[]|null);

                /** GL_TO_UC_MUCH_T result */
                result?: (number|null);
            }

            /** Represents a GL_TO_UC_MUCH_T. */
            class GL_TO_UC_MUCH_T implements IGL_TO_UC_MUCH_T {

                /**
                 * Constructs a new GL_TO_UC_MUCH_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.FivePK.IGL_TO_UC_MUCH_T);

                /** GL_TO_UC_MUCH_T llCrd. */
                public llCrd: (number|Long);

                /** GL_TO_UC_MUCH_T llDGWin. */
                public llDGWin: (number|Long);

                /** GL_TO_UC_MUCH_T cardArr. */
                public cardArr: number[];

                /** GL_TO_UC_MUCH_T result. */
                public result: number;

                /**
                 * Creates a new GL_TO_UC_MUCH_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_MUCH_T instance
                 */
                public static create(properties?: Protocol.Game.FivePK.IGL_TO_UC_MUCH_T): Protocol.Game.FivePK.GL_TO_UC_MUCH_T;

                /**
                 * Encodes the specified GL_TO_UC_MUCH_T message. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_MUCH_T.verify|verify} messages.
                 * @param message GL_TO_UC_MUCH_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.FivePK.IGL_TO_UC_MUCH_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_MUCH_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_MUCH_T.verify|verify} messages.
                 * @param message GL_TO_UC_MUCH_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.FivePK.IGL_TO_UC_MUCH_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_MUCH_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_MUCH_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.FivePK.GL_TO_UC_MUCH_T;

                /**
                 * Decodes a GL_TO_UC_MUCH_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_MUCH_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.FivePK.GL_TO_UC_MUCH_T;

                /**
                 * Verifies a GL_TO_UC_MUCH_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_MUCH_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_MUCH_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.FivePK.GL_TO_UC_MUCH_T;

                /**
                 * Creates a plain object from a GL_TO_UC_MUCH_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_MUCH_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.FivePK.GL_TO_UC_MUCH_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_MUCH_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_CHEAT_CODE_T. */
            interface IGL_TO_UC_CHEAT_CODE_T {

                /** GL_TO_UC_CHEAT_CODE_T resultCode */
                resultCode?: (number|null);

                /** GL_TO_UC_CHEAT_CODE_T message */
                message?: (string|null);
            }

            /** Represents a GL_TO_UC_CHEAT_CODE_T. */
            class GL_TO_UC_CHEAT_CODE_T implements IGL_TO_UC_CHEAT_CODE_T {

                /**
                 * Constructs a new GL_TO_UC_CHEAT_CODE_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.FivePK.IGL_TO_UC_CHEAT_CODE_T);

                /** GL_TO_UC_CHEAT_CODE_T resultCode. */
                public resultCode: number;

                /** GL_TO_UC_CHEAT_CODE_T message. */
                public message: string;

                /**
                 * Creates a new GL_TO_UC_CHEAT_CODE_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_CHEAT_CODE_T instance
                 */
                public static create(properties?: Protocol.Game.FivePK.IGL_TO_UC_CHEAT_CODE_T): Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T;

                /**
                 * Encodes the specified GL_TO_UC_CHEAT_CODE_T message. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T.verify|verify} messages.
                 * @param message GL_TO_UC_CHEAT_CODE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.FivePK.IGL_TO_UC_CHEAT_CODE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_CHEAT_CODE_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T.verify|verify} messages.
                 * @param message GL_TO_UC_CHEAT_CODE_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.FivePK.IGL_TO_UC_CHEAT_CODE_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_CHEAT_CODE_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_CHEAT_CODE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T;

                /**
                 * Decodes a GL_TO_UC_CHEAT_CODE_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_CHEAT_CODE_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T;

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
                public static fromObject(object: { [k: string]: any }): Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T;

                /**
                 * Creates a plain object from a GL_TO_UC_CHEAT_CODE_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_CHEAT_CODE_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.FivePK.GL_TO_UC_CHEAT_CODE_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** GL_TO_UC_INIT_INFO_T llMinBet */
                llMinBet?: (number|Long|null);

                /** GL_TO_UC_INIT_INFO_T llMaxBet */
                llMaxBet?: (number|Long|null);

                /** GL_TO_UC_INIT_INFO_T llBetUnit */
                llBetUnit?: (number|Long|null);

                /** GL_TO_UC_INIT_INFO_T dRate */
                dRate?: (number|null);
            }

            /** Represents a GL_TO_UC_INIT_INFO_T. */
            class GL_TO_UC_INIT_INFO_T implements IGL_TO_UC_INIT_INFO_T {

                /**
                 * Constructs a new GL_TO_UC_INIT_INFO_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.FivePK.IGL_TO_UC_INIT_INFO_T);

                /** GL_TO_UC_INIT_INFO_T tableId. */
                public tableId: number;

                /** GL_TO_UC_INIT_INFO_T llMinBet. */
                public llMinBet: (number|Long);

                /** GL_TO_UC_INIT_INFO_T llMaxBet. */
                public llMaxBet: (number|Long);

                /** GL_TO_UC_INIT_INFO_T llBetUnit. */
                public llBetUnit: (number|Long);

                /** GL_TO_UC_INIT_INFO_T dRate. */
                public dRate: number;

                /**
                 * Creates a new GL_TO_UC_INIT_INFO_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_INIT_INFO_T instance
                 */
                public static create(properties?: Protocol.Game.FivePK.IGL_TO_UC_INIT_INFO_T): Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T;

                /**
                 * Encodes the specified GL_TO_UC_INIT_INFO_T message. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T.verify|verify} messages.
                 * @param message GL_TO_UC_INIT_INFO_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.FivePK.IGL_TO_UC_INIT_INFO_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_INIT_INFO_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T.verify|verify} messages.
                 * @param message GL_TO_UC_INIT_INFO_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.FivePK.IGL_TO_UC_INIT_INFO_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_INIT_INFO_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_INIT_INFO_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T;

                /**
                 * Decodes a GL_TO_UC_INIT_INFO_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_INIT_INFO_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T;

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
                public static fromObject(object: { [k: string]: any }): Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T;

                /**
                 * Creates a plain object from a GL_TO_UC_INIT_INFO_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_INIT_INFO_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.FivePK.GL_TO_UC_INIT_INFO_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_INIT_INFO_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GL_TO_UC_UPDATE_POINT_T. */
            interface IGL_TO_UC_UPDATE_POINT_T {

                /** GL_TO_UC_UPDATE_POINT_T llCrd */
                llCrd?: (number|Long|null);

                /** GL_TO_UC_UPDATE_POINT_T kickPoint */
                kickPoint?: (number|Long|null);
            }

            /** Represents a GL_TO_UC_UPDATE_POINT_T. */
            class GL_TO_UC_UPDATE_POINT_T implements IGL_TO_UC_UPDATE_POINT_T {

                /**
                 * Constructs a new GL_TO_UC_UPDATE_POINT_T.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Protocol.Game.FivePK.IGL_TO_UC_UPDATE_POINT_T);

                /** GL_TO_UC_UPDATE_POINT_T llCrd. */
                public llCrd: (number|Long);

                /** GL_TO_UC_UPDATE_POINT_T kickPoint. */
                public kickPoint: (number|Long);

                /**
                 * Creates a new GL_TO_UC_UPDATE_POINT_T instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GL_TO_UC_UPDATE_POINT_T instance
                 */
                public static create(properties?: Protocol.Game.FivePK.IGL_TO_UC_UPDATE_POINT_T): Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T;

                /**
                 * Encodes the specified GL_TO_UC_UPDATE_POINT_T message. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T.verify|verify} messages.
                 * @param message GL_TO_UC_UPDATE_POINT_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Protocol.Game.FivePK.IGL_TO_UC_UPDATE_POINT_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GL_TO_UC_UPDATE_POINT_T message, length delimited. Does not implicitly {@link Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T.verify|verify} messages.
                 * @param message GL_TO_UC_UPDATE_POINT_T message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Protocol.Game.FivePK.IGL_TO_UC_UPDATE_POINT_T, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GL_TO_UC_UPDATE_POINT_T message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GL_TO_UC_UPDATE_POINT_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T;

                /**
                 * Decodes a GL_TO_UC_UPDATE_POINT_T message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GL_TO_UC_UPDATE_POINT_T
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T;

                /**
                 * Verifies a GL_TO_UC_UPDATE_POINT_T message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GL_TO_UC_UPDATE_POINT_T message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GL_TO_UC_UPDATE_POINT_T
                 */
                public static fromObject(object: { [k: string]: any }): Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T;

                /**
                 * Creates a plain object from a GL_TO_UC_UPDATE_POINT_T message. Also converts values to other types if specified.
                 * @param message GL_TO_UC_UPDATE_POINT_T
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Protocol.Game.FivePK.GL_TO_UC_UPDATE_POINT_T, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GL_TO_UC_UPDATE_POINT_T to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
 
} 
 export {}