import { WHIPClient } from "whip"
import sdpParser from '@millicast/sdk/src/utils/SdpParser'

class PeerConnection extends RTCPeerConnection {
	constructor({simulcast}) {
		super();
		this.simulcast = simulcast
	}

	async createOffer() {
		let offer = await super.createOffer();
		if (this.simulcast){
			offer.sdp = sdpParser.setSimulcast(offer.sdp, 'h264')
		}
		return offer
	}
	
}

const publisher = async ({url, token, simulcast}) => {
	//Get mic+cam
	const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });

	const video = document.getElementById("whip")

	video.srcObject = stream
	video.muted = true

	video.play()

	//Create peerconnection
	const pc = new PeerConnection({simulcast});

	//Send all tracks
	for (const track of stream.getTracks()) {
		//You could add simulcast too here
		pc.addTrack(track);
	}

	//Create whip client
	const whip = new WHIPClient();

	//Start publishing
	await whip.publish(pc, url, token);

	return 
}

export default publisher;