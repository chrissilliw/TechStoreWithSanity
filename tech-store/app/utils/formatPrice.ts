// Formats price with a space for thousands
export const formatPrice = (price: number): string => {
    return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };