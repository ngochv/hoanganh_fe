export const isResponseSuccess = (response: any) => {
  const { status, success } = response;
  if (status == 200 || status == 201 && success) {
      return true;
  }
  return false;
};
