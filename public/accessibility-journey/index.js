const CLICKED_STATUS_ATTR = 'data-clicked'

// Setup functions
function cleanUpDialogs() {
    const dialogs = document.querySelectorAll('dialog')
    dialogs.forEach(function (dialog) {
        dialog.close()
    })
}

function cleanUpInfoBoxes() {
    const infoboxes = document.querySelectorAll('.infobox')
    infoboxes.forEach(function (ib) {
        closeInfobox(ib)
    })
}

function setupButtonsForDialogs() {
    const sectionToggles = document.querySelectorAll('button.section__toggle')
    sectionToggles.forEach(function (button) {
        button.onclick = buttonClickHandlerWithDialog
    })
}

function setupButtonsForInfoboxes() {
    const sectionToggles = document.querySelectorAll('button.section__toggle')
    sectionToggles.forEach(function (button) {
        button.onclick = buttonClickHandlerWithInfobox
    })
}

function handleMediaChange(mql) {
    if (mql.matches) {
        // desktop
        cleanUpDialogs()
        setupButtonsForInfoboxes()
    } else {
        // mobile
        cleanUpInfoBoxes()
        setupButtonsForDialogs()
    }
}

function setupMediaChangeHandler() {
    const mediaQueryList = window.matchMedia('(min-width: 700px)')
    handleMediaChange(mediaQueryList)
    mediaQueryList.addEventListener('change', handleMediaChange)
}

// Finder functions
function findSection(event) {
    return event.target.closest('.section')
}

function findInfobox(event) {
    const section = findSection(event)
    const infobox = section.querySelector('.infobox')
    return infobox
}

// Infobox functions
function showInfobox(infobox) {
    infobox.classList.remove('hidden')
    infobox.removeAttribute('aria-hidden')
}

function closeInfobox(infobox) {
    infobox.classList.add('hidden')
    infobox.setAttribute('aria-hidden', 'true')
}

function toggleInfobox(event) {
    const infobox = findInfobox(event)

    if (infobox.classList.contains('hidden')) {
        showInfobox(infobox)
        return
    }

    closeInfobox(infobox)
}

// Dialog functions
function showDialog(event) {
    const button = event.currentTarget
    const sectionContainer = button.closest('.section')
    const dialog = sectionContainer.querySelector('dialog')
    dialog.showModal()

    button.setAttribute(CLICKED_STATUS_ATTR, "true")
    window.addEventListener('click', dialogClickHandler)

    // clean up the click handler in case the dialog was closed
    dialog.addEventListener('close', function () {
        window.removeEventListener('click', dialogClickHandler)
    })
}

function closeDialog(dialog) {
    dialog.close()

    const toggleButton = dialog.parentNode.querySelector('.section__toggle')
    toggleButton.removeAttribute(CLICKED_STATUS_ATTR)
}

function closeDialogByEvent(event) {
    const dialog = event.target.closest('dialog')
    if (!dialog) {
        return
    }

    closeDialog(dialog)
}

function dialogClickHandler(event) {
    const dialog = event.target.closest('dialog')
    if (!dialog) {
        return
    }
    const dialogBox = dialog.querySelector('.info-dialog__content')

    const isClickInsideDialog = dialogBox.contains(event.target)

    if (!isClickInsideDialog) {
        closeDialog(dialog)
    }
}

function dialogCloseButtonClickHandler(event) {
    const closeButton = event.target
    const dialog = closeButton.closest('dialog')

    dialog.close()
}

function setupDialogCloseButtons() {
    const dialogCloseButtons = document.querySelectorAll('button.info-dialog__close')
    dialogCloseButtons.forEach(function (button) {
        button.onclick = closeDialogByEvent
    })
}

// Section button functions
function toggleClickedStatus(event) {
    const button = event.currentTarget
    button.toggleAttribute(CLICKED_STATUS_ATTR)
}

function buttonClickHandlerWithInfobox(event) {
    toggleClickedStatus(event)
    toggleInfobox(event)
}

function buttonClickHandlerWithDialog(event) {
    toggleClickedStatus(event)
    showDialog(event)
}

// Run setup
setupMediaChangeHandler()
setupDialogCloseButtons()