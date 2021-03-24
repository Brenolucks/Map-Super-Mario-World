function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.667685918050864, lng: 135.43027967345125},
        zoom: 18,
        mapId: '1a63472517760f34',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
    });

    const markers = [
        [
            "Yoshi's/ House",
            34.66684487057949,
            135.4308520909164,
            "./images/yoshi_house.svg",
            40,
            50
        ],
        [
            "Princes's/ Castle",
            34.667768205968734,
            135.4305338683121,
            "./images/castle.svg",
            40,
            50
        ],
        [
            "Ghost's/ House",
            34.66767213344685,
            135.42985699141929,
            "./images/ghosthouse.svg",
            40,
            50
        ],
        [
            "You We Here",
            34.66740741022805,
            135.42947611775733,
            "./images/pointer.svg",
            40,
            50
        ],
        [
            "Star's/ World",
            34.668258933566115,
            135.43045244179223,
            "./images/star.svg",
            40,
            50
        ],
        [
            "Warp Pipe",
            34.66794126785212,
            135.4312088246984,
            "./images/pipe.svg",
            40,
            50
        ],
        [
            "Hill With Eyes",
            34.66809127681331,
            135.4300876613836,
            "./images/hill_with_eyes.svg",
            40,
            50
        ]

    ];

    for(let i = 0; i < markers.length; i++){
        const iMarker = markers[i];
        const marker = new google.maps.Marker({
            position: {lat: iMarker[1], lng: iMarker[2] },
            map,
            title: iMarker[0],
            icon: {
                url: iMarker[3],
                scaledSize: new google.maps.Size(iMarker[4], iMarker[5])
            },
            animation: google.maps.Animation.DROP,
            
        });
    
        const infowindow = new google.maps.InfoWindow({
            content: iMarker[0],
        });
    
        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    }
}