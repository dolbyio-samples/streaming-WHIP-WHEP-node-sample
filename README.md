# WHIP/WHEP Dolby.io Real Time Streaming Sample App

This project is a demonstration on how to create a simple javascript publisher & viewer application using the standarized [WHIP (WebRTC-HTTP Ingress Protocol)](https://www.ietf.org/archive/id/draft-ietf-wish-whip-01.html) for WebRTC broadcasting and [WHEP (WebRTC-HTTP Egress Protocol)](https://www.ietf.org/id/draft-murillo-whep-01.html) for WebRTC playback.

## Setup
1. Clone this project and install the dependencies with:
    ```bash
    yarn
    ```
1. Create a Dolby.io account and create a publish token from the "Live Broadcast" section.
1. Edit `main.js` and replace the following variables:
    - `whipUrl`
    - `publishinToken`
    - `whepUrl`

You can get this variables from the [dolby.io Real-time streaming dashboard](https://streaming.dolby.io/#/tokens). Find this in the "API" tab once you have selected your publish token.

## Run the example
1. start your stream to Dolby.io Real-time streaming
1. start the example

    ```bash
    yarn dev
    ```
