$(document).ready(function () {
  $('#get-started-btn').on('click', PageInfo);
});

function PageInfo() {
  console.log('clicked');
  var nameofcompany = document.getElementById('company-name').value;
  //   if (nameofcompany === '') {
  //     console.log(nameofcompany);
  //     $('#name-required').text('Please Enter The Name of your Company.');
  //     $(window).scrollTop(0);
  //     return;
  //   }
  var headerofcompany = document.getElementById('header').value;
  var backgroundChoice = $('input[name=background]:checked').val();
  var bulletone = document.getElementById('first-point').value;
  var bullettwo = document.getElementById('second-point').value;
  var formtitle = document.getElementById('title').value;
  var formdescription = document.getElementById('form-desc').value;

  const newPage = landingPageData(
    backgroundChoice,
    nameofcompany,
    headerofcompany,
    bulletone,
    bullettwo,
    formtitle,
    formdescription
  );
  console.log('Page Created, ' + newPage);
  $('#app').html(newPage);
  $(window).scrollTop(0);
}

function landingPageData(
  backgroundChoice,
  nameofcompany,
  headerofcompany,
  bulletone,
  bullettwo,
  formdescription,
  formtitle
) {
  return `<div class="columns">
  <div class="column">
      <section class="hero is-large background" style="background-image: url('${backgroundChoice}');">
          <div class="hero-head">
              <nav class="navbar">
                  <div class="container">
                      <div class="navbar-brand">
                          <a class="navbar-item">
                          </a>
                          <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                              <span></span>
                              <span></span>
                              <span></span>
                          </span>
                      </div>

                  </div>
              </nav>
          </div>

          <div class="hero-body">
              <div class="container has-text-centered">
                  <p class="title">
                      <div class='nameofcompany'>
                      <h1>${nameofcompany}</h1>
                      </div>
                  </p>

                  <p class="subtitle">
                      <div class='headerofcompany'>${headerofcompany}</div>
                  </p>
                  <br>
                  <br>
                  <div class=" columns">
                      <div class="column bulletpoints">

                          <ul>
                              <li> 
                                      <div class='bulletone'>1.${bulletone}</div>
                              </li>
                              <br>
                              <li>
                                      <div class='bullettwo'>2.${bullettwo}</div>
                              </li>
                            
                          </ul>
                      </div>
                

                  <div class="container has-text-centered">
                      
                      <div class="cards">
                      
                          <div class="tile is-ancestor">
                                 
                              <div class="tile is-parent" id="card1">
                                  <article class="tile is-child box">
                                      <p>
                                              <p class="title has-text-centered">
                                                      <div class='formtitle'>${formtitle}</div></p>
                      
                                                  <p class="subtitle has-text-centered">
                                                      <div class='formsubtitle'>${formdescription}</div> </p>

                                          <div class="field is-horizontal">
                                              <div class="field-label">
                                                  <label class="label">1. NAME:</label>
                                              </div>
                                              <div class="field-body">
                                                  <div class="field is-narrow">
                                                      <div class="control">
                                                          <label class="radio">
                                                              <input type="text" name="member">
                                                          </label>
                                                          
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="field is-horizontal">
                                                  <div class="field-label">
                                                      <label class="label">2. EMAIL:</label>
                                                  </div>
                                                  <div class="field-body">
                                                      <div class="field is-narrow">
                                                          <div class="control">
                                                              <label class="radio">
                                                                  <input type="text" name="member">
                                                              </label>
                                                              
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="field is-grouped">
                                                      <div class="control">
                                                          <button class="button is-link">Submit</button>
                                                      </div>
                                                  </article>
                                                  <br>
                                                  <br>
                                                    
                                                  </div>   
                                                  </p>           
      </section>


      

  </div>
</div>
`;
}
