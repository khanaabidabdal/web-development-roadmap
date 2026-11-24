interface SuccessResponse{
    status:'success';
    data:string;
}

interface ErrorResponse{
    status:'error';
    message:string;
}

type ApiResponse=SuccessResponse|ErrorResponse;

function handleResponse(response:ApiResponse):string{
    if(response.status==='success'){
        return response.data;
    }
    return response.message;
}

let success:SuccessResponse={
    status:'success',
    data:'product loaded successfully'
};

let failure:ErrorResponse={
    status:'error',
    message:'Unable to load products'
};

console.log(handleResponse(success));
console.log(handleResponse(failure));