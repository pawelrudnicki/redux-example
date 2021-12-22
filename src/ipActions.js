export function getIpAddressInformation(address = "79.186.213.87") {
    return function (dispatch) {
        dispatch({type: "GET_IP_ADDRESS_PENDING"});
        const promise = new Promise(((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 5000);
        }));
        promise.then((result) => {
            console.log("API ODPOWIEDZIALO");
            dispatch({type: "GET_IP_ADDRESS_FULFILLED", payload: "LOKALIZACJA: GDANSK"})
        })
    }
}