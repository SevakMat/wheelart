import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const rimsSeedData = [
    {
      "sizeR": 18,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "DY988-01",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY989-01_02.png?v=1665673277;undefined",
      "price": 750,
      "gram": 50000,
      "score": 1
    },
    {
      "sizeR": 18,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "inexC507BG",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/IMG_6064.png?v=1677601719;undefined",
      "price": 750,
      "gram": 50000,
      "score": 2
    },
    {
      "sizeR": 18,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "A397-03",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A397-03.jpg?v=1690279221;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A397-03_3.jpg?v=1690279221",
      "price": 850,
      "gram": 52000,
      "score": 1
    },
    {
      "sizeR": 18,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "A397-02",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A360-07.jpg?v=1681809659;undefined",
      "price": 850,
      "gram": 52000,
      "score": 0
    },
    {
      "sizeR": 18,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "DY138-09",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY138-09.jpg?v=1689409343;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY138-09v2.jpg?v=1689409343",
      "price": 650,
      "gram": 50000,
      "score": 3
    },
    {
      "sizeR": 18,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "DY138-03",
      "width": 7,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY138-03.png?v=1665673274;undefined",
      "price": 750,
      "gram": 50000,
      "score": 3
    },
    {
      "sizeR": 18,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "A223-02",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A223-02.jpg?v=1686664412;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A223-02v2.jpg?v=1686664412",
      "price": 600,
      "gram": 52000,
      "score": 3
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "B1558-19",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/B1558-19v1.jpg?v=1683642350;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/B1558-19v3.jpg?v=1683642350",
      "price": 850,
      "gram": 52000,
      "score": 3
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "B5252-19",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/B5252-19.jpg?v=1683642350;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/B5252-19v2.jpg?v=1683642350",
      "price": 850,
      "gram": 52000,
      "score": 1
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "A360-05",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A360-05.png?v=1670662148;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/IMG_4132.jpg?v=1680170302",
      "price": 950,
      "gram": 52000,
      "score": 5
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "XFE69",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/XFE6919.jpg?v=1697017006;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/XFE6919v2.jpg?v=1697017005",
      "price": 950,
      "gram": 52000,
      "score": 2
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "DY989-01/02",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY989-01_02.png?v=1665673277;undefined",
      "price": 850,
      "gram": 52000,
      "score": 0
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "A212/A213",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A212_213-01.png?v=1665673277;undefined",
      "price": 850,
      "gram": 52000,
      "score": 2
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "DY989-05/06",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY988-07.png?v=1665673277;undefined",
      "price": 850,
      "gram": 52000,
      "score": 4
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "A330-01",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A330-01.jpg?v=1681809659;undefined",
      "price": 800,
      "gram": 52000,
      "score": 0
    },
    {
      "sizeR": 20,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "DYS10034-01",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/BY1464v2.jpg?v=1686220076;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/BY1464v1.jpg?v=1686220076",
      "price": 1250,
      "gram": 52000,
      "score": 3
    },
    {
      "sizeR": 20,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "BY1464",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/BY1464v2.jpg?v=1686220076;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/BY1464v1.jpg?v=1686220076",
      "price": 1300,
      "gram": 52000,
      "score": 4
    },
    {
      "sizeR": 20,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "A1017-21/22\n",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A1017v1v.jpg?v=1681810194;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A10173v2.jpg?v=1681810102",
      "price": 1100,
      "gram": 62000,
      "score": 2
    },
    {
      "sizeR": 20,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "A326-01/327-01",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A326-01_327-01.png?v=1670662079;undefined",
      "price": 1300,
      "gram": 52000,
      "score": 5
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "DY139-01",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY138-03.png?v=1665673273;undefined",
      "price": 850,
      "gram": 52000,
      "score": 2
    },
    {
      "sizeR": 20,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "A1017-13/14",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/jante_baton.png?v=1679414078;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/IMG_6862.jpg?v=1679414094",
      "price": 1100,
      "gram": 52000,
      "score": 1
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "A1017",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A1017.png?v=1665673279;undefined",
      "price": 850,
      "gram": 52000,
      "score": 1
    },
    {
      "sizeR": 18,
      "studHoles": 5,
      "pcd": 120,
      "centerBore": "72.6",
      "rimModel": "Morgan18BLM",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Morgan19BLM.jpg?v=1686045156;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Morgan19BLMv2.jpg?v=1686045156",
      "price": 750,
      "gram": 50000,
      "score": 4
    },
    {
      "sizeR": 18,
      "studHoles": 5,
      "pcd": 120,
      "centerBore": "72.6",
      "rimModel": "DY718-01",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY718-01.png?v=1665673274;undefined",
      "price": 750,
      "gram": 50000,
      "score": 2
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.56",
      "rimModel": "O11-03/04",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/O11-0304.jpg?v=1683902185;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/O11-0304v2.jpg?v=1683902184",
      "price": 750,
      "gram": 52000,
      "score": 5
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 120,
      "centerBore": "72.6",
      "rimModel": "160/161-03",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/160_161-03.png?v=1665673278;undefined",
      "price": 900,
      "gram": 52000,
      "score": 0
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "A194/195-02",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A194195-02.jpg?v=1686664412;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A194195-02v2.jpg?v=1686664411",
      "price": 850,
      "gram": 52000,
      "score": 1
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 120,
      "centerBore": "72.6",
      "rimModel": "160/161-01",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/160-161-01_d6006fae-8ff5-4a6a-8add-8209cd9b1e91.jpg?v=1697880452;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/IMG_E2071.jpg?v=1697880451",
      "price": 900,
      "gram": 52000,
      "score": 4
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 120,
      "centerBore": "72.6",
      "rimModel": "160/161-02",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/IMG_5699.png?v=1675768292;undefined",
      "price": 900,
      "gram": 52000,
      "score": 4
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 120,
      "centerBore": "74.1",
      "rimModel": "Spit192024",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/BK273.png?v=1678899344;undefined",
      "price": 900,
      "gram": 52000,
      "score": 0
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 120,
      "centerBore": "72.6",
      "rimModel": "DY719-05/06",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY719-0506.png?v=1665673275;undefined",
      "price": 850,
      "gram": 52000,
      "score": 2
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 120,
      "centerBore": "72.6",
      "rimModel": "A318/319-23",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/IMG_6362.png?v=1678294565;undefined",
      "price": 800,
      "gram": 52000,
      "score": 1
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "A338/339-01",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A338_339-04.png?v=1665673278;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/IMG_E2134.png?v=1680169405",
      "price": 850,
      "gram": 52000,
      "score": 0
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "73.1",
      "rimModel": "ARC19177-01/02",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/ARC19177-0102.jpg?v=1681809658;undefined",
      "price": 900,
      "gram": 52000,
      "score": 1
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.56",
      "rimModel": "O10-03/04",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/O10-0304.jpg?v=1683902184;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/O10-0304v2.jpg?v=1683902183",
      "price": 850,
      "gram": 52000,
      "score": 3
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 120,
      "centerBore": "72.6",
      "rimModel": "Flex19BLM",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Flex19BLM.jpg?v=1686045224;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Flex19BLMv2.jpg?v=1686045224",
      "price": 850,
      "gram": 50000,
      "score": 3
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 120,
      "centerBore": "72.6",
      "rimModel": "DY929-04/10",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Rubin_59407_08.png?v=1666103344;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Rubin_59407_083.png?v=1680164025",
      "price": 850,
      "gram": 52000,
      "score": 0
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "A338/339-03",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A338_339-06.png?v=1665673277;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/IMG_E2149.png?v=1680605472",
      "price": 850,
      "gram": 52000,
      "score": 5
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "A196/197-02",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A196_197-02.png?v=1665673275;undefined",
      "price": 850,
      "gram": 52000,
      "score": 3
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "H5080-19",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/H5080-19.jpg?v=1683296108;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/H5080-19v2.jpg?v=1683296108",
      "price": 900,
      "gram": 52000,
      "score": 2
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "A189/190-02",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A189_190-02.png?v=1665673274;undefined",
      "price": 850,
      "gram": 52000,
      "score": 3
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "Omi19511223",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Omi19512030.png?v=1680605091;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Omi19512030v2.png?v=1680605091",
      "price": 900,
      "gram": 52000,
      "score": 4
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 120,
      "centerBore": "72.6",
      "rimModel": "Omi19512030",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Omi19512030.png?v=1680605091;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Omi19512030v2.png?v=1680605091",
      "price": 900,
      "gram": 52000,
      "score": 1
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 120,
      "centerBore": "72.6",
      "rimModel": "ARC19193-71/72",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/ARC19193-7172.jpg?v=1681809659;undefined",
      "price": 900,
      "gram": 52000,
      "score": 4
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "DY929-01/07",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Rubin_59407_08.png?v=1666103344;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Rubin_59407_083.png?v=1680164025",
      "price": 850,
      "gram": 52000,
      "score": 0
    },
    {
      "sizeR": 20,
      "studHoles": 5,
      "pcd": 120,
      "centerBore": "74.1",
      "rimModel": "AnomalyBMX6",
      "width": 9,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/AnomalyBMX6.png?v=1673872442;undefined",
      "price": 1100,
      "gram": 52000,
      "score": 5
    },
    {
      "sizeR": 21,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "A342/343-03",
      "width": 9,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A342343-03.jpg?v=1683902184;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A342343-03v2.jpg?v=1683902184",
      "price": 1200,
      "gram": 62000,
      "score": 3
    },
    {
      "sizeR": 21,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "A342/343-01",
      "width": 9,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/IMG_4160.png?v=1670662325;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/IMG_4161.jpg?v=1680169911",
      "price": 1200,
      "gram": 62000,
      "score": 3
    },
    {
      "sizeR": 18,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.45",
      "rimModel": "Game18BFP5112",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Game18BFP5112.png?v=1680796623;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Game18BFP5112v2.jpg?v=1680796623",
      "price": 750,
      "gram": 50000,
      "score": 2
    },
    {
      "sizeR": 20,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.45",
      "rimModel": "A277-03",
      "width": 9,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A277_62796b47-cbc8-47c6-92bd-d97075d25d81.jpg?v=1690359293;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A277v2.jpg?v=1690359293",
      "price": 1100,
      "gram": 52000,
      "score": 5
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.45",
      "rimModel": "DY739-06",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY739-05.png?v=1665673276;undefined",
      "price": 850,
      "gram": 52000,
      "score": 0
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.45",
      "rimModel": "DY1109-02",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY1109-02.jpg?v=1689758640;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY1109-02v2.jpg?v=1689758641",
      "price": 850,
      "gram": 52000,
      "score": 3
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.45",
      "rimModel": "DY739-05",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY739-05.png?v=1665673276;undefined",
      "price": 850,
      "gram": 52000,
      "score": 0
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.45",
      "rimModel": "DY809-07",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY808-03.png?v=1672920891;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/808.png?v=1680169533",
      "price": 850,
      "gram": 52000,
      "score": 2
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "73.1",
      "rimModel": "A171-03",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A171-03.jpg?v=1681809659;undefined",
      "price": 850,
      "gram": 52000,
      "score": 3
    },
    {
      "sizeR": 20,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.45",
      "rimModel": "dy1268-01",
      "width": 9,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/dy1268-01.jpg?v=1683902184;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/dy1268-01v2.jpg?v=1683902184",
      "price": 1100,
      "gram": 52000,
      "score": 4
    },
    {
      "sizeR": 19,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.45",
      "rimModel": "Tor19664535",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Tor19664535.png?v=1680605091;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/Tor19664535v2.png?v=1680605091",
      "price": 850,
      "gram": 52000,
      "score": 4
    },
    {
      "sizeR": 20,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.45",
      "rimModel": "A277-06",
      "width": 9,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A277-06.png?v=1672920755;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A277-06v2.jpg?v=1680169832",
      "price": 1100,
      "gram": 52000,
      "score": 0
    },
    {
      "sizeR": 20,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.45",
      "rimModel": "A277-0335",
      "width": 9,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A277_62796b47-cbc8-47c6-92bd-d97075d25d81.jpg?v=1690359293;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/A277v2.jpg?v=1690359293",
      "price": 1100,
      "gram": 52000,
      "score": 5
    },
    {
      "sizeR": 20,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.45",
      "rimModel": "DY580-01",
      "width": 9,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY580.jpg?v=1690359294;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY580v2.jpg?v=1690359294",
      "price": 1100,
      "gram": 52000,
      "score": 1
    },
    {
      "sizeR": 20,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.45",
      "rimModel": "DY830-01",
      "width": 9,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY830-01.png?v=1676734596;undefined",
      "price": 1100,
      "gram": 52000,
      "score": 0
    },
    {
      "sizeR": 20,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.45",
      "rimModel": "DY830-03",
      "width": 9,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY830-06.png?v=1672920437;undefined",
      "price": 1100,
      "gram": 52000,
      "score": 1
    },
    {
      "sizeR": 20,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.45",
      "rimModel": "DY800-04",
      "width": 9,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY800-04.png?v=1665673277;undefined",
      "price": 1100,
      "gram": 52000,
      "score": 4
    },
    {
      "sizeR": 17,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "57.1",
      "rimModel": "B5329",
      "width": 7,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY227-04.png?v=1676734637;undefined",
      "price": 700,
      "gram": 42000,
      "score": 1
    },
    {
      "sizeR": 17,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "57.1",
      "rimModel": "DY237-02",
      "width": 7,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY237-02.jpg?v=1681812003;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/IMG_E1994.jpg?v=1681812002",
      "price": 700,
      "gram": 42000,
      "score": 2
    },
    {
      "sizeR": 17,
      "studHoles": 5,
      "pcd": 100,
      "centerBore": "57.1",
      "rimModel": "DY237-01",
      "width": 7,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY237-02.jpg?v=1681812003;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/IMG_E1994.jpg?v=1681812002",
      "price": 700,
      "gram": 42000,
      "score": 1
    },
    {
      "sizeR": 18,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "57.1",
      "rimModel": "DY968-02",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY968-02.png?v=1665673269;undefined",
      "price": 750,
      "gram": 50000,
      "score": 3
    },
    {
      "sizeR": 18,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "66.6",
      "rimModel": "DY418-11",
      "width": 7,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY418-11.jpg?v=1683902185;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY418-11v2.webp?v=1683902181",
      "price": 650,
      "gram": 50000,
      "score": 1
    },
    {
      "sizeR": 18,
      "studHoles": 5,
      "pcd": 112,
      "centerBore": "57.1",
      "rimModel": "DY968-06",
      "width": 8,
      "color": "test",
      "description": "description",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY968-06.jpg?v=1681809659;undefined",
      "price": 750,
      "gram": 50000,
      "score": 5
    }
  ];

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