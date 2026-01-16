const form = document.querySelector(`.feedback-form`);
const STORAGE_KEY = `feedback-form-state`;

let formData ={
    email: ``,
    message: ``,
} 

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData){
    try{
    formData = JSON.parse(savedData);

    form.elements.email.value = formData.email ?? ``;
    form.elements.message.value = formData.message ?? ``;
} catch (error) {
    localStorage.removeItem(STORAGE_KEY);
}
}
form.addEventListener(`input`, e => {
    const { name, value } = e.target;

    if (name !== `email` && name !== `message`) return;
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});
form.addEventListener(`submit`, e => {
    e.preventDefault();

    if (formData.email === `` || formData.message === ``) {
        alert(`Lütfen tüm alanları doldurun.`);
        return;
    }
    console.log(formData);
    form.reset();
formData = {
    email: ``,
    message: ``,
};
});