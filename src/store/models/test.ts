export default {
  state: {
    testNum: 1,
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state, payload) {
      console.log('state', state)
      console.log('payload', payload)
      state.testNum += payload
      return state
    },
    decrement(state, payload) {
      console.log('state', state)
      console.log('payload', payload)
      state.testNum -= payload
      return state
    }
  },
  effects: dispatch => ({
    addOne() {
      dispatch.test.increment(1)
    },
    async minusOne() {
      // const xxx = await xxxx
      dispatch.test.decrement(1)
    },
  })
}
