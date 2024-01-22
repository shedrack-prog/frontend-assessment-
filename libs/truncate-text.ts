// This function breaks the description if its too long
export const truncateText = (str: string, num: number) => {
  if (str.length < num) {
    return str;
  } else {
    str = str.substring(0, num) + '...';
    return str;
  }
};
