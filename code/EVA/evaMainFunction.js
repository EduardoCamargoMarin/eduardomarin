
const mainAudio = document.getElementById('evaMainAudio')
const evaOnline = document.getElementById('evaOnline')
const meetAudio = document.getElementById('evaMeetAudio')
// EVA´s activation
evaOnline.addEventListener("load", () => {
    mainAudio.play()
})

//EVA welcome first meeting
evaOnline.addEventListener("click", () => {
    meetAudio.play()
})

//EVA Shutting down
const shutdownAudio = document.getElementById('shutdownAudio')
const evaAnswerShutDown = document.getElementById('shutdown')

evaAnswerShutDown.addEventListener("click", () => {
    shutdownAudio.play()
})

//Questions - Who are you?
const whoAmIAudio = document.getElementById('whoAmIAudio')
const evaAnswerWhoAmI = document.getElementById('whoAmI')

evaAnswerWhoAmI.addEventListener("click", () => {
    whoAmIAudio.play()
})

//Questions - Who is your creator?
const creatorAudio = document.getElementById('creatorAudio')
const evaAnswerCreator = document.getElementById('creator')

evaAnswerCreator.addEventListener("click", () => {
    creatorAudio.play()
})
//Questions - Website Tour
const tourAudio = document.getElementById('tourAudio')
const evaAnswerTour = document.getElementById('tour')

evaAnswerTour.addEventListener("click", () => {
    tourAudio.play()
})

const sisterAudio = document.getElementById('sisterAudio')
const evaAnswerSister = document.getElementById('sister')

evaAnswerSister.addEventListener("click", () => {
    sisterAudio.play()
})
