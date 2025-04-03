const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    owner: "67ee7d5f753f2f2e0d6c30f6",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://i.pinimg.com/736x/c7/06/68/c70668943f07b46df28f8088c3fa5753.jpg",
      filename: "c70668943f07b46df28f8088c3fa5753.jpg",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    owner: "67ee7d5f753f2f2e0d6c30f6",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      url: "https://i.pinimg.com/736x/89/c1/df/89c1dfaf3e2bf035718cf2a76a16fd38.jpg",
      filename: "89c1dfaf3e2bf035718cf2a76a16fd38.jpg",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    owner: "67ee7d5f753f2f2e0d6c30f6",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url: "https://i.pinimg.com/736x/9c/42/e9/9c42e98d85a03625cbb9396e0b486585.jpg",
      filename: "9c42e98d85a03625cbb9396e0b486585.jpg",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    owner: "67ee7d5f753f2f2e0d6c30f6",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      url: "https://i.pinimg.com/736x/9a/35/c9/9a35c9fc946354da97ba68a2f896444d.jpg",
      filename: "9a35c9fc946354da97ba68a2f896444d.jpg",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    owner: "67ee7d5f753f2f2e0d6c30f6",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      url: "https://i.pinimg.com/736x/bd/5f/61/bd5f615f26ab3ce051b743996049329f.jpg",
      filename: "bd5f615f26ab3ce051b743996049329f.jpg",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    owner: "67ee7d5f753f2f2e0d6c30f6",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      url: "https://i.pinimg.com/736x/7a/84/76/7a847600cd8dcfa066cc3ac856a9b568.jpg",
      filename: "7a847600cd8dcfa066cc3ac856a9b568.jpg",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    owner: "67ee7d5f753f2f2e0d6c30f6",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      url: "https://i.pinimg.com/736x/2a/a8/58/2aa858e307463c2eedbd0db09f2d23d2.jpg",
      filename: "2aa858e307463c2eedbd0db09f2d23d2.jpg",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    owner: "67ee7d5f753f2f2e0d6c30f6",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      url: "https://i.pinimg.com/736x/fc/47/ad/fc47ade63738a38022001f9fcde87c89.jpg",
      filename: "fc47ade63738a38022001f9fcde87c89.jpg",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    owner: "67ee7d5f753f2f2e0d6c30f6",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      url: "https://i.pinimg.com/736x/29/cb/1a/29cb1a7bbfaefc77df8b2ea9263cdc70.jpg",
      filename: "29cb1a7bbfaefc77df8b2ea9263cdc70.jpg",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    owner: "67ee7d5f753f2f2e0d6c30f6",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      url: "https://i.pinimg.com/736x/c0/d4/b0/c0d4b05bcbdf464f2e9714b0e4fc63bc.jpg",
      filename: "c0d4b05bcbdf464f2e9714b0e4fc63bc.jpg",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    owner: "67ee7d5f753f2f2e0d6c30f6",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      url: "https://i.pinimg.com/736x/1a/84/9a/1a849a2b142368fe876034f8e19b2e91.jpg",
      filename: "1a849a2b142368fe876034f8e19b2e91.jpg",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    owner: "67ee7d5f753f2f2e0d6c30f6",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      url: "https://i.pinimg.com/736x/f4/f9/39/f4f939fe489c848ab30525174af83461.jpg",
      filename: "f4f939fe489c848ab30525174af83461.jpg",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    owner: "67ee7d5f753f2f2e0d6c30f6",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      url: "https://i.pinimg.com/736x/3b/0a/26/3b0a263c84e26f552f5cabcb56aec78d.jpg",
      filename: "3b0a263c84e26f552f5cabcb56aec78d.jpg",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
];

module.exports = { data: sampleListings };
