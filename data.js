var APP_DATA = {
  "scenes": [
    {
      "id": "0-big-room-couch",
      "name": "big room couch",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.053182666123357,
          "pitch": 0.08415838278174093,
          "rotation": 0,
          "target": "1-small-room"
        },
        {
          "yaw": -3.0255844753015353,
          "pitch": 0.1831604683891257,
          "rotation": 0,
          "target": "2-big-room-bed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-small-room",
      "name": "small room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.851193024388886,
          "pitch": 0.21875789911567622,
          "rotation": 0,
          "target": "0-big-room-couch"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-big-room-bed",
      "name": "big room bed",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8775702433464012,
          "pitch": 0.09679461537859879,
          "rotation": 0,
          "target": "1-small-room"
        },
        {
          "yaw": -2.6772002540469284,
          "pitch": 0.0358099825702638,
          "rotation": 0,
          "target": "0-big-room-couch"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
