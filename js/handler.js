document.getElementById('btn-update-title').addEventListener('click',function(){
    const pageTitleElement=document.getElementById('page-title');
    console.log(pageTitleElement);
    pageTitleElement.innerText='Updated page title text.'});


    document.getElementById('btn-login').addEventListener('click',function(){
            const userInfoElement=document.getElementById('user-info');
            userInfoElement.innerText='User logged in successfully'
        });