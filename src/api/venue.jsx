export const getVenues=async()=>{
    let response=await fetch("https://phtest.demosoftfruit.com/venue-api/");
    let venueData=await response.json();
    return venueData;
}