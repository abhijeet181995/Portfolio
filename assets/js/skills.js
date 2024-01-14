AOS.init();


const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: " Koltin",
    cardImage: "assets/images/education-page/kotlin.jpg",
    level: "Intermediate",
  },
  {
    title: " Android",
    cardImage: "assets/images/education-page/android.jpg",
    level: "Intermediate",
  },
  {
    title: " BlockChain",
    cardImage: "assets/images/education-page/blockchain.png",
    level: "Intermediate",
  },
  {
    title: " Python",
    cardImage: "assets/images/education-page/python.png",
    level: "Advanced",
  },
  {
    title: "C/C++",
    cardImage: "assets/images/education-page/cplusplus.png",
    level: "Advanced",
  },
  {
    title: "MYSQL",
    cardImage: "assets/images/education-page/Mysql.png",
    level: "Intermediate",
  },
  {
    title: "Git/Github",
    cardImage: "assets/images/education-page/GitHub.jpg",
    level: "Intermediate",
  },
  {
    title: "Linux",
    cardImage: "assets/images/education-page/Linux.jpg",
    level: "Intermediate",
  },
  {
    title: "Web Development",
    cardImage: "assets/images/education-page/web.jpg",
    level: "Intermediate",
  },
  {
    title: "Pandas",
    cardImage: "assets/images/education-page/pandas.png",
    level: "Basic",
  },
  {
    title: "Django",
    cardImage: "assets/images/education-page/django.png",
    level: "Basic",
  },
  {
    title: "Numpy",
    cardImage: "assets/images/education-page/numpy.jpg",
    level: "Basic",
  },
  {
    title: "Docker",
    cardImage: "assets/images/education-page/docker.png",
    level: "Basic",
  },
  {
    title: "Machine Learning",
    cardImage: "assets/images/education-page/sklearn.png",
    level: "Intermediate",
  },
];



const showCards = () => {
    let output = "";
    moocscards.forEach(
      ({ title, cardImage, level }) =>
      (output += `        
          <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
              <div class="card mb-3 mx-auto">
                 <div class="content">
                    <div class="content-overlay"></div>
                      <img src=${cardImage} class="card-img-top content-image">
                  </div>
                  <div class="card-body">
                      <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title} <br> Level : ${level}</h6>
                  </div>
              </div>
          </div>        
        `)
    );
    moocs.innerHTML = output;
  };
  document.addEventListener("DOMContentLoaded", showCards);