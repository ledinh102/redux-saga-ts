import { PayloadAction } from "@reduxjs/toolkit"
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects"
import { increment, incrementSaga, incrementSagaSuccess } from "./counterSlice"

// export function* log(action: PayloadAction) {
//   console.log("Log", action)
//   yield 1
// }

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log("Waiting 1s")
  yield delay(1000)
  console.log("Waiting done, dispatch action")
  yield put(incrementSagaSuccess(action.payload))
}

export default function* counterSaga() {
  console.log("counter saga")

  yield takeEvery(incrementSaga.toString(), handleIncrementSaga)
  // yield takeLatest(incrementSaga.toString(), handleIncrementSaga)
}
