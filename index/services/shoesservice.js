export class Service {
    getShoes = async () => {
      try {
        const res = await axios({
          url: 'https://shop.cyberlearn.vn/api/Product',
          method: 'GET',
        });
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };
    getShoesById = async (id) => {
      try {
        const res = await axios({
          url: `https://shop.cyberlearn.vn/api/Product/${id}`,
          method: 'GET',
        });
  
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };
  }