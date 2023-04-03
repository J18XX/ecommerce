const router = require('express').Router();
const { Category, Product } = require('../../models');

// // The `/api/categories` endpoint
// // 1st way
// router.get('/', (req, res) => {
//   // find all categories
//   Category.findAll({
//     include: {
//   // be sure to include its associated Products
//       model: Product,
//       attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
//     }
//   })
//     .then(dbCategoryData => {
//       if(!dbCategoryData) {
//         res.status(404).json({message: 'Not Found'});
//         return;
//       }
//       res.json(dbCategoryData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err)
//     });
// });

// // 2nd way
// router.get('/', async (req, res) => {
//   try {
//     const categoryData = await Category.findAll();
//     res.status(200).json(categoryData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
