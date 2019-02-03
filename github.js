class Github {
  constructor() {
    this.clientID = "d48b7821c57504aa66eb";
    this.clientSecret = "0abf3ab57dc3e6c003dbe9d8126666c17c35db91";
    this.reposCount = 5;
    this.reposSort = 'created: asc';
    //https://api.github.com/users/brad?client_id=d48b7821c57504aa66eb&client_secret=0abf3ab57dc3e6c003dbe9d8126666c17c35db91
  }

  async getUser(user) {
    const profileReponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);
    const profileData = await profileReponse.json();

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientID}&client_secret=${this.clientSecret}`);
    const reposData = await reposResponse.json();


    return {
      profile: profileData,
      repos: reposData
    }
  }

}