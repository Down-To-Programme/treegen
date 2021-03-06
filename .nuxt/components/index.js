export { default as DrawingBoard } from '../../components/DrawingBoard.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as ToDo } from '../../components/ToDo.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'

export const LazyDrawingBoard = import('../../components/DrawingBoard.vue' /* webpackChunkName: "components/DrawingBoard" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyToDo = import('../../components/ToDo.vue' /* webpackChunkName: "components/ToDo" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/VuetifyLogo" */).then(c => c.default || c)
