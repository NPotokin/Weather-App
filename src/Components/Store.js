import { create } from 'zustand'




const useStore = create( (set) => ({
    
data: {},
setData: (data) => set({ data: data }),
    
dataForecast: {},
setDataForecast: (dataForecast) => set({ dataForecast: dataForecast }),
    
location: '',
setLocation: (location) => set({location: location}),

unitsC: true,
setUnitsC: (unitsC) => set({unitsC: unitsC}),
toggleUnits: () => set((state) => ({unitsC: !state.unitsC })),

 }))

export default useStore



