class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        
        this.innerHTML = `
        <header>
            <title>Package-Free Shopper</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </header>
        <body>
        <header class="p-3" style="position:sticky;top:0;z-index:1; background-color: #2A3258;">
                <div class="container">
                  <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                      <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
                    </a>
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none" style="padding-right: 25px">
                        <img src="images/Logo_timberwolf.png" alt="Logo" style="width:50px">
                        &nbsp;Refill.Me
                    </a>
                    <div class="vr"></div>
                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li class="nav-item">
                        
                        <a href="#homeSection" id="home" class="nav-link text-white" aria-current="page">
                            <!-- <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg>-->
                            Home
                        </a>
                        </li>

                        <li>
                            <div class="dropdown">
                                <a href="#" class="btn text-white dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                                    About
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#probSection">The Problem</a></li>
                                    <li><a class="dropdown-item" href="#solSection">The Solution</a></li>
                                    <li><a class="dropdown-item" href="#benefitSection">Benefits</a></li>
                                    <li><a class="dropdown-item" href="#teamSection">Team</a></li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <div class="dropdown">
                                <a href="#" class="btn text-white dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                                    Presentations
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#presentationOriginal">Original</a></li>
                                    <li><a class="dropdown-item" href="#presentationF1">Feasibility v1.0</a></li>
                                    <li><a class="dropdown-item" href="#presentationF2">Feasibility v2.0</a></li>
                                    <li><a class="dropdown-item" href="#presentationDesign">Design</a></li>
                                    <li><a class="dropdown-item" href="#presentationPrototype">Prototype</a></li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <div class="dropdown">
                                <a href="#" class="btn text-white dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                                    Deliverables
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#processFlows">Process Flows</a></li>
                                    <li><a class="dropdown-item" href="#mfcdCompetition">MFCD & Competition Matrix</a></li>
                                    <li><a class="dropdown-item" href="#riskMatrices">Risk Matrices</a></li>
                                    <li><a class="dropdown-item" href="#phoneMockups">Smartphone Mockups</a></li>
                                    <li><a class="dropdown-item" href="#tabletMockups">Tablet Mockups</a></li>
                                    <li><a class="dropdown-item" href="#algorithms">Algorithms</a></li>
                                    <li><a class="dropdown-item" href="#userStoriesSection">User Stories</a></li>
                                </ul>
                            </div>
                        </li>

			            <li>
			                <div class="dropdown">
                                <a href="#" class="btn text-white dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                                    Prototype
                                </a>
                                <ul class="dropdown-menu">
				                    <li><a class="dropdown-item" href="#weeklyDevReportSection">Weekly Development Reports</a></li>
                                    <li><a class="dropdown-item" href="#rwpVSprototypeSection">RWP vs Prototype</a></li>
                                    <li><a class="dropdown-item" href="#demoSection">Prototype Demos</a></li>
                                </ul>
                            </div>
                        </li>
			
                        <li>
                            <div class="dropdown">
                                <a href="#" class="btn text-white dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                                    Labs
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#labSection">Lab 1</a></li>
                                    <li><a class="dropdown-item" href="#lab2Section">Lab 2</a></li>
                                    <li><a class="dropdown-item" href="#lab3Section">Lab 3</a></li>
                                    <li><a class="dropdown-item" href="#lab4Section">Lab 4</a></li>
                                    <li><a class="dropdown-item" href="#glossarySection">Glossary Page</a></li>
                                    <li><a class="dropdown-item" href="#refSection">References</a></li>
                                </ul>
                            </div>
                        </li>

                        <li>
                        <a href="#posterSection" id="poster" class="nav-link text-white">
                           <!-- <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg> -->
                            Poster
                        </a>
                        </li>

                        <li>
                        <a href="#refSection" id="references" class="nav-link text-white">
                           <!-- <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg> -->
                            References
                        </a>
                        </li>
                    </ul>
                  </div>
                </div>
              </header>
      </body>
      `;
      }
  }

customElements.define('header-component', Header);
console.log(document.title);
switch(document.title){
    
    case 'Package-Free Shopper':
        Array.from(document.querySelectorAll('.nav-link')).forEach((el) => el.classList.remove('text-secondary'));
        document.getElementById("home");
        document.getElementById("home").classList.add("text-secondary");
        break;
    case 'Team Iron':
        Array.from(document.querySelectorAll('.nav-link')).forEach((el) => el.classList.remove('text-secondary'));
        document.getElementById("team").classList.remove("text-white");
        document.getElementById("team").classList.add("text-secondary");
        break;
    case 'Project Description':
        Array.from(document.querySelectorAll('.nav-link')).forEach((el) => el.classList.remove('text-secondary'));
        document.getElementById("projDesc").classList.remove("text-white");
        document.getElementById("projDesc").classList.add("text-secondary");
        break;
    case 'Presentations':
        Array.from(document.querySelectorAll('.nav-link')).forEach((el) => el.classList.remove('text-secondary'));
        document.getElementById("presentation").classList.remove("text-white");
        document.getElementById("presentation").classList.add("text-secondary");
        break;
    case 'Deliverables':
        Array.from(document.querySelectorAll('.nav-link')).forEach((el) => el.classList.remove('text-secondary'));
        document.getElementById("deliverables").classList.remove("text-white");
        document.getElementById("deliverables").classList.add("text-secondary");
        break;
    case 'User Stories':
        Array.from(document.querySelectorAll('.nav-link')).forEach((el) => el.classList.remove('text-secondary'));
        document.getElementById("userStories").classList.remove("text-white");
        document.getElementById("userStories").classList.add("text-secondary");
        break;
    case 'Prototype':
        Array.from(document.querySelectorAll('.nav-link')).forEach((el) => el.classList.remove('text-secondary'));
        document.getElementById("prototype").classList.remove("text-white");
        document.getElementById("prototype").classList.add("text-secondary");
        break;
    case 'References':
        Array.from(document.querySelectorAll('.nav-link')).forEach((el) => el.classList.remove('text-secondary'));
        document.getElementById("references").classList.remove("text-white");
        document.getElementById("references").classList.add("text-secondary");
        break;
    default:
        break;
}