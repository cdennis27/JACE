const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Signature Dishes' },
    { name: 'Eggs Benedict' },
    { name: 'Pancake Dishes' },
    { name: 'Beverages' },
    { name: 'Add-Ons' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Steak & Eggs",
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'NEW-YORK-STRIPLOIN-n-EGGS.jpg',
      category: categories[0]._id,
      price: 15.99,
      quantity: 500
    },
    {
      name: "Big Breakfast",
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'ES-EGGSMART-BIG-BREAKFAST.jpg',
      category: categories[0]._id,
      price: 11.99,
      quantity: 500
    },
    {
      name: "Classic Breakfast",
      category: categories[0]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'Classic-Breakfast.jpg',
      price: 9.99,
      quantity: 20
    },
    {
      name: "Keto Breakfast",
      category: categories[0]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'KETO-BREAKFAST-PLATE.jpg',
      price: 13.99,
      quantity: 50
    },
    {
      name: "Signature Hash",
      category: categories[0]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'SIGNATURE-HASH.jpg',
      price: 10.99,
      quantity: 100
    },
    {
      name: "Tri-Fecta",
      category: categories[0]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'TRI-FECTA.jpg',
      price: 13.99,
      quantity: 30
    },
    {
      name: "Eggs Benedict",
      category: categories[1]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'EGGS-BENEDICT.jpg',
      price: 11.49,
      quantity: 30
    },
    {
      name: "Baja Benedict",
      category: categories[1]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'BAJA.jpg',
      price: 11.49,
      quantity: 100
    },
    {
      name: "Meat Lovers Benedict",
      category: categories[1]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'ES-EGGS-BENNIE_MEAT-LOVERS.jpg',
      price: 12.49,
      quantity: 1000
    },
    {
      name: "Eggs Florentine Benedict",
      category: categories[1]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'EGGS-FLORENTINE.jpg',
      price: 11.49,
      quantity: 1000
    },
    {
      name: "Traditional Buttermilk Pancakes",
      category: categories[2]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'TRADITIONAL-BUTTERMILK-PANCAKES.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: "Chocolate Chip Pancakes",
      category: categories[2]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'CHOCO-CHIP-PANCAKES.jpg',
      price: 10.49,
      quantity: 600
    },
    {
      name: "Strawberry Banana Pancakes",
      category: categories[2]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'STRAWBERRY-BANANA-PANCAKES.jpg',
      price: 10.49,
      quantity: 600
    },
    {
      name: "Very Blueberry Pancakes",
      category: categories[2]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'ES-BLUEBERRY-PANCAKES-1024x683.jpg',
      price: 10.49,
      quantity: 600
    },
    {
      name: "Skyscraper Pancake",
      category: categories[2]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'ES-SKYSCRAPER_PANCAKES.jpg',
      price: 12.39,
      quantity: 600
    },
    {
      name: "Going Green Smoothie",
      category: categories[3]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'green-smoothie-1024x683.jpg',
      price: 5.99,
      quantity: 600
    },
    {
      name: "MMMMango Smoothie",
      category: categories[3]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'Mango-1024x683.jpg',
      price: 5.99,
      quantity: 600
    },
    {
      name: "Winning! Smoothie",
      category: categories[3]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'winning-smoothie-1024x683.jpg',
      price: 5.99,
      quantity: 600
    },
    {
      name: "Strawberry Banana Smoothie",
      category: categories[3]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'strawberry-banana-smoothie-1024x683.jpg',
      price: 5.99,
      quantity: 600
    },
    {
      name: "Signature Coffee",
      category: categories[3]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'ES-COFFEE-1.jpg',
      price: 3.29,
      quantity: 600
    },
    {
      name: "Iced Coffee",
      category: categories[3]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'Iced-Coffee-1024x683.jpg',
      price: 3.89,
      quantity: 600
    },
    {
      name: "Side of Fruit",
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 3.99,
      quantity: 600
    },
    {
      name: "Extra toast",
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 1.99,
      quantity: 600
    },

  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
