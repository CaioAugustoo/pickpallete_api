const getPaginationPage = (pageFromQuery: string | number = 1, howManyItemsShouldBeListed = 20) => {
  const skip = (Number(pageFromQuery) - 1) * howManyItemsShouldBeListed;

  return {
    skip,
    take: howManyItemsShouldBeListed,
  };
};

export { getPaginationPage };
