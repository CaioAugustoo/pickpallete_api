const successfullRequestData = <T>(data: T) => {
  return { ok: true, error: null, message: null, data };
};

export { successfullRequestData };
