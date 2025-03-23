const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image:
      "https://i.pinimg.com/736x/c7/06/68/c70668943f07b46df28f8088c3fa5753.jpg",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image:
      "https://i.pinimg.com/736x/89/c1/df/89c1dfaf3e2bf035718cf2a76a16fd38.jpg",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image:
      "https://i.pinimg.com/736x/9c/42/e9/9c42e98d85a03625cbb9396e0b486585.jpg",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image:
      "https://i.pinimg.com/736x/9a/35/c9/9a35c9fc946354da97ba68a2f896444d.jpg",
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image:
      "https://i.pinimg.com/736x/bd/5f/61/bd5f615f26ab3ce051b743996049329f.jpg",
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image:
      "https://i.pinimg.com/736x/7a/84/76/7a847600cd8dcfa066cc3ac856a9b568.jpg",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image:
      "https://i.pinimg.com/736x/2a/a8/58/2aa858e307463c2eedbd0db09f2d23d2.jpg",
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image:
      "https://i.pinimg.com/736x/fc/47/ad/fc47ade63738a38022001f9fcde87c89.jpg",
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image:
      "https://i.pinimg.com/736x/29/cb/1a/29cb1a7bbfaefc77df8b2ea9263cdc70.jpg",
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image:
      "https://i.pinimg.com/736x/c0/d4/b0/c0d4b05bcbdf464f2e9714b0e4fc63bc.jpg",
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image:
      "https://i.pinimg.com/736x/1a/84/9a/1a849a2b142368fe876034f8e19b2e91.jpg",
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image:
      "https://i.pinimg.com/736x/f4/f9/39/f4f939fe489c848ab30525174af83461.jpg",
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image:
      "https://i.pinimg.com/736x/3b/0a/26/3b0a263c84e26f552f5cabcb56aec78d.jpg",
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image:
      "https://i.pinimg.com/736x/3e/0d/75/3e0d75f97f4f2799b913e337dcce2f8a.jpg",
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image:
      "https://i.pinimg.com/736x/bf/cd/d1/bfcdd1e312693b587119c167244cfdb2.jpg",
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image:
      "https://i.pinimg.com/736x/76/1e/54/761e54fe9f7d8b3e07743105df117873.jpg",
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image:
      "https://i.pinimg.com/736x/45/67/19/456719b3d11880724781fe34a1b78a58.jpg",
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image:
      "https://i.pinimg.com/736x/82/ff/55/82ff558527d28be20bd2d0e09e231f52.jpg",
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image:
      "https://i.pinimg.com/736x/6a/77/6c/6a776c6c47800595752f365a23afa9ae.jpg",

    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image:
      "https://i.pinimg.com/736x/b3/22/9f/b3229f33d8fc6f1a47dadb85df97d381.jpg",
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image:
      "https://i.pinimg.com/736x/1c/0c/c8/1c0cc896c4ef4b4c3954086e410e277c.jpg",
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image:
      "https://i.pinimg.com/736x/ee/af/5c/eeaf5c4b58d982e964d09d0c7ab955a1.jpg",
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image:
      "https://i.pinimg.com/736x/3d/ce/6b/3dce6b56f5c5f6e3916dfe21c19e0c71.jpg",
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image:
      "https://i.pinimg.com/736x/61/fd/03/61fd03a7918ce643dff3d7b57a0ddbf4.jpg",
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image:
      "https://i.pinimg.com/736x/ab/13/d1/ab13d1c5ba40cde85bd235ea5eaad880.jpg",
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image:
      "https://i.pinimg.com/736x/91/a2/f4/91a2f4eea9f5fca497fff1d896d1bf9c.jpg",
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image:
      "https://i.pinimg.com/736x/59/3d/8c/593d8c873ab6c26d13c2c81eb539e61e.jpg",
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image:
      "https://i.pinimg.com/736x/47/84/dc/4784dc33b9abc98cf67ec5123b1d0a61.jpg",
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    owner: "67e0659cc8437a37a3ca1628",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image:
      "https://i.pinimg.com/736x/88/c9/ab/88c9ab95a6b734189bf50412ee963c41.jpg",
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
];

module.exports = { data: sampleListings };
