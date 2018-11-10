$(document).ready(() => {

  $('.buttOrange').on('click', () => {
    $('.clownfish').fadeIn('slow');
    $('.bluefish').fadeOut('slow');
    $('.fishbowl').fadeIn('slow');
    $('.stingray').fadeOut('slow');
  })

    $('.buttCart').on('click', () => {
      $('.clownfish').fadeOut('slow');
      $('.bluefish').fadeOut('slow');
      $('.fishbowl').fadeOut('slow');
      $('.stingray').fadeIn('slow');
    })

    $('.buttBlue').on('click', () => {
      $('.clownfish').fadeIn('slow');
      $('.bluefish').fadeIn('slow');
      $('.fishbowl').fadeOut('slow');
      $('.stingray').fadeOut('slow');
    })

    $('.buttAll').on('click', () => {
      $('.clownfish').fadeIn('slow');
      $('.bluefish').fadeIn('slow');
      $('.fishbowl').fadeIn('slow');
      $('.stingray').fadeIn('slow');
    })
})
