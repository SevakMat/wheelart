import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const rimsSeedData = [
    {
      sizeR: 18,
      studHoles: 5,
      pcd: 112,
      centerBore: 66.6,
      rimModel: "DY418-11",
      width: 7,
      color: "test",
      description: "description",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY418-11.jpg?v=1683902185;https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY418-11v2.webp?v=1683902181",
      price: 650,
      gram: 50000,
      score: 1,
      stock: 20,
    },
    {
      sizeR: 18,
      studHoles: 5,
      pcd: 112,
      centerBore: 57.1,
      rimModel: "DY968-06",
      width: 8,
      color: "test",
      description: "description",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0552/5294/2905/files/DY968-06.jpg?v=1681809659;undefined",
      price: 750,
      gram: 50000,
      score: 5,
      stock: 20,
    },
  ];

  const tireArray = [
    {
      tireWidth: 215,
      tireAspectRatio: 40,
      rimDiameter: 18,
      marka: "SUPERIA",
      stock: 4,
      imageUrl: "https://s.list.am/r/542/60912542.webp",
    },
    {
      tireWidth: 215,
      tireAspectRatio: 40,
      rimDiameter: 18,
      marka: "MINERVA",
      stock: 2,
      imageUrl: "https://s.list.am/r/542/60912542.webp",
    },
  ];

  const users = [
    {
      email: "testEmail@gmial.com",
      name: "Name",
      password: "Pass",
      passwordResetAt: new Date(),
      passwordResetToken: "asadasdoumdc9hj9",
      role: "user",
      verified: true,
      updatedAt: new Date(),
      createdAt: new Date(),
    },
  ];
  rimsSeedData.map(async (item) => {
    await prisma.rims.create({
      data: item,
    });
  });

  tireArray.map(async (item) => {
    await prisma.tire.create({
      data: { ...item, price: 100 },
    });
  });
  const hashedPassword = await bcrypt.hash("wheeladminart", 12);

  await prisma.user.create({
    data: {
      firstName: "Admin",
      lastName: "Admin",
      email: "admin.admin@admin.com",
      phoneNumber: "+1234567890",
      password: hashedPassword,
      role: "admin",
      emailVerified: true,
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
