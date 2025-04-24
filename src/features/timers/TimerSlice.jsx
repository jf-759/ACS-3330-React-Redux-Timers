import { createSlice } from "@reduxjs/toolkit"
import { createTimer } from "./createTimer"

const timerSlice = createSlice({
    name: "timers",
    initialState: [],
    reducers: {
        addTimer: (state, action) => {
            state.push(createTimer(action.payload))
        },
        pauseTimer: (state, action) => {
            const timer = state.find(t => t.id === action.payload)
            if (timer && timer.isRunning) {
                timer.elapsed += Date.now() - timer.startTime
                timer.isRunning = false;
            }
        },
        resumeTimer: (state, action) => {
            const timer = state.find(t => t.id === action.payload)
            if (timer && !timer.isRunning) {
                timer.startTime = Date.now()
                timer.isRunning = true
            }
        },
        resetTimer: (state, action) => {
            const timer = state.find(t => t.id === action.payload)
            if (timer) {
                timer.elapsed = 0
                timer.startTime = Date.now()
                timer.isRunning = false
            }
        },

        removeTimer: (state, action) => {
            const timer = state.findIndex(t => t.id === action.payload)
            if (timer !== -1 && !state[timer].isRunning) {
                state.splice(timer, 1)
            }
        },
        renameTimer: (state, action) => {
            const { id, newName } = action.payload
            const timer = state.find((t) => t.id === id)
            if (timer) {
                timer.name = newName
            }
        }
    }
})

export const { addTimer, pauseTimer, resumeTimer, resetTimer, removeTimer, renameTimer } = timerSlice.actions
export default timerSlice.reducer