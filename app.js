//Init classes
const github = new Github();
const ui = new UI();

// Search input
const searchUser = document.querySelector('#searchUser');


// Add eventListners
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userQuery = e.target.value;

  if(userQuery!== '') {
    // make http fetch call
    github.getUser(userQuery)
          .then(data => {
           if(data.profile.message === 'Not Found') {
             //show alert
             ui.showAlert('User not found', 'alert alert-danger');
           }
           else {
             //show profile
             ui.showProfile(data.profile);
             ui.showRepos(data.repos);
           }
          });
  }
  else {
    // clear profile
    ui.clearProfile();
  }
  e.preventDefault();
})