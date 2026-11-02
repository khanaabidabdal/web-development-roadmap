function getUserProfile(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve({id:1,name:'Aabid'});
        },1000);
    });
}

function getNotifications(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(['New Message','System update']);
        },1500);
    });
}

function getAnalytics(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve({visitors:1200,sales:45})
        },2000);
    });
}

async function loadSequential(){
    console.time("Sequential");

    try{
        const profile= await getUserProfile();

        const notification=await getNotifications();

        const analytics=await getAnalytics();

        console.log("Profile: ",profile);
        console.log("Notification: ",notification);
        console.log("Analytics: ",analytics);
    } catch(error){
        console.error(error.message);
    } finally {
        console.timeEnd("Sequential");
    }
}

loadSequential();

async function loadConcurrent() {
    console.time("Concurrent");

    try{
        const [profile,notification,analytics]=
            await Promise.all([
                getUserProfile(),
                getNotifications(),
                getAnalytics()
        ]);

        console.log("Profile: ",profile);
        console.log("Notification: ",notification);
        console.log("Analytics: ",analytics);
    } catch (error){
        console.error(error.message);
    } finally{
        console.timeEnd('Concurrent');
    }
}

loadConcurrent();