export function createTimer(name = "Untitled Timer") {
    return {
        id: Date.now(),
        name,
        startTime: Date.now(),
        elapsed: 0,
        isRunning: true,
    }
}