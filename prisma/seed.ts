import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const rimsSeedData = [
    {
      sizeR: 18,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "DY988-01",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY989-01_02.jpgpack4.jpg?v=1695644652",
      price: 750,
      gram: 50000
    },
    {
      sizeR: 18,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "inexC507BG",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/IMG_6064.jpgpack4.jpg?v=1695385200",
      price: 750,
      gram: 50000
    },
    {
      sizeR: 18,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "A397-03",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A397-03.jpgpack4.jpg?v=1695043979",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 18,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "A397-02",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A360-07.jpgpack4.jpg?v=1695044197",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 18,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "DY138-09",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY138-09.jpgpack4.jpg?v=1695044401",
      price: 650,
      gram: 50000
    },
    {
      sizeR: 18,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "DY138-03",
      width: 7,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/IMG_6859.pngpack4.png?v=1695044446",
      price: 750,
      gram: 50000
    },
    {
      sizeR: 18,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "A223-02",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A223-02.jpgpack4.jpg?v=1695044648",
      price: 600,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "B1558-19",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/B1558-19v1.jpgpack4.jpg?v=1695044727",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "B5252-19",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/B5252-19.jpgpack4.jpg?v=1695044792",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "A360-05",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A360-05.jpgpack4.jpg?v=1695044344",
      price: 950,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "XFE69",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/XFE6919v3.jpg?v=1697017006",
      price: 950,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "DY989-01/02",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY989-01_02.jpgpack4.jpg?v=1695644652",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "A212/A213",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A212_213-01.jpgpack4.jpg?v=1695050293",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "DY989-05/06",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY988-07.pngpack4.jpg?v=1695385018",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "A330-01",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A330-01.jpgpack4.jpg?v=1695045019",
      price: 800,
      gram: 52000
    },
    {
      sizeR: 20,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "DYS10034-01",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/BY1464v2.jpgpack4.jpg?v=1695045712",
      price: 1250,
      gram: 52000
    },
    {
      sizeR: 20,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "BY1464",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/BY1464v2.jpgpack4.jpg?v=1695045712",
      price: 1300,
      gram: 52000
    },
    {
      sizeR: 20,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "A1017-21/22\n",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A1017.jpgpack4.jpg?v=1695045218",
      price: 1100,
      gram: 62000
    },
    {
      sizeR: 20,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "A326-01/327-01",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A326-01_327-01.jpgpack4.jpg?v=1695388382",
      price: 1300,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "DY139-01",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/IMG_6859.pngpack4.png?v=1695044446",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 20,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "A1017-13/14",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/IMG_6859.pngpack4.png?v=1695044446",
      price: 1100,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "A1017",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A1017.jpgpack4.jpg?v=1695045218",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 18,
      studHoles: 5,
      pcd: 120,
      centerBore: "72.6",
      rimModel: "Morgan18BLM",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Morgan19BLM.jpgpack4.jpg?v=1695045305",
      price: 750,
      gram: 50000
    },
    {
      sizeR: 18,
      studHoles: 5,
      pcd: 120,
      centerBore: "72.6",
      rimModel: "DY718-01",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY718-01.jpgpack4.jpg?v=1695045377",
      price: 750,
      gram: 50000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.56",
      rimModel: "O11-03/04",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/O11-0304.jpgpack4.jpg?v=1695045448",
      price: 750,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 120,
      centerBore: "72.6",
      rimModel: "160/161-03",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/160_161-03.pngpack4.png?v=1695043417",
      price: 900,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "A194/195-02",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A194195-02.jpgpack4.jpg?v=1695045989",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 120,
      centerBore: "72.6",
      rimModel: "160/161-01",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/160-161-01.jpgpack4.jpg?v=1697880452",
      price: 900,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 120,
      centerBore: "72.6",
      rimModel: "160/161-02",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/IMG_5699.jpgpack4.jpg?v=1695043415",
      price: 900,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 120,
      centerBore: "74.1",
      rimModel: "Spit192024",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/BK273.jpgpack4.jpg?v=1695046047",
      price: 900,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 120,
      centerBore: "72.6",
      rimModel: "DY719-05/06",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY718-01.jpgpack4.jpg?v=1695045377",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 120,
      centerBore: "72.6",
      rimModel: "A318/319-23",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/IMG_6362.jpgpack4.jpg?v=1695046352",
      price: 800,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "A338/339-01",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A338_339-04.jpgpack4.jpg?v=1695046410",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "73.1",
      rimModel: "ARC19177-01/02",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/ARC19177-0102.jpgpack4.jpg?v=1695046591",
      price: 900,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.56",
      rimModel: "O10-03/04",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/O10-0304.jpgpack4.jpg?v=1695046640",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 120,
      centerBore: "72.6",
      rimModel: "Flex19BLM",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Flex19BLM.jpgpack4.jpg?v=1695385271",
      price: 850,
      gram: 50000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 120,
      centerBore: "72.6",
      rimModel: "DY929-04/10",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Rubin_59407_08.jpgpack4.jpg?v=1695046745",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "A338/339-03",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A338_339-06.jpgpack4.jpg?v=1695046480",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "A196/197-02",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A196_197-02.jpgpack4.jpg?v=1695046794",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "H5080-19",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/H5080-19.jpgpack4.jpg?v=1695389620",
      price: 900,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "A189/190-02",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A189_190-02.jpgpack4.jpg?v=1695046852",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "Omi19511223",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Omi19512030.jpgpack4.jpg?v=1695389458",
      price: 900,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 120,
      centerBore: "72.6",
      rimModel: "Omi19512030",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Omi19512030.jpgpack4.jpg?v=1695389458",
      price: 900,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 120,
      centerBore: "72.6",
      rimModel: "ARC19193-71/72",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/ARC19193-7172.jpgpack4.jpg?v=1695046948",
      price: 900,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "DY929-01/07",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Rubin_59407_08.jpgpack4.jpg?v=1695046745",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 20,
      studHoles: 5,
      pcd: 120,
      centerBore: "74.1",
      rimModel: "AnomalyBMX6",
      width: 9,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/AnomalyBMX6.pngpack4.png?v=1695047262",
      price: 1100,
      gram: 52000
    },
    {
      sizeR: 21,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "A342/343-03",
      width: 9,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A342343-03.jpgpack4.jpg?v=1695047388",
      price: 1200,
      gram: 62000
    },
    {
      sizeR: 21,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "A342/343-01",
      width: 9,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/IMG_4160.pngpack4.png?v=1695047315",
      price: 1200,
      gram: 62000
    },
    {
      sizeR: 18,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.45",
      rimModel: "Game18BFP5112",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Game18BFP5112.pngpack4.png?v=1695385390",
      price: 750,
      gram: 50000
    },
    {
      sizeR: 20,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.45",
      rimModel: "A277-03",
      width: 9,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A277.jpgpack4.jpg?v=1695047946",
      price: 1100,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.45",
      rimModel: "DY739-06",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY739-05.jpgpack4.jpg?v=1695047649",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.45",
      rimModel: "DY1109-02",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY1109-02.jpgpack4.jpg?v=1695047721",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.45",
      rimModel: "DY739-05",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY739-05.jpgpack4.jpg?v=1695047649",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.45",
      rimModel: "DY809-07",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/IMG_4850.jpgpack4.jpg?v=1695047569",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "73.1",
      rimModel: "A171-03",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A171-03.jpgpack4.jpg?v=1695047807",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 20,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.45",
      rimModel: "dy1268-01",
      width: 9,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/dy1268-01.jpgpack4.jpg?v=1695385437",
      price: 1100,
      gram: 52000
    },
    {
      sizeR: 19,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.45",
      rimModel: "Tor19664535",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Tor19664535.jpgpack4.jpg?v=1695646379",
      price: 850,
      gram: 52000
    },
    {
      sizeR: 20,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.45",
      rimModel: "A277-06",
      width: 9,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/IMG_4839.jpgpack4.jpg?v=1695047901",
      price: 1100,
      gram: 52000
    },
    {
      sizeR: 20,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.45",
      rimModel: "A277-0335",
      width: 9,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A277.jpgpack4.jpg?v=1695047946",
      price: 1100,
      gram: 52000
    },
    {
      sizeR: 20,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.45",
      rimModel: "DY580-01",
      width: 9,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY580.jpgpack4.jpg?v=1695646671",
      price: 1100,
      gram: 52000
    },
    {
      sizeR: 20,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.45",
      rimModel: "DY830-01",
      width: 9,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY830-01.jpgpack4_958f51da-02b3-4e89-ac7c-a3d5b937e98e.jpg?v=1695646711",
      price: 1100,
      gram: 52000
    },
    {
      sizeR: 20,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.45",
      rimModel: "DY830-03",
      width: 9,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/IMG_4866.jpgpack4.jpg?v=1695048044",
      price: 1100,
      gram: 52000
    },
    {
      sizeR: 20,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.45",
      rimModel: "DY800-04",
      width: 9,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY800-04.jpgpack4.jpg?v=1695048104",
      price: 1100,
      gram: 52000
    },
    {
      sizeR: 17,
      studHoles: 5,
      pcd: 112,
      centerBore: "57.1",
      rimModel: "B5329",
      width: 7,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY227-04.jpgpack4.jpg?v=1695048171",
      price: 700,
      gram: 42000
    },
    {
      sizeR: 17,
      studHoles: 5,
      pcd: 112,
      centerBore: "57.1",
      rimModel: "DY237-02",
      width: 7,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY237-02.jpgpack4.jpg?v=1695048253",
      price: 700,
      gram: 42000
    },
    {
      sizeR: 17,
      studHoles: 5,
      pcd: 100,
      centerBore: "57.1",
      rimModel: "DY237-01",
      width: 7,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY237-02.jpgpack4.jpg?v=1695048253",
      price: 700,
      gram: 42000
    },
    {
      sizeR: 18,
      studHoles: 5,
      pcd: 112,
      centerBore: "57.1",
      rimModel: "DY968-02",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY968-02.pngpack4.png?v=1695385484",
      price: 750,
      gram: 50000
    },
    {
      sizeR: 18,
      studHoles: 5,
      pcd: 112,
      centerBore: "66.6",
      rimModel: "DY418-11",
      width: 7,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY418-11.jpgpack4.jpg?v=1695048323",
      price: 650,
      gram: 50000
    },
    {
      sizeR: 18,
      studHoles: 5,
      pcd: 112,
      centerBore: "57.1",
      rimModel: "DY968-06",
      width: 8,
      color: "test",
      description: "description",
      imageUrl: "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY968-06.jpgpack4.jpg?v=1695385534",
      price: 750,
      gram: 50000
    }];

  const tireArray = [
    {
      tireWidth: 215,
      tireAspectRatio: 40,
      rimDiameter: 18,
      marka: "SUPERIA",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 215,
      tireAspectRatio: 40,
      rimDiameter: 18,
      marka: "MINERVA",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 215,
      tireAspectRatio: 50,
      rimDiameter: 18,
      marka: "MINERVA",
      stock: 8,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 215,
      tireAspectRatio: 55,
      rimDiameter: 18,
      marka: "MINERVA",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 225,
      tireAspectRatio: 35,
      rimDiameter: 18,
      marka: "MINERVA",
      stock: 8,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 225,
      tireAspectRatio: 40,
      rimDiameter: 18,
      marka: "PIRELLI Cinturato P7",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 225,
      tireAspectRatio: 40,
      rimDiameter: 18,
      marka: "FORTUNA 4S",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 225,
      tireAspectRatio: 40,
      rimDiameter: 18,
      marka: "WESTLAKE 4s",
      stock: 8,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 225,
      tireAspectRatio: 40,
      rimDiameter: 18,
      marka: "SUPERIA",
      stock: 14,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 225,
      tireAspectRatio: 40,
      rimDiameter: 18,
      marka: "SUPERIA STAR+",
      stock: 5,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 225,
      tireAspectRatio: 40,
      rimDiameter: 18,
      marka: "SUPERIA 4s",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 225,
      tireAspectRatio: 40,
      rimDiameter: 18,
      marka: "HANKOOK Ventus Prime3 K125",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 225,
      tireAspectRatio: 45,
      rimDiameter: 18,
      marka: "SUPERIA ",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 225,
      tireAspectRatio: 45,
      rimDiameter: 18,
      marka: "WESTLAKE 4s",
      stock: 6,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 225,
      tireAspectRatio: 45,
      rimDiameter: 18,
      marka: "HANKOOK",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 225,
      tireAspectRatio: 45,
      rimDiameter: 18,
      marka: "GOODRIDE GR20998",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 225,
      tireAspectRatio: 50,
      rimDiameter: 18,
      marka: "SUPERIA",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 225,
      tireAspectRatio: 55,
      rimDiameter: 18,
      marka: "DURATURN DN276",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 235,
      tireAspectRatio: 40,
      rimDiameter: 18,
      marka: "MINERVA",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 235,
      tireAspectRatio: 40,
      rimDiameter: 18,
      marka: "SUPERIA STAR+",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 235,
      tireAspectRatio: 45,
      rimDiameter: 18,
      marka: "WESTLAKE Z-107",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 235,
      tireAspectRatio: 45,
      rimDiameter: 18,
      marka: "SUPERIA STAR+",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 235,
      tireAspectRatio: 50,
      rimDiameter: 18,
      marka: "MINERVA",
      stock: 5,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 235,
      tireAspectRatio: 50,
      rimDiameter: 18,
      marka: "SUPERIA UHP2",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 235,
      tireAspectRatio: 55,
      rimDiameter: 18,
      marka: "IMPERIAL",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 235,
      tireAspectRatio: 55,
      rimDiameter: 18,
      marka: "MINERVA",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 35,
      rimDiameter: 18,
      marka: "SUPERIA",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 35,
      rimDiameter: 18,
      marka: "MINERVA",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 40,
      rimDiameter: 18,
      marka: "WEST LAKE 4s",
      stock: 6,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 40,
      rimDiameter: 18,
      marka: "FORTUNA",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 40,
      rimDiameter: 18,
      marka: "MINERVA",
      stock: 8,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 40,
      rimDiameter: 18,
      marka: "HANKOOK",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 45,
      rimDiameter: 18,
      marka: "SUPERIA",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 45,
      rimDiameter: 18,
      marka: "FORTUNA",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 45,
      rimDiameter: 18,
      marka: "HANKOOK",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 45,
      rimDiameter: 18,
      marka: "Pirelli P-Zero",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 35,
      rimDiameter: 18,
      marka: "SUPERIA",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 35,
      rimDiameter: 18,
      marka: "SUPERIA 4S",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 40,
      rimDiameter: 18,
      marka: "SUPERIA",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 45,
      rimDiameter: 18,
      marka: "HANKOOK Ventus S1 EVO3",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 45,
      rimDiameter: 18,
      marka: "GOODRIDE 4s",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 45,
      rimDiameter: 18,
      marka: "MINERVA",
      stock: 6,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 45,
      rimDiameter: 18,
      marka: "FORTUNA",
      stock: 12,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 265,
      tireAspectRatio: 35,
      rimDiameter: 18,
      marka: "MINERVA",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 265,
      tireAspectRatio: 35,
      rimDiameter: 18,
      marka: "FORTUNA",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 275,
      tireAspectRatio: 40,
      rimDiameter: 18,
      marka: "GRENLANDER",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 225,
      tireAspectRatio: 35,
      rimDiameter: 19,
      marka: "SUPERIA",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 225,
      tireAspectRatio: 35,
      rimDiameter: 19,
      marka: "FORTUNA",
      stock: 8,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 225,
      tireAspectRatio: 40,
      rimDiameter: 19,
      marka: "FORTUNA",
      stock: 6,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 225,
      tireAspectRatio: 40,
      rimDiameter: 19,
      marka: "IMPERIAL",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 225,
      tireAspectRatio: 40,
      rimDiameter: 19,
      marka: "MINERVA",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 225,
      tireAspectRatio: 45,
      rimDiameter: 19,
      marka: "FORTUNA",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 235,
      tireAspectRatio: 35,
      rimDiameter: 19,
      marka: "Pirelli P-Zero",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 235,
      tireAspectRatio: 35,
      rimDiameter: 19,
      marka: "FORTUNA",
      stock: 10,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 235,
      tireAspectRatio: 35,
      rimDiameter: 19,
      marka: "SUPERIA",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 235,
      tireAspectRatio: 35,
      rimDiameter: 19,
      marka: "SUPERIA 4s",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 235,
      tireAspectRatio: 35,
      rimDiameter: 19,
      marka: "UNIROYAL RainSport 5 ",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 235,
      tireAspectRatio: 40,
      rimDiameter: 19,
      marka: "FORTUNA",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 235,
      tireAspectRatio: 45,
      rimDiameter: 19,
      marka: "FORTUNA",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 235,
      tireAspectRatio: 50,
      rimDiameter: 19,
      marka: "FORTUNA",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 235,
      tireAspectRatio: 55,
      rimDiameter: 19,
      marka: "MINERVA",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 235,
      tireAspectRatio: 55,
      rimDiameter: 19,
      marka: "FORTUNA",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 30,
      rimDiameter: 19,
      marka: "KUMHO ECSTA PS71",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 35,
      rimDiameter: 19,
      marka: "FORTUNA",
      stock: 6,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 35,
      rimDiameter: 19,
      marka: "SUPERIA STAR+ ",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 35,
      rimDiameter: 19,
      marka: "SUPERIA ECOBLUE UHP2",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 35,
      rimDiameter: 19,
      marka: "SUPERIA 4S",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 40,
      rimDiameter: 19,
      marka: "WESTLAKE 4s",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 40,
      rimDiameter: 19,
      marka: "FORTUNA ",
      stock: 3,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 40,
      rimDiameter: 19,
      marka: "IMPERIAL ECOSPORT2",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 40,
      rimDiameter: 19,
      marka: "SUPERIA STAR+",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 40,
      rimDiameter: 19,
      marka: "PIRELLI P-Zero",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 45,
      rimDiameter: 19,
      marka: "WANLI",
      stock: 16,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 45,
      rimDiameter: 19,
      marka: "FORTUNA 4s",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 30,
      rimDiameter: 19,
      marka: "FIREMAX",
      stock: 6,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 30,
      rimDiameter: 19,
      marka: "IMPERIAL",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 35,
      rimDiameter: 19,
      marka: "SUPERIA 4S",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 35,
      rimDiameter: 19,
      marka: "WESTLAKE 4S Z-507",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 35,
      rimDiameter: 19,
      marka: "SUPERIA",
      stock: 17,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 35,
      rimDiameter: 19,
      marka: "FIREMAX",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 35,
      rimDiameter: 19,
      marka: "BRIDGESTONE",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 40,
      rimDiameter: 19,
      marka: "SUPERIA",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 45,
      rimDiameter: 19,
      marka: "SUPERIA",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 50,
      rimDiameter: 19,
      marka: "MINERVA EcoSpeed2 SUV",
      stock: 6,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 265,
      tireAspectRatio: 30,
      rimDiameter: 19,
      marka: "FORTUNA",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 275,
      tireAspectRatio: 30,
      rimDiameter: 19,
      marka: "IMPERIAL",
      stock: 6,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 275,
      tireAspectRatio: 30,
      rimDiameter: 19,
      marka: "GOODRIDE",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 275,
      tireAspectRatio: 35,
      rimDiameter: 19,
      marka: "MINERVA 4S",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 275,
      tireAspectRatio: 35,
      rimDiameter: 19,
      marka: "SUPERIA ECOBLUE UHP2",
      stock: 6,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 275,
      tireAspectRatio: 35,
      rimDiameter: 19,
      marka: "MINERVA",
      stock: 6,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 275,
      tireAspectRatio: 35,
      rimDiameter: 19,
      marka: "PIRELLI P-Zero",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 275,
      tireAspectRatio: 40,
      rimDiameter: 19,
      marka: "SUPERIA UHP2",
      stock: 6,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 275,
      tireAspectRatio: 40,
      rimDiameter: 19,
      marka: "FORTUNA",
      stock: 6,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 285,
      tireAspectRatio: 45,
      rimDiameter: 19,
      marka: "MINERVA",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 35,
      rimDiameter: 20,
      marka: "IMPERIAL ECOSPORT2",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 35,
      rimDiameter: 20,
      marka: "WESTLAKE",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 45,
      rimDiameter: 20,
      marka: "FORTUNA",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 45,
      rimDiameter: 20,
      marka: "IMPERIAL",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 245,
      tireAspectRatio: 45,
      rimDiameter: 20,
      marka: "MINERVA",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 30,
      rimDiameter: 20,
      marka: "TRIANGLE Sportex",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 30,
      rimDiameter: 20,
      marka: "SUPERIA",
      stock: 1,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 35,
      rimDiameter: 20,
      marka: "SUPERIA",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 35,
      rimDiameter: 20,
      marka: "IMPERIAL",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 40,
      rimDiameter: 20,
      marka: "TRACMAX",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 40,
      rimDiameter: 20,
      marka: "PIRELLI P-Zero",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 45,
      rimDiameter: 20,
      marka: "IMPERIAL",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 45,
      rimDiameter: 20,
      marka: "CONTINENTAL",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 55,
      rimDiameter: 20,
      marka: "IMPERIAL",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 255,
      tireAspectRatio: 55,
      rimDiameter: 20,
      marka: "MINERVA ECOSPEED2 SUV",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 275,
      tireAspectRatio: 35,
      rimDiameter: 20,
      marka: "MINERVA",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 275,
      tireAspectRatio: 40,
      rimDiameter: 20,
      marka: "FORTUNA",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 275,
      tireAspectRatio: 40,
      rimDiameter: 20,
      marka: "BRIDGESTON RFT",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 275,
      tireAspectRatio: 45,
      rimDiameter: 20,
      marka: "IMPERIAL",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 315,
      tireAspectRatio: 35,
      rimDiameter: 20,
      marka: "IMPERIAL",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 315,
      tireAspectRatio: 35,
      rimDiameter: 20,
      marka: "MINERVA ECOSPEED2 SUV",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 275,
      tireAspectRatio: 40,
      rimDiameter: 21,
      marka: "MINERVA",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 275,
      tireAspectRatio: 45,
      rimDiameter: 21,
      marka: "MINERVA",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 285,
      tireAspectRatio: 30,
      rimDiameter: 20,
      marka: "GRENLANDER",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 285,
      tireAspectRatio: 35,
      rimDiameter: 21,
      marka: "ROADX",
      stock: 3,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 285,
      tireAspectRatio: 40,
      rimDiameter: 21,
      marka: "MINERVA",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 295,
      tireAspectRatio: 35,
      rimDiameter: 21,
      marka: "MINERVA",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 315,
      tireAspectRatio: 35,
      rimDiameter: 21,
      marka: "IMPERIAL",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 315,
      tireAspectRatio: 40,
      rimDiameter: 21,
      marka: "GOODRIDE",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 325,
      tireAspectRatio: 30,
      rimDiameter: 21,
      marka: "ROADX",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 275,
      tireAspectRatio: 40,
      rimDiameter: 22,
      marka: "IMPERIAL",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }, {
      tireWidth: 275,
      tireAspectRatio: 40,
      rimDiameter: 22,
      marka: "MINERVA",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp"
    }]
  rimsSeedData.map(async (item) => {
    await prisma.rims.create({
      data: item
    })
  })

  tireArray.map(async (item) => {
    await prisma.tire.create({
      data: item
    })
  })


}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })