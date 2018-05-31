const initialState = {
  hello: 'World',
  test: false,
};

export default (state=initialState, action) => {
  switch(action.type){
    default: return state;
  }
}