const colors = (color) => {
    switch (color) {
      case 'cinzaclaro':
        return '#e0e0e0';
      case 'cinzaescuro':
        return '#2D3839';
      case 'verdeclaro':
        return '#6E9987';
      case 'verdeescuro':
        return '#114D4D';
      case 'preto':
        return '#131111';
      case 'branco':
        return '#F5F5F5';
      default:
        return color;
    }
  };
  
  export default colors;