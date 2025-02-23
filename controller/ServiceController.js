const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  ServiceController: {
    create: async (req, res) => {
      try {
        await prisma.service.create({
          data: {
            name: req.body.name,
            price: req.body.price,
            remark: req.body.remark,
            payDate: new Date(),
          },
        });

        res.json({ message: "success" });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
  },
};
