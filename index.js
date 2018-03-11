const express = require('express')
const App = express()

const data = [
    {
      "title": "Yaadein",
      "artist": "Kishore Kumar",
      "url": "https://www.amazon.in/Yaadein-Kishore-Kumar/dp/B0119KI7ZO/",
      "image": "https://images-na.ssl-images-amazon.com/images/I/61Lso-bmSLL.jpg",
      "thumbnail_image": "https://imgur.com/ArwexHM"
    },
    {
      "title": "Fearless",
      "artist": "Taylor Swift",
      "url": "https://www.amazon.com/Fearless-Enhanced-Taylor-Swift/dp/B001EYGOEM",
      "image": "https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg",
      "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg"
    },
    {
      "title": "Speak Now",
      "artist": "Taylor Swift",
      "url": "https://www.amazon.com/Speak-Now-Taylor-Swift/dp/B003WTE886",
      "image": "https://images-na.ssl-images-amazon.com/images/I/51vlGuX7%2BFL.jpg",
      "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg"
    },
    {
      "title": "Red",
      "artist": "Taylor Swift",
      "url": "https://www.amazon.com/Red-Taylor-Swift/dp/B008XNZMOU",
      "image": "https://images-na.ssl-images-amazon.com/images/I/41j7-7yboXL.jpg",
      "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg"
    },
    {
      "title": "1989",
      "artist": "Taylor Swift",
      "url": "https://www.amazon.com/1989-Taylor-Swift/dp/B00MRHANNI",
      "image": "https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg",
      "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg"
    }
  ]
App.get('/', (req, res) => res.send(data))

let PORT = process.env.PORT || 3000
App.listen(PORT, () => console.log('App started at ',PORT) )