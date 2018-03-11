const express = require('express')
const App = express()

const data = [
    {
        "title": "Soulful Voice",
        "artist": "Arijit Singh",
        "url": "https://www.amazon.in/Soulful-Voice-Arijit-Singh/dp/B0753CL95Q",
        "image": "https://images-na.ssl-images-amazon.com/images/I/81oK70kbtUL._SL1500_.jpg",
        "thumbnail_image": "https://imgur.com/a/li32N"
      },    
    {
      "title": "Yaadein",
      "artist": "Kishore Kumar",
      "url": "https://www.amazon.in/Yaadein-Kishore-Kumar/dp/B0119KI7ZO",
      "image": "https://images-na.ssl-images-amazon.com/images/I/61Lso-bmSLL.jpg",
      "thumbnail_image": "https://imgur.com/ArwexHM"
    },
    {
      "title": "American Idiot",
      "artist": "Green Day",
      "url": "https://www.amazon.in/American-Idiot-Green-Day/dp/B0002OERI0",
      "image": "https://images-na.ssl-images-amazon.com/images/I/71Z0rLIvpuL._SL1448_.jpg",
      "thumbnail_image": ""
    },
    {
      "title": "Doorie",
      "artist": "Atif Aslam",
      "url": "https://www.amazon.in/Doorie-CD-Atif-Aslam/dp/B075ZWJB9J",
      "image": "https://images-na.ssl-images-amazon.com/images/I/81bd2rue8SL._SL1482_.jpg",
      "thumbnail_image": ""
    },
    {
      "title": "Bollywood Heights",
      "artist": "Shreya Ghoshal",
      "url": "https://www.amazon.in/Bollywood-Heights-Shreya-Ghoshal/dp/B0088LJD2O/",
      "image": "https://images-na.ssl-images-amazon.com/images/I/8185kfVlriL._SL1500_.jpg",
      "thumbnail_image": ""
    }
  ]
App.get('/', (req, res) => res.send(data))

let PORT = process.env.PORT || 3000
App.listen(PORT, () => console.log('App started at ',PORT) )