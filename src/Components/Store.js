import { create } from 'zustand'
import axios from 'axios'

const useStore = create((set) => ({
data: {},
setData: (data) => set({ data }),

location: '',
setLocation: (location) => set({location}),

munits: false,
setMunits: (munits) => set({munits}),

urlM: 'metric',
setUrlm: (urlM) => set({urlM}),

toggleUnits: () => set((state) =>(state.urlM === 'metric'
 ? state.setUrlm('imperial') : state.setUrlm('metric'))),

// eslint-disable-next-line no-restricted-globals, no-undef
url: `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7661508e301be410c0c9f630604f8b6a&units=${urlM}`,


// searchLocation: () => set((event) => {
//     axios.get(url).then((response) => {
//     setData(response.data)
//   })}),
}))

export default useStore