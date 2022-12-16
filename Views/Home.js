
import { Layout, User } from "../app.js"

export default function Home(){

    const { Menu, Content } = Layout;

    const li = /*html*/`
    <li class="nav-item" role="presentation">
        <button class="nav-link active" id="pills-home-tab" 
                data-bs-toggle="pill" 
                data-bs-target="#pills-home" 
                type="button" 
                role="tab" 
                aria-controls="pills-home" 
                aria-selected="true">Home</button>
    </li>`

    const view = /*html*/`
    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
        <div class="card">
            <h5 class="card-header">Featured</h5>
            <div class="card-body">
                <h5 class="card-title">Hello ${User.name}!</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text">Email: ${User.email}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                <div class="mt-4" id="button-container"></div>
            </div>
        </div>
    </div>`

    $(Menu).append(li);
    $(Content).append(view);

    // If we wanted to add a bootstrap button using javascript instead of HTML;

    // const BtnContainer = document.getElementById('button-container');
    // const button = document.createElement('button');
    // BtnContainer.append(button)
    // button.innerText = 'test';
    // button.classList = 'btn btn-primary';
    // button.addEventListener('click', function(event){
    //     console.info(event);
    // });

    console.info({
        Layout,
        li,
        view,
    })

}