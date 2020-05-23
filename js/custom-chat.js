$(document).ready(function() {

  customWindowHide()

  zE(function() {
    $zopim(function() {
      $zopim.livechat.button.hide();
      $zopim.livechat.window.onHide(function() {
        $zopim.livechat.button.hide();
        customWindowHide()
      });
    })
  });


  $('.chat-click-donation').on('click', function() {
    customChatDonation()
  });


  $('.chat-click-help').on('click', function() {
    $('.chat-welcome').addClass('chat-hide')
    $('.chat-help-request').removeClass('chat-hide')
  });

  $('.chat-help-request .chat-cancel-btn').on('click', function() {
    $('.chat-help-request').addClass('chat-hide')
    $('.chat-welcome').removeClass('chat-hide')

  });

  $('.chat-help-request .chat-confirm-btn').on('click', function() {
    customChatSubmit('.chat-help-request', '[PARAM:SUBJECT]');
  });


  $('.chat-click-general').on('click', function() {
    $('.chat-welcome').addClass('chat-hide')
    $('.chat-general-request').removeClass('chat-hide')
  });

  $('.chat-general-request .chat-cancel-btn').on('click', function() {
    $('.chat-general-request').addClass('chat-hide')
    $('.chat-welcome').removeClass('chat-hide')

  });

  $('.chat-general-request .chat-confirm-btn').on('click', function() {
    customChatSubmit('.chat-general-request', '[PARAM:SUBJECT]');
  });


});

function customWindowDefaults() {
  $('.chat-welcome').removeClass('chat-hide')
  $('.chat-help-request').addClass('chat-hide')
  $('.chat-general-request').addClass('chat-hide')

}

function customWindowHide() {
  $('.chat-main-container').fadeOut("slow");
  $('.new-chat-icon').fadeIn("slow");
  if ($('.new-chat-icon').hasClass('chat-hide')) {
    $('.new-chat-icon').removeClass("chat-hide");
  }
  if (!$('.chat-main-container').hasClass('chat-hide')) {
    $('.chat-main-container').addClass("chat-hide");
  }

  customWindowDefaults()
}


function customWindowShow() {
  if ($('.chat-main-container').hasClass('chat-hide')) {
    $('.chat-main-container').removeClass("chat-hide");
  }

  $('.chat-main-container').fadeIn("slow");
  $('.new-chat-icon').fadeOut("slow");
  if (!$('.new-chat-icon').hasClass('chat-hide')) {
    $('.new-chat-icon').addClass("chat-hide");
  }
}

function customChatDonation() {
  if (!$('.chat-main-container').hasClass('chat-hide')) {
    $('.chat-main-container').addClass("chat-hide");
  }
  if (!$('.new-chat-icon').hasClass('chat-hide')) {
    $('.new-chat-icon').addClass("chat-hide");
  }

  zE(function() {
    $zopim(function() {
      $zopim.livechat.button.show();
      $zopim.livechat.window.show();
    })
  })
}


function customChatSubmit(request_form, subject) {
  var name = $(request_form + ' .chat-name').val();
  var mob = $(request_form + ' .chat-mobile').val();
  var message = $(request_form + ' .chat-comment').val();

  if (name.length === 0) {
    $(request_form + ' .chat-error').text('Name is Required');
    return
  }

  if (mob.length === 0) {
    $(request_form + ' .chat-error').text('Mobile is Required');
    return
  }

  if (message.length === 0) {
    $(request_form + ' .chat-error').text('Message cannot be empty');
    return
  }

  $(request_form + ' .chat-error').text('');
  $(request_form + ' .chat-wait').removeClass('chat-hide')



  var dataToSend = {
    name: name,
    message: message,
    subject: subject,
    mobile: mob
  };


  $.ajax({
    url: "[YOUR API URL]",
    data: dataToSend,
    type: 'POST',
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      // error
    },
    success: function(result) {
      $(request_form + ' .chat-wait').addClass('chat-hide')
      if (result == 1) {
        $(request_form + ' .chat-error').text('');
        $(request_form + ' .chat-success').text('Your message was submitted');
      } else {
        $(request_form + ' .chat-error').text('error occured');
      }
    }
  });


}
