$(() => {
    /* add click event for open the main menu */
    $('.subHeader div:last img').click(() => {
        $('.menuContainer').css('display', 'block')
    })

    /* add click event for close the main menu */
    $('.menuContainer .row:first img').click(() => {
        $('.menuContainer').css('display', 'none')
    })
})