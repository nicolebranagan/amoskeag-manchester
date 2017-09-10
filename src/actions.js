export const update = ({ dispatch }, e) => {
  dispatch('UPDATE', {title: e.title})
}