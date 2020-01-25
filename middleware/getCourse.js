export default function({ store, params }) {
  return store.dispatch("GET_COURSE", params.id);
}
