import counterSaga from "@/features/counter/counterSaga"
import { all } from "redux-saga/effects"

function* helloSaga() {
  console.log("hello saga")
}
export default function* rootSaga() {
  console.log("Root saga")
  yield all([helloSaga(), counterSaga()])
}
