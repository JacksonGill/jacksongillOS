let about = document.querySelector('.about');
let about3_container = document.querySelector('.about3-container');

// resume
let resume = document.querySelector('.resume');
let resume3_container = document.querySelector('.resume3-container');

let profile_picture = document.querySelector('.profile-picture');

// profile picture jpg
let sample_file = document.querySelector('.sample-file-container');

// all files
const allFilesContainer = document.querySelectorAll('.is-file');
const allFilesText = document.querySelectorAll('.is-file-text');

// all windows
const allWindows = document.querySelectorAll('.is-window');

// trash
let trash = document.querySelector('.trash');

// personal projects
let personal_projects = document.querySelector('.personal-projects');

let folder_container = document.querySelector('.folder-container');

let trash_icon_container = document.querySelector('.trash-icon-container');
// spotify dashboard
let spotify_dashboard_container = document.querySelector('.spotify-dashboard-container');
let exit_button_spotify_dashboard = document.querySelector('.exit-button-spotify-dashboard');
let spotify_dashboard_notepad = document.querySelector('.spotify-dashboard-notepad');
// fox vs cnn
let fox_vs_cnn_notepad = document.querySelector('.fox-vs-cnn-notepad');
let exit_button_fox_vs_cnn = document.querySelector('.exit-button-fox-vs-cnn');
let fox_cnn_container = document.querySelector('.fox-cnn-container');
// lily rain
let lilyrain_notepad = document.querySelector('.lilyrain-notepad');
let exit_button_lilyrain = document.querySelector('.exit-button-lilyrain');
let lilyrain_container = document.querySelector('.lilyrain-container');
// personal website
let personal_website_notepad = document.querySelector('.personal-website-notepad');
let exit_button_personal_website = document.querySelector('.exit-button-personal-website');
let personal_website_container = document.querySelector('.personal-website-container');
// bioinformatics
let bioinformatics_notepad = document.querySelector('.bioinformatics-notepad');
let exit_button_bioinformatics = document.querySelector('.exit-button-bioinformatics');
let bioinformatics_container = document.querySelector('.bioinformatics-container');
// terminal
let terminal = document.querySelector('.terminal');
let exit_button_terminal = document.querySelector('.exit-button-terminal');
let settings_container = document.querySelector('.settings-container');
// sys version
let sys_version = document.querySelector('.sys-version-window');
let exit_button_sys_version = document.querySelector('.exit-button-sys-version');
let sys_version_container = document.querySelector('.sys-version-container');
// io window
let io_window = document.querySelector('.io-window');
let exit_button_io = document.querySelector('.exit-button-io');
let io_container = document.querySelector('.printer-container');

let about_notepad = document.querySelector('.about-notepad');
let resume_notepad = document.querySelector('.resume-notepad');

let exit_button_about = document.querySelector('.exit-button-about');
let exit_button_resume = document.querySelector('.exit-button-resume');
let exit_button_profile_picture = document.querySelector('.exit-button-profile-picture');
let exit_button_trash = document.querySelector('.exit-button-trash');

let exit_botton_personal_projects = document.querySelector('.exit-button-personal-projects');

let welcome = document.querySelector('.welcome');

setTimeout(() => {
  welcome.className = 'no-show';
  document.body.classList.add('animate__fadeIn');
  about_notepad.classList.remove('no-show');

  setTimeout(() => {
    resume_notepad.classList.remove('no-show');
  }, 500);
  setTimeout(() => {
    profile_picture.classList.remove('no-show');
  }, 800);
  setTimeout(() => {
    personal_projects.classList.remove('no-show');
  }, 1200);
}, 3600);

// DISPLAY CURRENT TIME
setInterval(() => {
  let date = document.querySelector('.date');
  let timeNow = new Date();
  if (window.innerWidth <= 500) {
    date.textContent = timeNow.toDateString();
  } else {
    date.textContent = timeNow.toUTCString();
  }
}, 1000);

// Z-INDEX MANAGER
allWindows.forEach((window, index) => {
  window.addEventListener('click', () => {
    window.classList.remove('is-inactive');
    window.classList.add('is-active');
    for (let i = 0; i < allWindows.length; i++) {
      if (i != index) {
        allWindows[i].classList.remove('is-active');
        allWindows[i].classList.add('is-inactive');
      }
    }
  });
});

// FILE TEXT HIGHLIGHTING ON HOVER
allFilesContainer.forEach((file, index) => {
  file.addEventListener('mouseenter', () => {
    allFilesText[index].classList.add('file-text-selected');
  });
  file.addEventListener('mouseleave', () => {
    allFilesText[index].classList.remove('file-text-selected');
  });
});

const handleExitButtons = (exitButton, window) => {
  exitButton.addEventListener('click', () => {
    window.classList.add('animate__fadeOut');
    window.classList.add('no-show');
  });
};

// ALL EXIT BUTTONS
handleExitButtons(exit_button_about, about_notepad);
handleExitButtons(exit_button_resume, resume_notepad);
handleExitButtons(exit_button_profile_picture, profile_picture);
handleExitButtons(exit_button_trash, trash);
handleExitButtons(exit_botton_personal_projects, personal_projects);
handleExitButtons(exit_button_spotify_dashboard, spotify_dashboard_notepad);
handleExitButtons(exit_button_fox_vs_cnn, fox_vs_cnn_notepad);
handleExitButtons(exit_button_lilyrain, lilyrain_notepad);
handleExitButtons(exit_button_personal_website, personal_website_notepad);
handleExitButtons(exit_button_bioinformatics, bioinformatics_notepad);
handleExitButtons(exit_button_terminal, terminal);
handleExitButtons(exit_button_sys_version, sys_version);
handleExitButtons(exit_button_io, io_window);

const handleFileDblClick = (fileContainer, window) => {
  fileContainer.addEventListener('click', () => {
    if (window.classList.contains('animate__fadeOut') || window.classList.contains('no-show')) {
      window.classList.remove('animate__fadeOut');
      window.classList.remove('no-show');
      window.classList.add('animate__fadeIn');
    }
  });
};

// ALL DOUBLE CLICK FILE ICONS
handleFileDblClick(about, about_notepad);
handleFileDblClick(about3_container, about_notepad);
handleFileDblClick(resume, resume_notepad);
handleFileDblClick(resume3_container, resume_notepad);
handleFileDblClick(sample_file, profile_picture);
handleFileDblClick(trash_icon_container, trash);
handleFileDblClick(folder_container, personal_projects);
handleFileDblClick(spotify_dashboard_container, spotify_dashboard_notepad);
handleFileDblClick(fox_cnn_container, fox_vs_cnn_notepad);
handleFileDblClick(lilyrain_container, lilyrain_notepad);
handleFileDblClick(personal_website_container, personal_website_notepad);
handleFileDblClick(bioinformatics_container, bioinformatics_notepad);
handleFileDblClick(settings_container, terminal);
handleFileDblClick(sys_version_container, sys_version);
handleFileDblClick(io_container, io_window);

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.querySelector('.dropdown-content').classList.toggle('show');
}

window.onclick = (event) => {
  if (!event.target.matches('.theme')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
