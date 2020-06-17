// create decorator with template which append to the dom
function WithTemplateFactory(template: string, target: string) {

    return function (constructor: any) {
        const targetEl = document.getElementById(target);
        // instantiate the constructor to access the members
        const c1 = new constructor('w');
        // add the template
        if (targetEl) {
            targetEl.innerHTML = template;
            const ElName = document.createElement('h2');
            ElName.textContent = c1.name;
            targetEl.appendChild(ElName);
        }


    }
}

@WithTemplateFactory('<p>Welcome</p>', 'app')
class Person3 {
    public name = 'walid';

    constructor() {
    }

}

