export const GET_USER_INPUT = 'GET_USER_INPUT';

export const getuserInput = (values) => {
  return {
    type: GET_USER_INPUT,
    values:values
  }
}