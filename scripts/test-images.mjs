const ids = [
  'photo-1576871337622-98d48d1cf531', // knitwear wool texture
  'photo-1539109136881-3be0616acf4b', // dramatic dark coat model
  'photo-1515886657613-9f3515b0c78f', // high fashion editorial model
  'photo-1584917865442-de89df76afd3', // wool fabric knit
  'photo-1620799140408-edc6dcb6d633', // chunky sweater
  'photo-1434389677669-e08b4cac3105', // knit texture
  'photo-1490481651871-ab68de25d43d', // high-fashion editorial pose
  'photo-1509631179647-0177331693ae', // dark street editorial
  'photo-1485230895905-ec40ba36b9bc', // dramatic fashion runway
  'photo-1529139574466-a303027c1d8b', // fashion street style
  'photo-1469334031218-e382a71b716b', // chic editorial
  'photo-1550614000-4895a10e1bfd', // high fashion coat
  'photo-1508427953056-b00b8d78ebf5', // dark menswear coat
];

async function check() {
  for (const id of ids) {
    try {
      const res = await fetch(`https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&q=80`, { method: 'HEAD' });
      console.log(id, res.status);
    } catch (e) {
      console.log(id, 'ERR', e.message);
    }
  }
}
check();
