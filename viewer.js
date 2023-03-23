import { WHEPClient } from "whip/whep"

const viewer = async (url, video, subscriberToken) => {

    const pc = new RTCPeerConnection();
    pc.addTransceiver('video', {
        direction: 'recvonly'
    })
    pc.addTransceiver('audio', {
        direction: 'recvonly'
    })

    //Create whip client
    const whep = new WHEPClient();

    //Start publishing
    await whep.view(pc, url, subscriberToken);

    const stream = new MediaStream();

    pc.getReceivers().forEach((r) => {
        stream.addTrack(r.track)
    })

    // Assign stream to video media element
    video.srcObject = stream

    // Play the stream
    video.play()

    return
}

export default viewer;