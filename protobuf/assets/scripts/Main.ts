import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Main')
export class Main extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    start() {
        // Your initialization goes here.
        console.log("AA");

        //組包
        let writer: protobuf.Writer = Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T.encode({ iTest: 100 });
        let arrayBuffer: Uint8Array = writer.finish();
        console.log("組包");

        //解包
        let message: Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T = Protocol.Game.Shared.UC_TO_GL_SEND_TEST_T.decode(arrayBuffer);
        console.log("解包" + message.iTest);
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
