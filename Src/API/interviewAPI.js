import axios from 'axios';

export const getAPIData = async () => {
    try {
      const response = await axios.get(`http://universities.hipolabs.com/search?country=United+States`);
      return response || [];
    } catch (error) {
      console.log(error);
    }
  };

