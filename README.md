# Dolby.io WHIP/WHEP Real Time Streaming Sample App

This project is a demonstration on how to create a simple JavaScript publisher & viewer application using the standardized [WHIP (WebRTC-HTTP Ingress Protocol)](https://www.ietf.org/archive/id/draft-ietf-wish-whip-01.html) for WebRTC broadcasting and [WHEP (WebRTC-HTTP Egress Protocol)](https://www.ietf.org/id/draft-murillo-whep-01.html) for WebRTC playback.

## Setup
1. Clone this project and install the dependencies with:
    ```bash
    yarn
    ```
1. Create a Dolby.io account and create a publish token from the "Live Broadcast" section.
1. Edit `.env` and add the following variables:
- `VITE_WHIP_URL`
- `VITE_PUBLISH_TOKEN`
- `VITE_WHEP_URL`
- `VITE_SUBSCRIBER_TOKEN`

These variables can be obtained from the [Dolby.io Real-time Streaming dashboard](https://streaming.dolby.io/#/tokens). They can be found in the "API" tab once you have selected your token.

## Run the example
1. start your stream to Dolby.io Real-time streaming
2. start the example

    ```bash
    yarn dev
    ```
3. Visit the hosted site. By default this is http://localhost:5173/
