const SimpleWebRTC = require('./simplewebrtc.bundle');
const noop = () => {};
const defaults = {
    signalingServer : "https://rtc.videoflow.io",
    maxParticipants : 5,
    onVideoAdded    : noop,
    onVideoRemoved  : noop,
    onMessage       : noop,
    onCreatedPeer   : noop
};


export default class WebRTC{
    constructor(room, target, options){
        this.options        = Object.assign({}, defaults, options || {});
        this.connected      = false;
        this.room           = room;
        this.target         = target;
        this.init();
    }

    init(){
        let self = this;

        self.webrtc = new SimpleWebRTC({
            // target: this.target,
            url: this.options.signalingServer,
            stunServer: [{urls: 'stun:stun.l.google.com:19302'}, {
                username: 'user',
                credential: 'pass',
                urls: 'turn:54.198.120.75:3478'
            }],
            localVideoEl: '',
            remoteVideosEl: '',
            autoRequestMedia: false,
            debug: false,
            detectSpeakingEvents: true,
            autoAdjustMic: false
        });

        self.webrtc.on('readyToCall', function () {
            // console.log('Client StrongID', self.webrtc.connection.connection.id);
            self.webrtc.setInfo('vf'+ Math.random().toString().substr(2), self.webrtc.connection.connection.id, ''); // Store strongId

            if (self.room) {
                self.webrtc.joinRoom(self.room, function(err, room){
                    let participants = Object.keys(room.clients);
                    if(participants.length + 1 > self.options.maxParticipants){
                        self.close();
                    }
                });
                // self.webrtc.createRoom(self.room, function(){
                //     self.webrtc.joinRoom(self.room);
                // });
            }
        });

        self.webrtc.on('joinedRoom', function (/*room*/) {
            // console.log('WebRTC - Joined Room: ' + room);
        });

        //Handle incoming video from target peer
        self.webrtc.on('videoAdded', function (video, peer) {
            // console.log('WebRTC - Video added');
            self.options.onVideoAdded(video, peer);
        });

        //Handle removing video by target peer
        self.webrtc.on('videoRemoved', function (video, peer) {
            // console.log('WebRTC - Video removed');
            if (peer.id === self.target || peer.strongId === self.target || peer.nickName === self.target) {
                self.options.onVideoRemoved(video, peer);
            }
        });

        self.webrtc.on('createdPeer', function (peer) {
            window.console.log('WebRTC - Peer Created');
            self.options.onCreatedPeer(peer);
        });

        self.webrtc.on('channelMessage', function (peer, label, data) {
            // console.log('WebRTC - Channel message');
            if (data.type === 'custommessage') {
                var msg = JSON.parse(data.payload);
                self.options.onMessage(msg);
            }
        });
    }

    close(){
        try{
            if(this.webrtc.connection){
                this.webrtc.leaveRoom();
                this.webrtc.disconnect();
            }
        } catch(err){/**/}
    }

    send(data){
        this.webrtc.sendDirectlyToAll(this.target, 'custommessage', JSON.stringify(data));
    }
}




