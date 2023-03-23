import publisher from "./publisher";
import viewer from "./viewer";

// Configure WHIP API endpoint and token
// whipUrl example: https://director.millicast.com/api/whip/<streamName>
// Token example: https://director.millicast.com/api/whip/<streamName>

if (!(import.meta.env.VITE_WHIP_URL &&
    import.meta.env.VITE_PUBLISH_TOKEN &&
    import.meta.env.VITE_WHEP_URL)) {
    throw new Error('Missing environment variables')
}
const whipUrl = import.meta.env.VITE_WHIP_URL
const publishinToken = import.meta.env.VITE_PUBLISH_TOKEN

console.log('Starting WHIP publisher')
console.log('WHIP endpoing: ', whipUrl)
console.log('WHIP Token: ', publishinToken)

// Start publishing
await publisher({url: whipUrl, token: publishinToken, simulcast: true})

// Configure WHEP API endpoint
const whepUrl = import.meta.env.VITE_WHEP_URL
// You can configure an optional subscriber token if enabled  
const subscriberToken = import.meta.env.VITE_SUBSCRIBER_TOKEN

// Select video where we want to reproduce the stream
const whepVideo = document.getElementById('whep')

// Add your wanted video media element desired configurations
whepVideo.muted = true
whepVideo.controls = true

console.log('Starting WHEP viewer')
console.log('WHEP endpoing: ', whepUrl)

// Start reproducing the stream
await viewer(whepUrl, whepVideo, subscriberToken)