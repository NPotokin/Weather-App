import { create } from 'zustand'




const useStore = create( (set) => ({
    
data: {},
setData: (data) => set({ data: data }),

location: '',
setLocation: (location) => set({location: location}),

unitsC: true,
setUnitsC: (unitsC) => set({unitsC: unitsC}),
toggleUnits: () => set((state) => ({unitsC: !state.unitsC })),

// eslint-disable-next-line no-restricted-globals
urlC: `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7661508e301be410c0c9f630604f8b6a&units=metric` ,
// eslint-disable-next-line no-restricted-globals
urlF: `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7661508e301be410c0c9f630604f8b6a&units=imperial`,



 }))

export default useStore



