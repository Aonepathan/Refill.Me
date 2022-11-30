class SideBar extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        
        this.innerHTML = `
        <header>
        <title>Package-Free Shopper</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <link href="index.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.2/css/fontawesome.min.css" integrity="sha384-X8QTME3FCg1DLb58++lPvsjbQoCT9bp3MsUU3grbIny/3ZwUJkRNO8NPW6zqzuW9" crossorigin="anonymous">
        </header>
        <body>
        <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style="width: 280; height: 100%;">
        <a href="#" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg class="bi pe-none me-2" width="20" height="32"><use xlink:href="#bootstrap"></use></svg>
          <span class="fs-5">Package-Free Shopper</span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a href="../website/index.html" id="home" class="nav-link text-white" aria-current="page">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
              Home
            </a>
          </li>
          <li>
            <a href="../~410iron/team" id="team" class="nav-link text-white" onclick="setActive('team')">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
                Team
            </a>
          </li>
          <li>
            <a href="../~410iron/projDesc" id="projDesc" class="nav-link text-white">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
              Problem Description
            </a>
          </li>
          <li>
            <a href="../~410iron/presentation" id="presentation" class="nav-link text-white">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
              Presentations
            </a>
          </li>
          <li>
            <a href="../~410iron/references" id="references" class="nav-link text-white">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
              References
            </a>
          </li>
        </ul>
        <hr>
        <div class="">
          <a href="#" class="d-flex align-items-center text-white text-decoration-none" style="text-align: center;">
            <strong>Team Iron</strong>
          </a>
        </div>
      </div>
      </body>
        `;
      }
  }

customElements.define('side-bar', SideBar);

switch(document.title){
    case 'Package-Free Shopper':
        Array.from(document.querySelectorAll('.nav-link')).forEach((el) => el.classList.remove('active'));
        document.getElementById("home").classList.add("active");
        break;
    case 'Team Iron':
        Array.from(document.querySelectorAll('.nav-link')).forEach((el) => el.classList.remove('active'));
        document.getElementById("team").classList.add("active");
        break;
    case 'Project Description':
        Array.from(document.querySelectorAll('.nav-link')).forEach((el) => el.classList.remove('active'));
        document.getElementById("projDesc").classList.add("active");
        break;
    case 'Presentations':
        Array.from(document.querySelectorAll('.nav-link')).forEach((el) => el.classList.remove('active'));
        document.getElementById("presentation").classList.add("active");
        break;
    case 'References':
        Array.from(document.querySelectorAll('.nav-link')).forEach((el) => el.classList.remove('active'));
        document.getElementById("references").classList.add("active");
        break;
    default:
        break;
}