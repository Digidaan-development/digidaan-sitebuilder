$(".w95-window").draggable({
  handle: ".card-header",
  containment: "window"
})

$(".w95-window").resizable({
  animate: true
});

$("#menuToggle").click(function () {
  $(".w95-startmenu").toggleClass("hidden");
});

// close modal when clicking outside of it
$(document).click(function (e) {
  if ($(e.target).is('#menuToggle')) {
    document.querySelector(".w95-startmenu").classList.remove("hidden");
  }
  else if (!$(e.target).is('.w95-startmenu')) {
    document.querySelector(".w95-startmenu").classList.add("hidden");
  }
});


const modalOptions = {
  'profileModal': {
    'icon': 'users-2.png',
    'title': 'Profile'
  },
  'aboutModal': {
    'icon': 'help_question_mark-0.png',
    'title': 'About Me'
  },
  'projectModal': {
    'icon': 'web_file_set-0.png',
    'title': 'Projects'
  },
  'experienceModal': {
    'icon': 'user_card.png',
    'title': 'Experience'
  },
  'computerModal': {
    'icon': 'computer-5.png',
    'title': 'My Computer'
  },
  'contactModal': {
    'icon': 'envelope_closed-0.png',
    'title': 'Contact'
  },

}

// Define an array to store the modals that are currently open
let openModals = [];

// This function will open a modal and add it to the openModals array
function openModal(modalId) {
  $('#' + modalId).modal('show')
  selectModal(modalId)
  // if openmodals does not contain the current id then add it to the array
  if (!openModals.includes(modalId)) {
    openModals.push(modalId)
    updateTaskbar()
  }
}

// This function will close a modal and remove it from the openModals array
function closeModal(modalId) {
  $('#' + modalId).modal('hide')

  openModals = openModals.filter(e => e !== modalId); // will return ['A', 'C']
  updateTaskbar()
}


// bind the navbar html items to the openModals array
function updateTaskbar() {
  let taskbarHtml = `
  <li class="nav-item">
                <a href="#" class="nav-link" role="button">
                    <span class="nav-link-inner-text"><img src="./img/w95-icon.png" width="25"> Start</span>
                </a>
            </li>
  `

  // loop through the openModals array
  openModals.forEach(function (modalId) {
    let modalInfo = modalOptions[modalId]
    taskbarHtml += `
    <li class="nav-item navbar-tab">
      <button onclick="openModal('${modalId}'); selectModal('${modalId}')" href="#" class="nav-link" role="button">
        <span class="nav-link-inner-text"><img width='20' src="./img/${modalInfo.icon}" /> ${modalInfo.title}</span>
      </button>
    </li>
    `
  })
  $('#navbar').html(taskbarHtml)
}

function selectModal(modalId) {
  // close all open modals
  openModals.forEach(function (otherModals) {
    document.querySelector('#' + otherModals).classList.remove('selectedModal')
  })
  // open the selected modal
  console.log(modalId)
  document.querySelector('#' + modalId).classList.add('selectedModal')
}