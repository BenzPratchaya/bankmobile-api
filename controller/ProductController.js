const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  ProductController: {
    create: async (req, res) => {
      try {
        await prisma.product.create({
          data: {
            release: req.body.release,
            name: req.body.name,
            color: req.body.color,
            price: req.body.price,
            customerName: req.body.customerName,
            customerPhone: req.body.customerPhone,
            customerAddress: req.body.customerAddress,
            remark: req.body.remark ?? "",
            serial: req.body.serial ?? "",
          },
        });
        res.json({ message: "success" });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    list: async (req, res) => {
      try {
        const products = await prisma.product.findMany({
          orderBy: {
            id: "desc",
          },
          where: {
            status: {
              not: "delete",
            },
          },
        });
        res.json(products);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    update: async (req, res) => {
      try {
        await prisma.product.update({
          where: { id: req.params.id },
          data: req.body,
        });
        res.json({ message: "success" });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    remove: async (req, res) => {
      try {
        await prisma.product.update({
          where: { id: req.params.id },
          data: { status: "delete" },
        });
        res.json({ message: "success" });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
  },
};
